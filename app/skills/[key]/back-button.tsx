'use client'

import { ArrowLeft } from "lucide-react";

export default function BackButton() {
    return <button type="button" onClick={() => window.history.back()} className="group flex flex-row items-center gap-1 bg-none p-0 font-serif text-sm font-bold uppercase tracking-wider text-muted transition-colors hover:text-foreground">
        <ArrowLeft size={16} className='transition-transform group-hover:-translate-x-1' />
        Back
    </button>;
}