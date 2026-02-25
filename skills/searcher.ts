import MiniSearch from "minisearch";
import type { Skill } from "./types";
import skills from "./data/skills";

const searcher = new MiniSearch<Skill & { subSkillNames: string }>({
    fields: ['key', 'title', 'description', 'subSkillNames'],
    storeFields: ['key', 'title'],
});

searcher.addAll(skills.map(s => ({
    id: s.key,
    ...s,
    subSkillNames: s.subSkills?.map(ss => ss.name).join(' ') ?? '',
})));

export default searcher;