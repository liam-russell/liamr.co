'use client';

import dynamic from 'next/dynamic';
import type { Skill } from '@/skills/types';

const SkillsGraph = dynamic(() => import('@/components/skills-graph'), {
    ssr: false,
    loading: () => <div className="animate-fade-in overflow-hidden rounded-2xl" style={{ height: 420 }} />,
});

export default function SkillsGraphLoader({ skills }: { skills: Skill[] }) {
    return <SkillsGraph skills={skills} />;
}
