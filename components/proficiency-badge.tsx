import { cn } from "@/lib/cn";
import { proficiencyTitles, SkillProficiency } from "@/skills/skill-proficiency";

const classNames = {
    [SkillProficiency.Learning]: 'bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-amber-300',
    [SkillProficiency.Familiar]: 'bg-green-500/10 text-green-700 border-green-500/20 dark:text-green-300',
    [SkillProficiency.Proficient]: 'bg-blue-500/10 text-blue-700 border-blue-500/20 dark:text-blue-300',
    [SkillProficiency.Expert]: 'bg-sky-500/10 text-sky-700 border-sky-500/20 dark:text-sky-300',
}

const activeClassNames = {
    [SkillProficiency.Learning]: 'bg-amber-500/25 text-amber-800 border-amber-400/40 shadow-amber-500/10 shadow-md dark:text-amber-200',
    [SkillProficiency.Familiar]: 'bg-green-500/25 text-green-800 border-green-400/40 shadow-green-500/10 shadow-md dark:text-green-200',
    [SkillProficiency.Proficient]: 'bg-blue-500/25 text-blue-800 border-blue-400/40 shadow-blue-500/10 shadow-md dark:text-blue-200',
    [SkillProficiency.Expert]: 'bg-sky-500/25 text-sky-800 border-sky-400/40 shadow-sky-500/10 shadow-md dark:text-sky-200',
}

export default function ProficiencyBadge({ proficiency, active = false, onClick, className, ...rest }: { proficiency: SkillProficiency, active?: boolean, onClick?: () => void, className?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            type='button'
            className={cn(
                `inline-block rounded-full transition-colors border-2 px-2 py-1 text-xs font-medium font-serif`,
                active ? activeClassNames[proficiency] : classNames[proficiency],
                className
            )}
            onClick={onClick}
            {...rest}
        >
            {proficiencyTitles[proficiency]}
        </button>
    );
}