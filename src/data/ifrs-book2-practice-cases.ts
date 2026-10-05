type LocalizedText = { ar: string; en: string };

export interface IfrsPracticeCase {
  id: string;
  standardCode: string;
  title: LocalizedText;
  facts: LocalizedText;
  question: LocalizedText;
  solution: LocalizedText[];
  reference: string;
}

const text = (ar: string, en: string): LocalizedText => ({ ar, en });

/** Open-response questions retain their source wording; no MCQ options are invented. */
export const IFRS_BOOK2_PRACTICE_CASES: IfrsPracticeCase[] = [
  {
    id: "ifrs-book2-lease-lis",
    standardCode: "IFRS 16",
    title: text("إيجار أصل بدفعات مقدمة", "Lease of an asset with advance payments"),
    facts: text(
      "في 1 يناير 20X3 دخلت شركة Lis في عقد إيجار أصل لمدة ست سنوات، ثم سيُرد للمؤجر ويُستبعد. الدفعة السنوية 18,420 وتُسدَّد مقدمًا. يبلغ القياس الأولي لالتزام الإيجار 65,586، باستخدام معدل الفائدة الضمني في العقد البالغ 12.5%. تتوقع الشركة بيع السلع المنتَجة بالأصل خلال السنوات الخمس الأولى، لكن مدة العقد ست سنوات بطلب المؤجر ولاحتمال تغير التوقع. للشركة حق تحديد استخدام الأصل خلال مدة العقد، وتحصل على معظم منافعه الاقتصادية.",
      "On 1 January 20X3 Lis Co entered into a lease agreement to rent an asset for a six-year period, at which point it will be returned to the lessor and scrapped, with annual payments of $18,420 made in advance. The initial measurement of the lease liability amounts to $65,586, discounted at the implicit interest rate shown in the lease agreement of 12.5%. Lis Co expects to sell goods produced by the asset during the first five years of the lease term, but has leased the asset for six years as this is the requirement of the lessor, and in case this expectation changes. Lis Co has the right to determine the use of the asset during the lease term and will obtain substantially all the economic benefit from its use.",
    ),
    question: text(
      "اشرح معالجة هذا الإيجار عن السنة المنتهية في 31 ديسمبر 20X3، مع إعداد المقتطفات ذات الصلة من قائمتي الربح أو الخسارة والمركز المالي. لا يلزم إعداد الإيضاحات.",
      "Explain how the above lease would be accounted for for the year ending 31 December 20X3 including producing relevant extracts from the statement of profit or loss and statement of financial position. You are not required to prepare the notes to the financial statements.",
    ),
    solution: [
      text(
        "عند البدء: أصل حق الاستخدام = 65,586 + الدفعة المسددة عند البدء 18,420 = 84,006؛ والتزام الإيجار = 65,586 للدفعات غير المسددة فقط.",
        "At commencement: right-of-use asset = 65,586 + the 18,420 commencement payment = 84,006; lease liability = 65,586 for unpaid payments only.",
      ),
      text(
        "مصروف إهلاك 20X3 = 84,006 ÷ 5 = 16,801 تقريبًا. لا تنتقل الملكية، والعمر النافع للمستأجر خمس سنوات، وهو أقصر من مدة الإيجار. قيمة حق الاستخدام في 31 ديسمبر = 67,205 تقريبًا.",
        "20X3 depreciation expense = 84,006 ÷ 5 ≈ 16,801. Ownership does not transfer and the five-year useful life to the lessee is shorter than the lease term. Right-of-use carrying amount at 31 December ≈ 67,205.",
      ),
      text(
        "مصروف التمويل = 65,586 × 12.5% = 8,198 تقريبًا؛ والتزام الإيجار في 31 ديسمبر قبل دفعة يناير التالية = 73,784 تقريبًا.",
        "Finance cost = 65,586 × 12.5% ≈ 8,198; the 31 December lease liability before the following January payment ≈ 73,784.",
      ),
      text(
        "مقتطف المركز المالي: أصل حق الاستخدام 67,205؛ التزام إيجار متداول 18,420 وغير متداول 55,364 تقريبًا. في قائمة الربح أو الخسارة يُعرض الإهلاك 16,801 وتكلفة التمويل 8,198 كلٌّ على حدة. فروق الوحدة الأخيرة ناتجة عن التقريب.",
        "Statement of financial position extract: right-of-use asset 67,205; current lease liability 18,420 and non-current lease liability about 55,364. Profit or loss shows depreciation of 16,801 separately from finance cost of 8,198. Unit-level differences arise from rounding.",
      ),
    ],
    reference: "IFRS 16.9, 22–29, 36–38, 47–49",
  },
  {
    id: "ifrs-book2-retail-unit-eastway",
    standardCode: "IFRS 16",
    title: text(
      "هل يحتوي عقد منفذ البيع على إيجار؟",
      "Does the retail-unit contract contain a lease?",
    ),
    facts: text(
      "تمتلك شركة Propfield مركز Eastway التجاري المكوّن من 30 وحدة تؤجرها لتجار التجزئة. حصلت شركة Sellerwell على حق استخدام الوحدة 21 لمدة أربع سنوات. يحق لـPropfield مطالبتها بالانتقال إلى وحدة مماثلة مع سداد تكاليف الانتقال؛ ولا تستفيد اقتصاديًا من ذلك إلا إذا دخل مستأجر كبير يغطي تكاليف نقلها ونقل مستأجرين آخرين، وهو احتمال عُدّ غير مرجح عند بدء العقد. تستخدم Sellerwell الوحدة لعلامتها التجارية خلال ساعات عمل المركز، وتحدد بنفسها أصناف البضائع وأسعارها وكميات المخزون، وتسيطر على الدخول إلى الوحدة. تدفع مبلغًا ثابتًا ونسبة متغيرة من المبيعات. تقدم Propfield خدمات تسويق وتنظيف وأمن.",
      "Propfield Co, a property company, owns Eastway, a large shopping centre with a 30 units which it rents out to retailers. Sellerwell Co enters into a contract with Propfield Co giving Sellerwell the right to use Unit 21 of Eastway for a four-year period. The contract gives Propfield Co the right to require Sellerwell Co to move to another retail unit. However, if it does so, Propfield Co must pay for Sellerwell Co's relocation costs and provide Sellerwell Co with a retail unit of similar quality and specifications to Unit 21. The only reason Propfield Co would benefit economically from relocating Sellerwell Co is if a major new tenant were to decide to occupy a large amount of retail space at a rate high enough to cover the costs of relocating Sellerwell Co and other tenants in the retail space. While this scenario is possible, at inception of the contract, it is thought to be unlikely to occur. Sellerwell Co must, under the contract, use Unit 21 to operate its well-known retail brand to sell its goods during the hours that the shopping centre is open. Sellerwell Co makes all the decisions about how the retail unit is used. For example, Sellerwell Co decides on the mix of goods sold from the unit, the pricing of the goods sold and the quantities of inventory held. Sellerwell Co also controls physical access to the unit throughout the four-year period of use. The contract requires Sellerwell Co to make fixed payments to Propfield Co, as well as variable payments that are a percentage of sales from Unit 21. As part of the contract, Propfield Co provides marketing, cleaning and security services.",
    ),
    question: text(
      "حدد ما إذا كان العقد بين Propfield وSellerwell يحتوي على إيجار، مع توضيح سبب الحكم.",
      "Determine whether the contract between Propfield Co and Sellerwell Co contains a lease.",
    ),
    solution: [
      text(
        "الوحدة 21 أصل محدد صراحة. حق الاستبدال ليس جوهريًا في وقائع السؤال: المنفعة الاقتصادية من ممارسته مشروطة بحدث غير مرجح عند بدء العقد، مع تحمل المؤجر تكاليف النقل.",
        "Unit 21 is explicitly identified. The substitution right is not substantive on these facts: the economic benefit from exercising it depends on an event considered unlikely at inception and the supplier bears relocation costs.",
      ),
      text(
        "تحصل Sellerwell على معظم المنافع من استخدام الوحدة طوال الأربع سنوات. دفع نسبة من المبيعات مقابل الإيجار لا يسلبها هذه المنافع؛ فهو جزء من المقابل للمؤجر.",
        "Sellerwell obtains substantially all economic benefits from using the unit over the four years. Paying a sales-based amount does not remove those benefits; it is consideration to the lessor.",
      ),
      text(
        "توجه Sellerwell الاستخدام لأنها تقرر الأصناف والأسعار والمخزون ضمن نطاق العقد. تقييد ساعات فتح المركز وقيام Propfield بالتسويق والتنظيف والأمن لا يمنح Propfield قرارات الاستخدام ذات الصلة.",
        "Sellerwell directs use by deciding product mix, prices and inventory within the contract's scope. Shopping-centre hours and Propfield's marketing, cleaning and security services do not give Propfield the relevant use decisions.",
      ),
      text(
        "النتيجة: يحتوي العقد على إيجار للوحدة 21 مدته أربع سنوات. تُقيّم خدمات التسويق والتنظيف والأمن بوصفها مكونات غير إيجارية، مع تطبيق قواعد الفصل/التخصيص المناسبة.",
        "Conclusion: the contract contains a four-year lease of Unit 21. Marketing, cleaning and security are assessed as non-lease components under the applicable separation and allocation requirements.",
      ),
    ],
    reference: "IFRS 16.9, 12–13, B9–B19, B21–B30",
  },
];

export function getIfrsPracticeCases(standardCode: string): IfrsPracticeCase[] {
  return IFRS_BOOK2_PRACTICE_CASES.filter(
    (practiceCase) => practiceCase.standardCode === standardCode,
  );
}
