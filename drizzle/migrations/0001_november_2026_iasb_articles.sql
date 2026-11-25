INSERT INTO public.kb_articles (
  slug, category_id, title_ar, title_en, excerpt_ar, excerpt_en,
  content_ar, content_en, meta_title, meta_description, keywords, reading_minutes,
  faq, faq_en, "references", external_sources, author_name, is_featured, status,
  generation_source, published_at
)
VALUES
(
  'iasb-november-2026-crypto-assets-ifrs-16',
  (SELECT id FROM public.kb_categories WHERE slug = 'ifrs'),
  'قرارات IASB لشهر نوفمبر 2026: بدء مشروع محاسبة الأصول المشفرة وتحسينات معيار الإيجار (IFRS 16)',
  'IASB November 2026 Decisions: Crypto-Asset Accounting Project and IFRS 16 Lease Improvements',
  'أقر مجلس IASB في اجتماع نوفمبر 2026 مشروعين عاجلين: معايير واضحة لحيازة العملات المشفرة والمستقرة، وتخفيف تكاليف تطبيق IFRS 16.',
  'In November 2026 the IASB added two urgent projects: clear requirements for holdings of crypto-assets and stablecoins, and reducing the cost of applying IFRS 16.',
  $$[
    {"heading":"الملخص التنفيذي","paragraphs":[
      "أقر مجلس معايير المحاسبة الدولية (IASB) في اجتماعه المنعقد في نوفمبر 2026 إدراج مشروعين عاجلين ضمن خطة عمله الرسمية.",
      "يركز المشروع الأول على وضع معايير واضحة لحيازة العملات المشفرة والعملات المستقرة (Stablecoins)، بينما يستهدف الثاني تخفيف تكاليف تطبيق معيار الإيجار IFRS 16 وتوضيح التنازلات الإيجارية."
    ]},
    {"heading":"مشروع محاسبة الأصول المشفرة","paragraphs":[
      "يبحث المجلس إمكانية قياس العملات المشفرة بالقيمة العادلة من خلال الربح أو الخسارة (FVTPL)، بما يعكس تقلب قيمتها السوقية في القوائم المالية بصورة أدق.",
      "كما يدرس تصنيف بعض العملات المستقرة كمعادلات نقدية (Cash Equivalents) وفق معيار المحاسبة الدولي IAS 7 متى استوفت شروط السيولة العالية وانخفاض مخاطر تغير القيمة."
    ]},
    {"heading":"تحسينات معيار الإيجار IFRS 16","paragraphs":[
      "يستهدف المشروع تقليل أعباء احتساب معدلات الخصم وإعادة قياس التزامات عقود الإيجار للشركات دون الإخلال بجودة البيانات المالية، مع توضيح المعالجة المحاسبية للتنازلات الإيجارية."
    ]},
    {"heading":"أبرز النقاط","paragraphs":[
      "1. بحث قياس العملات المشفرة بالقيمة العادلة من خلال الربح أو الخسارة (FVTPL).",
      "2. دراسة تصنيف بعض العملات المستقرة كمعادلات نقدية وفق IAS 7.",
      "3. تقليل أعباء احتساب معدلات الخصم وإعادة قياس التزامات الإيجار دون الإخلال بجودة البيانات المالية."
    ]}
  ]$$::jsonb,
  $$[
    {"heading":"Executive Summary","paragraphs":[
      "At its November 2026 meeting, the International Accounting Standards Board (IASB) added two urgent projects to its formal work plan.",
      "The first focuses on setting clear requirements for holdings of crypto-currencies and stablecoins, while the second aims to reduce the cost of applying IFRS 16 Leases and clarify lease concessions."
    ]},
    {"heading":"Crypto-Asset Accounting Project","paragraphs":[
      "The Board is exploring whether crypto-currencies could be measured at fair value through profit or loss (FVTPL), reflecting their market volatility more faithfully in the financial statements.",
      "It is also considering whether certain stablecoins could be classified as cash equivalents under IAS 7 when they meet high-liquidity and low value-change-risk conditions."
    ]},
    {"heading":"IFRS 16 Lease Improvements","paragraphs":[
      "The project seeks to reduce the burden of determining discount rates and remeasuring lease liabilities without compromising the quality of financial information, and to clarify the accounting for lease concessions."
    ]},
    {"heading":"Key Points","paragraphs":[
      "1. Exploring FVTPL measurement for crypto-currencies.",
      "2. Studying the classification of certain stablecoins as cash equivalents under IAS 7.",
      "3. Reducing the burden of discount-rate determination and lease-liability remeasurement without reducing information quality."
    ]}
  ]$$::jsonb,
  'قرارات IASB نوفمبر 2026: الأصول المشفرة وIFRS 16',
  'مشروع IASB لمحاسبة العملات المشفرة والمستقرة بالقيمة العادلة وتصنيفها وفق IAS 7، وتحسينات تخفف تكاليف تطبيق IFRS 16.',
  ARRAY['IASB','الأصول المشفرة','العملات المستقرة','Stablecoins','FVTPL','IAS 7','IFRS 16','عقود الإيجار'],
  4,
  $$[
    {"q":"ما المشروعان اللذان أقرهما IASB في نوفمبر 2026؟","a":"مشروع لمحاسبة حيازة العملات المشفرة والعملات المستقرة، ومشروع لتخفيف تكاليف تطبيق IFRS 16 وتوضيح التنازلات الإيجارية."},
    {"q":"هل يمكن اعتبار العملات المستقرة معادلات نقدية؟","a":"يدرس المجلس تصنيف بعضها كمعادلات نقدية وفق IAS 7، ولم يصدر قرار نهائي بعد."}
  ]$$::jsonb,
  $$[
    {"q":"Which two projects did the IASB add in November 2026?","a":"A project on accounting for holdings of crypto-currencies and stablecoins, and a project to reduce the cost of applying IFRS 16 and clarify lease concessions."},
    {"q":"Can stablecoins be treated as cash equivalents?","a":"The Board is studying whether certain stablecoins qualify as cash equivalents under IAS 7; no final decision has been made yet."}
  ]$$::jsonb,
  $$[{"label":"IFRS Foundation — IASB","url":"https://www.ifrs.org/"}]$$::jsonb,
  $$[{"name":"IFRS Foundation","url":"https://www.ifrs.org/"}]$$::jsonb,
  'أحمد المدني', true, 'published', 'editorial', '2026-11-25 09:00:00+03'::timestamptz
),
(
  'ifrs-18-alternative-income-taxes-amendments-november-2026',
  (SELECT id FROM public.kb_categories WHERE slug = 'ifrs'),
  'تعديلات مرتقبة على معيار IFRS 18: تصنيف الضرائب والرسوم البديلة لضريبة الدخل',
  'Upcoming IFRS 18 Amendments: Classifying Taxes and Levies That Replace Income Tax',
  'يتجه IASB لتعديل IFRS 18 بما يتيح تبويب الأعباء الضريبية البديلة لضريبة الدخل ضمن فئة ضرائب الدخل بدلاً من المصروفات التشغيلية.',
  'The IASB plans to amend IFRS 18 so that taxes levied in place of income tax can be presented within income taxes rather than operating expenses.',
  $$[
    {"heading":"الملخص التنفيذي","paragraphs":[
      "استجابة لملاحظات مهنية واسعة حول مسودة وقرارات لجنة تفسيرات المعايير (IFRIC)، اتجه مجلس IASB لإدخال تعديلات على معيار IFRS 18 الجديد الخاص بالعرض والإفصاح.",
      "يتيح التعديل تصنيف بعض الأعباء الضريبية المفروضة كبدائل لضريبة الدخل ضمن فئة \"ضرائب الدخل\" في قائمة الأرباح أو الخسائر بدلاً من إدراجها ضمن المصروفات التشغيلية."
    ]},
    {"heading":"لماذا هذا التعديل؟","paragraphs":[
      "يعالج التعديل التباين في تبويب الالتزامات الضريبية المتشابهة اقتصادياً في القوائم المالية، والذي قد يؤثر على قابلية مقارنة الربح التشغيلي بين المنشآت."
    ]},
    {"heading":"شروط التطبيق","paragraphs":[
      "يشترط لتطبيق هذا التبويب وجود نص تشريعي يقضي بسداد الرسوم كبديل مباشر لضريبة الدخل.",
      "وسيُعد المجلس مسودة عرض رسمية (Exposure Draft) لهذه التعديلات لطرحها للنقاش المهني."
    ]},
    {"heading":"أبرز النقاط","paragraphs":[
      "1. معالجة التباين في تبويب الالتزامات الضريبية المتشابهة اقتصادياً.",
      "2. اشتراط نص تشريعي يقضي بسداد الرسوم كبديل مباشر لضريبة الدخل.",
      "3. إعداد مسودة عرض رسمية (Exposure Draft) للنقاش المهني."
    ]}
  ]$$::jsonb,
  $$[
    {"heading":"Executive Summary","paragraphs":[
      "Responding to broad professional feedback on IFRS Interpretations Committee (IFRIC) discussions, the IASB is moving to amend the new IFRS 18 Presentation and Disclosure standard.",
      "The amendment would allow certain taxes levied as substitutes for income tax to be classified within the \"income taxes\" category in the statement of profit or loss rather than as operating expenses."
    ]},
    {"heading":"Why the Amendment?","paragraphs":[
      "It addresses inconsistent classification of economically similar tax obligations, which can affect the comparability of operating profit across entities."
    ]},
    {"heading":"Conditions for Application","paragraphs":[
      "This classification would require legislation stating that the levy is paid as a direct substitute for income tax.",
      "The Board will prepare a formal Exposure Draft of these amendments for public consultation."
    ]},
    {"heading":"Key Points","paragraphs":[
      "1. Addressing inconsistent classification of economically similar tax obligations.",
      "2. Requiring legislation that makes the levy a direct substitute for income tax.",
      "3. Preparing a formal Exposure Draft for professional consultation."
    ]}
  ]$$::jsonb,
  'تعديلات IFRS 18: تصنيف الضرائب البديلة لضريبة الدخل',
  'تعديلات IASB المرتقبة على IFRS 18 لتبويب الضرائب والرسوم البديلة ضمن ضرائب الدخل، وشروط التطبيق ومسودة العرض.',
  ARRAY['IFRS 18','IASB','IFRIC','الضرائب البديلة','ضريبة الدخل','Exposure Draft','قائمة الأرباح أو الخسائر'],
  4,
  $$[
    {"q":"ما الذي يغيره تعديل IFRS 18 المرتقب؟","a":"يسمح بتبويب بعض الرسوم البديلة لضريبة الدخل ضمن فئة ضرائب الدخل بدلاً من المصروفات التشغيلية."},
    {"q":"ما شرط تطبيق هذا التبويب؟","a":"وجود نص تشريعي يقضي بسداد الرسم كبديل مباشر لضريبة الدخل."}
  ]$$::jsonb,
  $$[
    {"q":"What does the upcoming IFRS 18 amendment change?","a":"It allows certain levies that replace income tax to be presented within income taxes rather than operating expenses."},
    {"q":"What is the condition for this classification?","a":"Legislation must state that the levy is paid as a direct substitute for income tax."}
  ]$$::jsonb,
  $$[{"label":"PwC Viewpoint","url":"https://viewpoint.pwc.com/"}]$$::jsonb,
  $$[{"name":"PwC Viewpoint","url":"https://viewpoint.pwc.com/"}]$$::jsonb,
  'أحمد المدني', true, 'published', 'editorial', '2026-11-25 09:05:00+03'::timestamptz
),
(
  'ifrs-20-regulatory-assets-liabilities-compliance-roadmap',
  (SELECT id FROM public.kb_categories WHERE slug = 'ifrs'),
  'معيار IFRS 20 للأصول والالتزامات التنظيمية: خارطة طريق الامتثال للشركات المنظمة',
  'IFRS 20 Regulatory Assets and Regulatory Liabilities: A Compliance Roadmap for Rate-Regulated Entities',
  'معيار IFRS 20 يحل نهائياً محل IFRS 14 للشركات الخاضعة لتنظيم الأسعار كالمرافق والطاقة والمياه، ويسري إلزامياً من 1 يناير 2029.',
  'IFRS 20 permanently replaces IFRS 14 for rate-regulated entities such as utilities, energy, and water, effective 1 January 2029.',
  $$[
    {"heading":"الملخص التنفيذي","paragraphs":[
      "أصدر المجلس معيار IFRS 20 ليحل بصفة نهائية محل المعيار المؤقت IFRS 14، مستهدفاً الشركات العاملة في قطاعات تخضع لتنظيم أسعار خدماتها كالمرافق العامة والطاقة والمياه.",
      "يهدف المعيار إلى تقديم صورة عادلة لحقوق والتزامات المنشأة الناتجة عن فروق توقيت تسعير الخدمات مقابل الاعتراف بالإيرادات."
    ]},
    {"heading":"معالجة فروق التوقيت","paragraphs":[
      "يعالج المعيار \"فروق التوقيت\" بين تقديم الخدمة الخاضعة للتنظيم وبين تحصيل قيمتها من العملاء، فيُعترف بالأصول التنظيمية والالتزامات التنظيمية بما يعكس الحقوق والالتزامات الفعلية."
    ]},
    {"heading":"العلاقة مع IFRS 15 وتاريخ السريان","paragraphs":[
      "يكمل المعيار متطلبات الاعتراف بالإيرادات المنصوص عليها في IFRS 15 ولا يحل محلها.",
      "يصبح المعيار إلزامياً للفترات المالية التي تبدأ في أو بعد 1 يناير 2029 مع تشجيع التطبيق المبكر."
    ]},
    {"heading":"أبرز النقاط","paragraphs":[
      "1. معالجة فروق التوقيت بين تقديم الخدمة المنظمة وتحصيل قيمتها.",
      "2. المعيار يكمل متطلبات IFRS 15 للاعتراف بالإيرادات.",
      "3. السريان الإلزامي للفترات التي تبدأ في أو بعد 1 يناير 2029 مع تشجيع التطبيق المبكر."
    ]}
  ]$$::jsonb,
  $$[
    {"heading":"Executive Summary","paragraphs":[
      "The Board issued IFRS 20 to permanently replace the interim standard IFRS 14, targeting entities in sectors whose service prices are regulated, such as public utilities, energy, and water.",
      "The standard aims to present faithfully the rights and obligations arising from timing differences between service pricing and revenue recognition."
    ]},
    {"heading":"Addressing Timing Differences","paragraphs":[
      "The standard addresses \"timing differences\" between supplying regulated services and recovering their amounts from customers, recognising regulatory assets and regulatory liabilities that reflect the entity's actual rights and obligations."
    ]},
    {"heading":"Relationship with IFRS 15 and Effective Date","paragraphs":[
      "The standard supplements, rather than replaces, the revenue recognition requirements of IFRS 15.",
      "It is mandatory for annual periods beginning on or after 1 January 2029, with early application encouraged."
    ]},
    {"heading":"Key Points","paragraphs":[
      "1. Addressing timing differences between regulated service supply and recovery.",
      "2. Supplementing IFRS 15 revenue recognition requirements.",
      "3. Mandatory for periods beginning on or after 1 January 2029, with early application encouraged."
    ]}
  ]$$::jsonb,
  'IFRS 20 للأصول والالتزامات التنظيمية | خارطة الامتثال',
  'معيار IFRS 20 يحل محل IFRS 14 للشركات المنظمة: فروق التوقيت، العلاقة مع IFRS 15، والسريان من 1 يناير 2029.',
  ARRAY['IFRS 20','IFRS 14','IFRS 15','الأصول التنظيمية','الالتزامات التنظيمية','المرافق العامة','الطاقة','المياه'],
  4,
  $$[
    {"q":"ما المعيار الذي يحل محله IFRS 20؟","a":"يحل محل المعيار المؤقت IFRS 14 للأنشطة الخاضعة لتنظيم الأسعار."},
    {"q":"متى يسري IFRS 20؟","a":"للفترات المالية التي تبدأ في أو بعد 1 يناير 2029، مع تشجيع التطبيق المبكر."}
  ]$$::jsonb,
  $$[
    {"q":"Which standard does IFRS 20 replace?","a":"It replaces the interim standard IFRS 14 for rate-regulated activities."},
    {"q":"When is IFRS 20 effective?","a":"For annual periods beginning on or after 1 January 2029, with early application encouraged."}
  ]$$::jsonb,
  $$[{"label":"IFRS Foundation — IFRS 20","url":"https://www.ifrs.org/"}]$$::jsonb,
  $$[{"name":"IFRS Foundation","url":"https://www.ifrs.org/"}]$$::jsonb,
  'أحمد المدني', true, 'published', 'editorial', '2026-11-25 09:10:00+03'::timestamptz
)
ON CONFLICT (slug) DO UPDATE SET
  category_id = EXCLUDED.category_id,
  title_ar = EXCLUDED.title_ar,
  title_en = EXCLUDED.title_en,
  excerpt_ar = EXCLUDED.excerpt_ar,
  excerpt_en = EXCLUDED.excerpt_en,
  content_ar = EXCLUDED.content_ar,
  content_en = EXCLUDED.content_en,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  keywords = EXCLUDED.keywords,
  reading_minutes = EXCLUDED.reading_minutes,
  faq = EXCLUDED.faq,
  faq_en = EXCLUDED.faq_en,
  "references" = EXCLUDED."references",
  external_sources = EXCLUDED.external_sources,
  author_name = EXCLUDED.author_name,
  is_featured = EXCLUDED.is_featured,
  status = EXCLUDED.status,
  generation_source = EXCLUDED.generation_source,
  published_at = EXCLUDED.published_at;