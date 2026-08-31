-- Weekly editorial articles supplied by the site owner for 29 August 2026.
-- This script is safe to paste into the Supabase SQL Editor more than once.

BEGIN;

INSERT INTO public.kb_categories (
  slug, name_ar, name_en, icon, description_ar, description_en, sort_order
)
VALUES
  (
    'international-accounting-standards',
    'معايير المحاسبة الدولية (IFRS)',
    'International Accounting Standards (IFRS)',
    'Scale',
    'مستجدات معايير المحاسبة الدولية وتطبيقاتها العملية في التقارير المالية.',
    'Updates to international accounting standards and their practical financial-reporting applications.',
    (SELECT COALESCE(MAX(sort_order), 0) + 1 FROM public.kb_categories)
  ),
  (
    'professional-certifications',
    'الشهادات المهنية',
    'Professional Certifications',
    'ShieldCheck',
    'محتوى حول الشهادات المهنية المحاسبية والمالية مثل CMA وCPA وCFA وسوكبا.',
    'Content about professional accounting and finance certifications such as CMA, CPA, CFA, and SOCPA.',
    (SELECT COALESCE(MAX(sort_order), 0) + 2 FROM public.kb_categories)
  ),
  (
    'zakat-tax-ksa',
    'الزكاة والضرائب في السعودية',
    'Zakat & Tax in Saudi Arabia',
    'Landmark',
    'الامتثال الزكوي والضريبي وتحديثات هيئة الزكاة والضريبة والجمارك.',
    'Zakat and tax compliance and ZATCA regulatory updates.',
    (SELECT COALESCE(MAX(sort_order), 0) + 3 FROM public.kb_categories)
  )
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.kb_articles (
  slug, category_id, title_ar, title_en, excerpt_ar, excerpt_en,
  content_ar, meta_title, meta_description, keywords, reading_minutes,
  faq, "references", external_sources, author_name, is_featured, status,
  generation_source, published_at
)
VALUES
(
  'ifrs-18-alternative-taxes-eba-august-2026',
  (SELECT id FROM public.kb_categories WHERE slug = 'international-accounting-standards'),
  'مستجدات معايير IFRS وقرارات IASB لشهر أغسطس 2026: مقترحات تعديل IFRS 18 للضرائب البديلة وإرشادات EBA للتقارير الإشرافية',
  'August 2026 IFRS and IASB Updates: Proposed IFRS 18 Alternative-Tax Amendments and EBA Supervisory Reporting Guidance',
  'مقترحات تصنيف الضرائب البديلة وفق IFRS 18، وإرشادات EBA لنماذج FINREP، وضوابط مقاييس الأداء الإدارية، ومستجدات عقود شراء الطاقة.',
  'Proposed IFRS 18 treatment of alternative taxes, EBA FINREP guidance, management performance measures, and power purchase agreement updates.',
  $$[
    {"heading":"مقدمة","paragraphs":[
      "يواصل مجلس معايير المحاسبة الدولية (IASB)، بالتعاون مع الهيئات الرقابية الدولية، تطوير وتوضيح التطبيقات العملية للمعايير الصادرة حديثاً، وعلى رأسها معيار IFRS 18 لعرض القوائم المالية والإفصاح عنها، الذي سيحل رسمياً محل معيار IAS 1 اعتباراً من 1 يناير 2027.",
      "وشهدت مناقشات أغسطس 2026 قرارات لمعالجة التحديات العملية المتعلقة بتصنيف الأعباء الضريبية البديلة، بالتزامن مع إرشادات الهيئة المصرفية الأوروبية (EBA) لتسهيل التحول المؤسسي إلى نماذج التقارير الإشرافية المتوافقة مع IFRS 18."
    ]},
    {"heading":"مقترح تصنيف الضرائب البديلة وفق IFRS 18","paragraphs":[
      "وافق مجلس IASB على طرح مسودة تعديل إلحاقية لمعيار IFRS 18 خلال الربع الرابع من 2026، تقترح إدراج الرسوم والأعباء الضريبية المفروضة بديلاً مباشراً لضريبة الدخل ضمن فئة ضرائب الدخل في قائمة الأرباح أو الخسائر.",
      "يشترط لهذا التبويب أن تنص التشريعات المحلية بوضوح على إلزام المنشأة أو تخييرها بين ضريبة الدخل التقليدية والرسم أو الضريبة البديلة، بما يمنع تشويه هامش الربح التشغيلي ببنود ضريبية ذات طابع سيادي."
    ]},
    {"heading":"إرشادات EBA لمواءمة نماذج FINREP","paragraphs":[
      "أوصت الهيئة المصرفية الأوروبية بالسماح للمؤسسات المالية بالتطبيق الطوعي لنماذج FINREP المتوافقة مع IFRS 18 خلال الفترة الانتقالية قبل سبتمبر 2027، لتقليل العبء الناتج عن إعداد القوائم بصيغتين وتوحيد أسس الإفصاح المالي."
    ]},
    {"heading":"مقاييس الأداء الإدارية وعقود شراء الطاقة","paragraphs":[
      "أكد IASB ضرورة تقديم إفصاحات واضحة عن طريقة احتساب مقاييس الأداء المحددة من الإدارة (MPMs)، مثل EBITDA المعدل، وأثر الضرائب وحقوق الأقلية عليها، مع تسويتها مباشرة مع أقرب بند فرعي معتمد في القوائم المالية.",
      "كما استكملت اللجان الفنية مراجعة استثناءات محاسبة التحوط ومتطلبات إثبات عقود شراء الطاقة المتجددة والافتراضية وفق IFRS 9، بما يعكس عقود الاستدامة والتحوط من تقلب أسعار الطاقة بدقة."
    ]},
    {"heading":"التوصيات العملية","paragraphs":[
      "1. **حصر الرسوم الضريبية:** تحديد الضرائب والرسوم الحكومية البديلة في ميزان المراجعة وتقييم شروط تبويبها المقترح ضمن ضريبة الدخل.",
      "2. **تحديث أنظمة التقارير:** مواءمة أنظمة ERP لتوليد القوائم وفق فئات التشغيل والاستثمار والتمويل وإعداد تسويات MPMs.",
      "3. **مراجعة عقود التمويل:** تقييم أثر إعادة التبويب على النسب المالية والعهود المصرفية لتفادي أي إخلال غير مقصود."
    ]}
  ]$$::jsonb,
  'مستجدات IFRS 18 والضرائب البديلة | أغسطس 2026',
  'مقترحات IASB لتعديل IFRS 18 بشأن الضرائب البديلة، وإرشادات EBA للتقارير الإشرافية، وضوابط MPMs وعقود الطاقة.',
  ARRAY['IFRS 18','IASB','EBA','FINREP','الضرائب البديلة','MPMs','IFRS 9','عقود شراء الطاقة'],
  6,
  $$[
    {"q":"متى يبدأ التطبيق الإلزامي لمعيار IFRS 18؟","a":"يحل IFRS 18 محل IAS 1 للفترات السنوية التي تبدأ في 1 يناير 2027، مع مراعاة الأحكام الانتقالية المعمول بها."},
    {"q":"متى يمكن عرض الرسم البديل ضمن ضرائب الدخل؟","a":"وفق المقترح، عندما يقرر التشريع المحلي بوضوح أن الرسم بديل مباشر لضريبة الدخل ويلزم المنشأة أو يخيرها بينهما."},
    {"q":"ما المتطلب الأهم لمقاييس MPMs؟","a":"تعريف المقياس وشرح احتسابه وتسويته بشفافية مع أقرب مجموع أو مجموع فرعي معتمد في القوائم المالية."}
  ]$$::jsonb,
  $$[
    {"label":"IFRS 18 — Presentation and Disclosure in Financial Statements","url":"https://www.ifrs.org/issued-standards/list-of-standards/ifrs-18-presentation-and-disclosure-in-financial-statements/"},
    {"label":"EBA opinion on IFRS 18 supervisory financial reporting","url":"https://www.eba.europa.eu/publications-and-media/press-releases/eba-issues-opinion-implementation-ifrs-18-supervisory-financial-reporting-support-consistency-ifrs"},
    {"label":"المستند الأصلي للمقال","url":"https://docs.google.com/document/d/1ABNE9E3mq0mEFULUTY-Idfrm-Yb81g-LndH08wwTSnw/edit"}
  ]$$::jsonb,
  $$[{"name":"IFRS Foundation","url":"https://www.ifrs.org/"},{"name":"EBA","url":"https://www.eba.europa.eu/"}]$$::jsonb,
  'أحمد المدني', true, 'published', 'editorial', '2026-08-29 09:00:00+03'::timestamptz
),
(
  'cma-part-2-cbq-financial-decisions-risk-2026',
  (SELECT id FROM public.kb_categories WHERE slug = 'professional-certifications'),
  'استراتيجيات التفوق في الجزء الثاني لاختبار CMA: تحليل القرارات المالية وإدارة المخاطر في بيئة أسئلة الحالات (CBQs)',
  'Strategies for CMA Part 2 Success: Financial Decision Analysis and Risk Management in CBQs',
  'منهج عملي لحل أسئلة الحالات في الجزء الثاني من CMA يجمع قرارات التمويل والموازنة الرأسمالية وإدارة المخاطر والتحليلات التنبؤية.',
  'A practical CMA Part 2 CBQ method integrating financing, capital budgeting, enterprise risk, and predictive analytics.',
  $$[
    {"heading":"مقدمة","paragraphs":[
      "مع اقتراب نافذة اختبار المحاسب الإداري المعتمد (CMA) في سبتمبر وأكتوبر 2026، يركز المرشحون على الجزء الثاني: الإدارة المالية الاستراتيجية، ولا سيما نموذج أسئلة الحالات العملية التفاعلية (CBQs).",
      "يتطلب هذا النمط استيعاب الأدوات الحسابية والقدرة على صياغة قرار استراتيجي وربطه بإدارة المخاطر والتحليلات المالية المتقدمة."
    ]},
    {"heading":"هيكل رأس المال والموازنة الرأسمالية","paragraphs":[
      "تدمج الحالات بين حساب المتوسط المرجح لتكلفة رأس المال (WACC)، وتقييم المشروعات بصافي القيمة الحالية (NPV) ومعدل العائد الداخلي (IRR)، وآثار التضخم وتقلب أسعار الفائدة.",
      "ينبغي ألا يكتفي المرشح بالنتيجة الرقمية؛ بل يوضح أثر الافتراضات والمخاطر وكيف تخدم التوصية أهداف المنشأة."
    ]},
    {"heading":"إدارة المخاطر المؤسسية واتخاذ القرار","paragraphs":[
      "تتطلب مهام CBQs تقييم المخاطر التشغيلية والمالية والاستراتيجية، واختيار الاستجابة المناسبة: التجنب أو التخفيض أو المشاركة أو القبول، وربطها بمدى تحمل المنشأة للمخاطر وفق COSO ERM."
    ]},
    {"heading":"الذكاء الاصطناعي والتحليل الاستراتيجي","paragraphs":[
      "يتزايد دور التحليل التنبؤي والنماذج المدعومة بالذكاء الاصطناعي في FP&A لتحسين توقع التدفقات النقدية وتحليل الحساسية والسيناريوهات.",
      "وتغطي الحالات كذلك تقييم عروض الاندماج والاستحواذ، ووفورات الحجم والتكامل التشغيلي، وطرق تمويل الصفقات، مع الالتزام بميثاق أخلاقيات IMA."
    ]},
    {"heading":"التوصيات العملية","paragraphs":[
      "1. **اقرأ المطلوب أولاً:** حدد المهام والأرقام اللازمة قبل تحليل كامل نص الحالة.",
      "2. **برر القرار:** ادعم الاختيار بفروق NPV وفترة الاسترداد وصلتهما بالأهداف الاستراتيجية.",
      "3. **راجع الإدخال:** تحقق من وحدات القياس والنسب والإشارات وسياسة التقريب قبل التسليم.",
      "4. **نفذ محاكاة موقوتة:** خصص 60 دقيقة لحالتين متتاليتين في واجهة مشابهة لبيئة الاختبار."
    ]}
  ]$$::jsonb,
  'استراتيجيات CMA Part 2 وأسئلة CBQs | 2026',
  'دليل عملي لأسئلة CMA Part 2: WACC وNPV وIRR، وإطار COSO ERM، والتحليلات التنبؤية وقرارات الاندماج والاستحواذ.',
  ARRAY['CMA','CMA Part 2','CBQs','WACC','NPV','IRR','COSO ERM','FP&A','إدارة المخاطر'],
  5,
  $$[
    {"q":"كيف أبدأ حل سؤال حالة CBQ؟","a":"ابدأ بقراءة المهام المطلوبة، ثم استخرج الأرقام والمؤشرات المرتبطة بكل مهمة من الجداول قبل إجراء الحسابات."},
    {"q":"كيف أدعم توصية استثمارية في الحالة؟","a":"اربط التوصية بالأرقام مثل NPV وIRR وفترة الاسترداد، ثم اشرح اتساقها مع المخاطر والأهداف الاستراتيجية."},
    {"q":"ما الأخطاء التي يجب مراجعتها قبل التسليم؟","a":"وحدات القياس، والنسب المئوية، والإشارات السالبة، والتقريب، وما إذا كان المطلوب إدخال الرقم بالآلاف أو الملايين."}
  ]$$::jsonb,
  $$[
    {"label":"IMA — CMA Case-Based Questions","url":"https://www.imaglobal.org/products/cma-part-2-english-case-based-questions"},
    {"label":"IMA","url":"https://www.imaglobal.org/"},
    {"label":"المستند الأصلي للمقال","url":"https://docs.google.com/document/d/1yhgK5GegeeZnkOAt_Un4xOZ4r9A2d0WUTHjAFtazXbo/edit"}
  ]$$::jsonb,
  $$[{"name":"Institute of Management Accountants","url":"https://www.imaglobal.org/"}]$$::jsonb,
  'أحمد المدني', false, 'published', 'editorial', '2026-08-29 09:05:00+03'::timestamptz
),
(
  'zatca-rett-developer-refunds-vat-august-2026',
  (SELECT id FROM public.kb_categories WHERE slug = 'zakat-tax-ksa'),
  'الامتثال الضريبي والزكوي بنهاية أغسطس 2026: ضوابط ضريبة التصرفات العقارية واسترداد مدخلات المطورين والتزامات إقرارات القيمة المضافة',
  'End-of-August 2026 Tax and Zakat Compliance: RETT, Developer Input Refunds, and VAT Returns',
  'دليل عملي لضريبة التصرفات العقارية واسترداد مدخلات المطورين العقاريين وإقرارات القيمة المضافة وإدارة المجموعات الضريبية.',
  'A practical guide to RETT, licensed developers input-tax refunds, VAT returns, and VAT group administration.',
  $$[
    {"heading":"مقدمة","paragraphs":[
      "مع نهاية أغسطس 2026، تبرز أهمية استيفاء الالتزامات الضريبية والزكوية الدورية، مع التركيز على إجراءات ضريبة التصرفات العقارية (RETT)، وآليات استرداد ضريبة القيمة المضافة للمطورين العقاريين المرخصين، وإدارة المجموعات الضريبية عبر خدمات زاتكا الإلكترونية."
    ]},
    {"heading":"ضريبة التصرفات العقارية وحالات الاستثناء","paragraphs":[
      "يجب تسجيل التصرف العقاري وسداد ضريبة التصرفات العقارية بنسبة 5% قبل الإفراغ أو توثيق العقد، مع فحص شروط الاستثناءات النظامية، ومنها قسمة التركات وبعض الحصص العينية وعقود الإجارة التمويلية المؤهلة.",
      "يساعد التحقق المسبق من المستندات والصفة النظامية للتصرف في تجنب التأخير والغرامات والنزاع حول الاستثناء."
    ]},
    {"heading":"استرداد مدخلات المطورين العقاريين","paragraphs":[
      "يمكن للمطورين العقاريين المرخصين والمؤهلين تقديم طلبات استرداد ضريبة القيمة المضافة المسددة على المدخلات المرتبطة بتشييد وتطوير العقارات المؤهلة، وفق الفترات والجداول والإجراءات الإلكترونية المعتمدة.",
      "يتطلب ذلك حفظ الفواتير المستوفية للشروط وربط كل تكلفة بالمشروع المؤهل وإجراء تسوية واضحة قبل رفع الطلب."
    ]},
    {"heading":"إقرارات القيمة المضافة والمجموعات الضريبية","paragraphs":[
      "على المنشآت الشهرية استكمال إقرار أغسطس وسداد المستحق ضمن المهلة النظامية. وينبغي التحقق من الموعد المطبق على المنشأة عبر القنوات الرسمية وعدم الاعتماد على التقدير.",
      "تتيح خدمات زاتكا إدارة المجموعات الضريبية وتوحيد إقرارات الشركات المؤهلة. وتدعم المطابقة بين دفتر الأستاذ وأنظمة ERP ونقاط البيع والفواتير المرسلة إلى منصة فاتورة دقة الإقرار وإدارة السيولة."
    ]},
    {"heading":"التوصيات العملية","paragraphs":[
      "1. **وثق التصرف العقاري:** احصل على الرقم المرجعي وسدد RETT قبل الإفراغ، واحتفظ بأدلة أي استثناء.",
      "2. **راجع فواتير المدخلات:** تحقق من الرقم الضريبي ومتطلبات الفوترة الإلكترونية وربط التكلفة بالمشروع المؤهل.",
      "3. **نفذ مطابقة دورية:** طابق المبيعات والضرائب في ERP ونقاط البيع مع منصة فاتورة، وأدرج الإشعارات الدائنة والمدينة والتسويات في الإقرار الصحيح."
    ]}
  ]$$::jsonb,
  'الامتثال الضريبي أغسطس 2026 | RETT واسترداد المطورين',
  'ضوابط ضريبة التصرفات العقارية 5%، واسترداد مدخلات المطورين العقاريين، وإقرارات VAT والمجموعات الضريبية في السعودية.',
  ARRAY['زاتكا','RETT','ضريبة التصرفات العقارية','المطورون العقاريون','استرداد ضريبة المدخلات','ضريبة القيمة المضافة','VAT Groups','منصة فاتورة'],
  6,
  $$[
    {"q":"متى تسدد ضريبة التصرفات العقارية؟","a":"يجب تسجيل التصرف وسداد الضريبة قبل الإفراغ العقاري أو توثيق العقد، مع التحقق من أي استثناء نظامي قبل التنفيذ."},
    {"q":"ما أهم مستندات طلب استرداد المطور العقاري؟","a":"الفواتير الضريبية المستوفية للمتطلبات، وإثبات ارتباط التكلفة بالمشروع المؤهل، والترخيص والمستندات المطلوبة وفق إجراءات زاتكا."},
    {"q":"كيف تقلل المنشأة فروق إقرار القيمة المضافة؟","a":"بمطابقة دفتر الأستاذ وERP ونقاط البيع مع الفواتير المرسلة إلى منصة فاتورة وإدراج التسويات والإشعارات في الفترة الصحيحة."}
  ]$$::jsonb,
  $$[
    {"label":"زاتكا — ضريبة التصرفات العقارية","url":"https://zatca.gov.sa/ar/RulesRegulations/Taxes/Pages/RETT.aspx"},
    {"label":"زاتكا — الخدمات الإلكترونية","url":"https://zatca.gov.sa/ar/eServices/Pages/default.aspx"},
    {"label":"المستند الأصلي للمقال","url":"https://docs.google.com/document/d/1KfrrMDNkh2gO8EjIjcqkdr57xbsyHlM7cu7r-F4-AaE/edit"}
  ]$$::jsonb,
  $$[{"name":"هيئة الزكاة والضريبة والجمارك","url":"https://zatca.gov.sa/"}]$$::jsonb,
  'أحمد المدني', true, 'published', 'editorial', '2026-08-29 09:10:00+03'::timestamptz
)
ON CONFLICT (slug) DO UPDATE SET
  category_id = EXCLUDED.category_id,
  title_ar = EXCLUDED.title_ar,
  title_en = EXCLUDED.title_en,
  excerpt_ar = EXCLUDED.excerpt_ar,
  excerpt_en = EXCLUDED.excerpt_en,
  content_ar = EXCLUDED.content_ar,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  keywords = EXCLUDED.keywords,
  reading_minutes = EXCLUDED.reading_minutes,
  faq = EXCLUDED.faq,
  "references" = EXCLUDED."references",
  external_sources = EXCLUDED.external_sources,
  author_name = EXCLUDED.author_name,
  is_featured = EXCLUDED.is_featured,
  status = EXCLUDED.status,
  generation_source = EXCLUDED.generation_source,
  published_at = EXCLUDED.published_at;

COMMIT;
