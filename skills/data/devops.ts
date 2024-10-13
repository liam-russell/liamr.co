import { SkillCategory } from "../skill-categories";
import { SkillProficiency } from "../skill-proficiency";
import type { Skill } from "../types";

const devops = [
    {
        key: 'cicd',
        title: 'Continuous Integration, Delivery and Deployment',
        link: 'https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment',
        proficiency: SkillProficiency.Expert,
        categories: [SkillCategory.DevOps],
        description: "I have configured multiple projects for build, test and deploy via multiple CI platforms. I favour container-based build platforms such as Azure DevOps for their flexibility.",
        relatedSkillKeys: ['aws', 'vc', 'vercel', 'netlify'],
        subSkills: [
            { name: 'Azure DevOps', url: 'https://dev.azure.com/' },
            { name: 'GitHub Actions', url: 'https://github.com' },
            { name: 'TeamCity', url: 'https://www.jetbrains.com/teamcity/' },
            { name: 'GoCD', url: 'https://www.gocd.org/' },
            { name: 'Vercel', url: 'https://vercel.com/' },
            { name: 'Netlify', url: 'https://netlify.com/' },
        ]
    },
    {
        key: 'sast',
        title: 'Static Application Security Testing',
        link: 'https://owasp.org/www-community/Static_Code_Analysis',
        proficiency: SkillProficiency.Proficient,
        categories: [SkillCategory.DevOps, SkillCategory.Security],
        description: "I've used multiple SAST tools to identify and fix security vulnerabilities in code.",
        relatedSkillKeys: ['owasp'],
        subSkills: [
            { name: 'SonarQube', url: 'https://www.sonarqube.org/' },
            { name: 'Snyk', url: 'https://snyk.io/' },
        ]
    },
    {
        key: 'qualys',
        title: 'Qualys',
        link: 'https://www.qualys.com/',
        proficiency: SkillProficiency.Familiar,
        categories: [SkillCategory.DevOps, SkillCategory.Security],
        description: "I've used Qualys to scan servers and applications for vulnerabilities.",
        relatedSkillKeys: ['owasp', 'sast'],
    },
    {
        key: 'owasp',
        title: 'OWASP',
        link: 'https://owasp.org/',
        proficiency: SkillProficiency.Proficient,
        categories: [SkillCategory.DevOps, SkillCategory.Security],
        description: "I'm familiar with the OWASP top 10 and have used their guidelines to develop secure applications.",
        relatedSkillKeys: ['sast'],
        subSkills: [
            { name: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' },
            { name: 'OWASP Cheat Sheet Series', url: 'https://cheatsheetseries.owasp.org/' },
        ]
    },
    {
        key: 'vc',
        title: 'Version Control',
        link: 'https://git-scm.com/',
        proficiency: SkillProficiency.Expert,
        categories: [SkillCategory.DevOps],
        description: "I've used Git for version control for many years, and have experience with various Git repository hosts. I also have experience with Mercurial.",
        relatedSkillKeys: ['cicd'],
        subSkills: [
            { name: 'GitHub', url: 'https://github.com' },
            { name: 'Bitbucket', url: 'https://bitbucket.org' },
            { name: 'Azure DevOps', url: 'https://dev.azure.com/' },
            { name: 'Git', url: 'https://git-scm.com/' },
            { name: 'Mercurial', url: 'https://www.mercurial-scm.org/' },
        ]
    },
    {
        key: 'vite',
        title: 'Vite',
        link: 'https://vitejs.dev/',
        proficiency: SkillProficiency.Familiar,
        categories: [SkillCategory.DevOps],
        description: "I have used Vite to build JavaScript/TypeScript web applications.",
        relatedSkillKeys: ['nodejs', 'vite', 'javascript', 'vitest', 'webpack', 'react'],
    },
    {
        key: 'webpack',
        title: 'Webpack',
        link: 'https://webpack.js.org/',
        proficiency: SkillProficiency.Expert,
        categories: [SkillCategory.DevOps],
        description: "I have used Webpack to build JavaScript/TypeScript web applications. I have implemented multiple custom configurations for different projects.",
        relatedSkillKeys: ['nodejs', 'vite', 'javascript', 'jest', 'react'],
        subSkills: [
            { name: 'Babel', url: 'https://babeljs.io/' },
            { name: 'CoreJS', url: 'https://github.com/zloirock/core-js' },
        ]
    }
] as readonly Skill[];

export default devops;