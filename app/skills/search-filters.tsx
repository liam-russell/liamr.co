'use client';
import ProficiencyBadge from "@/components/proficiency-badge";
import { categoryTitles, SkillCategory } from "@/skills/skill-categories";
import { SkillProficiency } from "@/skills/skill-proficiency";
import { isNumber, isString } from "lodash-es";
import { useRouter, useSearchParams } from "next/navigation";
import { stringify } from "querystring";
import { useCallback } from "react";

export function SearchFilters() {
    const searchParams = useSearchParams();

    const categories = searchParams.getAll('categories') as SkillCategory[];
    const minProficiency = searchParams.get('minProficiency') as SkillProficiency | null;

    const router = useRouter();

    const getUrl = useCallback((options: {
        categories?: SkillCategory[],
        minProficiency?: SkillProficiency,
    }) => '/skills?' + stringify({
        ...Object.fromEntries(searchParams),
        ...options,
    }), [searchParams]);

    return <div>
        <div className="my-3 flex flex-col gap-2">
            <label className="block font-serif text-sm font-medium uppercase tracking-wider text-muted">Minimum proficiency:</label>
            <div className="flex flex-row flex-wrap gap-2" role="group" aria-label="Filter by minimum proficiency">
                {(Object.values(SkillProficiency).filter(isNumber) as SkillProficiency[]).map((proficiency) => <ProficiencyBadge
                    key={proficiency}
                    proficiency={proficiency}
                    active={proficiency == minProficiency}
                    aria-pressed={proficiency == minProficiency}
                    onClick={() => {
                        if (proficiency == minProficiency) {
                            router.push(getUrl({ minProficiency: SkillProficiency.Learning }));
                        } else {
                            router.push(getUrl({ minProficiency: proficiency }));
                        }
                    }}
                />)}
            </div>
        </div>
        <div className="my-3 flex flex-col gap-2">
            <label className="block font-serif text-sm font-medium uppercase tracking-wider text-muted">Skill categories:</label>
            <div className="flex flex-row flex-wrap gap-2" role="group" aria-label="Filter by skill category">
                {Object.values(SkillCategory).filter(isString).map((category) => <button
                    key={category}
                    aria-pressed={categories.includes(category)}
                    className={`rounded-full border px-3 py-1.5 font-serif text-sm font-medium transition-all ${categories.includes(category) ? 'border-blue-400/40 bg-blue-500/20 text-blue-700 shadow-md shadow-blue-500/10 dark:text-blue-200' : 'border-border bg-surface text-muted hover:border-blue-300/30 hover:bg-surface-hover hover:text-foreground'}`}
                    onClick={() => {
                        if (categories.includes(category)) {
                            router.push(getUrl({ categories: categories.filter(c => c != category) }));
                        } else {
                            router.push(getUrl({ categories: [...categories, category] }));
                        }
                    }}
                >
                    {categoryTitles[category]}
                </button>)}
            </div>
        </div>
    </div>;
}