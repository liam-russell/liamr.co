import { Metadata } from "next";
import { SearchFilters } from "./search-filters";
import SearchResults from "./search-results";
import { Suspense } from "react";
import Link from "next/link";

export const metadata = {
    title: "Technical Skills & Expertise",
    description: "Explore my skills across cloud architecture, distributed systems, React, Next.js, TypeScript, C#, .NET, and more.",
} satisfies Metadata;

export default function SearchPage() {
    return <div className="mt-12 animate-fade-in">
        <Suspense fallback=''>
            <SearchFilters />
        </Suspense>
        <div className="glass-card mt-0 overflow-hidden rounded-2xl">
            <div className="flex items-center justify-between bg-linear-to-r from-blue-600 to-sky-500 px-6 py-4">
                <h1 className="font-serif text-lg font-bold uppercase tracking-wider text-white">My skills</h1>
                <Link
                    href="/"
                    className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                    View graph →
                </Link>
            </div>
            <Suspense fallback=''>
                <SearchResults />
            </Suspense>
        </div>
    </div>;
}