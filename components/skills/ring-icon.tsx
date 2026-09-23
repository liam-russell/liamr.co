import type { CSSProperties } from 'react';
import type { BrowserSkill } from '@/skills/browser-data';

/** CSS variables carrying a skill's brand colour for the current theme (see `.sk` in globals.css). */
export function skillColorVars(skill: BrowserSkill): CSSProperties {
    return { '--cl': skill.icon.light, '--cd': skill.icon.dark } as CSSProperties;
}

/** A brand icon: monochrome by default, full colour inside `.lit` or a lit/focused chip. */
export function SkillGlyph({ skill, size, svgs }: { skill: BrowserSkill; size: number; svgs: Record<string, string> }) {
    const { path, svg } = skill.icon;

    if (path) {
        return (
            <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" className="block flex-none">
                <path d={path} className="ic-path" />
            </svg>
        );
    }

    if (svg && svgs[svg]) {
        return (
            <span
                aria-hidden="true"
                className="ic-svg inline-flex flex-none"
                style={{ width: size, height: size }}
                dangerouslySetInnerHTML={{ __html: svgs[svg] }}
            />
        );
    }

    if (size >= 20) {
        return (
            <span
                aria-hidden="true"
                className="inline-flex flex-none items-center justify-center font-serif font-bold leading-none text-white"
                style={{ width: size, height: size, borderRadius: Math.round(size * .28), fontSize: Math.round(size * .62), background: 'var(--c)' }}
            >
                {skill.title.charAt(0).toUpperCase()}
            </span>
        );
    }

    const dot = Math.max(4, Math.round(size * .45));
    return (
        <span aria-hidden="true" className="inline-flex flex-none items-center justify-center" style={{ width: size, height: size }}>
            <span className="ic-dot rounded-full" style={{ width: dot, height: dot }} />
        </span>
    );
}

/** Proficiency ring (¼ Learning → full Expert) around the brand icon. */
export function RingIcon({ skill, size, svgs }: { skill: BrowserSkill; size: number; svgs: Record<string, string> }) {
    const r = size / 2 - 1.5;
    const circumference = 2 * Math.PI * r;
    const fraction = (skill.proficiency + 1) / 4;

    return (
        <span className="relative inline-flex flex-none items-center justify-center" style={{ width: size, height: size }}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true" className="absolute inset-0 -rotate-90">
                <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--ring-track)" strokeWidth={2} />
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={r}
                    fill="none"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeDasharray={`${circumference * fraction} ${circumference}`}
                    className="ring-arc"
                />
            </svg>
            <SkillGlyph skill={skill} size={Math.round(size * .52)} svgs={svgs} />
        </span>
    );
}
