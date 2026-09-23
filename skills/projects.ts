export interface Project {
    name: string;
    href: string;
    host: string;
    /** Skill keys used by the project; hovering the project card lights these chips. */
    skillKeys: readonly string[];
}

export const projects: readonly Project[] = [
    {
        name: 'snapbook.ing',
        href: 'https://snapbook.ing',
        host: 'snapbook.ing',
        skillKeys: [
            'typescript', 'react', 'nextjs', 'cloudflare', 'infrastructure-as-code', 'turborepo',
            'better-auth', 'authentication', 'postgresql', 'kysely', 'stripe',
            'multi-tenancy', 'i18n', 'pdf-generation', 'geospatial', 'transactional-email',
            'llm-integration', 'design-systems', 'tailwindcss', 'playwright', 'vitest',
        ],
    },
    {
        name: 'SproutGit',
        href: 'https://sproutgit.dev/',
        host: 'sproutgit.dev',
        skillKeys: ['typescript', 'vc', 'ai-assisted-development', 'ai-agents', 'playwright', 'vitest', 'github-actions'],
    },
    {
        name: 'Shutter Share',
        href: 'https://shuttershare.com.au',
        host: 'shuttershare.com.au',
        skillKeys: ['astro', 'html', 'css', 'responsive-design', 'performance-optimisation'],
    },
];
