import Image from 'next/image';
import type { CSSProperties } from 'react';
import heroImage from '@/assets/hero-keyboard.jpg';

export default function Hero() {
    return (
        <section
            data-reveal=""
            style={{ '--i': 1 } as CSSProperties}
            className="relative my-7 overflow-hidden rounded-3xl border border-(--glass-border) bg-[#05070d] px-[clamp(24px,5vw,56px)] py-[clamp(40px,7vw,80px)] shadow-(--card-shadow)"
        >
            <Image
                src={heroImage}
                alt=""
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1120px) 1072px, 100vw"
                className="object-cover object-[70%_55%]"
            />
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,6,14,.92)_0%,rgba(3,6,14,.78)_45%,rgba(3,6,14,.2)_100%)]"
            />
            <h1 className="relative m-0 max-w-[22ch] text-balance font-serif text-[clamp(28px,4.2vw,48px)] font-medium leading-[1.12] tracking-[-0.025em] text-[#f1f5f9]">
                I’m an experienced technical lead, excelling in delivering intricate, quality software <span className="text-gradient">in the AI-native era.</span>
            </h1>
        </section>
    );
}
