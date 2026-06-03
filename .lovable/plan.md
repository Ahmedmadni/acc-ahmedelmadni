## Plan

### 1. Footer login link (`src/routes/index.tsx`)
In the Footer's "Quick Links" column (around line 1080), append a new `<li>` containing a RouterLink to `/auth` labeled "تسجيل الدخول / Login" — placed after the existing in-page anchor links.

### 2. "Articles" button next to "Courses" (`src/routes/knowledge.index.tsx`)
In the hero section (right after the existing Courses button added previously), add a sibling button:
- "المقالات" → anchors to the existing `#all-articles` section on the same page (we'll add an `id="all-articles"` to the existing "أحدث المقالات" section).
- Same gold pill style as Courses, paired in a `flex gap` wrapper so they sit side by side.

### 3. Category page → show Courses first, then Articles (`src/routes/knowledge.$categorySlug.index.tsx`)

Add a category-to-library mapping at the top of the file:

```ts
const KB_TO_LIB_CAT: Record<string, string[]> = {
  "financial-accounting": ["fundamentals", "reporting"],
  "cost-accounting": ["reporting"],
  "tax-accounting": ["tax"],
  "zakat-tax-ksa": ["tax"],
  "vat": ["tax"],
  "financial-statements": ["reporting"],
  "audit": ["audit"],
  "excel": ["software"],
  "erp": ["software"],
  "entrepreneurship": [],
};
```

Then restructure the page sections in this order:
1. Breadcrumb + category title (existing).
2. **New "كورسات مرتبطة" section** — import `t.library.courses` from `@/lib/i18n` and filter by `KB_TO_LIB_CAT[categorySlug]`. Render up to 4 compact course cards (title, level, hours, free/paid badge). Each card links to `/library` (the full library page). If the mapping is empty, hide the section.
3. **Existing articles grid** with heading changed to "المقالات".

### Files touched
- `src/routes/index.tsx` — footer Quick Links: add login link.
- `src/routes/knowledge.index.tsx` — hero: add Articles button next to Courses; add `id="all-articles"` to the latest-articles section.
- `src/routes/knowledge.$categorySlug.index.tsx` — add mapping + Courses-related section above articles.

### Out of scope
- No DB schema changes; courses stay in `src/lib/i18n.ts`.
- No new routes; `/auth` and `/library` already exist.
- No changes to the standalone `/library` page.
