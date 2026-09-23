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
        subSkills: [
            { name: 'App Router', url: 'https://nextjs.org/docs/app' },
            { name: 'React Server Components', url: 'https://react.dev/reference/rsc/server-components' },
            { name: 'Turbopack', url: 'https://nextjs.org/docs/app/api-reference/turbopack' },
            { name: 'vinext', url: 'https://vinext.io/' },
            { name: 'Fumadocs', url: 'https://fumadocs.dev/' },
            { name: 'nuqs', url: 'https://nuqs.dev/' }
        ],
        description: 'I have used Next.js to build multiple applications, including this one. I am familiar with both server-side rendering and static site generation and the benefits they bring.',
        link: 'https://nextjs.org/',
        relatedSkillKeys: ['react', 'drizzle', 'vercel', 'netlify', 'javascript', 'css', 'html', 'aws', 'serverless'],
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
            { name: 'SWR', url: 'https://swr.vercel.app/' },
            { name: 'Puck Visual Editor', url: 'https://puckeditor.com/' },
            { name: 'Mapbox GL', url: 'https://docs.mapbox.com/mapbox-gl-js/' },
            { name: 'Recharts', url: 'https://recharts.org/' },
            { name: 'Conform', url: 'https://conform.guide/' },
            { name: 'Plate', url: 'https://platejs.org/' },
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
        subSkills: [
            { name: 'oRPC', url: 'https://orpc.unnoq.com/' },
        ],
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
        relatedSkillKeys: ['dotnet', 'csharp', 'docker', 'logging', 'microservices', 'modular-monolith'],
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
        description: "I build TypeScript services on Fastify with OpenAPI contracts, so front ends get generated, fully typed clients and live sessions run over WebSockets.",
        link: 'https://fastify.dev/',
        relatedSkillKeys: ['nodejs', 'typescript', 'openapi', 'websockets', 'zod'],
        subSkills: [
            { name: 'Pino', url: 'https://getpino.io/' },
            { name: '@fastify/swagger', url: 'https://github.com/fastify/fastify-swagger' }
        ]
    },
    {
        key: 'better-auth',
        title: 'Better Auth',
        categories: [SkillCategory.Backend, SkillCategory.Security, SkillCategory.Frameworks],
        proficiency: SkillProficiency.Expert,
        description: "I run Better Auth as a full OAuth 2 / OpenID Connect issuer: passkeys, MFA, device flows for game clients and TVs, and third-party services authenticating against it.",
        link: 'https://www.better-auth.com/',
        relatedSkillKeys: ['authentication', 'oauth', 'openid-connect', 'typescript'],
        subSkills: [
            { name: 'OIDC Provider', url: 'https://www.better-auth.com/docs/plugins/oidc-provider' },
            { name: 'Passkeys', url: 'https://www.better-auth.com/docs/plugins/passkey' },
            { name: 'Device Authorization', url: 'https://www.better-auth.com/docs/plugins/device-authorization' },
        ]
    },
    {
        key: 'kysely',
        title: 'Kysely',
        categories: [SkillCategory.Backend, SkillCategory.Databases, SkillCategory.Frameworks],
        proficiency: SkillProficiency.Expert,
        description: "I use Kysely for type-safe SQL over Postgres with generated types. It's close to raw SQL, so there are no surprises in what hits the database.",
        link: 'https://kysely.dev/',
        relatedSkillKeys: ['postgresql', 'typescript', 'sql', 'drizzle'],
        subSkills: [
            { name: 'kysely-codegen', url: 'https://github.com/RobinBlomberg/kysely-codegen' },
            { name: 'Postgres.js', url: 'https://github.com/porsager/postgres' }
        ]
    },
    {
        key: 'design-systems',
        title: 'Design Systems & Component Libraries',
        categories: [SkillCategory.Frontend],
        proficiency: SkillProficiency.Proficient,
        description: "I build component libraries and design systems with designers, from a branded Bootstrap derivative to Tailwind and Radix-based kits, documented and tested in Storybook.",
        relatedSkillKeys: ['react', 'tailwindcss', 'figma', 'bootstrap', 'accessibility-audits'],
        subSkills: [
            { name: 'Storybook', url: 'https://storybook.js.org/' },
            { name: 'Radix UI', url: 'https://www.radix-ui.com/' },
            { name: 'HeroUI', url: 'https://www.heroui.com/' },
            { name: 'Style Dictionary', url: 'https://styledictionary.com/' },
            { name: 'Base UI', url: 'https://base-ui.com/' },
            { name: 'Floating UI', url: 'https://floating-ui.com/' }
        ]
    },
    {
        key: 'i18n',
        title: 'Internationalisation (i18n)',
        categories: [SkillCategory.Frontend],
        proficiency: SkillProficiency.Proficient,
        description: "I build apps ready for multiple languages from day one, with translation workflows that don't block releases.",
        relatedSkillKeys: ['nextjs', 'react'],
        subSkills: [
            { name: 'next-intl', url: 'https://next-intl.dev/' },
            { name: 'Crowdin', url: 'https://crowdin.com/' },
            { name: 'ICU MessageFormat', url: 'https://unicode-org.github.io/icu/userguide/format_parse/messages/' },
            { name: 'Luxon', url: 'https://moment.github.io/luxon/' },
            { name: 'libphonenumber-js', url: 'https://github.com/catamphetamine/libphonenumber-js' }
        ]
    },
    {
        key: 'pdf-generation',
        title: 'PDF & Print Output',
        categories: [SkillCategory.Backend, SkillCategory.Frontend],
        proficiency: SkillProficiency.Proficient,
        description: "I generate print-ready PDFs, tickets and badges from code, from server-side PDF rendering to paged CSS layouts and SVG generation.",
        relatedSkillKeys: ['css', 'html'],
        subSkills: [
            { name: 'PDFKit', url: 'https://pdfkit.org/' },
            { name: 'paged.js', url: 'https://pagedjs.org/' },
        ]
    },
    {
        key: 'unreal-engine',
        title: 'Unreal Engine SDK Integration',
        categories: [SkillCategory.Frameworks],
        proficiency: SkillProficiency.Learning,
        description: "I design platform SDKs for Unreal Engine games, so game clients can use auth, licensing and online services through a clean C++ interface.",
        link: 'https://www.unrealengine.com/',
        relatedSkillKeys: ['api-design'],
    },
    {
        key: 'electron',
        title: 'Electron',
        categories: [SkillCategory.Frontend, SkillCategory.Frameworks],
        proficiency: SkillProficiency.Proficient,
        description: 'I have built a cross-platform desktop launcher with Electron, including auto-updates, a native credential store addon and hardware-bound device licensing.',
        link: 'https://www.electronjs.org/',
        relatedSkillKeys: ['nodejs', 'typescript', 'react', 'vite'],
        subSkills: [
            { name: 'electron-vite', url: 'https://electron-vite.org/' },
            { name: 'electron-builder', url: 'https://www.electron.build/' },
            { name: 'Velopack', url: 'https://velopack.io/' },
        ]
    }
] as readonly Skill[];

export default frameworks;