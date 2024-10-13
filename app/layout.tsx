import type { Metadata } from "next";
import "./globals.css";
import { Nunito, Roboto_Slab } from 'next/font/google'
import Header from "@/components/header";
import QueryClientProvider from "./query-client-provider";
import { Analytics } from "@vercel/analytics/react"

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

export const metadata: Metadata = {
    title: {
        default: "Liam Russell | Senior Full Stack Web Developer",
        template: '%s | Liam Russell | Senior Full Stack Web Developer',
    },
    description: "Senior Full Stack Web Developer with extensive experience in web development. Specialising in React, NextJS, TypeScript, C# and .NET.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`font-sans ${nunito.variable} ${robotoSlab.variable}`}>
            <body
                className={`text-black min-h-screen bg-gradient-to-tr from-sky-100 via-sky-100 to-sky-300 antialiased`}
            >
                <main className="container mx-auto flex min-h-full flex-col p-8">
                    <Analytics />
                    <Header />
                    <QueryClientProvider>
                        {children}
                    </QueryClientProvider>
                </main>
            </body>
        </html>
    );
}
