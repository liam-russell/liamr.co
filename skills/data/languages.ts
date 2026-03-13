import { SkillCategory } from "../skill-categories";
import { SkillProficiency } from "../skill-proficiency";
import type { Skill } from "../types";

const languages = [
    {
        key: 'csharp',
        title: 'C# (.NET)',
        categories: [SkillCategory.Backend, SkillCategory.Languages],
        link: 'https://dotnet.microsoft.com/',
        proficiency: SkillProficiency.Expert,
        description: 'I\'ve worked with C# and Microsoft .NET extensively in my career.',
        relatedSkillKeys: ['dotnet', 'mvc', 'webapi', 'serverless'],
    },
    {
        key: 'javascript',
        title: 'JavaScript',
        categories: [SkillCategory.Frontend, SkillCategory.Backend, SkillCategory.Languages],
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        proficiency: SkillProficiency.Expert,
        description: 'I have deep experience with JavaScript across frontend and backend contexts, from modern ES2024+ features to legacy codebases.',
        relatedSkillKeys: ['typescript', 'react', 'angular', 'nodejs', 'express', 'nextjs', 'bootstrap'],
    },
    {
        key: 'typescript',
        title: 'TypeScript',
        categories: [SkillCategory.Frontend, SkillCategory.Backend, SkillCategory.Languages],
        link: 'https://www.typescriptlang.org/',
        proficiency: SkillProficiency.Expert,
        description: 'TypeScript is my primary frontend language. I use strict configurations, leverage advanced type patterns, and advocate for TypeScript adoption across projects.',
        relatedSkillKeys: ['javascript', 'react', 'nextjs', 'nodejs'],
    },
    {
        key: 'html',
        title: 'HTML',
        description: 'HTML is the backbone of the web and I have a strong understanding of it.',
        categories: [SkillCategory.Frontend, SkillCategory.Languages],
        proficiency: SkillProficiency.Expert,
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        relatedSkillKeys: ['react', 'angular', 'bootstrap', 'css', 'javascript', 'nextjs'],
    },
    {
        key: 'css',
        title: 'CSS, SASS and LESS',
        description: 'I have a strong understanding of CSS and have used it in many projects. I have experience with CSS preprocessors such as SASS and LESS. I have also used Tailwind CSS extensively and favour it for modern development.',
        categories: [SkillCategory.Frontend, SkillCategory.Languages],
        proficiency: SkillProficiency.Expert,
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        subSkills: [
            { name: 'SASS', url: 'https://sass-lang.com/' },
            { name: 'LESS', url: 'http://lesscss.org/' },
            { name: 'AutoPrefixer', url: 'https://autoprefixer.github.io/' },
            { name: 'CSS Grid', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout' },
            { name: 'Flexbox', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout' },
            { name: 'CSS Variables', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties' }
        ],
        relatedSkillKeys: ['react', 'angular', 'bootstrap', 'html', 'javascript', 'nextjs'],
    },
    {
        key: 'sql',
        title: 'SQL',
        categories: [SkillCategory.Databases, SkillCategory.Languages],
        proficiency: SkillProficiency.Expert,
        link: 'https://en.wikipedia.org/wiki/SQL',
        description: "I have a decade of deep SQL Server experience across schema design, performance tuning, indexing strategies," +
            " fragmentation maintenance, statistics management, query optimisation and rewrites, complex reporting," +
            " and ORM integration with Entity Framework. I regularly investigate and resolve production performance" +
            " issues. I also have experience with PostgreSQL (via Aurora Serverless), MySQL, SQLite, and DynamoDB.",
        relatedSkillKeys: ['aws'],
        subSkills: [
            { name: 'SQL Server', url: 'https://www.microsoft.com/en-au/sql-server' },
            { name: 'T-SQL', url: 'https://en.wikipedia.org/wiki/Transact-SQL' },
            { name: 'Entity Framework', url: 'https://docs.microsoft.com/en-us/ef/' },
            { name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
            { name: 'MySQL', url: 'https://www.mysql.com/' },
            { name: 'SQLite', url: 'https://www.sqlite.org/index.html' },
            { name: 'DynamoDB', url: 'https://aws.amazon.com/dynamodb/' },
            { name: 'Drizzle ORM', url: 'https://orm.drizzle.team/' }
        ]
    },
    {
        key: 'graphql',
        title: 'GraphQL',
        categories: [SkillCategory.Backend, SkillCategory.Frontend, SkillCategory.Languages],
        proficiency: SkillProficiency.Familiar,
        link: 'https://graphql.org/',
        description: "I've used GraphQL in a few projects and have a good understanding of the basics.",
    },
    {
        key: 'cucumber',
        title: 'Cucumber',
        categories: [SkillCategory.Languages, SkillCategory.QA],
        proficiency: SkillProficiency.Familiar,
        link: 'https://cucumber.io/',
        description: "I have used Cucumber to write BDD tests for applications.",
        relatedSkillKeys: ['reqnroll', 'csharp'],
        subSkills: [
            { name: 'Gherkin', url: 'https://cucumber.io/docs/gherkin/' },
            { name: 'BDD', url: 'https://en.wikipedia.org/wiki/Behavior-driven_development' },
            { name: 'Selenium', url: 'https://www.selenium.dev/' },
            { name: 'XUnit', url: 'https://xunit.net/' }
        ]
    },
    {
        key: 'postgresql',
        title: 'PostgreSQL',
        categories: [SkillCategory.Databases, SkillCategory.Backend],
        proficiency: SkillProficiency.Familiar,
        description: 'I have used PostgreSQL as the primary relational database for multiple production systems, leveraging features like JSONB columns, CTEs, and advanced indexing via RDS.',
        link: 'https://www.postgresql.org/',
        relatedSkillKeys: ['sql', 'aws', 'database-design', 'drizzle', 'entityframework'],
        subSkills: [
            { name: 'AWS RDS for PostgreSQL', url: 'https://aws.amazon.com/rds/postgresql/' },
            { name: 'pgAdmin', url: 'https://www.pgadmin.org/' },
            { name: 'PostGIS', url: 'https://postgis.net/' },
        ]
    }
] as readonly Skill[];

export default languages;