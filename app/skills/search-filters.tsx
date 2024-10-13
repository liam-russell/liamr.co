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
            <label className="block font-serif font-medium text-gray-700">Minimum proficiency:</label>
            <div className="flex flex-row flex-wrap gap-2">
                {Object.values(SkillProficiency).filter(isNumber).map((proficiency) => <ProficiencyBadge
                    key={proficiency}
                    proficiency={proficiency}
                    active={proficiency == minProficiency}
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
            <label className="block font-serif font-medium text-gray-700">Skill categories:</label>
            <div className="flex flex-row flex-wrap gap-2">
                {Object.values(SkillCategory).filter(isString).map((category) => <button
                    key={category}
                    className={`rounded-full border-2 px-2 py-1 font-serif text-sm font-medium transition-colors ${categories.includes(category) ? 'border-blue-200 bg-blue-800 text-white' : 'border-gray-300 bg-white text-gray-700'}`}
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