import { SkillCategory } from "../skill-categories";
import { SkillProficiency } from "../skill-proficiency";
import type { Skill } from "../types";

const frameworks = [
    {
        key: 'astro',
        title: 'Astro',
        categories: [SkillCategory.Frontend, SkillCategory.Frameworks],
        proficiency: SkillProficiency.Expert,
        description: 'I use Astro to build content-driven websites with its island architecture, shipping minimal JavaScript to the client while integrating components from React and other frameworks.',
        link: 'https://astro.build/',
        relatedSkillKeys: ['react', 'javascript', 'html', 'css', 'netlify', 'vercel'],
    },
    {
        key: 'nextjs',
        title: 'Next.js',
        categories: [SkillCategory.Frontend, SkillCategory.Backend, SkillCategory.Frameworks],
        proficiency: SkillProficiency.Expert,
        description: 'I have used Next.js to build multiple applications, including this one. I am familiar with both server-side rendering and static site generation and the benefits they bring.',
        link: 'https://nextjs.org/',
        relatedSkillKeys: ['react', 'drizzle', 'vercel', 'netlify', 'javascript', 'css', 'html', 'aws', 'serverless'],
        subSkills: [
            { name: 'vinext', url: 'https://vinext.io/' },
            { name: 'Fumadocs', url: 'https://fumadocs.dev/' },
            { name: 'nuqs', url: 'https://nuqs.dev/' }
        ]
    },
    {
        key: 'react',
        title: 'React',
        categories: [SkillCategory.Frontend, SkillCategory.Frameworks],
        proficiency: SkillProficiency.Expert,
        description: 'I favour React to build front-end applications, including this one (NextJS). I am familiar with much of the React ecosystem.',
        link: 'https://reactjs.org/',
        relatedSkillKeys: ['nextjs', 'javascript', 'css', 'html'],
        subSkills: [
            { name: 'Redux', url: 'https://redux.js.org/' },
            { name: 'Zustand', url: 'https://zustand.surge.sh/' },
            { name: 'MobX', url: 'https://mobx.js.org/README.html' },
            { name: 'React Router', url: 'https://reactrouter.com/' },
            { name: 'React Query', url: 'https://react-query.tanstack.com/' },
            { name: 'React Flow', url: 'https://reactflow.dev/' },
            { name: 'react-beautiful-dnd', url: 'https://github.com/atlassian/react-beautiful-dnd' },
            { name: 'dnd kit', url: 'https://dndkit.com/' },
            { name: 'react-archer', url: 'https://github.com/pierpo/react-archer' },
            { name: 'HeroUI', url: 'https://www.heroui.com/' },
            { name: 'React Testing Library', url: 'https://testing-library.com/docs/react-testing-library/intro/' },
            { name: 'Jest', url: 'https://jestjs.io/' },
            { name: 'Storybook', url: 'https://storybook.js.org/' },
            { name: 'Motion', url: 'https://motion.dev/' },
            { name: 'Radix UI', url: 'https://www.radix-ui.com/' },
            { name: 'React Hook Form', url: 'https://react-hook-form.com/' },
            { name: 'React Compiler', url: 'https://react.dev/learn/react-compiler' },
            { name: 'Recharts', url: 'https://recharts.org/' },
            { name: 'Conform', url: 'https://conform.guide/' },
            { name: 'Plate', url: 'https://platejs.org/' },
            { name: 'Puck', url: 'https://puckeditor.com/' },
            { name: 'Remotion', url: 'https://www.remotion.dev/' }
        ]
    },
    {
        key: 'angular',
        title: 'Angular',
        categories: [SkillCategory.Frontend, SkillCategory.Frameworks],
        proficiency: SkillProficiency.Familiar,
        description: "I have created and contributed to several Angular-based projects. " +
            "As well as more modern versions of Angular I have experience with the legacy AngularJS.",
        link: 'https://angular.io/',
        relatedSkillKeys: ['javascript', 'css', 'html', 'netlify'],
    },
    {
        key: 'mvc',
        title: '.NET MVC + Razor',
        categories: [SkillCategory.Backend, SkillCategory.Frontend, SkillCategory.Frameworks],
        proficiency: SkillProficiency.Expert,
        description: 'I have used .NET\'s MVC and Web API frameworks to build multiple applications.',
        link: 'https://dotnet.microsoft.com/apps/aspnet/mvc',
        relatedSkillKeys: ['csharp', 'entityframework', 'dotnet', 'webapi', 'sql', 'aws'],
    },
    {
        key: 'dotnet',
        title: '.NET (C#)',
        categories: [SkillCategory.Backend, SkillCategory.Frameworks],
        proficiency: SkillProficiency.Expert,
        description: "I am deeply familiar with both .NET framework and dotnet core and have used both to build production applications.",
        link: 'https://dotnet.microsoft.com/',
        relatedSkillKeys: ['csharp', 'entityframework', 'webapi', 'mvc', 'sql'],
    },
    {
        key: 'webapi',
        title: '.NET Web API',
        categories: [SkillCategory.Backend, SkillCategory.Frameworks],
        proficiency: SkillProficiency.Expert,
        description: 'I have built multiple strongly-typed RESTful APIs using .NET Web API, and generated accurate OpenAPI documentation using Swashbuckle.',
        link: 'https://dotnet.microsoft.com/apps/aspnet/apis',
        relatedSkillKeys: ['csharp', 'entityframework', 'dotnet', 'mvc', 'sql'],
        subSkills: [
            { name: 'Swashbuckle', url: 'https://github.com/domaindrivendev/Swashbuckle.AspNetCore' },
            { name: 'OpenAPI', url: 'https://swagger.io/specification/' },
        ]
    },
    {
        key: 'nodejs',
        title: 'Node.js',
        categories: [SkillCategory.Backend, SkillCategory.Frameworks],
        proficiency: SkillProficiency.Expert,
        description: 'I use Node.js across the full stack: building APIs with tRPC and ts-rest, scripting tooling, managing monorepo builds, and configuring bundlers from Webpack through Parcel to Vite. I have deployed my own NPM registry via Verdaccio and use npm workspaces for multi-package projects.',
        link: 'https://nodejs.org/',
        relatedSkillKeys: ['javascript', 'express', 'nextjs', 'trpc', 'ts-rest'],
        subSkills: [
            { name: 'NPM', url: 'https://www.npmjs.com/' },
            { name: 'Yarn', url: 'https://yarnpkg.com/' },
            { name: 'Verdaccio', url: 'https://verdaccio.org/' },
            { name: 'Webpack', url: 'https://webpack.js.org/' },
            { name: 'Babel', url: 'https://babeljs.io/' },
            { name: 'Vite', url: 'https://vitejs.dev/' },
            { name: 'Bun', url: 'https://bun.sh/' },
            { name: 'pnpm', url: 'https://pnpm.io/' },
            { name: 'tsx', url: 'https://tsx.is/' }
        ]
    },
    {
        key: 'express',
        title: 'ExpressJS',
        categories: [SkillCategory.Backend, SkillCategory.Frameworks],
        proficiency: SkillProficiency.Familiar,
        description: 'I have used ExpressJS to build RESTful APIs in JavaScript.',
        link: 'https://expressjs.com/',
        relatedSkillKeys: ['nodejs', 'javascript'],
    },
    {
        key: 'trpc',
        title: 'tRPC',
        categories: [SkillCategory.Backend, SkillCategory.Frameworks],
        proficiency: SkillProficiency.Proficient,
        description: 'I have used tRPC to build end-to-end type-safe APIs in TypeScript, eliminating the need for code generation or manual type definitions between client and server.',
        link: 'https://trpc.io/',
        relatedSkillKeys: ['typescript', 'nodejs', 'nextjs', 'zod', 'react'],
    },
    {
        key: 'ts-rest',
        title: 'ts-rest',
        categories: [SkillCategory.Backend, SkillCategory.Frameworks],
        proficiency: SkillProficiency.Proficient,
        description: 'I have used ts-rest to build type-safe REST APIs with shared contracts between client and server in TypeScript projects.',
        link: 'https://ts-rest.com/',
        relatedSkillKeys: ['typescript', 'nodejs', 'nextjs', 'zod', 'rest'],
    },
    {
        key: 'bootstrap',
        title: 'Bootstrap',
        categories: [SkillCategory.Frontend, SkillCategory.Frameworks],
        proficiency: SkillProficiency.Expert,
        description: 'I have used Bootstrap to build many responsive websites and web applications.',
        link: 'https://getbootstrap.com/',
        relatedSkillKeys: ['css'],
    },
    {
        key: 'entityframework',
        title: 'Entity Framework ORM',
        categories: [SkillCategory.Backend, SkillCategory.Frameworks, SkillCategory.Databases],
        proficiency: SkillProficiency.Expert,
        description: 'I have extensively used Entity Framework to build data access layers for multiple applications. I am adept at using Linq to efficiently query databases.',
        link: 'https://docs.microsoft.com/en-us/ef/',
        relatedSkillKeys: ['csharp', 'sql'],
    },
    {
        key: 'drizzle',
        title: 'Drizzle ORM',
        categories: [SkillCategory.Backend, SkillCategory.Frameworks, SkillCategory.Databases],
        proficiency: SkillProficiency.Expert,
        description: 'Drizzle is my preferred JavaScript ORM, I favour it for its simplicity and flexibility.',
        link: 'https://drizzle.dev/',
        relatedSkillKeys: ['nextjs', 'javascript', 'sql'],

    },
    {
        key: 'prisma',
        title: 'Prisma ORM',
        categories: [SkillCategory.Backend, SkillCategory.Frameworks, SkillCategory.Databases],
        proficiency: SkillProficiency.Familiar,
        description: 'I have used Prisma in a few projects and appreciate its type safety and ease of use.',
        link: 'https://www.prisma.io/',
        relatedSkillKeys: ['nextjs', 'javascript', 'sql', 'drizzle'],
    },
    {
        key: 'eslint',
        title: 'Linting & Code Quality',
        categories: [SkillCategory.Frontend, SkillCategory.Frameworks],
        proficiency: SkillProficiency.Expert,
        description: 'I configure and maintain ESLint, Prettier, and other static analysis tools to enforce code quality and consistency across projects.',
        link: 'https://eslint.org/',
        relatedSkillKeys: ['javascript', 'sast'],
        subSkills: [
            { name: 'ESLint', url: 'https://eslint.org/' },
            { name: 'Prettier', url: 'https://prettier.io/' },
            { name: 'StyleLint', url: 'https://stylelint.io/' },
            { name: 'Oxlint', url: 'https://oxc.rs/docs/guide/usage/linter' },
            { name: 'Knip', url: 'https://knip.dev/' },
            { name: 'dependency-cruiser', url: 'https://github.com/sverweij/dependency-cruiser' }
        ]
    },
    {
        key: 'jquery',
        title: 'jQuery',
        categories: [SkillCategory.Frontend, SkillCategory.Frameworks],
        proficiency: SkillProficiency.Expert,
        description: 'Legacy experience — I have maintained and contributed to several jQuery-based projects in earlier roles.',
        link: 'https://jquery.com/',
        relatedSkillKeys: ['javascript'],
        subSkills: [
            { name: 'jQuery UI', url: 'https://jqueryui.com/' }
        ]
    },
    {
        key: 'tailwindcss',
        title: 'Tailwind CSS',
        categories: [SkillCategory.Frontend, SkillCategory.Frameworks],
        proficiency: SkillProficiency.Expert,
        description: 'Tailwind CSS is my go-to styling approach for new projects. I use it extensively for building responsive, utility-first interfaces and component libraries across both production applications and side projects.',
        link: 'https://tailwindcss.com/',
        relatedSkillKeys: ['css'],
    },
    {
        key: 'webforms',
        title: 'ASP.NET Web Forms',
        categories: [SkillCategory.Backend, SkillCategory.Frameworks],
        proficiency: SkillProficiency.Familiar,
        description: 'Legacy experience — I have maintained and extended several ASP.NET Web Forms applications during migration to modern frameworks.',
        link: 'https://dotnet.microsoft.com/apps/aspnet/web-forms',
        relatedSkillKeys: ['csharp', 'sql', 'mvc', 'webapi'],
    },
    {
        key: 'litellm',
        title: 'LiteLLM',
        categories: [SkillCategory.AI, SkillCategory.Backend, SkillCategory.Frameworks],
        proficiency: SkillProficiency.Proficient,
        description: 'I have used LiteLLM as a unified proxy layer across multiple LLM providers, enabling consistent API interfaces, cost tracking, and provider fallback in production systems.',
        link: 'https://docs.litellm.ai/',
        relatedSkillKeys: ['llm-integration', 'aws-bedrock', 'api-design'],
        subSkills: [
            { name: 'Provider Routing', url: 'https://docs.litellm.ai/docs/routing' },
            { name: 'Cost Tracking', url: 'https://docs.litellm.ai/docs/budget_manager' },
            { name: 'OpenAI-compatible Proxy', url: 'https://docs.litellm.ai/docs/proxy/quick_start' },
        ]
    },
    {
        key: 'dotnet-aspire',
        title: '.NET Aspire',
        categories: [SkillCategory.Backend, SkillCategory.Frameworks, SkillCategory.DevOps],
        proficiency: SkillProficiency.Expert,
        description: 'I use .NET Aspire to orchestrate cloud-native distributed applications in development and production. Its opinionated approach to service defaults, telemetry, and local development experience aligns well with how I build modular .NET systems.',
        link: 'https://learn.microsoft.com/en-us/dotnet/aspire/get-started/aspire-overview',
        relatedSkillKeys: ['dotnet', 'csharp', 'docker', 'opentelemetry', 'microservices', 'modular-monolith'],
        subSkills: [
            { name: 'App Host', url: 'https://learn.microsoft.com/en-us/dotnet/aspire/fundamentals/app-host-overview' },
            { name: 'Service Defaults', url: 'https://learn.microsoft.com/en-us/dotnet/aspire/fundamentals/service-defaults' },
            { name: 'Aspire Dashboard', url: 'https://learn.microsoft.com/en-us/dotnet/aspire/fundamentals/dashboard/overview' },
        ]
    },
    {
        key: 'fastify',
        title: 'Fastify',
        categories: [SkillCategory.Backend, SkillCategory.Frameworks],
        proficiency: SkillProficiency.Proficient,
        description: 'I use Fastify to build high-throughput, schema-first TypeScript APIs, splitting one deployable into scope-gated API surfaces and generating committed, drift-checked OpenAPI documents from the route schemas.',
        link: 'https://fastify.dev/',
        relatedSkillKeys: ['nodejs', 'typescript', 'openapi', 'kysely', 'api-design'],
        subSkills: [
            { name: 'Pino', url: 'https://getpino.io/' },
            { name: '@fastify/swagger', url: 'https://github.com/fastify/fastify-swagger' },
            { name: 'ws', url: 'https://github.com/websockets/ws' },
        ]
    },
    {
        key: 'kysely',
        title: 'Kysely',
        categories: [SkillCategory.Databases, SkillCategory.Backend, SkillCategory.Frameworks],
        proficiency: SkillProficiency.Expert,
        description: 'Kysely is my go-to for type-safe SQL in TypeScript. I use it as the data-access layer for multi-tenant PostgreSQL systems, with generated database types, transactions, row locking and raw SQL reserved for PostGIS and full-text search.',
        link: 'https://kysely.dev/',
        relatedSkillKeys: ['postgresql', 'sql', 'typescript', 'drizzle', 'data-migration', 'database-design'],
        subSkills: [
            { name: 'kysely-codegen', url: 'https://github.com/RobinBlomberg/kysely-codegen' },
            { name: 'node-postgres', url: 'https://node-postgres.com/' },
            { name: 'Postgres.js', url: 'https://github.com/porsager/postgres' },
        ]
    },
    {
        key: 'orpc',
        title: 'oRPC',
        categories: [SkillCategory.Backend, SkillCategory.Frameworks],
        proficiency: SkillProficiency.Proficient,
        description: 'I use oRPC to build end-to-end type-safe APIs that also publish an OpenAPI surface, with layered procedures that enforce authentication and organisation scoping before any business logic runs.',
        link: 'https://orpc.unnoq.com/',
        relatedSkillKeys: ['trpc', 'typescript', 'zod', 'openapi', 'api-design', 'multi-tenancy'],
    },
    {
        key: 'electron',
        title: 'Electron',
        categories: [SkillCategory.Frontend, SkillCategory.Frameworks],
        proficiency: SkillProficiency.Familiar,
        description: 'I have built a cross-platform desktop launcher with Electron, including auto-updates, a native credential store addon and hardware-bound device licensing.',
        link: 'https://www.electronjs.org/',
        relatedSkillKeys: ['nodejs', 'typescript', 'react', 'vite', 'cplusplus'],
        subSkills: [
            { name: 'electron-vite', url: 'https://electron-vite.org/' },
            { name: 'electron-builder', url: 'https://www.electron.build/' },
            { name: 'Velopack', url: 'https://velopack.io/' },
        ]
    }
] as readonly Skill[];

export default frameworks;