'use client'

import { ArrowLeft } from "lucide-react";

export default function BackButton() {
    return <button type="button" onClick={() => window.history.back()} className="flex flex-row items-center bg-none p-0 font-serif font-bold uppercase text-gray-500">
        <ArrowLeft />
        {' '}
        Back
    </button>;
}