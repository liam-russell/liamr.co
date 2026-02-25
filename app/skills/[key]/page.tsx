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

    return <div className="mt-12 animate-fade-in">
        <BackButton />
        <h1 className="mb-2 mt-4 flex flex-row items-center font-serif text-4xl font-semibold tracking-tight text-foreground">
            {skill.title}
            <ProficiencyBadge proficiency={skill.proficiency} className="ml-4 text-lg" />
        </h1>
        {skill.description && <div className="glass-card relative mt-4 rounded-xl p-6 pr-14 text-muted">
            {skill.description}
            <QuoteIcon size={48} className='absolute right-3 top-3 text-blue-500/10' aria-hidden='true' />
        </div>}
        {skill.subSkills && <div className="mt-6">
            <h2 className="mb-2 font-serif text-sm font-bold uppercase tracking-wider text-muted">Focus areas</h2>
            <div className="flex flex-row flex-wrap gap-2">
                {skill.subSkills.map((subSkill) => <a
                    key={subSkill.name}
                    className="hover-lift rounded-lg border border-border bg-surface px-3 py-1.5 font-serif text-sm font-medium text-muted transition-colors hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-300"
                    href={subSkill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {subSkill.name}
                </a>)}
            </div>
        </div>}
        {skill.categories.length > 0 && <div className="mt-6">
            <h2 className="mb-2 font-serif text-sm font-bold uppercase tracking-wider text-muted">Skill categories</h2>
            <div className="flex flex-row flex-wrap gap-2">
                {skill.categories.map((category) => <Link
                    key={category}
                    href={`/skills?categories=${category}`}
                    className="hover-lift rounded-lg border border-border bg-surface px-3 py-1.5 font-serif text-sm font-medium text-muted transition-colors hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-300"
                    prefetch={false}
                >
                    {categoryTitles[category]}
                </Link>)}
            </div>
        </div>}
        {(skill.relatedSkillKeys?.length ?? 0) > 0 && <div className="mt-6">
            <h2 className="mb-2 font-serif text-sm font-bold uppercase tracking-wider text-muted">Related skills</h2>
            <div className="flex flex-row flex-wrap gap-2">
                {skill.relatedSkillKeys!.map((relatedSkillKey) => {
                    const relatedSkill = skills.find((skill) => skill.key === relatedSkillKey);

                    if (!relatedSkill) {
                        console.warn(`Related skill ${relatedSkillKey} not found`);
                        return null;
                    }

                    return <Link
                        key={relatedSkillKey}
                        href={`/skills/${relatedSkillKey}`}
                        className="hover-lift rounded-lg border border-border bg-surface px-3 py-1.5 font-serif text-sm font-medium text-muted transition-colors hover:border-sky-400/30 hover:bg-sky-500/10 hover:text-sky-600 dark:hover:text-sky-300"
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
            className="group mt-6 flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-sky-500 p-3.5 font-serif text-lg font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:brightness-110"
            target="_blank"
            rel="noopener noreferrer"
        >
            <ExternalLinkIcon size={18} className="-mt-0.5" aria-hidden="true" />
            Learn more
        </a>}
    </div>
}

export async function generateStaticParams() {
    return skills.map((skill) => ({
        key: skill.key,
    }))
}