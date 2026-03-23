import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Nunito, Roboto_Slab } from 'next/font/google'
import Header from "@/components/header";
import { MicrosoftClarityInit } from "@/components/analytics";
import QueryClientProvider from "./query-client-provider";
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from "@next/third-parties/google"

const nunito = Nunito({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-nunito',
});

const robotoSlab = Roboto_Slab({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto-slab',
});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#3b82f6',
    colorScheme: 'dark light',
};

export const metadata: Metadata = {
    title: {
        default: "Liam Russell | Technical Lead",
        template: '%s | Liam Russell | Technical Lead',
    },
    description: "Technical Lead specialising in software architecture, scalable distributed systems, cloud infrastructure, and AI. Expert in React, Next.js, TypeScript, C# and .NET.",
    metadataBase: new URL('https://liamr.co'),
    openGraph: {
        type: 'website',
        locale: 'en_AU',
        url: 'https://liamr.co',
        siteName: 'Liam Russell',
        title: 'Liam Russell | Technical Lead',
        description: 'Technical Lead specialising in software architecture, scalable distributed systems, cloud infrastructure, and AI.',
    },
    twitter: {
        card: 'summary',
        title: 'Liam Russell | Technical Lead',
        description: 'Technical Lead specialising in software architecture, scalable distributed systems, cloud infrastructure, and AI.',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`font-sans ${nunito.variable} ${robotoSlab.variable}`}>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
            </head>
            <body className="min-h-screen bg-background text-foreground antialiased transition-colors duration-300">
                {/* Skip to content link for keyboard users */}
                <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white focus:shadow-lg">
                    Skip to main content
                </a>
                {/* Ambient background */}
                <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
                    {/* Gradient glow orbs */}
                    <div className="absolute -left-32 -top-32 h-100 w-100 animate-glow rounded-full bg-blue-500/(--glow-opacity-1) blur-[100px]" />
                    <div className="absolute -right-32 top-1/4 h-80 w-80 animate-glow rounded-full bg-sky-400/(--glow-opacity-2) blur-[100px]" style={{ animationDelay: '2s' }} />
                    <div className="absolute -bottom-32 left-1/3 h-80 w-80 animate-glow rounded-full bg-blue-600/(--glow-opacity-2) blur-[100px]" style={{ animationDelay: '4s' }} />
                    {/* Dot grid pattern */}
                    <div
                        className="absolute inset-0 animate-grid-fade opacity-50"
                        style={{
                            backgroundImage: 'radial-gradient(var(--grid-color) 1px, transparent 1px)',
                            backgroundSize: '32px 32px',
                        }}
                    />
                    {/* Subtle top gradient overlay for depth */}
                    <div className="absolute inset-x-0 top-0 h-64 bg-linear-to-b from-blue-500/5 to-transparent" />
                </div>
                <main id="main-content" className="relative z-10 mx-auto flex min-h-full max-w-5xl flex-col px-6 py-8 sm:px-8">
                    <Analytics />
                    {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
                    <MicrosoftClarityInit />
                    <Header />
                    <QueryClientProvider>
                        <div style={{ viewTransitionName: 'page-content' }}>
                            {children}
                        </div>
                    </QueryClientProvider>
                </main>
            </body>
        </html>
    );
}
