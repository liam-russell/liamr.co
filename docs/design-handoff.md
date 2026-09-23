# liamr.co — Design Handoff

A brief for Claude Design to redesign liamr.co. Paste this whole file in as the prompt. Once the design is agreed, we'll implement it in this repo.

---

## 1. The ask

Make liamr.co feel **current, crafted and a bit show-offy**, the portfolio of a technical lead who still builds. Right now it reads as a skills directory with a name on top. It should read as **a person, what they're building now, and proof they can build it**.

Keep what works:
- Brand: Roboto Slab (display) + Nunito (body), blue → sky gradient accent, dark-first with a full light theme
- The fast, searchable skills directory (`/skills`, `/skills/[key]`), which is useful and SEO-friendly
- Restraint. "Whiz bang" should mean polish and motion that rewards attention, not noise

Drop or replace:
- **The 3D skill cloud on the homepage.** It's hard to use (drag and orbit to find anything), it zooms oddly after page load while the force layout settles, and it's heavy (three.js). Replace it with something 2D, instantly legible, keyboard-accessible and useful for scanning skills (ideas in §5).
- The generic "Technical lead with full-stack expertise" chip, the "Full-stack / Front-end & back-end" stat tile, and the stale "Currently:" line.

---

## 2. What's stale on the current site (from the resume)

| Site says | Reality (resume, Sep 2026) |
|---|---|
| "Currently: exploring LLM-powered developer tooling, modular monolith patterns in .NET, Next.js 16" | Leading a two-person team building a real-time multiplayer sports-simulation platform in a TypeScript monorepo, and shipping side projects (snapbook.ing, SproutGit) |
| Pitch leans on C#/.NET + AWS | Now mostly TypeScript platform work: Fastify, Next.js, Better Auth, Terraform, DuckDB, Cloudflare, Vercel. .NET is still a strength but no longer the headline |
| No projects, no experience, no story | Resume has a strong 11-year arc and several shippable projects (below) |
| Skills data | Missing: Terraform, Fastify, DuckDB, Parquet/data lake, Cloudflare Workers, Tauri, Svelte, Kysely, Stripe, passkeys/WebAuthn, KMS/TPM device attestation, Epic Online Services, Unreal SDK, Alchemy IaC |

---

## 3. Content to use

### Positioning (hero)
- **Name:** Liam Russell
- **Role:** Technical Lead, Canberra, Australia (remote). Keep "Technical Lead" as the headline title everywhere (hero, meta, JSON-LD). Never name current or past employers or their products (see §8)
- **One-liner options** (pick or riff):
  - "Technical lead who still ships: architecture, platforms and the interfaces on top."
  - "Technical lead. 10+ years of shipping software people depend on."
- **Availability:** open to new opportunities. Show it as a small status pill in the hero (e.g. a green dot + "Open to opportunities") that links to the contact section, and repeat it in the contact footer
- **Supporting line:** Architect of distributed systems on AWS and the edge, TypeScript and C#/.NET, and polished React/Next.js front ends. Lead teams, write decision records, and use AI to build faster without lowering the bar.

### Now (a live-feeling "currently" block)
- Leading the platform team for a real-time multiplayer sports simulator
- Building **snapbook.ing**, a booking platform for small businesses, solo
- Building **SproutGit**, a worktree-first Git desktop app for humans + AI agents, with a friend

### Headline numbers (replace the old stat tiles)
- **10+** years shipping software (since 2015)
- **7 apps · 20 services · 46 packages**: the multiplayer sim platform, built by two engineers in under four months
- **25-year-old** SaaS codebase modernised
- **{N}+ skills** (computed, as now)

### Career arc (timeline, a good story: support desk → technical lead)
Label employers generically only: "Global higher-ed SaaS company" (2015–2026) and "Games studio" (2026–now). No company or product names, no logos.

1. **Technical Support Analyst**, higher-ed SaaS · 2015–2017. Debugged the product, fixed recurring issues directly in the codebase, ran demos for universities
2. **Full Stack Engineer**, higher-ed SaaS · 2017–2021. C#/.NET, React, TypeScript, serverless on AWS, Docker/ECS, CI/CD; worked async across UK, US, Brazil and Spain
3. **Senior Software Engineer**, higher-ed SaaS · 2021–2025. Event-driven microservices on AWS (Lambda, SQS/SNS, DynamoDB), led front end of key features, championed security and IaC (CDK)
4. **Technical Lead**, higher-ed SaaS · 2025–2026. Architecture across a SaaS platform used by universities globally, modernisation to modern .NET + React, LLM R&D, mentoring
5. **Technical Lead, Platform**, games studio · 2026–now. Platform behind a multiplayer sports simulator (see Selected work)

### Selected work (cards, each needs: name, one-liner, 3–5 tech chips, "what I did", optional link)
- **Multiplayer Sim Platform** (current role, unnamed): Turborepo monorepo of 7 apps, 20 services, 46 packages and an Unreal Engine SDK. Better Auth as sole OAuth/OIDC issuer (passkeys, MFA, device flow); device licensing via KMS-signed JWTs bound to TPM 2.0 keys; DuckDB over an S3 Parquet lake after dropping Snowflake; Epic Online Services chosen after a documented bake-off vs PlayFab/GameLift; Terraform across ECS, Aurora, Batch, Cloudflare, Vercel. Architecture governed by decision records; AI-built code held to them.
- **snapbook.ing** ↗ https://snapbook.ing: Multi-tenant booking/event platform, built solo. 7 apps + 22 packages on Cloudflare Workers, RSC, Better Auth, Kysely/Postgres, Stripe, Puck visual page builder, i18n, AI website generation.
- **SproutGit** ↗ https://sproutgit.dev: Cross-platform Git desktop app (Tauri v2 + Rust + SvelteKit) built around worktrees so multiple devs or AI agents can work in one repo without collisions. Early preview releases live.
- **Deployment Tool + Hub Monorepo** (previous role): Solo-architected. Hub is an event-driven modular platform (.NET 10, Aspire, Rebus, Fargate/Lambda, Aurora Postgres); the Deployment Tool inside it provisions per-customer SaaS instances to Fargate + RDS via CDK, with live React Flow pipeline visualisation. The org's first AI-developed app.
- **Applicant Tracking System** (previous role, no link): Solo-built applicant tracking system. Live drag-and-drop kanban over API Gateway WebSockets + DynamoDB Streams, resume search via Elasticsearch, full audit log.
- **AI Code Review pipeline** (previous role): Webhook-triggered reviewer on Azure DevOps (Kiro CLI) that comments on specific diff lines and takes chat commands in PR threads.
- Also: Check-in (Next.js RSC + .NET, QR ticketing), introducing React to a legacy jQuery/AngularJS/WebForms codebase, Shutter Share (Astro marketing site) ↗ https://shuttershare.com.au

### How I work (principles, short cards or a list)
- Big picture first; decisions written down as records the code is held to
- Ship working software over debating abstractions
- Security and accessibility are first-class (WCAG 2.2 AA audit work, SOC 2 evidence, OWASP)
- Developer experience is a product: clone-and-run repos, discoverable codebases
- Use AI thoughtfully: agents, MCP, AI code review, with humans owning the decisions

### Contact / links
- GitHub: https://github.com/liam-russell
- LinkedIn: https://www.linkedin.com/in/liam-russell/
- Email: liam@liamr.co
- Location: Canberra, Australia (remote) · keep the existing map modal

---

## 4. Information architecture

**Home (`/`)**, one long, well-paced page:
1. Hero: name, role, one-liner, primary CTAs (Selected work · Get in touch), availability/location chip
2. Now: 3 compact "currently building" items with a subtle live indicator
3. Numbers strip
4. Selected work: 3 featured cards (Multiplayer Sim Platform, snapbook.ing, SproutGit) and a compact row for the rest
5. Career timeline
6. Stack: the replacement for the 3D cloud (see §5), linking into `/skills`
7. How I work
8. Contact footer with the "Open to opportunities" status and a clear email CTA

**Skills (`/skills`, `/skills/[key]`)**: restyle to match; keep search, filters and URLs. Skill detail pages could show "Used in" (links to projects that use the skill).

**Optional:** `/work/[slug]` case-study pages for the three featured projects (architecture diagram, decisions, outcomes). Design one template.

---

## 5. Replacing the 3D skill cloud: directions to explore

Pick one, or show two for comparison. It needs to load instantly, be keyboard-navigable, work on mobile, and look great in a static screenshot.

- **A. Filterable stack grid (bento):** categories as tiles (AI, Frontend, Backend, Cloud, Data, DevOps, Security…), skills as icon chips sized/weighted by proficiency. Hover or focus a chip to highlight related skills across tiles with a soft glow. Click to open `/skills/[key]`.
- **B. 2D constellation, static layout:** a precomputed (not live-simulated) node map in SVG. Categories as anchors, skills orbiting, related-skill lines appear on hover. No camera, no zoom, no physics settling on load.
- **C. Proficiency rings / radar:** one row per category with Expert → Learning bands, skills placed as icons. Very scannable, shows depth rather than just breadth.
- **D. "Stack by project":** pick a project (Sim Platform / snapbook / SproutGit) and the stack view lights up the skills it used. Ties skills to proof.

My lean: **A with the "related skills" glow, plus D's project filter.**

---

## 6. Visual direction & "whiz bang"

- **Mood:** precise, engineered, calm-dark. Think a well-lit control room, not a neon arcade. Keep the dot grid and glow orbs but make them quieter and more intentional.
- **Type:** Roboto Slab for display at larger, tighter sizes; Nunito for body. Consider a mono (e.g. JetBrains Mono / Geist Mono) for small labels, numbers and tech chips.
- **Colour:** keep blue/sky as primary. Category colours already exist (see `components/skills-graph.tsx` `categoryColors`); reuse them sparingly for chips and the stack view.
- **Motion moments (pick a few, not all):**
  - Hero name reveal with a subtle gradient sweep
  - Numbers count up when scrolled into view
  - Cursor-following spotlight on cards (border glow tracks pointer)
  - Timeline line draws as you scroll
  - Selected-work cards with a small animated architecture diagram (boxes and arrows that light up in sequence: client → auth → services → data)
  - ⌘K command palette for the existing search (jump to skills, projects, links)
  - "Now" block with a gentle pulsing live dot
- **All motion must respect `prefers-reduced-motion`.**

---

## 7. Constraints (for implementation)

- Next.js 16 App Router, React 19, Tailwind CSS 4 (tokens live in `app/globals.css`), lucide-react + simple-icons for icons
- Prefer CSS / SVG / light JS animation. **No three.js on the homepage.** A small library like Motion is fine if justified
- Light + dark themes both first-class (currently driven by `prefers-color-scheme`); a manual toggle would be welcome
- WCAG 2.2 AA: contrast, focus rings, keyboard access for every interactive element, semantic landmarks
- Fast: aim for LCP < 1.5s, CLS ≈ 0; the homepage should be mostly server-rendered
- Responsive from 360px to wide desktop; no horizontal scroll
- Keep SEO bits: JSON-LD Person (`jobTitle` stays "Technical Lead"), OG images, sitemap, `llms.txt`

---

## 8. Don'ts and open questions

**Don't:**
- Imply open-source contributions (there aren't any public ones)
- Name any current or past employer, their products, or use their logos. Use generic labels ("games studio", "higher-ed SaaS company")
- Claim the previous SaaS product is fully WCAG compliant; say "led WCAG 2.2 AA audit work"
- Offer a downloadable CV
- Put a phone number, job-search motivations or salary anything on the site

**Decided:**
- Employers stay unnamed
- Show "Open to opportunities"
- No downloadable CV

**Still open:**
- Want `/work/[slug]` case studies now, or later?

---

## 9. Deliverables wanted from Claude Design

- Homepage, desktop + mobile, dark + light
- The stack/skills visualisation replacing the 3D cloud (one or two directions from §5)
- Restyled `/skills` list and `/skills/[key]` detail
- One project card component and (optional) one case-study page
- Token sheet: colours, type scale, spacing, radii, shadows/glass, motion durations and easings
