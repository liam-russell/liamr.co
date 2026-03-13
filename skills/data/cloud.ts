import { SkillCategory } from "../skill-categories";
import { SkillProficiency } from "../skill-proficiency";
import { Skill } from "../types";

const cloud = [
    {
        key: 'serverless',
        title: 'Serverless compute',
        categories: [SkillCategory.Backend, SkillCategory.Cloud],
        proficiency: SkillProficiency.Expert,
        description: "I have years of experience with the AWS Lambda serverless platform, " +
            "and deploying scalable C# .NET, NodeJS and Python applications to it. " +
            "I'm a strong advocate for serverless technologies as a whole, and feel they will " +
            "play a central part in future web systems' architecture and best-practices. " +
            "Related tools and services include the CDK, Serverless Application Model and CloudFormation.",
        link: 'https://aws.amazon.com/serverless/',
        relatedSkillKeys: ['aws', 'csharp', 'nodejs', 'nextjs'],
        subSkills: [
            { name: 'AWS CDK', url: 'https://aws.amazon.com/cdk/' },
            { name: 'AWS SAM', url: 'https://aws.amazon.com/serverless/sam/' },
            { name: 'CloudFormation', url: 'https://aws.amazon.com/cloudformation/' },
            { name: 'SST', url: 'https://sst.dev/' },
        ]
    },
    {
        key: 'aws',
        title: 'Amazon Web Services (AWS)',
        categories: [SkillCategory.Cloud, SkillCategory.Backend, SkillCategory.Databases, SkillCategory.Servers, SkillCategory.DevOps],
        proficiency: SkillProficiency.Expert,
        description: 'I have extensive experience with many AWS services, and have architected multiple cloud-native products using AWS infrastructure. I have attended many AWS events and have a deep understanding of the AWS ecosystem.',
        link: 'https://aws.amazon.com/',
        relatedSkillKeys: ['serverless', 'cicd', 'docker'],
        subSkills: [
            { name: 'S3 - Simple Storage Service', url: 'https://aws.amazon.com/s3/' },
            { name: 'EC2 - Elastic Compute Cloud', url: 'https://aws.amazon.com/ec2/' },
            { name: 'RDS - Relational Database Service', url: 'https://aws.amazon.com/rds/' },
            { name: 'DynamoDB - NoSQL Database', url: 'https://aws.amazon.com/dynamodb/' },
            { name: 'Lambda - Serverless Functions', url: 'https://aws.amazon.com/lambda/' },
            { name: 'Fargate - Managed Container Hosting', url: 'https://aws.amazon.com/fargate/' },
            { name: 'ElastiCache - Managed Cache Service', url: 'https://aws.amazon.com/elasticache/' },
            { name: 'ECS - Elastic Container Service', url: 'https://aws.amazon.com/ecs/' },
            { name: 'CodeBuild - DevOps - Continuous Integration', url: 'https://aws.amazon.com/codebuild/' },
            { name: 'CloudFormation - Cloud Scaffolding and Delivery', url: 'https://aws.amazon.com/cloudformation/' },
            { name: 'SAM - Serverless Application Model', url: 'https://github.com/awslabs/serverless-application-model' },
            { name: 'API Gateway', url: 'https://aws.amazon.com/apigateway/' },
            { name: 'IAM - Identity and Access Management', url: 'https://aws.amazon.com/iam/' },
            { name: 'IoT - Internet of Things', url: 'https://aws.amazon.com/iot/' },
            { name: 'Cognito - Authentication Platform', url: 'https://aws.amazon.com/cognito/' },
            { name: 'Connect - Cloud Call Center', url: 'https://aws.amazon.com/connect/' },
            { name: 'SNS - Simple Notification Service', url: 'https://aws.amazon.com/sns/' },
            { name: 'SES - Simple Email Service', url: 'https://aws.amazon.com/ses/' },
            { name: 'CloudWatch', url: 'https://aws.amazon.com/cloudwatch/' },
            { name: 'XRay - Service Integration Analyser', url: 'https://aws.amazon.com/xray/' },
            { name: 'SQS - Simple Queue Service', url: 'https://aws.amazon.com/sqs/' },
            { name: 'Step Functions - Workflow Orchestration', url: 'https://aws.amazon.com/step-functions/' },
            { name: 'ELB - Elastic Load Balancing', url: 'https://aws.amazon.com/elasticloadbalancing/' },
            { name: 'Bedrock - Managed LLM Platform', url: 'https://aws.amazon.com/bedrock/' },
            { name: 'Route 53 - DNS Service', url: 'https://aws.amazon.com/route53/' },
            { name: 'CloudFront - CDN', url: 'https://aws.amazon.com/cloudfront/' },
        ]
    },
    {
        key: 'vercel',
        title: 'Vercel',
        categories: [SkillCategory.Cloud, SkillCategory.Frontend],
        proficiency: SkillProficiency.Expert,
        description: 'I have used Vercel to deploy multiple NextJS applications, and have experience with their serverless functions and environment variables.',
        link: 'https://vercel.com/',
        relatedSkillKeys: ['nextjs', 'serverless']
    },
    {
        key: 'netlify',
        title: 'Netlify',
        categories: [SkillCategory.Cloud, SkillCategory.Frontend],
        proficiency: SkillProficiency.Expert,
        description: 'I have used Netlify to deploy multiple static sites and serverless functions.',
        link: 'https://netlify.com/',
        relatedSkillKeys: ['react', 'html', 'css', 'javascript', 'serverless']
    },
    {
        key: 'sst',
        title: 'SST',
        categories: [SkillCategory.Cloud, SkillCategory.DevOps, SkillCategory.Frontend],
        proficiency: SkillProficiency.Proficient,
        description: 'I have used SST (Serverless Stack) to deploy Next.js applications to AWS, taking advantage of its infrastructure-as-code approach built on Pulumi and native AWS services.',
        link: 'https://sst.dev/',
        relatedSkillKeys: ['nextjs', 'aws', 'serverless', 'iac']
    },
    {
        key: 'azure',
        title: 'Microsoft Azure',
        categories: [SkillCategory.Cloud, SkillCategory.DevOps],
        proficiency: SkillProficiency.Familiar,
        description: 'I have extensive experience with Azure DevOps for CI/CD pipelines, build agents, and Git hosting. ' +
            'I have used Azure container services for a prototype .NET deployment platform. My primary cloud experience is AWS, but the concepts transfer directly.',
        link: 'https://azure.microsoft.com/',
        relatedSkillKeys: ['aws', 'cicd', 'docker', 'csharp'],
        subSkills: [
            { name: 'Azure DevOps', url: 'https://dev.azure.com/' },
            { name: 'Azure Pipelines', url: 'https://azure.microsoft.com/en-au/products/devops/pipelines' },
            { name: 'Azure Container Apps', url: 'https://azure.microsoft.com/en-au/products/container-apps' },
        ]
    },
    {
        key: 'aws-bedrock',
        title: 'AWS Bedrock',
        categories: [SkillCategory.Cloud, SkillCategory.Backend],
        proficiency: SkillProficiency.Proficient,
        description: 'I have used AWS Bedrock to integrate managed foundation models into production applications, including Anthropic Claude and Amazon Titan, with a focus on RAG pipelines and prompt orchestration.',
        link: 'https://aws.amazon.com/bedrock/',
        relatedSkillKeys: ['aws', 'llm-integration', 'csharp', 'javascript'],
        subSkills: [
            { name: 'Anthropic Claude', url: 'https://www.anthropic.com/' },
            { name: 'Amazon Titan', url: 'https://aws.amazon.com/bedrock/titan/' },
            { name: 'Knowledge Bases (RAG)', url: 'https://aws.amazon.com/bedrock/knowledge-bases/' },
            { name: 'Bedrock Agents', url: 'https://aws.amazon.com/bedrock/agents/' },
        ]
    },
    {
        key: 'dynamodb',
        title: 'Amazon DynamoDB',
        categories: [SkillCategory.Databases, SkillCategory.Cloud],
        proficiency: SkillProficiency.Proficient,
        description: 'I have designed and operated DynamoDB tables for high-throughput, low-latency workloads. I understand single-table design patterns, GSI overloading, and capacity planning for both on-demand and provisioned modes.',
        link: 'https://aws.amazon.com/dynamodb/',
        relatedSkillKeys: ['aws', 'database-design', 'serverless'],
        subSkills: [
            { name: 'Single-Table Design', url: 'https://www.alexdebrie.com/posts/dynamodb-single-table/' },
            { name: 'DynamoDB Streams', url: 'https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html' },
            { name: 'Global Secondary Indexes', url: 'https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html' },
        ]
    },
    {
        key: 'redis',
        title: 'Redis',
        categories: [SkillCategory.Databases, SkillCategory.Cloud],
        proficiency: SkillProficiency.Proficient,
        description: 'I have used Redis for distributed caching, session storage, and pub/sub messaging in production systems, primarily via AWS ElastiCache.',
        link: 'https://redis.io/',
        relatedSkillKeys: ['aws', 'caching', 'performance-optimisation', 'horizontal-scaling'],
        subSkills: [
            { name: 'AWS ElastiCache', url: 'https://aws.amazon.com/elasticache/' },
            { name: 'Redis Pub/Sub', url: 'https://redis.io/docs/interact/pubsub/' },
            { name: 'Redis Streams', url: 'https://redis.io/docs/data-types/streams/' },
        ]
    },
    {
        key: 'dns-networking',
        title: 'DNS & Cloud Networking',
        categories: [SkillCategory.Cloud, SkillCategory.Concepts],
        proficiency: SkillProficiency.Proficient,
        description: 'I configure and manage DNS records, VPCs, subnets, NAT gateways, and security groups on AWS. I understand DNS resolution, routing policies, and network isolation for production environments.',
        link: 'https://aws.amazon.com/route53/',
        relatedSkillKeys: ['aws', 'load-balancing', 'https', 'infrastructure-as-code'],
        subSkills: [
            { name: 'Route 53', url: 'https://aws.amazon.com/route53/' },
            { name: 'VPC', url: 'https://aws.amazon.com/vpc/' },
            { name: 'Security Groups', url: 'https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html' },
            { name: 'CloudFront', url: 'https://aws.amazon.com/cloudfront/' },
        ]
    },
    {
        key: 'secrets-management',
        title: 'Secrets Management',
        categories: [SkillCategory.Cloud, SkillCategory.Security],
        proficiency: SkillProficiency.Proficient,
        description: 'I manage application secrets using dedicated secret stores rather than environment variables or config files. I have implemented secret rotation and least-privilege access patterns in production.',
        link: 'https://aws.amazon.com/secrets-manager/',
        relatedSkillKeys: ['aws', 'cicd', 'security-best-practices', 'infrastructure-as-code'],
        subSkills: [
            { name: 'AWS Secrets Manager', url: 'https://aws.amazon.com/secrets-manager/' },
            { name: 'AWS Parameter Store', url: 'https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html' },
            { name: 'Azure Key Vault', url: 'https://azure.microsoft.com/en-au/products/key-vault' },
        ]
    }
] as readonly Skill[];

export default cloud;