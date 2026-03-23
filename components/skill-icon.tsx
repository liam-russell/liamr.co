import { cn } from "@/lib/cn";
import { isHexDark, type SkillIconData } from "@/skills/icons";

export default function SkillIcon({ icon, size = 20, className }: {
    icon: SkillIconData;
    size?: number;
    className?: string;
}) {
    const dark = isHexDark(icon.hex);

    if (icon.path) {
        return (
            <svg
                viewBox="0 0 24 24"
                width={size}
                height={size}
                className={cn("shrink-0", dark && "dark:invert", className)}
                role="img"
                aria-hidden="true"
            >
                <path d={icon.path} fill={`#${icon.hex}`} />
            </svg>
        );
    }

    if (icon.svg) {
        return (
            <span
                className={cn("shrink-0 inline-flex [&>svg]:w-full [&>svg]:h-full", className)}
                style={{ width: size, height: size }}
                role="img"
                aria-hidden="true"
                dangerouslySetInnerHTML={{ __html: icon.svg }}
            />
        );
    }

    return (
        <span
            className={cn("shrink-0 inline-flex items-center justify-center rounded-md font-serif font-bold text-white", className)}
            style={{ width: size, height: size, fontSize: size * 0.5, backgroundColor: `#${icon.hex}` }}
            role="img"
            aria-hidden="true"
        >
            {icon.initial}
        </span>
    );
}
