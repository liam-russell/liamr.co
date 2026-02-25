'use client';

import { XIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function MapModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (open) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }, [open]);

    return (
        <dialog
            ref={dialogRef}
            onClose={onClose}
            className="m-auto w-full max-w-2xl rounded-2xl border border-border bg-background p-0 shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-sm"
        >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <h2 className="font-serif text-lg font-semibold text-foreground">Canberra, Australia (Remote)</h2>
                <button
                    type="button"
                    onClick={onClose}
                    className="flex size-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
                    aria-label="Close"
                >
                    <XIcon size={16} />
                </button>
            </div>
            <div className="aspect-video w-full">
                {open && (
                    <iframe
                        title="Canberra, Australia"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208837.2637590879!2d148.9819578!3d-35.2809368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b164d69b05c9021%3A0x500ea6ea7695660!2sCanberra%20ACT!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
                        className="size-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                )}
            </div>
        </dialog>
    );
}
