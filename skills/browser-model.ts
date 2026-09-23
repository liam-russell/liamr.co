import { areaById, areas, type Area, type AreaId } from "./areas";
import type { BrowserSkill } from "./browser-data";

export const COLLAPSED_COUNT = 8;

export interface ChipItem {
    skill: BrowserSkill;
    /** Sub-skill that matched the search, shown as "↳ name" on the chip. */
    sub: string | null;
    score: number;
}

export interface AreaGroup extends Area {
    items: ChipItem[];
    shown: ChipItem[];
    expanded: boolean;
    hasMore: boolean;
}

export interface BrowserModel {
    groups: AreaGroup[];
    total: number;
}

/** Scoring: title prefix > title contains > sub-skill > category, area or description. */
export function matchSkill(skill: BrowserSkill, q: string): { score: number; sub: string | null } | null {
    if (!q) return { score: 1, sub: null };
    const title = skill.title.toLowerCase();
    if (title.includes(q)) return { score: title.startsWith(q) ? 3 : 2, sub: null };
    const sub = skill.subSkills.find(s => s.name.toLowerCase().includes(q));
    if (sub) return { score: 1.5, sub: sub.name };
    if (
        skill.categories.some(c => c.toLowerCase().includes(q))
        || areaById[skill.area].title.toLowerCase().includes(q)
        || skill.description.toLowerCase().includes(q)
    ) {
        return { score: 1, sub: null };
    }
    return null;
}

export function buildModel(skills: readonly BrowserSkill[], rawQuery: string, expanded: AreaId | null): BrowserModel {
    const q = rawQuery.trim().toLowerCase();
    const byArea = Object.fromEntries(areas.map(a => [a.id, [] as ChipItem[]])) as Record<AreaId, ChipItem[]>;

    for (const skill of skills) {
        const m = matchSkill(skill, q);
        if (m) byArea[skill.area].push({ skill, ...m });
    }

    const groups = areas.map((area): AreaGroup => {
        const items = byArea[area.id].sort((x, y) =>
            (q ? y.score - x.score : 0)
            || y.skill.proficiency - x.skill.proficiency
            || y.skill.related.length - x.skill.related.length
            || x.skill.title.localeCompare(y.skill.title));
        const isExpanded = !q && expanded === area.id;
        return {
            ...area,
            items,
            shown: q || isExpanded ? items : items.slice(0, COLLAPSED_COUNT),
            expanded: isExpanded,
            hasMore: !q && items.length > COLLAPSED_COUNT,
        };
    });

    return { groups, total: groups.reduce((n, g) => n + g.items.length, 0) };
}

function levenshtein(a: string, b: string): number {
    const m = a.length;
    const n = b.length;
    if (!m) return n;
    if (!n) return m;
    let prev = Array.from({ length: n + 1 }, (_, j) => j);
    for (let i = 1; i <= m; i++) {
        const cur = [i];
        for (let j = 1; j <= n; j++) {
            cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
        }
        prev = cur;
    }
    return prev[n];
}

const FALLBACK_SUGGESTIONS = ['Docker', 'Infrastructure as Code', 'AWS'];

/** Up to three close matches for an empty search, or a few sensible places to look. */
export function suggest(skills: readonly BrowserSkill[], rawQuery: string): { hint: string; titles: string[] } {
    const q = rawQuery.trim().toLowerCase();
    const candidates: { title: string; d: number }[] = [];

    for (const skill of skills) {
        for (const name of [skill.title, ...skill.subSkills.map(s => s.name)]) {
            const words = name.toLowerCase().split(/[\s\-/().,]+/).filter(Boolean);
            const d = Math.min(levenshtein(q, name.toLowerCase()), ...words.map(w => levenshtein(q, w.slice(0, q.length + 1))));
            candidates.push({ title: skill.title, d });
        }
    }

    candidates.sort((a, b) => a.d - b.d);
    const limit = Math.max(2, Math.ceil(q.length / 2));
    const picks: string[] = [];
    for (const c of candidates) {
        if (c.d > limit) break;
        if (picks.includes(c.title)) continue;
        picks.push(c.title);
        if (picks.length >= 3) break;
    }

    return picks.length
        ? { hint: 'Did you mean one of these?', titles: picks }
        : { hint: 'Not listed yet. A few nearby places to look:', titles: FALLBACK_SUGGESTIONS };
}
