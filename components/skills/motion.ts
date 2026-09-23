export const EASE = 'cubic-bezier(.2,.8,.2,1)';
export const SETTLE = 'cubic-bezier(.34,1.3,.64,1)';

export function prefersReducedMotion() {
    return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Sub-skill chips fan out from the top-left of their row. */
export function fanIn(wrap: HTMLElement | null, delay = 0) {
    if (!wrap || prefersReducedMotion()) return;
    const kids = [...wrap.children] as HTMLElement[];
    if (!kids.length) return;
    const w = wrap.getBoundingClientRect();
    const ox = w.left + 24;
    const oy = w.top + 12;
    kids.forEach((el, i) => {
        const r = el.getBoundingClientRect();
        el.animate([
            { opacity: 0, transform: `translate(${(ox - r.left) * .6}px,${(oy - r.top) * .6}px) scale(.7)` },
            { opacity: 1, transform: 'none' },
        ], { duration: 380, delay: delay + Math.min(i * 28, 280), easing: SETTLE, fill: 'backwards' });
    });
}
