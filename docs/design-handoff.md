# liamr.co — Design Handoff

A brief for Claude Design. Paste this whole file in as the prompt. Once the design is agreed, we'll implement it in this repo.

---

## The ask

liamr.co is a **skill browser** for Liam Russell, Technical Lead. Keep it that way, and make it **slick, simple and a joy to explore**. The skills experience is the product. Everything else is a light frame around it.

Design goals:
- **Interesting, not busy.** One strong idea, executed beautifully, beats ten features
- **Motion with purpose.** Animation should explain what changed (filtering, focusing, opening), not decorate
- **Fast and tactile.** Instant response to typing, hovering and keyboard; nothing waits on a physics simulation

Not wanted: a photo, a CV, job history, employer names, job titles or dates.

## What's wrong today

- The homepage centrepiece is a **3D force-graph skill cloud**. It's hard to use (you have to orbit to find anything), it zooms oddly after load while the physics settle, and it's heavy (three.js). Remove it.
- The rest is generic: a tagline chip, stat tiles, a stale "Currently:" line, then links. It doesn't feel designed.
- The `/skills` search page and `/skills/[key]` detail pages work, but look like a different, plainer site.

## Structure

One homepage where the browser *is* the page, plus the existing detail route:

1. **Header strip:** "Liam Russell · Technical Lead · Canberra (remote)", a green-dot **Open to opportunities** pill, GitHub, LinkedIn and email. Compact, not a hero.
2. **One line of intent**, big and confident: e.g. "I design systems, lead the people building them, and write a lot of the code myself."
3. **The skills browser** (most of the page; see below)
4. **Side projects:** a small row of 3 cards (snapbook.ing, SproutGit, Shutter Share), each lighting up its skills in the browser on hover
5. **Footer:** contact, the Canberra map modal (exists already), theme toggle

`/skills/[key]` stays (it's good for SEO and sharing) but should feel like the browser zoomed into one skill. `/skills` can simply become the homepage browser with its URL state.

## The skills browser (the main event)

Data available per skill: title, description, categories (13), proficiency (Learning / Familiar / Proficient / Expert), brand icon and colour, sub-skills, related skills, optional link. About 145 skills plus sub-skills.

### Core interaction ideas (pick a direction, show it off)

- **Search first.** A large, always-visible input ("Search 300+ skills…", `/` to focus, ⌘K from anywhere). Results filter as you type with no lag.
- **Lenses, not just categories.** A row of capability lenses that filter the field with a one-line pitch each (copy below). Switching lenses should animate: chips glide to their new positions (FLIP / View Transitions), leaving chips fade and shrink, arriving ones settle in.
- **Proficiency you can feel.** Encode Expert → Learning visually (size, weight, fill ring or glow intensity), with a sort/segment toggle. At a glance you should see where the depth is.
- **Focus mode.** Hover or keyboard-focus a skill: it lifts and takes its brand colour, related skills stay lit with thin animated connector lines, everything else dims. It's the useful part of the old graph, in 2D and instant.
- **Open in place.** Click a skill and it expands into a detail card (description, proficiency, sub-skills fanning out as chips, related skills, link), with a shared-element transition into `/skills/[key]`. Back reverses the animation.
- **Keyboard all the way.** Arrow keys move between chips, Enter opens, Esc closes, and focus rings are part of the design.
- **Live counts.** "42 skills" ticks as filters change; empty states are friendly and suggest nearby searches.
- **Mobile.** Lenses become a swipeable tab bar; the detail opens as a bottom sheet.

### Lenses (copy with gusto; tighten freely)

1. **Architecture that holds up.** Distributed, event-driven systems that scale sideways without falling over, with decisions written down so the code stays honest to them.
2. **Platforms from the ground up.** Auth, identity, data and infrastructure: the unglamorous foundations everything else stands on, all defined as code.
3. **Interfaces people enjoy.** Fast, accessible, polished front ends, from live drag-and-drop boards to visual page builders.
4. **Full stack, both ecosystems.** TypeScript and C#/.NET, with typed APIs end to end so front and back can't quietly drift apart.
5. **AI, used properly.** Agents, MCP, AI code review and LLM features, with guardrails and human judgement around them.
6. **Modernising the old stuff.** Dragging decades-old codebases into the present without stopping the product.
7. **Security and accessibility, built in.** OWASP-minded design, audit evidence, pen-test fixes and WCAG 2.2 AA work, not bolted on at the end.
8. **Leading teams that ship.** Technical direction, mentoring, code review standards and turning fuzzy ideas into shippable work.

Each lens maps to a set of categories and skills (we'll wire the mapping during implementation).

## Look and motion

- **Mood:** calm, precise, quietly playful. Dark-first with a proper light theme. A well-lit studio, not a neon arcade.
- **Keep:** Roboto Slab (display) + Nunito (body), the blue → sky accent, and the per-category colours already in the code. Consider a mono accent for counts, labels and keyboard hints.
- **Background:** keep a dot grid, but let it respond, e.g. dots near the pointer or the focused skill brighten slightly.
- **Motion palette:** one easing family, 150–250ms for UI and 350–500ms for layout moves, spring-like settles on chips. Stagger reveals on first load, subtly.
- **Nice touches (optional):** cursor-tracking glow on cards, count-up numbers, a gradient sweep on the name once on load, skill icons that tint to their brand colour on hover.
- **Respect `prefers-reduced-motion`:** swap moves for fades.

## Constraints

- Next.js 16 App Router, React 19, Tailwind CSS 4 (tokens in `app/globals.css`), lucide-react + simple-icons
- **No three.js.** CSS/SVG + the View Transitions API first; a small library like Motion is fine if it earns its place
- WCAG 2.2 AA, fully keyboard-operable, responsive from 360px, mostly server-rendered, filter state in the URL

## Don't

- Include a photo, CV download or phone number
- Mention specific jobs, employers, clients, their products, job titles or dates
- Imply open-source contributions

## Deliverables

- Homepage with the skills browser: desktop + mobile, dark + light
- States: idle, typing/filtered, lens switched, skill focused (related lit), skill opened, empty results
- `/skills/[key]` detail page matching the opened-card state
- A motion spec for the key transitions (filter, focus, open/close)
- A small token sheet: colours, type scale, spacing, radii, shadows, motion

---

## Note on data

The skills data has already been updated with the missing skills from Liam's resume (Terraform, Fastify, Cloudflare, DuckDB, Better Auth, device licensing and more), so design for about 145 skills plus their sub-skills.
