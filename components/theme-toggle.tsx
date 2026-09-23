'use client';

import { MoonIcon, SunIcon } from 'lucide-react';

export const themeScript = `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}`;

function currentTheme(): 'light' | 'dark' {
    const set = document.documentElement.getAttribute('data-theme');
    if (set === 'light' || set === 'dark') return set;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export default function ThemeToggle() {
    const toggle = () => {
        const next = currentTheme() === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        try {
            localStorage.setItem('theme', next);
        } catch {
            // Storage can be unavailable (private mode); the theme still applies for this visit.
        }
    };

    return (
        <button type="button" onClick={toggle} aria-label="Toggle light or dark theme" className="icon-btn">
            <SunIcon size={16} aria-hidden="true" className="show-dark" />
            <MoonIcon size={16} aria-hidden="true" className="show-light" />
        </button>
    );
}
