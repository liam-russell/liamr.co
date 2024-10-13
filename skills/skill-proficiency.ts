export enum SkillProficiency {
    Learning = 0,
    Familiar = 1,
    Proficient = 2,
    Expert = 3
}

export const proficiencyTitles = {
    [SkillProficiency.Learning]: "Learning",
    [SkillProficiency.Familiar]: "Familiar",
    [SkillProficiency.Proficient]: "Proficient",
    [SkillProficiency.Expert]: "Expert",
} as const