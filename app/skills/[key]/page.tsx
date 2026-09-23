import { ArrowLeftIcon, ExternalLinkIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import FanIn from "@/components/skills/fan-in";
import HomeLink from "@/components/skills/home-link";
import { RingIcon, SkillGlyph, skillColorVars } from "@/components/skills/ring-icon";
import { areaById } from "@/skills/areas";
import { browserData, browserSkillByKey } from "@/skills/browser-data";
import { hostOf } from "@/lib/host";
import { proficiencyLabel, proficiencyPillStyle } from "@/skills/proficiency-style";

type Params = { params: Promise<{ key: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { key } = await params;
    const skill = browserSkillByKey[key];

    if (!skill) {
        return {
            title: "Skill not found",
            description: "The skill you are looking for does not exist",
        };
    }

    return {
        title: skill.title,
        description: skill.description,
    };
}

export function generateStaticParams() {
    return browserData.skills.map(skill => ({ key: skill.key }));
}

export default async function SkillPage({ params }: Params) {
    const { key } = await params;
    const skill = browserSkillByKey[key];
    if (!skill) notFound();

    const { svgs } = browserData;
    const area = areaById[skill.area];
    const related = skill.related.map(k => browserSkillByKey[k]).filter(Boolean);
    const host = hostOf(skill.link);

    return (
        <div className="mt-9">
            <HomeLink
                open={skill.key}
                className="inline-flex items-center gap-2 rounded-full border border-(--glass-border) bg-(--glass) py-2 pl-2.5 pr-3.5 text-sm font-semibold text-muted transition-colors hover:text-foreground"
            >
                <ArrowLeftIcon size={16} aria-hidden="true" />
                All skills
            </HomeLink>

            <ViewTransition name="skill-card">
                <article
                    style={skillColorVars(skill)}
                    className="sk mt-4 rounded-3xl border border-(--glass-border) bg-panel p-[clamp(22px,4vw,40px)] shadow-(--card-shadow)"
                >
                    <div className="flex flex-wrap items-center gap-[18px]">
                        <ViewTransition name="skill-icon">
                            <div className="lit"><RingIcon skill={skill} size={76} svgs={svgs} /></div>
                        </ViewTransition>
                        <div className="min-w-0 flex-1">
                            <ViewTransition name="skill-title">
                                <h1 className="m-0 hyphens-auto wrap-anywhere font-serif text-[clamp(30px,4.4vw,48px)] font-semibold leading-[1.05] tracking-[-0.025em]">{skill.title}</h1>
                            </ViewTransition>
                            <div className="mt-2.5 flex flex-wrap items-center gap-2.5">
                                <span className="rounded-full border px-2.5 py-[3px] font-serif text-[13px] font-semibold" style={proficiencyPillStyle(skill.proficiency)}>
                                    {proficiencyLabel(skill.proficiency)}
                                </span>
                                <div aria-hidden="true" className="flex gap-[3px]">
                                    {[0, 1, 2, 3].map(i => (
                                        <span
                                            key={i}
                                            className="h-[5px] w-[22px] rounded-[3px]"
                                            style={{ background: i <= skill.proficiency ? `var(--p${skill.proficiency})` : 'var(--ring-track)' }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-x-12 gap-y-8">
                        <div className="min-w-0 flex-[1_1_440px]">
                            <p className="m-0 text-pretty text-lg leading-[1.65] text-foreground/90">{skill.description}</p>
                            {skill.subSkills.length > 0 && <>
                                <h2 className="eyebrow mb-2.5 mt-[30px]">Focus areas · {skill.subSkills.length}</h2>
                                <FanIn animateKey={skill.key} className="flex flex-wrap gap-2">
                                    {skill.subSkills.map(s => (
                                        <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="mini-chip rounded-[10px] px-3 py-[7px] text-sm hover:-translate-y-px">
                                            {s.name}
                                        </a>
                                    ))}
                                </FanIn>
                            </>}
                        </div>

                        <aside className="flex min-w-0 flex-[1_1_260px] flex-col gap-[26px]">
                            <div>
                                <h2 className="eyebrow mb-2.5">Area</h2>
                                <HomeLink area={skill.area} className="flex items-center gap-2.5 text-[15px] font-semibold text-foreground transition-colors hover:text-[#60a5fa]">
                                    <span aria-hidden="true" className="size-2 rounded-full" style={{ background: area.color }} />
                                    {area.title}
                                </HomeLink>
                            </div>

                            {related.length > 0 && (
                                <div>
                                    <h2 className="eyebrow mb-2.5">Related</h2>
                                    <div className="flex flex-wrap gap-1.5">
                                        {related.map(r => (
                                            <Link
                                                key={r.key}
                                                href={`/skills/${r.key}`}
                                                style={skillColorVars(r)}
                                                className="sk lit mini-chip gap-[7px] rounded-full py-[5px] pl-[7px] pr-2.5 text-[13px] hover:border-[#3b82f6]!"
                                            >
                                                <SkillGlyph skill={r} size={14} svgs={svgs} />
                                                {r.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {skill.link && (
                                <a
                                    href={skill.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-gradient flex items-center justify-center gap-2 rounded-xl p-3.5 font-serif text-base font-semibold"
                                >
                                    <ExternalLinkIcon size={16} aria-hidden="true" />
                                    Learn more · {host}
                                </a>
                            )}
                        </aside>
                    </div>
                </article>
            </ViewTransition>
        </div>
    );
}
