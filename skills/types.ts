import { SkillCategory } from "./skill-categories";
import { SkillProficiency } from "./skill-proficiency";

export interface SubSkill {
    name: string;
    url: string;
}

export interface Skill {
    key: string;
    title: string;
    description: string;
    categories: readonly SkillCategory[];
    proficiency: SkillProficiency;
    link?: string;
    subSkills?: readonly SubSkill[];
    relatedSkillKeys?: readonly string[];
}