import { SkillCategory } from "../skill-categories";
import { SkillProficiency } from "../skill-proficiency";
import type { Skill } from "../types";

const management = [
    {
        key: 'agile',
        title: 'Agile',
        categories: [SkillCategory.Management],
        proficiency: SkillProficiency.Proficient,
        description: 'I have worked in Agile environments for many years, using Scrum, Kanban and other methodologies. I have experience in both leading and participating in Agile teams.',
        link: 'https://agilemanifesto.org/',
        relatedSkillKeys: ['jira'],
    },
    {
        key: 'jira',
        title: 'Jira',
        categories: [SkillCategory.Management],
        proficiency: SkillProficiency.Proficient,
        description: "I have solid knowledge of Atlassian's Jira for managing projects, development tasks and sprints.",
        link: 'https://www.atlassian.com/software/jira',
        relatedSkillKeys: ['agile', 'linear'],
    },
    {
        key: 'linear',
        title: 'Linear',
        categories: [SkillCategory.Management],
        proficiency: SkillProficiency.Proficient,
        description: 'I have used Linear as a project management tool for personal projects.',
        link: 'https://linear.app/',
        relatedSkillKeys: ['agile', 'jira'],
    },
    {
        key: 'scoping',
        title: 'Scoping',
        categories: [SkillCategory.Management],
        proficiency: SkillProficiency.Proficient,
        description: 'I have years of experience in scoping projects, creating project plans, and managing project estimates.',
        relatedSkillKeys: ['agile', 'roadmapping'],
    },
    {
        key: 'roadmapping',
        title: 'Roadmapping',
        categories: [SkillCategory.Management],
        proficiency: SkillProficiency.Proficient,
        description: 'I have experience in creating and managing product roadmaps.',
        relatedSkillKeys: ['agile', 'scoping'],
    },
    {
        key: 'team-management',
        title: 'Team Management',
        categories: [SkillCategory.Management],
        proficiency: SkillProficiency.Proficient,
        description: 'I have experience in managing teams of developers, designers, QA and other professionals.',
        relatedSkillKeys: ['agile'],
    },
    {
        key: 'bug-triage',
        title: 'Bug Triage',
        categories: [SkillCategory.Management],
        proficiency: SkillProficiency.Proficient,
        description: 'I have experience in triaging bugs and managing bug backlogs.',
        relatedSkillKeys: ['agile'],
    },
    {
        key: 'documentation',
        title: 'Documentation',
        categories: [SkillCategory.Management],
        proficiency: SkillProficiency.Proficient,
        description: 'I have experience in creating and maintaining technical documentation.',
    }
] as readonly Skill[];

export default management;