import skills from '@/skills/data/skills';
import type { MetadataRoute } from 'next';

const BASE_URL = 'https://liamr.co';

export default function sitemap(): MetadataRoute.Sitemap {
    const skillPages = skills.map((skill) => ({
        url: `${BASE_URL}/skills/${skill.key}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${BASE_URL}/skills`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...skillPages,
    ];
}
