'use client';

import { ArrowUpRightIcon, ChevronDownIcon, SearchIcon, XIcon } from 'lucide-react';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type CSSProperties, type MouseEvent } from 'react';
import { FOCUS_SEARCH_EVENT, PENDING_FOCUS_KEY } from '@/components/command-k';
import { cn } from '@/lib/cn';
import { areaById, type AreaId } from '@/skills/areas';
import type { BrowserData, BrowserSkill } from '@/skills/browser-data';
import { buildModel, suggest, type ChipItem } from '@/skills/browser-model';
import { clearPendingHomeState, peekPendingHomeState } from '@/skills/nav-state';
import { proficiencyLabel } from '@/skills/proficiency-style';
import { projects } from '@/skills/projects';
import { EASE, prefersReducedMotion, SETTLE } from './motion';
import { RingIcon, skillColorVars } from './ring-icon';
import SkillCard, { type OpenAnimation, type SkillCardHandle } from './skill-card';

interface Line {
    key: string;
    d: string;
    ex: number;
    ey: number;
    len: number;
}

interface FlipSnapshot {
    cards: Map<AreaId, DOMRect>;
    chips: Map<string, { rect: DOMRect; area: AreaId }>;
    duration: number;
}

// The first-load chip cascade only plays once per page load, not on every return to the home page.
let revealedOnce = false;

const PROFICIENCY_LEGEND = [0, 1, 2, 3] as const;

/** Live skill count that tweens between values. */
function Count({ value }: { value: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const shown = useRef(value);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const from = shown.current;
        shown.current = value;
        if (from === value || prefersReducedMotion()) {
            el.textContent = String(value);
            return;
        }
        const t0 = performance.now();
        let frame = requestAnimationFrame(function step(t) {
            const k = Math.min(1, (t - t0) / 360);
            el.textContent = String(Math.round(from + (value - from) * (1 - Math.pow(1 - k, 3))));
            if (k < 1) frame = requestAnimationFrame(step);
        });
        return () => cancelAnimationFrame(frame);
    }, [value]);

    return <span ref={ref} aria-hidden="true" className="min-w-[3ch] text-right font-medium tabular-nums text-foreground">{value}</span>;
}

export default function SkillsBrowser({ data }: { data: BrowserData }) {
    const { skills, svgs } = data;
    const byKey = useMemo(() => Object.fromEntries(skills.map(s => [s.key, s])) as Record<string, BrowserSkill>, [skills]);

    // State handed over by a client-side navigation from a skill page (see nav-state.ts).
    const [pending] = useState(() => peekPendingHomeState());

    const [q, setQ] = useState('');
    const [expanded, setExpanded] = useState<AreaId | null>(pending?.area ?? null);
    const [focus, setFocus] = useState<string | null>(null);
    const [open, setOpen] = useState<string | null>(pending?.open ?? null);
    const [openEnter, setOpenEnter] = useState<OpenAnimation>(pending?.open ? 'none' : 'morph');
    const [project, setProject] = useState<number | null>(null);
    const [lines, setLines] = useState<{ for: string; items: Line[] } | null>(null);
    const [mobile, setMobile] = useState(false);
    const [revealed, setRevealed] = useState(revealedOnce);
    const [urlReady, setUrlReady] = useState(false);
    const [layoutTick, setLayoutTick] = useState(0);
    const [shortcut, setShortcut] = useState('⌘K');

    const chips = useRef(new Map<string, HTMLElement>());
    const cards = useRef(new Map<AreaId, HTMLElement>());
    const gridRef = useRef<HTMLDivElement>(null);
    const ghostRef = useRef<HTMLDivElement>(null);
    const searchRef = useRef<HTMLInputElement>(null);
    const cardHandle = useRef<SkillCardHandle>(null);
    const flipSnapshot = useRef<FlipSnapshot | null>(null);
    const leaveTimer = useRef<number | undefined>(undefined);
    const returnFocus = useRef(true);

    const model = useMemo(() => buildModel(skills, q, expanded), [skills, q, expanded]);
    const query = q.trim();

    // ---------- Mount: URL state, pending focus, responsive, first-load reveal ----------

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const urlQ = params.get('q') ?? '';
        const urlArea = params.get('area') as AreaId | null;
        const urlOpen = params.get('open');
        if (urlQ) setQ(urlQ);
        if (urlArea && areaById[urlArea] && !pending?.area) setExpanded(urlArea);
        if (urlOpen && byKey[urlOpen] && !pending?.open) {
            setOpenEnter('fade');
            setOpen(urlOpen);
        }
        clearPendingHomeState();
        setUrlReady(true);

        const scrollArea = pending?.area ?? (urlArea && areaById[urlArea] ? urlArea : null);
        if (scrollArea) {
            requestAnimationFrame(() => requestAnimationFrame(() => {
                const el = cards.current.get(scrollArea);
                if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 16);
            }));
        }

        try {
            if (sessionStorage.getItem(PENDING_FOCUS_KEY)) {
                sessionStorage.removeItem(PENDING_FOCUS_KEY);
                searchRef.current?.focus();
            }
        } catch {
            // Storage unavailable: nothing to pick up.
        }

        if (!/Mac|iPhone|iPad/.test(navigator.platform)) setShortcut('Ctrl K');

        const mq = window.matchMedia('(max-width: 639px)');
        const onMq = () => setMobile(mq.matches);
        onMq();
        mq.addEventListener('change', onMq);
        const onResize = () => setLayoutTick(t => t + 1);
        window.addEventListener('resize', onResize);

        let revealTimer: number | undefined;
        if (!revealedOnce) {
            revealTimer = window.setTimeout(() => {
                revealedOnce = true;
                setRevealed(true);
            }, 1300);
        }

        return () => {
            mq.removeEventListener('change', onMq);
            window.removeEventListener('resize', onResize);
            clearTimeout(revealTimer);
        };
        // Runs once on mount: reads the URL and the navigation hand-over.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Keep q, area and open in the URL.
    useEffect(() => {
        if (!urlReady) return;
        const url = new URL(window.location.href);
        const set = (k: string, v: string | null) => (v ? url.searchParams.set(k, v) : url.searchParams.delete(k));
        set('q', query || null);
        set('area', expanded);
        set('open', open);
        if (url.href !== window.location.href) window.history.replaceState(null, '', url);
    }, [urlReady, query, expanded, open]);

    // ---------- Search and expand, with FLIP ----------

    const flip = useCallback((patch: { q?: string; expanded?: AreaId | null }, duration = 440) => {
        const nextQ = patch.q ?? q;
        const nextExpanded = 'expanded' in patch ? patch.expanded ?? null : expanded;
        const grid = gridRef.current;

        if (grid) {
            const gridRect = grid.getBoundingClientRect();
            const cardRects = new Map<AreaId, DOMRect>();
            cards.current.forEach((el, id) => {
                if (el.offsetParent) cardRects.set(id, el.getBoundingClientRect());
            });
            const chipRects = new Map<string, { rect: DOMRect; area: AreaId }>();
            chips.current.forEach((el, k) => {
                if (el.isConnected) chipRects.set(k, { rect: el.getBoundingClientRect(), area: byKey[k].area });
            });

            // Chips that are leaving fade and shrink from a clone, since React removes the real ones.
            const next = buildModel(skills, nextQ, nextExpanded);
            const nextKeys = new Set(next.groups.flatMap(g => g.shown.map(i => i.skill.key)));
            const ghost = ghostRef.current;
            const reduce = prefersReducedMotion();
            if (ghost) {
                chipRects.forEach(({ rect }, k) => {
                    if (nextKeys.has(k)) return;
                    const el = chips.current.get(k);
                    if (!el) return;
                    const clone = el.cloneNode(true) as HTMLElement;
                    Object.assign(clone.style, {
                        position: 'absolute',
                        left: `${rect.left - gridRect.left}px`,
                        top: `${rect.top - gridRect.top}px`,
                        width: `${rect.width}px`,
                        height: `${rect.height}px`,
                        margin: '0',
                        transform: 'none',
                        animation: 'none',
                    });
                    ghost.appendChild(clone);
                    clone.animate(
                        [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: reduce ? 'none' : 'scale(.85)' }],
                        { duration: 180, easing: EASE, fill: 'forwards' },
                    ).onfinish = () => clone.remove();
                });
            }

            flipSnapshot.current = { cards: cardRects, chips: chipRects, duration };
        }

        clearTimeout(leaveTimer.current);
        setFocus(null);
        setLines(null);
        if (patch.q !== undefined) setQ(patch.q);
        if ('expanded' in patch) setExpanded(patch.expanded ?? null);
    }, [q, expanded, skills, byKey]);

    useLayoutEffect(() => {
        const snap = flipSnapshot.current;
        if (!snap) return;
        flipSnapshot.current = null;
        const reduce = prefersReducedMotion();

        const after = new Map<AreaId, DOMRect>();
        cards.current.forEach((el, id) => {
            if (el.offsetParent) after.set(id, el.getBoundingClientRect());
        });

        after.forEach((a, id) => {
            const el = cards.current.get(id)!;
            const b = snap.cards.get(id);
            if (!b) {
                el.animate(
                    reduce ? [{ opacity: 0 }, { opacity: 1 }] : [{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }],
                    { duration: 260, easing: EASE },
                );
                return;
            }
            if (reduce) return;
            const dx = b.left - a.left;
            const dy = b.top - a.top;
            if (Math.abs(dx) + Math.abs(dy) < 1 && Math.abs(b.height - a.height) < 1) return;
            el.style.overflow = 'hidden';
            const anim = el.animate(
                [{ transform: `translate(${dx}px,${dy}px)`, height: `${b.height}px` }, { transform: 'none', height: `${a.height}px` }],
                { duration: snap.duration, easing: EASE },
            );
            anim.onfinish = anim.oncancel = () => { el.style.overflow = ''; };
        });

        let entering = 0;
        chips.current.forEach((el, k) => {
            const b = snap.chips.get(k);
            if (b && snap.cards.get(b.area) && after.get(b.area)) {
                if (reduce) return;
                // Move relative to the card, since the card animates its own move.
                const r = el.getBoundingClientRect();
                const cb = snap.cards.get(b.area)!;
                const ca = after.get(b.area)!;
                const dx = (b.rect.left - cb.left) - (r.left - ca.left);
                const dy = (b.rect.top - cb.top) - (r.top - ca.top);
                if (Math.abs(dx) + Math.abs(dy) < 1) return;
                el.animate([{ transform: `translate(${dx}px,${dy}px)` }, { transform: 'none' }], { duration: snap.duration, easing: SETTLE });
            } else if (!b) {
                el.animate(
                    reduce ? [{ opacity: 0 }, { opacity: 1 }] : [{ opacity: 0, transform: 'scale(.86)' }, { opacity: 1, transform: 'none' }],
                    { duration: 260, delay: 100 + Math.min(entering++ * 12, 220), easing: EASE, fill: 'backwards' },
                );
            }
        });
    }, [q, expanded]);

    // ---------- Focus: related skills and connector lines ----------

    const focusSkill = useCallback((k: string) => {
        clearTimeout(leaveTimer.current);
        setFocus(k);
    }, []);

    const blurSkill = useCallback(() => {
        clearTimeout(leaveTimer.current);
        leaveTimer.current = window.setTimeout(() => setFocus(null), 70);
    }, []);

    useLayoutEffect(() => {
        const root = document.documentElement;
        const grid = gridRef.current;
        const skill = focus ? byKey[focus] : null;
        const anchor = focus ? chips.current.get(focus) : null;

        if (!focus || !grid || !skill || !anchor) {
            delete root.dataset.spot;
            setLines(null);
            return;
        }

        // Pin the dot-grid spotlight to the focused chip.
        const ar = anchor.getBoundingClientRect();
        root.dataset.spot = 'pinned';
        root.style.setProperty('--px', `${ar.left + ar.width / 2}px`);
        root.style.setProperty('--py', `${ar.top + ar.height / 2}px`);

        // Layout-space boxes (offsets ignore the focus lift transform).
        const box = (el: HTMLElement) => {
            let x = 0;
            let y = 0;
            let n: HTMLElement | null = el;
            while (n && n !== grid) {
                x += n.offsetLeft;
                y += n.offsetTop;
                n = n.offsetParent as HTMLElement | null;
            }
            return { x: x + el.offsetWidth / 2, y: y + el.offsetHeight / 2, hw: el.offsetWidth / 2, hh: el.offsetHeight / 2 };
        };
        const edge = (b: ReturnType<typeof box>, ux: number, uy: number, gap: number) => {
            const t = Math.min(ux ? b.hw / Math.abs(ux) : 1e9, uy ? b.hh / Math.abs(uy) : 1e9);
            return { x: b.x + ux * (t + gap), y: b.y + uy * (t + gap) };
        };

        const A = box(anchor);
        const f = (n: number) => n.toFixed(1);
        const items = skill.related.flatMap((k): Line[] => {
            const el = chips.current.get(k);
            if (!el?.isConnected) return [];
            const B = box(el);
            const dx = B.x - A.x;
            const dy = B.y - A.y;
            const len = Math.hypot(dx, dy) || 1;
            const ux = dx / len;
            const uy = dy / len;
            const p0 = edge(A, ux, uy, 3);
            const p1 = edge(B, -ux, -uy, 4);
            const bend = Math.min(48, len * .14) * (dx >= 0 ? 1 : -1);
            const cx = (p0.x + p1.x) / 2 - uy * bend;
            const cy = (p0.y + p1.y) / 2 + ux * bend;
            return [{ key: k, len, d: `M${f(p0.x)},${f(p0.y)} Q${f(cx)},${f(cy)} ${f(p1.x)},${f(p1.y)}`, ex: p1.x, ey: p1.y }];
        }).sort((x, y) => x.len - y.len);

        setLines({ for: focus, items });
    }, [focus, byKey, mobile, layoutTick]);

    // ---------- Skill card ----------

    const openCard = useCallback((k: string) => {
        clearTimeout(leaveTimer.current);
        returnFocus.current = true;
        setOpenEnter('morph');
        setFocus(null);
        setOpen(k);
    }, []);

    const getChip = useCallback((k: string) => chips.current.get(k), []);

    const onCardClosed = useCallback((k: string) => {
        setOpen(null);
        if (returnFocus.current) requestAnimationFrame(() => chips.current.get(k)?.focus({ preventScroll: true }));
    }, []);

    // Esc closes the card; ⌘K (from CommandK) focuses the search.
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && open) cardHandle.current?.close();
        };
        const onFocusSearch = () => {
            if (open) {
                returnFocus.current = false;
                cardHandle.current?.close();
            }
            searchRef.current?.focus();
            searchRef.current?.select();
        };
        window.addEventListener('keydown', onKey);
        window.addEventListener(FOCUS_SEARCH_EVENT, onFocusSearch);
        return () => {
            window.removeEventListener('keydown', onKey);
            window.removeEventListener(FOCUS_SEARCH_EVENT, onFocusSearch);
        };
    }, [open]);

    // ---------- Render ----------

    const lit = useMemo(() => {
        if (project !== null) return new Set(projects[project].skillKeys.filter(k => byKey[k]));
        if (focus && byKey[focus]) return new Set([focus, ...byKey[focus].related]);
        return null;
    }, [project, focus, byKey]);

    let chipIndex = 0;
    const renderChip = ({ skill, sub }: ChipItem) => {
        const k = skill.key;
        const state = focus === k ? 'focus' : lit ? (lit.has(k) ? 'lit' : 'dim') : undefined;
        const onClick = (e: MouseEvent) => {
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
            e.preventDefault();
            openCard(k);
        };
        return (
            <a
                key={k}
                href={`/skills/${k}`}
                ref={el => {
                    if (el) chips.current.set(k, el);
                    return () => {
                        if (chips.current.get(k) === el) chips.current.delete(k);
                    };
                }}
                aria-haspopup="dialog"
                aria-label={`${skill.title}, ${proficiencyLabel(skill.proficiency)}${sub ? `, matched ${sub}` : ''}`}
                onMouseEnter={() => focusSkill(k)}
                onMouseLeave={blurSkill}
                onFocus={() => focusSkill(k)}
                onBlur={blurSkill}
                onClick={onClick}
                data-p={skill.proficiency}
                data-s={state}
                className="chip sk"
                style={{ ...skillColorVars(skill), '--ci': chipIndex++ } as CSSProperties}
            >
                <RingIcon skill={skill} size={22} svgs={svgs} />
                <span className="chip-label" title={skill.title}>{skill.title}</span>
                {sub && <span className="chip-sub">↳ {sub}</span>}
            </a>
        );
    };

    const focused = lines && byKey[lines.for];
    const isEmpty = model.total === 0 && !!query;
    const suggestions = isEmpty ? suggest(skills, query) : null;
    const openSkill = open ? byKey[open] : null;

    return (
        <>
            <section aria-label="Skills" data-reveal="" style={{ '--i': 2 } as CSSProperties} className={cn('browser', revealed && 'revealed')}>
                <div className="glass-bar flex h-[60px] items-center gap-3.5 rounded-[18px] pl-5 pr-3.5 transition-[border-color] focus-within:border-[rgba(59,130,246,.45)]">
                    <SearchIcon size={20} className="flex-none text-[#3b82f6]" aria-hidden="true" />
                    <input
                        ref={searchRef}
                        type="search"
                        aria-label="Search skills"
                        placeholder="Search skills, tools and techniques"
                        value={q}
                        onChange={e => flip({ q: e.target.value }, 320)}
                        autoComplete="off"
                        spellCheck={false}
                        className="h-full min-w-0 flex-1 bg-transparent font-sans text-lg font-medium text-foreground outline-none"
                    />
                    {q && (
                        <button
                            type="button"
                            onClick={() => {
                                flip({ q: '' });
                                searchRef.current?.focus();
                            }}
                            aria-label="Clear search"
                            className="flex size-7 flex-none items-center justify-center rounded-full text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
                        >
                            <XIcon size={14} aria-hidden="true" />
                        </button>
                    )}
                    <div className="flex flex-none items-baseline gap-1.5 whitespace-nowrap font-mono text-[13px] text-muted">
                        <Count value={model.total} />
                        <span aria-hidden="true">skills</span>
                        <span className="sr-only" aria-live="polite">{model.total} skills</span>
                    </div>
                    <kbd aria-hidden="true" className="hidden flex-none rounded-md border border-b-2 border-border-strong px-[7px] py-[5px] font-mono text-xs leading-none text-muted sm:block">
                        {shortcut}
                    </kbd>
                </div>

                <div ref={gridRef} className="relative mt-4 grid grid-flow-row-dense grid-cols-[repeat(auto-fill,minmax(min(100%,380px),1fr))] gap-4">
                    {focused && lines.items.length > 0 && (
                        <svg aria-hidden="true" className="sk pointer-events-none absolute inset-0 z-1 size-full overflow-visible" style={skillColorVars(focused)}>
                            {lines.items.map((l, i) => (
                                <g key={`${lines.for}-${l.key}`}>
                                    <path
                                        d={l.d}
                                        pathLength={1}
                                        fill="none"
                                        stroke="var(--c)"
                                        strokeWidth={1.25}
                                        strokeOpacity={.6}
                                        strokeLinecap="round"
                                        className="connector"
                                        style={{ animationDelay: `${i * 22}ms` }}
                                    />
                                    <circle cx={l.ex} cy={l.ey} r={2.5} fill="var(--c)" className="connector-end" style={{ animationDelay: `${i * 22 + 280}ms` }} />
                                </g>
                            ))}
                        </svg>
                    )}

                    {model.groups.map(g => (
                        <article
                            key={g.id}
                            ref={el => {
                                if (el) cards.current.set(g.id, el);
                                return () => {
                                    if (cards.current.get(g.id) === el) cards.current.delete(g.id);
                                };
                            }}
                            data-area={g.id}
                            aria-labelledby={`area-${g.id}`}
                            className="area-card"
                            style={{ display: g.items.length ? undefined : 'none', gridColumn: g.expanded ? '1 / -1' : undefined }}
                        >
                            <div className="flex items-center gap-2.5">
                                <span aria-hidden="true" className="size-2 flex-none rounded-full" style={{ background: g.color }} />
                                <h2 id={`area-${g.id}`} className="m-0 font-serif text-lg font-semibold tracking-[-0.01em] text-foreground">{g.title}</h2>
                                <span className="ml-auto font-mono text-xs tabular-nums text-muted">
                                    {query ? `${g.items.length} match${g.items.length === 1 ? '' : 'es'}` : g.items.length}
                                </span>
                            </div>
                            <p className="m-0 text-pretty text-[14.5px] leading-[1.55] text-muted">{g.pitch}</p>
                            <div id={`area-${g.id}-skills`} className="mt-1 flex flex-wrap gap-1.5 sm:gap-2">
                                {g.shown.map(renderChip)}
                            </div>
                            {g.hasMore && (
                                <button
                                    type="button"
                                    onClick={() => flip({ expanded: g.expanded ? null : g.id })}
                                    aria-expanded={g.expanded}
                                    aria-controls={`area-${g.id}-skills`}
                                    className="mt-auto flex items-center gap-1.5 self-start py-1.5 pr-2.5 text-sm font-bold text-muted transition-colors hover:text-foreground"
                                >
                                    {g.expanded ? 'Show fewer' : `Show all ${g.items.length}`}
                                    <ChevronDownIcon
                                        size={14}
                                        strokeWidth={2.2}
                                        aria-hidden="true"
                                        className="transition-transform duration-250 ease-(--ease)"
                                        style={{ transform: g.expanded ? 'rotate(180deg)' : 'none' }}
                                    />
                                </button>
                            )}
                        </article>
                    ))}
                    <div ref={ghostRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-3" />
                </div>

                {suggestions && (
                    <div className="rounded-[20px] border border-dashed border-border-strong bg-card px-5 pb-14 pt-12 text-center">
                        <div className="font-serif text-[22px] font-medium text-foreground">Nothing for “{query}”</div>
                        <p className="mt-2 text-[15px] text-muted">{suggestions.hint}</p>
                        <div className="mt-[18px] flex flex-wrap justify-center gap-2">
                            {suggestions.titles.map(t => (
                                <button key={t} type="button" onClick={() => flip({ q: t })} className="mini-chip rounded-full px-3.5 py-2 text-sm hover:-translate-y-px">
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div className="mt-3.5 flex flex-wrap items-center justify-between gap-x-6 gap-y-2.5 px-1 font-mono text-xs text-muted">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        <span>Ring shows depth</span>
                        {PROFICIENCY_LEGEND.map(p => (
                            <span key={p} className="flex items-center gap-1.5">
                                <span aria-hidden="true" className="legend-ring" style={{ '--f': `${(p + 1) * 25}%` } as CSSProperties} />
                                {proficiencyLabel(p)}
                            </span>
                        ))}
                    </div>
                    <span>{mobile ? 'Tap a skill to open it' : 'Hover a skill to see what it connects to'}</span>
                </div>
            </section>

            <section aria-labelledby="projects-heading" data-reveal="" style={{ '--i': 3 } as CSSProperties} className="mt-16">
                <h2 id="projects-heading" className="m-0 font-serif text-[22px] font-semibold tracking-[-0.01em]">Side projects</h2>
                <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-3.5">
                    {projects.map((p, i) => (
                        <a
                            key={p.name}
                            href={p.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => { setFocus(null); setProject(i); }}
                            onMouseLeave={() => setProject(null)}
                            onFocus={() => { setFocus(null); setProject(i); }}
                            onBlur={() => setProject(null)}
                            onMouseMove={e => {
                                const r = e.currentTarget.getBoundingClientRect();
                                e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
                                e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
                            }}
                            className="project-card relative flex items-center justify-between gap-2.5 rounded-2xl px-[22px] py-5 text-foreground"
                        >
                            <div className="flex min-w-0 flex-col gap-[3px]">
                                <span className="font-serif text-lg font-semibold">{p.name}</span>
                                <span className="font-mono text-xs text-muted">{p.host}</span>
                            </div>
                            <ArrowUpRightIcon size={18} className="flex-none text-muted" aria-hidden="true" />
                        </a>
                    ))}
                </div>
            </section>

            {openSkill && (
                <SkillCard
                    ref={cardHandle}
                    skill={openSkill}
                    skillsByKey={byKey}
                    svgs={svgs}
                    mobile={mobile}
                    enter={openEnter}
                    getChip={getChip}
                    onSwap={setOpen}
                    onClosed={onCardClosed}
                />
            )}
        </>
    );
}
