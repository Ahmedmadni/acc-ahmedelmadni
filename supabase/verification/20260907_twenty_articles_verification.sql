-- Run after 20260907080000_twenty_accounting_articles.sql in Supabase SQL Editor.
WITH expected(slug) AS (
  VALUES
    ('ifrs-9-expected-credit-loss-guide'),
    ('ifrs-10-consolidated-financial-statements-guide'),
    ('ias-24-related-party-disclosures-guide'),
    ('ifrs-15-revenue-recognition-five-step-model'),
    ('zakat-mixed-ownership-companies-saudi'),
    ('withholding-tax-saudi-arabia-guide'),
    ('zakat-tax-return-amendment-procedure'),
    ('transfer-pricing-documentation-saudi-arabia'),
    ('vat-ecommerce-digital-services-saudi'),
    ('vat-grouping-corporate-groups-guide'),
    ('activity-based-costing-implementation-guide'),
    ('job-order-vs-process-costing-guide'),
    ('financial-ratio-analysis-creditworthiness'),
    ('dupont-analysis-profitability-guide'),
    ('working-capital-cash-conversion-cycle'),
    ('coso-internal-control-framework-guide'),
    ('year-end-external-audit-closing-checklist'),
    ('choosing-erp-system-smes-saudi-arabia'),
    ('automating-bank-reconciliation-accounting-systems'),
    ('socpa-fellowship-saudi-cpa-exam-guide')
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

-- Expected: article_count = 20, distinct_slugs = 20, verification_status = PASS.
WITH expected_slugs AS (
  SELECT unnest(ARRAY[
    'ifrs-9-expected-credit-loss-guide',
    'ifrs-10-consolidated-financial-statements-guide',
    'ias-24-related-party-disclosures-guide',
    'ifrs-15-revenue-recognition-five-step-model',
    'zakat-mixed-ownership-companies-saudi',
    'withholding-tax-saudi-arabia-guide',
    'zakat-tax-return-amendment-procedure',
    'transfer-pricing-documentation-saudi-arabia',
    'vat-ecommerce-digital-services-saudi',
    'vat-grouping-corporate-groups-guide',
    'activity-based-costing-implementation-guide',
    'job-order-vs-process-costing-guide',
    'financial-ratio-analysis-creditworthiness',
    'dupont-analysis-profitability-guide',
    'working-capital-cash-conversion-cycle',
    'coso-internal-control-framework-guide',
    'year-end-external-audit-closing-checklist',
    'choosing-erp-system-smes-saudi-arabia',
    'automating-bank-reconciliation-accounting-systems',
    'socpa-fellowship-saudi-cpa-exam-guide'
  ]) AS slug
), found AS (
  SELECT a.* FROM public.kb_articles a JOIN expected_slugs e USING (slug)
)
SELECT
  COUNT(*) AS article_count,
  COUNT(DISTINCT slug) AS distinct_slugs,
  CASE WHEN COUNT(*) = 20
    AND COUNT(DISTINCT slug) = 20
    AND bool_and(status = 'published' AND category_id IS NOT NULL
      AND jsonb_array_length(content_ar) >= 4
      AND jsonb_array_length(faq) >= 3
      AND jsonb_array_length("references") >= 1)
    THEN 'PASS' ELSE 'FAIL' END AS verification_status
FROM found;
