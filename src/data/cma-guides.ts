import { CMA_STUDY_UNIT_CASES_3_4, CMA_TOPIC_GUIDES_3_4 } from "@/data/cma-guides-units-3-4";
import { CMA_STUDY_UNIT_CASES_5_6, CMA_TOPIC_GUIDES_5_6 } from "@/data/cma-guides-units-5-6";
import { CMA_STUDY_UNIT_CASES_7_9, CMA_TOPIC_GUIDES_7_9 } from "@/data/cma-guides-units-7-9";
import { CMA_GUIDE_DETAILS_10_14 } from "@/data/cma-guide-details-10-14";
import { CMA_GUIDE_DETAILS_7_9 } from "@/data/cma-guide-details-7-9";
import { CMA_STUDY_UNIT_CASES_10_11, CMA_TOPIC_GUIDES_10_11 } from "@/data/cma-guides-units-10-11";
import { CMA_STUDY_UNIT_CASES_12, CMA_TOPIC_GUIDES_12 } from "@/data/cma-guides-unit-12";
import { CMA_STUDY_UNIT_CASES_13, CMA_TOPIC_GUIDES_13 } from "@/data/cma-guides-unit-13";
import { CMA_STUDY_UNIT_CASES_14, CMA_TOPIC_GUIDES_14 } from "@/data/cma-guides-unit-14";
import { CMA_STUDY_UNIT_CASES_15_20, CMA_TOPIC_GUIDES_15_20 } from "@/data/cma-guides-units-15-20";
import { CMA_PART2_GUIDES_1_7, CMA_PART2_CASES_1_7 } from "@/data/cma-part2-guides-1-7";
import { CMA_PART2_GUIDES_8_15, CMA_PART2_CASES_8_15 } from "@/data/cma-part2-guides-8-15";
import type { CmaStudyUnit } from "@/data/cma-topics";

/** Original bilingual explanations derived from the user's Gleim 2024 Study Units 1–20. */
export interface CmaTopicGuide {
  topicId: string;
  scope: { ar: string; en: string };
  concepts: { ar: string; en: string };
  /** Optional, separately titled lessons for subjects needing more than a concise overview. */
  lessonSections?: { heading: { ar: string; en: string }; body: { ar: string; en: string } }[];
  workflow: { ar: string; en: string };
  pitfalls: { ar: string; en: string };
  practicalCase: {
    titleAr: string;
    titleEn: string;
    scenarioAr: string;
    scenarioEn: string;
    solutionAr: string;
    solutionEn: string;
  };
}
export const CMA_TOPIC_GUIDES: Record<string, CmaTopicGuide> = {
  "su1-accounting-concepts": {
    topicId: "su1-accounting-concepts",
    scope: {
      ar: "الوحدة 1، المبحث 1.1: هدف التقرير العام ومستخدميه، الاستحقاق، خصائص المعلومات وترابط القوائم.",
      en: "Study Unit 1, section 1.1: general-purpose reporting, users, accruals, information quality and connections among statements.",
    },
    concepts: {
      ar: "يحتاج المستثمرون والمقرضون معلومات عن الموارد والالتزامات والأداء والتدفقات لاتخاذ قرارات التمويل. تُظهر قائمة المركز المالي الأرصدة في تاريخ، فيما تظهر قوائم الدخل والتدفقات التغير خلال فترة؛ وتشرح الإيضاحات السياسات والتقديرات الجوهرية. في أساس الاستحقاق يُثبت الإيراد عند اكتسابه والمصروف عند تحمله ولو تأخر النقد. ويُرحّل صافي الربح إلى الأرباح المبقاة، ويرتبط نقد المركز المالي بالتدفقات. تفترض القوائم استمرار المنشأة، وتزداد فائدتها بملاءمة البيانات وتمثيلها الصادق وقابليتها للمقارنة.",
      en: "Investors and lenders use information about resources, claims, performance and cash flows to allocate capital. The balance sheet shows balances at a date, while income and cash-flow statements describe a period; notes explain significant policies and estimates. Accrual accounting records earned revenue and incurred expense before or after cash moves. Net income rolls into retained earnings, and balance-sheet cash reconciles to cash flows. Going concern underlies presentation; relevance, faithful representation and comparability make it useful.",
    },
    workflow: {
      ar: "حدد المستخدم والقرار المطلوب؛ صنّف الحدث كإيراد أو مصروف أو معاملة مع الملاك؛ سجله في فترة حدوثه؛ تتبّع أثره عبر القوائم والإيضاحات؛ قارن نتيجة الاستحقاق بالحركة النقدية.",
      en: "Identify the user and decision; classify an event as income, expense or owner transaction; recognize it in the correct period; trace its effect through statements and notes; reconcile accrual results to cash.",
    },
    pitfalls: {
      ar: "تحصيل الذمم لا ينشئ إيرادًا جديدًا إن سبق الاعتراف به. النقد المدفوع مقدمًا ليس كله مصروف الفترة. المحاسبة الإدارية تخدم مستخدمًا داخليًا وأغراضًا مختلفة عن التقرير العام.",
      en: "Collecting an already recognized receivable is not new revenue. A prepayment is not necessarily current expense. Internal management reports serve different users and decisions from general-purpose financial statements.",
    },
    practicalCase: {
      titleAr: "الربح على أساس الاستحقاق",
      titleEn: "Accrual income bridge",
      scenarioAr:
        "قدمت شركة خدمات بقيمة 50,000، حصلت منها 30,000 نقدًا. تحملت أجورًا 18,000 وسددت 12,000. احسب الربح ورصيد الذمم والأجور المستحقة.",
      scenarioEn:
        "A company provides services worth 50,000 and collects 30,000. It incurs wages of 18,000 and pays 12,000. Find accrual income, receivables and wages payable.",
      solutionAr:
        "الإيراد 50,000 والمصروف 18,000؛ الربح 32,000. الذمم 20,000 والأجور المستحقة 6,000. صافي النقد التشغيلي من هذين البندين 18,000، ويختلف عن الربح بمقدار 14,000.",
      solutionEn:
        "Revenue is 50,000 and expense is 18,000, so income is 32,000. Receivables are 20,000 and wages payable 6,000. Cash from these items is 18,000; the 14,000 gap reflects their accrual changes.",
    },
  },
  "su1-financial-position": {
    topicId: "su1-financial-position",
    scope: {
      ar: "الوحدة 1، المبحث 1.2: معادلة المركز المالي، تحليل الحركة وتصنيف المتداول وغير المتداول وحدود القياس.",
      en: "Study Unit 1, section 1.2: accounting equation, transaction effects, current/noncurrent presentation and measurement limits.",
    },
    concepts: {
      ar: "الأصول موارد تسيطر عليها المنشأة، والالتزامات تعهدات قائمة، وحقوق الملكية المتبقي بعد طرحها. كل عملية تحفظ توازن الأصول = الالتزامات + الحقوق. الأصل المتداول يُستهلك أو يباع أو يتحول لنقد خلال السنة أو دورة التشغيل أيهما أطول؛ وتحتاج الالتزامات إلى تقييم موعد التسوية وشروط إعادة التمويل في إطار US GAAP. تشمل حقوق الملكية رأس المال ورأس المال الإضافي والأرباح المبقاة وأسهم الخزينة كعنصر مقابل. القائمة لقطة في تاريخ معين، وبعض بنودها تاريخية أو قائمة على تقدير ولا تعكس القيمة السوقية لكل المنشأة.",
      en: "Assets are controlled resources, liabilities present obligations, and equity the residual. Each transaction preserves assets = liabilities + equity. Current assets turn into cash, are sold or consumed within a year or the operating cycle, whichever is longer; current debt classification requires assessing settlement and refinancing conditions under the applicable U.S. GAAP rules. Equity includes capital, APIC, retained earnings and treasury stock as a contra-equity item. The balance sheet is a dated snapshot, often using historical amounts and estimates rather than enterprise market value.",
    },
    workflow: {
      ar: "حدد أصل الحركة وطرفها المقابل؛ ثبت الزيادة أو النقص دون كسر المعادلة؛ استخدم دورة التشغيل والاستحقاق للتصنيف؛ طابق مجموع الأصول مع الالتزامات والحقوق؛ اقرأ الإيضاحات لتفسير التقديرات.",
      en: "Identify both sides of a transaction; record increases/decreases while preserving the equation; classify by operating cycle and settlement; tie total assets to claims; read note disclosures for estimates.",
    },
    pitfalls: {
      ar: "شراء أصل نقدًا يبدل تكوين الأصول ولا يرفع مجموعها. سداد دائن ينقص أصلًا والتزامًا معًا. لا تفترض أن كل استحقاق بعد 12 شهرًا غير متداول إذا كانت دورة التشغيل أطول.",
      en: "Buying equipment for cash swaps assets without increasing total assets. Paying a payable reduces an asset and a liability. A cycle longer than 12 months may affect current classification.",
    },
    practicalCase: {
      titleAr: "تحليل أثر العمليات",
      titleEn: "Transaction effects",
      scenarioAr:
        "اشترت شركة مخزونًا بمبلغ 40,000 على الحساب، ثم سددت 15,000 للمورد. ما صافي تغير مجموع الأصول والالتزامات؟",
      scenarioEn:
        "A company purchases 40,000 of inventory on credit and then pays its supplier 15,000. What is the net change in total assets and liabilities?",
      solutionAr:
        "يزيد المخزون 40,000 وينقص النقد 15,000، فتزيد الأصول 25,000. تزيد الدائنون 40,000 ثم تنقص 15,000، أي زيادة التزامات 25,000؛ لا يتغير الربح.",
      solutionEn:
        "Inventory increases 40,000 and cash falls 15,000: assets rise 25,000. Payables rise 40,000 and fall 15,000: liabilities rise 25,000. Income is unaffected.",
    },
  },
  "su1-income-comprehensive": {
    topicId: "su1-income-comprehensive",
    scope: {
      ar: "الوحدة 1، المبحث 1.3: عناصر الدخل، تكلفة التصنيع والمبيعات، قائمة متعددة الخطوات، العمليات المتوقفة والدخل الشامل الآخر.",
      en: "Study Unit 1, section 1.3: income elements, manufacturing and sales costs, multistep presentation, discontinued operations and OCI.",
    },
    concepts: {
      ar: "تساوي تكلفة المواد المستخدمة أول المواد + المشتريات − آخر المواد. تجمع مع العمل المباشر والأعباء الصناعية للوصول إلى تكلفة الإنتاج، ثم تُسوّى بمخزون تحت التشغيل لاستخراج تكلفة الإنتاج التام؛ وتُسوّى مع مخزون التام لاستخراج تكلفة المبيعات. مجمل الربح = المبيعات − تكلفة المبيعات. تفرق القائمة متعددة الخطوات بين التشغيل وغيره، وتعرض العمليات المتوقفة بعد نتائج المستمرة بصافي الضريبة عند تحقق شروط التصنيف. الدخل الشامل = صافي الربح + الدخل الشامل الآخر؛ ومن أمثلة الآخر بعض فروق ترجمة العمليات الأجنبية ومكاسب/خسائر أوراق الدين المتاحة للبيع، لا معاملات الملاك.",
      en: "Direct materials used equal opening materials plus purchases less closing materials. Add direct labor and factory overhead, adjust for work in process to get cost of goods manufactured, then adjust finished goods for COGS. Gross profit is sales less COGS. A multistep income statement separates operating from nonoperating items; qualifying discontinued operations are presented after continuing operations net of tax. Comprehensive income adds OCI, such as specified foreign-operation translation and available-for-sale debt-security changes, to net income; owner transactions are excluded.",
    },
    workflow: {
      ar: "احسب حركة المواد وتحت التشغيل والتام بالتسلسل؛ استخرج مجمل الربح والتشغيلي ثم الضريبة؛ اعزل العملية المتوقفة إن انطبقت شروطها؛ اجمع OCI منفصلًا عن صافي الربح.",
      en: "Build materials, WIP and finished-goods schedules in sequence; calculate gross and operating profit and tax; isolate qualifying discontinued operations; report OCI separately from net income.",
    },
    pitfalls: {
      ar: "الإعلان والرواتب الإدارية ليسا عبئًا صناعيًا في المثال المعتاد. لا تدخل OCI ضمن صافي الربح. عرض بند عارض كعملية متوقفة يحتاج استيفاء شروطه ولا يكفي مجرد بيع أصل.",
      en: "Advertising and head-office salaries are not factory overhead in the usual fact pattern. Do not include OCI in net income. A disposal alone does not automatically qualify as discontinued operations.",
    },
    practicalCase: {
      titleAr: "من التصنيع إلى مجمل الربح",
      titleEn: "Manufacturing to gross profit",
      scenarioAr:
        "مواد مستخدمة 80، عمل مباشر 60، أعباء صناعية 40، أول تحت التشغيل 20 وآخره 30، أول التام 15 وآخره 25، والمبيعات 250 (جميع المبالغ بالآلاف). احسب تكلفة الإنتاج التام والمبيعات ومجمل الربح.",
      scenarioEn:
        "Materials used 80, direct labor 60, overhead 40, opening WIP 20, closing WIP 30, opening finished goods 15, closing finished goods 25 and sales 250 (all in thousands). Find COGM, COGS and gross profit.",
      solutionAr:
        "الإنتاج التام = 80 + 60 + 40 + 20 − 30 = 170. تكلفة المبيعات = 170 + 15 − 25 = 160. مجمل الربح = 250 − 160 = 90 ألفًا.",
      solutionEn:
        "COGM = 80 + 60 + 40 + 20 − 30 = 170. COGS = 170 + 15 − 25 = 160. Gross profit = 250 − 160 = 90 thousand.",
    },
  },
  "su1-equity": {
    topicId: "su1-equity",
    scope: {
      ar: "الوحدة 1، المبحث 1.4: تسوية عناصر الحقوق، التغييرات المحاسبية، إصدار الأسهم وأسهم الخزينة والتوزيعات والتقسيم.",
      en: "Study Unit 1, section 1.4: equity rollforwards, accounting changes, share issues, treasury stock, dividends and splits.",
    },
    concepts: {
      ar: "تُصالح قائمة التغيرات كل عنصر حقوق بين البداية والنهاية. الإصدار بالقيمة فوق الاسمية يوزع المقبوض على رأس المال الاسمي وAPIC؛ شراء أسهم الخزينة يخفض إجمالي الحقوق ولا يولد مصروفًا. إعلان التوزيع النقدي ينقص الأرباح المبقاة وينشئ التزامًا، وتاريخ القيد لا أثر حسابيًا له، والدفع يسوي النقد والالتزام. توزيع الأسهم الصغير يعيد تصنيف مبلغ وفق القيمة العادلة ضمن الحقوق؛ الكبير يعتمد القيمة الاسمية في المعالجة الموصوفة، أما تقسيم السهم المعتاد فلا يغيّر إجمالي الحقوق. تصحيح خطأ جوهري سابق أو تغيير مبدأ يُعالج بأثر رجعي وفق القواعد، بخلاف تغير التقدير المستقبلي.",
      en: "The statement reconciles each equity component from opening to closing. Share proceeds above par split between stated capital and APIC; treasury-share purchases reduce equity rather than create an expense. Declaring a cash dividend reduces retained earnings and creates a payable; record date has no entry, while payment clears cash and the payable. A small stock dividend transfers fair-value amounts within equity; a large dividend in stock form uses par amounts under the illustrated U.S. rules, while an ordinary split changes no total equity. Prior error/principle changes are generally retrospective, unlike prospective estimate changes.",
    },
    workflow: {
      ar: "ابدأ بأرصدة الحقوق؛ أضف الربح والدخل الشامل الآخر في موضعهما؛ افصل معاملات الملاك؛ حدد التواريخ الثلاثة للتوزيع؛ راجع إن كان التغير تصحيحًا لماضٍ أم تغير تقدير.",
      en: "Start with opening equity; add income and OCI in their respective components; separate owner transactions; identify dividend declaration, record and payment dates; distinguish prior-period corrections from estimate changes.",
    },
    pitfalls: {
      ar: "لا تعامل أسهم الخزينة أصلًا ولا توزيعات الأسهم مصروفًا. إعلان التوزيع غير دفعه. لا تدخل تصحيح خطأ سنة سابقة في ربح السنة الجارية.",
      en: "Treasury shares are not assets and stock dividends are not expenses. Declaration differs from payment. A prior-period correction is not current-year income.",
    },
    practicalCase: {
      titleAr: "حركة الأرباح المبقاة",
      titleEn: "Retained earnings rollforward",
      scenarioAr:
        "أول الأرباح المبقاة 40,000، صافي الربح 25,000، وأُعلنت توزيعات نقدية 10,000 قبل سدادها. احسب آخر الأرباح المبقاة والتزام التوزيع.",
      scenarioEn:
        "Opening retained earnings are 40,000, net income 25,000 and cash dividends of 10,000 were declared but not paid. Find ending retained earnings and the dividend payable.",
      solutionAr:
        "الأرباح المبقاة = 40,000 + 25,000 − 10,000 = 55,000. ينشأ التزام توزيعات 10,000 عند الإعلان؛ لا ينخفض النقد إلا عند الدفع.",
      solutionEn:
        "Retained earnings = 40,000 + 25,000 − 10,000 = 55,000. A 10,000 dividend payable arises at declaration; cash falls only on payment.",
    },
  },
  "su1-cash-flows": {
    topicId: "su1-cash-flows",
    scope: {
      ar: "الوحدة 1، المبحث 1.5: الأنشطة الثلاثة، التسوية غير المباشرة والإفصاح عن استثمار أو تمويل بلا حركة نقدية.",
      en: "Study Unit 1, section 1.5: three cash-flow categories, indirect reconciliation and noncash investing/financing disclosures.",
    },
    concepts: {
      ar: "تفسر القائمة الفرق بين نقد أول وآخر الفترة. وفق العرض الأمريكي في المادة، تشمل التدفقات التشغيلية عادةً قبض العملاء والفوائد والتوزيعات وسداد الموردين والفوائد والضرائب؛ الاستثمار يشمل شراء وبيع الأصول طويلة الأجل؛ التمويل يشمل إصدار وسداد الدين والأسهم والتوزيعات النقدية. يبدأ غير المباشر بصافي الربح ويضيف مصروفًا غير نقدي، ويطرح ربح بيع أصل غير تشغيلي، ويخصم ارتفاع أصل تشغيلي ويضيف ارتفاع التزام تشغيلي. اقتناء أصل بإصدار دين عملية غير نقدية تُفصح عنها خارج أقسام التدفقات.",
      en: "The statement reconciles beginning and ending cash. In the U.S. GAAP treatment taught here, operating generally includes customer, interest and dividend receipts and supplier, interest and tax payments; investing covers long-lived assets; financing covers debt/equity financing and cash dividends. The indirect method starts with net income, adds noncash expenses, removes nonoperating asset-sale gains, subtracts increases in operating assets and adds increases in operating liabilities. Acquiring an asset by issuing debt is disclosed separately as noncash investing/financing.",
    },
    workflow: {
      ar: "صنّف كل حركة نقدية بحسب طبيعتها؛ سوِّ الربح إلى تدفق التشغيل؛ أضف الاستثمار والتمويل؛ طابق صافي التغير مع رصيدي النقد؛ افصل المعاملات غير النقدية بالإيضاح.",
      en: "Classify actual cash movements; reconcile income to operating cash; add investing and financing; tie net change to opening/closing cash; disclose noncash transactions outside the statement totals.",
    },
    pitfalls: {
      ar: "ربح بيع الأصل ليس هو حصيلة بيعه. الزيادة في الذمم تخفض النقد التشغيلي غير المباشر، والزيادة في الدائنين ترفعه. إصدار أسهم مقابل أصل ليس تدفقًا نقديًا.",
      en: "A disposal gain is not sale proceeds. Rising receivables lower indirect operating cash flow; rising payables raise it. Issuing shares for an asset is not a cash flow.",
    },
    practicalCase: {
      titleAr: "تسوية الربح إلى النقد",
      titleEn: "Reconcile earnings to cash",
      scenarioAr:
        "صافي الربح 120,000، الإهلاك 30,000، ربح بيع آلة 10,000، زيادة الذمم 20,000، وزيادة الدائنين 15,000. احسب التشغيل غير المباشر.",
      scenarioEn:
        "Net income is 120,000, depreciation 30,000, equipment-sale gain 10,000, receivables rise 20,000 and payables rise 15,000. Calculate indirect CFO.",
      solutionAr:
        "120,000 + 30,000 − 10,000 − 20,000 + 15,000 = 135,000. حصيلة الآلة نفسها تظهر في الاستثمار، إن دُفعت نقدًا.",
      solutionEn:
        "120,000 + 30,000 − 10,000 − 20,000 + 15,000 = 135,000. Any cash proceeds from the equipment sale belong in investing.",
    },
  },
  "su1-consolidation": {
    topicId: "su1-consolidation",
    scope: {
      ar: "الوحدة 1، المبحث 1.6: السيطرة ونموذجا VOE/VIE، الاستحواذ، العرض الموحد وإلغاء العمليات الداخلية.",
      en: "Study Unit 1, section 1.6: VOE/VIE control, acquisition accounting, consolidation and intercompany eliminations.",
    },
    concepts: {
      ar: "تظهر المجموعة ككيان اقتصادي واحد عند السيطرة، عادة عبر غالبية التصويت في VOE أو عبر سلطة توجيه الأنشطة والانتفاع/تحمل الخسائر في VIE وفق الشروط. عند الاستحواذ تُقاس الأصول والالتزامات القابلة للتحديد والحصة غير المسيطرة وفق قواعد تاريخ الاستحواذ؛ الشهرة = المقابل + القيمة العادلة للحصة غير المسيطرة − صافي الأصول المحددة بالقيمة العادلة. تُجمع البنود سطرًا بسطر وتُلغى استثمارات الأم في التابعة وحقوق التابعة والأرصدة والمبيعات الداخلية كلها. يلزم حذف الربح غير المحقق من مخزون لم يصل لطرف خارجي. تختلف طريقة حقوق الملكية عند النفوذ المهم عن التوحيد الكامل.",
      en: "A controlled group is shown as one economic entity, generally through majority voting rights in the VOE model or power and exposure to benefits/losses under VIE criteria. On acquisition, identifiable net assets and NCI are measured under acquisition-date rules; goodwill = consideration + fair value of NCI − fair value of identifiable net assets. Add group line items then eliminate the parent's investment, subsidiary equity, all internal balances/sales and unrealized inventory profit. Significant influence accounted for under the equity method is different from full consolidation.",
    },
    workflow: {
      ar: "اختبر طبيعة السيطرة؛ حدد القيم العادلة وصافي الأصول وتكلفة الاستحواذ؛ اجمع القوائم؛ ألغِ الاستثمار والحقوق والأرصدة والإيرادات الداخلية؛ راجع المخزون والربح غير المحقق وحصة غير المسيطرين.",
      en: "Assess control; determine acquisition-date fair values and consideration; combine statements; eliminate investment, equity, reciprocal balances and internal sales; adjust unsold inventory profit and NCI.",
    },
    pitfalls: {
      ar: "امتلاك أقل من 100% لا يعني توحيد النسبة المملوكة فقط في التوحيد الكامل. لا تعرض ذمم المجموعة على نفسها ولا ربحًا على مخزون داخلي لم يُبع للغير. لا تفترض أن كل امتلاك بنسبة 20% يحقق سيطرة.",
      en: "Less than 100% ownership does not mean proportionately consolidating only that share under full consolidation. A group cannot report receivables from itself or profit on unsold internal inventory. A 20% stake alone does not establish control.",
    },
    practicalCase: {
      titleAr: "مبيعات المجموعة والربح غير المحقق",
      titleEn: "Group sales and unrealized profit",
      scenarioAr:
        "مبيعات الأم للغير 500,000 والتابعة للغير 300,000؛ باعت الأم للتابعة مخزونًا بـ40,000 تكلفته 30,000. بقي نصفه لدى التابعة. ما الإيراد الموحد والربح الداخلي المؤجل؟",
      scenarioEn:
        "Parent external sales are 500,000 and subsidiary external sales 300,000; the parent sells inventory internally for 40,000 that cost 30,000. Half remains at the subsidiary. Find consolidated revenue and unrealized profit.",
      solutionAr:
        "الإيراد الموحد 800,000 بعد إلغاء المبيعات الداخلية 40,000. هامش الربح الداخلي 10,000؛ غير المحقق في النصف الباقي 5,000، فيُخفض المخزون والربح الموحدان بهذا المقدار.",
      solutionEn:
        "Consolidated revenue is 800,000 after eliminating the 40,000 internal sale. Internal margin is 10,000; 5,000 remains unrealized in half the goods and is removed from consolidated inventory and profit.",
    },
  },
  "su2-receivables": {
    topicId: "su2-receivables",
    scope: {
      ar: "الوحدة 2، المبحث 2.1: الاعتراف بالذمم، مخصص الخسائر، نسب المبيعات وأعمار الأرصدة والشطب والتخصيم.",
      en: "Study Unit 2, section 2.1: receivable recognition, loss allowance, sales/aging methods, write-offs and factoring.",
    },
    concepts: {
      ar: "تُعرض الذمم المتداولة بصافي المبلغ المتوقع تحصيله. طريقة نسبة المبيعات تحدد مصروف الفترة مباشرة ثم يستقر رصيد المخصص؛ طريقة نسبة الذمم أو الأعمار تحدد رصيد المخصص المطلوب آخر الفترة ويكون المصروف فرقًا بينه وبين الرصيد غير المعدل. شطب حساب معين يخفض إجمالي الذمم والمخصص بمقدار واحد فلا يغير الصافي أو مصروف الفترة وقت الشطب. بيع الذمم دون حق رجوع ومع تحقق شروط نقل السيطرة قد يزيلها من الدفاتر؛ وجود حق رجوع يستلزم تقييم الشروط وقد يكون التمويل اقتراضًا مضمونًا تبقى معه الذمم والتزام مقابل.",
      en: "Current receivables are reported at expected collectible amounts. A percentage-of-credit-sales method directly sets period expense; a receivables/aging method sets required ending allowance and expenses the difference from the unadjusted balance. A write-off reduces gross receivables and allowance equally, with no immediate effect on net receivables or new expense. A transfer without recourse that satisfies sale criteria derecognizes receivables; with recourse, assess control carefully, because it may be a secured borrowing retaining receivables and a liability.",
    },
    workflow: {
      ar: "اعرف إجمالي الرصيد والمخصص السابق؛ اختر قاعدة التقدير؛ احسب المصروف أو الرصيد المطلوب بحسب الطريقة؛ عالج الشطب والاسترداد؛ عند التخصيم اختبر انتقال السيطرة وحق الرجوع قبل إلغاء الذمم.",
      en: "Start with gross balance and pre-adjustment allowance; choose sales or ending-balance approach; calculate expense or closing allowance accordingly; handle write-offs/recoveries; test transfer of control and recourse before derecognition.",
    },
    pitfalls: {
      ar: "لا تخلط بين معدل المبيعات الذي يحدد مصروفًا ومعدل الأعمار الذي يحدد رصيدًا ختاميًا. الشطب ليس مصروفًا جديدًا عند استخدام المخصص. وجود حق رجوع وحده لا يكفي للحكم الآلي على جميع عمليات البيع.",
      en: "Do not confuse a sales percentage setting expense with aging percentages setting ending allowance. A write-off is not a new expense under the allowance method. Recourse calls for analyzing sale criteria rather than an automatic conclusion in every contract.",
    },
    practicalCase: {
      titleAr: "جدول أعمار مبسط",
      titleEn: "Simplified aging schedule",
      scenarioAr:
        "ذمم 80,000 عمرها أقل من 30 يومًا بنسبة خسارة 1%، و20,000 متوسطة بنسبة 5%، و10,000 قديمة بنسبة 20%. رصيد المخصص قبل التعديل دائن 1,000. احسب المصروف والصافي.",
      scenarioEn:
        "Receivables are 80,000 at 1% loss, 20,000 at 5% and 10,000 at 20%; the unadjusted allowance has a 1,000 credit balance. Find expense and net receivables.",
      solutionAr:
        "المخصص المطلوب = 800 + 1,000 + 2,000 = 3,800؛ مصروف التعديل 2,800؛ إجمالي الذمم 110,000 والصافي 106,200.",
      solutionEn:
        "Required allowance = 800 + 1,000 + 2,000 = 3,800; adjustment expense = 2,800; gross receivables = 110,000 and net = 106,200.",
    },
  },
  "su2-inventory-fundamentals": {
    topicId: "su2-inventory-fundamentals",
    scope: {
      ar: "الوحدة 2، المبحث 2.2: تحديد الملكية وتكلفة المخزون والجرد الدوري والمستمر وأخطاء القطع.",
      en: "Study Unit 2, section 2.2: ownership and cost, periodic/perpetual records, physical counts and cutoff errors.",
    },
    concepts: {
      ar: "يشمل المخزون تكاليف الشراء غير القابلة للاسترداد والنقل والتهيئة اللازمة للوصول إلى المكان والحالة، ويستبعد مصروفات بيع عامة لا تحقق ذلك. يُحدّث النظام المستمر تكلفة المخزون والمبيعات مع كل عملية؛ أما الدوري فيشتق تكلفة المبيعات من الجرد نهاية الفترة، مع حاجة النظامين لجرد فعلي. بضائع الطريق FOB نقطة الشحن للمشتري من التسليم للناقل، وFOB الوجهة للبائع حتى الوصول؛ بضاعة الأمانة تظل لدى المرسِل حتى بيعها لطرف خارجي. مبالغة آخر المخزون تقلل تكلفة المبيعات وترفع ربح الفترة، وتنعكس عادةً على ربح الفترة التالية إذا بقيت الأرصدة الأخرى صحيحة.",
      en: "Inventory includes purchase amounts, nonrecoverable duties and direct costs to bring goods to location and condition, excluding unrelated selling costs. Perpetual records update inventory and COGS on each sale; periodic records derive COGS at period end, yet both require physical verification. FOB shipping-point goods generally belong to the buyer in transit, FOB destination to the seller until delivery; consigned goods belong to the consignor until sold externally. Overstating ending inventory understates COGS and overstates current-period income, with a usual reversal through next-period beginning inventory.",
    },
    workflow: {
      ar: "حدد من يتحمل الملكية ومخاطر الشحن يوم الجرد؛ أضف البضاعة بالطريق والأمانة المملوكة واستبعد غير المملوكة؛ أدرج التكاليف المباشرة؛ سوِّ الجرد الدفتري والفعلّي؛ احسب أثر أي قطع خاطئ على الربح.",
      en: "Determine ownership/risk at count date; include owned goods in transit and on consignment, exclude goods owned by others; capitalize direct costs; reconcile count and records; trace cutoff errors through income.",
    },
    pitfalls: {
      ar: "مكان البضاعة لا يحدد ملكيتها وحده. نظام الجرد المستمر لا يلغي الجرد الفعلي. خطأ شراء غير مسجل ومخزون غير مسجل معًا قد يترك تكلفة المبيعات والربح دون تغير مع نقص الأصول والالتزامات.",
      en: "Physical location alone does not determine ownership. A perpetual system still needs a physical count. An unrecorded credit purchase and matching unrecorded inventory can understate assets and liabilities without changing COGS or income.",
    },
    practicalCase: {
      titleAr: "بضاعة الطريق والأمانة",
      titleEn: "In-transit and consigned goods",
      scenarioAr:
        "بلغ الجرد الفعلي في المخزن 200,000، واستبعدت منه بضاعة مشتراة ومسجلة بـ25,000 تحت FOB نقطة الشحن لا تزال بالطريق، وبضاعة مملوكة أُرسلت بالأمانة بتكلفة 10,000. لا توجد فروق أخرى. ما المخزون الصحيح؟",
      scenarioEn:
        "The warehouse count is 200,000, excluding recorded purchases of 25,000 shipped FOB shipping point still in transit and owned goods costing 10,000 sent on consignment. No other differences. Find ending inventory.",
      solutionAr:
        "200,000 + 25,000 + 10,000 = 235,000. لا تنتظر وصول بضاعة FOB نقطة الشحن ولا بيع الوكيل حتى تثبت ملكية المنشأة.",
      solutionEn:
        "200,000 + 25,000 + 10,000 = 235,000. Neither arrival of FOB shipping-point goods nor sale by the consignee is needed for the owner to include them.",
    },
  },
  "su2-cost-flow": {
    topicId: "su2-cost-flow",
    scope: {
      ar: "الوحدة 2، المبحث 2.3: تعيين التكلفة بالتحديد المحدد والمتوسط وFIFO وLIFO، مع أثر دوري/مستمر.",
      en: "Study Unit 2, section 2.3: specific identification, averages, FIFO and periodic/perpetual LIFO.",
    },
    concepts: {
      ar: "التحديد المحدد مناسب للسلع المتميزة؛ المتوسط المرجح الدوري يحسب تكلفة موحدة بنهاية الفترة، والمتحرك يعيد الحساب بعد كل شراء. FIFO يفترض بيع الأقدم أولًا، فتتطابق نتائجه الختامية في النظامين عند نفس المعاملات؛ LIFO يفترض بيع الأحدث وقد تختلف نتيجته الدورية والمستمرة عند تداخل الشراء والبيع. في ارتفاع الأسعار المنتظم، يكون مخزون FIFO وربحه غالبًا أعلى من LIFO، لكن النتيجة ليست قاعدة عامة عند تقلب الأسعار؛ وتمنع IFRS استعمال LIFO.",
      en: "Specific identification traces unique units; periodic weighted average pools costs at period-end, while moving average recalculates after purchases. FIFO assigns older costs to sales and normally has the same ending result in periodic and perpetual systems for identical transactions. LIFO assigns newer costs to sales, and periodic/perpetual results may diverge when transactions interleave. Under steadily rising prices FIFO normally yields higher inventory and income than LIFO, but this is not universal when prices fluctuate; IFRS prohibits LIFO.",
    },
    workflow: {
      ar: "احسب الوحدات المتاحة والمباعة والباقية؛ ثبّت تسلسل المشتريات والمبيعات؛ طبق الطبقات عند كل بيع للمستمر أو نهاية الفترة للدوري؛ طابق تكلفة المتاح مع تكلفة المبيعات + المخزون.",
      en: "Count available, sold and remaining units; preserve transaction sequence; apply cost layers at each sale for perpetual or period-end for periodic; reconcile goods available to COGS plus ending inventory.",
    },
    pitfalls: {
      ar: "المتوسط المتحرك ليس المتوسط الدوري. لا تستخدم أحدث طبقة مشتراة بعد البيع في LIFO المستمر لذلك البيع. لا تستنتج أن الأعلى دائمًا FIFO إن انخفضت الأسعار.",
      en: "Moving average differs from periodic weighted average. Perpetual LIFO cannot assign costs from purchases after a sale. FIFO is not always higher when prices fall.",
    },
    practicalCase: {
      titleAr: "فرق LIFO الدوري والمستمر",
      titleEn: "Periodic versus perpetual LIFO",
      scenarioAr:
        "أول المدة 10 وحدات بسعر 10، شراء 10 بسعر 12، بيع 12، شراء 10 بسعر 14، بيع 8. احسب تكلفة المبيعات والمخزون الختامي بطريقتَي LIFO.",
      scenarioEn:
        "Opening 10 units cost 10 each; buy 10 at 12; sell 12; buy 10 at 14; sell 8. Compute COGS and closing inventory under both LIFO systems.",
      solutionAr:
        "المتاح 360 وبقي 10 وحدات. الدوري: تكلفة المبيعات 10×14 + 10×12 = 260 والمخزون 100. المستمر: البيع الأول 10×12 + 2×10 = 140؛ الثاني 8×14 = 112؛ الإجمالي 252 والمخزون 108 (8×10 + 2×14).",
      solutionEn:
        "Available cost is 360 and 10 units remain. Periodic: COGS 10×14 + 10×12 = 260, ending 100. Perpetual: first sale 10×12 + 2×10 = 140; second 8×14 = 112; COGS 252, ending 108 (8×10 + 2×14).",
    },
  },
  "su2-subsequent-measurement": {
    topicId: "su2-subsequent-measurement",
    scope: {
      ar: "الوحدة 2، المبحث 2.4: قياس المخزون الأمريكي بعد الاعتراف والأرضية والسقف وصافي القيمة وفروق IFRS.",
      en: "Study Unit 2, section 2.4: U.S. subsequent valuation, market floor/ceiling, NRV and IFRS comparison.",
    },
    concepts: {
      ar: "وفق US GAAP يُقاس مخزون LIFO أو التجزئة بالأقل من التكلفة أو «السوق»؛ السوق تكلفة الاستبدال المقيدة بسقف صافي القيمة القابلة للتحقق وأرضية صافي القيمة ناقص هامش ربح عادي. أما FIFO والمتوسط وغيرهما فعادةً بالأقل من التكلفة أو صافي القيمة القابلة للتحقق. NRV = سعر البيع المتوقع ناقص تكلفة الإكمال والتصرف. يُعترف بهبوط المخزون في الربح ولا تُرد خسارة السنة السابقة في القوائم الأمريكية السنوية عادةً؛ وفق IAS 2 يطبق الأقل من التكلفة وNRV على جميع الطرق المسموحة ويمكن رد الهبوط إذا تحسنت الظروف بما لا يتجاوز التكلفة الأصلية.",
      en: "Under U.S. GAAP LIFO and retail-method inventories use lower of cost or market; replacement cost is constrained by an NRV ceiling and an NRV-less-normal-profit floor. FIFO, average and other methods generally use lower of cost and NRV. NRV is expected selling price less completion/disposal costs. An annual U.S. GAAP write-down establishes a new basis with no subsequent annual reversal; IAS 2 applies cost/NRV to permitted methods and reverses prior write-downs if circumstances improve, capped at original cost.",
    },
    workflow: {
      ar: "حدد إطار التقرير وطريقة تدفق التكلفة؛ احسب NRV والأرضية إن كان LIFO/تجزئة أمريكيًا؛ قيد تكلفة الاستبدال بين الأرضية والسقف؛ قارن الناتج بالتكلفة؛ اعرض الخسارة وراقب سياسة ردها بحسب الإطار.",
      en: "Identify framework and cost-flow method; calculate NRV and, for U.S. LIFO/retail, its floor; constrain replacement cost between floor and ceiling; compare with cost; recognize loss and apply framework-specific reversal rules.",
    },
    pitfalls: {
      ar: "السوق في قاعدة LCM ليس القيمة السوقية الحرة دون حدود. لا تستخدم أرضية الربح الطبيعي مع FIFO. لا تنقل قاعدة منع الرد الأمريكية إلى IFRS ولا تتجاوز التكلفة الأصلية عند الرد وفق IFRS.",
      en: "LCM market is constrained replacement cost, not unrestricted fair value. Do not use the normal-profit floor with FIFO. Do not apply the U.S. no-reversal rule to IFRS, and never reverse above original cost under IFRS.",
    },
    practicalCase: {
      titleAr: "مقارنة LCM وLCNRV",
      titleEn: "Compare LCM and LCNRV",
      scenarioAr:
        "تكلفة المخزون 120,000، تكلفة الاستبدال 93,000، NRV تساوي 108,000، وهامش الربح العادي 9,000. احسب القيمة والخسارة وفق US GAAP إذا استُخدم LIFO، ثم FIFO.",
      scenarioEn:
        "Inventory cost is 120,000, replacement cost 93,000, NRV 108,000 and normal profit 9,000. Find U.S. GAAP carrying amount and loss under LIFO, then FIFO.",
      solutionAr:
        "أرضية LIFO = 108,000 − 9,000 = 99,000؛ المقيد بين 99,000 و108,000 يجعل السوق 99,000؛ الأقل من 120,000 و99,000 هو 99,000 والخسارة 21,000. مع FIFO الأقل من التكلفة وNRV هو 108,000 والخسارة 12,000.",
      solutionEn:
        "LIFO floor = 108,000 − 9,000 = 99,000; constrained replacement cost becomes 99,000; lower of 120,000 and 99,000 is 99,000, a 21,000 loss. FIFO uses cost/NRV: 108,000 carrying amount and 12,000 loss.",
    },
  },
  ...CMA_TOPIC_GUIDES_3_4,
  ...CMA_TOPIC_GUIDES_5_6,
  ...Object.fromEntries(
    Object.entries({
      ...CMA_TOPIC_GUIDES_7_9,
      ...CMA_TOPIC_GUIDES_10_11,
      ...CMA_TOPIC_GUIDES_12,
      ...CMA_TOPIC_GUIDES_13,
      ...CMA_TOPIC_GUIDES_14,
    }).map(([id, guide]) => [
      id,
      {
        ...guide,
        lessonSections: [
          ...(guide.lessonSections ?? []),
          ...(CMA_GUIDE_DETAILS_7_9[id] ?? []),
          ...(CMA_GUIDE_DETAILS_10_14[id] ?? []),
        ],
      },
    ]),
  ),
  ...CMA_TOPIC_GUIDES_15_20,
  ...CMA_PART2_GUIDES_1_7,
  ...CMA_PART2_GUIDES_8_15,
};

/** Original linked practice cases for the 2026 case-based assessment style. */
export interface CmaStudyUnitCase {
  studyUnit: CmaStudyUnit;
  title: { ar: string; en: string };
  scenario: { ar: string; en: string };
  tasks: { prompt: { ar: string; en: string }; solution: { ar: string; en: string } }[];
}

export const CMA_STUDY_UNIT_CASES: CmaStudyUnitCase[] = [
  {
    studyUnit: 1,
    title: {
      ar: "حالة مترابطة: التقارير المالية لمجموعة",
      en: "Linked case: a group's financial statements",
    },
    scenario: {
      ar: "اشترت مجموعة حصة مسيطرة في شركة تابعة مقابل 300,000. بلغت القيمة العادلة للحصة غير المسيطرة 80,000، والأصول المحددة 500,000، والالتزامات 150,000. خلال السنة باعت الأم للتابعة بضائع بـ50,000 تكلفتها 35,000؛ بقي 40% منها لدى التابعة بنهاية السنة. بلغ ربح الأم المعلن 100,000 متضمنًا ربح البيع الداخلي 15,000، وزادت ذممها التجارية 12,000، وبلغ إهلاكها 8,000. افترض غياب معاملات أو تسويات أخرى. حل المطالب بحسب نطاق كل منها: الشهرة عند الاستحواذ، والربح غير المتحقق في المخزون الموحد، والتدفق التشغيلي غير المباشر للأم قبل أي تسويات توحيد.",
      en: "A group buys a controlling stake for 300,000. The NCI fair value is 80,000; identifiable assets are 500,000 and liabilities 150,000. During the year the parent sells goods to the subsidiary for 50,000 at a cost of 35,000; 40% remains with the subsidiary at year-end. The parent's reported income is 100,000, including the 15,000 intragroup gain; trade receivables rise 12,000 and depreciation is 8,000. Assume no other transactions or adjustments. Address each requested scope separately: acquisition goodwill, unrealized profit in consolidated inventory, and the parent's indirect operating cash flow before consolidation adjustments.",
    },
    tasks: [
      {
        prompt: { ar: "احسب الشهرة عند الاستحواذ.", en: "Calculate goodwill on acquisition." },
        solution: {
          ar: "صافي الأصول 500,000−150,000=350,000؛ الشهرة 300,000+80,000−350,000=30,000.",
          en: "Net identifiable assets =500,000−150,000=350,000; goodwill =300,000+80,000−350,000=30,000.",
        },
      },
      {
        prompt: {
          ar: "كم ربح المخزون الداخلي غير المتحقق؟ وكيف يُعالج؟",
          en: "How much intragroup inventory profit is unrealized, and what is the consolidation treatment?",
        },
        solution: {
          ar: "الربح على البيع 15,000؛ غير المتحقق 40%×15,000=6,000. يُستبعد الربح ويخفض المخزون الموحد 6,000، مع إلغاء البيع الداخلي كاملًا 50,000 مقابل الشراء/تكلفة المبيعات.",
          en: "Sale profit is 15,000; unrealized portion =40%×15,000=6,000. Eliminate this profit and reduce consolidated inventory by 6,000, while eliminating the entire 50,000 intragroup sale against purchases/COGS.",
        },
      },
      {
        prompt: {
          ar: "احسب التدفق التشغيلي غير المباشر للأم قبل تسويات التوحيد.",
          en: "Calculate the parent's indirect operating cash flow before consolidation adjustments.",
        },
        solution: {
          ar: "100,000+8,000 إهلاك−12,000 زيادة ذمم=96,000. لا تطرح ربح البيع الداخلي من قائمة الأم المنفردة باعتباره ربح بيع أصل استثماري؛ معاملة التوحيد مستقلة.",
          en: "100,000+8,000 depreciation−12,000 receivables increase=96,000. Do not treat the parent's intragroup inventory margin as an investing disposal gain in its standalone cash-flow reconciliation; consolidation is a separate adjustment.",
        },
      },
    ],
  },
  {
    studyUnit: 2,
    title: { ar: "حالة مترابطة: الذمم والمخزون", en: "Linked case: receivables and inventory" },
    scenario: {
      ar: "شركة تجارية لديها ذمم 120,000 منها 90,000 بخسارة مقدرة 2% و30,000 بخسارة 10%. المخصص غير المعدل دائن 1,000. في الجرد: 15 وحدة مخزون أول المدة بسعر 10، ثم شراء 10 وحدات بسعر 14، ثم بيع 12، ثم شراء 5 بسعر 18 وبيع 8. تستخدم LIFO المستمر في دفاترها الأمريكية. بقي 10 وحدات، وتُظهر ورقة عمل مبدئية تكلفة ختامية 116 تتطلب المراجعة؛ قيمة الاستبدال 100، وNRV تساوي 105، والربح العادي 10، وكلها للمجموعة المتبقية. افترض عدم وجود ضرائب أو تغيرات أخرى.",
      en: "A retailer has 120,000 of receivables: 90,000 with estimated loss 2% and 30,000 at 10%. Its unadjusted allowance is a 1,000 credit. Inventory opens with 15 units at 10, then 10 units are purchased at 14, 12 sold, 5 purchased at 18, and 8 sold. The U.S. books use perpetual LIFO. Ten units remain; a preliminary worksheet reports ending cost of 116, which needs review. Replacement cost is 100, NRV is 105 and normal profit is 10, all for the remaining group. Assume no taxes or other changes.",
    },
    tasks: [
      {
        prompt: {
          ar: "احسب مصروف خسائر الائتمان وصافي الذمم.",
          en: "Calculate credit-loss expense and net receivables.",
        },
        solution: {
          ar: "المخصص المطلوب 90,000×2%+30,000×10%=4,800؛ المصروف 4,800−1,000=3,800؛ الصافي 120,000−4,800=115,200.",
          en: "Required allowance =90,000×2%+30,000×10%=4,800; expense =4,800−1,000=3,800; net receivables =120,000−4,800=115,200.",
        },
      },
      {
        prompt: {
          ar: "احسب تكلفة المبيعات والرصيد المتبقي وفق LIFO المستمر.",
          en: "Calculate perpetual LIFO COGS and ending cost.",
        },
        solution: {
          ar: "المتاح 150+140+90=380. البيع الأول 10×14+2×10=160؛ الباقي 13×10. البيع الثاني 5×18+3×10=120؛ تكلفة المبيعات 280، والباقي 10×10=100. إذن قيمة 116 المعطاة في السيناريو لا تتفق مع دفتر LIFO ويجب تصحيحها إلى 100 قبل اختبار الهبوط.",
          en: "Available cost =150+140+90=380. First sale: 10×14+2×10=160, leaving 13×10. Second sale: 5×18+3×10=120. COGS =280 and remaining cost =10×10=100. The scenario's stated book figure of 116 conflicts with perpetual LIFO and must be corrected to 100 before impairment testing.",
        },
      },
      {
        prompt: {
          ar: "بعد تصحيح التكلفة، هل يُسجل هبوط وفق قاعدة LIFO الأمريكية؟",
          en: "After correcting cost, is there a U.S. LIFO write-down?",
        },
        solution: {
          ar: "الأرضية NRV−الربح الطبيعي=105−10=95، والسقف 105. الاستبدال 100 بينهما؛ الأقل من التكلفة المصححة 100 والسوق 100 هو 100، فلا هبوط. استعمال 116 الخطأ يولّد خسارة وهمية 16.",
          en: "The floor is NRV less normal profit =105−10=95 and the ceiling 105. Replacement 100 lies between them; lower of corrected cost 100 and market 100 is 100, so no write-down. The erroneous 116 would create a false 16 loss.",
        },
      },
    ],
  },
  ...CMA_STUDY_UNIT_CASES_3_4,
  ...CMA_STUDY_UNIT_CASES_5_6,
  ...CMA_STUDY_UNIT_CASES_7_9,
  ...CMA_STUDY_UNIT_CASES_10_11,
  ...CMA_STUDY_UNIT_CASES_12,
  ...CMA_STUDY_UNIT_CASES_13,
  ...CMA_STUDY_UNIT_CASES_14,
  ...CMA_STUDY_UNIT_CASES_15_20,
  ...CMA_PART2_CASES_1_7,
  ...CMA_PART2_CASES_8_15,
];
