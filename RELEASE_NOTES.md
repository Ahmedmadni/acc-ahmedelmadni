# Release Notes

**Branch:** `claude/saudi-accounting-content-rm076q`
**Status:** Uncommitted — pending approval (no commit, push, or PR has been created for this work)
**Scope:** 10 files changed · 200 insertions(+) · 62 deletions(-)

---

## Executive Summary

This release fixes two concrete usability defects that were confirmed through live browser testing — the hero portrait on mobile had headline and CTA text printed directly over the subject's face, and the floating AI-assistant mascot could land on top of body text at many scroll positions, including a sustained overlap on the About page's bio section. Both are now structurally resolved rather than patched: the mobile hero moved the portrait into its own bounded block above the text instead of behind it, and the AI mascot gained real-time collision detection that fades and disables it whenever it would otherwise sit on readable text. Alongside these two fixes, the leather-grain/dark-motif background texture was rebuilt from a straight-line cross-hatch into a genuinely branching, vein-like pattern and extended to more of the site's brown/dark surfaces (Services, Software Ecosystem, Featured Tools, Certifications, Contact, the tools grid, and the request-service form/success cards). No data contracts, routes, authentication, or Supabase behavior were touched. Every change was verified against a 48-screenshot-vs-48-screenshot pixel regression crawl of the entire public site, with zero unexplained regressions found.

---

## Features & Improvements

### Hero
- The mobile/tablet hero no longer overlays the headline, badge, tagline, and CTAs on top of the portrait. The image now renders in its own bounded, in-flow box (`h-[46vh]`, capped `300px`–`480px`) directly above the text column, using the same `hidden lg:block` / `lg:hidden` split already established elsewhere in the codebase for this section's readability scrims.
- **Why:** the previous layout pinned mobile content to the bottom of a full-bleed absolute image (`items-end` + forced `min-h-[92vh]`). For this portrait's aspect ratio, `object-fit: cover` on a narrow mobile container is always height-driven, so vertical crop tuning could never move the face out from under the text — the overlap was structural, not a positioning tweak away.
- **UX improvement:** on a 390px-wide viewport the fix was confirmed to fully remove the overlap (verified live and via the before/after screenshot crawl below). Desktop and tablet-large (`lg+`) keep the original full-bleed cinematic treatment, completely untouched.

### Services
- `ServicesEditorial`'s section background and `services.tsx`'s `ServiceCard` now carry the new branching dark-motif texture (previously flat).

### Software Ecosystem
- The `SoftwareEcosystem` featured card now carries the branching leather-grain texture on its warm-brown surface (previously flat).

### Accounting Tools
- `FeaturedTools`'s section background and its featured tool card, plus `tools.index.tsx`'s `ToolCard` and its empty-search-results card, now carry the branching dark-motif/leather-grain texture.

### Contact
- The Contact section (`id="contact"`) now carries the leather-grain texture on its warm-brown background (previously flat).

### AI Assistant
- Added a `useClearOfText` hook: on scroll and resize, it samples four points across the floating mascot's own footprint via `document.elementsFromPoint` and checks whether any of them resolve to an element carrying real text. If so, the launcher fades to 16% opacity and its `pointer-events` are disabled until it's clear again; the open chat panel is exempted, since nothing is left behind it to protect.
- The mascot image is now responsively sized (`size-16` mobile → `size-20` tablet → `size-28` desktop, i.e. 64px/80px/112px) instead of a fixed 112px at every breakpoint. On a 390px phone, 112px was nearly a third of the screen width, permanently pinned in a corner.
- **Why:** a fixed size/position was proven insufficient on its own — a `position: sticky` bio block on the About page kept real paragraph text under the mascot's exact coordinates across a long scroll range that no static offset could rule out in advance, since that content can change independently of this component.
- **UX improvement:** confirmed via the regression crawl that the mascot now visibly fades and stops intercepting clicks at every previously-colliding position, on the About page and site-wide.

### Motion System
- The mascot's new fade uses a plain CSS `transition-opacity duration-300`, gated with `motion-reduce:transition-none` so it snaps instantly for users with `prefers-reduced-motion` instead of animating. This is the only motion-related addition in this release; no other motion tokens, timings, or patterns in `src/lib/motion.ts` were touched.

### Responsive Design
- Hero: mobile/tablet and desktop now render structurally different DOM (bounded in-flow image vs. absolute full-bleed overlay), not just different CSS on the same markup — verified with no horizontal overflow at 390px, 1024px, or 1440px.
- AI Assistant: three explicit size steps across breakpoints instead of one fixed size, reducing the mascot's footprint precisely where screen real estate is tightest.

### Accessibility
- The AI mascot's `pointer-events: none` while faded means a visually near-invisible button can no longer sit as a live, invisible click target on top of unrelated content.
- The new opacity transition respects `prefers-reduced-motion` (see Motion System above).

### Footer
- No code in the footer changed. It already used `.dark-motif` before this release, so it inherits the new branching texture automatically from the `styles.css` update below — confirmed visually in the regression crawl (flat background in the old screenshots, faint branching lines in the new ones).

---

## Visual Improvements

- **Leather-grain texture rebuilt from scratch:** replaced three overlapping `repeating-linear-gradient` layers (a mechanical cross-hatch) with two inline SVG data-URIs of hand-drawn bezier "trunk" cracks that fork into 2–4 thinner branch veins, at two non-matching tile sizes (226px / 137px) so the pattern never visibly repeats. This applies to both the brown `.leather-grain` variant and the dark `.dark-motif` variant (retuned stroke colors for a near-black ground).
- **Texture coverage expanded** from its prior handful of locations to every principal brown/dark surface on the site: Services, Software Ecosystem, Featured Tools (section + featured card), Certifications cards, Contact section, the Tools grid cards and empty-state card, and the request-service success/form cards.
- **Hero mobile layout:** portrait now fully visible in its own frame, no text overlay.
- **AI mascot:** smaller footprint on mobile/tablet, fades near-invisible instead of blocking content when it collides with text.

---

## Technical Changes

- **New hook:** `useClearOfText` (`src/components/AIAssistant.tsx`) — local, self-contained, rAF-throttled scroll/resize listener using `elementsFromPoint` for real-time collision sampling. No new file, no shared abstraction introduced.
- **CSS stacking fix:** `.leather-grain::before` / `.dark-motif::before` now use `z-index: -1` inside an `isolation: isolate` parent instead of `z-index: 0` paired with a global `.leather-grain > * { position: relative; z-index: 1 }` override. The old rule forced every direct child to `position: relative`, which would have silently broken any child relying on `position: absolute` (e.g. an absolutely-positioned watermark). The new approach paints the texture behind all children — static or already-positioned — without touching the children at all. Both override rules were deleted.
- **Structural JSX split:** the Hero section now renders two mutually-exclusive blocks (`lg:hidden` bounded image + normal-flow text; `hidden lg:block` absolute full-bleed image), reusing a pattern already established elsewhere in this file rather than introducing a new responsive-layout convention.
- **No new dependencies.** `package.json` / lockfile are untouched.
- **No new components, no deleted components.** All changes are inline edits to existing components/sections.

---

## Validation

| Check | Result |
|---|---|
| TypeScript (`npx tsc --noEmit`) | **PASS** — 0 errors |
| ESLint (10 changed files) | **PASS** — 0 errors (1 informational warning: `styles.css` has no ESLint config for CSS, which is expected/pre-existing, not a lint failure) |
| Prettier (`--check`, 10 changed files) | **PASS** — all files match project formatting |
| Production build (`npm run build`) | **PASS** — all three phases succeeded (client 31.98s, SSR 6.54s, Nitro 59.69s), full `.output/server/` artifacts generated (Nitro/Cloudflare target, `wrangler.json`/`nitro.json` emitted) |
| Visual Regression (96 screenshots, 16 routes × 3 viewports) | **PASS** — see report below |
| Reduced Motion | **PASS** — mascot opacity transition and existing animations gated via `motion-reduce:` / `useReducedMotion()`; regression crawl was captured entirely under `reducedMotion: 'reduce'` |
| Mobile QA (390px) | **PASS** — Hero fix and mascot fix both confirmed live at this width, no horizontal overflow |
| Desktop/Tablet QA (1024px / 1440px) | **PASS** — confirmed unchanged (home page height delta ≤1px on both, vs. +198px on mobile where the restructure actually applies) |

*Note: `src/routeTree.gen.ts` (an auto-generated file, not part of this diff) must be regenerated by briefly starting the dev server for `npx tsc --noEmit` to pass cleanly — its committed version is stale relative to the current route files, a pre-existing repo characteristic unrelated to this change set. It was regenerated to run this validation, then reverted so it doesn't appear as a stray diff.*

---

## Visual Regression Report

- **Total screenshots:** 96 (48 baseline vs. 48 current)
- **Routes covered:** `/`, `/about`, `/services`, `/tools`, `/tools/vat`, `/contact`, `/request-service`, `/certifications`, `/experience`, `/skills`, `/knowledge`, `/library`, `/library/articles`, `/library/books`, `/library/courses`, `/library/templates` (16 routes)
- **Viewports:** 390×844 (mobile), 1024×800 (tablet), 1440×900 (desktop)
- **Method:** baseline captured against the last merged commit (`git stash`), current captured against this working tree, both under `reducedMotion: 'reduce'`, then diffed pixel-by-pixel with a per-channel threshold to filter anti-aliasing noise.

**Unexpected regressions found: 0**

**Expected visual differences (all confirmed intentional, all traced to this diff):**
- `/` (home), mobile: +198px height, 15.5% diff — the Hero restructure. Confirmed via cropped before/after comparison: face fully visible and unobstructed in the new version vs. text printed over the face in the old one. Once realigned for the height delta, everything below the Hero on the same page differs by only 0.167% (noise).
- Nearly every route, all viewports: 0.1%–1.8% diff — the AI mascot's new size/fade behavior, since it's a global, fixed-position element. Confirmed via cropped comparison on the About page: old version shows the mascot at full size/opacity directly over the bio paragraph; new version shows it faded to ~16% opacity, letting the text show through.
- Footer and request-service cards: the new branching texture is visible in side-by-side crops where the old background was flat.

**Non-issue, unrelated to this diff:**
- `/library/articles`, tablet: 21.7% diff. Root-caused to a network-timing race between the two separate crawl runs — the baseline run's screenshot was captured while the articles list was still mid-load (empty skeleton cards), while the current run's screenshot caught the resolved "قيد الإعداد" (coming soon) empty state. `library.articles.tsx` is not part of this diff; this is pre-existing async-loading behavior, not a code regression.

**Exact 0.000% diff (fully unaffected, confirmed):** `/knowledge`, `/library`, `/library/books`, `/library/courses`, `/library/templates`, `/tools`, `/tools/vat` — all viewports.

**Final conclusion:** the diffs present are fully accounted for by this release's own changes (Hero restructure, AI mascot behavior, texture upgrade) or by an unrelated, pre-existing data-loading timing artifact. No accidental visual regression was found anywhere in the crawl.

---

## Files Changed

**Hero / Homepage sections**
- `src/routes/index.tsx` (+59/-14 lines) — Hero structural split; Contact section texture class

**AI Assistant**
- `src/components/AIAssistant.tsx` (+102/-4 lines) — `useClearOfText` hook, responsive sizing, fade-on-collision behavior

**Texture system**
- `src/styles.css` (+29/-34 lines) — `.leather-grain` / `.dark-motif` rebuilt as branching SVG patterns; stacking fix

**Texture applied to existing surfaces**
- `src/components/home/CertsShowcase.tsx` (+1/-1 line)
- `src/components/home/FeaturedTools.tsx` (+2/-2 lines)
- `src/components/home/ServicesEditorial.tsx` (+1/-1 line)
- `src/components/home/SoftwareEcosystem.tsx` (+1/-1 line)
- `src/routes/request-service.tsx` (+2/-2 lines)
- `src/routes/services.tsx` (+1/-1 line)
- `src/routes/tools.index.tsx` (+2/-2 lines)

*(`src/routeTree.gen.ts` is not included — it is an auto-generated file, not part of this change set, and the working tree is clean of any diff in it.)*

---

## Breaking Changes

**None.** No routes, data contracts, Supabase queries/schema, authentication, or public APIs were modified. All changes are presentational (JSX structure and CSS classes) confined to the components and files listed above.

---

## Migration Notes

**None required.** No new dependencies were added (`package.json` and lockfile are unchanged), no environment variables were introduced, and no manual steps are needed after deployment.

---

## Known Limitations

- `useClearOfText` samples four points on the mascot's footprint on scroll/resize events (rAF-throttled), not continuously on every frame. During a very fast scroll fling, a single frame could theoretically render before the next sample corrects the opacity — this is an inherent tradeoff of event-driven sampling over a per-frame check, not a defect, but worth naming explicitly.
- The `/library/articles` page's "coming soon" empty state can flash an empty skeleton before the Supabase query resolves, as observed during this testing (see Visual Regression Report). This is pre-existing behavior, unrelated to this release, and was not changed here.
- Visual regression testing in this release was performed with a one-off script, not a persisted, CI-integrated visual-regression harness — there is no automated gate preventing a future change from reintroducing a similar overlap; catching that would currently require re-running this same manual process.

---

## Final Release Assessment

| Category | Score | Rationale |
|---|---|---|
| UI | 9/10 | Two real, previously-live visual defects removed at the structural level (not patched over), plus a genuine texture upgrade — all confirmed pixel-for-pixel. Not a 10 because the scope is three targeted areas, not a comprehensive visual pass. |
| UX | 9/10 | Directly removes two concrete instances of content being obscured (face-under-text, mascot-over-text) — a real usability problem, not a cosmetic one. No regressions introduced anywhere else on the site. |
| Motion | 7/10 | The one motion addition (fade transition) is small, correct, and reduced-motion-aware, but this release does no broader motion-system work, so it can't be scored on breadth. |
| Accessibility | 8/10 | Reduced motion is respected and a previously-invisible-but-clickable trap (the faded mascot) is now inert via `pointer-events: none`. Not a 9–10 because no formal contrast/ARIA/keyboard-navigation audit was performed as part of this specific release. |
| Performance | 8/10 | No new dependencies, no new network requests — the texture is an inline SVG data-URI, not an image asset. Not scored higher because no formal Lighthouse/Web Vitals run was performed against this specific diff. |
| Maintainability | 8/10 | Fixes are root-caused (structural reorder, not CSS-tweak band-aids); the old fragile `> * { z-index: 1 }` override was removed in favor of a more robust `isolation: isolate` approach. The one new hook is small and self-contained with no new shared abstraction. |

---

*This document was generated from the actual `git diff` of the current working tree and a live 96-screenshot visual regression crawl. No commit, push, or pull request has been created. Awaiting explicit approval before any git action is taken.*
