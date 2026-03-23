import skills from "@/skills/data/skills";
import { getSkillIcon } from "@/skills/icons";
import searcher from "@/skills/searcher";
import { SkillCategory } from "@/skills/skill-categories";
import { SkillProficiency } from "@/skills/skill-proficiency";
import sortBy from "lodash-es/sortBy";
import { unstable_cache } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const getCachedSearch = unstable_cache(
    async (query: string | null, page: number, minProficiency: SkillProficiency | null, categories: SkillCategory[]) => {
        let results = sortBy(
            skills,
            x => -x.proficiency,
            x => x.title.toLocaleLowerCase().replaceAll(/[^a-z]/g, ''),
        );

        if (query) {
            results = searcher.search(query).map((result) => skills.find((skill) => skill.key === result.key)!);
        }

        if (minProficiency) {
            results = results.filter((skill) => skill.proficiency >= minProficiency);
        }

        if (categories.length) {
            results = results.filter((skill) => categories.some(c => (skill.categories as SkillCategory[]).includes(c)));
        }

        const totalPages = Math.ceil(results.length / 10);
        const pageResults = results.slice((page - 1) * 10, page * 10);

        return {
            results: pageResults.map(skill => ({
                ...skill,
                icon: getSkillIcon(skill.key, skill.title),
            })),
            totalPages,
            currentPage: page,
        };
    },
    ['skillSearch'],
    {
        revalidate: 60 * 60 * 24, // 24 hours
    }
)

export const GET = async (req: NextRequest) => {
    const query = req.nextUrl.searchParams.get('query') || null;
    const page = parseInt(req.nextUrl.searchParams.get('page') ?? '1', 10);
    const minProficiency = (req.nextUrl.searchParams.get('minProficiency') || null) as SkillProficiency | null;
    const categories = req.nextUrl.searchParams.getAll('categories').filter(Boolean) as SkillCategory[];

    return NextResponse.json(await getCachedSearch(query, page, minProficiency, categories));
};