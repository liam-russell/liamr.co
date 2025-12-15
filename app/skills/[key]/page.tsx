import ProficiencyBadge from "@/components/proficiency-badge";
import skills from "@/skills/data/skills";
import { ExternalLinkIcon, QuoteIcon } from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import BackButton from "./back-button";
import Link from "next/link";
import { categoryTitles } from "@/skills/skill-categories";

export async function generateMetadata({ params }: {
    params: Promise<{ key: string }>
}): Promise<Metadata> {
    const { key } = await params;
    const skill = skills.find((skill) => skill.key === key);

    if (!skill) {
        return {
            title: "Skill not found",
            description: "The skill you are looking for does not exist",
        }
    }

    return {
        title: skill.title,
        description: skill.description,
    };
}

export default async function SkillPage({ params }: { params: Promise<{ key: string }> }) {
    const { key } = await params;
    const skill = skills.find((skill) => skill.key === key);

    if (!skill) {
        return notFound();
    }

    return <div className="mt-12">
        <BackButton />
        <h1 className="mb-2 mt-3 flex flex-row items-center font-serif text-4xl font-semibold uppercase text-blue-900">
            {skill.title}
            <ProficiencyBadge proficiency={skill.proficiency} className="ml-5 text-2xl" />
        </h1>
        {skill.description && <div className="relative mt-4 rounded-sm bg-white p-5 pr-14 shadow-lg">
            {skill.description}
            <QuoteIcon size={48} className='absolute right-0 top-0 text-blue-900 opacity-10' />
        </div>}
        {skill.subSkills && <div className="mt-5">
            <h2 className="font-serif text-xl font-bold text-blue-900">Focus areas</h2>
            <div className="flex flex-row flex-wrap gap-1">
                {skill.subSkills.map((subSkill) => <a
                    key={subSkill.name}
                    className="rounded-full border-2 border-blue-900/10 bg-white px-3 py-1 font-serif font-medium text-blue-900 transition-colors hover:bg-blue-100"
                    href={subSkill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {subSkill.name}
                </a>)}
            </div>
        </div>}
        {skill.categories.length > 0 && <div className="mt-5">
            <h2 className="font-serif text-xl font-bold text-blue-900">Skill categories</h2>
            <div className="mt-2 flex flex-row flex-wrap gap-2">
                {skill.categories.map((category) => <Link
                    key={category}
                    href={`/skills?categories=${category}`}
                    className="rounded-full border-2 border-blue-900/10 bg-white px-3 py-1 font-serif font-medium text-blue-900 transition-colors hover:bg-blue-100"
                    prefetch={false}
                >
                    {categoryTitles[category]}
                </Link>)}
            </div>
        </div>}
        {(skill.relatedSkillKeys?.length ?? 0) > 0 && <div className="mt-5">
            <h2 className="font-serif text-xl font-bold text-blue-900">Related skills</h2>
            <div className="mt-2 flex flex-row flex-wrap gap-2">
                {skill.relatedSkillKeys!.map((relatedSkillKey) => {
                    const relatedSkill = skills.find((skill) => skill.key === relatedSkillKey);

                    if (!relatedSkill) {
                        console.warn(`Related skill ${relatedSkillKey} not found`);
                        return null;
                    }

                    return <Link
                        key={relatedSkillKey}
                        href={`/skills/${relatedSkillKey}`}
                        className="rounded-full border-2 border-blue-900/10 bg-white px-3 py-1 font-serif font-medium text-blue-900 transition-colors hover:bg-blue-100"
                        prefetch={false}
                    >
                        {relatedSkill?.title || relatedSkillKey}
                    </Link>
                }
                )}
            </div>
        </div>}
        {skill.link && <a
            href={skill.link}
            className="mt-5 block rounded-sm bg-blue-900 p-3 text-center font-serif text-lg font-medium text-white"
            target="_blank"
            rel="noopener noreferrer"
        >
            <ExternalLinkIcon size={20} className="-mt-1 mr-2 inline-block" />
            Learn more
        </a>}
    </div>
}

export async function generateStaticParams() {
    return skills.map((skill) => ({
        key: skill.key,
    }))
}