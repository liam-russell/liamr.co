import { cn } from "@/lib/cn";
import { proficiencyTitles, SkillProficiency } from "@/skills/skill-proficiency";

const classNames = {
    [SkillProficiency.Learning]: 'bg-amber-100 text-amber-80 border-amber-200',
    [SkillProficiency.Familiar]: 'bg-green-100 text-green-800 border-green-200',
    [SkillProficiency.Proficient]: 'bg-blue-100 text-blue-800 border-blue-200',
    [SkillProficiency.Expert]: 'bg-purple-100 text-purple-800 border-purple-200',
}

const activeClassNames = {
    [SkillProficiency.Learning]: 'bg-amber-300 text-amber-900 border-amber-300',
    [SkillProficiency.Familiar]: 'bg-green-300 text-green-900 border-green-300',
    [SkillProficiency.Proficient]: 'bg-blue-300 text-blue-900 border-blue-300',
    [SkillProficiency.Expert]: 'bg-purple-300 text-purple-900 border-purple-300',
}

const icons = {
    [SkillProficiency.Learning]: '📖',
    [SkillProficiency.Familiar]: '🧠',
    [SkillProficiency.Proficient]: '🚀',
    [SkillProficiency.Expert]: '🌟',
}

export default function ProficiencyBadge({ proficiency, active = false, onClick, className }: { proficiency: SkillProficiency, active?: boolean, onClick?: () => void, className?: string }) {
    return (
        <button
            type='button'
            className={cn(
                `inline-block rounded-full transition-colors border-2 px-2 py-1 text-xs font-medium font-serif`,
                active ? activeClassNames[proficiency] : classNames[proficiency],
                className
            )}
            onClick={onClick}
        >
            {icons[proficiency]}
            {' '}
            {proficiencyTitles[proficiency]}
        </button>
    );
}