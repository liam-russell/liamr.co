export enum SkillCategory {
    Databases = 'Databases',
    Cloud = 'Cloud',
    Frontend = 'Frontend',
    Backend = 'Backend',
    DevOps = 'DevOps',
    Servers = 'Servers',
    Languages = 'Languages',
    Frameworks = 'Frameworks',
    Management = 'Management',
    Security = 'Security',
    QA = 'QA',
    Concepts = 'Concepts',
    AI = 'AI',
}

export const categoryTitles = {
    [SkillCategory.Databases]: "Databases",
    [SkillCategory.Cloud]: "Cloud",
    [SkillCategory.Frontend]: "Front-end web development",
    [SkillCategory.Backend]: "Back-end web development",
    [SkillCategory.DevOps]: "DevOps",
    [SkillCategory.Servers]: "Server management",
    [SkillCategory.Languages]: "Programming languages",
    [SkillCategory.Frameworks]: "Frameworks",
    [SkillCategory.Management]: "Project planning and management",
    [SkillCategory.Security]: "Security and compliance",
    [SkillCategory.QA]: "Quality assurance",
    [SkillCategory.Concepts]: "Concepts",
    [SkillCategory.AI]: "AI & machine learning",
} as const

export const allCategories = Object.values(SkillCategory) as readonly SkillCategory[]