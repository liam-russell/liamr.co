import { Metadata } from "next";
import { SearchFilters } from "./search-filters";
import SearchResults from "./search-results";
import { Suspense } from "react";

export const metadata = {
    title: "Search skills",
    description: "Search through my skills",
} satisfies Metadata;

export default function SearchPage() {
    return <div className="mt-12 animate-fade-in">
        <Suspense fallback=''>
            <SearchFilters />
        </Suspense>
        <div className="glass-card overflow-hidden rounded-2xl">
            <h1 className="block bg-linear-to-r from-blue-600 to-sky-500 px-6 py-4 font-serif text-lg font-bold uppercase tracking-wider text-white">My skills</h1>
            <Suspense fallback=''>
                <SearchResults />
            </Suspense>
        </div>
    </div>;
}