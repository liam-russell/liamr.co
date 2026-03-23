import { ImageResponse } from 'next/og';

export const alt = 'Liam Russell | Technical Lead';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
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
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 40%, #1e40af 100%)',
                    position: 'relative',
                }}
            >
                {/* Decorative orbs */}
                <div style={{ position: 'absolute', top: -80, left: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)', display: 'flex' }} />
                <div style={{ position: 'absolute', bottom: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(14,165,233,0.25) 0%, transparent 70%)', display: 'flex' }} />

                {/* Logo badge */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 80,
                        height: 80,
                        borderRadius: 16,
                        background: 'linear-gradient(135deg, #2563eb, #0ea5e9)',
                        marginBottom: 32,
                        boxShadow: '0 8px 32px rgba(37,99,235,0.4)',
                    }}
                >
                    <span style={{ fontSize: 44, fontWeight: 800, color: 'white', letterSpacing: -2 }}>LR</span>
                </div>

                {/* Name */}
                <h1
                    style={{
                        fontSize: 64,
                        fontWeight: 700,
                        color: 'white',
                        margin: 0,
                        lineHeight: 1.1,
                    }}
                >
                    Liam Russell
                </h1>

                {/* Title */}
                <p
                    style={{
                        fontSize: 28,
                        color: 'rgba(148,163,184,1)',
                        margin: 0,
                        marginTop: 12,
                        letterSpacing: 2,
                        textTransform: 'uppercase',
                    }}
                >
                    Technical Lead
                </p>

                {/* Tagline */}
                <p
                    style={{
                        fontSize: 20,
                        color: 'rgba(148,163,184,0.7)',
                        margin: 0,
                        marginTop: 24,
                        maxWidth: 600,
                        textAlign: 'center',
                        lineHeight: 1.5,
                    }}
                >
                    Software Architecture · Distributed Systems · Cloud · AI
                </p>

                {/* URL */}
                <p
                    style={{
                        position: 'absolute',
                        bottom: 32,
                        fontSize: 18,
                        color: 'rgba(96,165,250,0.8)',
                        margin: 0,
                    }}
                >
                    liamr.co
                </p>
            </div>
        ),
        { ...size }
    );
}
