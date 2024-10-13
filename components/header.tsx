import Link from "next/link";
import SearchBox from "./search-box";
import { Suspense } from "react";

export default function Header() {
    return <header className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <Link href='/' className="font-serif text-5xl uppercase">
            <span className="font-normal text-black">Liam</span>
            <span className="font-light text-blue-900">Russell</span>
        </Link>
        <Suspense fallback=''>
            <SearchBox />
        </Suspense>
    </header>
}