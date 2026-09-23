'use client';

import { useLayoutEffect, useRef, type ReactNode } from 'react';
import { fanIn } from './motion';

/** Wraps a row of chips that fan out when it mounts (or when `animateKey` changes). */
export default function FanIn({ animateKey, className, children }: { animateKey: string; className?: string; children: ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        fanIn(ref.current, 160);
    }, [animateKey]);

    return <div ref={ref} className={className}>{children}</div>;
}
