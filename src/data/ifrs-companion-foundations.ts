export type LearningLanguage = "ar" | "en";

type Localized = { ar: string; en: string };
export type CompanionQuestion = { prompt: Localized; answer: Localized };
export type CompanionModule = {
  id: string;
  title: Localized;
  note: Localized;
  questions: CompanionQuestion[];
  referenceLabel: string;
  referenceUrl: string;
};

export const IFRS_COMPANION_MODULES: CompanionModule[] = [
  {
    id: "standard-setting",
    title: { ar: "كيف تُصنع المعايير؟", en: "How are IFRS Standards made?" },
    note: {
      ar: "مدخل مؤسسي مستقل؛ ليس معيارًا محاسبيًا ضمن قائمة IFRS وIAS.",
      en: "A separate institutional primer, not an IFRS or IAS Accounting Standard.",
    },
    questions: [
      {
        prompt: { ar: "ما غاية مؤسسة IFRS؟", en: "What is the IFRS Foundation's purpose?" },
        answer: {
          ar: "تطور المؤسسة معايير عالية الجودة لزيادة شفافية المعلومات والمساءلة وكفاءة أسواق المال، وتشجع استعمالها المتسق عالميًا. يصدر IASB معايير المحاسبة ويصدر ISSB معايير إفصاحات الاستدامة؛ ولا يعني صدور معيار أن كل ولاية قضائية تبنته تلقائيًا.",
          en: "The Foundation develops high-quality Standards to improve transparency, accountability and capital-market efficiency, and supports their consistent global use. The IASB issues Accounting Standards and the ISSB Sustainability Disclosure Standards; issuance does not itself mean every jurisdiction has adopted a Standard.",
        },
      },
      {
        prompt: { ar: "ما الخطوات الأساسية لتطوير معيار جديد؟", en: "What are the main stages of developing a new Standard?" },
        answer: {
          ar: "تُحدد المسألة وجدواها، وتُجرى بحوث ومشاورات عامة وقد تصدر ورقة نقاش؛ ثم يُنشر مشروع معيار للتعليق، وتُحلل الردود والآثار وتُعاد المداولات قبل التصويت وإصدار النص النهائي. المراحل والمدد تخضع لدليل الإجراءات الواجبة الحالي، فلا تُعامل مدد الكتب القديمة كقاعدة ثابتة.",
          en: "The board identifies and researches an issue, consults publicly and may publish a discussion paper; it then exposes proposals, analyses comments and effects, redeliberates, votes and publishes the final Standard. The current Due Process Handbook governs stages and consultation periods, so older textbook timelines are not universal rules.",
        },
      },
      {
        prompt: { ar: "ماذا تفعل لجنة تفسيرات IFRS؟", en: "What does the IFRS Interpretations Committee do?" },
        answer: {
          ar: "تدعم التطبيق المتسق لمعايير المحاسبة القائمة: تبحث أسئلة التطبيق واسعة الأثر، وتنشر قرارات جدول أعمال توضح كيف تنطبق المتطلبات الموجودة، وقد تطور تفسيرًا أو توصي بتعديل محدود. ليست جهة تصدر معيارًا جديدًا بمجرد الإجابة عن سؤال.",
          en: "It supports consistent application of existing Accounting Standards by analysing widespread application questions, publishing agenda decisions that explain existing requirements, and sometimes developing an Interpretation or recommending a narrow-scope amendment. Answering a question does not itself create a new Standard.",
        },
      },
      {
        prompt: { ar: "لماذا تفيد معايير محاسبية دولية قابلة للمقارنة؟", en: "Why are globally comparable Accounting Standards useful?" },
        answer: {
          ar: "تساعد لغة تقرير موحدة على مقارنة المخاطر والأداء عبر المنشآت والحدود وتقلل تكلفة تفسير قوائم أُعدت بأسس متباينة. لكنها لا تلغي اختلاف الوقائع الاقتصادية أو قرارات التبني والإنفاذ المحلية، ولا تضمن بذاتها انخفاض تكلفة رأس المال لكل منشأة.",
          en: "A common reporting language helps compare performance and risk across entities and borders and reduces the cost of interpreting accounts prepared on different bases. It does not erase economic differences or local adoption and enforcement decisions, nor guarantee a lower cost of capital for every company.",
        },
      },
      {
        prompt: { ar: "هل تملك مؤسسة IFRS سلطة إنفاذ المعايير في كل دولة؟", en: "Can the IFRS Foundation enforce Standards in every jurisdiction?" },
        answer: {
          ar: "لا؛ تضع المؤسسة المعايير وتدعم تطبيقها المتسق، بينما تقرر السلطات في كل ولاية اعتمادها وتنظيم الالتزام والإنفاذ. لذلك لا يُخلط بين سلطة وضع المعيار وسلطة الجهات الرقابية على المنشآت.",
          en: "No. The Foundation sets Standards and supports consistent application, while jurisdictions decide adoption and regulate and enforce compliance. Standard setting is distinct from a regulator's authority over reporting entities.",
        },
      },
      {
        prompt: { ar: "هل IASB مسؤول عن وضع معايير المحاسبة؟", en: "Is the IASB responsible for setting IFRS Accounting Standards?" },
        answer: {
          ar: "نعم. IASB هو مجلس وضع معايير المحاسبة الدولية ضمن مؤسسة IFRS؛ ويجب تمييزه عن ISSB الذي يضع معايير إفصاحات الاستدامة، وعن لجنة التفسيرات التي تدعم التطبيق المتسق لمعايير المحاسبة.",
          en: "Yes. The IASB sets IFRS Accounting Standards within the IFRS Foundation. It differs from the ISSB, which sets Sustainability Disclosure Standards, and the Interpretations Committee, which supports consistent application of Accounting Standards.",
        },
      },
    ],
    referenceLabel: "IFRS Foundation — Due Process",
    referenceUrl: "https://www.ifrs.org/about-us/our-due-process/",
  },
  {
    id: "climate-disclosure",
    title: { ar: "مخاطر وفرص المناخ — IFRS S2", en: "Climate risks and opportunities — IFRS S2" },
    note: {
      ar: "هذا معيار إفصاح استدامة، وليس ضمن قائمة معايير المحاسبة الكاملة المعروضة.",
      en: "This is a Sustainability Disclosure Standard, not one of the full Accounting Standards listed here.",
    },
    questions: [
      {
        prompt: { ar: "ما المقصود بمخاطر المناخ وفرصه؟ أعط أمثلة.", en: "What are climate-related risks and opportunities? Give examples." },
        answer: {
          ar: "المخاطر المادية مثل الفيضانات والحرارة قد تعطل أصلًا أو سلسلة توريد؛ ومخاطر الانتقال مثل تغير التنظيم أو طلب العملاء قد تخفض قيمة منتج كثيف الانبعاثات. وفي المقابل قد تفتح كفاءة الطاقة أو منتجات أقل انبعاثًا أسواقًا جديدة. لا تُدرج كل قضية بيئية آليًا: يركز IFRS S2 على ما يُتوقع بصورة معقولة أن يؤثر في آفاق المنشأة.",
          en: "Physical risks such as floods or heat can disrupt assets and supply chains; transition risks such as policy or customer-demand changes can erode carbon-intensive products. Energy efficiency or lower-emission products may create opportunities. Not every environmental issue is automatically disclosed: IFRS S2 focuses on matters reasonably expected to affect the entity's prospects.",
        },
      },
      {
        prompt: { ar: "لماذا تهم هذه الإفصاحات المستثمرين؟", en: "Why do investors need these disclosures?" },
        answer: {
          ar: "لأنها تساعدهم على تقييم التدفقات النقدية المستقبلية والقدرة على التمويل وتكلفته ومرونة نموذج الأعمال. ينظم IFRS S2 الإفصاح حول الحوكمة والاستراتيجية وإدارة المخاطر والمقاييس والأهداف؛ لا يحول كل خطر مناخي بحد ذاته إلى مخصص أو أصل في القوائم المحاسبية.",
          en: "They help investors assess future cash flows, access to finance, cost of capital and business-model resilience. IFRS S2 structures disclosure around governance, strategy, risk management, metrics and targets; a climate risk does not by itself become an accounting provision or asset.",
        },
      },
      {
        prompt: { ar: "ما المحاور الأربعة الرئيسية لإفصاحات IFRS S2؟", en: "What are the four main IFRS S2 disclosure areas?" },
        answer: {
          ar: "الحوكمة، والاستراتيجية، وإدارة المخاطر، والمقاييس والأهداف. يشرح كل محور جانبًا مختلفًا: من يشرف على مخاطر وفرص المناخ، وكيف تؤثر في نموذج الأعمال والخطة، وكيف تُحدد وتراقب، وكيف يُقاس الأداء والتقدم.",
          en: "Governance, strategy, risk management, and metrics and targets. Together they explain who oversees climate matters, how risks and opportunities affect the business and plan, how they are identified and monitored, and how performance and progress are measured.",
        },
      },
    ],
    referenceLabel: "IFRS Foundation — IFRS S2",
    referenceUrl: "https://www.ifrs.org/issued-standards/ifrs-sustainability-standards-navigator/ifrs-s2-climate-related-disclosures/",
  },
  {
    id: "conceptual-framework",
    title: { ar: "الإطار المفاهيمي للتقرير المالي", en: "Conceptual Framework for Financial Reporting" },
    note: {
      ar: "مرجع للمفاهيم وتطوير السياسات عند غياب معيار منطبق؛ لا يتغلب على متطلبات معيار محدد.",
      en: "A conceptual guide and policy-development aid when no Standard applies; it does not override an applicable Standard.",
    },
    questions: [
      {
        prompt: { ar: "لِمَ يُستخدم الإطار المفاهيمي؟", en: "What is the Conceptual Framework used for?" },
        answer: {
          ar: "يساعد IASB على بناء متطلبات متسقة، ويساعد المنشآت على تطوير سياسة محاسبية عندما لا يوجد معيار منطبق أو عندما يسمح المعيار بالاختيار، ويساعد القراء على فهم المعايير. لكنه ليس معيارًا مستقلًا ولا يلغي نص معيار خاص.",
          en: "It helps the IASB develop consistent requirements, helps preparers develop a policy when no Standard applies or a choice is permitted, and helps readers understand Standards. It is not itself a Standard and cannot displace a specific requirement.",
        },
      },
      {
        prompt: { ar: "من المستخدمون الأساسيون للتقرير العام، وماذا يريدون معرفته؟", en: "Who are the primary users of general purpose reports and what do they need?" },
        answer: {
          ar: "المستثمرون الحاليون والمحتملون والمقرضون والدائنون الآخرون يحتاجون معلومات لتقييم التدفقات النقدية المقبلة وكيف تدير الإدارة موارد المنشأة. قد يستفيد الموظفون والموردون والجهات الحكومية أيضًا، لكن تصميم التقرير العام لا يهدف إلى تلبية كل مطلب خاص لكل فئة.",
          en: "Existing and potential investors, lenders and other creditors need information to assess future net cash inflows and management's stewardship of resources. Employees, suppliers and public authorities may also benefit, but general purpose reporting cannot meet every group's specific information request.",
        },
      },
      {
        prompt: { ar: "ما هدف التقرير المالي العام؟", en: "What is the objective of general purpose financial reporting?" },
        answer: {
          ar: "توفير معلومات مالية نافعة عن المنشأة لاتخاذ قرارات تقديم الموارد لها، مثل شراء أدوات الملكية أو الدين، أو منح القروض، أو ممارسة حقوق التصويت المؤثرة في الإدارة. لا تستهدف القوائم بيان قيمة المنشأة الدقيقة في رقم واحد، لكنها توفر مدخلات لتقديرها.",
          en: "To provide useful financial information about the reporting entity for decisions on providing resources—for example investing in equity or debt, lending, or exercising voting rights that affect management. Statements do not purport to give a single exact valuation of the entity.",
        },
      },
      {
        prompt: { ar: "كيف يعرّف الإطار الأصل والالتزام وحقوق الملكية؟", en: "How does the Framework define an asset, liability and equity?" },
        answer: {
          ar: "الأصل مورد اقتصادي حالي تسيطر عليه المنشأة نتيجة أحداث سابقة؛ والمورد حق لديه القدرة على إنتاج منافع اقتصادية. الالتزام واجب حالي على المنشأة بتحويل مورد اقتصادي نتيجة أحداث سابقة. حقوق الملكية هي الحصة المتبقية في الأصول بعد طرح جميع الالتزامات.",
          en: "An asset is a present economic resource controlled by the entity as a result of past events; an economic resource is a right with potential to produce economic benefits. A liability is a present obligation to transfer an economic resource as a result of past events. Equity is the residual interest in assets after deducting liabilities.",
        },
      },
      {
        prompt: { ar: "ما الفرق بين الملاءمة والتمثيل الصادق والقابلية للمقارنة والتحقق؟", en: "How do relevance, faithful representation, comparability and verifiability differ?" },
        answer: {
          ar: "الملاءمة تجعل المعلومة قادرة على التأثير في القرار بقيمة تنبؤية أو تأكيدية؛ والتمثيل الصادق يقتضي اكتمال الوصف وحياده وخلو عمليته من الخطأ. هاتان خاصيتان أساسيتان. المقارنة تكشف أوجه الشبه والاختلاف بين الفترات والمنشآت، والتحقق يمكّن ملاحظين مستقلين مطلعين من بلوغ اتفاق معقول بشأن الوصف؛ وهما خاصيتان معززتان، ولا تعني المقارنة فرض معالجة موحدة لوقائع مختلفة.",
          en: "Relevance means information can affect a decision through predictive or confirmatory value; faithful representation calls for a complete, neutral and error-free depiction. Both are fundamental. Comparability reveals similarities and differences across periods and entities; verifiability allows independent knowledgeable observers to reach reasonable agreement. Both are enhancing characteristics; comparability is not enforced uniformity for unlike facts.",
        },
      },
      {
        prompt: { ar: "ما مزايا إطار مفاهيمي موحد، وما حدوده؟", en: "What are the advantages and limits of a shared conceptual framework?" },
        answer: {
          ar: "يمنح واضعي المعايير والمعدين لغة مفاهيمية متسقة ويساعد على تفسير المسائل الجديدة وتقليل التعارض بين المتطلبات. لكنه لا يلبي كل احتياجات المستخدمين على نحو منفرد ولا يحل تلقائيًا خلافات القياس، ولا يتغلب على معيار خاص واجب التطبيق.",
          en: "It gives standard setters and preparers a consistent conceptual language and helps analyse new issues and avoid conflicting requirements. It cannot satisfy every user's needs or automatically settle measurement trade-offs, and it never overrides a specific applicable Standard.",
        },
      },
      {
        prompt: { ar: "متى يُعترف ببند يطابق تعريف أصل أو التزام؟", en: "When is an item that meets an asset or liability definition recognised?" },
        answer: {
          ar: "لا يكفي انطباق التعريف وحده. يُعترف بالبند عندما يوفر الاعتراف معلومات ملائمة وتمثيلًا صادقًا، بعد مراعاة عدم اليقين في الوجود أو القياس وقيد التكلفة. ثم تُطبق قواعد الاعتراف الخاصة بأي معيار ذي صلة قبل اللجوء إلى الإطار.",
          en: "Meeting the definition alone is not enough. Recognition should provide relevant information and a faithful representation, considering existence or measurement uncertainty and the cost constraint. Specific applicable Standard requirements take precedence over the Framework.",
        },
      },
      {
        prompt: { ar: "ما أسس القياس الرئيسة في الإطار؟", en: "What are the Framework's main measurement bases?" },
        answer: {
          ar: "التكلفة التاريخية والقيمة الحالية؛ وتضم القيمة الحالية القيمة العادلة وقيمة الاستخدام للأصول أو قيمة الوفاء للالتزامات والتكلفة الحالية. لا تُختار التكلفة التاريخية لمجرد شيوعها: يحدد المعيار المنطبق أساس القياس المناسب.",
          en: "Historical cost and current value; current value encompasses fair value, value in use for assets or fulfilment value for liabilities, and current cost. Historical cost is not selected merely because it is common: the applicable Standard determines the measurement basis.",
        },
      },
    ],
    referenceLabel: "IFRS Foundation — Conceptual Framework",
    referenceUrl: "https://www.ifrs.org/issued-standards/list-of-standards/conceptual-framework/",
  },
  {
    id: "smes",
    title: { ar: "IFRS للمنشآت الصغيرة والمتوسطة", en: "IFRS for SMEs Accounting Standard" },
    note: {
      ar: "نظام محاسبي قائم بذاته خارج قائمة معايير IFRS الكاملة المعروضة. الإصدار الثالث 2025 يسري للفترات التي تبدأ من 1 يناير 2027، مع السماح بالتطبيق المبكر؛ تُراجع أحكام الفترة والولاية القضائية قبل الاستخدام.",
      en: "A self-contained regime outside the full IFRS Accounting Standards listed here. The 2025 third edition is effective for periods beginning 1 January 2027, with early application permitted; check period and local adoption before applying it.",
    },
    questions: [
      {
        prompt: { ar: "ما مزايا وتكاليف اختيار معيار SMEs بدل IFRS الكامل؟", en: "What are the benefits and costs of using the SME Standard instead of full IFRS?" },
        answer: {
          ar: "للمنشأة المؤهلة التي لا تتمتع بمساءلة عامة، قد تخفض متطلبات القياس والإفصاح الأبسط تكلفة الإعداد وتزيد مناسبة المعلومات للمقرضين والملاك. في المقابل قد تقل المقارنة مع المنشآت المدرجة، وتلزم تكلفة تدريب وتغيير نظم عند التحول، ويجب التأكد من أهلية المنشأة واعتماد النسخة لدى الجهة التنظيمية. ليست البساطة إذن سببًا لتطبيقه على منشأة ملزمة بـIFRS الكامل.",
          en: "For an eligible entity without public accountability, simpler measurement and disclosure can reduce preparation costs and better fit lenders' and owners' needs. Trade-offs include less comparability with listed entities and transition training/system costs. Eligibility and jurisdictional adoption must be checked; simplicity alone does not permit a full-IFRS reporter to switch.",
        },
      },
      {
        prompt: { ar: "اذكر تبسيطات محددة، وما الذي تغيّر في إصدار 2025؟", en: "Give specific simplifications and identify the 2025 edition boundary." },
        answer: {
          ar: "في الإصدار الثالث، تُحمّل تكاليف البحث والتطوير الداخلي مصروفًا عادةً وفق القسم 18 ما لم تدخل في تكلفة أصل آخر مستوفٍ للشروط؛ بينما قد يتطلب IAS 38 رسملة تطوير مؤهل. وتقاس العقارات الاستثمارية وفق القسم 16 بالقيمة العادلة إذا أمكن قياسها باعتمادية من دون تكلفة أو جهد لا داعي لهما، وإلا بنموذج التكلفة؛ فلا يصح قول إن جميعها بالقيمة العادلة. في تجميع الأعمال يقاس نصيب غير المسيطرين بالحصة النسبية من صافي الأصول وفق القسم 19. أعاد إصدار 2025 صياغة أقسام مهمة، منها 2 و11 و12 و19 و23، ولذلك لا تُنسخ مقارنة طبعة سابقة كحكم نهائي.",
          en: "In the third edition, internally incurred research and development is normally expensed under Section 18 unless it forms part of another qualifying asset; eligible development can require capitalisation under full IAS 38. Section 16 measures investment property at fair value when reliable measurement is available without undue cost or effort, otherwise at cost—not every property is at fair value. Section 19 measures NCI at its proportionate share of net assets. The 2025 edition materially revises Sections 2, 11, 12, 19 and 23, so comparisons from an older edition cannot be reused uncritically.",
        },
      },
      {
        prompt: { ar: "ما المقصود بالتقرير المالي المتمايز؟", en: "What is differential financial reporting?" },
        answer: {
          ar: "هو تكييف متطلبات التقارير لفئات مختلفة من المنشآت بدل افتراض أن حجم الإفصاح والتعقيد المناسب للشركات ذات المساءلة العامة يناسب الجميع. في معيار SMEs يُحدد النطاق أساسًا بمفهوم المساءلة العامة وإعداد قوائم عامة، لا بمجرد حد رقمي موحّد للحجم.",
          en: "It tailors reporting requirements to different classes of entities rather than assuming the full disclosure and complexity of publicly accountable companies suits everyone. SME eligibility centres on public accountability and general purpose reporting, not a universal numeric size threshold.",
        },
      },
      {
        prompt: { ar: "هل تختلف مبادئ إثبات المخصص في معيار SMEs جذريًا عن IAS 37؟", en: "Are SME provision-recognition principles fundamentally different from IAS 37?" },
        answer: {
          ar: "لا. يتطلب القسم 21 التزامًا حاليًا ناشئًا عن حدث سابق، ورجحان تدفق موارد للتسوية، وإمكان تقدير المبلغ بموثوقية. الاختلاف في حجم وتفصيل النظام لا يعني أن أي نية إنفاق مستقبلية تصبح مخصصًا. يُرجع إلى نص القسم 21 للفترة المطبقة بدل تعميم كل فروق IAS 37.",
          en: "No. Section 21 requires a present obligation from a past event, probable outflow and a reliably estimable amount. A simpler reporting regime does not turn an intention to incur future costs into a provision. Apply the version of Section 21 relevant to the reporting period rather than generalising every IAS 37 difference.",
        },
      },
      {
        prompt: { ar: "اذكر موضوعين من IFRS الكامل لا يعالجهما معيار SMEs كمعايير مستقلة.", en: "Name two full-IFRS topics not separately covered by the SME Standard." },
        answer: {
          ar: "من أمثلة الفصل ربحية السهم وفق IAS 33، وتقارير القطاعات وفق IFRS 8، والتقرير المالي المرحلي وفق IAS 34. لا تُستنتج من غياب فصل مستقل حرية خلط متطلبات IFRS الكامل مع نظام SMEs؛ يمكن تقديم معلومات طوعية مفيدة دون الادعاء بتطبيق معيار كامل منفرد.",
          en: "Examples include earnings per share under IAS 33, operating segments under IFRS 8 and interim financial reporting under IAS 34. The absence of a separate SME section is not permission to mix selected full-IFRS recognition rules into the SME regime; useful voluntary information can be supplied without asserting piecemeal compliance.",
        },
      },
      {
        prompt: { ar: "متى يُعترف بإيراد بيع سلعة وفق إصدار SMEs لعام 2025؟", en: "When is revenue from a sale of goods recognised under the 2025 SME edition?" },
        answer: {
          ar: "يطبق القسم 23 المحدَّث نموذج العقود مع العملاء: يُحدد الوعد والأداء المقابل له ويُثبت الإيراد عندما أو كلما تستوفي المنشأة الوعد بنقل السيطرة إلى العميل. انتقال المخاطر والمنافع مؤشر على السيطرة، لكنه ليس الاختبار الوحيد. جواب الطبعة الأقدم القائم على انتقال المخاطر وحده لا يكفي للإصدار الثالث.",
          en: "Revised Section 23 uses a customer-contract model: identify the promise and recognise revenue when or as it is fulfilled by transferring control to the customer. Transfer of risks and rewards is an indicator of control, not the sole test. The older edition's risks-and-rewards answer is insufficient for the third edition.",
        },
      },
      {
        prompt: { ar: "كيف تُعالج تكاليف الاقتراض وفق معيار SMEs؟", en: "How are borrowing costs treated under the SME Standard?" },
        answer: {
          ar: "ينص القسم 25.2 على إثبات جميع تكاليف الاقتراض مصروفًا في الربح أو الخسارة عند تكبدها؛ لا تطبق رسملة IAS 23 الخاصة بالأصل المؤهل داخل هذا النظام. حدد أولًا أن المنشأة تستخدم معيار SMEs بصورة صحيحة.",
          en: "Section 25.2 expenses all borrowing costs in profit or loss as incurred; the full-IFRS IAS 23 capitalisation rule for qualifying assets is not imported into this regime. First establish that the entity correctly applies the SME Standard.",
        },
      },
    ],
    referenceLabel: "IFRS Foundation — IFRS for SMEs (2025)",
    referenceUrl: "https://www.ifrs.org/supporting-implementation/2025-ifrs-for-smes-supporting-materials/",
  },
];
