'use client';

import { LocateIcon } from 'lucide-react';
import { useState } from 'react';
import MapModal from './map-modal';

export default function LocationButton() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className='glass hover-lift group flex flex-row items-center justify-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted transition-colors hover:text-foreground'
            >
                <LocateIcon size={18} className='text-blue-400/70 transition-colors group-hover:text-blue-500 dark:group-hover:text-blue-400' aria-hidden='true' />
                Canberra (Remote)
            </button>
            <MapModal open={open} onClose={() => setOpen(false)} />
        </>
    );
}
