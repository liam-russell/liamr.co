'use client';

import { useEffect } from 'react';

/** Moves the dot-grid spotlight with the pointer. While a skill is focused, the browser pins it to that chip instead. */
function PointerSpotlight() {
    useEffect(() => {
        const root = document.documentElement;
        let frame = 0;
        let x = 0;
        let y = 0;

        const onMove = (e: PointerEvent) => {
            if (root.dataset.spot === 'pinned') return;
            x = e.clientX;
            y = e.clientY;
            if (frame) return;
            frame = requestAnimationFrame(() => {
                frame = 0;
                root.style.setProperty('--px', `${x}px`);
                root.style.setProperty('--py', `${y}px`);
            });
        };

        window.addEventListener('pointermove', onMove, { passive: true });
        return () => {
            window.removeEventListener('pointermove', onMove);
            cancelAnimationFrame(frame);
        };
    }, []);

    return null;
}

export default function Backdrop() {
    return (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            <div className="absolute -left-32 -top-32 size-100 rounded-full bg-[rgba(59,130,246,var(--glow1))] blur-[100px]" />
            <div className="absolute -right-32 top-1/4 size-80 rounded-full bg-[rgba(56,189,248,var(--glow2))] blur-[100px]" />
            <div className="absolute -bottom-32 left-1/3 size-80 rounded-full bg-[rgba(37,99,235,var(--glow2))] blur-[100px]" />
            <div className="bg-dots absolute inset-0" />
            <div className="bg-spotlight absolute inset-0" />
            <PointerSpotlight />
        </div>
    );
}
