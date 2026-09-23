'use client';

import { MapPinIcon } from 'lucide-react';
import { useState } from 'react';
import MapModal from './map-modal';

export default function MapButton({ variant }: { variant: 'meta' | 'footer' }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            {variant === 'meta' ? (
                <button
                    type="button"
                    onClick={() => setOpen(true)}
                    aria-label="Canberra/Remote, show on map"
                    className="inline-flex items-center gap-1 text-muted transition-colors hover:text-foreground"
                >
                    <MapPinIcon size={13} aria-hidden="true" className="flex-none" />
                    Canberra/Remote
                </button>
            ) : (
                <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-foreground"
                >
                    <MapPinIcon size={16} aria-hidden="true" className="flex-none text-blue-400/80" />
                    Canberra/Remote
                </button>
            )}
            <MapModal open={open} onClose={() => setOpen(false)} />
        </>
    );
}
