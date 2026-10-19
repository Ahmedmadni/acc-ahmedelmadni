import type { CmaStudyUnitCase, CmaTopicGuide } from "@/data/cma-guides";

/** Original bilingual teaching material based on the supplied 2024 Gleim SU 5 and SU 6. */
export const CMA_TOPIC_GUIDES_5_6: Record<string, CmaTopicGuide> = {
  "su5-revenue-contracts": {
    topicId: "su5-revenue-contracts",
    scope: {
      ar: "الوحدة 5، 5.1: نموذج ASC 606 ذي الخطوات الخمس، شروط العقد، الأداء المتميز، السعر والعرض.",
      en: "SU 5 §5.1: ASC 606's five steps, contract criteria, distinct performance, transaction price and presentation.",
    },
    concepts: {
      ar: "حدد عقدًا معتمدًا ذا مضمون تجاري وحقوق وشروط سداد واضحة، مع احتمال تحصيل المقابل المستحق. إن لم تتحقق الشروط فقد يبقى النقد المقبوض التزامًا إلى حين تحقق شروط الاعتراف المناسبة. ميّز السلعة أو الخدمة التي يمكن للعميل الانتفاع بها منفردة وكانت وعدًا مستقلًا في سياق العقد؛ سلسلة خدمات متماثلة قد تعد التزامًا واحدًا. حدد سعر الصفقة بعد تقدير المقابل المتغير مع قيد عدم احتمال حدوث رد جوهري، واستبعد ضريبة المبيعات المحصلة للغير. عند وجود عنصر تمويل جوهري اعرض فائدته منفصلة عن الإيراد. وزع السعر على أساس الأسعار المستقلة النسبية، ثم اعترف بحصة كل التزام عند انتقال السيطرة. المقبوض قبل الأداء التزام عقد؛ حق المقابل المشروط بأداء آخر أصل عقد، والحق غير المشروط ذمة مدينة. تعديل العقد يعد عقدًا مستقلًا عندما تكون الإضافة متميزة والسعر يعكس سعرها المستقل.",
      en: "Identify an approved, commercial contract with identifiable rights and payment terms and probable collection of the entitled consideration; receipts before qualifying recognition can remain a liability. A promise is distinct when the customer can benefit from it and it is separately identifiable in the contract; a qualifying series can be one obligation. Determine expected consideration, constrain variable amounts to avoid a significant reversal, exclude sales taxes collected for others and show any significant financing interest separately. Allocate the price by relative standalone prices; recognize each allocated amount as control transfers. Customer prepayments create a contract liability; a conditional right after performance is a contract asset and an unconditional right is a receivable. A modification is separate when it adds distinct promises at their standalone prices.",
    },
    workflow: {
      ar: "تحقق من شروط العقد والتحصيل؛ حدد الوعود المتميزة؛ قدر المقابل الثابت والمتغير والتمويل؛ احسب مجموع الأسعار المستقلة وخصص الثمن بنسبة كل منها؛ حدد توقيت نقل السيطرة؛ سوِّ أصل/التزام العقد والذمم.",
      en: "Verify contract criteria and collectibility; identify distinct promises; estimate fixed and constrained variable consideration and financing; allocate on relative standalone prices; test control transfer for each promise; reconcile contract assets, liabilities and receivables.",
    },
    pitfalls: {
      ar: "لا تساوِ بين استلام النقد واكتساب الإيراد، ولا تدخل الضريبة المحصلة لحساب الحكومة ضمن السعر. لا تخصص ثمن الحزمة بالتساوي تلقائيًا، ولا تسمّ حقًا معلقًا على شرط غير زمني ذمة مدينة.",
      en: "Cash receipt alone does not earn revenue. Sales tax collected for a government is not transaction price. Equal allocation of a bundle is not automatic; a right contingent on more than time is not a receivable.",
    },
    practicalCase: {
      titleAr: "توزيع حزمة جهاز وخدمة",
      titleEn: "Allocate a device and service bundle",
      scenarioAr:
        "حزمة نقدية بسعر 120,000 تتضمن جهازًا يسلم الآن وصيانة متميزة 12 شهرًا. السعران المستقلان 100,000 و25,000 على الترتيب؛ مضت 3 أشهر خدمة منتظمة. احسب الإيراد والالتزام المتبقي.",
      scenarioEn:
        "A 120,000 prepaid bundle includes a device delivered now and a distinct 12-month service. Standalone prices are 100,000 and 25,000; three even service months have elapsed. Calculate revenue and the remaining liability.",
      solutionAr:
        "مجموع الأسعار 125,000. يخصص للجهاز 120,000×100/125=96,000؛ وللصيانة 24,000. إيراد الصيانة 24,000×3/12=6,000، وإجمالي الإيراد 102,000، ويبقى التزام عقد 18,000.",
      solutionEn:
        "Combined standalone prices =125,000. Device allocation =120,000×100/125=96,000; service =24,000. Three months earn 6,000, total revenue is 102,000, and remaining contract liability is 18,000.",
    },
  },
  "su5-over-time": {
    topicId: "su5-over-time",
    scope: {
      ar: "الوحدة 5، 5.2: معايير الإنجاز على مدى الزمن والقياس بالمدخلات أو المخرجات وتسوية التقديرات.",
      en: "SU 5 §5.2: over-time criteria, input and output measures and revised progress estimates.",
    },
    concepts: {
      ar: "يكفي شرط واحد للإثبات على مدى الزمن: يستهلك العميل المنفعة بالتزامن مع الأداء؛ أو يسيطر على أصل ينشأ أو يتحسن؛ أو يكون الأصل بلا استخدام بديل للمنشأة مع حق واجب النفاذ في مقابل الأداء المنجز. وإلا فالإثبات عند انتقال السيطرة في نقطة زمنية. بعد تحقق الشرط، اختر مقياس تقدم يصور أداء نقل السيطرة: تكلفة الإنجاز المؤهلة أو ساعات العمل كمدخلات، أو المراحل/الوحدات المنجزة كمخرجات. في التكلفة إلى التكلفة، التقدم = التكاليف المؤهلة المتراكمة ÷ تقدير إجماليها المحدث؛ وإيراد الفترة = الإيراد المتراكم المستحق − المعترف به سابقًا. استبعد الهدر غير المعتاد والتكاليف غير المرتبطة من مقياس التقدم ولا تخلط بينها وبين معالجة مصروفها. إذا تعذر قياس التقدم بصورة معقولة مع توقع استرداد التكلفة، قد يقتصر الإيراد على التكلفة القابلة للاسترداد دون ربح مؤقتًا. راجع توجيه خسائر العقود الذي ينطبق على نوع العقد بدل افتراض قاعدة عامة لكل العقود.",
      en: "Over-time recognition needs one condition: the customer consumes benefits as performance occurs; controls an asset as created or enhanced; or receives a nonalternative-use asset with an enforceable right to payment for work to date. Otherwise use point-in-time control. Once eligible, select an input measure (qualifying costs or labor hours) or output measure (milestones or units) that depicts transfer. Cost-to-cost progress is cumulative eligible cost divided by revised total eligible cost; current revenue is newly calculated cumulative revenue less previously reported revenue. Exclude abnormal inefficiencies and unrelated expenditures from progress without assuming their expense treatment disappears. When reliable progress cannot yet be measured but costs are expected to be recovered, revenue may initially be limited to recoverable costs. Assess contract-loss rules applicable to the contract rather than assuming every ASC 606 contract uses the same loss model.",
    },
    workflow: {
      ar: "اختبر المعايير الثلاثة؛ اختر مقياس تقدم موثوقًا؛ استبعد التكاليف غير الممثلة للإنجاز؛ حدث التكلفة الإجمالية المتوقعـة؛ احسب الإيراد المتراكم ثم اطرح السابق؛ طابق التكلفة ومركز العقد وافحص متطلبات الخسارة.",
      en: "Test the three over-time criteria; choose a faithful progress measure; remove non-progress inputs; update total expected cost; derive cumulative revenue and subtract prior revenue; reconcile cost, contract position and any applicable loss provision.",
    },
    pitfalls: {
      ar: "الفوترة أو تحصيل دفعة مقدمة لا يقيسان التقدم بذاتهما، إلا في تسهيل حق الفوترة عند ارتباط المبلغ مباشرةً بقيمة الأداء. لا تستخدم تقدير تكلفة السنة الأولى في السنة الثانية بعد مراجعته؛ ولا تعترف بإجمالي الإيراد المتراكم مرة ثانية.",
      en: "Billing or a customer advance is not by itself progress; a right-to-invoice expedient needs amounts directly corresponding to delivered value. Use revised total costs in later years and subtract revenue already recorded.",
    },
    practicalCase: {
      titleAr: "إعادة تقدير عقد على مدى سنتين",
      titleEn: "Two-year construction estimate revision",
      scenarioAr:
        "عقد مؤهل للإثبات على مدى الزمن بقيمة 900,000. في السنة الأولى تكلفة مؤهلة 180,000 والمتوقع الكلي 600,000. في الثانية أصبحت التكلفة المتراكمة 420,000 والمتبقي المتوقع 280,000. احسب إيراد وربح كل سنة بافتراض أن التكاليف كلها مصروفات العقد.",
      scenarioEn:
        "A qualifying over-time contract is priced at 900,000. Year-one eligible cost is 180,000 and expected total cost 600,000. In year two cumulative cost is 420,000 with 280,000 expected to remain. Find revenue and gross profit for each year; all incurred costs are contract expenses.",
      solutionAr:
        "الأولى 180/600=30%؛ الإيراد 270,000 والربح 90,000. الثانية الإجمالي المحدث 700,000 والتقدم 420/700=60%؛ الإيراد المتراكم 540,000، وإيراد الثانية 270,000؛ تكلفتها 240,000 وربحها 30,000.",
      solutionEn:
        "Year one: 30% progress, 270,000 revenue, 90,000 profit. Year two: revised total cost 700,000; progress 60%, cumulative revenue 540,000, current revenue 270,000; current cost 240,000 and gross profit 30,000.",
    },
  },
  "su5-impairment-disposal": {
    topicId: "su5-impairment-disposal",
    scope: {
      ar: "الوحدة 5، 5.3: انخفاض الأصول الملموسة وغير الملموسة والشهرة واستبعاد الممتلكات والمعدات وفق US GAAP.",
      en: "SU 5 §5.3: U.S. GAAP impairment of held-and-used long-lived assets, indefinite intangibles and goodwill, plus PPE disposal.",
    },
    concepts: {
      ar: "عند وجود مؤشر هبوط للأصل طويل الأجل المستخدم أو غير الملموس محدد العمر، قارن القيمة الدفترية أولًا بالتدفقات النقدية المستقبلية غير المخصومة لمجموعة الأصول المناسبة. إذا لم تُسترد القيمة، قس الخسارة بالفارق بين القيمة الدفترية والقيمة العادلة، لا بفارق التدفقات غير المخصومة. تنشئ الخسارة أساسًا جديدًا ولا تعكس لاحقًا للأصل المستخدم وفق US GAAP. الأصل غير الملموس غير محدد العمر يُفحص سنويًا وبالمؤشرات، ويقارن مباشرة بالقيمة العادلة بعد خيار تقييم نوعي. الشهرة تُفحص على مستوى وحدة التقرير؛ إذا فاقت قيمتها الدفترية الشاملة قيمتها العادلة تحد الخسارة برصيد الشهرة المخصص. عند بيع PPE، سجل الإهلاك إلى تاريخ البيع، ثم اطرح القيمة الدفترية من صافي المتحصلات لربح/خسارة الاستبعاد. انتبه لاختلاف IFRS في قابلية عكس بعض خسائر الأصول غير الشهرة.",
      en: "On an impairment indicator, compare a held-and-used long-lived asset group or finite-life intangible carrying amount first with expected undiscounted future cash flows. Only after failing recoverability measure loss as carrying amount less fair value, not less undiscounted flows. The impaired amount becomes a new basis with no later reversal for held-and-used assets under U.S. GAAP. Indefinite-life intangibles are reviewed at least annually and on indicators, with an optional qualitative screen before directly comparing carrying value to fair value. Goodwill is tested at the reporting-unit level and loss is capped at assigned goodwill. For PPE disposals, depreciate through the sale date and compare net proceeds with updated carrying amount. Certain non-goodwill reversals differ under IFRS.",
    },
    workflow: {
      ar: "حدد فئة الأصل والمؤشر؛ اختبر التدفقات غير المخصومة للأصل المستخدم فقط؛ إن فشل الاختبار احسب خسارة القيمة العادلة؛ افصل اختبار غير محدد العمر والشهرة؛ حدّث الإهلاك حتى البيع واحسب صافي الربح أو الخسارة.",
      en: "Identify the asset category and trigger; apply undiscounted recoverability only to held-and-used assets; if failed, measure fair-value loss; test indefinite intangibles and goodwill separately; update depreciation through disposal and compute gain or loss.",
    },
    pitfalls: {
      ar: "هبوط القيمة السوقية وحده لا يكفي لإثبات خسارة في أصل مستخدم يجتاز الاسترداد؛ التدفقات غير المخصومة حاجز قبول، وليست مبلغ الخسارة. لا تقارن الشهرة منفردةً بقيمتها البيعية، ولا تعترف بربح بيع أصل قبل تعديل الإهلاك.",
      en: "A fair-value decline alone does not impair a held-and-used asset passing recoverability. Undiscounted cash flows are a screen, not the loss amount. Do not test standalone goodwill as an ordinary machine or omit depreciation to disposal.",
    },
    practicalCase: {
      titleAr: "اختبار الاسترداد وقياس الخسارة",
      titleEn: "Screen recoverability, then measure",
      scenarioAr:
        "آلة مستخدمة قيمتها الدفترية 150,000، وتدفقاتها المستقبلية غير المخصومة 140,000 وقيمتها العادلة 115,000. ما الخسارة والقيمة الدفترية الجديدة وفق US GAAP؟",
      scenarioEn:
        "A held-and-used machine carries at 150,000, with undiscounted future cash flows of 140,000 and fair value of 115,000. Find U.S. GAAP impairment and new carrying basis.",
      solutionAr:
        "تفشل الاسترداد لأن 150,000>140,000. تقاس الخسارة 150,000−115,000=35,000 في الربح، ويصبح الأساس الجديد 115,000؛ لا تستخدم 10,000 بوصفه خسارة الهبوط.",
      solutionEn:
        "Recoverability fails because 150,000>140,000. Impairment is 150,000−115,000=35,000 in earnings, leaving a new 115,000 basis; the 10,000 recoverability gap is not the measured loss.",
    },
  },
  "su6-ir-foundations": {
    topicId: "su6-ir-foundations",
    scope: {
      ar: "الوحدة 6، 6.1: الفرق بين التفكير المتكامل وعملية التقرير ومنتج التقرير والجهة المستفيدة أولًا.",
      en: "SU 6 §6.1: distinguish integrated thinking, integrated reporting as a process and the resulting report.",
    },
    concepts: {
      ar: "التفكير المتكامل ممارسة إدارية تربط وظائف المنشأة والموارد والعلاقات وآثار القرار عبر الأجل القصير والمتوسط والطويل. التقرير المتكامل عملية تقوم على هذا التفكير لإظهار كيف تخلق المنشأة القيمة وتحافظ عليها أو تتسبب في تآكلها، ثم تنتج تقريرًا دوريًا موجزًا يشرح الاستراتيجية والحوكمة والأداء والتوقعات في بيئتها. الغرض الأساسي للتقرير تقديم تفسير لمقدمي رأس المال المالي يساعدهم على تخصيص رأس المال، مع فائدة لأصحاب مصلحة آخرين. لا تتحقق الصفة المتكاملة بجمع التقرير السنوي وتقرير الاستدامة جنبًا إلى جنب؛ يجب بيان الروابط السببية والمقايضات، مثل أثر خفض الإنفاق على التدريب في الكفاءة المستقبلية.",
      en: "Integrated thinking connects functions, resources, relationships and decision effects over short, medium and long horizons. Integrated reporting is the process built on that thinking; its periodic, concise report explains how strategy, governance, performance and prospects create, preserve or erode value in context. Its primary purpose is to inform providers of financial capital, though other stakeholders benefit. Pasting a sustainability report beside annual accounts is not an integrated report; explain causal connections and trade-offs, such as how reduced training affects future capabilities.",
    },
    workflow: {
      ar: "حدد قرار تخصيص رأس المال؛ اجمع المالي وغير المالي من الإدارات؛ اربط المخاطر والحوكمة والموارد بالنتائج؛ اسرد تفسيرًا موجزًا لماضي القيمة ومستقبلها؛ وضح حدود القياس والتقدير.",
      en: "Identify capital-allocation decisions; gather financial and nonfinancial evidence across teams; link risks, governance and resources to outcomes; explain past and prospective value concisely; disclose measurement boundaries.",
    },
    pitfalls: {
      ar: "التفكير نشاط مستمر داخل المنظمة، أما التقرير فهو مخرجه الدوري. الفائدة لأصحاب المصلحة الآخرين لا تغير الهدف الأساسي المتعلق بمقدمي رأس المال المالي. التقرير المتكامل ليس مجرد قائمة مالية موسعة.",
      en: "Thinking is an ongoing management practice and the report is a periodic product. Broader stakeholder usefulness does not change its primary audience of financial-capital providers. It is more than extended financial statements.",
    },
    practicalCase: {
      titleAr: "الربط بين قرارين",
      titleEn: "Explain a connected decision",
      scenarioAr:
        "خفض مصنع تكلفة التدريب 200,000 فزاد الربح الحالي، لكن ارتفعت حوادث العمل من 3 إلى 8 وتعطل خط الإنتاج. ما الذي ينبغي أن يشرحه التقرير المتكامل للممولين؟",
      scenarioEn:
        "A manufacturer cuts training expense by 200,000, boosting current profit, but workplace incidents rise from three to eight and a production line is disrupted. What should its integrated report explain to capital providers?",
      solutionAr:
        "يربط أثر الوفر في رأس المال المالي بتراجع رأس المال البشري ومخاطر رأس المال المُصنّع، ويعرض السبب المحتمل وخطة الإدارة وأثره في القيمة المستقبلية دون زعم علاقة سببية مؤكدة من هذه البيانات وحدها.",
      solutionEn:
        "Connect near-term financial savings with weakened human capital and manufactured-capital risk; discuss possible causes, management response and future value without asserting proven causation from these facts alone.",
    },
  },
  "su6-ir-capitals": {
    topicId: "su6-ir-capitals",
    scope: {
      ar: "الوحدة 6، 6.2: أنواع رؤوس الأموال الستة والمدخلات والأنشطة والمخرجات والنتائج.",
      en: "SU 6 §6.2: six capitals and the input–activity–output–outcome value-creation cycle.",
    },
    concepts: {
      ar: "المالي: مصادر الأموال المتاحة؛ المُصنّع: الأشياء والبنية المادية المتاحة للإنتاج ولو لم تملكها المنشأة؛ الفكري: المعرفة والبرمجيات والبراءات والنظم؛ البشري: مهارات الأفراد وخبرتهم وتحفيزهم؛ الاجتماعي والعلاقات: الثقة والسمعة والشبكات؛ الطبيعي: الماء والهواء والأرض والتنوع الحيوي. استخدم النموذج لتحديد ما يدخل نشاط المنشأة من موارد وعلاقات، وما ينتج عنه من منتجات أو خدمات أو نفايات، ثم ما يترتب على ذلك من نتائج على رؤوس الأموال حتى خارج الملكية القانونية. بيع منتج مخرج، وتحسن صحة العملاء نتيجة. قد يزيد رأس مال مالي على حساب طبيعي؛ لا تتطلب قابلية التقرير إبراز جميع الرؤوس الستة أو تسميتها حرفيًا عندما لا تكون جوهرية.",
      en: "Financial capital is funds available; manufactured capital is physical infrastructure available for productive use, whether owned or not; intellectual capital is knowledge, patents and systems; human capital is people's skills and motivation; social and relationship capital is trust, reputation and networks; natural capital covers water, land, air and ecosystems. The business model converts resources and relationships (inputs) through activities into outputs such as products or waste, with internal and external outcomes for capitals, including resources not owned. A delivered product is an output; improved customer health is an outcome. Financial gains can trade off against natural capital; all six need not be named if some are immaterial.",
    },
    workflow: {
      ar: "صنف كل مورد في فئته؛ ميّز مدخلًا عن مخرج ونتيجة؛ حدد أثرًا إيجابيًا وآخر سلبيًا على الرؤوس؛ اختر مؤشرات قابلة للتتبع؛ أظهر تبعيات المنشأة والأثر الخارجي.",
      en: "Classify resources; separate inputs, outputs and outcomes; trace positive and negative effects on capitals; select traceable measures; include dependencies and external effects.",
    },
    pitfalls: {
      ar: "مهارة الموظف رأس مال بشري وليست ملكية فكرية للمنشأة؛ الرصيف المستخدم ولو لم يُملك قد يكون مُصنّعًا. المنتج نفسه مخرج، أما أثره على البيئة أو المجتمع فنتيجة.",
      en: "An employee's skill is human rather than the entity's intellectual property; a port used but not owned can be manufactured capital. A product is an output; its effect on society or the environment is an outcome.",
    },
    practicalCase: {
      titleAr: "تتبّع استهلاك المياه",
      titleEn: "Trace a water-use decision",
      scenarioAr:
        "استثمر مصنع أغذية 400,000 في مرشح خفض سحب المياه من 10,000 إلى 8,000 متر مكعب سنويًا، وأنتج العدد نفسه من العبوات. صنف الرؤوس والأثر، واحسب الانخفاض النسبي في المياه لكل عبوة.",
      scenarioEn:
        "A food producer invests 400,000 in filtration, reducing annual water intake from 10,000 to 8,000 cubic metres while producing the same number of packages. Classify the capitals and calculate the proportional water reduction per package.",
      solutionAr:
        "المرشح رأس مال مُصنّع ممول من المالي؛ الماء طبيعي؛ ثبات الإنتاج مع انخفاض السحب 2,000/10,000=20% لكل عبوة. يلزم قياس جودة المياه وتكلفة التشغيل قبل الجزم بصافي القيمة.",
      solutionEn:
        "The filter is manufactured capital funded by financial capital; water is natural capital. With unchanged output, intensity falls 2,000/10,000=20%. Water quality and operating cost need measurement before claiming net value.",
    },
  },
  "su6-ir-principles-elements": {
    topicId: "su6-ir-principles-elements",
    scope: {
      ar: "الوحدة 6، 6.3: مبادئ إعداد التقرير وعناصره وفق إطار IFRS Foundation، مع الفصل عن الإرشادات العامة.",
      en: "SU 6 §6.3: IFRS Foundation guiding principles and content elements, distinct from general reporting guidance.",
    },
    concepts: {
      ar: "المبادئ السبعة: التركيز الاستراتيجي والمستقبل، ترابط المعلومات، علاقات أصحاب المصلحة، الأهمية النسبية، الإيجاز، الموثوقية والاكتمال، الاتساق والقابلية للمقارنة. عناصر المحتوى الرسمية ثمانية: لمحة عن المنظمة والبيئة الخارجية، الحوكمة، نموذج الأعمال، المخاطر والفرص، الاستراتيجية وتخصيص الموارد، الأداء، التوقعات، وأساس الإعداد والعرض. تُحدد الأهمية النسبية بحسب القدرة على خلق القيمة بمرور الوقت؛ الإيجاز لا يبرر حجب أخبار سلبية جوهرية. يعرض كتاب جليم «إرشادات العرض العامة» قرب القائمة ويعدّها تاسعًا، لكن إطار IFRS Foundation ومادة البدء الرسمية يدرجان ثمانية عناصر وتتناول الإرشادات العامة على حدة؛ لذا تعتمد هذه الوحدة العدد الرسمي.",
      en: "The seven principles are strategic focus and future orientation, connectivity, stakeholder relationships, materiality, conciseness, reliability and completeness, and consistency and comparability. Eight official content elements cover organizational overview and external environment, governance, business model, risks and opportunities, strategy and resource allocation, performance, outlook, and basis of preparation and presentation. Materiality concerns the ability to create value over time; conciseness does not excuse omitting significant bad news. The supplied Gleim text groups 'general reporting guidance' as a ninth item, whereas the IFRS Foundation Framework and getting-started guide enumerate eight content elements and treat general guidance separately; this guide follows the official framework.",
    },
    workflow: {
      ar: "حدد المسائل الجوهرية وأصحاب العلاقة؛ استخدم المبادئ السبعة لحكم جودة العرض؛ رتب القصة حول العناصر الثمانية؛ راجع الروابط والمقايضات والبيانات السلبية؛ اشرح أساس التحديد والقياس.",
      en: "Identify material issues and stakeholders; use the seven principles to judge presentation; organize around the eight content elements; review connections, trade-offs and negative information; explain the basis of inclusion and measurement.",
    },
    pitfalls: {
      ar: "لا تعد الإرشادات العامة عنصر المحتوى التاسع في الإطار الرسمي. «التوقعات» تحديات وفرص مستقبلية، أما «الأداء» فيقيس المنجز؛ ولا تخلط عنصر الحوكمة بمبدأ العلاقات.",
      en: "Do not count general reporting guidance as a ninth official element. Outlook addresses future uncertainties; performance evaluates what happened. Governance is an element, while stakeholder relationships is a principle.",
    },
    practicalCase: {
      titleAr: "تصنيف إفصاحين",
      titleEn: "Map disclosures to elements",
      scenarioAr:
        "شركة تُظهر عدد الحوادث الحالي فقط، وتخفي تهديد انقطاع مورد الماء رغم تأثيره الجوهري في التشغيل. حدد العنصر والمبدأ المتأثرين، وماذا تضيف إلى تقريرها.",
      scenarioEn:
        "A company reports current incident counts but omits a material future water-supply disruption. Identify the missing content element and guiding principle, and propose an improvement.",
      solutionAr:
        "عدد الحوادث يخص الأداء؛ التهديد يستلزم المخاطر والفرص والتوقعات وخطة استجابة. إخفاؤه يخالف الأهمية النسبية والموثوقية/الاكتمال؛ اربط التبعية للماء باستراتيجية المنشأة وأثرها المالي.",
      solutionEn:
        "Incidents inform performance; water disruption belongs in risks and opportunities and outlook with the response plan. Omitting it violates materiality and completeness; connect water dependency to strategy and financial implications.",
    },
  },
  "su6-ir-adoption": {
    topicId: "su6-ir-adoption",
    scope: {
      ar: "الوحدة 6، 6.4: المنافع التشغيلية والإدارية وعقبات البيانات والتأكيد وتطبيق الإطار.",
      en: "SU 6 §6.4: decision and stakeholder benefits versus data, assurance and governance implementation challenges.",
    },
    concepts: {
      ar: "يمكن للتقرير المتكامل أن يكشف الترابط بين المالي وغير المالي، ويحسن تخصيص الموارد والمساءلة والتواصل ويقلل عزلة الإدارات. نجاحه يحتاج دعم مجلس الإدارة والرئيس التنفيذي، وتحديدًا مبررًا للمسائل الجوهرية، ومالكي بيانات غير مالية وضوابط جودة على تعريف المؤشرات وجمعها ومراجعتها. كلفة جمع البيانات والتدريب والتأكيد والإفصاح عن معلومات سلبية أو حساسة يجب أن تُقارن بمنفعة القرار. التأكيد على مؤشر محدد لا يعني تلقائيًا تأكيد التقرير كله، وتطبيق الإطار المتكامل لا يحقق بمفرده الالتزام بمعياري الإفصاح IFRS S1/S2؛ يمكن استخدامهما بصورة مكملة عند انطباقهما.",
      en: "Integrated reporting can connect financial and nonfinancial decisions, improve resource allocation and communication, and break departmental silos. Adoption needs board and executive support, a justified materiality process, identified nonfinancial data owners and controls over metric definitions, collection and review. Data systems, training, assurance and disclosure of adverse or commercially sensitive information cost resources and must be weighed against decision benefits. Assurance over one indicator is not assurance over the entire report, and use of the Framework alone does not establish compliance with IFRS S1/S2; the approaches can complement each other where applicable.",
    },
    workflow: {
      ar: "حدد المستخدمين والقضايا الجوهرية؛ أنشئ فريقًا من المالية والتشغيل والمخاطر؛ عرّف مؤشرات وحدودها ومسؤولياتها؛ اختبر الدقة والاكتمال؛ حدد نطاق التأكيد؛ راجع المنافع والكلفة سنويًا.",
      en: "Identify users and material matters; bring finance, operations and risk together; define metrics, boundaries and owners; test accuracy and completeness; set assurance scope; reassess costs and benefits annually.",
    },
    pitfalls: {
      ar: "منحنى انبعاثات بلا منهج قياس أو ضوابط ليس دليلًا موثوقًا. لا تَعِد بخفض تكلفة التمويل بوصفه نتيجة حتمية؛ هي فائدة محتملة في ظروف معينة.",
      en: "An emissions trend without boundaries or controls is not reliable evidence. Lower cost of capital is a possible benefit, not an inevitable outcome.",
    },
    practicalCase: {
      titleAr: "خطة ضبط مؤشر غير مالي",
      titleEn: "Control a nonfinancial metric",
      scenarioAr:
        "شركة تقيس إصابات العمل من 3 مواقع، لكن الموقع الثالث لم يقدم بيانات ربع سنة. ترغب الإدارة في إصدار تقرير متكامل الآن. ما المعالجة المهنية؟",
      scenarioEn:
        "A company collects workplace injuries from three sites, but site three lacks one quarter of data. Management wants to publish an integrated report immediately. What should it do?",
      solutionAr:
        "تحدد جوهرية النقص، وتطلب استكماله أو توضح حدود التغطية وأثر التقدير بشفافية، وتعيّن مسؤول بيانات ومطابقة شهرية وضبط اعتماد، ولا تقدم المؤشر الناقص بوصفه رقمًا كاملًا مؤكدًا.",
      solutionEn:
        "Assess the gap's materiality, obtain missing records or disclose the boundary and estimate transparently, assign data ownership and monthly reconciliation, and do not present an incomplete metric as a complete assured figure.",
    },
  },
};

export const CMA_STUDY_UNIT_CASES_5_6: CmaStudyUnitCase[] = [
  {
    studyUnit: 5,
    title: {
      ar: "حالة مترابطة: عقد وصيانة وأصل متعثر",
      en: "Linked case: bundle, service and impaired machine",
    },
    scenario: {
      ar: "قبضت منشأة 120,000 مقدّمًا لجهاز يسلم فورًا وصيانة متميزة منتظمة لمدة سنة. السعر المستقل للجهاز 100,000 وللصيانة 25,000. انقضت 6 أشهر. ولديها آلة مستخدمة مستقلة قيمتها الدفترية 150,000 وتدفقاتها المستقبلية غير المخصومة 140,000 وقيمتها العادلة 115,000. تجاهل الضرائب.",
      en: "An entity receives 120,000 upfront for a device delivered immediately plus distinct even service for a year. Standalone device and service prices are 100,000 and 25,000. Six months have passed. A separate held-and-used machine carries at 150,000 with undiscounted cash flows 140,000 and fair value 115,000. Ignore tax.",
    },
    tasks: [
      {
        prompt: {
          ar: "خصص السعر واحسب الإيراد عند تسليم الجهاز.",
          en: "Allocate price and calculate revenue on device delivery.",
        },
        solution: {
          ar: "نسبتا التوزيع 100/125 و25/125؛ إيراد الجهاز 96,000 والتزام الصيانة 24,000 من المبلغ المقبوض.",
          en: "Relative weights are 100/125 and 25/125; device revenue is 96,000 and prepaid service liability 24,000.",
        },
      },
      {
        prompt: {
          ar: "احسب الإيراد المتراكم ورصيد التزام العقد بعد 6 أشهر.",
          en: "Find cumulative revenue and contract liability after six months.",
        },
        solution: {
          ar: "خدمة النصف الأول 24,000×6/12=12,000؛ الإيراد الكلي 108,000، والمتبقي في التزام العقد 12,000.",
          en: "Six months' service revenue =12,000; total revenue =108,000, and remaining contract liability =12,000.",
        },
      },
      {
        prompt: {
          ar: "اختبر الآلة المستخدمة واحسب الخسارة والقيمة الدفترية الجديدة.",
          en: "Test the held-and-used machine and find loss and new carrying value.",
        },
        solution: {
          ar: "150,000>140,000 فتفشل الاسترداد؛ الخسارة 150,000−115,000=35,000، والقيمة الجديدة 115,000.",
          en: "150,000>140,000 fails recoverability; loss =150,000−115,000=35,000 and new basis =115,000.",
        },
      },
    ],
  },
  {
    studyUnit: 6,
    title: {
      ar: "حالة مترابطة: خلق القيمة في مصنع أغذية",
      en: "Linked case: value creation at a food producer",
    },
    scenario: {
      ar: "استثمر مصنع أغذية 400,000 في مرشح مياه؛ هبط السحب السنوي من 10,000 إلى 8,000 متر مكعب مع ثبات الإنتاج. تحسن التدفق النقدي التشغيلي من 2,000,000 إلى 2,200,000، وانخفضت إصابات العاملين من 8 إلى 5. لم تتوافر قياسات لربع سنة من أحد المصانع الثلاثة، ويوجد خطر جفاف مؤثر مستقبلًا.",
      en: "A food producer invests 400,000 in filtration; annual water withdrawal falls from 10,000 to 8,000 cubic metres at unchanged output. Operating cash flow rises from 2,000,000 to 2,200,000 and injuries fall from eight to five. One of three plants lacks a quarter of readings, and future drought is material.",
    },
    tasks: [
      {
        prompt: {
          ar: "صنف المرشح والماء والتدفق النقدي ومهارات السلامة.",
          en: "Classify filtration, water, operating cash and safety skills.",
        },
        solution: {
          ar: "المرشح مُصنّع، والماء طبيعي، والتدفق النقدي مالي، ومهارات العاملين بشرية؛ يوضح الاستثمار تحويل رأس مال مالي إلى مُصنّع مع أثر على الطبيعي.",
          en: "Filtration is manufactured, water natural, operating cash financial and employee safety skills human; investment converts financial into manufactured capital and affects natural capital.",
        },
      },
      {
        prompt: {
          ar: "احسب تغير سحب المياه والتدفق النقدي والإصابات دون الجزم بسببية غير مثبتة.",
          en: "Calculate changes in water withdrawal, cash flow and injuries without assuming causation.",
        },
        solution: {
          ar: "سحب المياه −2,000/10,000=−20%؛ التدفق +200,000/2,000,000=+10%؛ الإصابات −3/8=−37.5%. هذه اتجاهات مرصودة لا تثبت منفردة علاقة سببية.",
          en: "Water −20%, operating cash +10%, injuries −37.5%. These observed trends alone do not prove causal links.",
        },
      },
      {
        prompt: {
          ar: "حدد عنصري محتوى ومبدأين يلزمان لعرض نقص البيانات وخطر الجفاف.",
          en: "Name content elements and principles for missing readings and drought risk.",
        },
        solution: {
          ar: "الأداء مع توضيح حدود البيانات، والمخاطر والفرص/التوقعات مع خطة الجفاف؛ الأهمية النسبية والموثوقية والاكتمال وترابط المعلومات تحكم الإفصاح. الإرشادات العامة ليست عنصرًا تاسعًا.",
          en: "Performance needs a data-boundary note; risks and opportunities and outlook need the drought response. Materiality, reliability and completeness, and connectivity guide presentation; general guidance is not a ninth element.",
        },
      },
    ],
  },
];
