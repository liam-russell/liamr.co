import { areaOf, type AreaId } from "./areas";
import skills from "./data/skills";
import { getSkillIcon, isHexDark } from "./icons";
import type { SkillProficiency } from "./skill-proficiency";
import { categoryTitles } from "./skill-categories";

/** Compact, serialisable skill shape shared by the browser, the skill card and the detail page. */
export interface BrowserSkill {
    key: string;
    title: string;
    description: string;
    proficiency: SkillProficiency;
    area: AreaId;
    /** Category titles, used for search matching. */
    categories: string[];
    related: string[];
    subSkills: { name: string; url: string }[];
    link?: string;
    icon: {
        /** Brand colour in light theme and dark theme (dark brand colours are lifted). */
        light: string;
        dark: string;
        path?: string;
        /** Key into the shared SVG table, to avoid repeating large inline SVGs. */
        svg?: string;
    };
}

export interface BrowserData {
    skills: BrowserSkill[];
    svgs: Record<string, string>;
}

function buildBrowserData(): BrowserData {
    const keys = new Set(skills.map(s => s.key));
    const svgs: Record<string, string> = {};
    const svgIds = new Map<string, string>();

    const out = skills.map((s): BrowserSkill => {
        const icon = getSkillIcon(s.key, s.title);
        let svg: string | undefined;
        if (icon.svg) {
            svg = svgIds.get(icon.svg);
            if (!svg) {
                svg = `s${svgIds.size}`;
                svgIds.set(icon.svg, svg);
                // Let the SVG size itself to its container.
                const i = icon.svg.indexOf('>');
                svgs[svg] = icon.svg.slice(0, i).replace(/\s(width|height)="[^"]*"/g, '').replace('<svg', '<svg width="100%" height="100%"') + icon.svg.slice(i);
            }
        }

        return {
            key: s.key,
            title: s.title,
            description: s.description,
            proficiency: s.proficiency,
            area: areaOf(s),
            categories: s.categories.map(c => categoryTitles[c]),
            related: (s.relatedSkillKeys ?? []).filter(k => keys.has(k) && k !== s.key),
            subSkills: (s.subSkills ?? []).map(x => ({ name: x.name, url: x.url })),
            link: s.link,
            icon: {
                light: `#${icon.hex}`,
                dark: isHexDark(icon.hex) ? '#e2e8f0' : `#${icon.hex}`,
                path: icon.path,
                svg,
            },
        };
    });

    return { skills: out, svgs };
}

export const browserData = buildBrowserData();

export const browserSkillByKey = Object.fromEntries(browserData.skills.map(s => [s.key, s]));
