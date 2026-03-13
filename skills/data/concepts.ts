import { SkillCategory } from "../skill-categories";
import { SkillProficiency } from "../skill-proficiency";
import { Skill } from "../types";

const concepts = [
    {
        key: 'oop',
        title: 'Object Oriented Programming',
        categories: [SkillCategory.Concepts],
        description: "I apply OOP principles daily in C# and TypeScript — favouring composition, SOLID principles, and clean abstractions across large codebases.",
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
        title: 'HTTP Protocol',
        categories: [SkillCategory.Concepts],
        proficiency: SkillProficiency.Expert,
        description: "I have deep knowledge of the HTTP protocol including methods, status codes, caching headers, content negotiation, and HTTP/2 and HTTP/3 improvements. I use this understanding to design efficient APIs and debug network issues.",
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP',
        relatedSkillKeys: ['rest', 'https', 'cors'],
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
        ],
        relatedSkillKeys: ['zod'],
    },
    {
        key: 'zod',
        title: 'Zod',
        categories: [SkillCategory.Concepts, SkillCategory.Frameworks],
        proficiency: SkillProficiency.Expert,
        description: 'I use Zod extensively for runtime schema validation and type inference in TypeScript applications. It is my go-to for API input validation, form validation, and ensuring type safety at runtime boundaries.',
        link: 'https://zod.dev/',
        relatedSkillKeys: ['typescript', 'validation', 'trpc', 'ts-rest', 'nextjs'],
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
    },
    {
        key: 'horizontal-scaling',
        title: 'Horizontal Scaling',
        categories: [SkillCategory.Concepts, SkillCategory.Cloud],
        proficiency: SkillProficiency.Expert,
        description: "I have designed and implemented horizontally scalable architectures using load balancers, container orchestration, and auto-scaling groups on AWS.",
        relatedSkillKeys: ['aws', 'serverless', 'docker', 'load-balancing'],
        link: 'https://en.wikipedia.org/wiki/Scalability#Horizontal_(scale_out)',
    },
    {
        key: 'event-driven-architecture',
        title: 'Event-Driven Architecture',
        categories: [SkillCategory.Concepts, SkillCategory.Backend],
        proficiency: SkillProficiency.Expert,
        description: "I have designed and built event-driven systems using message buses, queues, and pub/sub patterns. I have extensive experience with Rebus on .NET and AWS SNS/SQS.",
        relatedSkillKeys: ['aws', 'csharp', 'websockets', 'dotnet'],
        link: 'https://en.wikipedia.org/wiki/Event-driven_architecture',
        subSkills: [
            { name: 'Rebus', url: 'https://github.com/rebus-org/Rebus' },
            { name: 'AWS SNS', url: 'https://aws.amazon.com/sns/' },
            { name: 'AWS SQS', url: 'https://aws.amazon.com/sqs/' },
            { name: 'MassTransit', url: 'https://masstransit.io/' },
        ]
    },
    {
        key: 'load-balancing',
        title: 'Load Balancing',
        categories: [SkillCategory.Concepts, SkillCategory.Cloud],
        proficiency: SkillProficiency.Proficient,
        description: "I have configured and managed load balancers for high-availability web applications, including AWS ALB/NLB and reverse proxy setups.",
        relatedSkillKeys: ['aws', 'horizontal-scaling', 'docker'],
        link: 'https://en.wikipedia.org/wiki/Load_balancing_(computing)',
        subSkills: [
            { name: 'AWS ALB', url: 'https://aws.amazon.com/elasticloadbalancing/application-load-balancer/' },
            { name: 'AWS NLB', url: 'https://aws.amazon.com/elasticloadbalancing/network-load-balancer/' },
            { name: 'Nginx', url: 'https://nginx.org/' },
        ]
    },
    {
        key: 'llm-integration',
        title: 'LLM Integration',
        categories: [SkillCategory.Concepts, SkillCategory.Cloud],
        proficiency: SkillProficiency.Proficient,
        description: "I have integrated large language models into production applications using APIs such as OpenAI, AWS Bedrock, and custom prompt engineering pipelines.",
        relatedSkillKeys: ['aws', 'javascript', 'csharp'],
        link: 'https://en.wikipedia.org/wiki/Large_language_model',
        subSkills: [
            { name: 'OpenAI API', url: 'https://platform.openai.com/' },
            { name: 'AWS Bedrock', url: 'https://aws.amazon.com/bedrock/' },
            { name: 'Anthropic Claude', url: 'https://www.anthropic.com/' },
            { name: 'Prompt Engineering', url: 'https://en.wikipedia.org/wiki/Prompt_engineering' },
        ]
    },
    {
        key: 'modular-monolith',
        title: 'Modular Monolith Architecture',
        categories: [SkillCategory.Concepts, SkillCategory.Backend],
        proficiency: SkillProficiency.Expert,
        description: "I design well-bounded modules with clear interfaces and dependency rules, achieving strong isolation within a single deployable unit. Modular monoliths are my default starting point — they give you most of the benefits of service boundaries with far less operational overhead, and decompose cleanly into microservices when the time is right.",
        relatedSkillKeys: ['oop', 'dependency-injection', 'event-driven-architecture', 'dotnet', 'horizontal-scaling', 'microservices'],
        link: 'https://www.milanjovanovic.tech/blog/what-is-a-modular-monolith',
    },
    {
        key: 'caching',
        title: 'Caching Strategies',
        categories: [SkillCategory.Concepts, SkillCategory.Cloud],
        proficiency: SkillProficiency.Proficient,
        description: "I have implemented application-level, distributed, and edge caching using Redis, ElastiCache, and CDN cache headers to reduce latency and database load.",
        relatedSkillKeys: ['aws', 'performance-optimisation', 'horizontal-scaling'],
        link: 'https://aws.amazon.com/caching/',
        subSkills: [
            { name: 'Redis', url: 'https://redis.io/' },
            { name: 'AWS ElastiCache', url: 'https://aws.amazon.com/elasticache/' },
            { name: 'CDN Caching', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching' },
            { name: 'HTTP Cache Headers', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control' },
        ]
    },
    {
        key: 'monitoring',
        title: 'Monitoring & Observability',
        categories: [SkillCategory.Concepts, SkillCategory.DevOps, SkillCategory.Cloud],
        proficiency: SkillProficiency.Proficient,
        description: "I have set up monitoring, logging, alerting, and distributed tracing for production systems using CloudWatch, X-Ray, and structured logging to maintain visibility into system health.",
        relatedSkillKeys: ['aws', 'cicd', 'docker'],
        link: 'https://en.wikipedia.org/wiki/Observability_(software)',
        subSkills: [
            { name: 'AWS CloudWatch', url: 'https://aws.amazon.com/cloudwatch/' },
            { name: 'AWS X-Ray', url: 'https://aws.amazon.com/xray/' },
            { name: 'Structured Logging', url: 'https://serilog.net/' },
            { name: 'Datadog', url: 'https://www.datadoghq.com/' },
        ]
    },
    {
        key: 'database-design',
        title: 'Database Design',
        categories: [SkillCategory.Concepts, SkillCategory.Databases],
        proficiency: SkillProficiency.Expert,
        description: "I design relational and NoSQL database schemas with a focus on normalisation, indexing strategies, query performance, and data integrity. I have modelled complex domains across multiple production systems.",
        relatedSkillKeys: ['sql', 'entityframework', 'drizzle', 'aws'],
        link: 'https://en.wikipedia.org/wiki/Database_design',
        subSkills: [
            { name: 'Normalisation', url: 'https://en.wikipedia.org/wiki/Database_normalization' },
            { name: 'Indexing', url: 'https://en.wikipedia.org/wiki/Database_index' },
            { name: 'DynamoDB Modelling', url: 'https://www.alexdebrie.com/posts/dynamodb-single-table/' },
        ]
    },
    {
        key: 'performance-optimisation',
        title: 'Performance Optimisation',
        categories: [SkillCategory.Concepts, SkillCategory.Frontend],
        proficiency: SkillProficiency.Expert,
        description: "I profile and optimise both frontend and backend performance — from Core Web Vitals and bundle analysis to database query tuning and N+1 detection.",
        relatedSkillKeys: ['react', 'nextjs', 'caching', 'database-design'],
        link: 'https://web.dev/performance/',
        subSkills: [
            { name: 'Core Web Vitals', url: 'https://web.dev/vitals/' },
            { name: 'Lighthouse', url: 'https://developer.chrome.com/docs/lighthouse/' },
            { name: 'Bundle Analysis', url: 'https://www.npmjs.com/package/webpack-bundle-analyzer' },
        ]
    },
    {
        key: 'api-design',
        title: 'API Design',
        categories: [SkillCategory.Concepts, SkillCategory.Backend],
        proficiency: SkillProficiency.Expert,
        description: "I design consistent, well-documented APIs with clear versioning strategies, pagination, error contracts, and rate limiting. I favour contract-first design using OpenAPI specs.",
        relatedSkillKeys: ['rest', 'openapi', 'asyncapi', 'grpc', 'websockets', 'webapi'],
        link: 'https://swagger.io/resources/articles/best-practices-in-api-design/',
        subSkills: [
            { name: 'Versioning', url: 'https://restfulapi.net/versioning/' },
            { name: 'Pagination', url: 'https://www.django-rest-framework.org/api-guide/pagination/' },
            { name: 'Error Contracts (RFC 7807)', url: 'https://www.rfc-editor.org/rfc/rfc7807' },
        ]
    },
    {
        key: 'microservices',
        title: 'Microservices Architecture',
        categories: [SkillCategory.Concepts, SkillCategory.Backend, SkillCategory.Cloud],
        proficiency: SkillProficiency.Expert,
        description: "I have designed and operated microservice architectures in production. Distribution is powerful for independent scaling and deployment, but I apply it deliberately — extracting services when there is a clear domain boundary and operational need rather than defaulting to it upfront.",
        relatedSkillKeys: ['modular-monolith', 'event-driven-architecture', 'docker', 'aws', 'horizontal-scaling', 'api-design', 'grpc'],
        link: 'https://microservices.io/',
        subSkills: [
            { name: 'Service Discovery', url: 'https://microservices.io/patterns/service-registry.html' },
            { name: 'Circuit Breakers', url: 'https://microservices.io/patterns/reliability/circuit-breaker.html' },
            { name: 'Saga Pattern', url: 'https://microservices.io/patterns/data/saga.html' },
        ]
    },
    {
        key: 'domain-driven-design',
        title: 'Domain-Driven Design',
        categories: [SkillCategory.Concepts, SkillCategory.Backend],
        proficiency: SkillProficiency.Expert,
        description: 'I apply DDD to model complex business domains with bounded contexts, aggregates, and ubiquitous language. I use strategic design to define service and module boundaries and tactical patterns to keep domain logic expressive and testable.',
        link: 'https://martinfowler.com/bliki/DomainDrivenDesign.html',
        relatedSkillKeys: ['modular-monolith', 'microservices', 'oop', 'event-driven-architecture', 'cqrs'],
        subSkills: [
            { name: 'Bounded Contexts', url: 'https://martinfowler.com/bliki/BoundedContext.html' },
            { name: 'Aggregates', url: 'https://martinfowler.com/bliki/DDD_Aggregate.html' },
            { name: 'Domain Events', url: 'https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/domain-events-design-implementation' },
        ]
    },
    {
        key: 'data-migration',
        title: 'Data Migration & Schema Evolution',
        categories: [SkillCategory.Concepts, SkillCategory.Databases],
        proficiency: SkillProficiency.Expert,
        description: 'I plan and execute database schema migrations with zero-downtime strategies including expand-contract patterns, backfill scripts, and incremental rollouts. I have managed migrations across EF Core, Drizzle, and raw SQL.',
        link: 'https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/',
        relatedSkillKeys: ['database-design', 'sql', 'postgresql', 'entityframework', 'drizzle'],
        subSkills: [
            { name: 'EF Core Migrations', url: 'https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/' },
            { name: 'Drizzle Migrations', url: 'https://orm.drizzle.team/docs/migrations' },
            { name: 'Expand-Contract Pattern', url: 'https://openpracticelibrary.com/practice/expand-and-contract-pattern/' },
        ]
    },
    {
        key: 'responsive-design',
        title: 'Responsive Design',
        categories: [SkillCategory.Concepts, SkillCategory.Frontend],
        proficiency: SkillProficiency.Expert,
        description: 'I build interfaces that work seamlessly across all screen sizes using mobile-first design, fluid layouts, and modern CSS techniques. This site is an example of my responsive design approach.',
        link: 'https://web.dev/responsive-web-design-basics/',
        relatedSkillKeys: ['css', 'tailwindcss', 'bootstrap', 'html', 'accessibility-audits'],
    },
    {
        key: 'authentication',
        title: 'Authentication & Authorisation',
        categories: [SkillCategory.Concepts, SkillCategory.Security],
        proficiency: SkillProficiency.Expert,
        description: 'I have designed and implemented authentication and authorisation systems across multiple products — from integrating identity providers to building role-based and policy-based access control. I treat auth as a core architectural concern, not an afterthought.',
        link: 'https://auth0.com/docs/get-started/identity-fundamentals',
        relatedSkillKeys: ['openid-connect', 'oauth', 'security-best-practices', 'aws', 'secrets-management'],
        subSkills: [
            { name: 'RBAC', url: 'https://en.wikipedia.org/wiki/Role-based_access_control' },
            { name: 'Policy-Based Auth', url: 'https://learn.microsoft.com/en-us/aspnet/core/security/authorization/policies' },
            { name: 'AWS Cognito', url: 'https://aws.amazon.com/cognito/' },
            { name: 'JWT', url: 'https://jwt.io/' },
        ]
    },
    {
        key: 'resilience',
        title: 'Error Handling & Resilience',
        categories: [SkillCategory.Concepts, SkillCategory.Backend],
        proficiency: SkillProficiency.Proficient,
        description: 'I build resilient systems using retry policies, circuit breakers, timeouts, fallbacks, and dead-letter queues. I design for graceful degradation so that partial failures do not cascade into total outages.',
        link: 'https://learn.microsoft.com/en-us/dotnet/architecture/microservices/implement-resilient-applications/',
        relatedSkillKeys: ['microservices', 'event-driven-architecture', 'monitoring', 'aws', 'logging'],
        subSkills: [
            { name: 'Polly (.NET)', url: 'https://github.com/App-vNext/Polly' },
            { name: 'Dead-Letter Queues', url: 'https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html' },
            { name: 'Exponential Backoff', url: 'https://en.wikipedia.org/wiki/Exponential_backoff' },
        ]
    },
    {
        key: 'rate-limiting',
        title: 'Rate Limiting & Throttling',
        categories: [SkillCategory.Concepts, SkillCategory.Backend, SkillCategory.Security],
        proficiency: SkillProficiency.Proficient,
        description: 'I implement rate limiting and throttling at both the application and infrastructure level to protect APIs from abuse and ensure fair usage. I have configured API Gateway throttling, .NET rate-limiting middleware, and CloudFront policies.',
        link: 'https://learn.microsoft.com/en-us/aspnet/core/performance/rate-limit',
        relatedSkillKeys: ['api-design', 'security-best-practices', 'aws', 'resilience'],
        subSkills: [
            { name: 'API Gateway Throttling', url: 'https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html' },
            { name: '.NET Rate Limiting', url: 'https://learn.microsoft.com/en-us/aspnet/core/performance/rate-limit' },
            { name: 'Token Bucket Algorithm', url: 'https://en.wikipedia.org/wiki/Token_bucket' },
        ]
    }
] as readonly Skill[];

export default concepts;