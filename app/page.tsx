import Hero from '@/components/hero';
import SkillsBrowser from '@/components/skills/skills-browser';
import { browserData } from '@/skills/browser-data';

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Liam Russell',
    url: 'https://liamr.co',
    jobTitle: 'Technical Lead',
    sameAs: [
        'https://github.com/liam-russell',
        'https://www.linkedin.com/in/liam-russell/',
    ],
    knowsAbout: [
        'Software Architecture', 'Distributed Systems', 'Cloud Infrastructure',
        'React', 'Next.js', 'TypeScript', 'C#', '.NET', 'AWS',
    ],
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Canberra',
        addressCountry: 'AU',
    },
};

export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero />
            <SkillsBrowser data={browserData} />
        </>
    );
}
