import { SkillCategory } from "./skill-categories";
import type { Skill } from "./types";

export type AreaId =
    | 'architecture'
    | 'platforms'
    | 'fullstack'
    | 'interfaces'
    | 'ai'
    | 'security'
    | 'quality'
    | 'teams';

export interface Area {
    id: AreaId;
    title: string;
    color: string;
    pitch: string;
}

export const areas: readonly Area[] = [
    { id: 'architecture', title: 'Architecture', color: '#6366f1', pitch: 'Distributed, event-driven systems that scale sideways without falling over, with decisions written down so the code stays honest to them.' },
    { id: 'platforms', title: 'Cloud & platforms', color: '#f59e0b', pitch: 'Infrastructure, data and delivery pipelines: the unglamorous foundations everything else stands on, all defined as code.' },
    { id: 'fullstack', title: 'Back end & languages', color: '#22c55e', pitch: 'TypeScript and C#/.NET, with typed APIs end to end so front and back can’t quietly drift apart.' },
    { id: 'interfaces', title: 'Front end', color: '#3b82f6', pitch: 'Fast, accessible, polished interfaces, from live drag-and-drop boards to visual page builders.' },
    { id: 'ai', title: 'AI', color: '#8b5cf6', pitch: 'Agents, MCP and LLM features, with guardrails and human judgement around them.' },
    { id: 'security', title: 'Security & accessibility', color: '#f43f5e', pitch: 'OWASP-minded design, auth done properly and WCAG 2.2 AA work, built in rather than bolted on.' },
    { id: 'quality', title: 'Testing & quality', color: '#84cc16', pitch: 'Unit, integration and end-to-end coverage, so moving fast doesn’t mean breaking things.' },
    { id: 'teams', title: 'Leading teams', color: '#ec4899', pitch: 'Technical direction, mentoring, code review standards and turning fuzzy ideas into shippable work.' },
];

export const areaById = Object.fromEntries(areas.map(a => [a.id, a])) as Record<AreaId, Area>;

// Skills whose categories would otherwise land them in a less useful area.
const overrides: Partial<Record<string, AreaId>> = {
    'llm-integration': 'ai',
    monitoring: 'platforms',
    logging: 'platforms',
    'feature-flags': 'platforms',
    'dns-networking': 'platforms',
    zod: 'fullstack',
    typescript: 'fullstack',
    javascript: 'fullstack',
    graphql: 'fullstack',
    mvc: 'fullstack',
    entityframework: 'fullstack',
    drizzle: 'fullstack',
    prisma: 'fullstack',
    'dotnet-aspire': 'fullstack',
    figma: 'interfaces',
};

export function areaOf(skill: Pick<Skill, 'key' | 'categories'>): AreaId {
    const override = overrides[skill.key];
    if (override) return override;

    const c = new Set<SkillCategory>(skill.categories);
    if (c.has(SkillCategory.AI)) return 'ai';
    if (c.has(SkillCategory.Security) || skill.key === 'accessibility-audits') return 'security';
    if (c.has(SkillCategory.QA)) return 'quality';
    if (c.has(SkillCategory.Management)) return 'teams';
    if (c.has(SkillCategory.Concepts) && !c.has(SkillCategory.Frontend) && !c.has(SkillCategory.Databases)) return 'architecture';
    if ([SkillCategory.Cloud, SkillCategory.DevOps, SkillCategory.Databases, SkillCategory.Servers].some(x => c.has(x))) return 'platforms';
    if (c.has(SkillCategory.Frontend)) return 'interfaces';
    return 'fullstack';
}
