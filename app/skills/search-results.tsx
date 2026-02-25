'use client';

import ProficiencyBadge from "@/components/proficiency-badge";
import { SkillCategory } from "@/skills/skill-categories";
import { SkillProficiency } from "@/skills/skill-proficiency";
import { Skill } from "@/skills/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { stringify } from "querystring";
import { useEffect } from "react";

export default function SearchResults() {
    const params = useSearchParams();
    const query = params.get('query');
    const minProficiency = params.get('minProficiency') as SkillProficiency | null;
    const categories = params.getAll('categories') as SkillCategory[];
    const [ref, entry] = useIntersectionObserver({
        threshold: 0,
        root: null,
        rootMargin: "0px",
    })

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ['skills', query, minProficiency, categories],
        queryFn: async ({ pageParam = 1 }) => {
            const res = await fetch('/skills/api?' + stringify({
                page: pageParam,
                query,
                minProficiency,
                categories
            }));
            return (await res.json()) as {
                results: Skill[];
                totalPages: number;
                currentPage: number
            };
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.currentPage < lastPage.totalPages ? lastPage.currentPage + 1 : undefined,
    });

    useEffect(() => {
        if (entry?.isIntersecting && hasNextPage && !isFetching && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [entry?.isIntersecting, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage]);

    if (error) {
        throw error;
    }

    return (
        <div>
            <div className="divide-y divide-border">
                {data?.pages.flatMap((page) => page.results.map((skill) => (
                    <Link key={skill.key} className="group block p-5 transition-colors hover:bg-surface-hover" href={`/skills/${skill.key}`} prefetch={false}>
                        <h2 className="flex flex-row items-center font-serif text-xl font-bold text-foreground transition-colors group-hover:text-blue-500">
                            {skill.title}
                            <ProficiencyBadge proficiency={skill.proficiency} className="ml-3" />
                        </h2>
                        <p className="mt-1 text-sm text-muted">{skill.description}</p>
                    </Link>
                )))}
            </div>
            {status === 'pending' && (
                <div className="block p-5 text-center text-sm italic text-muted">Loading...</div>
            )}
            {status === 'success' && data.pages.flatMap((page) => page.results).length === 0 && (
                <div className="block p-5 text-center text-sm italic text-muted">No matching skills found.</div>
            )}
            {hasNextPage && (
                <div
                    className="size-1"
                    ref={ref}
                />
            )}
        </div>
    );
}