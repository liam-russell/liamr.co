import type { Metadata, Viewport } from "next";
import "./globals.css";
import { JetBrains_Mono, Nunito, Roboto_Slab } from 'next/font/google'
import { MicrosoftClarityInit } from "@/components/analytics";
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from "@next/third-parties/google"
import Backdrop from "@/components/backdrop";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import CommandK from "@/components/command-k";
import { themeScript } from "@/components/theme-toggle";

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

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500'],
    variable: '--font-jetbrains-mono',
});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: [
        { media: '(prefers-color-scheme: dark)', color: '#050a18' },
        { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    ],
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
        <html lang="en" suppressHydrationWarning className={`${nunito.variable} ${robotoSlab.variable} ${jetbrainsMono.variable}`}>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
            </head>
            <body className="min-h-screen overflow-x-clip bg-background font-sans text-foreground">
                <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white focus:shadow-lg">
                    Skip to main content
                </a>
                <Backdrop />
                <div className="relative z-1 mx-auto max-w-[1120px] px-6 pb-10 pt-[22px]">
                    <SiteHeader />
                    <main id="main-content">
                        {children}
                    </main>
                    <SiteFooter />
                </div>
                <CommandK />
                <Analytics />
                {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
                <MicrosoftClarityInit />
            </body>
        </html>
    );
}
