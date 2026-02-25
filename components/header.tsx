import Link from "next/link";
import SearchBox from "./search-box";
import { Suspense } from "react";

export default function Header() {
    return <header className="animate-slide-down flex flex-col items-center justify-between gap-4 md:flex-row" role="banner">
        <Link href='/' className="group font-serif text-4xl tracking-tight" aria-label="Liam Russell - Home">
            <span className="font-semibold text-foreground transition-colors group-hover:text-blue-500">Liam</span>
            <span className="font-light text-muted transition-colors group-hover:text-blue-400">Russell</span>
        </Link>
        <Suspense fallback=''>
            <SearchBox />
        </Suspense>
    </header>
}