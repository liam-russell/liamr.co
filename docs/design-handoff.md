# liamr.co — Design Handoff

A brief for Claude Design. Paste this whole file in as the prompt. Once the design is agreed, we'll implement it in this repo.

---

## The ask

Make liamr.co **look nicer and feel more personal**.

Right now it's a tidy but impersonal page: a name, a blurb, some stat tiles, a 3D skill cloud and links. It should feel like a real person's corner of the internet: warm, crafted, a bit of personality, still clearly a technical lead.

Not the goal: a CV. Don't list jobs, employers, job titles or dates.

## Keep

- Name and title: **Liam Russell, Technical Lead**, Canberra, Australia (remote)
- Fonts: Roboto Slab (display) + Nunito (body)
- The blue → sky accent, dark-first with a proper light theme
- The searchable skills directory (`/skills`, `/skills/[key]`), restyled to match
- GitHub, LinkedIn and the Canberra map modal

## Change

- **Replace the 3D skill cloud.** It's hard to use, zooms oddly after page load while the physics settle, and pulls in three.js. Replace it with something 2D, calm and scannable: skill chips grouped by category, where hovering one gently highlights related skills. Instant to load, keyboard-friendly, fine on mobile.
- **Drop the generic bits:** the "Technical lead with full-stack expertise" chip, the stat tiles and the stale "Currently:" line.
- **Add "Open to opportunities":** a small green-dot status pill in the hero that links to a friendly contact section at the bottom.

## Make it personal

Material to draw from (use what fits, rewrite freely, first person, plain and warm):

- **Voice.** Short and human, not a buzzword list. For example: "I'm Liam. I lead engineering teams and still love building things myself: the architecture, the platform underneath, and the interface on top."
- **A photo or avatar spot** in the hero. Design it with a placeholder; Liam will supply the image.
- **How I got here.** Started on a support desk, fixing the bugs customers reported, and never stopped building. Studied digital media, and before that sound production (a nice human detail).
- **Things I'm building on the side:**
  - **snapbook.ing** (https://snapbook.ing): a booking platform for small businesses
  - **SproutGit** (https://sproutgit.dev): a Git desktop app built around worktrees, for people and AI agents working side by side (with a friend)
  - **Shutter Share** (https://shuttershare.com.au): my own small business
- **What I care about** (a few short lines, not a wall):
  - Clear thinking and honest communication
  - Shipping working software over debating abstractions
  - Security and accessibility as first-class, not afterthoughts
  - Developer experience: clone it, run it, understand it
  - Using AI thoughtfully to build better, not just faster
- **Now** (a small, live-feeling block): what I'm tinkering with, what I'm learning, maybe what I'm listening to. Design it so it's easy to update.

## Look and feel

- **Mood:** calm, crafted, a little playful. A well-lit studio, not a neon arcade. Keep the dot grid and soft glows, but quieter.
- **Layout:** one well-paced homepage: hero (photo, name, one-liner, status pill) → about → side projects → what I care about → skills → contact.
- **Type:** bigger, more confident display type. Consider a mono accent (e.g. JetBrains Mono) for small labels and chips.
- **A few delightful moments** (pick some, not all):
  - A gentle gradient sweep on the name
  - Cards with a soft glow that follows the cursor
  - Sections that ease in as you scroll
  - A ⌘K command palette for the existing search
  - A pulsing "live" dot on the Now block and the status pill
  - A small hand-drawn or SVG flourish that feels like Liam, not a template
- **Respect `prefers-reduced-motion`** for all of it.

## Constraints

- Next.js 16 App Router, React 19, Tailwind CSS 4 (tokens in `app/globals.css`), lucide-react and simple-icons
- No three.js on the homepage; prefer CSS/SVG with light JS
- Light and dark both first-class; a manual theme toggle would be nice
- WCAG 2.2 AA, fast (mostly server-rendered), responsive from 360px up

## Don't

- Name or describe specific jobs, employers, clients or their products
- Offer a downloadable CV
- Include a phone number
- Imply open-source contributions

## Deliverables

- Homepage: desktop and mobile, dark and light
- The 2D skills section replacing the 3D cloud
- Restyled `/skills` list and `/skills/[key]` detail
- A small token sheet: colours, type scale, spacing, radii, shadows, motion
