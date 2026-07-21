# PHASE 1 — Design System Implementation Proposal

> Visual direction: **Executive Financial Luxury** (dark walnut, warm brown, warm white, deep charcoal, matte bronze; editorial layout; premium Arabic type; calm motion).
> Branch: `claude/saudi-accounting-content-rm076q`. Based on `.claude/audit/project-map.md`.
> **This is a proposal only. No application files are modified until approved.**

---

## ⚠️ Blocking decision before implementation — the serif font

**"IBM Plex Serif Arabic" does not exist.** IBM Plex Serif is a **Latin/Cyrillic/Greek-only** family with **no Arabic script**. Within the IBM Plex superfamily, the *only* face that covers Arabic is **IBM Plex Sans Arabic** (which is real, on Google Fonts, and perfect for body/UI).

Because Arabic is the primary language, an Arabic **display serif** must come from another family. Recommended pairings (all on Google Fonts, same loading mechanism already in use — no new npm dependency):

| Option | Serif (display / headings, Arabic) | Character | Recommendation |
| --- | --- | --- | --- |
| **A (recommended)** | **Noto Naskh Arabic** | Refined, executive, contemporary naskh; pairs cleanly with Plex Sans | Best match for "executive + contemporary + calm" |
| B | **Amiri** | Classical, literary, high-contrast naskh | More traditional/editorial, slightly less "corporate" |
| C | **Markazi Text** | Modern low-contrast editorial serif | Softer, magazine-like |

For Latin display (English headings), real **IBM Plex Serif** can be used, so the pairing becomes: *Arabic serif = Noto Naskh Arabic* + *Latin serif = IBM Plex Serif*, both mapped to one `--font-display` token. **Body/UI = IBM Plex Sans Arabic (+ IBM Plex Sans for Latin).**

**→ Decision needed:** approve Option A (Noto Naskh Arabic) or pick B/C. All other Phase-1 work is independent of this choice; only the two `<link>` hrefs and the `--font-display` value change.

---

## 1. Current Architecture Summary

(From audit §1, §5, §6, §7.)

- **Stack:** React 19 + TanStack Start/Router, Vite 7, **Tailwind v4 with tokens in `src/styles.css`** (no `tailwind.config`), shadcn/Radix, **Motion** (`motion/react`), Supabase, Cloudflare Worker via Lovable.
- **Design tokens** live in `src/styles.css` (1493 lines): a `:root` brand layer (`--gold #d7aa52`, `--navy #04101f`, `--fg`, `--bg-surface`…) **plus** shadcn oklch semantic tokens (`--background`, `--foreground`, `--primary`…), **plus** a full `html.light { … }` override block.
- **Theme:** two overlapping mechanisms — (1) `GlobalControls` (inert, applies `.dark`/`.light` + `lang`/`dir` from `localStorage` on mount, returns `null`); (2) a **live Sun/Moon toggle in the Navbar** (`routes/index.tsx` `useState<Theme>`, `toggleTheme`, lines ~232/343/611–619). Tailwind dark variant: `@custom-variant dark (&:is(.dark *))`. Default applied state is `.dark` (navy).
- **Typography:** Cairo + Inter via Google Fonts (print-media lazy swap in `__root.tsx`); global `font-family: "Cairo" !important` in `styles.css`.
- **Motion:** Motion v12 everywhere; many **always-on CSS keyframe loops** (aurora, marquees, float, shine, cursor-glow); **no `@media (prefers-reduced-motion)` block**.
- **Monolith:** `routes/index.tsx` is 2028 lines and exports section components (`Navbar`, `Footer`, `About`, `Services`, `Experience`, `Skills`, `BeforeAfter`, `ProfileBio`, `Contact`, `SectionTitle`, `FloatingSocial`, `LogoBadge`) that are imported by `about.tsx`, `experience.tsx`, `skills.tsx`, `services.tsx`, `certifications.tsx`.

---

## 2. Proposed Design Tokens

All values live in `src/styles.css` as CSS custom properties on `:root` (the permanent baseline). Raw palette → semantic aliases (components consume **semantic** tokens only).

**Raw palette (Executive Financial Luxury):**
```
--efl-canvas:   #F5F2ED;  /* warm canvas */
--efl-white:    #FCFBF9;  /* soft white  */
--efl-walnut:   #4A3023;  /* deep walnut */
--efl-brown:    #76543F;  /* warm brown  */
--efl-charcoal: #1C1B19;  /* charcoal    */
--efl-bronze:   #A88765;  /* matte bronze (accent) */
--efl-muted:    #746E67;  /* muted text  */
--efl-border:   #E3DDD5;  /* border      */
```

**Semantic tokens — permanent baseline (light/canvas context):**
```
--bg:            var(--efl-canvas);
--bg-elevated:   var(--efl-white);
--fg:            var(--efl-charcoal);
--fg-muted:      var(--efl-muted);
--accent:        var(--efl-bronze);
--accent-strong: var(--efl-brown);
--border:        var(--efl-border);
--ring:          var(--efl-bronze);
```

**Semantic tokens — dark-section context (`.section-dark`, see §4):**
```
--bg:            var(--efl-walnut);   /* or --efl-charcoal for statement blocks */
--bg-elevated:   #241811;             /* walnut-tinted elevation */
--fg:            var(--efl-white);
--fg-muted:      rgba(252,251,249,0.72);
--accent:        var(--efl-bronze);
--accent-strong: #C9A986;             /* lifted bronze for contrast on dark */
--border:        rgba(168,135,101,0.28);
```

**shadcn bridge:** repoint the existing oklch tokens (`--background`, `--foreground`, `--card`, `--primary`, `--border`, `--input`, `--ring`, …) to the new semantic tokens so all shadcn/Radix primitives inherit the palette without editing each component. `--primary` → bronze; `--primary-foreground` → soft white / charcoal as appropriate.

**Radius tokens (§6 of task):**
```
--radius: 0.5rem;         /* calmer than current 0.75 — executive, less "rounded SaaS" */
--radius-xs: 0.25rem; --radius-sm: 0.375rem; --radius-md: 0.5rem;
--radius-lg: 0.75rem; --radius-xl: 1rem;    --radius-2xl: 1.5rem;
```

**Spacing / rhythm tokens (§5 of task):**
```
--space-section: clamp(4rem, 8vw, 8rem);   /* vertical section rhythm */
--space-gutter:  clamp(1rem, 4vw, 4rem);   /* page inline padding     */
--measure:       68ch;                      /* comfortable Arabic reading width */
--maxw-content:  80rem;
```

**Shadow tokens (§7 of task) — warm-tinted, never pure black:**
```
--shadow-sm: 0 1px 2px rgba(74,48,35,0.06);
--shadow-md: 0 6px 20px -8px rgba(74,48,35,0.18);
--shadow-lg: 0 24px 60px -24px rgba(28,27,25,0.35);
--shadow-ring: 0 0 0 1px var(--border);
```

---

## 3. Proposed Typography System

**Families (Google Fonts, existing print-swap loader — no npm dependency):**
```
--font-display: "Noto Naskh Arabic", "IBM Plex Serif", Georgia, serif;   /* headings/editorial */
--font-sans:    "IBM Plex Sans Arabic", "IBM Plex Sans", system-ui, sans-serif; /* body/UI */
--font-mono:    "IBM Plex Mono", ui-monospace, monospace;                /* figures/tool tables (optional) */
```
Replaces the global `font-family: "Cairo" !important`. Base `body` → `--font-sans`; headings/`.display` → `--font-display`.

**Type scale (fluid, `clamp`) — tokens:**
```
--fs-display: clamp(2.5rem, 6vw, 4.5rem);   /* hero */
--fs-h1: clamp(2rem, 4.5vw, 3.25rem);
--fs-h2: clamp(1.6rem, 3vw, 2.25rem);
--fs-h3: clamp(1.25rem, 2vw, 1.5rem);
--fs-body: clamp(1rem, 1.05vw, 1.125rem);
--fs-sm: 0.875rem; --fs-xs: 0.75rem;
--lh-tight: 1.2; --lh-heading: 1.3; --lh-body: 1.85; /* Arabic needs generous leading */
--tracking-eyebrow: 0.18em;
```

**Usage map (per task):**
- **Serif `--font-display`:** hero headline, major section headings, editorial statements, large display numbers (stats/metrics).
- **Sans `--font-sans`:** body copy, navigation, buttons, forms, labels, tool interfaces, metadata, tables.

**Notes:** Arabic never uses forced uppercase; `letter-spacing` only on Latin eyebrows/labels (guarded so it doesn't break Arabic joining — per `rtl-arabic-ui` skill). Keep `text-wrap: balance` on headings.

---

## 4. Proposed Theme Architecture — replacing Light/Dark toggle with one permanent system

**Principle:** there is **no global theme and no toggle**. The page is one permanent visual language whose *baseline is the warm canvas (light) context*. "Dark" is not a mode — it's a **section-scoped context** applied to specific bands for editorial rhythm (per CLAUDE.md: LIGHT → DARK STATEMENT → LIGHT → DARK PORTFOLIO → …).

**Mechanism — token scoping, not class toggling:**
1. `:root` defines the **light/canvas** semantic tokens (§2).
2. A single class `.section-dark` (applied on a `<section>` wrapper) **re-declares the same semantic tokens** with the walnut/charcoal values. Every descendant that reads `var(--bg)`, `var(--fg)`, `var(--accent)`, `var(--border)` flips automatically — no per-component `dark:` variants needed.
3. Optionally `.section-statement` (charcoal, max-contrast) for full-bleed statement blocks.

```css
:root { /* light baseline tokens */ }
.section-dark { /* walnut tokens override the same names */ }
.section-statement { /* charcoal tokens */ }
```

**Removing the toggle (task item 1):**
- Delete the Sun/Moon control + `theme`/`onTheme` props + `toggleTheme` + `useState<Theme>` from `Navbar`/`Index` in `routes/index.tsx`.
- In `GlobalControls`, drop the `.dark`/`.light` class logic; **keep** the `lang`/`dir` logic (task item 2). It becomes a language-only initializer.
- Remove the `html.light { … }` override block from `styles.css` (its job is now done by `.section-dark`, inverted).
- **shadcn `.dark` compatibility:** the Tailwind `@custom-variant dark (&:is(.dark *))` and any `dark:` utilities in `src/components/ui/*` are made harmless by having `:root` carry the *final* token values directly; we will **not** rely on a `.dark` root class. Components using literal `dark:` classes will be reviewed in Phase 2 (nav/global) and their owning phases — Phase 1 only guarantees the token layer is correct and self-consistent.

**Language switch (task item 2):** **preserved.** The audit found no technical reason to remove it; it's merely *conflated* with the theme control today. Phase 1 cleanly separates them: `GlobalControls` keeps `lang`/`dir`; the Navbar keeps the AR/EN button; only the color-theme button is removed.

**Migration safety:** Phase 1 repoints the **token values** and establishes the section-scope mechanism, but does **not** recolor every component (many use hardcoded `#04101f`/`text-white`/`#d7aa52`). Those are migrated **per section in later phases**. To avoid a jarring half-migrated look during the interim, Phase 1 keeps the current dark surfaces working by ensuring the dark-context tokens remain sensible; the visible palette shift lands progressively as each section adopts tokens.

---

## 5. Proposed Motion System

**Motion tokens (CSS, task item 8):**
```
--dur-fast: 180ms;      /* micro-interactions */
--dur-base: 320ms;      /* UI transitions     */
--dur-slow: 600ms;      /* content reveal      */
--dur-section: 850ms;   /* large section moves */
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
--ease-emphasis: cubic-bezier(0.16, 1, 0.3, 1);
```

**Shared Motion (framer) presets** in a new `src/lib/motion.ts` — one source of truth, aligned to the `motion-interaction-system` skill:
- `reveal` (opacity 0→1, y 24→0, `--dur-slow`, `--ease-out`).
- `staggerParent` / `staggerChild` (small, capped stagger).
- `sectionTransition` (`--dur-section`).
- `springSoft` ({ stiffness 60, damping 20 }) reused from existing `StatBlock`.
- A `useMotionSafe()` helper wrapping framer's `useReducedMotion()` that returns reduced variants when the user opts out.

This centralizes the patterns currently duplicated across `index.tsx`, `CinematicAbout.tsx`, `services.tsx`. Existing components are **not** rewritten in Phase 1 — the presets are introduced and adopted incrementally.

---

## 6. Reduced Motion Strategy

1. **CSS (global safety net)** — add to `styles.css`:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
  .aurora, .cursor-glow, [data-marquee] { animation: none !important; }
}
```
This immediately neutralizes the always-on keyframe loops (aurora, marquees, float, shine, cursor-glow) for motion-sensitive users — the current #1 a11y/perf gap (audit §7/§13/§14).
2. **JS** — `useMotionSafe()` (§5) so framer scroll/parallax/`SplitReveal` degrade to static in components as they adopt it.
3. Keep opacity-only fades (harmless) but drop transforms/parallax under reduced motion.

---

## 7. Proposed Component Architecture

Introduce (incrementally, mostly in Phase 2 but scaffolded now) reusable primitives that encode the token/motion system, per CLAUDE.md's allowed list — **only where they remove real duplication**:

- `EditorialSection` — wraps a `<section>`, applies `--space-section` rhythm + optional `.section-dark`/`.section-statement` context + max-width/gutter.
- `SectionHeading` — eyebrow + serif headline + optional supporting copy (replaces scattered `SectionTitle`).
- `RevealText` / `RevealSection` — thin wrappers over `src/lib/motion.ts` presets (replace duplicated `SplitReveal`/inline `whileInView`).
- `MagneticButton` — bronze CTA with focus-visible ring + `playHover`/`playClick`.
- Reuse existing: `StatTile`, `LogoCard` (to be created for §9 software logos later), `Marquee`.

**Phase 1 itself creates only `src/lib/motion.ts`.** The React primitives above are *specified here* but built in Phase 2 to keep Phase 1 low-risk (tokens + type + toggle removal + reduced motion).

---

## 8. index.tsx Extraction Strategy (task item 10)

**Do not refactor everything at once.** The 2028-line file exports section components consumed by 5 other routes; a big-bang move risks broad import breakage. Safest **incremental, mechanical** approach — pure moves, zero visual change, `tsc`+`build` after each step:

**Order (leaf-first, lowest coupling → highest):**
1. `SectionTitle`, `LogoBadge`, `FloatingSocial` → `src/components/home/…` (or `src/components/common/…`).
2. `Footer` → `src/components/home/Footer.tsx`.
3. `Navbar` → `src/components/home/Navbar.tsx` (after the theme toggle is removed, so the move carries clean code).
4. `Contact`, `Stats`, `Testimonials`, `Hero` → `src/components/home/*`.
5. Cross-route exports `About`, `Services`, `Experience`, `Skills`, `BeforeAfter`, `ProfileBio` → `src/components/home/*`, updating imports in `about.tsx`, `experience.tsx`, `skills.tsx`, `services.tsx`, `certifications.tsx`.

**Rules:** one component per step; keep the **same export name/signature**; update the generated barrel/imports; run `eslint` + `vite build` before the next step; commit per logical group. **This extraction is scheduled as a pre-Phase-2 step** (audit §18), *not* inside Phase 1 — Phase 1 stays tokens-only except for the small toggle-removal edit. Flagged here so the approach is agreed early.

---

## 9. Files to Modify (Phase 1 implementation)

| File | Change |
| --- | --- |
| `src/styles.css` | Replace `:root` brand tokens with EFL semantic tokens; add radius/spacing/shadow/motion/type tokens; repoint shadcn oklch tokens; remove `html.light { … }`; add `.section-dark`/`.section-statement`; add `@media (prefers-reduced-motion)`; drop global `font-family: Cairo !important`. |
| `src/routes/__root.tsx` | Swap Google Fonts `<link>` (Cairo/Inter → IBM Plex Sans Arabic + chosen Arabic serif); update critical inline CSS `body{font-family:…}`; update `theme-color` meta (`#04101f` → `#4A3023` walnut or `#F5F2ED` canvas — TBD with palette). |
| `src/components/GlobalControls.tsx` | Remove `.dark`/`.light` class logic + `theme` state; **keep** `lang`/`dir` init. |
| `src/routes/index.tsx` | Remove Sun/Moon toggle button, `theme`/`onTheme` props, `toggleTheme`, `useState<Theme>`, and the `el.classList.toggle("light"/"dark")` effect. (Navbar keeps the AR/EN button.) |

No `package.json`, no Supabase, no tool/calculation, no route-contract, no SEO-content changes.

---

## 10. Files to Create

| File | Purpose |
| --- | --- |
| `src/lib/motion.ts` | Shared Motion presets + `useMotionSafe()` reduced-motion helper. |
| `.claude/plans/phase-1-design-system-proposal.md` | *(this file)* |

Deferred to Phase 2 (specified in §7, not created now): `EditorialSection`, `SectionHeading`, `RevealText`/`RevealSection`, `MagneticButton`.

---

## 11. Files to Delete

**None required.** The `html.light` block is removed *within* `styles.css` (not a file delete). `GlobalControls.tsx` is simplified, not deleted (still owns `lang`/`dir`). No file deletions in Phase 1.

---

## 12. Risks

| Risk | Likelihood | Mitigation |
| --- | --- | --- |
| Removing `.dark`/`html.light` breaks shadcn `dark:` utilities in `components/ui/*` | Medium | Make `:root` carry final token values so components look correct without a `.dark` root; audit literal `dark:` usages in Phase 2; Phase 1 keeps dark-context tokens sensible. |
| Font swap causes FOUT/CLS or missing Arabic glyphs | Medium | Keep the existing print-media lazy-swap; set `font-display: swap`; verify Noto Naskh Arabic covers all needed glyphs; keep Cairo as a temporary fallback in the stack during transition. |
| Half-migrated palette looks inconsistent (hardcoded `#04101f`/`text-white` remain) | High (visual) | Expected and acceptable: Phase 1 lays tokens; recoloring is per-section in later phases. Communicate that the full look lands progressively. |
| "IBM Plex Serif Arabic" unavailable | Certain | Resolved via §0 decision (Noto Naskh Arabic). |
| Toggle removal leaves dead imports/props across routes | Low | `tsc --noEmit` + `eslint` catch unused/broken references immediately. |
| Reduced-motion `!important` block over-broadens and kills needed transitions | Low | Scope to animations + known decor selectors; test with OS reduced-motion on. |
| index.tsx extraction breaks cross-route imports | Medium | Deferred to a dedicated pre-Phase-2 step, one component at a time, build-verified. |

---

## 13. Validation Plan

Per `production-refactor` skill + `package.json` scripts (no test runner exists):
1. `npx tsc --noEmit` — types clean (catches toggle-removal fallout).
2. `npm run lint` (`eslint .`) — no errors; `npx prettier --write` on touched files.
3. `npm run build` (`vite build`) — succeeds; inspect bundle for no unexpected growth.
4. **Manual/Playwright** on `/`, `/about`, `/services`, `/tools`, `/knowledge`: fonts render (Arabic serif headings + Plex Sans body), no theme toggle present, AR/EN switch still works, no console errors, no horizontal overflow.
5. **RTL** intact (`dir="rtl"`), reduced-motion honored (toggle OS setting → loops stop), keyboard focus visible.
6. **SEO** unchanged: `head()` meta, canonicals, JSON-LD, sitemap all identical.
7. Confirm Supabase/tools/forms untouched (no diffs under `src/lib/finance*`, `src/lib/tax/*`, `src/integrations/supabase/*`, tool components).

---

## 14. Recommended Implementation Order

1. **Approve §0 font decision** (Noto Naskh Arabic vs. B/C) + palette `theme-color` choice.
2. `src/styles.css`: add EFL tokens + type/spacing/radius/shadow/motion tokens + `.section-dark`/`.section-statement` + `@media (prefers-reduced-motion)`; repoint shadcn tokens; remove `html.light`; drop `!important` Cairo. → validate (tsc/lint/build).
3. `src/routes/__root.tsx`: font links + critical CSS + `theme-color`. → validate + eyeball fonts.
4. Remove theme toggle: `routes/index.tsx` + `GlobalControls.tsx` (keep lang). → `tsc`/`lint`/`build`; confirm AR/EN works, no toggle.
5. Create `src/lib/motion.ts` (presets + `useMotionSafe`). → build.
6. Full validation pass (§13) across key routes; screenshot before/after.
7. **Commit** (only when you approve) e.g. `feat(ui): phase 1 design system — EFL tokens, typography, motion, remove theme toggle`.
8. **Then** (separate, pre-Phase-2) begin the incremental `index.tsx` extraction (§8) — its own commits.

**Phase 1 does NOT restyle sections, build React primitives, or extract the monolith** — those are Phase 2+. Phase 1 delivers the permanent token/type/motion foundation and removes the toggle, nothing more.

---

_Proposal only. No application files modified, no dependencies installed, no `package.json`/Supabase changes, no commit. Awaiting approval._
