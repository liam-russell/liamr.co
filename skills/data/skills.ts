import { uniq } from "lodash-es";
import type { Skill } from "../types";
import cloud from "./cloud";
import concepts from "./concepts";
import devops from "./devops";
import frameworks from "./frameworks";
import languages from "./languages";
import management from "./management";
import qa from "./qa";

let skills = ([
    ...languages,
    ...frameworks,
    ...cloud,
    ...management,
    ...devops,
    ...qa,
    ...concepts
] as readonly Skill[]);

skills = skills.map(skill => {
    const otherSkills = skills.filter(s => s.relatedSkillKeys?.includes(skill.key));

    otherSkills.forEach(s => {
        skill.relatedSkillKeys = uniq([...(skill.relatedSkillKeys ?? []), s.key]);
    });

    return skill;
});

export default skills;