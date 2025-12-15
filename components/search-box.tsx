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
            <div className="flex flex-row-reverse items-center gap-4 rounded-full bg-white/70 px-10 py-5 shadow-lg transition-colors has-focus:bg-white">
                <input
                    type="text"
                    className="peer bg-transparent text-xl outline-hidden ring-0"
                    placeholder="Search my skills..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onFocus={handleSearch}
                    onBlur={handleSearch}
                    onKeyUp={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                />
                <SearchIcon size={24} className="text-gray-400 transition-colors peer-focus:text-blue-400" />
            </div>
        </div>
    );
}