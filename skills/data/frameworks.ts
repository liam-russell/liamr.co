import { SkillCategory } from "../skill-categories";
import { SkillProficiency } from "../skill-proficiency";
import type { Skill } from "../types";

const frameworks = [
    {
        key: 'nextjs',
        title: 'Next.js',
        categories: [SkillCategory.Frontend, SkillCategory.Backend, SkillCategory.Frameworks],
        proficiency: SkillProficiency.Expert,
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
            { name: 'React Testing Library', url: 'https://testing-library.com/docs/react-testing-library/intro/' },
            { name: 'Jest', url: 'https://jestjs.io/' },
            { name: 'Storybook', url: 'https://storybook.js.org/' },
            { name: 'Framer Motion', url: 'https://www.framer.com/motion/' }
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
        description: 'I have used NodeJS for building full stack apps, scripting deployment tools, compiling frontend code and used NPM extensively.',
        link: 'https://nodejs.org/',
        relatedSkillKeys: ['javascript', 'express', 'nextjs'],
        subSkills: [
            { name: 'NPM', url: 'https://www.npmjs.com/' },
            { name: 'Yarn', url: 'https://yarnpkg.com/' },
            { name: 'Webpack', url: 'https://webpack.js.org/' },
            { name: 'Babel', url: 'https://babeljs.io/' },
            { name: 'Vite', url: 'https://vitejs.dev/' },
            { name: 'Bun', url: 'https://bun.sh/' }
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
        title: 'ESLint',
        categories: [SkillCategory.Frontend, SkillCategory.Frameworks],
        proficiency: SkillProficiency.Expert,
        description: 'I advocate for using ESLint to enforce code quality and consistency in JavaScript projects.',
    },
    {
        key: 'jquery',
        title: 'jQuery',
        categories: [SkillCategory.Frontend, SkillCategory.Frameworks],
        proficiency: SkillProficiency.Proficient,
        description: 'I have maintained and contributed to several jQuery-based projects.',
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
        description: 'I have used Tailwind CSS to build many responsive websites and web applications.',
        link: 'https://tailwindcss.com/',
        relatedSkillKeys: ['css'],
    },
    {
        key: 'webforms',
        title: 'ASP.NET Web Forms',
        categories: [SkillCategory.Backend, SkillCategory.Frameworks],
        proficiency: SkillProficiency.Proficient,
        description: 'I have maintained and contributed to several legacy ASP.NET Web Forms projects.',
        link: 'https://dotnet.microsoft.com/apps/aspnet/web-forms',
        relatedSkillKeys: ['csharp', 'sql', 'mvc', 'webapi'],
    }
] as readonly Skill[];

export default frameworks;