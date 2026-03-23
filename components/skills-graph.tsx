'use client';

import { useEffect, useMemo, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
    SpriteMaterial, Sprite, CanvasTexture,
    Group, Mesh, MeshBasicMaterial, SphereGeometry,
} from 'three';
import SpriteText from 'three-spritetext';
import type { Skill } from '@/skills/types';
import type { SkillCategory } from '@/skills/skill-categories';
import { categoryTitles } from '@/skills/skill-categories';
import { getSkillIcon, isHexDark } from '@/skills/icons';

// Suppress THREE.Clock deprecation warning from three-render-objects (upstream issue)
if (typeof window !== 'undefined') {
    const origWarn = console.warn;
    console.warn = (...args: unknown[]) => {
        if (typeof args[0] === 'string' && args[0].includes('Clock')) return;
        origWarn.apply(console, args);
    };
}

const categoryColors: Record<string, string> = {
    Databases: '#a855f7',
    Cloud: '#f59e0b',
    Frontend: '#3b82f6',
    Backend: '#22c55e',
    DevOps: '#ef4444',
    Servers: '#f97316',
    Languages: '#eab308',
    Frameworks: '#06b6d4',
    Management: '#ec4899',
    Security: '#dc2626',
    QA: '#84cc16',
    Concepts: '#6366f1',
    AI: '#8b5cf6',
};

interface GraphNode {
    id: string;
    name: string;
    type: 'skill' | 'category' | 'subskill';
    color: string;
    val: number;
    skillKey?: string;
    proficiency?: number;
    iconHex?: string;
    iconPath?: string;
    iconSvg?: string;
    iconInitial?: string;
    url?: string;
    x?: number;
    y?: number;
    z?: number;
}

interface GraphLink {
    source: string;
    target: string;
    color: string;
    linkType?: 'category' | 'related' | 'subskill';
}

interface GraphData {
    nodes: GraphNode[];
    links: GraphLink[];
}

function buildGraphData(skills: Skill[]): GraphData {
    const nodes: GraphNode[] = [];
    const links: GraphLink[] = [];
    const addedCategories = new Set<string>();

    for (const skill of skills) {
        const primaryCat = skill.categories[0] as SkillCategory;
        const icon = getSkillIcon(skill.key, skill.title);
        const hexColor = `#${icon.hex}`;
        const nodeColor = isHexDark(icon.hex) ? categoryColors[primaryCat] ?? '#94a3b8' : hexColor;

        nodes.push({
            id: `skill-${skill.key}`,
            name: skill.title,
            type: 'skill',
            color: nodeColor,
            val: 4 + skill.proficiency * 2,
            skillKey: skill.key,
            proficiency: skill.proficiency,
            iconHex: icon.hex,
            iconPath: icon.path,
            iconSvg: icon.svg,
            iconInitial: icon.initial,
        });

        // Ensure category nodes exist + category→skill links
        for (const cat of skill.categories) {
            if (!addedCategories.has(cat)) {
                addedCategories.add(cat);
                nodes.push({
                    id: `cat-${cat}`,
                    name: categoryTitles[cat as SkillCategory] ?? cat,
                    type: 'category',
                    color: categoryColors[cat] ?? '#64748b',
                    val: 60,
                });
            }
            links.push({
                source: `cat-${cat}`,
                target: `skill-${skill.key}`,
                color: (categoryColors[cat] ?? '#64748b') + '25',
                linkType: 'category',
            });
        }

        // Related-skill links
        if (skill.relatedSkillKeys) {
            for (const relKey of skill.relatedSkillKeys) {
                if (skills.some(s => s.key === relKey) && skill.key < relKey) {
                    links.push({
                        source: `skill-${skill.key}`,
                        target: `skill-${relKey}`,
                        color: 'rgba(100,116,139,0.12)',
                        linkType: 'related',
                    });
                }
            }
        }

        // Subskill nodes + links
        if (skill.subSkills) {
            for (const sub of skill.subSkills) {
                const subId = `sub-${skill.key}-${sub.name}`;
                nodes.push({
                    id: subId,
                    name: sub.name,
                    type: 'subskill',
                    color: nodeColor,
                    val: 1,
                    url: sub.url,
                    skillKey: skill.key,
                });
                links.push({
                    source: `skill-${skill.key}`,
                    target: subId,
                    color: nodeColor + '18',
                    linkType: 'subskill',
                });
            }
        }
    }

    return { nodes, links };
}

// ---- Icon texture cache for 3D rendering ----

const iconTextureCache = new Map<string, CanvasTexture>();

function getIconTexture(node: GraphNode, isDark: boolean): CanvasTexture {
    const cacheKey = `${node.id}-${isDark ? 1 : 0}`;
    if (iconTextureCache.has(cacheKey)) return iconTextureCache.get(cacheKey)!;

    const size = 128;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;

    // Draw circle background
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, 2 * Math.PI);
    ctx.fillStyle = isDark ? '#1e293b' : '#ffffff';
    ctx.fill();
    ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)';
    ctx.lineWidth = 2;
    ctx.stroke();

    if (node.iconPath) {
        ctx.save();
        const iconPad = size * 0.2;
        const iconArea = size - iconPad * 2;
        const s = iconArea / 24;
        ctx.translate(iconPad, iconPad);
        ctx.scale(s, s);
        const p = new Path2D(node.iconPath);
        const dark = isHexDark(node.iconHex ?? '000000');
        ctx.fillStyle = dark ? (isDark ? '#e2e8f0' : `#${node.iconHex}`) : `#${node.iconHex}`;
        ctx.fill(p);
        ctx.restore();
    } else if (node.iconSvg) {
        // Draw initial letter as placeholder while SVG loads
        if (node.iconInitial) {
            ctx.font = `bold ${size * 0.5}px sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = isDark ? '#e2e8f0' : node.color;
            ctx.fillText(node.iconInitial, size / 2, size / 2);
        }
    } else if (node.iconInitial) {
        ctx.font = `bold ${size * 0.6}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = isDark ? '#e2e8f0' : node.color;
        ctx.fillText(node.iconInitial, size / 2, size / 2);
    }

    const texture = new CanvasTexture(canvas);
    iconTextureCache.set(cacheKey, texture);

    // Async load devicon SVG and update texture in-place
    if (node.iconSvg) {
        const img = new Image();
        img.onload = () => {
            // Clear and redraw circle + icon
            ctx.clearRect(0, 0, size, size);
            ctx.beginPath();
            ctx.arc(size / 2, size / 2, size / 2, 0, 2 * Math.PI);
            ctx.fillStyle = isDark ? '#1e293b' : '#ffffff';
            ctx.fill();
            ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)';
            ctx.lineWidth = 2;
            ctx.stroke();
            const iconPad = size * 0.2;
            const iconArea = size - iconPad * 2;
            ctx.drawImage(img, iconPad, iconPad, iconArea, iconArea);
            texture.needsUpdate = true;
        };
        img.src = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(node.iconSvg)))}`;
    }

    return texture;
}

// ---- Component ----

export default function SkillsGraph({ skills }: { skills: Skill[] }) {
    const router = useRouter();
    const containerRef = useRef<HTMLDivElement>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const graphRef = useRef<any>(null);
    const hoverNodeRef = useRef<GraphNode | null>(null);
    const isDarkRef = useRef(false);

    const graphData = useMemo(() => buildGraphData(skills), [skills]);

    // Track dark mode in a ref (no re-render needed, textures are cached)
    useEffect(() => {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        isDarkRef.current = mq.matches;
        const handler = (e: MediaQueryListEvent) => { isDarkRef.current = e.matches; };
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    // Mount the raw 3d-force-graph kapsule imperatively.
    // This avoids react-kapsule's _destructor race condition which calls
    // graphData({nodes:[],links:[]}) and restarts the engine after pauseAnimation(),
    // causing "Cannot read properties of undefined (reading 'tick')" on View Transition nav.
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let graph: any = null;
        let destroyed = false;
        let resumeTimer: ReturnType<typeof setTimeout> | null = null;

        // Tooltip style
        const style = document.createElement('style');
        style.textContent = `.float-tooltip-kap { background: transparent !important; border: none !important; box-shadow: none !important; padding: 0 !important; border-radius: 0 !important; }`;
        document.head.appendChild(style);

        // ResizeObserver for responsive sizing
        const observer = new ResizeObserver(entries => {
            const entry = entries[0];
            if (entry && graph) {
                const w = entry.contentRect.width;
                const h = Math.max(w * 0.65, 500);
                graph.width(w).height(h);
            }
        });
        observer.observe(el);

        // Dynamic import (3d-force-graph is ESM + needs browser globals)
        import('3d-force-graph').then(({ default: ForceGraph3DKapsule }) => {
            if (destroyed) return;

            const w = el.clientWidth || 800;
            const h = Math.max(w * 0.65, 500);

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const fg = new ForceGraph3DKapsule(el) as any;

            // The kapsule starts _animationCycle in init(), but its update()
            // runs via a debounced digest (1ms). With many chained setters the
            // rAF can fire before the digest processes graphData, hitting
            // state.layout while it's still undefined. Pause immediately, set
            // all props, then resume after a frame so the digest completes.
            fg.pauseAnimation();

            fg.width(w)
                .height(h)
                .graphData(graphData)
                .backgroundColor('rgba(0,0,0,0)')
                .showNavInfo(false)
                .d3AlphaDecay(0.02)
                .d3VelocityDecay(0.3)
                .cooldownTicks(100)
                .enableNavigationControls(true)
                .linkOpacity(0.6)
                .nodeThreeObject((node: GraphNode) => {
                    const isDark = isDarkRef.current;
                    const hovId = hoverNodeRef.current?.id;

                    if (node.type === 'category') {
                        const text = new SpriteText(node.name, 5, node.color);
                        text.fontWeight = 'bold';
                        text.material.depthWrite = false;
                        text.material.depthTest = false;
                        text.renderOrder = 999;
                        return text;
                    }

                    if (node.type === 'subskill') {
                        const isHov = hovId === node.id;
                        const group = new Group();

                        // Small colored dot
                        const dotSize = isHov ? 1.2 : 0.8;
                        const dot = new Mesh(
                            new SphereGeometry(dotSize, 12, 12),
                            new MeshBasicMaterial({ color: node.color, transparent: true, opacity: isHov ? 0.95 : 0.6 }),
                        );
                        dot.renderOrder = 5;
                        group.add(dot);

                        // Label offset above dot
                        const text = new SpriteText(node.name, isHov ? 2.6 : 2, node.color);
                        text.material.depthWrite = false;
                        text.material.depthTest = false;
                        text.material.opacity = isHov ? 0.95 : 0.55;
                        text.renderOrder = 6;
                        text.position.y = dotSize + 1.5;
                        group.add(text);

                        return group;
                    }

                    // Skill node: icon on white circle
                    const isHov = hovId === node.id;
                    const spriteSize = (Math.cbrt(node.val) * 6) * (isHov ? 1.3 : 1);
                    const tex = getIconTexture(node, isDark);
                    const spriteMat = new SpriteMaterial({
                        map: tex,
                        transparent: true,
                        depthWrite: false,
                        depthTest: false,
                        opacity: isHov ? 1 : 0.92,
                    });
                    const sprite = new Sprite(spriteMat);
                    sprite.renderOrder = 10;
                    sprite.scale.set(spriteSize, spriteSize, 1);
                    return sprite;
                })
                .nodeLabel((node: GraphNode) => {
                    if (node.type === 'category') return '';
                    const isDark = isDarkRef.current;
                    if (node.type === 'subskill' && node.url) {
                        return `<span style="background:${isDark ? 'rgba(15,23,42,0.95)' : 'rgba(255,255,255,0.95)'};color:${isDark ? '#e2e8f0' : '#0f172a'};padding:6px 12px;border-radius:6px;font-family:system-ui,sans-serif;font-size:12px;border:1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}">${node.name} <span style=\"opacity:0.5\">↗ ${new URL(node.url).hostname}</span></span>`;
                    }
                    return `<span style="background:${isDark ? 'rgba(15,23,42,0.95)' : 'rgba(255,255,255,0.95)'};color:${isDark ? '#e2e8f0' : '#0f172a'};padding:6px 12px;border-radius:6px;font-family:system-ui,sans-serif;font-size:13px;font-weight:600;border:1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}">${node.name}</span>`;
                })
                .linkColor((link: GraphLink) => {
                    const hovId = hoverNodeRef.current?.id;
                    const isDark = isDarkRef.current;
                    const src = typeof link.source === 'object' ? (link.source as unknown as GraphNode).id : link.source;
                    const tgt = typeof link.target === 'object' ? (link.target as unknown as GraphNode).id : link.target;
                    if (hovId && (src === hovId || tgt === hovId)) {
                        return isDark ? 'rgba(148,163,184,0.5)' : 'rgba(100,116,139,0.4)';
                    }
                    return link.linkType === 'category'
                        ? link.color
                        : (isDark ? 'rgba(148,163,184,0.04)' : 'rgba(100,116,139,0.04)');
                })
                .linkWidth((link: GraphLink) => {
                    if (link.linkType === 'related') return 0;
                    const hovId = hoverNodeRef.current?.id;
                    const src = typeof link.source === 'object' ? (link.source as unknown as GraphNode).id : link.source;
                    const tgt = typeof link.target === 'object' ? (link.target as unknown as GraphNode).id : link.target;
                    if (link.linkType === 'subskill') {
                        if (hovId && (src === hovId || tgt === hovId)) return 0.8;
                        return 0;
                    }
                    if (hovId && (src === hovId || tgt === hovId)) return 1.5;
                    return 0.2;
                })
                .onNodeClick((node: GraphNode) => {
                    if ((node.type === 'skill' || node.type === 'subskill') && node.skillKey) {
                        router.push(`/skills/${node.skillKey}`);
                    }
                })
                .onNodeHover((node: GraphNode | null) => {
                    hoverNodeRef.current = node;
                })
                .onNodeDragEnd((node: GraphNode) => {
                    node.x = node.x; node.y = node.y; node.z = node.z;
                });

            graph = fg;
            graphRef.current = fg;

            // Resume animation after the kapsule digest has processed graphData
            // and set state.layout. The digest is debounced(1ms), so we wait
            // long enough for it to fire before starting the animation loop.
            // Force configuration must also happen here — if done earlier, the
            // digest recreates the force simulation and discards custom settings.
            const resumeTimer2 = setTimeout(() => {
                if (destroyed) return;

                // Configure d3-force (must be after digest so layout exists)
                // The kapsule 3D default charge is -60 with infinite range.
                // We need values in that ballpark or nodes collapse.
                const charge = fg.d3Force('charge');
                if (charge) {
                    charge.strength((n: GraphNode) => n.type === 'category' ? -80 : n.type === 'subskill' ? -8 : -15);
                    charge.distanceMax(200);
                }
                const link = fg.d3Force('link');
                if (link) {
                    link.distance((l: GraphLink) => l.linkType === 'category' ? 40 : l.linkType === 'subskill' ? 20 : 25);
                    link.strength((l: GraphLink) => l.linkType === 'category' ? 0.3 : l.linkType === 'subskill' ? 0.5 : 0.08);
                }
                fg.d3ReheatSimulation();
                fg.resumeAnimation();
            }, 50);
            resumeTimer = resumeTimer2;

            // Position camera once after layout settles
            let hasFitted = false;
            fg.onEngineStop(() => {
                if (hasFitted || destroyed) return;
                hasFitted = true;
                const bbox = fg.getGraphBbox((n: GraphNode) => n.type === 'skill' || n.type === 'subskill');
                if (!bbox) return;
                const xSpan = bbox.x[1] - bbox.x[0];
                const ySpan = bbox.y[1] - bbox.y[0];
                const zSpan = bbox.z[1] - bbox.z[0];
                const fov = fg.camera().fov;
                const aspect = fg.camera().aspect;
                const vFov = (fov * Math.PI) / 180;
                let dist = (ySpan / 2) / Math.tan(vFov / 2);
                const hDist = (xSpan / 2) / (Math.tan(vFov / 2) * aspect);
                dist = Math.max(dist, hDist);
                dist += zSpan / 2;
                dist = Math.max(dist, 120);
                dist *= 0.95;
                const cx = (bbox.x[0] + bbox.x[1]) / 2;
                const cy = (bbox.y[0] + bbox.y[1]) / 2;
                const cz = (bbox.z[0] + bbox.z[1]) / 2;
                fg.cameraPosition(
                    { x: cx, y: cy, z: cz + dist },
                    { x: cx, y: cy, z: cz },
                    600
                );
            });
        });

        return () => {
            destroyed = true;
            if (resumeTimer) clearTimeout(resumeTimer);
            observer.disconnect();
            style.remove();
            if (graph) {
                // Clean shutdown: just pause animation (cancel rAF).
                // We intentionally do NOT call graphData({nodes:[], links:[]})
                // which is what the library's _destructor does — that restarts
                // the engine and causes a race condition with View Transitions.
                graph.pauseAnimation();
                try {
                    const renderer = graph.renderer();
                    if (renderer) {
                        renderer.dispose();
                        renderer.forceContextLoss();
                    }
                } catch {}
                graphRef.current = null;
                graph = null;
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div ref={containerRef} className="relative h-full w-full" />
    );
}
