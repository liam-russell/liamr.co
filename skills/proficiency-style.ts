import type { CSSProperties } from "react";
import { proficiencyTitles, type SkillProficiency } from "./skill-proficiency";

const tints = [
    { bg: 'rgba(245,158,11,.1)', bd: 'rgba(245,158,11,.2)' },
    { bg: 'rgba(34,197,94,.1)', bd: 'rgba(34,197,94,.2)' },
    { bg: 'rgba(59,130,246,.1)', bd: 'rgba(59,130,246,.2)' },
    { bg: 'rgba(14,165,233,.1)', bd: 'rgba(14,165,233,.2)' },
];

export function proficiencyLabel(p: SkillProficiency): string {
    return proficiencyTitles[p];
}

/** Colours for the proficiency pill: ink from the --p0…--p3 tokens, tinted background and border. */
export function proficiencyPillStyle(p: SkillProficiency): CSSProperties {
    return { color: `var(--p${p})`, background: tints[p].bg, borderColor: tints[p].bd };
}
