-- Run after 20260830120000_ten_accounting_seo_articles.sql in Supabase SQL Editor.
WITH expected(slug) AS (
  VALUES
    ('ifrs-18-financial-statements-practical-guide'),
    ('accounting-profit-vs-taxable-profit'),
    ('cash-flow-statement-preparation-guide'),
    ('saudi-vat-practical-guide'),
    ('real-estate-transaction-tax-exemptions'),
    ('cma-cbq-study-plan'),
    ('break-even-analysis-guide'),
    ('cost-variance-analysis-guide'),
    ('erp-fatoora-reconciliation-guide'),
    ('financial-kpis-management-dashboard')
), checks AS (
  SELECT
    e.slug,
    a.title_ar,
    c.name_ar AS category,
    a.published_at,
    a.status = 'published' AS is_published,
    COALESCE(jsonb_array_length(a.content_ar), 0) >= 4 AS has_sections,
    COALESCE(jsonb_array_length(a.faq), 0) >= 3 AS has_faq,
    COALESCE(array_length(a.keywords, 1), 0) >= 4 AS has_keywords,
    COALESCE(jsonb_array_length(a."references"), 0) >= 1 AS has_references
  FROM expected e
  LEFT JOIN public.kb_articles a ON a.slug = e.slug
  LEFT JOIN public.kb_categories c ON c.id = a.category_id
)
SELECT * FROM checks ORDER BY published_at;

-- Expected: article_count = 10, distinct_primary_keywords = 10, verification_status = PASS.
WITH expected_slugs AS (
  SELECT unnest(ARRAY[
    'ifrs-18-financial-statements-practical-guide', 'accounting-profit-vs-taxable-profit',
    'cash-flow-statement-preparation-guide', 'saudi-vat-practical-guide',
    'real-estate-transaction-tax-exemptions', 'cma-cbq-study-plan',
    'break-even-analysis-guide', 'cost-variance-analysis-guide',
    'erp-fatoora-reconciliation-guide', 'financial-kpis-management-dashboard'
  ]) AS slug
), found AS (
  SELECT a.* FROM public.kb_articles a JOIN expected_slugs e USING (slug)
)
SELECT
  COUNT(*) AS article_count,
  COUNT(DISTINCT keywords[1]) AS distinct_primary_keywords,
  CASE WHEN COUNT(*) = 10
    AND COUNT(DISTINCT keywords[1]) = 10
    AND bool_and(status = 'published' AND category_id IS NOT NULL
      AND jsonb_array_length(content_ar) >= 4
      AND jsonb_array_length(faq) >= 3
      AND jsonb_array_length("references") >= 1)
    THEN 'PASS' ELSE 'FAIL' END AS verification_status
FROM found;
