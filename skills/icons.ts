import {
    siReact,
    siTypescript,
    siJavascript,
    siNextdotjs,
    siNodedotjs,
    siDocker,
    siPostgresql,
    siRedis,
    siTailwindcss,
    siVite,
    siAngular,
    siBootstrap,
    siAstro,
    siDrizzle,
    siPrisma,
    siEslint,
    siJest,
    siVitest,
    siGraphql,
    siHtml5,
    siJquery,
    siJira,
    siLinear,
    siFigma,
    siTurborepo,
    siWebpack,
    siVercel,
    siNetlify,
    siExpress,
    siTrpc,
    siSelenium,
    siCucumber,
    siElasticsearch,
    siGithubactions,
    siZod,
    siDotnet,
    siGit,
    siServerless,
    siOpenapiinitiative,
    siGooglegemini,
    siResend,
    siSst,
    siOpenid,

    siOpentelemetry,
    siPulumi,
    siOwasp,
    siLetsencrypt,
    siMarkdown,
    siGithubcopilot,
} from 'simple-icons';
import { deviconSvgs } from './devicon-svgs';

export interface SkillIconData {
    hex: string;
    initial: string;
    path?: string;
    svg?: string;
}

type SimpleIcon = { path: string; hex: string };

function si(icon: SimpleIcon): Omit<SkillIconData, 'initial'> {
    return { path: icon.path, hex: icon.hex };
}

function devicon(slug: string, hex: string): Omit<SkillIconData, 'initial'> {
    return { svg: deviconSvgs[slug], hex };
}

const iconMap: Record<string, Omit<SkillIconData, 'initial'>> = {
    // Languages
    'typescript': si(siTypescript),
    'javascript': si(siJavascript),
    'csharp': devicon('csharp', '512BD4'),
    'html': si(siHtml5),
    'css': devicon('css3', '1572B6'),
    'graphql': si(siGraphql),
    'sql': si(siPostgresql),
    'postgresql': si(siPostgresql),
    'cucumber': si(siCucumber),

    // Frameworks
    'react': si(siReact),
    'nextjs': si(siNextdotjs),
    'angular': si(siAngular),
    'nodejs': si(siNodedotjs),
    'express': si(siExpress),
    'astro': si(siAstro),
    'dotnet': si(siDotnet),
    'dotnet-aspire': si(siDotnet),
    'mvc': si(siDotnet),
    'webapi': si(siDotnet),
    'webforms': si(siDotnet),
    'trpc': si(siTrpc),
    'bootstrap': si(siBootstrap),
    'tailwindcss': si(siTailwindcss),
    'drizzle': si(siDrizzle),
    'prisma': si(siPrisma),
    'eslint': si(siEslint),
    'jquery': si(siJquery),
    'entityframework': si(siDotnet),

    // Cloud
    'aws': devicon('amazonwebservices', 'FF9900'),
    'aws-bedrock': devicon('amazonwebservices', 'FF9900'),
    'azure': devicon('azure', '0078D4'),
    'vercel': si(siVercel),
    'netlify': si(siNetlify),
    'sst': si(siSst),
    'serverless': si(siServerless),
    'dynamodb': devicon('dynamodb', '4053D6'),
    'redis': si(siRedis),
    'elasticsearch': si(siElasticsearch),
    'resend': si(siResend),

    // DevOps
    'docker': si(siDocker),
    'vc': si(siGit),
    'vite': si(siVite),
    'webpack': si(siWebpack),
    'turborepo': si(siTurborepo),
    'github-actions': si(siGithubactions),
    'sast': devicon('sonarqube', '4E9BCD'),
    'infrastructure-as-code': si(siPulumi),
    'logging': si(siOpentelemetry),

    // QA
    'jest': si(siJest),
    'vitest': si(siVitest),
    'selenium': si(siSelenium),
    'playwright': devicon('playwright', '2EAD33'),

    // Management
    'jira': si(siJira),
    'linear': si(siLinear),
    'figma': si(siFigma),
    'documentation': si(siMarkdown),

    // AI
    'ai-assisted-development': si(siGithubcopilot),

    // Concepts
    'zod': si(siZod),
    'openapi': si(siOpenapiinitiative),
    'openid-connect': si(siOpenid),
    'grpc': devicon('grpc', '244C5A'),
    'https': si(siLetsencrypt),
    'security-best-practices': si(siOwasp),
    'owasp': si(siOwasp),

    // AI
    'gemini-api': si(siGooglegemini),
    'vercel-ai-sdk': si(siVercel),
};

const fallbackColors = [
    '6366f1', '8b5cf6', 'a855f7', 'd946ef',
    'ec4899', 'f43f5e', 'ef4444', 'f97316',
    'f59e0b', 'eab308', '84cc16', '22c55e',
    '14b8a6', '06b6d4', '0ea5e9', '3b82f6',
];

function hashCode(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}

export function getSkillIcon(key: string, title: string): SkillIconData {
    const mapped = iconMap[key];
    const initial = title.charAt(0).toUpperCase();
    if (mapped) return { ...mapped, initial };
    return { hex: fallbackColors[hashCode(key) % fallbackColors.length], initial };
}

export function isHexDark(hex: string): boolean {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 < 80;
}
