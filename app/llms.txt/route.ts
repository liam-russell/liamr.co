import skills from '@/skills/data/skills';
import { categoryTitles, SkillCategory } from '@/skills/skill-categories';
import { proficiencyTitles } from '@/skills/skill-proficiency';

const BASE_URL = 'https://liamr.co';

function generateLlmsTxt(): string {
    const lines: string[] = [];

    lines.push('# Liam Russell — Technical Lead');
    lines.push('');
    lines.push('> Technical Lead specialising in software architecture, scalable distributed systems, cloud infrastructure, and AI. Expert in React, Next.js, TypeScript, C# and .NET. Based in Canberra, Australia.');
    lines.push('');

    lines.push('## Pages');
    lines.push('');
    lines.push(`- [Home](${BASE_URL}/): Overview, expertise areas, and interactive skills graph`);
    lines.push(`- [Skills](${BASE_URL}/skills): Searchable and filterable list of all technical skills`);
    lines.push('');

    // Group skills by category
    const categoryGroups = new Map<SkillCategory, (typeof skills)[number][]>();
    for (const skill of skills) {
        const primaryCategory = skill.categories[0];
        if (!categoryGroups.has(primaryCategory)) {
            categoryGroups.set(primaryCategory, []);
        }
        categoryGroups.get(primaryCategory)!.push(skill);
    }

    for (const [category, categorySkills] of categoryGroups) {
        lines.push(`## ${categoryTitles[category]}`);
        lines.push('');
        for (const skill of categorySkills) {
            const proficiency = proficiencyTitles[skill.proficiency];
            const subSkillNote = skill.subSkills?.length
                ? ` (${skill.subSkills.map(s => s.name).join(', ')})`
                : '';
            lines.push(`- [${skill.title}](${BASE_URL}/skills/${skill.key}): ${proficiency}. ${skill.description}${subSkillNote}`);
        }
        lines.push('');
    }

    return lines.join('\n');
}

export function GET() {
    return new Response(generateLlmsTxt(), {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=86400',
        },
    });
}
