import { Metadata } from "next";
import { SearchFilters } from "./search-filters";
import SearchResults from "./search-results";
import { Suspense } from "react";

export const metadata = {
    title: "Search skills",
    description: "Search through my skills",
} satisfies Metadata;

export default function SearchPage() {
    return <div className="mt-12">
        <Suspense fallback=''>
            <SearchFilters />
        </Suspense>
        <div className="overflow-hidden rounded-sm bg-white/50 backdrop-blur-sm">
            <h1 className="block bg-blue-900 p-4 font-serif font-bold uppercase text-white">My skills</h1>
            <Suspense fallback=''>
                <SearchResults />
            </Suspense>
        </div>
    </div>;
}