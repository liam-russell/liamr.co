'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const FOCUS_SEARCH_EVENT = 'skills:focus-search';
export const PENDING_FOCUS_KEY = 'skills:focus-search';

/** ⌘K / Ctrl+K from anywhere focuses the skills search, going home first if needed. */
export default function CommandK() {
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (!(e.metaKey || e.ctrlKey) || e.key.toLowerCase() !== 'k') return;
            e.preventDefault();
            if (pathname === '/') {
                window.dispatchEvent(new Event(FOCUS_SEARCH_EVENT));
            } else {
                try {
                    sessionStorage.setItem(PENDING_FOCUS_KEY, '1');
                } catch {
                    // Without storage the search just won't be focused after navigating.
                }
                router.push('/');
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [pathname, router]);

    return null;
}
