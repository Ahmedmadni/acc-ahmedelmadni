# CLAUDE.md

Context for Claude Code when working in this repository.

## Project overview

Personal brand / portfolio site for **Ahmed Elmadani (أحمد المدني)**, a senior accountant in Riyadh, Saudi Arabia. It is bilingual (Arabic default / English), RTL-first, and combines:

- A marketing site (hero, services, experience, skills, testimonials, contact) — `src/routes/index.tsx`.
- A **Knowledge Library** of accounting articles (`kb_articles`/`kb_categories` in Supabase) with categories like `zakat-tax-ksa`, `vat`, `audit`, `financial-accounting`, etc. Includes an AI-assisted article generation + review pipeline (`src/lib/knowledge/generate.functions.ts`).
- A **Library** of courses/books/templates/tools (`src/routes/library.*.tsx`).
- Interactive accounting **tools** (VAT/Zakat calculators, CV builder, exam bank) under `src/features/*` and `src/components/tools/*`.
- An authenticated **admin area** (`src/routes/_authenticated/*`): article/library management, a CRM (`/crm`), and tax declarations (`/declarations`). Admin-only UI is gated by a hardcoded owner email check (`ADMIN_EMAIL` in `src/routes/index.tsx`), not a DB role for the nav — but Supabase RLS also enforces `has_role(auth.uid(), 'admin')` server-side for writes.

## Tech stack

- **React 19 + TanStack Start** (file-based routing via TanStack Router, SSR-capable, deployed as a Cloudflare Worker via `@cloudflare/vite-plugin`).
- **Supabase** (Postgres + Auth + Storage) as the backend. Client: `src/integrations/supabase/client.ts` (browser) and `client.server.ts` (server, service-role).
- **Tailwind CSS v4** + **shadcn/ui** (`style: "new-york"`, components in `src/components/ui`, path alias `@/*` → `src/*`).
- **TanStack Query** for all data fetching (no Redux/Zustand).
- Managed as a **Lovable** project (`.lovable/`) — see "Deployment & data changes" below, this matters a lot.

## Key folders

```
src/routes/            file-based routes (TanStack Router). index.tsx is the homepage AND
                        exports the shared Navbar/Footer used site-wide via SubPageShell.
src/routes/_authenticated/   auth-gated routes (crm, declarations, admin.library, admin.knowledge)
                        — route.tsx is just an auth guard, there is NO shared admin layout/sidebar.
                        Any new page here needs an explicit nav link added manually or it's
                        an orphan page (this has bitten us before — see gotchas).
src/components/         shared UI; src/components/ui is shadcn primitives (don't hand-edit
                        their internals, regenerate via shadcn CLI instead).
src/features/           larger self-contained features (crm, cv, exams).
src/lib/                domain logic: i18n.ts (ar/en strings), finance.ts, tax/, knowledge/
                        (AI article generation), library/, seo/.
src/integrations/supabase/   Supabase clients + generated types.ts (regenerate after schema changes).
supabase/migrations/    raw, timestamped SQL migrations — the only source of truth for schema
                        AND for any content seeded via SQL (see gotchas).
```

## Commands

```
npm run dev          # vite dev server
npm run build         # production build
npm run preview       # preview a production build
npm run lint           # eslint .
npm run format          # prettier --write .
```

There is **no test suite** in this repo (no `test` script, no test files) — don't assume Jest/Vitest exists. Type-check with `npx tsc --noEmit` before considering a change done.

## Data changes & the Lovable/Supabase sync gotcha

This project's GitHub repo is synced with a **Lovable** project. Merging a PR into `main` on GitHub does **not** automatically apply new files in `supabase/migrations/` to the live Supabase database, and does not by itself redeploy the live site — Lovable needs to sync/pull from GitHub first. Always say this explicitly when a task involves a new migration or DB content change, so the user knows a manual Lovable sync may be required afterward. Never assume "merged" means "live."

When adding content to the Knowledge Library, follow the existing `content_ar` JSON shape exactly (`[{heading, paragraphs: string[]}]`), `faq: [{q,a}]`, `references: [{label,url}]` — check `src/routes/knowledge.$categorySlug.$articleSlug.tsx` for the authoritative shape before writing a migration, since some historical inconsistencies exist between the AI generation pipeline and the render code.

## Design conventions

- **Colors**: dark navy/gold "premium" palette — CSS vars `--navy` (`#04101f`), `--navy-2` (`#07182c`), `--gold` (`#d7aa52`), `--gold-soft` (`#f3d28a`), `--gold-deep` (`#b8862e`), defined in `src/styles.css`. Reuse these, don't invent new brand colors.
- **Fonts**: Cairo for Arabic, Inter for English/numerals.
- **RTL**: Arabic is the default locale (`<html lang="ar" dir="rtl">` in `src/routes/__root.tsx`); English is a client-side toggle, not separate routes. Any new UI must work in both directions — prefer logical Tailwind classes and test with the language toggle.
- Match the existing rounded-3xl / glassy / gold-border card style used throughout `src/routes/index.tsx` and `src/components/knowledge/*` rather than introducing a new visual language.

## Performance rules (read before touching `src/routes/index.tsx` or images)

A PageSpeed audit (July 2026) found mobile LCP at 5.7s, driven mostly by a hydration bug, plus ~400 KiB of oversized images. Both were fixed — don't reintroduce these patterns:

- **Never branch a `useState` lazy initializer on `typeof window`, `localStorage`, or `sessionStorage`.** This makes the very first client render differ from the SSR HTML, which triggers a React hydration-mismatch error (minified error #418), forces React to throw away the server-rendered DOM and do a full client re-render, and can single-handedly blow up LCP by seconds (this is exactly what the old `showVatBanner` init did). Always initialize state to the SSR-safe default (e.g. `false`) and set the real value inside a `useEffect` — see `showVatBanner`/`eidOpen` in `src/routes/index.tsx` for the correct pattern.
- **Size images for their actual rendered dimensions, not their source dimensions.** Decorative/mascot images must be exported at roughly the max CSS display size (check the `<img>`'s `width`/`height`/CSS, not the original upload) — don't import a 1024×1024 source webp to display at 160×160. When adding a new image asset, resize it (e.g. via `sharp`) before committing rather than relying on the browser to downscale a huge file.
- **Don't commit duplicate/unused image formats.** Only the `.webp` variant of an asset should exist in `src/assets/` unless another format is actually imported somewhere — check with `grep -r "assetname" src` before adding a `.png`/`.jpg` alongside an existing `.webp`.
- **Keep `loading="lazy"` + `decoding="async"` on any `<img>` that isn't above-the-fold**, and `fetchPriority="high"` only on the actual LCP candidate (currently the hero profile image).
- **Never import heavy libraries (`jspdf`, `xlsx`, `pdfjs-dist`, `mammoth`, `html2canvas-pro`, `recharts`) into `src/routes/index.tsx`.** That file's exports (`Navbar`, `Footer`, `FloatingSocial`) are pulled into every page on the site via `SubPageShell`, so anything imported there ships to every visitor. Heavy, page-specific libraries belong inside the route/feature file that actually uses them (they already get their own chunk at build time — verify with `npm run build` and check `.output/public/assets/*.js` sizes if unsure).
- Before shipping a change that touches `src/routes/index.tsx`, `src/styles.css`, or `src/assets/`, run `npm run build` and spot-check that no new chunk grew unexpectedly and that the build has no new console errors.

## Git workflow

- **Never commit directly to `main`.** Create a new branch for every task/feature and open a PR.
- Keep commits scoped to one logical change; don't bundle unrelated fixes.
- Before pushing, run `npx tsc --noEmit` (and `npm run lint` when the ESLint config is working) on touched files.
