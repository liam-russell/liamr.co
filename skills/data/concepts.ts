import { SkillCategory } from "../skill-categories";
import { SkillProficiency } from "../skill-proficiency";
import { Skill } from "../types";

const concepts = [
    {
        key: 'oop',
        title: 'Object Oriented Programming',
        categories: [SkillCategory.Concepts],
        description: "I have a strong understanding of OOP principles in multiple languages.",
        relatedSkillKeys: ['csharp', 'javascript'],
        proficiency: SkillProficiency.Expert,
        link: 'https://en.wikipedia.org/wiki/Object-oriented_programming',
        subSkills: [
            { name: 'Encapsulation', url: 'https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)' },
            { name: 'Inheritance', url: 'https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)' },
            { name: 'Polymorphism', url: 'https://en.wikipedia.org/wiki/Polymorphism_(computer_science)' },
            { name: 'Abstraction', url: 'https://en.wikipedia.org/wiki/Abstraction_(computer_science)' },
        ]
    },
    {
        key: 'dependency-injection',
        title: 'Dependency Injection',
        categories: [SkillCategory.Concepts],
        description: "I have used DI in multiple projects to improve code maintainability and testability.",
        relatedSkillKeys: ['csharp'],
        proficiency: SkillProficiency.Expert,
        link: 'https://en.wikipedia.org/wiki/Dependency_injection',
        subSkills: [
            { name: 'Unity Container', url: 'https://github.com/unitycontainer' },
            { name: 'Autofac', url: 'https://autofac.org/' },
            { name: '.NET Core DI', url: 'https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection' },
        ]
    },
    {
        key: 'rest',
        title: 'RESTful APIs',
        categories: [SkillCategory.Concepts],
        description: "I have designed and implemented multiple RESTful APIs.",
        relatedSkillKeys: ['webapi'],
        proficiency: SkillProficiency.Expert,
        link: 'https://en.wikipedia.org/wiki/Representational_state_transfer',
        subSkills: [
            { name: 'Swagger', url: 'https://swagger.io/' },
            { name: 'OpenAPI', url: 'https://www.openapis.org/' },
            { name: 'Postman', url: 'https://www.postman.com/' },
        ]
    },
    {
        key: 'http',
        title: 'HTTP protocol',
        categories: [SkillCategory.Concepts],
        proficiency: SkillProficiency.Expert,
        description: "I have a strong understanding of the HTTP protocol."
    },
    {
        key: 'crypto',
        title: 'Cryptography',
        categories: [SkillCategory.Concepts, SkillCategory.Security],
        description: "I have a strong understanding of cryptographic principles and current best practices.",
        relatedSkillKeys: ['owasp'],
        proficiency: SkillProficiency.Proficient,
    },
    {
        key: 'websockets',
        title: 'Websockets',
        categories: [SkillCategory.Concepts],
        description: "I have used Websockets to build real-time applications. I have developed from-scratch implementations and used libraries such as SignalR and cloud tools such as AWS API Gateway.",
        relatedSkillKeys: ['aws', 'csharp', 'javascript', 'grpc'],
        proficiency: SkillProficiency.Expert,
        link: 'https://en.wikipedia.org/wiki/WebSocket',
        subSkills: [
            { name: 'SignalR', url: 'https://dotnet.microsoft.com/apps/aspnet/signalr' },
            { name: 'AWS API Gateway', url: 'https://aws.amazon.com/api-gateway/' },
        ]
    },
    {
        key: 'grpc',
        title: 'gRPC',
        categories: [SkillCategory.Concepts],
        description: "I have started to use gRPC for building high-performance APIs.",
        relatedSkillKeys: ['csharp', 'websockets'],
        proficiency: SkillProficiency.Learning,
        link: 'https://grpc.io/',
        subSkills: [
            { name: 'MassTransit', url: 'https://masstransit.io/' },
        ]
    },
    {
        key: 'https',
        title: 'HTTPS',
        categories: [SkillCategory.Concepts, SkillCategory.Security],
        proficiency: SkillProficiency.Expert,
        description: "I have a strong understanding of HTTPS best practices.",
        relatedSkillKeys: ['owasp', 'crypto'],
        link: 'https://en.wikipedia.org/wiki/HTTPS',
        subSkills: [
            { name: 'SSL/TLS', url: 'https://en.wikipedia.org/wiki/Transport_Layer_Security' },
            { name: 'Certificate Authorities', url: 'https://en.wikipedia.org/wiki/Certificate_authority' },
            { name: 'HSTS', url: 'https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security' }
        ]
    },
    {
        key: 'cors',
        title: 'CORS (Cross-Origin Resource Sharing)',
        categories: [SkillCategory.Concepts, SkillCategory.Security],
        proficiency: SkillProficiency.Expert,
        description: "I can configure CORS policies to secure web applications and investigate misconfigurations.",
        relatedSkillKeys: ['owasp'],
    },
    {
        key: 'security-best-practices',
        title: 'Security Best Practices',
        categories: [SkillCategory.Concepts, SkillCategory.Security],
        proficiency: SkillProficiency.Expert,
        description: "I am well-versed in security best practices for web applications and consider security in all aspects of development.",
        relatedSkillKeys: ['owasp', 'crypto', 'https', 'cors'],
        subSkills: [
            { name: 'OWASP Top 10', url: 'https://owasp.org/' },
            { name: 'OWASP Cheat Sheet Series', url: 'https://cheatsheetseries.owasp.org/' },
            { name: 'OWASP Application Security Verification Standard', url: 'https://owasp.org/www-project-application-security-verification-standard/' },
            { name: 'NIST Cybersecurity Framework', url: 'https://www.nist.gov/cyberframework' },
            { name: 'Australian Cyber Security Centre Essential Eight', url: 'https://www.cyber.gov.au/acsc/view-all-content/essential-eight' },
        ]
    },
    {
        key: 'validation',
        title: 'Validation',
        categories: [SkillCategory.Concepts],
        proficiency: SkillProficiency.Expert,
        description: "I have implemented validation logic in multiple applications. I am familiar with popular validation libraries and frameworks.",
        subSkills: [
            { name: 'FluentValidation', url: 'https://fluentvalidation.net/' },
            { name: 'Data Annotations', url: 'https://docs.microsoft.com/en-us/dotnet/api/system.componentmodel.dataannotations?view=net-5.0' },
            { name: 'Zod', url: 'https://zod.dev/' }
        ]
    },
    {
        key: 'openid-connect',
        title: 'OpenID Connect',
        categories: [SkillCategory.Concepts, SkillCategory.Security],
        proficiency: SkillProficiency.Expert,
        description: "I have used OpenID Connect for authentication extensively. I have worked with both OpenID servers and clients and all auth flows.",
        relatedSkillKeys: ['oauth'],
        link: 'https://openid.net/connect/',
        subSkills: [
            { name: 'IdentityServer', url: 'https://identityserver.io/' },
            { name: 'Auth0', url: 'https://auth0.com/' },
            { name: 'Okta', url: 'https://www.okta.com/' },
            { name: 'openid-client', url: 'https://www.npmjs.com/package/openid-client' },
        ]
    },
    {
        key: 'oauth',
        title: 'OAuth 2',
        categories: [SkillCategory.Concepts, SkillCategory.Security],
        proficiency: SkillProficiency.Expert,
        description: "I have used OAuth 2 for authentication and authorisation in multiple projects and have maintained an OAuth2 server platform.",
        relatedSkillKeys: ['openid-connect'],
    },
    {
        key: 'openapi',
        title: 'OpenAPI',
        categories: [SkillCategory.Concepts],
        proficiency: SkillProficiency.Expert,
        description: "I have used OpenAPI to document and design APIs. I have worked with both OpenAPI 2 and 3. I have used tools such as Swagger UI and ReDoc. I have generated client libraries from OpenAPI specs.",
        relatedSkillKeys: ['rest', 'asyncapi'],
        link: 'https://swagger.io/specification/',
        subSkills: [
            { name: 'Swagger UI', url: 'https://swagger.io/tools/swagger-ui/' },
            { name: 'ReDoc', url: 'https://redoc.ly/' },
            { name: 'NSwag', url: 'https://github.com/RicoSuter/NSwag' }
        ]
    },
    {
        key: 'asyncapi',
        title: 'AsyncAPI',
        categories: [SkillCategory.Concepts],
        proficiency: SkillProficiency.Learning,
        description: "I have started to use AsyncAPI to document and design asynchronous APIs.",
        relatedSkillKeys: ['openapi', 'websockets'],
        link: 'https://www.asyncapi.com/'
    }
] as Skill[];

export default concepts;