-- Run this separately in the Supabase SQL Editor after the migration.
-- A successful result returns exactly three rows and all check columns are true.

WITH expected(slug) AS (
  VALUES
    ('ifrs-18-alternative-taxes-eba-august-2026'),
    ('cma-part-2-cbq-financial-decisions-risk-2026'),
    ('zatca-rett-developer-refunds-vat-august-2026')
)
SELECT
  e.slug,
  a.title_ar,
  c.name_ar AS category,
  a.status,
  a.published_at,
  jsonb_array_length(a.content_ar) > 0 AS has_content,
  jsonb_array_length(a.faq) > 0 AS has_faq,
  jsonb_array_length(a."references") > 0 AS has_references,
  a.category_id IS NOT NULL AS has_category,
  a.slug IS NOT NULL AS article_exists
FROM expected e
LEFT JOIN public.kb_articles a ON a.slug = e.slug
LEFT JOIN public.kb_categories c ON c.id = a.category_id
ORDER BY e.slug;

-- Compact pass/fail summary. Expected: article_count = 3 and verification_status = PASS.
SELECT
  COUNT(*) AS article_count,
  CASE
    WHEN COUNT(*) = 3
      AND COUNT(*) FILTER (
        WHERE status = 'published'
          AND category_id IS NOT NULL
          AND jsonb_array_length(content_ar) > 0
          AND jsonb_array_length(faq) > 0
          AND jsonb_array_length("references") > 0
      ) = 3
    THEN 'PASS'
    ELSE 'FAIL'
  END AS verification_status
FROM public.kb_articles
WHERE slug IN (
  'ifrs-18-alternative-taxes-eba-august-2026',
  'cma-part-2-cbq-financial-decisions-risk-2026',
  'zatca-rett-developer-refunds-vat-august-2026'
);
