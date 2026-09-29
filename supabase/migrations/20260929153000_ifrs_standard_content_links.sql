BEGIN;

-- Canonical standards registry. The UI currently has a static mirror for fast
-- rendering; this table becomes the relational source of truth for imported
-- articles/questions and can later replace that mirror without changing URLs.
CREATE TABLE IF NOT EXISTS public.ifrs_standards (
  code TEXT PRIMARY KEY,
  family TEXT NOT NULL CHECK (family IN ('IFRS', 'IAS')),
  standard_number INTEGER NOT NULL CHECK (standard_number > 0),
  title_ar TEXT NOT NULL,
  title_en TEXT NOT NULL,
  official_url TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  effective_from DATE,
  supersedes_code TEXT REFERENCES public.ifrs_standards(code) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (family, standard_number)
);

GRANT SELECT ON public.ifrs_standards TO anon, authenticated;
GRANT ALL ON public.ifrs_standards TO service_role;

ALTER TABLE public.ifrs_standards ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "IFRS standards are publicly readable" ON public.ifrs_standards;
CREATE POLICY "IFRS standards are publicly readable"
  ON public.ifrs_standards FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Admins manage IFRS standards" ON public.ifrs_standards;
CREATE POLICY "Admins manage IFRS standards"
  ON public.ifrs_standards FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::public.app_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));

INSERT INTO public.ifrs_standards
  (code, family, standard_number, title_ar, title_en, official_url, effective_from)
VALUES
  ('IFRS 1','IFRS',1,'التطبيق لأول مرة للمعايير الدولية للتقرير المالي','First-time Adoption of International Financial Reporting Standards','https://www.ifrs.org/issued-standards/list-of-standards/ifrs-1-first-time-adoption-of-ifrs/',NULL),
  ('IFRS 2','IFRS',2,'الدفع على أساس الأسهم','Share-based Payment',NULL,NULL),
  ('IFRS 3','IFRS',3,'تجميع الأعمال','Business Combinations',NULL,NULL),
  ('IFRS 5','IFRS',5,'الأصول غير المتداولة المحتفظ بها للبيع والعمليات غير المستمرة','Non-current Assets Held for Sale and Discontinued Operations',NULL,NULL),
  ('IFRS 6','IFRS',6,'استكشاف وتقييم الموارد المعدنية','Exploration for and Evaluation of Mineral Resources',NULL,NULL),
  ('IFRS 7','IFRS',7,'الأدوات المالية: الإفصاحات','Financial Instruments: Disclosures',NULL,NULL),
  ('IFRS 8','IFRS',8,'القطاعات التشغيلية','Operating Segments',NULL,NULL),
  ('IFRS 9','IFRS',9,'الأدوات المالية','Financial Instruments','https://www.ifrs.org/issued-standards/list-of-standards/ifrs-9-financial-instruments/',NULL),
  ('IFRS 10','IFRS',10,'القوائم المالية الموحدة','Consolidated Financial Statements','https://www.ifrs.org/issued-standards/list-of-standards/ifrs-10-consolidated-financial-statements/',NULL),
  ('IFRS 11','IFRS',11,'الترتيبات المشتركة','Joint Arrangements',NULL,NULL),
  ('IFRS 12','IFRS',12,'الإفصاح عن الحصص في المنشآت الأخرى','Disclosure of Interests in Other Entities',NULL,NULL),
  ('IFRS 13','IFRS',13,'قياس القيمة العادلة','Fair Value Measurement',NULL,NULL),
  ('IFRS 14','IFRS',14,'حسابات التأجيل التنظيمية','Regulatory Deferral Accounts',NULL,NULL),
  ('IFRS 15','IFRS',15,'الإيراد من العقود مع العملاء','Revenue from Contracts with Customers','https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/',NULL),
  ('IFRS 16','IFRS',16,'عقود الإيجار','Leases','https://www.ifrs.org/issued-standards/list-of-standards/ifrs-16-leases/',NULL),
  ('IFRS 17','IFRS',17,'عقود التأمين','Insurance Contracts',NULL,NULL),
  ('IFRS 18','IFRS',18,'العرض والإفصاح في القوائم المالية','Presentation and Disclosure in Financial Statements','https://www.ifrs.org/issued-standards/list-of-standards/ifrs-18-presentation-and-disclosure-in-financial-statements/','2027-01-01'),
  ('IFRS 19','IFRS',19,'الشركات التابعة دون مساءلة عامة: الإفصاحات','Subsidiaries without Public Accountability: Disclosures','https://www.ifrs.org/issued-standards/list-of-standards/ifrs-19-subsidiaries-without-public-accountability-disclosures/','2027-01-01'),
  ('IFRS 20','IFRS',20,'الأصول والالتزامات التنظيمية','Regulatory Assets and Regulatory Liabilities','https://www.ifrs.org/projects/completed-projects/2026/rate-regulated-activities/','2029-01-01'),
  ('IAS 1','IAS',1,'عرض القوائم المالية','Presentation of Financial Statements',NULL,NULL),
  ('IAS 2','IAS',2,'المخزون','Inventories','https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/',NULL),
  ('IAS 7','IAS',7,'قائمة التدفقات النقدية','Statement of Cash Flows',NULL,NULL),
  ('IAS 8','IAS',8,'أساس إعداد القوائم المالية','Basis of Preparation of Financial Statements',NULL,NULL),
  ('IAS 10','IAS',10,'الأحداث بعد فترة التقرير','Events after the Reporting Period',NULL,NULL),
  ('IAS 12','IAS',12,'ضرائب الدخل','Income Taxes',NULL,NULL),
  ('IAS 16','IAS',16,'العقارات والآلات والمعدات','Property, Plant and Equipment',NULL,NULL),
  ('IAS 19','IAS',19,'منافع الموظفين','Employee Benefits',NULL,NULL),
  ('IAS 20','IAS',20,'محاسبة المنح الحكومية والإفصاح عن المساعدات الحكومية','Accounting for Government Grants and Disclosure of Government Assistance',NULL,NULL),
  ('IAS 21','IAS',21,'آثار التغيرات في أسعار صرف العملات الأجنبية','The Effects of Changes in Foreign Exchange Rates',NULL,NULL),
  ('IAS 23','IAS',23,'تكاليف الاقتراض','Borrowing Costs',NULL,NULL),
  ('IAS 24','IAS',24,'الإفصاحات عن الأطراف ذات العلاقة','Related Party Disclosures','https://www.ifrs.org/issued-standards/list-of-standards/ias-24-related-party-disclosures/',NULL),
  ('IAS 26','IAS',26,'المحاسبة والتقرير بواسطة خطط منافع التقاعد','Accounting and Reporting by Retirement Benefit Plans',NULL,NULL),
  ('IAS 27','IAS',27,'القوائم المالية المنفصلة','Separate Financial Statements',NULL,NULL),
  ('IAS 28','IAS',28,'الاستثمارات في الشركات الزميلة والمشروعات المشتركة','Investments in Associates and Joint Ventures',NULL,NULL),
  ('IAS 29','IAS',29,'التقرير المالي في الاقتصادات ذات التضخم المفرط','Financial Reporting in Hyperinflationary Economies',NULL,NULL),
  ('IAS 32','IAS',32,'الأدوات المالية: العرض','Financial Instruments: Presentation',NULL,NULL),
  ('IAS 33','IAS',33,'ربحية السهم','Earnings per Share',NULL,NULL),
  ('IAS 34','IAS',34,'التقرير المالي المرحلي','Interim Financial Reporting',NULL,NULL),
  ('IAS 36','IAS',36,'انخفاض قيمة الأصول','Impairment of Assets','https://www.ifrs.org/issued-standards/list-of-standards/ias-36-impairment-of-assets/',NULL),
  ('IAS 37','IAS',37,'المخصصات والالتزامات المحتملة والأصول المحتملة','Provisions, Contingent Liabilities and Contingent Assets',NULL,NULL),
  ('IAS 38','IAS',38,'الأصول غير الملموسة','Intangible Assets',NULL,NULL),
  ('IAS 40','IAS',40,'العقارات الاستثمارية','Investment Property',NULL,NULL),
  ('IAS 41','IAS',41,'الزراعة','Agriculture',NULL,NULL)
ON CONFLICT (code) DO UPDATE SET
  family = EXCLUDED.family,
  standard_number = EXCLUDED.standard_number,
  title_ar = EXCLUDED.title_ar,
  title_en = EXCLUDED.title_en,
  official_url = COALESCE(EXCLUDED.official_url, public.ifrs_standards.official_url),
  effective_from = COALESCE(EXCLUDED.effective_from, public.ifrs_standards.effective_from),
  updated_at = now();

UPDATE public.ifrs_standards
SET supersedes_code = 'IFRS 14'
WHERE code = 'IFRS 20';

-- Content source registry: makes licence/provenance an explicit data concern.
CREATE TABLE IF NOT EXISTS public.ifrs_content_sources (
  source_key TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  source_url TEXT NOT NULL,
  license_spdx TEXT,
  usage_mode TEXT NOT NULL CHECK (usage_mode IN ('reuse_with_attribution','reference_only','unavailable')),
  notes TEXT,
  last_verified_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON public.ifrs_content_sources TO anon, authenticated;
GRANT ALL ON public.ifrs_content_sources TO service_role;

ALTER TABLE public.ifrs_content_sources ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "IFRS content sources are publicly readable" ON public.ifrs_content_sources;
CREATE POLICY "IFRS content sources are publicly readable"
  ON public.ifrs_content_sources FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Admins manage IFRS content sources" ON public.ifrs_content_sources;
CREATE POLICY "Admins manage IFRS content sources"
  ON public.ifrs_content_sources FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::public.app_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));

INSERT INTO public.ifrs_content_sources
  (source_key, name, source_url, license_spdx, usage_mode, notes, last_verified_at)
VALUES
  ('ifrs-foundation','IFRS Foundation','https://www.ifrs.org/','PROPRIETARY','reference_only','Authoritative source; link and independently summarise rather than republish full standards text.','2026-09-29T00:00:00Z'),
  ('ramyatrouny-ifrs-skill','ramyatrouny/ifrs-skill','https://github.com/ramyatrouny/ifrs-skill','MIT','reuse_with_attribution','MIT-licensed research/reference material; retain attribution for reused substantial portions.','2026-09-29T00:00:00Z'),
  ('ramyatrouny-ifrs-quiz','ramyatrouny/ifrs-quiz','https://github.com/ramyatrouny/ifrs-quiz',NULL,'unavailable','Repository path returned 404 and no public repository was found under this name on 2026-09-29. Do not ingest until its identity and licence are verified.','2026-09-29T00:00:00Z'),
  ('api-evangelist-accounting-standards','api-evangelist/accounting-standards','https://github.com/api-evangelist/accounting-standards',NULL,'reference_only','No explicit repository licence found during review; use as an index/reference unless permission is established.','2026-09-29T00:00:00Z'),
  ('charleshoffman-fac-ifrs','CharlesHoffmanCPA/fac-ifrs','https://github.com/CharlesHoffmanCPA/fac-ifrs','GPL-3.0','reference_only','GPL-3.0 concept/taxonomy reference. Avoid embedding code/files unless the distribution obligations are intentionally accepted.','2026-09-29T00:00:00Z')
ON CONFLICT (source_key) DO UPDATE SET
  name = EXCLUDED.name,
  source_url = EXCLUDED.source_url,
  license_spdx = EXCLUDED.license_spdx,
  usage_mode = EXCLUDED.usage_mode,
  notes = EXCLUDED.notes,
  last_verified_at = EXCLUDED.last_verified_at,
  updated_at = now();

-- Normalize article-to-standard relationships.
ALTER TABLE public.kb_articles
  ADD COLUMN IF NOT EXISTS standard_code TEXT REFERENCES public.ifrs_standards(code) ON DELETE SET NULL;

CREATE INDEX IF NOT EXISTS kb_articles_standard_code_idx
  ON public.kb_articles (standard_code)
  WHERE standard_code IS NOT NULL;

WITH article_matches AS (
  SELECT
    id,
    regexp_match(
      upper(coalesce(slug, '') || ' ' || coalesce(title_en, '') || ' ' || coalesce(title_ar, '')),
      '(IFRS|IAS)[^0-9]*([0-9]{1,2})'
    ) AS match
  FROM public.kb_articles
  WHERE standard_code IS NULL
)
UPDATE public.kb_articles AS article
SET standard_code = article_matches.match[1] || ' ' || article_matches.match[2]
FROM article_matches
JOIN public.ifrs_standards AS standard
  ON standard.code = article_matches.match[1] || ' ' || article_matches.match[2]
WHERE article.id = article_matches.id
  AND article_matches.match IS NOT NULL;

-- Normalize question-to-standard relationships and preserve import provenance.
ALTER TABLE public.exam_questions
  ADD COLUMN IF NOT EXISTS standard_code TEXT REFERENCES public.ifrs_standards(code) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS source_key TEXT REFERENCES public.ifrs_content_sources(source_key) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS source_path TEXT,
  ADD COLUMN IF NOT EXISTS source_revision TEXT,
  ADD COLUMN IF NOT EXISTS source_item_id TEXT,
  ADD COLUMN IF NOT EXISTS source_payload JSONB,
  ADD COLUMN IF NOT EXISTS translation_status TEXT NOT NULL DEFAULT 'original',
  ADD COLUMN IF NOT EXISTS reviewed_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS reviewed_by UUID REFERENCES auth.users(id) ON DELETE SET NULL;

ALTER TABLE public.exam_questions
  DROP CONSTRAINT IF EXISTS exam_questions_translation_status_check,
  ADD CONSTRAINT exam_questions_translation_status_check
    CHECK (translation_status IN ('original','machine_translated','review_required','reviewed'));

CREATE INDEX IF NOT EXISTS exam_questions_standard_code_idx
  ON public.exam_questions (standard_code)
  WHERE standard_code IS NOT NULL;

CREATE INDEX IF NOT EXISTS exam_questions_public_standard_idx
  ON public.exam_questions (standard_code, created_at DESC)
  WHERE is_public = true AND status = 'approved';

CREATE UNIQUE INDEX IF NOT EXISTS exam_questions_source_item_unique_idx
  ON public.exam_questions (source_key, source_revision, source_item_id)
  WHERE source_key IS NOT NULL
    AND source_revision IS NOT NULL
    AND source_item_id IS NOT NULL;

WITH question_matches AS (
  SELECT
    id,
    regexp_match(
      upper(coalesce(topic, '') || ' ' || coalesce(reference, '')),
      '(IFRS|IAS)[^0-9]*([0-9]{1,2})'
    ) AS match
  FROM public.exam_questions
  WHERE standard_code IS NULL
)
UPDATE public.exam_questions AS question
SET standard_code = question_matches.match[1] || ' ' || question_matches.match[2]
FROM question_matches
JOIN public.ifrs_standards AS standard
  ON standard.code = question_matches.match[1] || ' ' || question_matches.match[2]
WHERE question.id = question_matches.id
  AND question_matches.match IS NOT NULL;

COMMIT;
