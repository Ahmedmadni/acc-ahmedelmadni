import type { CmaStudyUnitCase, CmaTopicGuide } from "@/data/cma-guides";

/** Original bilingual lessons based on the supplied Gleim 2024 SU 13 outline. */
export const CMA_TOPIC_GUIDES_13: Record<string, CmaTopicGuide> = {
  "su13-budget-roles": {
    topicId: "su13-budget-roles",
    scope: {
      ar: "الوحدة 13، 13.1: التخطيط والرقابة والتحفيز والمشاركة والتراخي والمساءلة عن البنود القابلة للتحكم.",
      en: "SU 13 §13.1: planning, control, motivation, participation, slack and controllable responsibility.",
    },
    concepts: {
      ar: "الموازنة خطة كمية لفترة محددة تنسق المبيعات والموارد وتحدد مؤشرات للمقارنة مع الأداء الفعلي؛ وتتيح كشف نقص المادة أو النقد قبل وقوعه. يضع مجلس الإدارة والإدارة العليا الأهداف والقيود العامة، وتجمع لجنة الموازنة المقترحات وتراجع ترابطها، وتضيف مشاركة المديرين التنفيذيين معلومات التشغيل وتساعد قبول الهدف. قد تُدخل المشاركة تراخيًا بتخفيض إيراد متوقع أو رفع تكلفة مطلوبة حتى يسهل بلوغ المعيار. عند تقييم الأداء ابدأ بتعديل الموازنة للنشاط الفعلي ثم اسأل هل كان البند داخل نطاق تأثير المدير، بدل نسبة كل تغير سعري أو تغير طلب خارجي إليه.",
      en: "A budget is a period-specific quantitative plan that coordinates sales, resources and performance targets and can reveal future material or cash shortages. Board and senior management set broad goals and constraints; a budget committee reviews aligned proposals; operating-manager participation contributes local knowledge and ownership. Participation can also introduce slack by understating expected revenue or padding needed expense to make targets easier. For performance evaluation, first flex the budget to actual activity, then assess whether the manager could influence the item rather than attributing every market price or demand shift to them.",
    },
    lessonSections: [
      {
        heading: {
          ar: "من التعليمات إلى الموازنة المعتمدة",
          en: "From guidance to approved departmental plans",
        },
        body: {
          ar: "تُصدر لجنة الموازنة الجدول الزمني ودليل الفرضيات وتحدد سعرًا مرجعيًا ونطاق الزيادة والطاقة الممكنة. يضع مدير المبيعات وحداته المحتملة، ويبني عليها مدير الإنتاج مواده وأجوره ثم يقدم مسؤول الخزانة توقيت التحصيل والإنفاق. تعالج اللجنة التضارب بين أهداف الإدارات بدل جمع أرقام لا يمكن تحقيقها معًا. تتيح الموازنة مشاركة المعلومات والتحفيز، لكن إجبار هدف مثالي غير قابل للتحقيق قد يشجع التساهل أو إخفاء المخاطر؛ يحتاج الهدف إلى صعوبة معقولة ومسؤول معلوم.",
          en: "A budget committee issues a calendar and common assumptions, including reference prices, expected inflation and practical capacity. Sales proposes achievable units, production derives materials and labor, and treasury schedules receipts and payments. The committee resolves contradictions rather than summing departmental requests that cannot coexist. Participation shares knowledge and motivation, but impossible targets can encourage concealment; targets need attainable challenge and clear ownership.",
        },
      },
      {
        heading: {
          ar: "افصل تراخي التقدير عن خطأ التنبؤ",
          en: "Distinguish deliberate slack from forecast error",
        },
        body: {
          ar: "إذا عرف مدير أن طلب العملاء المتوقع 10,000 وحدة وطلب تخصيص موارد تكفي 12,000 دون سبب، فقد نشأ تراخٍ 2,000 وحدة؛ أما زيادة مفاجئة في سعر المورد بعد اعتماد خطة مبنية على معلومات موثوقة فلا تثبت تراخيًا. قارن الفرضيات بمصادر مستقلة وتاريخ التقدير، وراجع تغيرات السوق دوريًا. لا تحاسب مدير إنتاج على انخفاض المبيعات الخارجي أو على استهلاك مستودع يتخذ قراره مدير آخر؛ حدد نطاق السيطرة المشترك عند وجود اعتماد متبادل.",
          en: "If a manager reasonably expects 10,000 units but requests resources for 12,000 without support, 2,000 units may be deliberate slack. A supplier price shock after an evidence-based plan is a forecast change, not proof of padding. Compare assumptions with independent data and their dated rationale and refresh forecasts. Do not hold production solely responsible for an external sales collapse or for warehouse spending controlled elsewhere; document shared responsibility where decisions overlap.",
        },
      },
    ],
    workflow: {
      ar: "حدد الهدف والزمن وافتراضات موحدة؛ اجمع خطط الإدارات بمشاركة منضبطة؛ افحص الطاقة والمصادر والتراخي؛ اعتمد الترابط ثم قارن الفعلي بموازنة ملائمة للنشاط ومسؤولية كل مدير.",
      en: "Set objectives, calendar and common assumptions; gather informed departmental input; test capacity, evidence and slack; approve a coordinated budget and compare actuals with activity-adjusted controllable targets.",
    },
    pitfalls: {
      ar: "النتيجة المواتية لا تثبت كفاءة إذا خُفّض الهدف عمدًا. المصروف الأعلى بسبب حجم أكبر ليس بالضرورة سوء إنفاق. الموازنة لا تلغي الحاجة لتوقعات محدثة واستجابة للمعلومات الجديدة.",
      en: "A favorable outcome does not prove efficiency if the target was padded. More total cost from greater activity is not necessarily poor spending. A fixed budget does not replace updated forecasts and responses.",
    },
    practicalCase: {
      titleAr: "تحديد تراخٍ محتمل",
      titleEn: "Identify possible budgetary slack",
      scenarioAr:
        "أظهرت طلبات موثوقة مبيعات 12,000 وحدة، لكن مديرًا قدم موازنة مبيعات 10,000 ليضمن مكافأته، وطلب مواد تكفي 12,000. ما مقدار التراخي في رقم المبيعات وما اختبار الرقابة؟",
      scenarioEn:
        "Reliable orders indicate 12,000 units, but a manager budgets sales of 10,000 to secure a bonus while requesting materials for 12,000. What is the apparent sales slack and how should the committee test it?",
      solutionAr:
        "الفرق 2,000 وحدة أو 16.67% من 12,000 المتوقع، ما لم توجد مرتجعات أو مخزون مستهدف مبرر. طابق المبيعات المقدرة مع أوامر العملاء وموازنة الإنتاج والمواد وصحح الحافز؛ لا تخلط شراء مخزون مخطط مع مبيعات مؤكدة بلا فحص.",
      solutionEn:
        "The gap is 2,000 units, 16.67% of evidence-based expected sales, subject to any justified inventory or return assumptions. Reconcile orders, sales, production and material plans and review incentives; material purchases alone are not conclusive without their inventory policy.",
    },
  },
  "su13-standards": {
    topicId: "su13-standards",
    scope: {
      ar: "الوحدة 13، 13.2: تكلفة معيارية مسبقة ومعايير مثالية وعملية، ومقارنة أداء بموازنة مرنة.",
      en: "SU 13 §13.2: preset standard costs, ideal versus practical standards and flexible performance comparison.",
    },
    concepts: {
      ar: "المعيار كمية أو معدل تكلفة متوقع لوحدة المدخلات قبل الإنتاج؛ يحول حجم الإنتاج المخطط إلى تكلفة معيارية للموازنة. المعيار المثالي يفترض كفاءة كاملة بلا توقف أو تلف وقد يُستخدم هدفًا نظريًا للتحسين، لكنه غالبًا غير ملائم لتقييم عامل في ظروف واقعية. العملي يسمح بهدر وتوقفات طبيعية يمكن الوصول إليها بإدارة جيدة، فيوفر هدفًا تحفيزيًا قابلًا للمساءلة. بعد تحقق الإنتاج، احسب ما كان ينبغي استهلاكه لهذا الإنتاج الفعلي وقارنه بالاستهلاك الحقيقي؛ لا تقارن تكلفة 1,200 وحدة بتكلفة معيارية لـ1,000 فقط وتنسب كل الفرق للكفاءة.",
      en: "A standard specifies expected input quantities and prices before work begins and turns planned output into a cost budget. An ideal standard assumes perfection, no waste and no downtime; it may serve a theoretical improvement target but rarely a fair ordinary performance benchmark. A practical standard allows normal unavoidable loss and downtime under sound operations. When output is known, compute allowed inputs for actual production and compare with actual use; comparing 1,200-unit spending with a 1,000-unit static cost confuses volume with efficiency.",
    },
    lessonSections: [
      {
        heading: {
          ar: "كمية مسموحة وتكلفة معيارية للفعلي",
          en: "Standard quantity allowed for actual output",
        },
        body: {
          ar: "لو معيار المواد 2.5 كغ للوحدة وسعرها 8، فإن إنتاج 1,200 وحدة يسمح 3,000 كغ بتكلفة معيارية 24,000. إذا استُخدم 3,150 كغ بسعر فعلي 8.20، فقيمة الشراء المستهلكة 25,830. الفرق الكلي 1,830 غير مواتٍ، ويمكن فصله إلى سعر 3,150×(8.20−8)=630 واستخدام 8×(3,150−3,000)=1,200. هذه الصياغة توضح أهمية المعيار في الرقابة؛ تفاصيل انحرافات المواد تُدرس في الوحدة 15.",
          en: "With a standard of 2.5 kg per finished unit at 8 per kg, output of 1,200 permits 3,000 kg costing 24,000. Actual consumption of 3,150 kg at 8.20 costs 25,830. Total adverse difference is 1,830, separable into price 3,150×(8.20−8)=630 and usage 8×(3,150−3,000)=1,200. The standard is the performance baseline; detailed materials variances follow in Unit 15.",
        },
      },
      {
        heading: { ar: "متى تراجع المعيار؟", en: "When a standard needs revision" },
        body: {
          ar: "ابنِ الكمية بمواصفات هندسية وقدرة عملية، والسعر من اتفاقات الموردين ومزيج المواد المتوقع؛ ولا تكرر فاقد السنة الماضية بلا مساءلة. عند تغيير تصميم المنتج أو معدل أجور ملزم أو تقنية العملية، راجع المعيار بتاريخ واضح حتى لا تُظهر المقارنة انحرافًا سببه معيار عفا عليه الزمن. لا تغيّر المعيار بعد ظهور النتائج لمجرد إخفاء ضعف أداء قابل للتحكم.",
          en: "Build input quantities from engineering and practical conditions, and prices from supplier agreements and expected mix rather than accepting historic waste as normal. Revise a standard prospectively with a clear effective date when design, wage contract or technology changes. Do not rewrite it after observing actual results merely to conceal a controllable performance issue.",
        },
      },
    ],
    workflow: {
      ar: "اجمع مواصفة المدخل والسعر والطاقة الواقعية؛ حدد معيارًا عمليًا؛ احسب المسموح للإنتاج الفعلي؛ قارن الفعلي بالمسموح وحلل أسباب السعر والاستخدام؛ راجع المعيار عند تغير الظروف لا لتجميل النتائج.",
      en: "Document input specifications, expected prices and realistic capacity; set an attainable standard; calculate allowed cost for actual output; analyze price and usage causes; revise standards for changed conditions, not cosmetic performance.",
    },
    pitfalls: {
      ar: "المثالي ليس دائمًا محفزًا، والفعلي السابق ليس معيارًا تلقائيًا. لا تستخدم كمية الإنتاج المخطط مع تكلفة فعلية لعدد وحدات مختلف. فرق الموازنة الساكنة قد يعود للحجم لا إسراف العامل.",
      en: "Ideal is not always motivating and last year's actual is not automatically a standard. Do not compare budget inputs for planned output with actual cost at different output. A static-budget difference may be volume, not waste.",
    },
    practicalCase: {
      titleAr: "المواد المعيارية المسموح بها",
      titleEn: "Allowed material for actual production",
      scenarioAr:
        "معيار المادة 3 كغ لكل وحدة بسعر 5 للكغ. أُنتج 1,100 وحدة واستهلكت 3,500 كغ بسعر 5.20. احسب التكلفة المسموحة والفعلية والفرق الكلي.",
      scenarioEn:
        "Material standard is 3 kg per finished unit at 5 per kg. Output is 1,100 units; actual input is 3,500 kg at 5.20. Find allowed cost, actual cost and the total difference.",
      solutionAr:
        "المسموح 1,100×3=3,300 كغ؛ التكلفة 16,500. الفعلي 3,500×5.20=18,200؛ الفرق 1,700 غير مواتٍ: 700 سعر (3,500×0.20) و1,000 استخدام ((3,500−3,300)×5).",
      solutionEn:
        "Allowed =1,100×3=3,300 kg, costing 16,500. Actual =3,500×5.20=18,200; adverse difference =1,700: price 700 (3,500×0.20) plus usage 1,000 (200×5).",
    },
  },
  "su13-master-budget": {
    topicId: "su13-master-budget",
    scope: {
      ar: "الوحدة 13، 13.3: تسلسل الموازنة الشاملة التشغيلية والمالية وربط القوائم المتوقعة.",
      en: "SU 13 §13.3: master-budget sequence across operating and financial schedules and forecast statements.",
    },
    concepts: {
      ar: "تجمع الموازنة الشاملة خطة التشغيل وخطة التمويل في فترة واحدة. يبدأ نموذج التصنيع عادة بموازنة مبيعات الوحدات والسعر، ثم موازنة الإنتاج ومخزون التام المستهدف، فالاحتياج ومشتريات المواد، والأجور والصناعية والمخزون والتكلفة والمصروفات غير الصناعية. يحول جدول تحصيل المبيعات ومدفوعات المواد والأجور والتشغيل والرأسمال هذه الخطة على أساس الاستحقاق إلى موازنة نقدية، ثم تعد قائمة دخل ومركز مالي وتدفقات تقديرية متسقة. لا تساوِ إيراد المبيعات بتحصيل الشهر ولا تكلفة شراء المواد بما يدخل تكلفة المبيعات تلقائيًا.",
      en: "A master budget combines operating and financing plans for a common period. A manufacturer usually begins with units and price in the sales budget, then derives production and target finished inventory, materials needs and purchases, labor, factory overhead, inventory/COGS and nonmanufacturing expenses. Collections and payment schedules convert these accrual-based plans into cash timing, including capital spending and financing. Pro forma income, financial position and cash flows then reconcile the schedules. Monthly sales revenue is not necessarily monthly receipts, nor is a material purchase automatically that month's COGS.",
    },
    lessonSections: [
      {
        heading: { ar: "اعتماد متتابع بين الجداول", en: "One schedule feeds the next" },
        body: {
          ar: "إذا كانت مبيعات الشهر 1,000 وحدة ومخزون آخر التام المستهدف 200 ومخزون أوله 150، فالإنتاج المطلوب 1,050. إن احتاجت الوحدة 2 كغ مادة فاحتياج الإنتاج 2,100 كغ، ثم تُضاف مواد آخر المدة المستهدفة ويطرح مخزون أول المواد لإيجاد المشتريات. تُحسب الأجور والصناعية على الإنتاج أو محركاتهما، فيما ترتبط عمولة البيع بالمبيعات. يؤدي إدخال إنتاج 1,000 بدل 1,050 في جميع الجداول إلى خطأ متسلسل، لذلك اربط خلايا المصدر والتحقق من رصيد كل مخزون.",
          en: "If forecast sales are 1,000 units, desired finished inventory 200 and opening finished inventory 150, production required is 1,050. At 2 kg per unit, manufacturing needs 2,100 kg; then add desired material ending stock and subtract opening stock to derive purchases. Labor and overhead follow production or their drivers; selling commissions follow sales. Using 1,000 rather than 1,050 as the production basis propagates through every schedule, so link source cells and reconcile each inventory rollforward.",
        },
      },
      {
        heading: { ar: "اختبار توازن الموازنة", en: "Reconcile the operating and financing plans" },
        body: {
          ar: "اختبر النقد بداية + تحصيلات − مدفوعات ± اقتراض/سداد = نقد نهاية. طابق ذمم نهاية الفترة مع إيرادات ائتمانية لم تُحصّل، والدائنين مع مشتريات لم تُسدّد. يظهر الإهلاك في الربح وقيمة الأصول لكنه ليس دفع نقد إضافيًا؛ ويظهر شراء آلة في النقد والأصول، وليس مصروف تشغيل فوريًا. تحتاج قائمة المركز المالي التقديرية إلى توازن الأصول مع الخصوم وحقوق الملكية، وإلا فهناك جدول ناقص أو افتراض غير متسق.",
          en: "Check opening cash + collections − payments ± financing = ending cash. Ending receivables reflect credit sales not yet collected; payables reflect unpaid purchases. Depreciation affects profit and carrying value but is not another cash outflow; a machine purchase changes cash and noncurrent assets without becoming ordinary operating expense at once. The pro forma balance sheet must satisfy assets = liabilities + equity, or a schedule/assumption needs correction.",
        },
      },
    ],
    workflow: {
      ar: "ثبّت افتراضات السعر والطلب والمخزون؛ ابنِ المبيعات ثم الإنتاج والمدخلات والتشغيل؛ أعد جداول التحصيل والمدفوعات والاستثمار؛ عالج التمويل الأدنى؛ أخرج القوائم وطابق الأرصدة.",
      en: "Fix sales, prices and stock policies; build sales then production and operating inputs; schedule collections, payments and investments; arrange financing; prepare and reconcile projected statements.",
    },
    pitfalls: {
      ar: "لا تستخدم رقم مشتريات المادة بدل المستخدم في تكلفة المبيعات. لا تنقل الإيراد كله إلى صندوق الشهر إذا كان التحصيل آجلًا. لا تضف الإهلاك إلى المدفوعات النقدية بعد شرائك الأصل.",
      en: "Do not use material purchases as COGS consumed. Credit revenue is not all this month's cash. Do not add noncash depreciation as another payment after the equipment purchase.",
    },
    practicalCase: {
      titleAr: "حساب إنتاج الموازنة الشاملة",
      titleEn: "Master-budget production schedule",
      scenarioAr:
        "مبيعات شهر متوقعة 4,000 وحدة؛ مخزون تام أوله 600، والمستهدف آخره 800؛ المواد 3 كغ لكل وحدة، ومخزون المادة أولًا 2,000 كغ والمستهدف آخرًا 2,500 كغ. كم إنتاجًا ومشتريات مادة بالكغ؟",
      scenarioEn:
        "Forecast sales are 4,000 units; finished inventory opens at 600 and should end at 800. Each produced unit needs 3 kg of material; material opens at 2,000 kg and should end at 2,500. Find planned output and material purchases in kg.",
      solutionAr:
        "الإنتاج =4,000+800−600=4,200 وحدة؛ المادة للإنتاج =4,200×3=12,600 كغ؛ المشتريات =12,600+2,500−2,000=13,100 كغ.",
      solutionEn:
        "Production =4,000+800−600=4,200 units; material for production =4,200×3=12,600 kg; purchases =12,600+2,500−2,000=13,100 kg.",
    },
  },
  "su13-budget-methods": {
    topicId: "su13-budget-methods",
    scope: {
      ar: "الوحدة 13، 13.4: التقليدية والصفرية والمبنية على الأنشطة والمتحركة مع تمييز الثابتة والمرنة.",
      en: "SU 13 §13.4: incremental, zero-based, activity-based and rolling approaches with static versus flexible budgets.",
    },
    concepts: {
      ar: "الموازنة التقليدية تزيد أو تنقص أساس السنة السابقة، وهي سريعة لكنها قد ترسخ الهدر. الصفرية تطلب تبرير الأنشطة وحزم القرار وترتيبها من البداية بدل افتراض استمرار التمويل، وتستهلك وقتًا ومعلومات أكثر. المبنية على الأنشطة تبدأ بحجم مسبب كل نشاط وتكلفة مجمعه، فتوضح دعم الدفعات والطلبات أكثر من توزيع موحد. المتحركة تضيف شهرًا أو ربعًا جديدًا عند انقضاء مثيله وتحافظ على أفق تخطيط مستمر. الثابتة تُعتمد لحجم واحد، بينما المرنة تعيد تقدير التكلفة المتغيرة لحجم الإنتاج الفعلي للمقارنة العادلة؛ هذا تعديل مستوى نشاط، لا إعادة كتابة الهدف لإخفاء نتيجة.",
      en: "An incremental budget adjusts last year's base quickly but may perpetuate waste. Zero-based budgeting justifies decision packages from the ground up and ranks activities rather than automatically funding them, at a higher information and time cost. Activity-based budgeting forecasts driver volumes and pool rates, revealing setup and order demands more clearly than one blanket allocation. A rolling budget adds a new month/quarter as an old one ends to preserve planning horizon. A static budget targets one activity level; a flexible budget resets variable allowances to actual output for fair comparison, without rewriting performance expectations after the fact.",
    },
    lessonSections: [
      {
        heading: { ar: "اختر الطريقة حسب نوع القرار", en: "Match the method to the decision" },
        body: {
          ar: "في فريق دعم ذي برامج قديمة يصعب إثبات منفعتها، اطلب تبريرًا صفريًا لكل نشاط، ومخرجاته والبدائل الأدنى تكلفة. في مصنع متعدد الطرازات ومحركات إعداد مختلفة، توقع عدد الإعدادات والطلبات والفحوص بكل منتج وأعد مجمعات نشاط. عند تقلب طلب السوق سريعًا حدّث الأفق كل شهر مع الإبقاء على قواعد مقارنة معلنة. قد تجمع الشركة أكثر من طريقة؛ فموازنة مشروع جديدة صفرية، ومصروف كهرباء مصنع يُحسب بالأنشطة أو حجم مرن، وخطة السيولة تُحدّث متحركًا.",
          en: "For a support team with legacy programs of uncertain benefit, require zero-based justification of each activity, output and lower-cost alternatives. For multiple product designs with different setup demands, forecast setup, order and inspection drivers by product. For volatile demand, extend the forecast horizon monthly under documented comparison rules. Organizations can combine methods: a new project is justified from zero, factory utilities are flexed with activity, and liquidity is updated on a rolling basis.",
        },
      },
      {
        heading: {
          ar: "قارن الحجم نفسه قبل الحكم على الأداء",
          en: "Compare like activity volumes",
        },
        body: {
          ar: "إذا قدرت تكلفة مركز بـ20,000 ثابت و5 للوحدة عند 2,000 وحدة، فالموازنة الثابتة 30,000. عند تحقيق 2,400 وحدة تصير المرنة 20,000+5×2,400=32,000. تكلفة فعلية 33,500 تزيد المرنة 1,500، لا 3,500؛ فرق 2,000 بين المرنة والثابتة سببه زيادة 400 وحدة عند معيار 5. يحتاج الحكم النهائي فحص إنتاج الوحدة وجودتها وتحميل التكاليف على المسؤول الصحيح.",
          en: "If departmental cost is budgeted at 20,000 fixed plus 5 per unit for 2,000 units, the static allowance is 30,000. At actual output of 2,400, the flexible allowance becomes 20,000+5×2,400=32,000. Actual spending of 33,500 is 1,500 above flexed budget, not 3,500; the 2,000 static-to-flex difference comes from 400 extra units at 5 each. Investigate output quality and controllability before judging a manager.",
        },
      },
    ],
    workflow: {
      ar: "حدد بنودًا ثابتة ومتغيرة ومسببات النشاط؛ اختر أسلوب التبرير والتحديث لكل قسم؛ ضع موازنة ثابتة معتمدة؛ أعد المقارنة المرنة للإنتاج الفعلي؛ افصل أثر الحجم والإنفاق وراجع الفرضيات.",
      en: "Identify fixed and variable costs and drivers; select justification and update methods by area; approve a static plan; flex to actual output; separate volume and spending and refresh assumptions.",
    },
    pitfalls: {
      ar: "الصفرية لا تعني إلغاء كل التكاليف، بل تبريرها. الموازنة المتحركة لا تعني بذاتها موازنة مرنة؛ الأولى تغيّر الأفق الزمني والثانية حجم النشاط المرجعي. لا تُحمّل فرق حجم مفيد لمدير القسم كإسراف.",
      en: "Zero-based does not mean every cost becomes zero; it requires justification. Rolling changes the forecast horizon, while flexible changes the activity denominator. Do not label the cost of higher useful output as waste.",
    },
    practicalCase: {
      titleAr: "تحليل ثابتة ومرنة",
      titleEn: "Static versus flexible spending",
      scenarioAr:
        "التكلفة المخططة 15,000 ثابتة + 4 لكل وحدة عند 3,000 وحدة. تحقق إنتاج 3,500 وحدة وتكلفة فعلية 30,200. احسب الثابتة والمرنة وانحراف الإنفاق.",
      scenarioEn:
        "Planned cost is 15,000 fixed plus 4 per unit at 3,000 units. Actual output is 3,500 units and actual cost 30,200. Compute static and flexible allowances and the spending difference.",
      solutionAr:
        "الثابتة 15,000+12,000=27,000؛ المرنة 15,000+14,000=29,000؛ الفعلي يزيد المرنة 1,200 غير مواتٍ؛ الزيادة بين المرنة والثابتة 2,000 سببها الحجم، وليس كلها إسرافًا.",
      solutionEn:
        "Static =15,000+12,000=27,000; flexible =15,000+14,000=29,000; actual exceeds flexible by 1,200 unfavorable. The 2,000 flex-over-static change is output volume, not automatically waste.",
    },
  },
};

export const CMA_STUDY_UNIT_CASES_13: CmaStudyUnitCase[] = [
  {
    studyUnit: 13,
    title: {
      ar: "حالة مترابطة: الإنتاج والمعيار والموازنة المرنة",
      en: "Linked case: output, standards and flexible budget",
    },
    scenario: {
      ar: "تتوقع منشأة بيع 5,000 وحدة، ومخزون التام أولًا 700 والمستهدف آخرًا 900. معيار المواد 2 كغ للوحدة بسعر 6 للكغ. أنتجت فعلًا 5,200 وحدة واستخدمت 10,600 كغ بسعر 6.10، وبلغت التكلفة الفعلية لقسم مستقل 39,000؛ موازنته 18,000 ثابتة +4 لكل وحدة عند خطة إنتاج 5,200 وحدة. افصل تقييم المواد والقسم.",
      en: "A company expects sales of 5,000 units, opening finished inventory 700 and target ending 900. Material standard is 2 kg per unit at 6/kg. Actual output is 5,200 units using 10,600 kg at 6.10, and a separate department incurs 39,000. That department's plan is 18,000 fixed plus 4 per unit for 5,200 planned units. Assess materials and department separately.",
    },
    tasks: [
      {
        prompt: {
          ar: "احسب الإنتاج المخطط وهل يطابق الإنتاج الفعلي.",
          en: "Calculate planned production and compare it with actual output.",
        },
        solution: {
          ar: "المخطط 5,000+900−700=5,200 وحدة؛ يساوي الفعلي.",
          en: "Required production =5,000+900−700=5,200 units, equal to actual output.",
        },
      },
      {
        prompt: {
          ar: "احسب المواد المعيارية للفعلي والفرق الكلي عن التكلفة الفعلية.",
          en: "Find allowed material and total cost difference from actual.",
        },
        solution: {
          ar: "المسموح 5,200×2=10,400 كغ بتكلفة 62,400. الفعلي 10,600×6.10=64,660؛ الفرق 2,260 غير مواتٍ، منه 1,060 سعر و1,200 استخدام.",
          en: "Allowed 10,400 kg costing 62,400. Actual =10,600×6.10=64,660; 2,260 unfavorable, split into 1,060 price and 1,200 usage.",
        },
      },
      {
        prompt: {
          ar: "احسب موازنة القسم المرنة وانحراف الإنفاق.",
          en: "Find the department's flexible budget and spending difference.",
        },
        solution: {
          ar: "عند 5,200 وحدة المرنة =18,000+4×5,200=38,800؛ الفعلي 39,000، أي 200 غير مواتٍ. لا تخلطها بفروق المواد في مركز آخر.",
          en: "At 5,200 units flexible =18,000+4×5,200=38,800; actual 39,000 is 200 unfavorable. Do not combine with material variances of a different responsibility center.",
        },
      },
    ],
  },
];
