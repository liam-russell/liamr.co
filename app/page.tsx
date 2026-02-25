import { ArrowRightIcon, GithubIcon, LinkedinIcon } from 'lucide-react';
import Link from 'next/link';
import LocationButton from '@/components/location-button';
import skills from '@/skills/data/skills';

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
    const skillCount = Math.floor(skills.length / 10) * 10;

    return (
        <div className='mx-auto mt-12 w-full max-w-2xl animate-fade-in pb-16 lg:mt-28'>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero section */}
            <div className='text-center'>
                <div className='mb-4 inline-block animate-slide-down rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-muted backdrop-blur-sm'>
                    Technical lead with full-stack expertise
                </div>
                <h1 className='gradient-text font-serif text-6xl font-bold tracking-tight sm:text-7xl'>
                    Liam Russell
                </h1>
                <p className='mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted' style={{ animationDelay: '0.2s' }}>
                    I lead engineering teams to ship reliable, scalable software. I architect distributed systems on AWS, build polished interfaces with React and Next.js, and write most of my code in TypeScript and C#(.NET).
                </p>
            </div>

            {/* Expertise tags */}
            <div className='mt-8 flex animate-slide-up flex-wrap justify-center gap-2' role='list' aria-label='Areas of expertise' style={{ animationDelay: '0.25s' }}>
                {[
                    { label: 'Architecture', href: '/skills?query=architecture' },
                    { label: 'Distributed Systems', href: '/skills?query=distributed' },
                    { label: 'Cloud Infrastructure', href: '/skills?categories=Cloud' },
                    { label: 'AI Integration', href: '/skills?query=LLM' },
                    { label: 'Security', href: '/skills?categories=Security' },
                    { label: 'Accessibility', href: '/skills?query=accessibility' },
                ].map(({ label, href }) => (
                    <Link key={label} href={href} role='listitem' className='rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted transition-colors hover:border-blue-300/30 hover:bg-surface-hover hover:text-foreground'>
                        {label}
                    </Link>
                ))}
            </div>

            {/* Quick stats */}
            <div className='mt-8 grid animate-slide-up grid-cols-3 gap-3' style={{ animationDelay: '0.28s' }}>
                <div className='glass rounded-xl px-4 py-3 text-center'>
                    <div className='font-serif text-2xl font-bold text-foreground'>10+</div>
                    <div className='text-xs text-muted'>Years experience</div>
                </div>
                <div className='glass rounded-xl px-4 py-3 text-center'>
                    <div className='font-serif text-2xl font-bold text-foreground'>{skillCount}+</div>
                    <div className='text-xs text-muted'>Technical skills</div>
                </div>
                <div className='glass rounded-xl px-4 py-3 text-center'>
                    <div className='font-serif text-2xl font-bold text-foreground'>Full-stack</div>
                    <div className='text-xs text-muted'>Front-end & back-end</div>
                </div>
            </div>

            {/* Currently */}
            <div className='mt-6 animate-slide-up rounded-xl border border-border bg-surface/50 px-5 py-4 text-center text-sm text-muted backdrop-blur-sm' style={{ animationDelay: '0.33s' }}>
                <span className='mr-2 font-serif font-semibold text-foreground'>Currently:</span>
                Exploring LLM-powered developer tooling, refining modular monolith patterns in .NET, and building with Next.js 16.
            </div>

            {/* Social links */}
            <div className='mt-8 grid animate-slide-up gap-3 sm:grid-cols-3' style={{ animationDelay: '0.35s' }}>
                <a
                    href="https://github.com/liam-russell"
                    target='_blank'
                    rel='noopener noreferrer'
                    className='glass hover-lift group flex flex-row items-center justify-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted transition-colors hover:text-foreground'
                >
                    <GithubIcon size={18} className='text-muted transition-colors group-hover:text-foreground' aria-hidden='true' />
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/liam-russell/"
                    target='_blank'
                    rel='noopener noreferrer'
                    className='glass hover-lift group flex flex-row items-center justify-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted transition-colors hover:text-foreground'
                >
                    <LinkedinIcon size={18} className='text-blue-400/70 transition-colors group-hover:text-blue-500' aria-hidden='true' />
                    LinkedIn
                </a>
                <LocationButton />
            </div>

            {/* CTA */}
            <div className='animate-slide-up' style={{ animationDelay: '0.4s' }}>
                <Link
                    href='/skills'
                    className='group mt-6 flex items-center justify-center gap-3 rounded-xl bg-linear-to-r from-blue-600 to-sky-500 px-6 py-4 font-serif text-lg font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:brightness-110'
                >
                    Browse my skills and expertise
                    <ArrowRightIcon size={20} className='transition-transform group-hover:translate-x-1' aria-hidden='true' />
                </Link>
            </div>
        </div>
    );
}
