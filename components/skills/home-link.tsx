'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import type { AreaId } from '@/skills/areas';
import { setPendingHomeState } from '@/skills/nav-state';

/** Links back to the home browser, reopening a skill's card or expanding an area. */
export default function HomeLink({ open, area, className, children }: {
    open?: string;
    area?: AreaId;
    className?: string;
    children: ReactNode;
}) {
    const params = new URLSearchParams();
    if (open) params.set('open', open);
    if (area) params.set('area', area);
    const qs = params.toString();

    return (
        <Link href={qs ? `/?${qs}` : '/'} onClick={() => setPendingHomeState({ open, area })} className={className}>
            {children}
        </Link>
    );
}
