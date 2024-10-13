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
        relatedSkillKeys: ['aws', 'csharp', 'nodejs', 'aws', 'nextjs'],
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
        description: 'I have extensive experience with many AWS services, and have arhitected multiple cloud-native products using AWS infrastructure. I have attended many AWS events and have a deep understanding of the AWS ecosystem.',
        link: 'https://aws.amazon.com/',
        relatedSkillKeys: ['serverless', 'cicd'],
        subSkills: [
            { name: 'S3 - Simple Email Service', url: 'https://aws.amazon.com/s3/' },
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
            { name: 'XRay - Service Integration Anaylser', url: 'https://aws.amazon.com/xray/' },
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
    }
] as readonly Skill[];

export default cloud;