-- Admin-manageable certifications, experience timeline, and skills content,
-- replacing the hardcoded arrays previously in src/lib/i18n.ts so Ahmed can
-- add/edit/remove entries (including certificate images) from /admin/profile
-- without touching code.

CREATE TABLE public.certifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_ar text NOT NULL,
  title_en text NOT NULL,
  issuer_ar text,
  issuer_en text,
  issue_date text,
  image_url text,
  credential_url text,
  sort_order int NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.experience_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  role_ar text NOT NULL,
  role_en text NOT NULL,
  company_ar text NOT NULL,
  company_en text NOT NULL,
  company_logo_url text,
  date_ar text NOT NULL,
  date_en text NOT NULL,
  points_ar text[] NOT NULL DEFAULT '{}',
  points_en text[] NOT NULL DEFAULT '{}',
  sort_order int NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.skill_groups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  heading_ar text NOT NULL,
  heading_en text NOT NULL,
  sort_order int NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.skill_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id uuid NOT NULL REFERENCES public.skill_groups(id) ON DELETE CASCADE,
  name_ar text NOT NULL,
  name_en text NOT NULL,
  level int NOT NULL DEFAULT 50 CHECK (level BETWEEN 0 AND 100),
  desc_ar text,
  desc_en text,
  tools text[] NOT NULL DEFAULT '{}',
  kpis_ar text[] NOT NULL DEFAULT '{}',
  kpis_en text[] NOT NULL DEFAULT '{}',
  sort_order int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.certifications TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.certifications TO authenticated;
GRANT ALL ON public.certifications TO service_role;

GRANT SELECT ON public.experience_items TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.experience_items TO authenticated;
GRANT ALL ON public.experience_items TO service_role;

GRANT SELECT ON public.skill_groups TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.skill_groups TO authenticated;
GRANT ALL ON public.skill_groups TO service_role;

GRANT SELECT ON public.skill_items TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.skill_items TO authenticated;
GRANT ALL ON public.skill_items TO service_role;

ALTER TABLE public.certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.experience_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skill_groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skill_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "certifications_read_published" ON public.certifications
  FOR SELECT TO public USING (is_published = true);
CREATE POLICY "certifications_admin_read_all" ON public.certifications
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'::app_role));
CREATE POLICY "certifications_admin_insert" ON public.certifications
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(),'admin'::app_role));
CREATE POLICY "certifications_admin_update" ON public.certifications
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin'::app_role));
CREATE POLICY "certifications_admin_delete" ON public.certifications
  FOR DELETE TO authenticated USING (public.has_role(auth.uid(),'admin'::app_role));

CREATE POLICY "experience_read_published" ON public.experience_items
  FOR SELECT TO public USING (is_published = true);
CREATE POLICY "experience_admin_read_all" ON public.experience_items
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'::app_role));
CREATE POLICY "experience_admin_insert" ON public.experience_items
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(),'admin'::app_role));
CREATE POLICY "experience_admin_update" ON public.experience_items
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin'::app_role));
CREATE POLICY "experience_admin_delete" ON public.experience_items
  FOR DELETE TO authenticated USING (public.has_role(auth.uid(),'admin'::app_role));

CREATE POLICY "skill_groups_read_published" ON public.skill_groups
  FOR SELECT TO public USING (is_published = true);
CREATE POLICY "skill_groups_admin_read_all" ON public.skill_groups
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'::app_role));
CREATE POLICY "skill_groups_admin_insert" ON public.skill_groups
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(),'admin'::app_role));
CREATE POLICY "skill_groups_admin_update" ON public.skill_groups
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin'::app_role));
CREATE POLICY "skill_groups_admin_delete" ON public.skill_groups
  FOR DELETE TO authenticated USING (public.has_role(auth.uid(),'admin'::app_role));

-- skill_items are readable whenever their parent group is published; write access is admin-only.
CREATE POLICY "skill_items_read_published" ON public.skill_items
  FOR SELECT TO public USING (
    EXISTS (SELECT 1 FROM public.skill_groups g WHERE g.id = group_id AND g.is_published = true)
  );
CREATE POLICY "skill_items_admin_read_all" ON public.skill_items
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'::app_role));
CREATE POLICY "skill_items_admin_insert" ON public.skill_items
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(),'admin'::app_role));
CREATE POLICY "skill_items_admin_update" ON public.skill_items
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin'::app_role));
CREATE POLICY "skill_items_admin_delete" ON public.skill_items
  FOR DELETE TO authenticated USING (public.has_role(auth.uid(),'admin'::app_role));

CREATE TRIGGER certifications_touch
  BEFORE UPDATE ON public.certifications
  FOR EACH ROW EXECUTE FUNCTION public.kb_touch_updated_at();
CREATE TRIGGER experience_items_touch
  BEFORE UPDATE ON public.experience_items
  FOR EACH ROW EXECUTE FUNCTION public.kb_touch_updated_at();
CREATE TRIGGER skill_groups_touch
  BEFORE UPDATE ON public.skill_groups
  FOR EACH ROW EXECUTE FUNCTION public.kb_touch_updated_at();
CREATE TRIGGER skill_items_touch
  BEFORE UPDATE ON public.skill_items
  FOR EACH ROW EXECUTE FUNCTION public.kb_touch_updated_at();

CREATE INDEX idx_certifications_published ON public.certifications(is_published);
CREATE INDEX idx_experience_published ON public.experience_items(is_published);
CREATE INDEX idx_skill_groups_published ON public.skill_groups(is_published);
CREATE INDEX idx_skill_items_group ON public.skill_items(group_id);

-- ============ Seed: migrate existing hardcoded content (src/lib/i18n.ts) ============

INSERT INTO public.certifications (title_ar, title_en, sort_order) VALUES
  ('محاسب إداري معتمد CMA (قيد الدراسة)', 'Certified Management Accountant (CMA) — Ongoing', 0),
  ('محاسب مالي محترف PFA', 'Professional Financial Accountant (PFA)', 1),
  ('الإدارة المالية والتحليل المالي', 'Financial Management & Analysis', 2),
  ('Excel للمحاسبة والتقارير', 'Excel for Accounting & Reporting', 3),
  ('مهارات العمل الأساسية', 'Essential Work Skills', 4),
  ('دورة اللغة الإنجليزية — 12 مستوى', 'English Course — 12 Levels', 5);

INSERT INTO public.experience_items (role_ar, role_en, company_ar, company_en, date_ar, date_en, points_ar, points_en, sort_order) VALUES
  (
    'محاسب أول وأخصائي تقارير مالية',
    'Senior Accountant & Financial Reporting Specialist',
    'شركة الأسطول الآلي للمقاولات — الرياض',
    'Alostool Alaali Contracting Co. — Riyadh',
    'يوليو 2024 — حتى الآن',
    'July 2024 — Present',
    ARRAY[
      'بدأت كمحاسب عملاء ثم تخصصت في إعداد التقارير المالية والإدارية الأسبوعية والشهرية لجميع مشاريع الشركة.',
      'إعداد تقارير الأداء المالي وتقارير الإدارة التي تدعم اتخاذ القرارات التنفيذية.',
      'مراقبة تكاليف المشاريع، تحليل الربحية، ودعم أنشطة الرقابة على التكاليف.',
      'التنسيق مع الاستشاريين الهندسيين في إعداد ومراجعة المطالبات المالية (Claims).',
      'المشاركة في إعداد أكثر من 10 مطالبات مالية لحالات تعاقدية ومشاريع مختلفة.'
    ],
    ARRAY[
      'Started as Customer Accountant and specialized in weekly and monthly financial and managerial reports across all company projects.',
      'Prepared detailed performance and management reports supporting executive decision-making.',
      'Monitored project costs, analyzed profitability, and supported cost control activities.',
      'Coordinated with engineering consultants for preparing and reviewing financial claims.',
      'Participated in preparing 10+ financial claims for various contractual cases.'
    ],
    0
  ),
  (
    'محاسب أول',
    'Senior Accountant',
    'مؤسسة لمارا لخدمات الضيافة والإعاشة — الرياض',
    'Lamara Hospitality & Catering Est. — Riyadh',
    '2023 — يونيو 2024',
    '2023 — June 2024',
    ARRAY[
      'إعداد القوائم المالية والتقارير المالية الداخلية.',
      'إعداد ومراجعة إقرارات ضريبة القيمة المضافة.',
      'مراقبة ومراجعة حسابات الشركة وعملياتها.',
      'تسوية أرصدة العملاء والموردين.',
      'تنفيذ العمليات البنكية والتسويات البنكية.'
    ],
    ARRAY[
      'Prepared financial statements and internal financial reports.',
      'Prepared and reviewed VAT reports.',
      'Monitored and audited company accounts and transactions.',
      'Reconciled customer and supplier balances.',
      'Conducted banking transactions and bank reconciliations.'
    ],
    1
  ),
  (
    'محاسب عام',
    'General Accountant',
    'شركة مجمع قمة الطب الطبية — الرياض',
    'Qimat Altib Medical Complex Co. — Riyadh',
    '2022 — 2023',
    '2022 — 2023',
    ARRAY[
      'تسجيل القيود اليومية والمعاملات المحاسبية.',
      'مراقبة حركة المخزون من الأدوية والمستلزمات الطبية.',
      'إعداد القوائم والتقارير المحاسبية.',
      'إدارة عمليات التأمين الطبي والتسويات مع شركات التأمين.',
      'متابعة المخالصات المالية وتحصيل الذمم المدينة.'
    ],
    ARRAY[
      'Recorded daily journal entries and accounting transactions.',
      'Monitored stock movement of medicines and medical supplies.',
      'Prepared financial statements and accounting reports.',
      'Managed medical insurance reconciliations with insurers.',
      'Followed up on clearances and receivables collections.'
    ],
    2
  );

WITH g1 AS (
  INSERT INTO public.skill_groups (heading_ar, heading_en, sort_order)
  VALUES ('المحاسبة والتقارير', 'Accounting & Reporting', 0)
  RETURNING id
), g2 AS (
  INSERT INTO public.skill_groups (heading_ar, heading_en, sort_order)
  VALUES ('الحسابات والتسويات', 'Accounts & Reconciliation', 1)
  RETURNING id
), g3 AS (
  INSERT INTO public.skill_groups (heading_ar, heading_en, sort_order)
  VALUES ('الأدوات والأنظمة', 'Tools & Systems', 2)
  RETURNING id
)
INSERT INTO public.skill_items (group_id, name_ar, name_en, level, desc_ar, desc_en, tools, kpis_ar, kpis_en, sort_order)
SELECT g1.id, v.name_ar, v.name_en, v.level, v.desc_ar, v.desc_en, v.tools, v.kpis_ar, v.kpis_en, v.sort_order
FROM g1, (VALUES
  ('التقارير المالية', 'Financial Reporting', 95,
    'إعداد تقارير مالية شهرية وأسبوعية تعرض الأداء المالي بدقة وتفصيل.',
    'Monthly & weekly financial reports presenting performance accurately and in detail.',
    ARRAY['Excel','Power BI','ERP'], ARRAY['دقة 100%','تسليم في الموعد','+50 تقريراً'], ARRAY['100% accuracy','On-time delivery','50+ reports'], 0),
  ('محاسبة التكاليف', 'Cost Accounting', 92,
    'تحليل تكاليف المشاريع، حساب تكلفة الوحدة، ودعم قرارات التسعير والرقابة.',
    'Project cost analysis, unit costing, and decision-support for pricing & control.',
    ARRAY['Excel متقدم','ERP','Power BI'], ARRAY['تخفيض تكاليف 12%','تتبع لحظي للتكلفة'], ARRAY['12% cost reduction','Real-time tracking'], 1),
  ('تحليل أداء المشاريع', 'Project Financial Analysis', 90,
    'قراءة ربحية كل مشروع وتحديد الانحرافات بين المخطط والفعلي.',
    'Profitability read on each project and budget vs actual variance analysis.',
    ARRAY['Excel','Power BI'], ARRAY['تحليل +20 مشروعاً','تقارير ربحية أسبوعية'], ARRAY['20+ projects analyzed','Weekly P&L'], 2),
  ('إعداد القوائم المالية', 'Financial Statements Preparation', 93,
    'إعداد قائمة الدخل والمركز المالي والتدفقات النقدية.',
    'Income statement, balance sheet, and cash flow preparation.',
    ARRAY['ERP','Excel'], ARRAY['إقفال شهري في 5 أيام'], ARRAY['Monthly close in 5 days'], 3),
  ('إعداد المطالبات المالية', 'Financial Claims Preparation', 88,
    'تنسيق مع الاستشاريين الهندسيين لتقديم المطالبات.',
    'Coordination with engineering consultants to file claims.',
    ARRAY['Excel','AutoCAD viewer'], ARRAY['+10 مطالبات','نسبة قبول عالية'], ARRAY['10+ claims','High approval rate'], 4)
) AS v(name_ar, name_en, level, desc_ar, desc_en, tools, kpis_ar, kpis_en, sort_order);

INSERT INTO public.skill_items (group_id, name_ar, name_en, level, desc_ar, desc_en, tools, kpis_ar, kpis_en, sort_order)
SELECT g.id, v.name_ar, v.name_en, v.level, v.desc_ar, v.desc_en, v.tools, v.kpis_ar, v.kpis_en, v.sort_order
FROM public.skill_groups g, (VALUES
  ('الحسابات المدينة والدائنة', 'Accounts Receivable & Payable', 94,
    'إدارة دورة AR/AP بكاملها وتسوية الأرصدة.',
    'Full AR/AP cycle management & balance reconciliation.',
    ARRAY['ERP','Excel'], ARRAY['تحصيل أسرع بـ 18%'], ARRAY['18% faster collections'], 0),
  ('التسويات البنكية', 'Bank Reconciliation', 96,
    'مطابقة كشوف البنوك مع دفاتر الشركة شهريّاً.',
    'Monthly matching of bank statements to company books.',
    ARRAY['Excel','ERP'], ARRAY['دقة 100%'], ARRAY['100% match accuracy'], 1),
  ('مراقبة الميزانيات', 'Budget Monitoring', 89,
    'متابعة الميزانية مقابل الفعلي والتنبيه بالانحرافات.',
    'Budget vs actual monitoring with variance alerts.',
    ARRAY['Excel','Power BI'], ARRAY['تخفيض انحراف 9%'], ARRAY['9% variance reduction'], 2),
  ('إدارة التدفق النقدي', 'Cash Flow Management', 90,
    'تخطيط ومتابعة التدفق النقدي قصير وطويل المدى.',
    'Short and long-term cash flow planning & monitoring.',
    ARRAY['Excel'], ARRAY['تحسين السيولة'], ARRAY['Liquidity improvement'], 3),
  ('إعداد ضريبة القيمة المضافة', 'VAT Reporting', 91,
    'إعداد إقرارات ضريبة القيمة المضافة وفق هيئة الزكاة.',
    'VAT filings aligned with ZATCA regulations.',
    ARRAY['ZATCA Portal','Excel'], ARRAY['تسليم في الموعد'], ARRAY['On-time filings'], 4)
) AS v(name_ar, name_en, level, desc_ar, desc_en, tools, kpis_ar, kpis_en, sort_order)
WHERE g.heading_en = 'Accounts & Reconciliation';

INSERT INTO public.skill_items (group_id, name_ar, name_en, level, desc_ar, desc_en, tools, kpis_ar, kpis_en, sort_order)
SELECT g.id, v.name_ar, v.name_en, v.level, v.desc_ar, v.desc_en, v.tools, v.kpis_ar, v.kpis_en, v.sort_order
FROM public.skill_groups g, (VALUES
  ('أنظمة ERP والبرامج المحاسبية', 'ERP & Accounting Software', 88,
    'تشغيل دورة محاسبية كاملة على أبرز الأنظمة المحاسبية وERP.',
    'Running a full accounting cycle on leading ERP & accounting platforms.',
    ARRAY['Oracle','Odoo','Dentech','Al-Shamel','Daftra','Ascon','Zoho Books'],
    ARRAY['تكامل 100%','إقفال شهري سريع'], ARRAY['100% integration','Fast monthly close'], 0),
  ('Excel متقدم', 'Advanced Excel', 97,
    'Pivot, VLOOKUP, Power Query, نماذج مالية.',
    'Pivot, VLOOKUP, Power Query, financial models.',
    ARRAY['Excel'], ARRAY['نماذج تلقائية'], ARRAY['Automated models'], 1),
  ('Power BI', 'Power BI', 85,
    'بناء لوحات KPIs تفاعلية للإدارة.',
    'Building interactive KPI dashboards for management.',
    ARRAY['Power BI'], ARRAY['لوحات لحظية'], ARRAY['Live dashboards'], 2),
  ('Microsoft Office', 'Microsoft Office', 95,
    'إتقان كامل لحزمة Office.', 'Full mastery of Office suite.',
    ARRAY['Word','PowerPoint','Outlook'], ARRAY[]::text[], ARRAY[]::text[], 3),
  ('Adobe Illustrator', 'Adobe Illustrator', 75,
    'تصميم رسوم بيانية احترافية للتقارير.', 'Designing professional infographics for reports.',
    ARRAY['Illustrator'], ARRAY[]::text[], ARRAY[]::text[], 4),
  ('Adobe Photoshop', 'Adobe Photoshop', 70,
    'تحرير الصور البصرية للتقارير.', 'Visual editing for reports.',
    ARRAY['Photoshop'], ARRAY[]::text[], ARRAY[]::text[], 5)
) AS v(name_ar, name_en, level, desc_ar, desc_en, tools, kpis_ar, kpis_en, sort_order)
WHERE g.heading_en = 'Tools & Systems';
