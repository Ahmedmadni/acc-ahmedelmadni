# Ahmed Elmadni Website — Project Map (PHASE 0 Audit)

> Read-only audit of branch `claude/saudi-accounting-content-rm076q` at commit `f8f11e0`.
> No application files were modified. This document informs the redesign; it does not perform it.

---

## 1. Project Overview

| Aspect | Actual implementation |
| --- | --- |
| Framework | **React 19** (`react@19.2`, `react-dom@19.2`) on **TanStack Start** (`@tanstack/react-start@1.167`) — full-stack SSR |
| Routing | **TanStack Router** (`@tanstack/react-router@1.168`), file-based, typed search params; generated `src/routeTree.gen.ts` |
| Build tool | **Vite 7** (`vite@7.3`) via `@lovable.dev/vite-tanstack-config`; `@tailwindcss/vite`, `@cloudflare/vite-plugin`, `vite-tsconfig-paths` |
| Styling | **Tailwind CSS v4** (`tailwindcss@4.2`, config-less `@theme`/`@custom-variant` in `src/styles.css`) + **shadcn/ui** (Radix primitives, `components.json`) + `tw-animate-css`, `class-variance-authority`, `tailwind-merge`, `clsx` |
| Animation | **Motion** (`motion@12.39`, imported as `motion/react` — the Framer Motion successor). No GSAP, no Lenis, no Three.js. |
| UI libraries | Radix UI (24 packages), `cmdk`, `vaul`, `sonner` (toasts), `embla-carousel-react`, `react-day-picker`, `react-resizable-panels`, `input-otp`, `recharts` (charts) |
| Icons | **lucide-react@0.575** (exclusive icon system) |
| Forms | `react-hook-form@7.71` + `@hookform/resolvers` + `zod@3.24` |
| Backend | Supabase (`@supabase/supabase-js@2.106`) — Postgres + Auth + Storage; plus TanStack Start **server functions** (`createServerFn`) and **API routes** (`src/routes/api/*`). AI via `ai` SDK + `@ai-sdk/openai-compatible` (AI Gateway). |
| Database | Supabase **Postgres**, 22 tables + 2 RPCs (see §10). Migrations in `supabase/migrations/`. |
| Authentication | Supabase Auth; route-level guard via `_authenticated/route.tsx` + `admin-middleware.ts` / `auth-middleware.ts`; role check through `has_role()` RPC + `user_roles` table. |
| Deployment | **Cloudflare Worker** (`wrangler.jsonc`, `@cloudflare/vite-plugin`, `.output/`, `.wrangler/`). Managed as a **Lovable** project (`.lovable/`, `bun.lock`, `bunfig.toml`). Custom domain `ahmedelmadni.com`. |
| Package manager | **Bun** (`bun.lock`, `bunfig.toml`) — though `package-lock.json` also present. |
| Scripts | `dev` = `vite dev`, `build` = `vite build`, `build:dev`, `preview`, `lint` = `eslint .`, `format` = `prettier --write .`. **No test script.** |

---

## 2. Complete Route Map

Public + app routes (existing files only):

| Route | File | Purpose | Status | Main components |
| --- | --- | --- | --- | --- |
| `/` | `routes/index.tsx` (2028 lines) | Homepage | Live | `Navbar`, `Hero`, `ServicesMarquee`, `MarqueeStrip`, `Stats`, `TopicsAndVideos`, `FeaturedTools`, `Testimonials`, `Contact`, `Footer`, `AIAssistant`, `FloatingSocial` |
| `/about` | `routes/about.tsx` | Cinematic bio / experience | Live | `CinematicAbout`, `SubPageShell` |
| `/services` | `routes/services.tsx` | Services catalog + embedded request form | Live (recent) | `ServicesPage`, `ServiceCard`, `RequestService` (embedded), `SubPageShell` |
| `/request-service` | `routes/request-service.tsx` | Standalone service request (WhatsApp) | Live | `RequestService`, `SubPageShell` |
| `/experience` | `routes/experience.tsx` | Career timeline | Live | `Experience` (from index), `SubPageShell` |
| `/skills` | `routes/skills.tsx` | Skills + tools/systems | Live | `Skills` (from index), `SkillModal`, `SubPageShell` |
| `/certifications` | `routes/certifications.tsx` | Certificates showcase | Live | `CertsShowcase`, `SubPageShell` |
| `/tools` | `routes/tools.index.tsx` | Tools directory (~54 tools) | Live | tools grid, `tools-registry` |
| `/tools/$toolId` | `routes/tools.$toolId.tsx` | Individual tool host | Live | dispatches to tool component by id |
| `/knowledge` | `routes/knowledge.index.tsx` | Knowledge base index | Live | `KnowledgeShell` |
| `/knowledge/$categorySlug` | `routes/knowledge.$categorySlug.index.tsx` | Category listing | Live | `KnowledgeShell`, `CategoryIcon` |
| `/knowledge/$categorySlug/$articleSlug` | `routes/knowledge.$categorySlug.$articleSlug.tsx` | Article page | Live | article renderer, rating, internal links |
| `/library` | `routes/library.tsx` | Library layout shell | Live | `Library` |
| `/library/` | `routes/library.index.tsx` | Library home | Live | `Library` |
| `/library/articles` | `routes/library.articles.tsx` | Articles list | Live | `Library` |
| `/library/books` | `routes/library.books.tsx` | Books list | Live | `Library` |
| `/library/courses` | `routes/library.courses.tsx` | Courses list | Live | `Library` |
| `/library/templates` | `routes/library.templates.tsx` | Templates list | Live | `Library` |
| `/auth` | `routes/auth.tsx` | Login (admin) | Live, `noindex` | Supabase auth form |
| `/sitemap.xml` | `routes/sitemap[.]xml.ts` | Dynamic sitemap | Live | server route, reads DB + `TOOLS` |

Authenticated / admin (`_authenticated/` — guarded, `noindex`):

| Route | File | Purpose |
| --- | --- | --- |
| `_authenticated` (layout) | `_authenticated/route.tsx` | Auth guard wrapper |
| `/crm` | `_authenticated/crm.tsx` | CRM dashboard |
| `/declarations` | `_authenticated/declarations.tsx` | Saved tax/zakat declarations archive |
| `/admin/profile` | `_authenticated/admin.profile.tsx` | Profile / certifications / experience editor |
| `/admin/knowledge` | `_authenticated/admin.knowledge.tsx` | KB article management |
| `/admin/library` | `_authenticated/admin.library.tsx` | Library items management |
| `/admin/templates` | `_authenticated/admin.templates.tsx` | Accounting templates management |

API routes (server, `src/routes/api/`):

| Endpoint | File | Purpose |
| --- | --- | --- |
| `/api/chat` | `api/chat.ts` | AI assistant chat (streaming) |
| `/api/cv-enhance` | `api/cv-enhance.ts` | CV builder AI enhance |
| `/api/cv-translate` | `api/cv-translate.ts` | CV translation |
| `/api/office-ai` | `api/office-ai.ts` | Office AI assistant tool |
| `/api/public/hooks/generate-articles` | `api/public/hooks/generate-articles.ts` | Cron webhook → auto-generate KB articles |

**Note:** No `partners` / `accounting-software-logos` route exists. See §9.

---

## 3. Page Inventory

Condensed per public page (data source · current weak points):

- **Homepage `/`** — Purpose: convert visitors → service requests. Sections: Hero (typewriter, slideshow bg), ServicesMarquee, About MarqueeStrip, Stats (counters), TopicsAndVideos (YouTube), FeaturedTools, Testimonials, Contact, Footer. Data: mostly hardcoded in `index.tsx` + `i18n.ts`; certifications & some content via Supabase. **Weak points:** 2028-line monolith; many exported section components (`About`, `Services`, `Experience`, `Skills`, `BeforeAfter`, `ProfileBio`) are defined here but rendered on *other* routes — high coupling; still-active dark/light toggle contradicts the "one visual language" rule; no true editorial contrast (everything dark navy).
- **About `/about`** — `CinematicAbout` (scroll-driven 180vh hero, SplitReveal text, StatBlocks with parallax, EXPERTISE pill cloud, MarqueeStrip). Data: `i18n.ts` + local `EXPERTISE` array. Weak: EXPERTISE `service` ids don't all match the unified `services-catalog.ts` ids (e.g. `cost-analysis`, `consulting` — stale).
- **Services `/services`** — filterable catalog (`services-catalog.ts`, 24 services, 6 categories) + sticky embedded `RequestService` card. Data: `services-catalog.ts` (single source of truth). Weak: card visual style is generic gradient cards (marquee-derived), not editorial.
- **Request Service `/request-service`** — WhatsApp deep-link form; reads `?service=` param. Data: `services-catalog.ts`. Weak: seasonal VAT banner logic inline.
- **Experience `/experience`** — `Experience`/`TimelineItem`/`LogoBadge` (from index.tsx). Data: `experience_items` table + hardcoded fallback. Weak: privacy-masked company names UX.
- **Skills `/skills`** — `Skills` + `SkillModal`. Data: `i18n.ts` skill groups (incl. "الأدوات والأنظمة" → `tools: [Oracle, Odoo, Dentech, Al-Shamel, Daftra, Ascon, Zoho Books]` as **text only**), `skill_groups`/`skill_items` tables. Weak: this is where accounting-software names live — as text pills, **no logos** (see §9).
- **Certifications `/certifications`** — `CertsShowcase`. Data: `listPublicCertificationsFn` server fn → `certifications` table + `kb-images` bucket. Recently fixed (public read + bucket public flag).
- **Tools `/tools` + `/tools/$toolId`** — directory + host. Data: `tools-registry.ts` (~54 tools). Strong feature area. Weak: directory is a flat card grid; category browsing basic.
- **Knowledge `/knowledge/*`** — KB index/category/article. Data: `kb_*` tables. Weak: article typography not yet "editorial".
- **Library `/library/*`** — articles/books/courses/templates. Data: `library_items` + `accounting_templates`. Weak: 6 near-identical list routes share one `Library` component.

---

## 4. Shared Components

| Concern | Component(s) |
| --- | --- |
| Navigation | `Navbar` (in `routes/index.tsx`, exported) — desktop + mobile menu, lang toggle, **theme toggle** |
| Header/eyebrow | `SectionTitle` (index.tsx), `SectionHeading` pattern inline |
| Footer | `Footer` (index.tsx, exported) |
| Page shell | `SubPageShell` (`components/SubPageShell.tsx`) — wraps all sub-pages, provides `lang` render-prop, navbar/footer |
| Buttons | shadcn `ui/button.tsx` + many bespoke gradient buttons inline; magnetic/`playHover`/`playClick` (`lib/sound.ts`) |
| Cards | `StatTile`, `StatBlock`, `MetricCard`-like inline, `ServiceCard` (services.tsx), tool cards |
| Modals | `ServiceModal`, `SkillModal`, `EidBanner`, Radix `ui/dialog`, `vaul` drawer |
| Forms | `RequestService`, tax forms (`TaxFormShared`, `VatReturnForm`, `ZakatDeclarationForm`), `CvBuilder`; `react-hook-form` |
| Layouts | `__root.tsx` (`RootShell` html/body, `RootComponent` providers), `_authenticated/route.tsx`, `library.tsx` |
| Shared sections | `ServicesMarquee`, `MarqueeStrip` (About), `Marquee` (generic infinite scroller, `components/home/Marquee.tsx`), `FeaturedTools`, `TopicsAndVideos`, `CertsShowcase` |
| Animation/decor | `FloatingIconsLayer` (parallax accounting icons), `FloatingSocial`, `AIAssistant`, cinematic bg/aurora/grid (CSS) |
| Global | `GlobalControls` (inert theme/lang initializer), `Toaster` (sonner) |
| Icons | `CategoryIcon`, `LogoBadge` (company logos in timeline) |
| shadcn/ui | `src/components/ui/` (~50 primitives) |

---

## 5. Current Design System

Defined entirely in `src/styles.css` (1493 lines, Tailwind v4 `@theme inline` + `:root` custom properties). **No `tailwind.config`** — tokens live in CSS.

**Brand tokens (`:root`):**
```
--radius: 0.75rem
--gold: #d7aa52   --gold-soft: #f3d28a   --gold-deep: #b8862e
--navy: #04101f   --navy-2: #07182c
--bg-surface: #04101f   --bg-elev: #07182c
--fg: #f5f5f7   --fg-soft: rgba(245,245,247,.72)
--line: rgba(215,170,82,.18)   --glass-tint: rgba(255,255,255,.05)
```
**shadcn semantic tokens (oklch):** `--background, --foreground, --card, --popover, --primary (gold oklch .85/.13/80), --secondary, --muted, --accent, --destructive, --border, --input, --ring`, plus `--radius-sm..3xl`.

**Light overrides:** `html.light { --bg-surface:#f7f5f0; --bg-elev:#fff; --fg:#0c1626; ... --background: oklch(.985 .005 90) ... }` — a full light palette exists (drives the toggle).

**Typography:** `font-family: "Cairo", sans-serif !important` globally; **Cairo** (300/400/700/800) + **Inter** (300/400/600/700/800) loaded from Google Fonts via a `media="print"` → `onload media="all"` lazy-swap (`__root.tsx`). Critical inline CSS sets `body{font-family:'Cairo','Inter'}`.

**Effects:** `--radius` 0.75rem base; glassmorphism (`backdrop-filter: blur(18px) saturate(140%)`); gradients gold→deep everywhere; `.gold-text` clip; cinematic bg/`aurora`/`cinematic-grid`/`cursor-glow`.

**Gap vs. new CLAUDE.md direction:** current palette is **navy + gold** (dark fintech), *not* the editorial **canvas/warm-brown/bronze** palette specified for the redesign. Phase 1 must reconcile these (see §16/§17).

---

## 6. Current Theme System

There are **two overlapping theme mechanisms**, and a **theme toggle is still user-facing** (contradicts CLAUDE.md "remove the toggle"):

1. **`GlobalControls`** (`components/GlobalControls.tsx`, mounted in `__root.tsx`): reads `localStorage["global-theme"]` (default `"dark"`) and `["global-lang"]` (default `"ar"`), applies `.dark`/`.light` classes + `lang`/`dir` on `<html>`, then **returns `null`** (no UI). State is hardcoded `"dark"` with no setter — effectively inert except for the localStorage-driven class application on mount.
2. **Navbar local theme** (`routes/index.tsx`): `const [theme, setTheme] = useState<Theme>("dark")` (line 232); `toggleTheme` (line 343) flips dark/light and toggles `<html>` classes (lines 251–252); a **Sun/Moon toggle button is rendered in the Navbar** (lines 611–619, passed as `onTheme`). This is the live, working theme switch.

**Files involved:** `components/GlobalControls.tsx`, `routes/index.tsx` (Navbar + Index theme state), `src/styles.css` (`html.light` block + `.dark` variant `@custom-variant dark (&:is(.dark *))`), `__root.tsx` (`<html lang="ar" dir="rtl">` hardcoded, `theme-color` meta `#04101f`).

**Nothing removed yet** (per instruction). Phase 1 action: remove the Navbar toggle + `html.light` reliance, collapse to one permanent language.

---

## 7. Current Motion System

**Library:** `motion` v12 (`motion/react`) — exclusive. No GSAP / Lenis / Three.js.

- **Page/section entrance:** `initial/whileInView/animate` opacity+y throughout (index, CinematicAbout, services).
- **Text reveal:** `SplitReveal` (CinematicAbout) — word-split (AR) / char-split (EN) staggered rise; `Typewriter` (Hero).
- **Scroll animations:** `useScroll`/`useTransform`/`useSpring` — 180vh pinned About hero, `StatBlock` parallax, scroll-progress bar (index.tsx line 431, `scaleX`).
- **Marquees:** `ServicesMarquee`, `MarqueeStrip` (`animate={{x:["0%","-50%"]}}` infinite linear 60s), generic `Marquee.tsx` (rAF `translate3d` loop, RTL-safe).
- **Hover:** `whileHover` scale/translate on pills/cards; `playHover`/`playClick` sound feedback (`lib/sound.ts`).
- **Parallax:** `FloatingIconsLayer` (mouse + scroll, CSS transforms, checks reduced-motion in JS), Hero bg.
- **CSS animations:** `aurora` (18s), `marquee` (40s), `float-y`, `shine`, `spin`, `blink`, `spin-angle` (`styles.css`).

**Performance risks:** continuous infinite animations (aurora, multiple marquees, floating icons, cursor-glow) run always; heavy `backdrop-filter` blur on several surfaces; **no `@media (prefers-reduced-motion)` block in `styles.css`** — reduced-motion is only honored ad-hoc in some JS components, so CSS keyframe loops keep running for motion-sensitive users. This is both a perf and a11y gap (see §13/§14).

---

## 8. Homepage Architecture

Render order in `Index()` (`routes/index.tsx`, `<main>` lines 440–457):

1. `Hero` — typewriter headline, frame slideshow bg, CTAs.
2. `ServicesMarquee` (lazy) — infinite service pills from `services-catalog.ts`.
3. `MarqueeStrip` (from CinematicAbout) — EXPERTISE pills, wrapped in a bordered navy strip.
4. `Stats` — animated counters.
5. `TopicsAndVideos` (lazy) — knowledge topics + YouTube `VideoBrowser` (thumbnails from `i.ytimg.com`).
6. `FeaturedTools` (lazy) — highlighted calculators.
7. `Testimonials`.
8. `Contact`.
9. `Footer`.
Plus overlays: seasonal VAT banner, `cinematic-bg/aurora/grid/cursor-glow`, scroll-progress bar, `Navbar`, `FloatingSocial`, `AIAssistant`, `SkillModal`/`ServiceModal`/`EidBanner`.

- **Content:** mostly hardcoded in `index.tsx` + `i18n.ts`; certifications from Supabase.
- **Images:** `src/assets/*.webp` (hero-portrait, finance-dashboard, accountant-desk, mascots…); OG image on Google Storage; VAT logo `vat-logo.png.asset.json`.
- **Logos:** company logos only in Experience `LogoBadge` (DB `company_logo_url`). **No accounting-software logos.**
- **CTA:** Hero buttons, VAT seasonal banner → `/request-service`, Contact.
- **Responsive:** Navbar has mobile menu; sections use `sm/lg` grids.
- **UX issues:** the homepage does **not** render several defined sections (About/Services/Experience/Skills/BeforeAfter live on sub-routes but are coded in this file); no "Accounting software" section despite the redesign plan listing one (Phase 3 §8); everything is dark navy (no light/dark editorial rhythm); very long monolith file.

---

## 9. Accounting Software / Partners Section

**Finding: there is no dedicated "accounting software partners" section with logos in this branch.** The user's request to "fix the logos" targets content that does **not yet exist as a logo component** here (it may exist only in the Lovable sandbox / a not-yet-synced commit, or was imagined from the plan). What exists today:

- **Skills page** (`i18n.ts` ~line 481): skill group **"الأدوات والأنظمة / Tools & Systems"** → `tools: ["Oracle","Odoo","Dentech","Al-Shamel","Daftra","Ascon","Zoho Books"]` rendered as **text pills** (via `Skills`/`SkillModal` in `index.tsx`). No images.
- **About MarqueeStrip** (`CinematicAbout.tsx` EXPERTISE): includes `"SAP · Oracle"`, `"Power BI"`, `"Excel المتقدم"` — again **text only**.
- **Assets:** `src/assets/` and `public/` contain **no** software brand logos (only mascots, hero images, `vat-logo.png.asset.json`).
- **No** `<img>` / `.svg` references to Oracle/Odoo/Daftra/Zoho/SAP/etc. anywhere in `src`.

**To build this section later (Phase 3 "Accounting software"), the best files to touch:**
- Create a new component e.g. `src/components/home/SoftwareLogos.tsx` (a `LogoCard`/logo grid, not a marquee — per user request for a "more professional" non-scrolling layout).
- Source logo data from a small typed array (like `services-catalog.ts`) or a new `src/lib/software-catalog.ts`.
- Store logo assets under `src/assets/software/` (SVG/WebP), sized in consistent containers with grayscale→color hover.
- Render it in `routes/index.tsx` `<main>` and/or on `/about` (`CinematicAbout`).
- Reuse the existing `Marquee.tsx` only if a strip is still wanted elsewhere; the user explicitly wants a **static professional grid instead of the scrolling banner**.

**Do not modify now** (audit phase). Logo licensing: use official brand assets or SVG logo sources; normalize per `accounting-editorial-design` skill (consistent containers, scale, contrast, accessible `alt`).

---

## 10. Supabase & Data Architecture

**Clients** (`src/integrations/supabase/`):
- `client.ts` — browser/anon; `import.meta.env.VITE_SUPABASE_URL/_PUBLISHABLE_KEY` with `process.env` SSR fallback.
- `client.server.ts` — **service-role** (`process.env.SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY`), throws if missing; `supabaseAdmin` used by public server functions.
- `client.server-anon.ts` — anon server client.
- Middleware: `admin-middleware.ts`, `auth-middleware.ts`, `auth-attacher.ts` (guards server fns / routes; role via `has_role()`).

**Tables (22)** in `types.ts`: `accounting_templates`, `certifications`, `client_services`, `client_tags`, `clients`, `crm_message_templates`, `exam_questions`, `experience_items`, `kb_articles`, `kb_bookmarks`, `kb_categories`, `kb_generation_jobs`, `kb_internal_links`, `kb_publishing_calendar`, `kb_ratings`, `kb_trusted_sources`, `library_items`, `skill_groups`, `skill_items`, `tax_declarations`, `user_roles`, `whatsapp_log`.
**RPCs:** `get_article_rating_summary`, `has_role`.
**Storage buckets:** `kb-images` (public), `library-pdfs`, `template-files` (public) — documented in `supabase/migrations/`.

**Queries/mutations:** via server functions in `src/lib/**/*.functions.ts` (profile, knowledge, library, exam) and TanStack Query on the client. Public reads prefer service-role server fns filtered to `is_published` (established pattern, e.g. `listPublicCertificationsFn`).

**Env vars:** `SUPABASE_PROJECT_ID/URL/PUBLISHABLE_KEY` (server) + `VITE_` mirrors (client) in `.env`; `SUPABASE_SERVICE_ROLE_KEY` expected server-side (not in committed `.env`). AI Gateway keys via `lib/ai-gateway.server.ts`.

**Redesign impact:** low if untouched. Rule: visual redesign must not alter table shapes, RLS, or server-fn contracts.

---

## 11. Tools Architecture

- **Registry:** `src/lib/tools-registry.ts` — ~54 tool definitions (`id`, `category`, title/desc i18n, meta). Categories & counts: **finance 14, tax 11, analysis 5, excel 5, hr 4, career 3, ifrs 3, legal 1**.
- **Routes:** `/tools` (`tools.index.tsx` directory grid) → `/tools/$toolId` (`tools.$toolId.tsx` dispatches to the component by id).
- **Components:** `src/components/tools/*` (e.g. `Calculators.tsx` hosts many finance calcs, `VatReturnForm`, `ZakatDeclarationForm`, `BankReconciliation`, `BudgetVarianceAnalysis`, `ChartOfAccountsGenerator`, `EInvoicingReadiness`, `InventoryNrvTest`, `InheritanceCalculator`, `CvBuilder`, `TypingTest`, `ExamPrep`, `OfficeAiAssistant`; `official/` = formal ZATCA-style forms).
- **Calculation logic:** pure modules in `src/lib/` (`finance.ts`, `inheritance.ts`, `payroll-ksa.ts`, `estate-assets.ts`, `tax/*`, `tools/financial-statements.ts`, `tools/trial-balance-io.ts`) — **kept separate from UI** (good; must be preserved verbatim).
- **Shared:** `TaxFormShared.tsx`, `StatTile.tsx`, `pdf-export.ts`, `use-share.ts`, `sound.ts`.
- **Data flow:** registry → route → component → `lib` engine → optional PDF/XLSX export (jspdf/xlsx/html2canvas-pro) and optional Supabase save (`tax_declarations`).

**Redesign impact:** Phase 6 is presentation-only. **Never** touch calculation modules or export logic.

---

## 12. SEO

- **Global (`__root.tsx`):** title, description (AR), author, keywords, `robots: index,follow,max-image-preview:large`, `theme-color #04101f`, full **Open Graph** + **Twitter** cards (OG image on Google Storage 1200×630), `og:locale ar_SA` + alternate `en_US`, Bing/Google verification metas.
- **Structured data:** JSON-LD `@graph` — `WebSite` (+ SearchAction), `Person`/`Organization` (Ahmed Elmadani, Senior Accountant, Riyadh, knowsAbout…), `LocalBusiness`.
- **Per-page:** each route sets `head()` meta + canonical (e.g. services canonical `https://ahmedelmadni.com/services`). Knowledge/article routes set article-specific meta.
- **Sitemap (`sitemap[.]xml.ts`):** dynamic — static pages (`/`, `/about`, `/services`, `/request-service`, `/library/*`, `/tools`), all `/tools/:id`, and DB-driven `/knowledge/:cat` + `/knowledge/:cat/:article`. **Gap:** `/experience`, `/skills`, `/certifications` are **not** in the sitemap. `/auth` + `_authenticated/*` correctly excluded (and `noindex`).
- **Robots:** `public/robots.txt`. HTML `lang="ar" dir="rtl"` hardcoded in `RootShell`.
- **Analytics:** GTM/gtag `G-5ZZTMPFCS1` lazy-loaded 4s after `load` (`__root.tsx`).

**Redesign rule:** preserve all `head()` meta, canonicals, JSON-LD, and sitemap logic. Opportunity: add the 3 missing routes to the sitemap.

---

## 13. Performance Risks

- **Heavy libraries** — `jspdf`, `xlsx`, `pdfjs-dist`, `html2canvas-pro`, `mammoth`, `recharts`. Confirmed importers: `CvBuilder.tsx`, `Calculators.tsx`, `lib/tax/excel-export.ts`, `lib/tools/trial-balance-io.ts`, `lib/pdf-export.ts`. **Must stay lazy / route-split** — never import into `index.tsx` or shared shells (existing homepage already lazy-loads `ServicesMarquee`, `TopicsAndVideos`, `FeaturedTools`, `AIAssistant` via `React.lazy` + `Suspense` — keep that discipline).
- **Continuous animation** — aurora (18s), multiple marquees (40–60s), `FloatingIconsLayer`, `cursor-glow`, shine/float loops all run permanently; combined with heavy `backdrop-filter` blur this is GPU-costly on low-end mobile.
- **No CSS `prefers-reduced-motion`** — keyframe loops ignore the OS setting (JS components partially compensate).
- **Hydration** — historic `useShareState` hydration mismatch was fixed; theme/lang class application happens in `useEffect` (`GlobalControls`) which can cause a first-paint flash. Watch `typeof window`/`localStorage` access (guarded in try/catch today).
- **Large monolith** — `index.tsx` 2028 lines, `styles.css` 1493 lines, `i18n.ts` 1083 lines: parse/maintenance cost and risk of shipping unused section code to the homepage bundle.
- **Images** — `.webp` assets are good; ensure explicit width/height to avoid CLS during redesign; OG/social image is remote.

---

## 14. Accessibility

- **Keyboard/focus:** shadcn/Radix primitives are accessible by default; bespoke gradient buttons/links need explicit visible focus states audited during redesign.
- **Semantic HTML:** sections use `<section>` + some `aria-labelledby` (About hero) — inconsistent; many clickable `<div>`/`motion.div` should be `<button>`/`<a>`.
- **ARIA:** partial (`aria-hidden` on decor, `aria-labelledby` on About). Icons decorative — verify `aria-hidden`.
- **Contrast:** gold `#d7aa52` on navy generally OK; `--fg-soft` at 0.72 alpha and small `text-[10px]` labels risk low contrast / legibility.
- **Reduced motion:** **not** globally honored in CSS (see §7/§13); some JS checks exist. Priority fix for Phase 1.
- **RTL a11y:** `dir="rtl"` correct; directional icons (arrows/chevrons) used in Marquee/Navbar — verify mirroring; logical-property migration recommended (`rtl-arabic-ui` skill).

---

## 15. Content Inventory

- **Core copy / i18n:** `src/lib/i18n.ts` (1083 lines) — AR/EN strings for hero, about, skills (incl. Tools & Systems software list), library, etc.
- **Services:** `src/lib/services-catalog.ts` — 24 services, 6 categories (single source of truth for home marquee + `/services` + request form).
- **Projects/Portfolio:** no dedicated projects table/route yet (BeforeAfter component + testimonials only); Phase 7 will need a data source.
- **Certifications:** `certifications` table (+ `kb-images`), shown via `CertsShowcase`.
- **Skills:** `i18n.ts` skill groups + `skill_groups`/`skill_items` tables + `SkillModal`.
- **Articles/Knowledge:** `kb_articles`/`kb_categories` (+ generation pipeline, ratings, internal links).
- **Tools:** `tools-registry.ts` (~54).
- **Accounting software:** text lists only (Oracle, Odoo, Dentech, Al-Shamel, Daftra, Ascon, Zoho Books, SAP, Power BI) — **no logos** (§9).
- **Contact:** WhatsApp deep-link (`request-service`), email `elmadnim@gmail.com`, social mascots; Riyadh, Saudi Arabia.
- **Experience:** `experience_items` table (+ privacy-masked company names, `LogoBadge`).
- **Library:** `library_items` + `accounting_templates` (+ `template-files` bucket).

---

## 16. Redesign Risk Map

| Area | Risk | Impact | Files involved | Recommendation |
| --- | --- | --- | --- | --- |
| Theme toggle removal | Two theme systems; light CSS deeply embedded | High | `GlobalControls.tsx`, `index.tsx` (Navbar+Index), `styles.css` (`html.light`), `__root.tsx` | Remove Navbar toggle first; keep `html.light` block until light *sections* strategy is set; collapse to one permanent language via tokens |
| Palette shift (navy/gold → canvas/brown/bronze) | Whole app themed on navy/gold tokens | High | `styles.css` `:root` tokens, every component using `--gold*`/`--navy*`/`#d7aa52` inline | Introduce editorial tokens as an *additive* layer; migrate section-by-section; keep old tokens aliased during transition |
| `index.tsx` monolith | 2028 lines, exports sections used by other routes | High | `routes/index.tsx` + `about/services/experience/skills/certifications` routes | Extract sections into `components/home/*` before restyling; avoid breaking cross-route imports |
| Motion/perf | Always-on loops, no reduced-motion CSS | Medium | `styles.css` keyframes, `FloatingIconsLayer`, marquees | Add global `prefers-reduced-motion` guard in Phase 1; gate loops |
| Accounting-software logos | Section doesn't exist; logo licensing/sizing | Medium | new `SoftwareLogos.tsx` + assets + `index.tsx` | Build as static professional grid; official/SVG logos; normalized containers |
| Tools/calc logic | Presentation redesign could touch engines | High | `lib/finance.ts`, `lib/tax/*`, `lib/tools/*`, tool components | Presentation-only; never edit calculation/export modules |
| Supabase contracts | Public reads depend on service-role fns + bucket flags | High | `integrations/supabase/*`, `lib/**/*.functions.ts` | No schema/RLS/contract changes during visual work |
| SEO/JSON-LD | Meta/canonical/structured data easy to drop in refactor | High | `__root.tsx`, per-route `head()`, `sitemap[.]xml.ts` | Preserve verbatim; add missing routes to sitemap |
| Stale service ids | `CinematicAbout` EXPERTISE ids ≠ `services-catalog` ids | Low | `CinematicAbout.tsx` | Align ids to catalog during Phase 4 |
| Fonts | Google Fonts print-swap; `!important` Cairo | Low | `__root.tsx`, `styles.css` | Keep Cairo; consider self-host later, not now |

---

## 17. Phase-by-Phase File Map

- **PHASE 1 — Design System:** `src/styles.css` (tokens, add editorial palette + `prefers-reduced-motion`), `components/GlobalControls.tsx` (retire theme), `routes/index.tsx` Navbar (remove toggle), `__root.tsx` (theme-color). New (optional): `src/lib/design-tokens` doc.
- **PHASE 2 — Navigation + Global Layout:** `routes/index.tsx` (`Navbar`, `Footer`, `SectionTitle`), `components/SubPageShell.tsx`, `__root.tsx` (`RootShell`). New: `components/PageTransition`, `components/EditorialSection`, `components/SectionHeading` (extractions).
- **PHASE 3 — Homepage:** `routes/index.tsx` (`Hero`, `Stats`, `Testimonials`, `Contact`, main order), `components/home/*` (`ServicesMarquee`, `FeaturedTools`, `TopicsAndVideos`, `CertsShowcase`, `FloatingIconsLayer`), **new `components/home/SoftwareLogos.tsx`** (+ `src/assets/software/`).
- **PHASE 4 — About / Experience:** `components/about/CinematicAbout.tsx`, `routes/about.tsx`, `routes/experience.tsx`, `Experience`/`TimelineItem`/`LogoBadge` (in `index.tsx`). Fix stale EXPERTISE service ids.
- **PHASE 5 — Services:** `routes/services.tsx`, `components/home/ServicesMarquee.tsx`, `routes/request-service.tsx`, `src/lib/services-catalog.ts` (content only), `ServiceModal`.
- **PHASE 6 — Tools:** `routes/tools.index.tsx`, `routes/tools.$toolId.tsx`, `components/tools/*` (presentation), `lib/tools-registry.ts` (labels only). **Do not** touch `lib/finance.ts`/`tax`/`tools` engines.
- **PHASE 7 — Projects / Portfolio:** likely new route + data source (none today); `BeforeAfter`, `Testimonials`. Decide data model (Open Question).
- **PHASE 8 — Library / Knowledge:** `components/knowledge/*`, `routes/knowledge.*`, `routes/library.*`, `components/Library.tsx`, `lib/knowledge/*`, `lib/library/*` (presentation only).
- **PHASE 9 — Skills / Certifications:** `routes/skills.tsx`, `routes/certifications.tsx`, `Skills`/`SkillModal`, `components/home/CertsShowcase.tsx`, `i18n.ts` skill data. (Software-logos overlap with Phase 3.)
- **PHASE 10 — Contact:** `Contact`/`Footer` (`index.tsx`), `routes/request-service.tsx`, `FloatingSocial`, `AIAssistant`. Preserve WhatsApp + form contracts.
- **PHASE 11 — Final QA:** `eslint .`, `vite build`, all routes, mobile, RTL, reduced motion, SEO/sitemap, images/CLS, console, horizontal overflow. (No test script — rely on tsc/build/lint + manual/Playwright.)

---

## 18. Recommended Implementation Order

Based on the actual architecture (monolithic `index.tsx`, token-in-CSS system, cross-route section imports), the safest practical order is:

1. **Phase 1 (Design System)** — additive editorial tokens + global `prefers-reduced-motion`; retire the theme toggle. Lowest-risk, unblocks everything.
2. **Extract-before-restyle** — split the section components out of `index.tsx` into `components/home/*` (mechanical, no visual change, validated by build) so later phases don't fight a 2028-line file. *(Recommend inserting this as a Phase 2 pre-step.)*
3. **Phase 2 (Navigation + Global Layout)** — shells/primitives (`SubPageShell`, `EditorialSection`, `PageTransition`).
4. **Phase 3 (Homepage)** including the **new Accounting-software logo grid** (addresses the user's standing logo/marquee request) — highest visibility.
5. **Phase 5 (Services)** — already partly unified; quick editorial win.
6. **Phase 4 (About/Experience)**, then **Phase 6 (Tools)**, **Phase 9 (Skills/Certs)**, **Phase 8 (Library/Knowledge)**.
7. **Phase 7 (Projects)** — deferred until a data model is decided.
8. **Phase 10 (Contact)** → **Phase 11 (Final QA)**.

Validate after every phase with `npm run lint` + `vite build` (and Playwright where a flow changed). Commit per phase, focused, never mixing visual + data/SEO changes.

---

## 19. Open Questions (decisions needed before implementation)

1. **Editorial palette vs. current brand:** the redesign spec wants canvas/warm-brown/bronze with alternating light/dark sections, but the entire live site is navy + gold. Full re-palette, or keep navy/gold as the "dark" sections and introduce warm light sections around them? (Big visual-identity call.)
2. **Accounting-software section:** confirm the **exact list** of programs to feature and provide/approve **official logos** (licensing). Where should it live — homepage, `/about`, `/skills`, or all? Static grid confirmed (no marquee) — how many logos?
3. **Language strategy:** CLAUDE.md says "one permanent visual language" and remove the theme toggle — but a **language** (AR/EN) toggle also exists. Keep AR-only, or keep the AR/EN switch while removing only the *color-theme* switch? (These are conflated in `GlobalControls`/Navbar today.)
4. **Projects/Portfolio (Phase 7):** no data source exists. New Supabase table, static content, or reuse `library_items`/case studies?
5. **`index.tsx` extraction:** approve the pre-Phase-2 mechanical split of homepage sections into `components/home/*` (recommended) before restyling?
6. **Sitemap gap:** OK to add `/experience`, `/skills`, `/certifications` to the sitemap during Phase 1/11? (Minor, SEO-positive.)
7. **Light-mode CSS:** once the toggle is removed, may the `html.light` token block be repurposed for intentional "light sections", or removed entirely?

---

_End of PHASE 0 audit. No application files were modified; no commit created._
