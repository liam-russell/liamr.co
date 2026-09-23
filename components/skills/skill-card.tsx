'use client';

import { ArrowRightIcon, ArrowUpRightIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { useCallback, useImperativeHandle, useLayoutEffect, useRef, ViewTransition, type Ref } from 'react';
import { areaById } from '@/skills/areas';
import type { BrowserSkill } from '@/skills/browser-data';
import { proficiencyLabel, proficiencyPillStyle } from '@/skills/proficiency-style';
import { cn } from '@/lib/cn';
import { hostOf } from '@/lib/host';
import { RingIcon, SkillGlyph, skillColorVars } from './ring-icon';
import { EASE, fanIn, prefersReducedMotion } from './motion';

export interface SkillCardHandle {
    /** Animate out (back into the chip when it's visible), then call onClosed. */
    close: () => void;
}

export type OpenAnimation = 'morph' | 'fade' | 'none';

interface Props {
    ref?: Ref<SkillCardHandle>;
    skill: BrowserSkill;
    skillsByKey: Record<string, BrowserSkill>;
    svgs: Record<string, string>;
    mobile: boolean;
    /** How the card appears when it first mounts. */
    enter: OpenAnimation;
    getChip: (key: string) => HTMLElement | undefined;
    onSwap: (key: string) => void;
    onClosed: (key: string) => void;
}

export default function SkillCard({ ref, skill, skillsByKey, svgs, mobile, enter, getChip, onSwap, onClosed }: Props) {
    const cardRef = useRef<HTMLDivElement>(null);
    const scrimRef = useRef<HTMLDivElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);
    const bodyRef = useRef<HTMLDivElement>(null);
    const fanRef = useRef<HTMLDivElement>(null);
    const shownKey = useRef<string | null>(null);
    const closing = useRef(false);

    const area = areaById[skill.area];
    const related = skill.related.map(k => skillsByKey[k]).filter(Boolean);
    const host = hostOf(skill.link);

    // Open (first mount) and swap (related skill clicked) animations.
    useLayoutEffect(() => {
        const card = cardRef.current;
        if (!card) return;
        const prev = shownKey.current;
        if (prev === skill.key) return;
        shownKey.current = skill.key;
        const first = prev === null;
        const reduce = prefersReducedMotion();

        if (!first) {
            if (reduce) return;
            bodyRef.current?.animate([{ opacity: 0, transform: 'translateX(10px)' }, { opacity: 1, transform: 'none' }], { duration: 260, easing: EASE });
            fanIn(fanRef.current, 60);
            return;
        }

        closeRef.current?.focus({ preventScroll: true });
        if (enter === 'none') return;

        scrimRef.current?.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 220, easing: EASE });
        if (reduce || enter === 'fade') {
            card.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 200 });
            return;
        }

        const chip = getChip(skill.key);
        if (mobile) {
            card.animate([{ transform: 'translateY(100%)' }, { transform: 'none' }], { duration: 420, easing: EASE });
        } else if (chip) {
            const a = chip.getBoundingClientRect();
            const b = card.getBoundingClientRect();
            card.animate([
                { transform: `translate(${a.left - b.left}px,${a.top - b.top}px) scale(${a.width / b.width},${a.height / b.height})`, opacity: .6, borderRadius: '999px' },
                { transform: 'none', opacity: 1 },
            ], { duration: 420, easing: EASE });
        }
        bodyRef.current?.animate([{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }], { duration: 260, delay: 140, easing: EASE, fill: 'backwards' });
        fanIn(fanRef.current, 220);
    }, [skill.key, enter, getChip, mobile]);

    const close = useCallback(() => {
        if (closing.current) return;
        closing.current = true;
        const key = skill.key;
        const card = cardRef.current;
        const done = () => onClosed(key);
        if (!card) return done();

        if (prefersReducedMotion()) {
            card.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 150, fill: 'forwards' }).onfinish = done;
            scrimRef.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 150, fill: 'forwards' });
            return;
        }

        scrimRef.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 240, easing: EASE, fill: 'forwards' });
        const chip = getChip(key);
        const chipRect = chip?.getBoundingClientRect();
        const chipVisible = chipRect && chipRect.bottom > 0 && chipRect.top < window.innerHeight && chipRect.width > 0;
        let anim: Animation;
        if (mobile) {
            anim = card.animate([{ transform: 'none' }, { transform: 'translateY(100%)' }], { duration: 280, easing: 'cubic-bezier(.4,0,1,1)', fill: 'forwards' });
        } else if (chipVisible) {
            const b = card.getBoundingClientRect();
            anim = card.animate([
                { transform: 'none', opacity: 1 },
                { transform: `translate(${chipRect.left - b.left}px,${chipRect.top - b.top}px) scale(${chipRect.width / b.width},${chipRect.height / b.height})`, opacity: 0, borderRadius: '999px' },
            ], { duration: 300, easing: EASE, fill: 'forwards' });
        } else {
            anim = card.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'scale(.97)' }], { duration: 180, fill: 'forwards' });
        }
        anim.onfinish = done;
    }, [skill.key, getChip, mobile, onClosed]);

    useImperativeHandle(ref, () => ({ close }), [close]);

    const trapTab = (e: React.KeyboardEvent) => {
        if (e.key !== 'Tab' || !cardRef.current) return;
        const focusable = [...cardRef.current.querySelectorAll<HTMLElement>('a[href],button')];
        if (!focusable.length) return;
        const firstEl = focusable[0];
        const lastEl = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
        }
    };

    return (
        <>
            <div ref={scrimRef} onClick={close} className="fixed inset-0 z-40 bg-(--scrim) backdrop-blur-[4px]" />
            <div className={cn('pointer-events-none fixed inset-0 z-41 flex justify-center', mobile ? 'items-end p-0' : 'items-center p-6')}>
                <ViewTransition name="skill-card">
                    <div
                        ref={cardRef}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="skill-card-title"
                        onKeyDown={trapTab}
                        style={skillColorVars(skill)}
                        className={cn(
                            'sk skill-dialog pointer-events-auto relative max-h-[86vh] w-full origin-top-left overflow-auto overscroll-contain',
                            mobile ? 'max-w-full rounded-t-[22px]' : 'max-w-[600px] rounded-[22px]',
                        )}
                    >
                        <div aria-hidden="true" className="h-[3px] bg-[linear-gradient(90deg,var(--c),transparent_80%)]" />
                        <div ref={bodyRef} className="px-6 pb-5 pt-[22px]">
                            <div className="flex items-center gap-3.5">
                                <ViewTransition name="skill-icon">
                                    <div className="lit"><RingIcon skill={skill} size={52} svgs={svgs} /></div>
                                </ViewTransition>
                                <div className="min-w-0 flex-1">
                                    <ViewTransition name="skill-title">
                                        <h2 id="skill-card-title" className="m-0 hyphens-auto wrap-anywhere font-serif text-[26px] font-semibold leading-[1.1] tracking-[-0.02em]">{skill.title}</h2>
                                    </ViewTransition>
                                    <div className="mt-1.5 flex flex-wrap items-center gap-2">
                                        <span className="rounded-full border px-[9px] py-0.5 font-serif text-xs font-semibold" style={proficiencyPillStyle(skill.proficiency)}>
                                            {proficiencyLabel(skill.proficiency)}
                                        </span>
                                        <span className="flex items-center gap-1.5 text-[13px] text-muted">
                                            <span aria-hidden="true" className="size-[7px] rounded-full" style={{ background: area.color }} />
                                            {area.title}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    ref={closeRef}
                                    type="button"
                                    onClick={close}
                                    aria-label="Close"
                                    className="flex size-8 flex-none self-start items-center justify-center rounded-full text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
                                >
                                    <XIcon size={16} aria-hidden="true" />
                                </button>
                            </div>

                            <p className="mt-4 text-pretty text-[15.5px] leading-[1.6] text-muted">{skill.description}</p>

                            {skill.subSkills.length > 0 && <>
                                <div className="eyebrow mt-[18px] text-[11px]!">Focus areas · {skill.subSkills.length}</div>
                                <div ref={fanRef} className="mt-2 flex flex-wrap gap-1.5">
                                    {skill.subSkills.map(s => (
                                        <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="mini-chip rounded-lg px-2.5 py-[5px] text-[13px]">
                                            {s.name}
                                        </a>
                                    ))}
                                </div>
                            </>}

                            {related.length > 0 && <>
                                <div className="eyebrow mt-[18px] text-[11px]!">Related</div>
                                <div className="mt-2 flex flex-wrap gap-1.5">
                                    {related.map(r => (
                                        <button
                                            key={r.key}
                                            type="button"
                                            onClick={() => onSwap(r.key)}
                                            style={skillColorVars(r)}
                                            className="sk lit flex items-center gap-1.5 rounded-full border border-border py-1 pl-1.5 pr-2.5 font-serif text-[12.5px] font-medium text-muted transition-colors hover:border-border-strong hover:text-foreground"
                                        >
                                            <SkillGlyph skill={r} size={14} svgs={svgs} />
                                            {r.title}
                                        </button>
                                    ))}
                                </div>
                            </>}

                            <div className="mt-[22px] flex flex-wrap items-center justify-end gap-2 border-t border-border pt-4">
                                {skill.link && (
                                    <a href={skill.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 rounded-[10px] border border-border-strong px-3.5 py-[9px] text-sm font-bold text-foreground transition-colors hover:bg-surface-hover">
                                        {host}
                                        <ArrowUpRightIcon size={14} aria-hidden="true" />
                                    </a>
                                )}
                                <Link href={`/skills/${skill.key}`} className="btn-gradient flex items-center gap-1.5 rounded-[10px] px-3.5 py-[9px] text-sm font-bold">
                                    Full page
                                    <ArrowRightIcon size={14} aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </ViewTransition>
            </div>
        </>
    );
}
