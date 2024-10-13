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
        title: 'JavaScript and TypeScript',
        categories: [SkillCategory.Frontend, SkillCategory.Backend, SkillCategory.Languages],
        link: 'https://typescriptlang.org/',
        proficiency: SkillProficiency.Expert,
        description: 'I have experience with JavaScript in many contexts, preferring the more modern Typescript. I\'ve worked with JavaScript in both frontend and backend contexts.',
        relatedSkillKeys: ['react', 'angular', 'nodejs', 'express', 'nextjs', 'bootstrap'],
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
        description: "I've created many complex reports with Microsoft T-SQL and have additionally utilised" +
            " it extensively within an application development context. I am familiar with common ORM's" +
            " such as Entity Framework. I have some experience with other database systems such" +
            " as PostgreSQL, MySQL, SQLite and AWS DynamoDB.",
        relatedSkillKeys: ['aws'],
        subSkills: [
            { name: 'T-SQL', url: 'https://en.wikipedia.org/wiki/Transact-SQL' },
            { name: 'Entity Framework', url: 'https://docs.microsoft.com/en-us/ef/' },
            { name: 'MySQL', url: 'https://www.mysql.com/' },
            { name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
            { name: 'SQLite', url: 'https://www.sqlite.org/index.html' },
            { name: 'DynamoDB', url: 'https://aws.amazon.com/dynamodb/' }
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
        relatedSkillKeys: ['specflow', 'csharp'],
        subSkills: [
            { name: 'Gherkin', url: 'https://cucumber.io/docs/gherkin/' },
            { name: 'BDD', url: 'https://en.wikipedia.org/wiki/Behavior-driven_development' },
            { name: 'Selenium', url: 'https://www.selenium.dev/' },
            { name: 'XUnit', url: 'https://xunit.net/' }
        ]
    }
] as readonly Skill[];

export default languages;