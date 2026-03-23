import { SkillCategory } from "../skill-categories";
import { SkillProficiency } from "../skill-proficiency";
import type { Skill } from "../types";

const management = [
    {
        key: 'agile',
        title: 'Agile',
        categories: [SkillCategory.Management],
        proficiency: SkillProficiency.Expert,
        description: 'I have worked in Agile environments for many years. I have led sprint planning, retrospectives, and daily stand-ups across Scrum and Kanban teams, and adapted processes to fit the team rather than forcing a framework.',
        link: 'https://agilemanifesto.org/',
        relatedSkillKeys: ['jira', 'scoping', 'roadmapping', 'team-management'],
    },
    {
        key: 'jira',
        title: 'Jira',
        categories: [SkillCategory.Management],
        proficiency: SkillProficiency.Expert,
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
        title: 'Scoping & Estimation',
        categories: [SkillCategory.Management],
        proficiency: SkillProficiency.Expert,
        description: 'I break down ambiguous requirements into deliverable work items, produce effort estimates, and identify technical risks early. I have scoped projects ranging from small features to multi-quarter platform migrations.',
        relatedSkillKeys: ['agile', 'roadmapping', 'team-management'],
    },
    {
        key: 'roadmapping',
        title: 'Roadmapping',
        categories: [SkillCategory.Management],
        proficiency: SkillProficiency.Expert,
        description: 'I build and maintain technical roadmaps, aligning engineering priorities with business goals. I facilitate trade-off discussions with stakeholders and adjust plans as requirements evolve.',
        relatedSkillKeys: ['agile', 'scoping', 'team-management'],
    },
    {
        key: 'team-management',
        title: 'Team Management',
        categories: [SkillCategory.Management],
        proficiency: SkillProficiency.Expert,
        description: 'I manage cross-functional engineering teams — running regular 1:1s, setting growth goals, conducting performance reviews, and participating in hiring. I focus on building autonomous teams with high trust and clear ownership.',
        relatedSkillKeys: ['agile', 'mentoring', 'scoping'],
    },
    {
        key: 'bug-triage',
        title: 'Bug Triage',
        categories: [SkillCategory.Management],
        proficiency: SkillProficiency.Expert,
        description: 'I have experience in triaging bugs and managing bug backlogs.',
        relatedSkillKeys: ['agile'],
    },
    {
        key: 'documentation',
        title: 'Documentation',
        categories: [SkillCategory.Management],
        proficiency: SkillProficiency.Expert,
        description: 'I have experience in creating and maintaining technical documentation.',
    },
    {
        key: 'figma',
        title: 'Figma',
        categories: [SkillCategory.Management, SkillCategory.Frontend],
        proficiency: SkillProficiency.Proficient,
        description: 'I implement designs from Figma and build design systems in code. I am also developing a Figma plugin and use Figma MCP servers for AI-powered design-to-code workflows.',
        link: 'https://www.figma.com/'
    },
    {
        key: 'security-audits',
        title: 'Security Audits & Compliance Documentation',
        categories: [SkillCategory.Security, SkillCategory.Management],
        proficiency: SkillProficiency.Proficient,
        description: 'I have led security audits, produced compliance documentation, and implemented remediation plans aligned with frameworks such as the Essential Eight and OWASP ASVS. I have also participated in SOC 2 audit processes and evidence gathering.',
        relatedSkillKeys: ['owasp', 'security-best-practices', 'accessibility-audits', 'sast', 'qualys'],
        subSkills: [
            { name: 'Essential Eight', url: 'https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/essential-eight' },
            { name: 'OWASP ASVS', url: 'https://owasp.org/www-project-application-security-verification-standard/' },
            { name: 'ISO 27001', url: 'https://www.iso.org/standard/27001' },
            { name: 'SOC 2', url: 'https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2' },
        ]
    },
    {
        key: 'mentoring',
        title: 'Mentoring & Code Review',
        categories: [SkillCategory.Management],
        proficiency: SkillProficiency.Expert,
        description: 'I mentor junior and mid-level engineers through regular 1:1s, pairing sessions, and thorough code reviews. I focus on raising the bar across the team rather than gatekeeping.',
        relatedSkillKeys: ['team-management', 'agile', 'documentation'],
    }
] as readonly Skill[];

export default management;