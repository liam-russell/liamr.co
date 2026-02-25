'use client'
import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

const getUrl = (query?: string) => {
    if (!query) return '/skills';
    return `/skills?query=${query}`;
}

export default function SearchBox() {
    const searchParams = useSearchParams();
    const [search, setSearch] = useState(searchParams.get('query') ?? '');
    const router = useRouter();

    const handleSearch = useCallback(() => {
        router.push(getUrl(search));
    }, [router, search]);

    return (
        <div className="flex flex-row">
            <div className="glass flex flex-row-reverse items-center gap-3 rounded-full px-6 py-3 transition-all has-focus:shadow-lg has-focus:shadow-blue-500/10 dark:has-focus:bg-white/10">
                <input
                    type="search"
                    aria-label="Search skills"
                    className="peer w-44 bg-transparent text-base text-foreground outline-hidden ring-0 placeholder:text-muted transition-all focus:w-56"
                    placeholder="Search my skills..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                />
                <SearchIcon size={18} className="text-muted transition-colors peer-focus:text-blue-500" aria-hidden="true" />
            </div>
        </div>
    );
}