import type { ExamQuestion } from "@/lib/exam-bank";

type Difficulty = ExamQuestion["difficulty"];
type LocalisedText = { ar: string; en: string };

const text = (ar: string, en: string): LocalisedText => ({ ar, en });
const choices = (ar: string[], en: string[]) => ({ ar, en });

const rq = (
  id: string,
  standard: string,
  difficulty: Difficulty,
  topic: string,
  question: LocalisedText,
  answers: { ar: string[]; en: string[] },
  answerIndex: number,
  explanation: LocalisedText,
  reference: string,
): ExamQuestion => ({
  id,
  track: "IFRS",
  topic: `${standard} — ${topic}`,
  question,
  choices: answers,
  answerIndex,
  explanation,
  reference,
  difficulty,
  examDomain: topic,
});

/** Additional reviewed extracts. Learner-facing citations intentionally name IFRS/IAS only. */
export const IFRS_REVIEWED_EXTENSION_QUESTIONS: ExamQuestion[] = [
  rq(
    "ifrs-reviewed-ias8-prior-error-02",
    "IAS 8",
    "intermediate",
    "prior-period error",
    text(
      "كان رصيد الأرباح المحتجزة المعلن في 30 سبتمبر 20X7 مبلغ 530,000 دولار. اكتُشف لاحقًا خطأ قطع في المخزون كان سيخفض مخزون ذلك التاريخ بمبلغ 24,000 دولار. أما مطالبة ضريبية رُفضت لاحقًا وانخفاض إضافي في سعر مخزون متقادم فكانا تغيرين في تقديرات الفترة التالية. ما رصيد الأرباح المحتجزة المعدل في أرقام المقارنة؟",
      "During the year to 30 September 20X8, the following events occurred in relation to Pipe Co. All were material to the company's financial statements: 1. A claim for tax relief, submitted in 20X5, was rejected by the tax authorities. No appeal will be made. The resulting liability of $15,000 was not provided for at 30 September 20X7, since when the 20X7 financial statements had been authorised for issue, the company had expected the claim to succeed. 2. A cut-off error in respect of inventory was discovered, which would have reduced the carrying amount of inventory by $24,000 at 30 September 20X7. 3. Obsolete inventory was written down to its estimated net realisable value of $17,000 at 30 September 20X7. Due to further falls in the selling price of the inventory after 30 September 20X7 the inventory was subsequently sold for $7,000. The retained earnings at 30 September 20X7, as reported in the 20X7 financial statements was $530,000. What is the restated retained earnings balance at 30 September 20X7 as reported in the 20X8 financial statements?",
    ),
    choices(
      ["496,000 دولار", "506,000 دولار", "515,000 دولار", "516,000 دولار"],
      ["$496,000", "$506,000", "$515,000", "$516,000"],
    ),
    1,
    text(
      "يصحح خطأ القطع بأثر رجعي، فيخفض المخزون والربح السابق 24,000 دولار. أما التغيران الآخران فتعالجان مستقبلًا كتغيرين في التقدير. لذلك 530,000 − 24,000 = 506,000 دولار.",
      "The cut-off error is corrected retrospectively, reducing prior inventory and profit by $24,000. The other two changes are accounted for prospectively as estimate changes. Therefore $530,000 − $24,000 = $506,000.",
    ),
    "IAS 8.32–40, 41–49",
  ),
  rq(
    "ifrs-reviewed-ifrs15-software-support-02",
    "IFRS 15",
    "intermediate",
    "software and support revenue",
    text(
      "باعت شركة برنامجًا وخدمة دعم لمدة سنتين بمبلغ 500,000 دولار في 30 يونيو 20X4: خُصص 470,000 للبرنامج و30,000 للدعم الذي يبدأ في 1 يوليو. إذا انتقلت السيطرة على البرنامج فورًا وكان نمط الدعم منتظمًا، فما الإيراد حتى 31 ديسمبر 20X4؟",
      "Does the Job Co, a software company, has an accounting year end of 31 December. It makes a sale for $500,000 on 30 June 20X4, to a customer, Brady. This amount includes $470,000 for software and $30,000 for support services for the two years commencing 1 July 20X4. How much revenue should Does the Job Co recognise in the statement of profit or loss in the year ended 31 December 20X4?",
    ),
    choices(
      ["500,000 دولار", "485,000 دولار", "477,500 دولار", "470,000 دولار"],
      ["$500,000", "$485,000", "$477,500", "$470,000"],
    ),
    2,
    text(
      "يعترف بكامل 470,000 دولار عند انتقال السيطرة على البرنامج، وبستة أشهر من الدعم: 30,000 × 6÷24 = 7,500 دولار. الإجمالي 477,500 دولار.",
      "The full $470,000 is recognised when control of the software transfers, plus six months of support: $30,000 × 6÷24 = $7,500. Total revenue is $477,500.",
    ),
    "IFRS 15.31–38, 73–86",
  ),
  rq(
    "ifrs-reviewed-ifrs16-rou-initial-02",
    "IFRS 16",
    "hard",
    "initial right-of-use asset",
    text(
      "في بدء عقد إيجار مدته خمس سنوات، بلغت القيمة الحالية للدفعات المستقبلية 8,200 دولار، ودُفعت دفعة مقدمة 2,500 دولار، وتكبد المستأجر تكاليف مباشرة أولية 900 دولار، واستلم حافز إيجار 500 دولار. بكم يقاس أصل حق الاستخدام أوليًا؟",
      "Sandy Co enters into a lease agreement on 1 July 20X2. The lease term is 5 years. Annual rental payments in advance are $2,500. On 1 July 20X2, the four future payments discounted at the implicit rate in the lease give a present value of $8,200. The acquired asset has a fair value of $10,100. To incentivise Sandy to enter into the lease, the lessor has agreed to pay Sandy Co a $500 contribution towards the $900 costs of setting up the lease. At what amount is the right of use asset initially measured?",
    ),
    choices(
      ["10,200 دولار", "11,600 دولار", "10,700 دولار", "11,100 دولار"],
      ["$10,200", "$11,600", "$10,700", "$11,100"],
    ),
    3,
    text(
      "التكلفة الأولية = التزام الإيجار 8,200 + الدفعة المقدمة 2,500 + التكاليف المباشرة 900 − الحافز 500 = 11,100 دولار.",
      "Initial cost is the $8,200 lease liability + $2,500 advance payment + $900 initial direct costs − $500 incentive = $11,100.",
    ),
    "IFRS 16.23–24",
  ),
  rq(
    "ifrs-reviewed-ias23-general-borrowings-02",
    "IAS 23",
    "hard",
    "general borrowing costs",
    text(
      "أُنشئ مبنى مؤهل بتكلفة مليوني دولار خلال ستة أشهر ومُوّل من قروض عامة: مليون بفائدة 6%، و1.5 مليون بفائدة 4%، و0.5 مليون بفائدة 5%. إذا سُحب مليونا المشروع عند بدايته، فما تكلفة الاقتراض المرسملة؟",
      "During 20X5, Project Co constructed a new head office building costing $2m. It took 6 months to complete and the work was funded from existing loan finance, with the full $2m drawn down at the start of the project: $1m loan at an interest rate of 6%; $1.5m loan at an interest rate of 4%; $0.5m loan at an interest rate of 5%. In accordance with IAS 23, what amount of borrowing costs are capitalised in 20X5?",
    ),
    choices(
      ["48,333 دولارًا", "صفر", "42,500 دولار", "96,667 دولارًا"],
      ["$48,333", "Nil", "$42,500", "$96,667"],
    ),
    0,
    text(
      "معدل الرسملة المرجح = (60,000 + 60,000 + 25,000) ÷ 3,000,000 = 4.833%. التكلفة المرسملة = 2,000,000 × 4.833% × 6÷12 = نحو 48,333 دولارًا.",
      "The weighted capitalisation rate is ($60,000 + $60,000 + $25,000) ÷ $3,000,000 = 4.833%. Capitalised cost is $2,000,000 × 4.833% × 6÷12, approximately $48,333.",
    ),
    "IAS 23.14–15",
  ),
  rq(
    "ifrs-reviewed-ias38-development-testing-02",
    "IAS 38",
    "hard",
    "development capitalisation date",
    text(
      "بدأ مشروع آلة جديدة في فبراير، واجتاز بنجاح اختبارات السلامة في 30 سبتمبر، ثم تكبد 200,000 دولار في أكتوبر و100,000 دولار في نوفمبر قبل إطلاق المنتج في 1 ديسمبر. إذا كانت شروط الرسملة لم تثبت قبل اجتياز الاختبارات، فما المبلغ المرسمل؟",
      "New Designs Co is working on a ground breaking piece of machinery for use in toy manufacture. If successful the new machine should improve efficiency ten-fold, and New Designs Co's management is in no doubt that it would be sought after by all of the major toy manufacturers. The company began work on the project on 1 February 20X2. At this point management set aside money to fund the project and set up a new laboratory where the work would take place. By 31 July 20X2 the company had produced a prototype and by 30 September it had completed successfully a rigorous testing process to check that the product conformed to safety requirements. New Designs Co launched the product to market on 1 December 20X2. Costs incurred were: February $450,000; March $450,000; April $450,000; May $500,000; June $550,000; July $450,000; August $600,000; September $650,000; October $200,000; November $100,000. How much, if any, of the expenditure is capitalised in the year ended 31 December 20X2?",
    ),
    choices(
      ["100,000 دولار", "1,550,000 دولار", "صفر", "300,000 دولار"],
      ["$100,000", "$1,550,000", "Nil", "$300,000"],
    ),
    3,
    text(
      "لا تعاد رسملة المصروفات السابقة. يبدأ التجميع فقط من تاريخ إثبات جميع شروط التطوير؛ ومن ثم ترسمل تكاليف أكتوبر ونوفمبر البالغة 300,000 دولار.",
      "Previously expensed amounts are not reinstated. Capitalisation begins only when all development criteria are demonstrated, so the October and November costs of $300,000 are capitalised.",
    ),
    "IAS 38.57, 65–71",
  ),
  rq(
    "ifrs-reviewed-ias40-rental-property-02",
    "IAS 40",
    "intermediate",
    "property held for rentals",
    text(
      "اشترت شركة عقارًا وقررته تأجيره لطرف آخر لمدة سنتين بموجب عقد إيجار تشغيلي. كيف يصنف العقار ويقاس لاحقًا؟",
      "Zone Co, a company specialising in the provision of sports equipment, purchased a property, which the management decided to rent out for two years to Partition Co by way of an operating lease for $5,000 per calendar month. Which of the following is true?",
    ),
    choices(
      [
        "عقار وآلات ومعدات يهلك وفق عمره الإنتاجي",
        "ذمة إيجار مدينة وفق IFRS 16",
        "عقار استثماري يقاس بنموذج التكلفة أو القيمة العادلة",
        "لا يثبت لأن الشركة لا تشغله",
      ],
      [
        "The property should be capitalised as property, plant and equipment and depreciated over an appropriate useful life",
        "A lease receivable should be recognised in accordance with IFRS 16",
        "The property should be classified as an investment property and measured using either the cost or the fair value model",
        "Zone Co should not record the purchase of the property as the company will not occupy or use it.",
      ],
    ),
    2,
    text(
      "العقار المحتفظ به لكسب الإيجارات يحقق تعريف العقار الاستثماري. تختار المنشأة سياسة نموذج القيمة العادلة أو نموذج التكلفة وتطبقها باتساق.",
      "Property held to earn rentals meets the definition of investment property. The entity selects the fair value model or cost model as its accounting policy and applies it consistently.",
    ),
    "IAS 40.5–6, 30–35, 56",
  ),
  rq(
    "ifrs-reviewed-ias10-flood-02",
    "IAS 10",
    "intermediate",
    "non-adjusting event",
    text(
      "كانت القوائم في طور الإعداد في 31 مارس. في 27 مارس تسببت أمطار غزيرة في فيضان مخزن وإتلاف مخزون، مع استمرار المنشأة في العمل. لم يكن الحدث دليلًا على ظروف قائمة في نهاية السنة. كيف يعالج؟",
      "Dodo Co is preparing its financial statements to 31 December 20X3. The accounts are due to be finalised on 31 March 20X4. Which of the following should not be adjusted in the financial statements?",
    ),
    choices(
      [
        "يعدل رصيد المخزون",
        "لا تعدل الأرقام، مع الإفصاح إذا كان الأثر جوهريًا",
        "يثبت مخصص بقيمة الضرر",
        "يعاد عرض أرقام السنة السابقة",
      ],
      [
        "On 1st February Dodo Co receives written confirmation that a customer, Looney Bin Co, has gone into liquidation. At the year end the balance due from Looney Bin Co was material.",
        "On 27th March torrential rain causes one of three warehouses to flood, damaging some of the inventory held there. Dodo Co continues to trade successfully although at a reduced level.",
        "Dodo Co manufactures a specialist component for the computer hardware industry. It costs $3.35 to produce and would normally sell for $5.20. At the year end this component is held in inventory at cost. However, due to the launch of an updated product, this component is only selling for $2.90.",
        "On 15th March a legal case against Dodo Co arising prior to 31 December 20X3 is settled for $300,000. In the draft financial statements a provision is included for substantially more.",
      ],
    ),
    1,
    text(
      "الفيضان حدث لاحق لا يقدم دليلًا على ظروف قائمة في تاريخ التقرير، لذلك لا تعدل القوائم. يفصح عن طبيعته وتقدير أثره المالي إذا كان جوهريًا.",
      "The flood is a subsequent event that does not evidence a reporting-date condition, so the statements are not adjusted. Its nature and estimated financial effect are disclosed if material.",
    ),
    "IAS 10.10, 21–22",
  ),
  rq(
    "ifrs-reviewed-ias37-onerous-contract-02",
    "IAS 37",
    "intermediate",
    "onerous purchase contract",
    text(
      "لدى شركة عقد غير قابل للإلغاء لشراء حصير مطاطي بسعر 15 دولارًا للمتر حتى نهاية العام القادم، بينما تستطيع بيعه حاليًا بـ12 دولارًا للمتر. أي بند يستوجب مخصصًا؟",
      "The management team at Super Safe Co try to be as prudent as possible when preparing the annual financial statements. Under IAS 37 which of the following should they provide in the financial statements?",
    ),
    choices(
      [
        "خسائر التشغيل المتوقعة للعام القادم",
        "خطة إعادة هيكلة لم تعلن بعد",
        "الخسارة المتوقعة من العقد غير القابل للإلغاء",
        "جميع ما سبق",
      ],
      [
        "The overall operating loss they expect the company to record in the following financial year.",
        "Costs associated with the restructuring of their sales and marketing division. Plans have been drafted by the board but not yet announced.",
        "The loss they are anticipating on a non-cancellable contract they have in place to buy rubber matting at $15 per metre. The contract runs until the end of next year and they are currently able to sell the matting for $12 per metre.",
        "All of the above.",
      ],
    ),
    2,
    text(
      "العقد مثقل بالأعباء لأن تكاليف الوفاء التي لا يمكن تجنبها تتجاوز المنافع المتوقعة. لا يثبت مخصص لخسائر التشغيل المستقبلية أو لخطة إعادة هيكلة لم تنشئ التزامًا فعليًا.",
      "The contract is onerous because unavoidable fulfilment costs exceed expected benefits. Future operating losses and an unannounced restructuring plan do not create provisions.",
    ),
    "IAS 37.14, 66–69, 72–83",
  ),
  rq(
    "ifrs-reviewed-ias12-accelerated-allowances-02",
    "IAS 12",
    "hard",
    "accelerated tax allowances",
    text(
      "اشترت شركة آلة بـ270,000 دولار في 1 يناير 20X0. تهلك محاسبيًا على خمس سنوات وضريبيًا على ثلاث سنوات، كلاهما بالقسط الثابت. ما رصيد الضريبة المؤجلة في 31 ديسمبر 20X1 إذا كان معدل الضريبة 30%؟",
      "A company purchased an item of plant for $270,000 on 1 January 20X0. The plant is depreciated in the financial statements on a straight-line basis over 5 years. For tax purposes the plant has a life of 3 years and benefits from allowances on a straight-line basis. What is the deferred tax balance in respect of the plant on 31st December 20X1? The applicable rate of corporate income tax is 30%.",
    ),
    choices(
      ["التزام 10,800 دولار", "أصل 10,800 دولار", "التزام 21,600 دولار", "أصل 21,600 دولار"],
      ["Liability of $10,800", "Asset of $10,800", "Liability of $21,600", "Asset of $21,600"],
    ),
    2,
    text(
      "القيمة الدفترية بعد سنتين = 162,000 دولار، والقاعدة الضريبية = 90,000 دولار. الفرق المؤقت الخاضع للضريبة 72,000 × 30% = التزام ضريبة مؤجلة 21,600 دولار.",
      "After two years the carrying amount is $162,000 and the tax base is $90,000. The $72,000 taxable temporary difference × 30% gives a $21,600 deferred tax liability.",
    ),
    "IAS 12.15, 20",
  ),
  rq(
    "ifrs-reviewed-ias37-warranty-population-02",
    "IAS 37",
    "hard",
    "warranty provision",
    text(
      "تتوقع شركة بيع 30,000 جهاز بضمان مجاني. تتوقع إصلاحًا كبيرًا لـ1% بمتوسط 300 دولار، وإصلاحًا بسيطًا لـ5% بمتوسط 100 دولار. كيف تعالج الضمان؟",
      "IC Co manufactures fridge freezers and with each one sold offers a free guarantee. In one year the company expects to sell 30,000 fridge freezers. Of these management expect 1% to be returned under the guarantee requiring major repair work costing on average $300. Management also expect 5% to be returned requiring minor repairs costing on average $100. How should the company treat this guarantee policy in their financial statements?",
    ),
    choices(
      [
        "إثبات مخصص 240,000 دولار مع الإفصاح",
        "الإفصاح فقط عن سياسة الضمان",
        "الإفصاح عن تقدير التكلفة دون إثبات",
        "لا إثبات ولا إفصاح",
      ],
      [
        "Recognise a provision of $240,000 on the statement of financial position and disclose details in the notes.",
        "Disclose the details of the guarantee policy in the notes to the financial statements.",
        "Disclose the details of the guarantee policy in the notes, including an estimate of the likely cost to the company of fulfilling the guarantee.",
        "No disclosure of the guarantee policy is required.",
      ],
    ),
    0,
    text(
      "يوجد التزام حالي من المبيعات. أفضل تقدير لمجموعة كبيرة من البنود هو القيمة المتوقعة: (30,000 × 1% × 300) + (30,000 × 5% × 100) = 240,000 دولار.",
      "Sales create a present obligation. For a large population, expected value gives the best estimate: (30,000 × 1% × $300) + (30,000 × 5% × $100) = $240,000.",
    ),
    "IAS 37.14, 36–39, 60, 84–85",
  ),
  rq(
    "ifrs-reviewed-ias37-contingent-asset-02",
    "IAS 37",
    "intermediate",
    "probable insurance claim",
    text(
      "قدمت شركة مطالبة تأمين بـ220,000 دولار بعد حريق. لم يصل تأكيد من شركة التأمين، لكن الإدارة ترى أن السداد مرجح أكثر من عدمه، وليس مؤكدًا بدرجة شبه تامة. ما المعالجة؟",
      "Sha La La Co recently suffered a small fire in one corner of its warehouse. The company has placed a claim with its insurer for $220,000 to cover the cost of repairing the damage. Sha La La Co has not had confirmation yet, but management of the company believe it is more likely than not that the claim will be paid. How should the company treat this in the annual financial statements?",
    ),
    choices(
      [
        "لا إثبات ولا إفصاح حتى اليقين",
        "إثبات كامل المبلغ كذمة مدينة",
        "إثبات نصف المبلغ",
        "الإفصاح عن الأصل المحتمل دون إثباته",
      ],
      [
        "Nothing should be recognised or disclosed in relation to the claim until the company is certain of the outcome",
        "A receivable for the full amount should be recognised in the statement of financial position",
        "A receivable for half the value of the claim should be recognised at this stage, as it is not certain that the money will be received and this is more prudent than recognising the full amount",
        "The details of the insurance claim should be disclosed in the notes to the financial statements.",
      ],
    ),
    3,
    text(
      "التدفق مرجح لكنه غير مؤكد بدرجة شبه تامة، لذلك لا يثبت أصل. يفصح عن طبيعة الأصل المحتمل وتقدير أثره المالي عندما يكون التدفق مرجحًا.",
      "The inflow is probable but not virtually certain, so no asset is recognised. The contingent asset's nature and estimated financial effect are disclosed when an inflow is probable.",
    ),
    "IAS 37.31–35, 89",
  ),
  rq(
    "ifrs-reviewed-ifrs9-sppi-assets-02",
    "IFRS 9",
    "intermediate",
    "amortised cost and SPPI",
    text(
      "بافتراض أن نموذج الأعمال هو الاحتفاظ للتحصيل، أي الأدوات التالية يمكن أن تحقق شرط التدفقات التي تمثل أصلًا وفائدة فقط: 1) قرض بفائدة ثابتة، 2) استثمار في سند قابل للتحويل إلى أسهم، 3) سند صفري الكوبون؟",
      "Under IFRS 9, which of the following financial assets should be held at amortised cost: 1. A fixed interest rate loan 2. An investment in a convertible loan note 3. A zero coupon bond",
    ),
    choices(["جميعها", "1 و3", "1 فقط", "1 و2"], ["All of them", "1 and 3", "1 only", "1 and 2"]),
    1,
    text(
      "القرض الثابت والسند صفري الكوبون قد يحققان شرط الأصل والفائدة. خيار التحويل إلى أسهم يعرض الحامل لمخاطر أسهم لا تتوافق عادة مع هذا الشرط، فيقاس الاستثمار بالقيمة العادلة من خلال الربح أو الخسارة.",
      "A fixed-rate loan and zero-coupon bond can meet SPPI. An equity conversion feature normally exposes the holder to equity risk inconsistent with SPPI, so the investment is measured at fair value through profit or loss.",
    ),
    "IFRS 9.4.1.2, 4.1.4, B4.1.7A–B4.1.26",
  ),
  rq(
    "ifrs-reviewed-ias8-material-error-03",
    "IAS 8",
    "easy",
    "retrospective correction",
    text(
      "أثناء إعداد قوائم السنة الحالية اكتُشف أن مخزون السنة السابقة كان مبالغًا فيه بمبلغ جوهري قدره 5.5 مليون دولار. كيف يعالج الخطأ؟",
      "An entity is in the process of preparing financial statements for the current year end when it comes to light that in the prior year, inventory was overstated by $5.5m. This figure is considered material to the financial statements. How should the error be treated?",
    ),
    choices(
      [
        "تحميل الأثر على ربح أو خسارة السنة الحالية",
        "الإفصاح فقط في الإيضاحات",
        "إعادة عرض أرقام السنة السابقة بأثر رجعي",
        "عدم إجراء أي تعديل",
      ],
      [
        "Make an adjustment through the statement of profit or loss for the current year",
        "Disclose the size and nature of the error in the notes to the financial statements",
        "Restate prior year figures",
        "Make no adjustment",
      ],
    ),
    2,
    text(
      "الخطأ الجوهري لفترة سابقة يصحح بأثر رجعي بإعادة عرض المقارنات، ما لم يكن تحديد الأثر غير عملي وفق الشروط المحددة في IAS 8.",
      "A material prior-period error is corrected retrospectively by restating comparatives, unless determining the effect is impracticable under IAS 8's specified conditions.",
    ),
    "IAS 8.41–49",
  ),
  rq(
    "ifrs-reviewed-ifrs15-vehicle-control-03",
    "IFRS 15",
    "easy",
    "point-in-time control",
    text(
      "طلب عميل مركبات ودفع مقدمًا مليون دولار من سعر عقد قدره خمسة ملايين. ينص العقد على انتقال الملكية عند تحميل المركبات على السفينة في الميناء. متى يعترف البائع بالإيراد؟",
      "Joey Co manufactures vehicles. Maggie Co has placed an order for vehicles and has paid a deposit of $1 million. The parties have agreed a contract price of $5 million. The title to the vehicles passes to Maggie Co when the vehicles are loaded onto the ship at the port. At what point should should the revenue be recognised by Joey Co?",
    ),
    choices(
      [
        "عند تقديم الطلب",
        "عند دفع المقدم",
        "عندما يحصل العميل على السيطرة على المركبات",
        "عند سداد كامل الفاتورة",
      ],
      [
        "When Maggie Co orders the vehicles",
        "When Maggie Co pays the deposit",
        "When Maggie Co takes control of the vehicles",
        "When Maggie Co settles the invoice in full",
      ],
    ),
    2,
    text(
      "يعترف بالإيراد عند الوفاء بالتزام الأداء بنقل السيطرة، لا عند الطلب أو التحصيل وحدهما. توقيت التحميل مؤشر مهم هنا وفق شروط العقد والشحن.",
      "Revenue is recognised when the performance obligation is satisfied by transferring control, not merely on order or collection. Loading is an important indicator here under the contract and shipping terms.",
    ),
    "IFRS 15.31–38",
  ),
  rq(
    "ifrs-reviewed-ias16-revalued-disposal-03",
    "IAS 16",
    "hard",
    "depreciation and disposal after revaluation",
    text(
      "اشترت شركة عقارًا في 1 يناير 20X1 بمبلغ 1.5 مليون دولار وعمر 20 سنة. أعيد تقييمه في 31 ديسمبر 20X3 إلى 1.7 مليون، ثم بيع في 31 ديسمبر 20X6 بمبلغ 1.5 مليون. ما مبالغ 20X6 في الربح أو الخسارة؟",
      "Spray Flowers Co purchased a property on 1 January 20X1 for $1.5m, when its estimated useful life was 20 years. On 31 December 20X3 the property was revalued to $1.7m and on 31 December 20X6 the property was sold for $1.5m. What amounts should be recognised in the statement of profit or loss in 20X6 in relation to the property?",
    ),
    choices(
      [
        "إهلاك 100,000 وربح بيع 450,000 دولار",
        "إهلاك 85,000 وربح بيع 55,000 دولار",
        "إهلاك 75,000 وربح بيع 450,000 دولار",
        "إهلاك 100,000 وربح بيع 100,000 دولار",
      ],
      [
        "Depreciation of $100,000 and profit on disposal of $450,000",
        "Depreciation of $85,000 and profit on disposal of $55,000",
        "Depreciation of $75,000 and profit on disposal of $450,000",
        "Depreciation of $100,000 and profit on disposal of $100,000",
      ],
    ),
    3,
    text(
      "العمر المتبقي عند إعادة التقييم 17 سنة، فيكون الإهلاك السنوي 1.7 مليون ÷ 17 = 100,000. بعد إهلاك ثلاث سنوات تصبح القيمة الدفترية 1.4 مليون؛ ومن ثم ربح البيع 100,000 دولار.",
      "The remaining life at revaluation is 17 years, so annual depreciation is $1.7m ÷ 17 = $100,000. After three years, carrying amount is $1.4m and the disposal profit is $100,000.",
    ),
    "IAS 16.50–62, 67–72",
  ),
  rq(
    "ifrs-reviewed-ias36-value-in-use-02",
    "IAS 36",
    "easy",
    "value in use",
    text("كيف يعرّف IAS 36 القيمة الاستخدامية؟", "How does IAS 36 define value in use?"),
    choices(
      [
        "القيمة السوقية للأصل",
        "الأعلى من القيمة العادلة ناقص تكاليف البيع والقيمة القابلة للتحقق",
        "المبلغ الذي يثبت به الأصل أول مرة",
        "القيمة الحالية للتدفقات النقدية المستقبلية المتوقعة من استخدام الأصل والتصرف فيه",
      ],
      [
        "The market value of an asset",
        "The higher of an asset’s fair value less cost to sell, and its realisable value",
        "The amount at which an asset is first recognised in the statement of financial position",
        "The discounted present value of future cash flows arising from use of the asset and from its disposal",
      ],
    ),
    3,
    text(
      "القيمة الاستخدامية هي القيمة الحالية للتدفقات النقدية المستقبلية المتوقعة من الأصل أو الوحدة المولدة للنقد، بما يشمل الاستخدام المستمر والتصرف النهائي.",
      "Value in use is the present value of future cash flows expected from an asset or cash-generating unit, including continuing use and ultimate disposal.",
    ),
    "IAS 36.6, 30–57",
  ),
  rq(
    "ifrs-reviewed-ias10-going-concern-03",
    "IAS 10",
    "intermediate",
    "going concern after reporting period",
    text(
      "أي عبارة غير صحيحة عن الأحداث بعد فترة التقرير؟",
      "Which of the following statements is not true?",
    ),
    choices(
      [
        "يفصح عن أصل محتمل عندما يكون تدفق المنافع مرجحًا",
        "توزيعات الأرباح المعلنة بعد نهاية السنة لا تثبت التزامًا في نهاية السنة، بل يفصح عنها",
        "إذا تبين بعد فترة التقرير أن المنشأة لم تعد مستمرة، فلا يلزم تعديل القوائم",
        "تسوية دعوى بعد نهاية السنة بما يؤكد تقدير مخصص قائم تستوجب تعديل المخصص",
      ],
      [
        "According to IAS 37 Provisions, Contingent Assets and Contingent Liabilities, a contingent asset is disclosed in the notes to the financial statements when it is probable that there will be an inflow of economic benefits",
        "If a dividend is proposed after the year end but before the financial statements are finalised, it is disclosed in the notes but no liability is recognised",
        "If it is discovered in the post reporting period that a company is no longer a going concern, IAS 10 does not require adjustment to the financial statements",
        "A company finalises its financial statements for the year ended 31 December 20X8 on 20th March 20X9. On 17th February 20X9, a court case is settled for less than the company had expected. As a result the provision recognised in the financial statements as at 31 December 20X8 should be adjusted.",
      ],
    ),
    2,
    text(
      "العبارة الثالثة غير صحيحة. إذا قررت الإدارة بعد تاريخ التقرير التصفية أو التوقف، أو لم يعد هناك بديل واقعي، فلا تعد القوائم على أساس الاستمرارية؛ وهذا تغيير جوهري في أساس المحاسبة.",
      "Statement 3 is false. If management decides after the reporting date to liquidate or cease trading, or has no realistic alternative, the statements are not prepared on a going-concern basis; this is a fundamental change in accounting basis.",
    ),
    "IAS 10.8–11, 12–14",
  ),
  rq(
    "ifrs-reviewed-ias19-actuarial-assumptions-02",
    "IAS 19",
    "easy",
    "defined benefit assumptions",
    text(
      "أي التغيرات التالية يؤثر في التزام المنافع المحددة؟",
      "An entity wishes to know which of the following changes will affect its defined benefit obligation;",
    ),
    choices(
      [
        "نسبة الموظفين المتوقع تقاعدهم مبكرًا أو تركهم المنشأة",
        "الرواتب أو المنافع المستقبلية المقدرة",
        "معدلات الوفيات",
        "جميع ما سبق",
      ],
      [
        "Changes in the percentage of employees taking early retirement or leaving the entity",
        "Changes in the estimated salaries or benefits that will occur in the future",
        "Changes in mortality rates",
        "All of the above",
      ],
    ),
    3,
    text(
      "كلها افتراضات اكتوارية ديموغرافية أو مالية تدخل في قياس القيمة الحالية لالتزام المنافع المحددة، ويؤدي تغيرها إلى إعادة قياس الالتزام.",
      "All are demographic or financial actuarial assumptions used to measure the present value of the defined benefit obligation; changes result in remeasurement.",
    ),
    "IAS 19.75–98",
  ),
  rq(
    "ifrs-reviewed-ias12-revaluation-tax-03",
    "IAS 12",
    "intermediate",
    "deferred tax on revaluation",
    text(
      "أعيد تقييم عقار من 35 مليونًا إلى 40 مليونًا، بينما قاعدته الضريبية 31 مليونًا. إذا كان معدل الضريبة المتوقع عند الاسترداد 40%، فما التزام الضريبة المؤجلة؟",
      "An entity has revalued its property and has recognised the increase as a revaluation surplus in its financial statements. The carrying amount of the property prior to revaluation was $35 million and the revalued amount was $40 million. The tax base of the property is $31 million. The tax rate applicable to profits made on the sale of property is 40%. If the revaluation took place at the entity's year end of 31 December 20X8, the deferred tax liability on the property at the year end is:",
    ),
    choices(
      ["16 مليون دولار", "مليونا دولار", "1.6 مليون دولار", "3.6 مليون دولار"],
      ["$16m", "$2m", "$1.6m", "$3.6m"],
    ),
    3,
    text(
      "الفرق المؤقت الخاضع للضريبة هو القيمة الدفترية 40 ناقص القاعدة الضريبية 31 = 9 ملايين. الالتزام = 9 × 40% = 3.6 مليون دولار.",
      "The taxable temporary difference is the $40m carrying amount less the $31m tax base = $9m. The liability is $9m × 40% = $3.6m.",
    ),
    "IAS 12.15, 20, 47, 61A",
  ),
  rq(
    "ifrs-reviewed-ifrs3-trademark-02",
    "IFRS 3",
    "intermediate",
    "identifiable trademark",
    text(
      "استحوذت شركة A على شركة B، وتشمل صافي أصول B علامة تجارية كانت شعار منافس مباشر. لا تنوي A استخدام الشعار. كيف يعالج عند الاستحواذ؟",
      "Entity A acquires Entity B. The identifiable net assets of B include a trademark, being the logo previously used by B as a direct competitor to A. A has no intention of using this logo in the future. How should this logo be dealt with in the financial statements of the group under IFRS 3 (Revised)?",
    ),
    choices(
      ["يثبت أصلًا غير ملموس منفصلًا", "لا يثبت", "تزاد الشهرة بقيمته", "يحمل مباشرة مصروفًا"],
      [
        "The logo should be recognised as an intangible asset",
        "The logo should not be recognised",
        "Goodwill should be increased by the value of the logo",
        "The logo should be expensed",
      ],
    ),
    0,
    text(
      "عدم نية الاستخدام لا يلغي قابلية التحديد. العلامة تنشأ من حقوق قانونية ويمكن فصلها أو ترخيصها، لذلك تثبت منفصلة عن الشهرة بالقيمة العادلة في تاريخ الاستحواذ.",
      "An intention not to use the mark does not remove identifiability. It arises from legal rights and can be separated or licensed, so it is recognised separately from goodwill at acquisition-date fair value.",
    ),
    "IFRS 3.10–13, 18; IAS 38.12–13",
  ),
  rq(
    "ifrs-reviewed-ifrs3-full-goodwill-03",
    "IFRS 3",
    "easy",
    "full goodwill",
    text(
      "استحوذت شركة على 60% من شركة تابعة مقابل 19 مليون دولار. القيمة العادلة لصافي الأصول القابلة للتحديد 20 مليونًا، والقيمة العادلة للحصة غير المسيطرة 6 ملايين. كم تبلغ الشهرة بطريقة الشهرة الكاملة؟",
      "Murray Co acquired 60% of the shares of Missile Co on 1 May 20X8 for $19 million. The fair value of the net assets of Missile Co on this date was $20 million. The non controlling interest had a fair value of $6 million. Calculate goodwill using the full goodwill method to measure the non-controlling interest in accordance with IFRS 3 revised.",
    ),
    choices(
      ["4 ملايين دولار", "مليون دولار", "5 ملايين دولار", "14 مليون دولار"],
      ["$4m", "$1m", "$5m", "$14m"],
    ),
    2,
    text(
      "الشهرة = المقابل 19 + القيمة العادلة للحصة غير المسيطرة 6 − صافي الأصول 20 = 5 ملايين دولار.",
      "Goodwill = $19m consideration + $6m fair value of NCI − $20m identifiable net assets = $5m.",
    ),
    "IFRS 3.19, 32",
  ),
  rq(
    "ifrs-reviewed-ifrs3-partial-goodwill-04",
    "IFRS 3",
    "easy",
    "partial goodwill",
    text(
      "استحوذت شركة على 60% من شركة تابعة مقابل 9 ملايين دولار. القيمة العادلة لصافي الأصول 10 ملايين، وتقاس الحصة غير المسيطرة بنسبة حصتها من صافي الأصول. كم تبلغ الشهرة؟",
      "Granny Co acquired 60% of the shares in Baby Co on 1 May 20X8 for $9 million. The fair value of the net assets of Baby Co on this date was $10 million. The non controlling interest had a fair value of $3 million. Calculate goodwill assuming that the non controlling interest is measured using as a proportion of net assets.",
    ),
    choices(
      ["مليون دولار", "مليونا دولار", "3 ملايين دولار", "10 ملايين دولار"],
      ["$1m", "$2m", "$3m", "$10m"],
    ),
    2,
    text(
      "الحصة غير المسيطرة = 40% × 10 = 4 ملايين. الشهرة = 9 + 4 − 10 = 3 ملايين دولار.",
      "NCI is 40% × $10m = $4m. Goodwill is $9m + $4m − $10m = $3m.",
    ),
    "IFRS 3.19, 32",
  ),
  rq(
    "ifrs-reviewed-ifrs11-joint-operation-02",
    "IFRS 11",
    "easy",
    "joint operation accounting",
    text(
      "كيف يحاسب المشغل المشترك عن عملية مشتركة؟",
      "IFRS 11 Joint Arrangements requires that a joint operation is accounted for in the group financial statements:",
    ),
    choices(
      [
        "بطريقة حقوق الملكية",
        "بالتجميع النسبي للمنشأة كاملة",
        "بإثبات حصته في الأصول والالتزامات والإيرادات والمصروفات التي له حقوق أو التزامات بشأنها",
        "بأي طريقة مما سبق",
      ],
      [
        "By applying the equity method of accounting",
        "By applying proportionate consolidation",
        "By recognising the share of assets, liabilities, income and expenses to which the joint operator is entitled",
        "Any of the above.",
      ],
    ),
    2,
    text(
      "في العملية المشتركة تكون للأطراف حقوق في الأصول والتزامات عن الخصوم؛ لذلك يثبت المشغل أصوله والتزاماته وإيراداته ومصروفاته، بما في ذلك حصته من البنود المشتركة.",
      "In a joint operation, parties have rights to assets and obligations for liabilities, so a joint operator recognises its assets, liabilities, revenue and expenses, including its shares of jointly held items.",
    ),
    "IFRS 11.15, 20–21",
  ),
  rq(
    "ifrs-reviewed-ias8-residual-value-04",
    "IAS 8",
    "easy",
    "change in residual value",
    text(
      "أفاد خبير مستقل بأن القيمة المتبقية للآلات تغيرت جوهريًا. كيف يعالج أثر التغير؟",
      "An independent surveyor has advised an entity that the residual value of its plant and machinery has materially changed, therefore the entity should:",
    ),
    choices(
      [
        "تعديل إهلاك السنوات السابقة والحالية",
        "تعديل الإهلاك من السنة الحالية والسنوات المستقبلية",
        "تجاهل التغير",
        "معالجته كتعديل خطأ بأثر رجعي",
      ],
      [
        "Change the depreciation charge for previous and current based on the revised residual value",
        "Change the annual depreciation for the current year and future years",
        "Ignore the effect of the change on annual depreciation for the change in the residual value",
        "Change the depreciation charge and treat it as a correction of an error.",
      ],
    ),
    1,
    text(
      "القيمة المتبقية تقدير محاسبي يراجع دوريًا. يعالج التغير في التقدير مستقبلًا في الفترة الحالية والفترات المقبلة المتأثرة، لا بأثر رجعي.",
      "Residual value is an accounting estimate reviewed periodically. A change is applied prospectively in the current and affected future periods, not retrospectively.",
    ),
    "IAS 8.32–40; IAS 16.51",
  ),
  rq(
    "ifrs-reviewed-ifrs8-segment-definition-02",
    "IFRS 8",
    "easy",
    "operating segment definition",
    text(
      "أي عنصر ليس جزءًا من تعريف القطاع التشغيلي؟",
      "Which of the following is not part of the definition of a segment under IFRS 8?",
    ),
    choices(
      [
        "يمارس أنشطة قد يحقق منها إيرادات ويتحمل عنها مصروفات",
        "يراجع صانع القرار التشغيلي الرئيسي نتائجه بانتظام",
        "تتوفر عنه معلومات مالية منفصلة",
        "تبلغ إيراداته 20% على الأقل من إيرادات المنشأة",
      ],
      [
        "An operating segment engages in business activities from which it may earn revenues and incur expenses (including revenues and expenses relating to transactions with other components of the same entity)",
        "An operating segment is a segment whose operating results are reviewed regularly by the entity’s chief operating decision maker to make decisions about resources to be allocated to the segment and assess its performance",
        "An operating segment is one for which discrete financial information is available",
        "An operating segment is a segment with revenues of at least 20% of the revenue of the entity.",
      ],
    ),
    3,
    text(
      "التعريف يعتمد على النشاط، ومراجعة صانع القرار، وتوفر معلومات منفصلة. الاختبارات الكمية تستخدم لتحديد القطاعات الواجب التقرير عنها، وحد الإيراد 10% وليس جزءًا من التعريف ولا 20%.",
      "The definition depends on activities, CODM review and discrete information. Quantitative tests identify reportable segments; the revenue threshold is 10%, not part of the definition and not 20%.",
    ),
    "IFRS 8.5, 13",
  ),
  rq(
    "ifrs-reviewed-ias24-supplier-02",
    "IAS 24",
    "easy",
    "unrelated supplier",
    text(
      "أي طرف لا يعد طرفًا ذا علاقة لمجرد الوصف الوارد؟",
      "Which of the following is not a related party according to IAS 24 Related Party Disclosures?",
    ),
    choices(
      [
        "مشروع مشترك تكون المنشأة معدة التقرير مشاركًا فيه",
        "عضو الإدارة العليا للمنشأة أو لشركتها الأم",
        "فرد قريب من أسرة أحد أعضاء الإدارة العليا",
        "مورد لدى المنشأة رصيد قائم معه فقط",
      ],
      [
        "A joint venture in which the reporting entity is a venturer",
        "A member of the key management personnel of the reporting entity or of its parent",
        "A close family member of key management personnel of the reporting entity",
        "A supplier with which the reporting entity has a balance outstanding.",
      ],
    ),
    3,
    text(
      "المورد لا يصبح طرفًا ذا علاقة لمجرد وجود تعامل أو رصيد تجاري. أما المشروع المشترك والإدارة العليا وأفراد أسرهم المقربون فتدخلهم العلاقات المحددة في IAS 24.",
      "A supplier does not become related merely because of a transaction or trade balance. Joint ventures, key management and their close family members fall within IAS 24's specified relationships.",
    ),
    "IAS 24.9, 11",
  ),
  rq(
    "ifrs-reviewed-ias33-convertible-eps-02",
    "IAS 33",
    "hard",
    "diluted EPS convertible bonds",
    text(
      "لدى شركة مليون سهم عادي و5,000 سند قابل للتحويل قيمة كل منها 100 دولار بفائدة 7%، وكل سند يتحول إلى سهمين. ربح ما بعد الضريبة 420,000 دولار ومعدل الضريبة 30%. ما ربحية السهم المخففة؟",
      "Performance Co has 1,000,000 ordinary shares and 5000 $100 7% convertible bonds in issue at 31 December 20X1. On 31 December 20X3, each of the bonds is convertible to 2 ordinary shares. Results for the year are: Profit before interest and tax $617,000; Profit before tax $600,000; Profit after tax $420,000. Tax rate is 30%. What figure will be disclosed for diluted earnings per share for the year ended 31 December 20X1?",
    ),
    choices(
      ["44.0 سنتًا", "42.0 سنتًا", "61.8 سنتًا", "44.5 سنتًا"],
      ["44.0c", "42.0c", "61.8c", "44.5c"],
    ),
    0,
    text(
      "يضاف صافي الفائدة بعد الضريبة: 500,000 × 7% × 70% = 24,500، فيصبح الربح 444,500. وتضاف 10,000 أسهم افتراضية؛ 444,500 ÷ 1,010,000 = 44.0 سنتًا تقريبًا.",
      "Add back after-tax interest: $500,000 × 7% × 70% = $24,500, giving earnings of $444,500. Add 10,000 assumed shares; $444,500 ÷ 1,010,000 is approximately 44.0 cents.",
    ),
    "IAS 33.31–41",
  ),
];
