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
            { name: 'Semgrep', url: 'https://semgrep.dev/' },
            { name: 'Gitleaks', url: 'https://github.com/gitleaks/gitleaks' },
            { name: 'Microsoft Security DevOps', url: 'https://learn.microsoft.com/en-us/azure/defender-for-cloud/azure-devops-extension' },
            { name: 'OSV-Scanner', url: 'https://google.github.io/osv-scanner/' }
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
        key: 'turborepo',
        title: 'Turborepo',
        link: 'https://turbo.build/',
        proficiency: SkillProficiency.Proficient,
        categories: [SkillCategory.DevOps],
        description: "I use Turborepo to manage monorepo builds, caching, and task orchestration across multi-package TypeScript projects with npm workspaces.",
        relatedSkillKeys: ['nodejs', 'cicd', 'vite', 'nextjs'],
    },
    {
        key: 'vite',
        title: 'Vite',
        link: 'https://vitejs.dev/',
        proficiency: SkillProficiency.Expert,
        categories: [SkillCategory.DevOps],
        description: "I have used Vite to build JavaScript/TypeScript web applications.",
        relatedSkillKeys: ['nodejs', 'javascript', 'vitest', 'webpack', 'react'],
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
    },
    {
        key: 'docker',
        title: 'Docker',
        link: 'https://www.docker.com/',
        proficiency: SkillProficiency.Expert,
        categories: [SkillCategory.DevOps, SkillCategory.Cloud],
        description: "I have used Docker to containerise applications for development, testing, and production deployments. I have built multi-stage Dockerfiles and managed containers with Docker Compose and ECS.",
        relatedSkillKeys: ['aws', 'cicd', 'horizontal-scaling'],
        subSkills: [
            { name: 'Docker Compose', url: 'https://docs.docker.com/compose/' },
            { name: 'AWS ECS', url: 'https://aws.amazon.com/ecs/' },
            { name: 'AWS Fargate', url: 'https://aws.amazon.com/fargate/' },
        ]
    },
    {
        key: 'accessibility-audits',
        title: 'Accessibility Audits',
        link: 'https://www.w3.org/WAI/test-evaluate/',
        proficiency: SkillProficiency.Proficient,
        categories: [SkillCategory.QA, SkillCategory.Security],
        description: "I conduct accessibility audits against WCAG 2.2 AA standards using automated tools and manual testing. I advocate for inclusive design across all projects I lead.",
        relatedSkillKeys: ['owasp', 'security-audits'],
        subSkills: [
            { name: 'WCAG 2.2', url: 'https://www.w3.org/TR/WCAG22/' },
            { name: 'axe DevTools', url: 'https://www.deque.com/axe/' },
            { name: 'Lighthouse', url: 'https://developer.chrome.com/docs/lighthouse/' },
            { name: 'NVDA', url: 'https://www.nvaccess.org/' },
            { name: 'vitest-axe', url: 'https://github.com/chaance/vitest-axe' },
            { name: 'Storybook a11y addon', url: 'https://storybook.js.org/docs/writing-tests/accessibility-testing' }
        ]
    },
    {
        key: 'infrastructure-as-code',
        title: 'Infrastructure as Code',
        link: 'https://aws.amazon.com/cdk/',
        proficiency: SkillProficiency.Expert,
        categories: [SkillCategory.DevOps, SkillCategory.Cloud],
        description: "I define and manage cloud infrastructure as code using AWS CDK, CloudFormation, and Pulumi. I favour the CDK for its type safety and ability to share constructs across teams.",
        relatedSkillKeys: ['aws', 'serverless', 'docker', 'cicd', 'typescript', 'dotnet-aspire'],
        subSkills: [
            { name: 'AWS CDK', url: 'https://aws.amazon.com/cdk/' },
            { name: 'CloudFormation', url: 'https://aws.amazon.com/cloudformation/' },
            { name: 'AWS SAM', url: 'https://aws.amazon.com/serverless/sam/' },
            { name: 'Pulumi', url: 'https://www.pulumi.com/' },
            { name: 'Terraform', url: 'https://www.terraform.io/' },
            { name: 'Alchemy', url: 'https://alchemy.run/' },
            { name: 'Terragrunt', url: 'https://terragrunt.gruntwork.io/' }
        ]
    },
    {
        key: 'github-actions',
        title: 'GitHub Actions',
        categories: [SkillCategory.DevOps],
        proficiency: SkillProficiency.Proficient,
        description: 'I have built CI/CD workflows with GitHub Actions for build, test, and deployment pipelines. My primary CI/CD experience is with Azure DevOps, but I have solid working knowledge of GitHub Actions for open-source and team projects.',
        link: 'https://github.com/features/actions',
        relatedSkillKeys: ['cicd', 'vc', 'docker', 'infrastructure-as-code'],
        subSkills: [
            { name: 'Reusable Workflows', url: 'https://docs.github.com/en/actions/using-workflows/reusing-workflows' },
            { name: 'Matrix Builds', url: 'https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs' },
            { name: 'GitHub Packages', url: 'https://github.com/features/packages' },
        ]
    },
    {
        key: 'feature-flags',
        title: 'Feature Flags',
        categories: [SkillCategory.DevOps, SkillCategory.Concepts],
        proficiency: SkillProficiency.Proficient,
        description: 'I use feature flags to decouple deployment from release, enabling trunk-based development and safe progressive rollouts. I have implemented flag systems using both third-party platforms and custom solutions.',
        link: 'https://martinfowler.com/articles/feature-toggles.html',
        relatedSkillKeys: ['cicd', 'agile', 'microservices'],
        subSkills: [
            { name: 'LaunchDarkly', url: 'https://launchdarkly.com/' },
            { name: 'AWS AppConfig', url: 'https://docs.aws.amazon.com/appconfig/' },
            { name: 'Trunk-Based Development', url: 'https://trunkbaseddevelopment.com/' },
            { name: 'OpenFeature', url: 'https://openfeature.dev/' }
        ]
    },
    {
        key: 'logging',
        title: 'Logging & Structured Logging',
        categories: [SkillCategory.DevOps, SkillCategory.Concepts],
        proficiency: SkillProficiency.Expert,
        description: 'I implement structured, contextual logging and observability across applications using correlation IDs, log levels, and centralised aggregation. I have used OpenTelemetry via .NET Aspire for distributed tracing and metrics. I treat logs as a first-class observability signal alongside metrics and traces.',
        link: 'https://serilog.net/',
        relatedSkillKeys: ['monitoring', 'aws', 'docker', 'dotnet-aspire'],
        subSkills: [
            { name: 'Serilog', url: 'https://serilog.net/' },
            { name: 'OpenTelemetry', url: 'https://opentelemetry.io/' },
            { name: 'AWS CloudWatch Logs', url: 'https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/' },
            { name: 'Seq', url: 'https://datalust.co/seq' },
            { name: 'Pino', url: 'https://getpino.io/' }
        ]
    },
    {
        key: 'terraform',
        title: 'Terraform',
        categories: [SkillCategory.DevOps, SkillCategory.Cloud],
        proficiency: SkillProficiency.Proficient,
        description: "I provision whole platforms in Terraform: ECS services, Aurora Serverless, batch jobs, KMS keys, Cloudflare and Vercel, organised as reusable modules so a new environment is a small, reviewable diff.",
        link: 'https://www.terraform.io/',
        relatedSkillKeys: ['infrastructure-as-code', 'aws', 'cloudflare', 'vercel', 'cicd'],
        subSkills: [
            { name: 'Terragrunt', url: 'https://terragrunt.gruntwork.io/' },
            { name: 'Terraform Test', url: 'https://developer.hashicorp.com/terraform/language/tests' },
            { name: 'AWS Provider', url: 'https://registry.terraform.io/providers/hashicorp/aws/latest' },
            { name: 'Vercel Provider', url: 'https://registry.terraform.io/providers/vercel/vercel/latest' }
        ]
    },
    {
        key: 'software-distribution',
        title: 'Software Distribution & Signing',
        categories: [SkillCategory.DevOps, SkillCategory.Security],
        proficiency: SkillProficiency.Proficient,
        description: "I've built desktop software delivery: a launcher with binary-delta patching, signed builds and manifests, and malware scanning in the release pipeline.",
        relatedSkillKeys: ['cicd', 'crypto', 'release-management'],
        subSkills: [
            { name: 'Binary Delta Patching', url: 'https://en.wikipedia.org/wiki/Delta_update' },
            { name: 'Code Signing', url: 'https://en.wikipedia.org/wiki/Code_signing' },
        ]
    },
    {
        key: 'release-management',
        title: 'Release Management',
        categories: [SkillCategory.DevOps, SkillCategory.Management],
        proficiency: SkillProficiency.Expert,
        description: "I run release processes end to end: versioning, release notes, staged rollouts and rollback plans. I push for small, frequent releases over big quarterly drops.",
        relatedSkillKeys: ['cicd', 'feature-flags', 'vc'],
    },
    {
        key: 'incident-response',
        title: 'Incident Response',
        categories: [SkillCategory.DevOps, SkillCategory.Security],
        proficiency: SkillProficiency.Proficient,
        description: "I triage and resolve production incidents calmly, communicate clearly while they're happening, and follow up with blameless write-ups and fixes that stop them recurring.",
        relatedSkillKeys: ['monitoring', 'logging', 'bug-triage'],
        subSkills: [
            { name: 'Datadog On-Call', url: 'https://docs.datadoghq.com/service_management/on-call/' },
            { name: 'Instatus', url: 'https://instatus.com/' },
            { name: 'Runbooks', url: 'https://en.wikipedia.org/wiki/Runbook' }
        ]
    },
    {
        key: 'zero-downtime-deployments',
        title: 'Zero-Downtime Deployments',
        categories: [SkillCategory.DevOps, SkillCategory.Concepts],
        proficiency: SkillProficiency.Proficient,
        description: 'I ship without downtime using blue/green container deployments, expand/contract database migrations and feature flags, so deploying code and launching a feature are separate decisions.',
        link: 'https://martinfowler.com/bliki/BlueGreenDeployment.html',
        relatedSkillKeys: ['cicd', 'data-migration', 'feature-flags', 'docker', 'aws'],
        subSkills: [
            { name: 'Blue/Green Deployments', url: 'https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-blue-green.html' },
            { name: 'pgroll', url: 'https://github.com/xataio/pgroll' },
        ]
    }
] as readonly Skill[];

export default devops;