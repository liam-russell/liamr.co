import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import LocationButton from '@/components/location-button';
import SkillsGraphLoader from '@/components/skills-graph-loader';
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
    const totalSkills = skills.length + skills.reduce((sum, s) => sum + (s.subSkills?.length ?? 0), 0);
    const skillCount = Math.floor(totalSkills / 10) * 10;

    return (
        <div className='mx-auto mt-12 w-full max-w-4xl animate-fade-in pb-16 lg:mt-28'>
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

            {/* Skills Graph */}
            <div className='mt-8 animate-slide-up overflow-hidden rounded-2xl glass-card shadow-md' style={{ animationDelay: '0.35s' }}>
                <div className='flex items-center gap-2 px-5 pt-4'>
                    <span className='text-lg font-semibold tracking-tight text-foreground font-serif'>Skill Cloud</span>
                    <span className='text-xs text-muted'>&middot; {skills.length + skills.reduce((n, s) => n + (s.subSkills?.length ?? 0), 0)} skills</span>
                </div>
                <SkillsGraphLoader skills={[...skills]} />
            </div>

            {/* Social links */}
            <div className='mt-8 grid animate-slide-up gap-3 sm:grid-cols-3' style={{ animationDelay: '0.38s' }}>
                <a
                    href="https://github.com/liam-russell"
                    target='_blank'
                    rel='noopener noreferrer'
                    className='glass hover-lift group flex flex-row items-center justify-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted transition-colors hover:text-foreground'
                >
                    <svg viewBox='0 0 24 24' width={18} height={18} fill='currentColor' className='text-muted transition-colors group-hover:text-foreground' aria-hidden='true'><path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/></svg>
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/liam-russell/"
                    target='_blank'
                    rel='noopener noreferrer'
                    className='glass hover-lift group flex flex-row items-center justify-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted transition-colors hover:text-foreground'
                >
                    <svg viewBox='0 0 24 24' width={18} height={18} fill='currentColor' className='text-blue-400/70 transition-colors group-hover:text-blue-500' aria-hidden='true'><path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/></svg>
                    LinkedIn
                </a>
                <LocationButton />
            </div>

            {/* CTA */}
            <div className='animate-slide-up' style={{ animationDelay: '0.43s' }}>
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
