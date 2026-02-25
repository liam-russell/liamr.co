import { SkillCategory } from "../skill-categories";
import { SkillProficiency } from "../skill-proficiency";
import type { Skill } from "../types";

const qa = [
    {
        key: 'jest',
        title: 'Jest',
        categories: [SkillCategory.QA],
        proficiency: SkillProficiency.Proficient,
        description: 'I have used Jest to write unit tests for JavaScript applications.',
        link: 'https://jestjs.io/',
        relatedSkillKeys: ['react', 'angular', 'javascript']
    },
    {
        key: 'vitest',
        title: 'Vitest',
        categories: [SkillCategory.QA],
        proficiency: SkillProficiency.Expert,
        description: 'I have used Vitest to tests for applications using Vite',
        link: 'https://vitest.dev/',
        relatedSkillKeys: ['vite', 'react', 'angular', 'javascript']
    },
    {
        key: 'reqnroll',
        title: 'Reqnroll',
        categories: [SkillCategory.QA],
        proficiency: SkillProficiency.Familiar,
        description: 'I have used Reqnroll to write BDD tests for .NET applications.',
        link: 'https://reqnroll.net/',
        relatedSkillKeys: ['cucumber', 'csharp', 'xunit'],
        subSkills: [
            { name: 'Gherkin', url: 'https://cucumber.io/docs/gherkin/' },
            { name: 'BDD', url: 'https://en.wikipedia.org/wiki/Behavior-driven_development' },
            { name: 'Selenium', url: 'https://www.selenium.dev/' },
            { name: 'XUnit', url: 'https://xunit.net/' }
        ]
    },
    {
        key: 'selenium',
        title: 'Selenium',
        categories: [SkillCategory.QA],
        proficiency: SkillProficiency.Expert,
        description: 'I have used Selenium to create end-to-end tests for web applications.',
        link: 'https://www.selenium.dev/',
        relatedSkillKeys: ['reqnroll', 'cucumber', 'xunit', 'playwright']
    },
    {
        key: 'playwright',
        title: 'Playwright',
        categories: [SkillCategory.QA],
        proficiency: SkillProficiency.Expert,
        description: 'I have used Playwright to write end-to-end tests for web applications.',
        link: 'https://playwright.dev/',
        relatedSkillKeys: ['jest', 'cucumber', 'xunit', 'selenium']
    },
    {
        key: 'xunit',
        title: 'XUnit',
        categories: [SkillCategory.QA],
        proficiency: SkillProficiency.Expert,
        description: 'I have used XUnit to write unit tests for .NET applications.',
        link: 'https://xunit.net/',
        relatedSkillKeys: ['reqnroll', 'cucumber', 'selenium', 'csharp', 'dotnet']
    },
    {
        key: 'unit-testing',
        title: 'Unit Testing',
        categories: [SkillCategory.QA],
        proficiency: SkillProficiency.Expert,
        description: 'I have written many unit tests for applications in various languages and frameworks.',
        relatedSkillKeys: ['jest', 'xunit', 'vitest', 'integration-testing'],
        link: 'https://en.wikipedia.org/wiki/Unit_testing'
    },
    {
        key: 'integration-testing',
        title: 'Integration Testing',
        categories: [SkillCategory.QA],
        proficiency: SkillProficiency.Expert,
        description: 'I have written many integration tests for applications in various languages and frameworks.',
        link: 'https://en.wikipedia.org/wiki/Integration_testing',
        relatedSkillKeys: ['jest', 'xunit', 'vitest', 'unit-testing'],
    },
    {
        key: 'end-to-end-testing',
        title: 'End-to-End Testing',
        categories: [SkillCategory.QA],
        proficiency: SkillProficiency.Expert,
        description: 'I have written end-to-end tests for web applications in various languages and frameworks.',
        link: 'https://en.wikipedia.org/wiki/End-to-end_testing',
        relatedSkillKeys: ['selenium', 'playwright', 'unit-testing', 'integration-testing']
    },
] as readonly Skill[];

export default qa;