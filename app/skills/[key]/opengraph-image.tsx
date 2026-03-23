import { ImageResponse } from 'next/og';
import skills from '@/skills/data/skills';
import { getSkillIcon, isHexDark } from '@/skills/icons';
import { proficiencyTitles } from '@/skills/skill-proficiency';
import { categoryTitles } from '@/skills/skill-categories';

export const alt = 'Skill';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function generateStaticParams() {
    return skills.map((skill) => ({ key: skill.key }));
}

export default async function OgImage({ params }: { params: Promise<{ key: string }> }) {
    const { key } = await params;
    const skill = skills.find((s) => s.key === key);

    if (!skill) {
        return new ImageResponse(
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', color: 'white', fontSize: 32 }}>
                Skill not found
            </div>,
            { ...size }
        );
    }

    const icon = getSkillIcon(key, skill.title);
    const accentHex = icon.hex;
    const accentColor = `#${accentHex}`;
    const accentDark = isHexDark(icon.hex);
    const iconColor = accentDark ? '#e2e8f0' : accentColor;
    const proficiency = proficiencyTitles[skill.proficiency];
    const categories = skill.categories.map(c => categoryTitles[c]).join(' · ');

    let deviconDataUri: string | undefined;
    if (icon.svg) {
        deviconDataUri = `data:image/svg+xml;base64,${Buffer.from(icon.svg).toString('base64')}`;
    }

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
                    position: 'relative',
                }}
            >
                {/* Accent orb */}
                <div style={{
                    position: 'absolute',
                    top: -100,
                    right: -100,
                    width: 500,
                    height: 500,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${accentColor}22 0%, transparent 70%)`,
                    display: 'flex',
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: -80,
                    left: -80,
                    width: 400,
                    height: 400,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${accentColor}18 0%, transparent 70%)`,
                    display: 'flex',
                }} />

                {/* Icon */}
                {icon.path && (
                    <svg viewBox="0 0 24 24" width="120" height="120" style={{ marginBottom: 32 }}>
                        <path d={icon.path} fill={iconColor} />
                    </svg>
                )}
                {deviconDataUri && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={deviconDataUri} width={120} height={120} alt="" style={{ marginBottom: 32 }} />
                )}
                {!icon.path && !deviconDataUri && (
                    <div style={{
                        width: 120,
                        height: 120,
                        borderRadius: 24,
                        background: accentColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 32,
                        fontSize: 56,
                        fontWeight: 700,
                        color: 'white',
                    }}>
                        {icon.initial}
                    </div>
                )}

                {/* Skill title */}
                <h1
                    style={{
                        fontSize: 56,
                        fontWeight: 700,
                        color: 'white',
                        margin: 0,
                        lineHeight: 1.1,
                        textAlign: 'center',
                        maxWidth: 900,
                    }}
                >
                    {skill.title}
                </h1>

                {/* Proficiency badge */}
                <div
                    style={{
                        display: 'flex',
                        marginTop: 20,
                        padding: '8px 24px',
                        borderRadius: 999,
                        background: `${accentColor}25`,
                        border: `2px solid ${accentColor}50`,
                        fontSize: 22,
                        color: iconColor,
                        fontWeight: 600,
                    }}
                >
                    {proficiency}
                </div>

                {/* Categories */}
                <p
                    style={{
                        fontSize: 20,
                        color: 'rgba(148,163,184,0.8)',
                        margin: 0,
                        marginTop: 20,
                        maxWidth: 800,
                        textAlign: 'center',
                    }}
                >
                    {categories}
                </p>

                {/* Branding */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 32,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 36,
                            height: 36,
                            borderRadius: 8,
                            background: 'linear-gradient(135deg, #2563eb, #0ea5e9)',
                        }}
                    >
                        <span style={{ fontSize: 20, fontWeight: 800, color: 'white', letterSpacing: -1 }}>LR</span>
                    </div>
                    <span style={{ fontSize: 18, color: 'rgba(96,165,250,0.8)' }}>liamr.co</span>
                </div>
            </div>
        ),
        { ...size }
    );
}
