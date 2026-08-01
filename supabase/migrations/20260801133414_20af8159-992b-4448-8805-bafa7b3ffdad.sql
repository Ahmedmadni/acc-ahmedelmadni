
INSERT INTO public.kb_categories (slug, name_ar, name_en, description_ar, description_en)
VALUES
  ('ifrs', 'معايير المحاسبة الدولية', 'IFRS Standards', 'تحديثات وتفسيرات المعايير الدولية للتقرير المالي.', 'Updates and interpretations of IFRS.'),
  ('cma-professional', 'التطوير المهني وشهادة CMA', 'Professional Development & CMA', 'أخبار وإرشادات الشهادات المهنية وشهادة CMA.', 'Professional certification news and CMA guidance.')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.kb_articles
  (slug, category_id, title_ar, title_en, excerpt_ar, excerpt_en, content_ar, reading_minutes, keywords, status, published_at, meta_title, meta_description, generation_source)
VALUES
(
  'ifrs-updates-iasb-ifrs18-2026',
  (SELECT id FROM public.kb_categories WHERE slug = 'ifrs'),
  'دليلك لأهم تعديلات المعايير الدولية IFRS: ماذا يحمل لك مجلس IASB ومعيار IFRS 18 الجديد؟',
  'IFRS Updates Guide: IASB Decisions and the New IFRS 18',
  'يشهد العالم المحاسبي تطورات متسارعة في المعايير الدولية للتقرير المالي (IFRS)، وأقر مجلس IASB تعديلات هامة تخص عقود الإيجار وعرض القوائم المالية وتنظيم الأسعار.',
  'Key IASB decisions covering lease concessions, IFRS 18 presentation and disclosure, and the upcoming IFRS 20.',
  '[
    {"heading":"مقدمة","paragraphs":["يشهد العالم المحاسبي تطورات متسارعة في المعايير الدولية للتقرير المالي (IFRS). أقر مجلس معايير المحاسبة الدولية (IASB) في اجتماعاته الأخيرة تعديلات هامة."]},
    {"heading":"1. معالجة عقود الإيجار (IFRS 16)","paragraphs":["توضيح كيفية معالجة التنازل عن دفعات الإيجار بالتكامل مع IFRS 9 للأدوات المالية."]},
    {"heading":"2. متطلبات الإفصاح في IFRS 18","paragraphs":["استكمال ضوابط العرض والتصنيف في قائمة الدخل وإفصاحات قياس الأداء."]},
    {"heading":"3. التذكير بمعيار IFRS 20","paragraphs":["التهيؤ للتطبيق الإلزامي لمعيار تنظيم الأسعار في عام 2029."]},
    {"heading":"التوصية","paragraphs":["مراجعة الهيكل الداخلي للقوائم المالية للتحول السلس لمتطلبات IFRS 18."]}
  ]'::jsonb,
  4,
  ARRAY['IFRS','IFRS 18','IASB','IFRS 16','IFRS 20','المعايير الدولية'],
  'published',
  '2026-08-01T09:00:00+03:00',
  'أهم تعديلات IFRS ومعيار IFRS 18 الجديد | أحمد المدني',
  'ملخص أحدث قرارات مجلس IASB: عقود الإيجار IFRS 16، إفصاحات IFRS 18، والاستعداد لمعيار IFRS 20.',
  'manual'
),
(
  'cma-exam-changes-2026-cbqs',
  (SELECT id FROM public.kb_categories WHERE slug = 'cma-professional'),
  'تغيرات حاسمة في اختبارات CMA لعام 2026: كيف تستعد لأسئلة الحالات العملية (CBQs)؟',
  'CMA Exam Changes 2026: Preparing for Case-Based Questions',
  'أعلن معهد المحاسبين الإداريين (IMA) عن تحديثات أساسية في هيكل اختبار CMA لعام 2026 تشمل اعتماد أسئلة الحالات العملية بدل الأسئلة المقالية.',
  'The IMA has updated the 2026 CMA exam structure, replacing essays with case-based questions.',
  '[
    {"heading":"مقدمة","paragraphs":["أعلن معهد المحاسبين الإداريين (IMA) عن تحديثات أساسية في هيكل اختبار CMA لعام 2026."]},
    {"heading":"1. اعتماد أسئلة الحالات العملية (CBQs)","paragraphs":["استبدال الأسئلة المقالية التقليدية بنظام الأسئلة التفاعلية القائمة على سيناريوهات وحالات عملية لتسريع التقييم وقياس المهارة الواقعية."]},
    {"heading":"2. الأسئلة الاختيارية","paragraphs":["الحفاظ على 100 سؤال اختيار من متعدد بدون تغيير في المحتوى المنهجي الأساسي."]},
    {"heading":"3. نافذة التسجيل","paragraphs":["فتح التسجيل لنافذة اختبارات سبتمبر/أكتوبر 2026 لدى المراكز المعتمدة."]},
    {"heading":"التوصية","paragraphs":["التركيز على حل السيناريوهات والتطبيقات الرقمية المباشرة أثناء التحضير للاختبار."]}
  ]'::jsonb,
  4,
  ARRAY['CMA','IMA','CBQs','اختبارات CMA','التطوير المهني'],
  'published',
  '2026-08-01T09:05:00+03:00',
  'تغييرات اختبار CMA 2026 وأسئلة الحالات العملية | أحمد المدني',
  'ما الجديد في اختبار CMA لعام 2026؟ أسئلة الحالات العملية CBQs، هيكل الأسئلة، ونافذة التسجيل.',
  'manual'
),
(
  'zatca-penalty-relief-extension-rhq-2026',
  (SELECT id FROM public.kb_categories WHERE slug = 'zakat-tax-ksa'),
  'تحديثات ضريبية عاجلة في السعودية: تمديد الإعفاء من الغرامات وضوابط المقرات الإقليمية (RHQ)',
  'Saudi Tax Updates: Penalty Relief Extension and RHQ Rules',
  'أبرز قرارات هيئة الزكاة والضريبة والجمارك (زاتكا): تمديد مبادرة إلغاء الغرامات حتى 31 ديسمبر 2026 وتحديث إرشادات المقرات الإقليمية.',
  'ZATCA extends the penalty waiver initiative to 31 December 2026 and updates RHQ tax guidance.',
  '[
    {"heading":"مقدمة","paragraphs":["أبرز قرارات وتحديثات هيئة الزكاة والضريبة والجمارك (زاتكا)."]},
    {"heading":"1. تمديد مبادرة إلغاء الغرامات والإعفاء من العقوبات المالية","paragraphs":["تمديد المبادرة 6 أشهر إضافية حتى 31 ديسمبر 2026 لتشمل ضريبة القيمة المضافة، ضريبة الاستقطاع، ضريبة الدخل، والتصرفات العقارية."]},
    {"heading":"2. إرشادات المقرات الإقليمية (RHQ)","paragraphs":["تحديث التوجيهات وضوابط المعاملة الضريبية والزكوية للشركات العالمية بالمملكة."]},
    {"heading":"التوصية","paragraphs":["مراجعة الموقف الضريبي وسداد أصل الفروقات الضريبية للاستفادة الكاملة من الإعفاء قبل نهاية العام."]}
  ]'::jsonb,
  4,
  ARRAY['زاتكا','الغرامات','RHQ','ضريبة القيمة المضافة','الزكاة','السعودية'],
  'published',
  '2026-08-01T09:10:00+03:00',
  'تمديد إعفاء الغرامات وضوابط المقرات الإقليمية RHQ | أحمد المدني',
  'زاتكا تمدد مبادرة إلغاء الغرامات حتى 31 ديسمبر 2026 وتحدث إرشادات المقرات الإقليمية RHQ.',
  'manual'
)
ON CONFLICT (slug) DO NOTHING;
