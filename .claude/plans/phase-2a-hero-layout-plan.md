# PHASE 2A — Hero + Global Layout Foundation (Plan)

> Executive Financial Luxury. Branch `claude/saudi-accounting-content-rm076q`.
> Builds on Phase 1 tokens (`--surface/--ink/--brand/--font-display/--font-sans`, `.section-dark`, `src/lib/motion.ts`).
> **Plan only — no app files modified, no commit. Awaiting review.**

---

## 🚧 Blocker — the executive portrait asset is NOT in the environment

The referenced file **`/mnt/data/a_professional_corporate_portrait_scene_in_an_upsc.png` does not exist** — there is no `/mnt/data` directory in this container at all. Per instruction, I did **not** invent a path or substitute another image.

**Required action before the portrait half of the Hero can be implemented:** the image must be placed into the repo, e.g. `src/assets/hero-executive-portrait.png` (or a web-optimized `.webp`). Options to get it there:
1. Copy/upload the PNG into `src/assets/` in the repo, **or**
2. Provide it via a path I can read so I can copy it in, **or**
3. Confirm you want it generated (there is an image-generation MCP available) — but note that generating from a *text description* cannot preserve the **exact facial identity** of your real portrait, which your brief explicitly requires ("Do not alter the identity"). So generation is only acceptable for a non-identity background/atmosphere plate, **not** for the face. The real portrait must come from you.

**Existing assets** (for reference, NOT to be silently substituted): `src/assets/hero-portrait.webp` (90 KB, currently imported but unused), `hero-bg-cinematic.jpg` (current Hero background), `profile.webp`.

**Consequence for sequencing:** the Hero's *portrait column*, the split composition, and portrait responsive behavior are **blocked** on this asset. Everything else in Phase 2A — the **headline reveal**, **supporting copy**, **CTA**, **Navbar refresh**, **reduced-motion**, and the **responsive text scaffold** — can be implemented independently, with the portrait slotted into a reserved column once the asset lands. The plan below is written so the portrait is a single, clean drop-in.

---

## 1. Current Hero architecture

`Hero({ lang })` in `src/routes/index.tsx` (≈ lines 727–824):
- **Layout:** single column, **portrait deliberately hidden** (comment: "portrait hidden"). Not a split.
- **Background:** `HeroFrameSlideshow` → full-bleed `heroCinematic` (`hero-bg-cinematic.jpg`) + layered navy/gold gradients, a multiply overlay to hide the global `.cinematic-grid`, and two ambient gold/blue radial glows. Parallax on scroll via `useTransform(scrollY,[0,600],[0,120])`.
- **Headline:** `<h1>` = `t.hero.name` ("أحمد المدني") + gold "محاسب أول / Senior Accountant". **Not** the new editorial statement.
- **Typewriter:** `Typewriter` component (lines 674–698) — a **cheap caret typewriter** (`.caret gold-text`, char-by-char, delete/retype loop). This is exactly what the brief says to replace.
- **Supporting copy:** `t.hero.intro` paragraph.
- **CTAs:** (1) `<a href="#contact">` label `t.hero.cta1` = **"تواصل معي" / "Get in touch"** → scrolls to Contact section; (2) `RouterLink to="/request-service"` "اطلب خدمة".
- **Location line:** `t.hero.location`.
- **i18n keys present** (`src/lib/i18n.ts` line 15+): `hero.badge, name, typewriter, intro, cta1, cta2, location`.
- **Colors:** hardcoded navy/gold (`#04101f`, `#d7aa52`, `var(--fg)`, `var(--fg-soft)`) — legacy tokens, not yet EFL.

## 2. Current Navbar architecture

`Navbar({ lang, onToggle })` (lines 467–671) — post-Phase-1 (theme toggle already removed):
- Fixed, `z-50`, glass: `backdrop-blur-xl`, `background: color-mix(in oklab,#04101f 80%,transparent)`, bottom border gold.
- **Brand:** "أحمد المدني" + eyebrow "Senior Accountant".
- **Desktop links** (`links[]`): Home, About, Services, Tools (`/tools`), Library (`/library/articles`), Contact (`/#contact`, hash).
- **Right cluster:** back-to-home (non-home routes), admin "Dashboard" + "CRM" (admin only), **language toggle** (`onToggle`, AR/EN), "Request Service" CTA, mobile hamburger.
- **Mobile menu:** `AnimatePresence` height/opacity expand; same links + admin + Request Service.
- **Entrance:** `motion.nav` y:-80→0, delay 0.6.
- Everything hardcoded navy/gold.

## 3. Exact files to modify

| File | Change (Phase 2A) |
| --- | --- |
| `src/routes/index.tsx` | Rewrite `Hero` to an editorial split (portrait column + text column); replace `Typewriter` usage with a new `RevealHeadline`; new headline/supporting copy from i18n; CTA "تواصل معي" → `/#contact` (reuse) + keep secondary; import the portrait asset. Refresh `Navbar` visual treatment (EFL surface/brand tokens, refined type, keep all links/lang/mobile/admin). Add portrait import. |
| `src/lib/i18n.ts` | Add `hero.headline` (3-line editorial statement) and `hero.tagline` (supporting copy) AR/EN. Keep existing keys (name/badge/cta1/location) — some are reused elsewhere. |
| `src/styles.css` | Minimal additions if needed: a `.hero-*` composition helper and/or headline reveal keyframe fallback (only if not fully handled by Motion). No token changes. |

**Not modifying:** any route contract, Supabase, tools/calc, SEO `head()`/JSON-LD, Footer, Contact logic. AR/EN + mobile nav preserved.

## 4. Exact files to create

| File | Purpose |
| --- | --- |
| `src/components/home/RevealHeadline.tsx` | Phrase/line-level progressive reveal for the Arabic display headline, using `src/lib/motion.ts` + `useMotionSafe()`; respects `prefers-reduced-motion`. Replaces the cheap `Typewriter` in the Hero. Reusable for other major headings later. |
| *(asset)* `src/assets/hero-executive-portrait.(png\|webp)` | The executive portrait — **supplied by you** (see Blocker). Imported by `Hero`. |

*(Optionally, if the Hero grows large, extract `Hero` into `src/components/home/Hero.tsx` — only if it genuinely helps; the brief says extract only if necessary. Default: keep `Hero` in `index.tsx` to avoid touching the monolith prematurely.)*

## 5. Image asset strategy

- **Source of truth:** one clean portrait, **no baked text, no baked CTA** (brief requirement) → stays reusable.
- **Placement:** `src/assets/hero-executive-portrait.webp` (convert PNG→WebP for weight; keep a PNG master if transparency/quality needs it). Imported the same way as existing assets: `import heroPortrait from "@/assets/hero-executive-portrait.webp"` (Vite fingerprints it).
- **Rendering:** `<img>` with explicit `width`/`height` (prevent CLS), `loading="eager"` + `fetchPriority="high"` (it's the LCP element), `decoding="async"`, `alt=""` if purely decorative or a proper Arabic `alt` if it represents Ahmed. Object-fit cover within a fixed-ratio frame; warm walnut/charcoal gradient scrim behind/over edges for the "executive office atmosphere" and text legibility — **scrim is CSS, not baked into the image**.
- **Identity:** the file you provide is used as-is; no stylization/face alteration. If only a background plate is ever generated, it must exclude the face.
- **Fallback while blocked:** the portrait column renders a tasteful walnut placeholder block (token `--surface-raised` + subtle `--brand` frame) so layout/animation can be built and reviewed; swapped for the real `<img>` when the asset lands. (This placeholder is clearly a dev stand-in, not a substituted portrait.)

## 6. Desktop composition (≥1024px)

- **Editorial split:** two-column grid, e.g. `grid lg:grid-cols-[1.05fr_0.95fr]` with generous gap; in RTL the **text leads on the right**, portrait on the left (or vice-versa — art-directed; portrait toward the outer edge).
- **Portrait:** large, framed, face clearly visible (not shrunk); a `--surface-raised`/walnut card with a thin `--brand` hairline and warm `--shadow-lg`; subtle controlled warm-light gradient. Optional very slight scroll parallax (restrained, ≤ ~40px, GPU transform only).
- **Text column:** eyebrow (badge) → **serif display headline** (`--font-display`, `--fs-display`) 3 lines → supporting sans copy (`--font-sans`, `--measure` width) → CTA row → location line. Generous whitespace; strong hierarchy.
- **Backdrop:** keep a restrained EFL atmosphere (walnut/charcoal), far calmer than the current gold-glow stack — reduce ambient glows.

## 7. Tablet composition (640–1023px)

- Maintain portrait focus but **reduce its column share**; either a tighter 2-col or portrait above text depending on breakpoint. Face stays clearly visible.
- Headline scales down via the existing `clamp()` display token (no separate sizes needed).
- Reduce ambient decor; keep CTA visible above the fold.

## 8. Mobile composition (<640px)

- **Recompose vertically — not a shrunk desktop.** Order: eyebrow → headline → portrait (contained, face prominent, e.g. rounded framed block ~`4/5`–`1/1` ratio) → supporting copy → CTA (full-width primary "تواصل معي") → location. *(Portrait may sit after the headline so the message leads; final order tuned in build.)*
- **Cap hero height** (avoid `min-h-screen` dead space on tall phones) — content-driven height with comfortable padding.
- Headline remains readable (min effective size from `clamp` floor). Touch-friendly CTA (≥44px). No hover-only affordances.

## 9. Animation sequence

Using `src/lib/motion.ts` (`reveal`, `staggerParent/Child`, `springSoft`, `EASE.out`) — **no new libraries**:
1. **Nav:** existing entrance kept (refined timing).
2. **Eyebrow/badge:** `reveal` (opacity+y), ~0.05s in.
3. **Headline (`RevealHeadline`):** **phrase/line-level** stagger — each of the 3 lines (and optionally each word) rises with `opacity 0→1`, `y 100%→0`, `EASE.out`, small `staggerChildren` (~0.08–0.12s), so it reads as calligraphy being *revealed*, not typed. **No caret, no char-typewriter, no bounce.** Overflow-clip masks give the "written gradually" feel.
4. **Supporting copy:** `reveal`, slightly after the headline completes.
5. **CTA row:** `staggerChild` for the two buttons; `springSoft` on hover (subtle scale/translate), magnetic-lite optional.
6. **Portrait:** gentle `opacity 0→1` + small scale (1.02→1) settle on load; optional restrained parallax on scroll (disabled under reduced motion). No looping animation, no blur-in filter.
- Total intro under ~1.2s; content never blocked waiting on animation.

## 10. Reduced-motion behavior

- `RevealHeadline` uses `useMotionSafe()` → when `prefers-reduced-motion: reduce`: **render the full headline immediately**, no stagger, no transforms; keep at most a ~150–200ms opacity fade.
- Portrait: no parallax, no scale; straight opacity or static.
- CTA/eyebrow: static (or minimal opacity).
- Backed by the Phase-1 global CSS `@media (prefers-reduced-motion)` safety net (freezes loops) — verified present in `styles.css`.

## 11. Performance considerations

- Portrait is the **LCP** element → `fetchPriority="high"`, eager, explicit dimensions, WebP, reasonably sized (~≤150 KB target).
- Animate **only `transform`/`opacity`**; no animated `filter`/`blur`, no layout-triggering properties.
- Drop/reduce the current always-on ambient gold glows in the Hero (cheaper paint; also more "executive/calm").
- No new dependencies; `motion/react` already bundled. `RevealHeadline` is light and client-only where needed but SSR-safe (no `typeof window` in render).
- Keep `overflow-x: hidden` guarantee; ensure the split grid never overflows (`min-w-0` on columns).

## 12. Validation plan

Per `package.json` (no test runner):
1. `npx tsc --noEmit` — clean.
2. `npx prettier --write` + `npx eslint` on touched files — clean.
3. `npm run build` (`vite build`) — succeeds.
4. **Runtime:** live browser check is currently **blocked in this container** (Lovable Vite plugin forces IPv6 `:::8080`; no IPv6 here → `EAFNOSUPPORT`). Where possible I'll verify on Lovable's preview after sync; otherwise static verification + build. If a headless run becomes possible, check: headline reveal (and reduced-motion instant render), AR/EN switch still works, portrait renders/no CLS, no console errors, **no horizontal overflow** at 375/768/1440, CTA scrolls to `#contact`, mobile menu intact.
5. Confirm `git diff` touches only the Phase-2A files; SEO/Supabase/tools untouched.

## Open questions

1. **Portrait asset** — how will you deliver it (upload to `src/assets/`, give a readable path, or approve a background-only generated plate with your real face composited later)?
2. **Headline source** — add new `hero.headline`/`hero.tagline` i18n keys (recommended) vs. inline? English equivalent for the 3-line statement — provide, or I draft one?
3. **CTA** — confirm primary = "تواصل معي" → `/#contact` (existing), and keep the secondary "اطلب خدمة" → `/request-service`, or primary-only for a calmer hero?
4. **Extraction** — keep `Hero`/`Navbar` inside `index.tsx` for now (recommended), or extract `Hero` to `src/components/home/Hero.tsx` as part of 2A?

---

_Plan only. No application files modified, no dependencies installed, no commit. Implementation is blocked on the portrait asset for the portrait column; the rest can proceed on approval._
