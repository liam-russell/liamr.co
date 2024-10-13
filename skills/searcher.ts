import MiniSearch from "minisearch";
import type { Skill } from "./types";
import skills from "./data/skills";

const searcher = new MiniSearch<Skill>({
    fields: ['key', 'title', 'description', 'subSkills.name'],
    storeFields: ['key', 'title'],
});

searcher.addAll(skills.map(s => ({
    id: s.key,
    ...s
})));

export default searcher;