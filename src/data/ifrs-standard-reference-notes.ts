/**
 * Original teaching notes for the learning pages. Public technical references
 * are limited to the relevant IFRS/IAS literature and IFRS Foundation updates.
 * Keep period-specific requirements under review when standards change.
 */

export type ReferenceText = { ar: string; en: string };

export interface StandardReferenceNotes {
  keyRules: ReferenceText[];
  pitfalls: ReferenceText[];
  disclosureChecklist: ReferenceText[];
  /** IFRS 20 is covered at model-overview level until its paragraph text is reviewed. */
  checklistStatus?: "overview_only";
}

const b = (ar: string, en: string): ReferenceText => ({ ar, en });
const notes = (
  keyRules: ReferenceText[],
  pitfalls: ReferenceText[],
  disclosureChecklist: ReferenceText[],
  checklistStatus?: StandardReferenceNotes["checklistStatus"],
): StandardReferenceNotes => ({ keyRules, pitfalls, disclosureChecklist, checklistStatus });

export const IFRS_STANDARD_REFERENCE_NOTES: Record<string, StandardReferenceNotes> = {
  "IFRS 1": notes(
    [
      b(
        "أنشئ قائمة مركز مالي افتتاحية بتاريخ التحول، وطبّق المعايير السارية بنهاية أول فترة تقرير على الأرصدة الافتتاحية والمقارنات، مع مراعاة الاستثناءات.",
        "Prepare an opening statement of financial position at transition and apply Standards effective at the end of the first reporting period to opening balances and comparatives, subject to exceptions.",
      ),
      b(
        "ميّز بين الاستثناءات الإلزامية والإعفاءات الاختيارية، ووثّق كل اختيار مثل التكلفة المفترضة أو عدم إعادة معالجة تجميع أعمال سابق.",
        "Separate mandatory exceptions from optional exemptions and document each election, such as deemed cost or relief from restating past business combinations.",
      ),
    ],
    [
      b(
        "استخدام إعفاء انتقالي قديم حُذف من المعيار، أو افتراض أن جميع الأرصدة يعاد حسابها بأثر رجعي دون استثناء.",
        "Using an exemption removed from the Standard, or assuming every balance is restated retrospectively without exception.",
      ),
      b(
        "إعداد تسوية لحقوق الملكية عند نهاية الفترة فقط مع إغفال تاريخ التحول أو تسوية الدخل الشامل للمقارنة.",
        "Reconciling equity only at the year end while omitting the transition date or comparative-period comprehensive-income reconciliation.",
      ),
    ],
    [
      b(
        "اعرض تسوية حقوق الملكية من الأساس السابق إلى IFRS عند تاريخ التحول ونهاية آخر فترة مقارنة.",
        "Show previous-GAAP-to-IFRS equity reconciliations at transition and at the end of the latest comparative period.",
      ),
      b(
        "اعرض تسوية إجمالي الدخل الشامل لآخر فترة مقارنة، وفسّر التسويات الجوهرية.",
        "Reconcile total comprehensive income for the latest comparative period and explain material adjustments.",
      ),
      b(
        "اذكر الإعفاءات والخيارات الانتقالية المستخدمة وأثرها، مع إيضاح سياسات IFRS الجديدة.",
        "Identify transition elections and their effects, together with the new IFRS accounting policies.",
      ),
    ],
  ),
  "IFRS 2": notes(
    [
      b(
        "الخدمة المستلمة مقابل أدوات حقوق ملكية تقاس عادة بالقيمة العادلة للأداة في تاريخ المنح ويعترف بمصروفها خلال فترة الاستحقاق.",
        "Services received for equity instruments are generally measured using grant-date instrument fair value and expensed over the vesting period.",
      ),
      b(
        "الترتيبات المسددة نقدًا تنشئ التزامًا يعاد قياسه بالقيمة العادلة في كل تاريخ تقرير حتى السداد.",
        "Cash-settled awards create a liability remeasured at fair value at each reporting date until settlement.",
      ),
    ],
    [
      b(
        "إعادة قياس منحة مسددة بأسهم كما لو كانت التزامًا نقديًا، أو تثبيت قيمة التزام نقدي عند تاريخ المنح.",
        "Remeasuring an equity-settled grant as a cash liability, or freezing a cash-settled liability at grant date.",
      ),
      b(
        "خلط شروط الخدمة والأداء غير السوقية مع شروط السوق عند تقدير عدد الأدوات المتوقع استحقاقها.",
        "Confusing service and non-market performance conditions with market conditions when estimating awards expected to vest.",
      ),
    ],
    [
      b(
        "صف أنواع الترتيبات وشروط الاستحقاق وطريقة التسوية.",
        "Describe award types, vesting conditions and settlement methods.",
      ),
      b(
        "بيّن حركة عدد الخيارات أو الأدوات خلال الفترة مع أسعار ممارستها ذات الصلة.",
        "Present the movement in options or other instruments during the period and relevant exercise prices.",
      ),
      b(
        "اشرح منهج تقدير القيمة العادلة ومدخلاته، ومصروف الفترة وأرصدة الالتزامات النقدية.",
        "Explain fair-value methods and inputs, period expense and outstanding cash-settled liabilities.",
      ),
    ],
  ),
  "IFRS 3": notes(
    [
      b(
        "ابدأ بإثبات أن المجموعة المقتناة تمثل نشاطًا تجاريًا، ثم طبّق طريقة الاستحواذ في تاريخ اكتساب السيطرة.",
        "Establish that the acquired set is a business, then apply the acquisition method on the date control is obtained.",
      ),
      b(
        "الشهرة هي الفرق بين المقابل والحصة غير المسيطرة وأي حصة سابقة من جهة، وصافي الأصول المحددة بالقيمة العادلة من جهة أخرى؛ تكاليف الاستحواذ المعتادة مصروف.",
        "Goodwill is the residual after comparing consideration, non-controlling interest and any previous interest with fair-valued identifiable net assets; ordinary acquisition costs are expensed.",
      ),
    ],
    [
      b(
        "تسجيل قيد الاستحواذ دون الشهرة أو الالتزامات المحددة، ما يؤدي إلى قيد غير متوازن أو شهرة خاطئة.",
        "Recording the acquisition without goodwill or identifiable liabilities, producing an unbalanced entry or wrong goodwill.",
      ),
      b(
        "رسملة أتعاب الفحص والاستشارات ضمن المقابل أو الاعتراف بربح شراء صفقة قبل إعادة فحص القياسات.",
        "Capitalising due-diligence fees in consideration or recognising a bargain gain before reassessing measurements.",
      ),
    ],
    [
      b(
        "صف النشاط المستحوذ عليه وتاريخ الاستحواذ ونسبة الحقوق المكتسبة وأسباب الصفقة.",
        "Identify the acquiree, acquisition date, ownership acquired and reasons for the transaction.",
      ),
      b(
        "افصل مكونات المقابل والأصول والالتزامات المحددة والحصة غير المسيطرة وتسوية الشهرة.",
        "Break down consideration, identifiable assets and liabilities, non-controlling interest and the goodwill calculation.",
      ),
      b(
        "اشرح المقابل المحتمل والتسويات المؤقتة وتكاليف الاستحواذ وأثر المنشأة المقتناة على الإيراد والنتائج.",
        "Explain contingent consideration, provisional amounts, acquisition costs and the acquiree's contribution to revenue and results.",
      ),
    ],
  ),
  "IFRS 5": notes(
    [
      b(
        "التصنيف كمحتفظ به للبيع يتطلب أصلًا متاحًا للبيع فورًا وخطة بيع عالية الاحتمال؛ النية وحدها لا تكفي.",
        "Held-for-sale classification requires immediate availability and a highly probable sale plan; intention alone is insufficient.",
      ),
      b(
        "بعد إعادة قياس البنود بحسب معاييرها أولًا، يقاس الأصل الداخل في القياس بأقل من قيمته الدفترية وقيمته العادلة ناقص تكاليف البيع ويوقف إهلاكه.",
        "After measuring underlying items under their own Standards, in-scope assets are measured at the lower of carrying amount and fair value less costs to sell, and depreciation stops.",
      ),
    ],
    [
      b(
        "استبعاد أصل من التصنيف والعرض لأن قياسه مستثنى بموجب IFRS 5؛ استثناء القياس لا يلغي متطلبات التصنيف والعرض.",
        "Excluding an item from classification and presentation because its measurement is exempt; the measurement carve-out does not remove presentation duties.",
      ),
      b(
        "إعادة عرض مركز المقارنة المالي كما يعاد عرض نتائج العمليات غير المستمرة، أو تصنيف أصل سيُهجر كمحتفظ به للبيع.",
        "Re-presenting the comparative statement of financial position like discontinued results, or classifying an asset to be abandoned as held for sale.",
      ),
    ],
    [
      b(
        "عرّف الأصل أو مجموعة الاستبعاد وخطة البيع وتوقيت التصرف المتوقع.",
        "Identify the asset or disposal group, the sale plan and expected timing.",
      ),
      b(
        "افصل الأصول والالتزامات المحتفظ بها للبيع وأثر إعادة القياس والقطاع ذي الصلة.",
        "Separately show held-for-sale assets and liabilities, remeasurement effects and the related segment.",
      ),
      b(
        "للعملية غير المستمرة، وضّح نتائجها وتدفقاتها وأثر الضريبة وأعد عرض المقارنات المطلوبة للنتائج والتدفقات.",
        "For discontinued operations, disclose results, cash flows and tax effects, and re-present required comparative results and cash flows.",
      ),
    ],
  ),
  "IFRS 6": notes(
    [
      b(
        "ينطبق على إنفاق الاستكشاف والتقييم بعد الحصول على حق الاستكشاف وقبل ثبوت الجدوى الفنية والتجارية للاستخراج.",
        "It covers exploration and evaluation expenditure after exploration rights are obtained and before technical feasibility and commercial viability are demonstrated.",
      ),
      b(
        "تختار المنشأة سياسة متسقة للاعتراف بتكاليف الاستكشاف والتقييم، وتختبر الانخفاض عند ظهور وقائع محددة ثم تطبق IAS 36 في قياس الخسارة.",
        "The entity adopts a consistent E&E recognition policy and tests for impairment when specified facts arise, using IAS 36 to measure the loss.",
      ),
    ],
    [
      b(
        "رسملة تكلفة ما قبل الحصول على حق الاستكشاف أو إبقاء تكاليف التطوير بعد إثبات الجدوى تحت IFRS 6.",
        "Capitalising pre-licence expenditure or keeping development costs under IFRS 6 after feasibility is demonstrated.",
      ),
      b(
        "استخدام مؤشرات الانخفاض العامة وحدها دون مراجعة انتهاء الحقوق أو غياب ميزانية لاستكمال العمل في المنطقة.",
        "Using only generic impairment indicators while overlooking expiring rights or the absence of a budget to continue exploration.",
      ),
    ],
    [
      b(
        "صف سياسة تحديد ما يُرسمل من تكاليف الاستكشاف والتقييم وما يُحمّل مصروفًا.",
        "Describe the policy for capitalising and expensing exploration and evaluation costs.",
      ),
      b(
        "اعرض الأصول والالتزامات والإيرادات والمصروفات والتدفقات الناتجة من نشاط الاستكشاف والتقييم.",
        "Present assets, liabilities, income, expenses and cash flows arising from E&E activity.",
      ),
      b(
        "اشرح وقائع الانخفاض وخسائره أو عكسه وتبويب أصول الاستكشاف الملموسة وغير الملموسة.",
        "Explain impairment events, losses or reversals, and the classification of tangible and intangible E&E assets.",
      ),
    ],
  ),
  "IFRS 7": notes(
    [
      b(
        "اربط الإفصاح عن الأدوات المالية بفئات القياس الفعلية وأثرها على المركز والأداء، ثم افصل مخاطر الائتمان والسيولة والسوق.",
        "Connect financial-instrument disclosures to actual measurement categories and effects on position and performance, then distinguish credit, liquidity and market risk.",
      ),
      b(
        "المعلومات الكمية عن المخاطر ينبغي أن تعكس ما يرفع دوريًا إلى الإدارة، مع شرح التركّزات والمنهج المستخدم في إدارة كل خطر.",
        "Quantitative risk information should reflect what management receives internally, with concentrations and risk-management methods explained.",
      ),
    ],
    [
      b(
        "نسخ جدول مخاطر عام لا يتطابق مع فئات IFRS 9 أو مع المعلومات التي تعتمد عليها الإدارة.",
        "Copying a generic risk table that does not reconcile to IFRS 9 categories or internal management information.",
      ),
      b(
        "إغفال آجال الاستحقاق التعاقدية غير المخصومة أو تفسير تغير الخسائر الائتمانية المتوقعة.",
        "Omitting undiscounted contractual maturity analyses or explanations of expected-credit-loss movements.",
      ),
    ],
    [
      b(
        "طابق القيم الدفترية للأدوات المالية حسب الفئة مع بنود القوائم والملاحظة التفسيرية.",
        "Reconcile instrument carrying amounts by category to financial-statement captions and notes.",
      ),
      b(
        "قدّم تحليل آجال السيولة والمعلومات عن تعرض الائتمان والضمانات والتركيزات.",
        "Provide liquidity maturity analyses and information on credit exposure, collateral and concentrations.",
      ),
      b(
        "اشرح حساسية مخاطر السوق ومنهج الخسائر الائتمانية المتوقعة وحركة المخصص حيث تنطبق.",
        "Explain market-risk sensitivity, the ECL approach and allowance movements where applicable.",
      ),
    ],
  ),
  "IFRS 8": notes(
    [
      b(
        "حدّد القطاع التشغيلي من التقارير التي يراجعها متخذ القرارات التشغيلية الرئيس لتخصيص الموارد وتقييم الأداء.",
        "Identify operating segments from reports reviewed by the chief operating decision maker for resource allocation and performance assessment.",
      ),
      b(
        "اختبر شروط التجميع والحدود الكمية للقطاعات القابلة للتقرير، ثم طابق مجموعها مع أرقام المنشأة.",
        "Assess aggregation conditions and quantitative thresholds for reportable segments, then reconcile segment totals to entity figures.",
      ),
    ],
    [
      b(
        "إعداد قطاعات حسب الهيكل القانوني أو الجغرافي بدل المعلومات التي يراجعها متخذ القرار فعلًا.",
        "Building segments from legal entities or geography instead of the information actually reviewed by the decision maker.",
      ),
      b(
        "تجميع قطاعات ذات خصائص اقتصادية مختلفة لمجرد تبسيط جدول الإفصاح.",
        "Combining segments with different economic characteristics merely to simplify disclosure.",
      ),
    ],
    [
      b(
        "صف أساس تحديد القطاعات وأنواع المنتجات والخدمات التي يحقق كل قطاع إيرادًا منها.",
        "Explain how segments were identified and their principal products and services.",
      ),
      b(
        "اعرض مقاييس ربح القطاع وأصوله والتزاماته إذا كانت تقدم لمتخذ القرار، مع تسوياتها لأرقام المنشأة.",
        "Show segment profit, assets and liabilities when supplied to the decision maker, with reconciliations to entity totals.",
      ),
      b(
        "أضف معلومات المنشأة ككل عن المنتجات والمناطق الجغرافية والعملاء الرئيسيين عند انطباقها.",
        "Include entity-wide information on products, geographic areas and major customers where applicable.",
      ),
    ],
  ),
  "IFRS 9": notes(
    [
      b(
        "تصنيف الأصل المالي يعتمد معًا على نموذج إدارة المحفظة وخصائص التدفقات النقدية التعاقدية، بما فيها اختبار أصل الدين والفائدة فقط.",
        "Financial-asset classification combines the portfolio business model with contractual cash-flow characteristics, including the solely-principal-and-interest test.",
      ),
      b(
        "احسب خسائر الائتمان المتوقعة مبدئيًا على أساس 12 شهرًا ثم انتقل إلى عمر الأداة إذا ارتفع خطر الائتمان ارتفاعًا جوهريًا، مع نهج مبسط لبعض الذمم.",
        "Measure ECL initially over 12 months, move to lifetime ECL after a significant increase in credit risk, and use the simplified approach for eligible receivables.",
      ),
    ],
    [
      b(
        "استخدام تصنيف محاسبي من اسم الأداة وحده دون فحص الشروط التعاقدية ونموذج العمل.",
        "Classifying by instrument name alone without analysing contract terms and the business model.",
      ),
      b(
        "تحميل كامل مخصص المرحلة الثانية كمصروف جديد بدل تسجيل الزيادة فوق المخصص القائم، أو إهمال الخصم والسيناريوهات في تطبيق فعلي.",
        "Expensing the full Stage 2 allowance instead of the increase over the existing balance, or omitting discounting and scenarios in a real calculation.",
      ),
    ],
    [
      b(
        "وثّق نموذج العمل ونتيجة اختبار التدفقات التعاقدية لكل محفظة وأساس التصنيف.",
        "Document the business model, contractual cash-flow assessment and classification basis for each portfolio.",
      ),
      b(
        "طابق حركة مخصص الخسائر المتوقعة ومراحل الخطر وافتراضات الاحتمال والخسارة مع إفصاحات IFRS 7.",
        "Reconcile ECL allowance movements, risk stages and probability and loss assumptions to IFRS 7 disclosures.",
      ),
      b(
        "بيّن سياسات التحوط والعلاقات المؤهلة وأثرها على الربح أو الخسارة والدخل الشامل الآخر عند التطبيق.",
        "Explain eligible hedge relationships and their effects on profit or loss and other comprehensive income when hedge accounting is applied.",
      ),
    ],
  ),
  "IFRS 10": notes(
    [
      b(
        "السيطرة تجمع السلطة على الأنشطة ذات الصلة، والتعرض لعوائد متغيرة، والقدرة على استخدام السلطة للتأثير في تلك العوائد.",
        "Control combines power over relevant activities, exposure to variable returns and the ability to use power to affect those returns.",
      ),
      b(
        "ابدأ التوحيد من تاريخ اكتساب السيطرة وأوقفه عند فقدها، مع توحيد السياسات وحذف المعاملات والأرصدة داخل المجموعة.",
        "Consolidate from the date control begins until it ends, align accounting policies and eliminate intragroup balances and transactions.",
      ),
    ],
    [
      b(
        "اعتبار نسبة ملكية تتجاوز 50% حسمًا نهائيًا دون تحليل حقوق التصويت الجوهرية والاتفاقيات.",
        "Treating ownership above 50% as conclusive without assessing substantive voting rights and agreements.",
      ),
      b(
        "إغفال حذف أرباح المجموعة غير المحققة أو الاستمرار في التوحيد بعد فقد السيطرة.",
        "Failing to eliminate unrealised intragroup profit or continuing consolidation after control is lost.",
      ),
    ],
    [
      b(
        "وثّق أحكام السيطرة المهمة، خصوصًا حين تختلف النتيجة عن نسبة التصويت الظاهرة.",
        "Document significant control judgements, especially when conclusions differ from apparent voting percentages.",
      ),
      b(
        "اشرح تغيّرات المجموعة وفقد السيطرة ومعالجة الحصص غير المسيطرة.",
        "Explain changes in group composition, loss of control and non-controlling-interest treatment.",
      ),
      b(
        "قدّم إفصاحات الحصص في المنشآت الأخرى ذات الصلة بموجب IFRS 12 بجانب سياسة التوحيد.",
        "Provide related IFRS 12 interests-in-other-entities disclosures alongside the consolidation policy.",
      ),
    ],
  ),
  "IFRS 11": notes(
    [
      b(
        "التحكم المشترك يوجد حين تتطلب قرارات الأنشطة ذات الصلة موافقة جماعية من الأطراف التي تتقاسم السيطرة.",
        "Joint control exists when decisions about relevant activities require unanimous consent of the parties sharing control.",
      ),
      b(
        "صنّف الترتيب بحسب الحقوق في الأصول والالتزامات عن المطلوبات: العملية المشتركة تعترف بحصة العناصر مباشرة، والمشروع المشترك يخضع عادة لطريقة حقوق الملكية.",
        "Classify by rights to assets and obligations for liabilities: a joint operation recognises its share directly, while a joint venture generally uses the equity method.",
      ),
    ],
    [
      b(
        "اعتبار وجود شركة مستقلة دليلًا قاطعًا على مشروع مشترك دون فحص الشكل القانوني والعقد والوقائع الأخرى.",
        "Assuming a separate vehicle always means a joint venture without reviewing legal form, contract terms and other facts.",
      ),
      b(
        "توحيد المشروع المشترك تناسبيًا أو إثبات العملية المشتركة كاستثمار واحد بدل حصص الأصول والالتزامات.",
        "Proportionately consolidating a joint venture or recording a joint operation as a single investment instead of its asset and liability shares.",
      ),
    ],
    [
      b(
        "صف طبيعة الترتيب وموقعه ونسبة الملكية والحكم المستخدم في تصنيفه.",
        "Describe each arrangement's nature, location, ownership and classification judgement.",
      ),
      b(
        "اعرض الالتزامات والتعهدات المتعلقة بالترتيبات المشتركة بحسب متطلبات IFRS 12.",
        "Disclose liabilities and commitments related to joint arrangements under IFRS 12.",
      ),
      b(
        "للمشروعات المشتركة الجوهرية، قدّم المعلومات المالية الملخصة والتسويات المطلوبة.",
        "For material joint ventures, provide required summarised financial information and reconciliations.",
      ),
    ],
  ),
  "IFRS 12": notes(
    [
      b(
        "اجمع الإفصاحات عن الشركات التابعة والترتيبات المشتركة والزميلة والمنشآت المهيكلة غير الموحدة حول طبيعة الحصة ومخاطرها وأثرها المالي.",
        "Bring disclosures for subsidiaries, joint arrangements, associates and unconsolidated structured entities together around the nature, risks and financial effects of each interest.",
      ),
      b(
        "قدّم أحكام السيطرة والتأثير المهم والتصنيف، بما في ذلك الحالات التي لا تتفق فيها الخلاصة مع نسبة التصويت.",
        "Explain control, significant-influence and classification judgements, including cases where the conclusion differs from voting percentages.",
      ),
    ],
    [
      b(
        "الاكتفاء بقائمة أسماء الشركات المستثمَر فيها من دون أرقام أو شرح للمخاطر والقيود على تحويل الأموال.",
        "Listing investee names without figures or explaining risks and restrictions on fund transfers.",
      ),
      b(
        "إهمال المنشآت المهيكلة غير الموحدة لأنها لا تدخل قوائم المجموعة.",
        "Ignoring unconsolidated structured entities because they are not consolidated.",
      ),
    ],
    [
      b(
        "أظهر قائمة الحصص المهمة وطبيعتها ونسبها والأحكام المهنية المرتبطة بها.",
        "Show material interests, their nature, ownership and associated judgements.",
      ),
      b(
        "قدّم بيانات مالية ملخصة للشركات التابعة ذات الحصص غير المسيطرة الجوهرية والزميلة والمشروعات المشتركة الجوهرية.",
        "Provide summarised information for subsidiaries with material non-controlling interests and material associates and joint ventures.",
      ),
      b(
        "اشرح القيود والمخاطر والدعم المقدم أو المتوقع للمنشآت المهيكلة غير الموحدة.",
        "Explain restrictions, exposures and support provided or expected for unconsolidated structured entities.",
      ),
    ],
  ),
  "IFRS 13": notes(
    [
      b(
        "القيمة العادلة سعر خروج في معاملة منتظمة بين مشاركين في السوق بتاريخ القياس، وليست قيمة استخدام خاصة بالمنشأة.",
        "Fair value is an exit price in an orderly market-participant transaction at the measurement date, not entity-specific value in use.",
      ),
      b(
        "اختر السوق الرئيس أو الأكثر منفعة وتقنية تقييم مناسبة، وصنّف القياس حسب أدنى مدخل مهم في هرم المستويات الثلاثة.",
        "Select the principal or most advantageous market and a suitable valuation method, classifying the measurement by its lowest significant input in the three-level hierarchy.",
      ),
    ],
    [
      b(
        "وصف قياس بأنه مستوى أول رغم وجود تعديل جوهري على سعر معلن، أو استخدام افتراضات الإدارة بدل المشاركين في السوق.",
        "Calling a measure Level 1 despite a significant adjustment to a quoted price, or using management assumptions instead of market-participant assumptions.",
      ),
      b(
        "تطبيق IFRS 13 على قياس يشبه القيمة العادلة لكنه مختلف، مثل صافي القيمة القابلة للتحقق للمخزون.",
        "Applying IFRS 13 to a similar but distinct measure, such as inventory net realisable value.",
      ),
    ],
    [
      b(
        "افصل القياسات المتكررة وغير المتكررة وحدد مستويات الهرم وتقنيات التقييم ومدخلاتها.",
        "Distinguish recurring and non-recurring measurements and state hierarchy levels, valuation techniques and inputs.",
      ),
      b(
        "قدّم تسوية من بداية إلى نهاية الفترة للقياسات المتكررة من المستوى الثالث.",
        "Reconcile opening and closing recurring Level 3 measurements.",
      ),
      b(
        "اشرح المدخلات غير القابلة للملاحظة وحساسية القياس لها عندما تكون جوهرية.",
        "Explain significant unobservable inputs and measurement sensitivity to them.",
      ),
    ],
  ),
  "IFRS 14": notes(
    [
      b(
        "هذا الاختيار مقصور على متبنٍّ لأول مرة لـIFRS لديه نشاط منظَّم الأسعار وأرصدة تأجيل تنظيمي معترف بها وفق أساسه السابق.",
        "This option is confined to a first-time IFRS adopter with rate-regulated activity and deferral balances recognised under previous GAAP.",
      ),
      b(
        "تُستكمل سياسة الأساس السابق للأرصدة المؤهلة مع عرضها وحركتها منفصلتين؛ يحل IFRS 20 محل IFRS 14 عند تطبيقه.",
        "The previous-GAAP policy continues for qualifying balances, with separate presentation of balances and movements; IFRS 20 supersedes IFRS 14 when applied.",
      ),
    ],
    [
      b(
        "بدء استخدام IFRS 14 في منشأة تعد قوائم IFRS منذ سنوات أو إنشاء أصل تنظيمي جديد لا يدخل الرصيد المؤهل.",
        "Starting IFRS 14 in an established IFRS reporter or creating a new regulatory asset outside qualifying previous-GAAP balances.",
      ),
      b(
        "دمج أرصدة التأجيل التنظيمي مع الذمم أو الأدوات المالية الأخرى وإخفاء حركتها المستقلة.",
        "Blending regulatory deferral balances with receivables or financial instruments and hiding their separate movement.",
      ),
    ],
    [
      b(
        "اشرح طبيعة تنظيم الأسعار والأنشطة والفئات التي نشأت عنها الأرصدة.",
        "Explain rate regulation, affected activities and the balance classes it creates.",
      ),
      b(
        "أظهر أرصدة التأجيل المدينة والدائنة وحركتها على نحو منفصل عن بقية البنود.",
        "Show debit and credit deferral balances and movements separately from other captions.",
      ),
      b(
        "صف السياسات والأحكام ومخاطر الاسترداد أو الرد وآثارها على القوائم.",
        "Describe policies, judgements, recovery or refund risks and their financial-statement effects.",
      ),
    ],
  ),
  "IFRS 15": notes(
    [
      b(
        "حلّل العقد عبر خمس خطوات: العقد، الوعود المميزة، سعر المعاملة، تخصيص السعر، ثم إثبات الإيراد عند انتقال السيطرة أو مع انتقالها.",
        "Analyse the contract through five steps: contract, distinct promises, transaction price, price allocation, then revenue when or as control transfers.",
      ),
      b(
        "المقابل المتغير يدخل السعر فقط بقدر لا يُتوقع معه عكس إيراد جوهري؛ افصل أصل العقد عن الذمة وعن التزام العقد.",
        "Include variable consideration only to the extent a significant revenue reversal is not expected; distinguish a contract asset from a receivable and a contract liability.",
      ),
    ],
    [
      b(
        "مساواة الفاتورة بالإيراد أو إثبات كامل مبلغ العقد قبل الوفاء بالتزامات الأداء.",
        "Equating billing with revenue or recognising the full contract price before fulfilling performance obligations.",
      ),
      b(
        "عدم فصل خدمة مميزة أو تجاهل المقابل المتغير ومكون التمويل المهم وتعديل العقد.",
        "Failing to separate a distinct service or assess variable consideration, significant financing and contract modifications.",
      ),
    ],
    [
      b(
        "افصل الإيراد بحسب فئات تصف أثر العوامل الاقتصادية على طبيعته وتوقيته وعدم تأكده.",
        "Disaggregate revenue into categories depicting how economic factors affect its nature, timing and uncertainty.",
      ),
      b(
        "صالح أرصدة أصول والتزامات العقود وفسّر التغيرات المهمة فيها.",
        "Reconcile contract-asset and contract-liability balances and explain significant changes.",
      ),
      b(
        "اشرح التزامات الأداء المتبقية والأحكام في توقيت الوفاء وتخصيص السعر وأصول تكاليف العقود.",
        "Explain remaining performance obligations, timing and allocation judgements and contract-cost assets.",
      ),
    ],
  ),
  "IFRS 16": notes(
    [
      b(
        "اختبر وجود أصل محدد وحق العميل في توجيه استخدامه قبل اعتبار الاتفاق إيجارًا، ثم حدد مدة العقد والدفعات ومعدل الخصم.",
        "Confirm an identified asset and the customer's right to direct its use before treating an arrangement as a lease, then set the term, payments and discount rate.",
      ),
      b(
        "يثبت المستأجر عادة حق الاستخدام والتزام الإيجار بالقيمة الحالية، ثم يفصل مصروف الإهلاك والفائدة والدفعات وإعادة القياس؛ للمؤجر نموذج تصنيف مختلف.",
        "A lessee generally recognises a right-of-use asset and present-valued liability, then tracks depreciation, interest, payments and remeasurement; lessors use a different classification model.",
      ),
    ],
    [
      b(
        "استبعاد خيار تمديد مرجح بدرجة معقولة من مدة الإيجار أو استعمال معدل خصم غير مدعوم.",
        "Omitting a reasonably certain extension option from the lease term or using an unsupported discount rate.",
      ),
      b(
        "تجاهل إعادة القياس عند تغير المؤشر أو مدة الإيجار، أو إثبات كامل الدفعة مصروف إيجار بعد بدء العقد.",
        "Missing remeasurement when an index or lease term changes, or expensing the full lease payment after commencement.",
      ),
    ],
    [
      b(
        "أظهر أصول حق الاستخدام والالتزامات أو البنود التي تتضمنها، مع تحليل آجال الاستحقاق.",
        "Present right-of-use assets and liabilities, or identify their captions, with a maturity analysis.",
      ),
      b(
        "أفصح عن الإهلاك حسب فئة الأصل والفائدة والدفعات المتغيرة وتكلفة الإيجارات قصيرة الأجل أو منخفضة القيمة.",
        "Disclose depreciation by asset class, interest, variable payments and short-term or low-value lease expense.",
      ),
      b(
        "قدّم مجموع التدفقات النقدية للإيجارات والإضافات إلى حقوق الاستخدام وطبيعة العقود والخيارات والقيود المهمة.",
        "Provide total lease cash outflow, ROU additions and information on material contract terms, options and restrictions.",
      ),
    ],
  ),
  "IFRS 17": notes(
    [
      b(
        "جمّع عقود التأمين في محافظ ومجموعات ربحية وفترات إصدار مناسبة، ثم اختر نموذج القياس العام أو نهج تخصيص الأقساط أو نهج الرسوم المتغيرة عند استيفاء شروطه.",
        "Group insurance contracts by portfolio, profitability and issue period, then apply the general model, premium allocation approach or variable fee approach when its criteria are met.",
      ),
      b(
        "في النموذج العام تتكون تدفقات الوفاء من التدفقات المتوقعة والخصم وتعديل المخاطر؛ يمثل هامش الخدمة التعاقدية الربح غير المكتسب ويُحرر حسب وحدات التغطية.",
        "Under the general model, fulfilment cash flows combine expected flows, discounting and risk adjustment; the contractual service margin represents unearned profit released using coverage units.",
      ),
    ],
    [
      b(
        "تطبيق مثال هامش الخدمة في النموذج العام على عقود نهج تخصيص الأقساط أو الرسوم المتغيرة دون تعديل.",
        "Applying a general-model CSM example unchanged to premium allocation or variable-fee contracts.",
      ),
      b(
        "تحميل تغير متعلق بخدمة مستقبلية مباشرة على الربح أو الخسارة بدل تعديل الهامش، أو إبقاء هامش موجب لمجموعة أصبحت مرهقة.",
        "Taking a future-service change straight to profit or loss instead of adjusting CSM, or retaining positive CSM after a group becomes onerous.",
      ),
    ],
    [
      b(
        "صالح أرصدة مجموعات عقود التأمين وإعادة التأمين من أول الفترة إلى آخرها مع تحليل مكونات القياس.",
        "Reconcile opening and closing insurance and reinsurance group balances with their measurement components.",
      ),
      b(
        "افصل إيراد خدمة التأمين ومصروفها عن دخل أو مصروف التمويل التأميني ووضح طرق القياس.",
        "Separate insurance-service revenue and expense from insurance-finance income or expense and explain measurement methods.",
      ),
      b(
        "اشرح الأحكام الجوهرية والمخاطر وتوقيت التدفقات والتغير في هامش الخدمة وتعديل المخاطر.",
        "Explain significant judgements, risks, cash-flow timing and movements in CSM and risk adjustment.",
      ),
    ],
  ),
  "IFRS 18": notes(
    [
      b(
        "للفترات التي يبدأ سريان IFRS 18 عليها، صنّف بنود الربح أو الخسارة في التشغيل والاستثمار والتمويل والضرائب والعمليات غير المستمرة، مع مراعاة طبيعة النشاط الرئيس.",
        "For periods applying IFRS 18, classify profit-or-loss items into operating, investing, financing, income taxes and discontinued operations, considering specified main business activities.",
      ),
      b(
        "اعرض ربح التشغيل والربح قبل التمويل وضرائب الدخل حيث ينطبق؛ وافحص مقاييس الأداء التي تستخدمها الإدارة علنًا لتحديد ما يتطلب إفصاحًا وتسوية.",
        "Present operating profit and profit before financing and income taxes when applicable; assess publicly used management performance measures for disclosure and reconciliation.",
      ),
    ],
    [
      b(
        "تطبيق فئات IFRS 18 على قوائم 2026 قبل اعتماده مبكرًا، أو افتراض أن كل شركة تعرض الفائدة والإيجار في الفئة نفسها.",
        "Applying IFRS 18 categories to 2026 statements without early adoption, or assuming every entity classifies interest and rental income identically.",
      ),
      b(
        "وصف أي رقم معدل بأنه مقياس أداء محدد من الإدارة تلقائيًا، أو إغفال تسويته مع أقرب مجموع IFRS مناسب.",
        "Automatically treating every adjusted figure as an MPM, or omitting reconciliation to the most comparable IFRS subtotal.",
      ),
    ],
    [
      b(
        "بيّن أي مقاييس أداء محددة من الإدارة تنطبق، وسبب فائدتها وطريقة حسابها وتسويتها وآثار الضريبة والحصص غير المسيطرة.",
        "Disclose applicable management-defined performance measures, why they are useful, how they are calculated and reconciled, and tax and non-controlling-interest effects.",
      ),
      b(
        "اشرح الأحكام في تحديد الأنشطة الرئيسية الخاصة وأساس تجميع البنود وتفصيلها.",
        "Explain judgements about specified main business activities and the basis of aggregation and disaggregation.",
      ),
      b(
        "راجع عرض مصروفات التشغيل بالطبيعة أو الوظيفة والإفصاحات المكملة المطلوبة عند استخدام الوظيفة.",
        "Review operating-expense presentation by nature or function and the complementary disclosures required when function is used.",
      ),
    ],
  ),
  "IFRS 19": notes(
    [
      b(
        "هو اختيار إفصاح مخفّض لشركة تابعة مؤهلة دون مساءلة عامة، مع استمرار تطبيق قواعد الاعتراف والقياس والعرض في معايير IFRS الأخرى.",
        "It is a reduced-disclosure election for an eligible subsidiary without public accountability; recognition, measurement and presentation under other IFRS Standards continue.",
      ),
      b(
        "اختبر أهلية الشركة وقوائم الأم الموحدة المتاحة للاستخدام العام عند نهاية الفترة، ثم طبّق متطلبات الإفصاح البديلة بدل قوائم الإفصاح الكاملة حيث يسمح المعيار.",
        "Assess subsidiary eligibility and the parent's publicly available consolidated IFRS statements at period end, then use the Standard's substitute disclosures where permitted.",
      ),
    ],
    [
      b(
        "التعامل مع تاريخ 1 يناير 2027 كموعد إلزامي لاختيار IFRS 19، أو استخدامه في شركة لديها مساءلة عامة.",
        "Treating 1 January 2027 as a mandatory adoption deadline, or using it for an entity with public accountability.",
      ),
      b(
        "افتراض أن الإعفاء يخفض القياس أو يحذف كل الإفصاحات، بدل فحص متطلبات IFRS 19 وفهم المعاملات الجوهرية.",
        "Assuming the relief changes measurement or removes all disclosure, rather than checking IFRS 19 requirements and material transactions.",
      ),
    ],
    [
      b(
        "اذكر استخدام IFRS 19 وأساس أهلية المنشأة وبيانات المجموعة الأم المطلوبة.",
        "State that IFRS 19 is used, the basis of eligibility and required parent-group information.",
      ),
      b(
        "طابق إفصاحات العمليات والأرصدة الجوهرية مع متطلبات IFRS 19 المناسبة للمعايير المطبقة.",
        "Map material transactions and balances to IFRS 19 disclosures relevant to the applied Standards.",
      ),
      b(
        "قيّم الحاجة إلى معلومات إضافية لفهم أثر حدث جوهري حين لا تكفي الإفصاحات المحددة وحدها.",
        "Assess whether extra information is needed to explain a material event when specified disclosures alone are insufficient.",
      ),
    ],
  ),
  "IFRS 20": notes(
    [
      b(
        "يصف المعيار الصادر في 2026 أصولًا والتزامات تنظيمية تنشأ من فروق توقيت قابلة للإنفاذ بين تقديم الخدمة وتحصيل قيمتها في أسعار منظمة مستقبلًا؛ يبدأ سريانه 1 يناير 2029 مع إمكان التطبيق المبكر.",
        "The Standard issued in 2026 addresses enforceable regulatory assets and liabilities arising from timing differences between service delivery and recovery through future regulated prices; it is effective from 1 January 2029 with early application permitted.",
      ),
      b(
        "حلّل اتفاق تنظيم الأسعار والحق أو الالتزام الناتج عنه بعد تطبيق المعايير الأخرى ذات الصلة مثل IFRS 15 وIFRIC 12؛ راجع النص الرسمي قبل تصميم القيود أو الإفصاحات النهائية.",
        "Analyse the rate-regulation agreement and resulting right or obligation after applying relevant Standards such as IFRS 15 and IFRIC 12; review the official text before finalising entries or disclosures.",
      ),
    ],
    [
      b(
        "معاملة كل فرق بين التكلفة والسعر كأصل تنظيمي من دون إثبات حق قابل للإنفاذ في أسعار مستقبلية.",
        "Treating every cost-price difference as a regulatory asset without establishing an enforceable right in future rates.",
      ),
      b(
        "عرض النموذج بوصفه مطبقًا حاليًا على الجميع أو اختراع أرقام فقرات ومتطلبات تفصيلية من ملخص الإصدار وحده.",
        "Presenting the model as currently mandatory for everyone or inventing paragraph numbers and detailed requirements from an issuance summary alone.",
      ),
    ],
    [
      b(
        "نقطة تخطيط: احصر الاتفاقات المنظمة وفروق التوقيت المحتملة ومصادر إثبات الحقوق والالتزامات.",
        "Planning point: inventory regulated agreements, potential timing differences and evidence of rights and obligations.",
      ),
      b(
        "نقطة تخطيط: أنشئ حركة افتتاحية وختامية داخلية للأرصدة التنظيمية المتوقعة وتوقعات استردادها أو ردها.",
        "Planning point: build an internal opening-to-closing movement of expected regulatory balances and their recovery or reversal timing.",
      ),
      b(
        "نقطة تخطيط: راجع متطلبات العرض والإفصاح النهائية في النص الرسمي عند توفرها واعتماد المعيار.",
        "Planning point: review final presentation and disclosure requirements in the official text when available and adopted.",
      ),
    ],
    "overview_only",
  ),
  "IAS 1": notes(
    [
      b(
        "حتى تطبيق IFRS 18، احكم على الاستمرارية وقدّم مجموعة قوائم كاملة بمعلومات مقارنة وعرض عادل واتساق في العرض.",
        "Until IFRS 18 is applied, assess going concern and present a complete set of statements with comparatives, fair presentation and consistent format.",
      ),
      b(
        "صنّف الالتزام متداولًا أو غير متداول وفق الحقوق القائمة بنهاية فترة التقرير، بما فيها أثر شروط التعهدات التعاقدية.",
        "Classify liabilities as current or non-current using rights existing at the reporting date, including the effect of covenant conditions.",
      ),
    ],
    [
      b(
        "تصنيف قرض طويل الأجل اعتمادًا على نية الإدارة لإعادة التمويل بدل حق قائم عند تاريخ التقرير.",
        "Classifying long-term debt by management's refinancing intention instead of a right existing at the reporting date.",
      ),
      b(
        "نقل متطلبات IFRS 18 إلى فترات قبل اعتماده أو إغفال إفصاح عدم يقين جوهري بشأن الاستمرارية.",
        "Applying IFRS 18 requirements before adoption or omitting a material going-concern-uncertainty disclosure.",
      ),
    ],
    [
      b(
        "بيّن السياسات المحاسبية الجوهرية والأحكام ومصادر عدم التأكد التقديري وفق المتطلبات السارية للفترة.",
        "Disclose material accounting policies, judgements and estimation uncertainty under the requirements effective for the period.",
      ),
      b(
        "أوضح أساس إعداد القوائم وأي شكوك جوهرية في الاستمرارية مع وصف الظروف وخطط المعالجة.",
        "Explain the preparation basis and material going-concern uncertainties, including conditions and responses.",
      ),
      b(
        "قدّم المعلومات المقارنة وتفسير أي إعادة تبويب جوهرية وأثرها.",
        "Provide comparatives and explain material reclassifications and their effects.",
      ),
    ],
  ),
  "IAS 2": notes(
    [
      b(
        "قِس المخزون بالأقل من التكلفة وصافي القيمة القابلة للتحقق؛ تشمل التكلفة الشراء والتحويل والتكاليف اللازمة لوصوله إلى مكانه وحالته.",
        "Measure inventories at the lower of cost and net realisable value; cost includes purchase, conversion and costs to bring them to their present location and condition.",
      ),
      b(
        "استخدم طريقة تحديد محدد للعناصر غير القابلة للاستبدال، أو الوارد أولًا صادر أولًا أو المتوسط المرجح للعناصر المتجانسة؛ لا تستخدم الوارد أخيرًا صادر أولًا.",
        "Use specific identification for non-interchangeable items, or FIFO or weighted average for interchangeable items; LIFO is not permitted.",
      ),
    ],
    [
      b(
        "اختبار صافي القيمة القابلة للتحقق على إجمالي المخزون مع تجاهل تلف صنف بعينه أو تكاليف إتمامه وبيعه.",
        "Testing NRV only for total inventory while overlooking an individual damaged item or its completion and selling costs.",
      ),
      b(
        "إبقاء تخفيض سابق رغم ارتفاع القيمة القابلة للتحقق لاحقًا ضمن حدود التكلفة الأصلية.",
        "Keeping a prior write-down after NRV recovers, within the original-cost ceiling.",
      ),
    ],
    [
      b(
        "اذكر سياسة القياس وصيغة التكلفة والقيمة الدفترية حسب تصنيفات المخزون المناسبة.",
        "State the measurement policy, cost formula and carrying amounts by appropriate inventory class.",
      ),
      b(
        "أظهر المخزون المثبت كمصروف خلال الفترة والتخفيضات وعكسها وأسباب العكس.",
        "Disclose inventories recognised as expense, write-downs, reversals and reasons for reversals.",
      ),
      b(
        "بيّن القيمة الدفترية للمخزون المرهون ضمانًا لالتزامات.",
        "Show the carrying amount of inventory pledged as security for liabilities.",
      ),
    ],
  ),
  "IAS 7": notes(
    [
      b(
        "صنّف التدفقات النقدية إلى تشغيلية واستثمارية وتمويلية؛ المعاملات غير النقدية تعرض خارج قائمة التدفقات مع إفصاح ملائم.",
        "Classify cash flows as operating, investing or financing; present non-cash transactions outside the cash-flow statement with suitable disclosure.",
      ),
      b(
        "ميّز النقد وما يعادله عن الاستثمارات الأخرى، وطابق أرصدته مع المركز المالي؛ عند تطبيق IFRS 18 تتغير بعض قواعد تصنيف الفوائد والأرباح الموزعة.",
        "Distinguish cash equivalents from other investments and reconcile balances to the statement of financial position; IFRS 18 changes some interest and dividend classifications when applied.",
      ),
    ],
    [
      b(
        "إدراج اقتناء أصل بعقد إيجار أو إصدار أسهم ضمن التدفقات النقدية رغم عدم حركة نقد.",
        "Including a lease-financed asset acquisition or share issue as a cash flow when no cash moves.",
      ),
      b(
        "عدم إفصاح الترتيبات مع موردي التمويل أو ربط النقد المقيد بالنقد المتاح للمجموعة دون تفسير.",
        "Omitting supplier-finance disclosures or combining restricted cash with available group cash without explanation.",
      ),
    ],
    [
      b(
        "طابق مكونات النقد وما يعادله مع رصيد قائمة المركز المالي واشرح الأرصدة غير المتاحة للاستخدام.",
        "Reconcile cash and cash equivalents to the financial-position balance and explain unavailable amounts.",
      ),
      b(
        "قدّم تسوية تغيّرات المطلوبات الناشئة عن الأنشطة التمويلية، النقدية وغير النقدية.",
        "Reconcile cash and non-cash changes in liabilities arising from financing activities.",
      ),
      b(
        "اذكر شروط ترتيبات تمويل الموردين ومبالغها وآجال الدفع ذات الصلة عند وجودها.",
        "Describe supplier-finance arrangement terms, amounts and relevant payment due dates when present.",
      ),
    ],
  ),
  "IAS 8": notes(
    [
      b(
        "إذا غاب معيار يعالج معاملة محددة، طوّر سياسة محاسبية تنتج معلومات ملائمة وموثوقة باستخدام تدرج المراجع في IAS 8.",
        "When no Standard specifically covers a transaction, develop a policy yielding relevant and reliable information using the IAS 8 reference hierarchy.",
      ),
      b(
        "تغيير السياسة يطبق عادة بأثر رجعي، وتغيير التقدير مستقبلًا، والخطأ الجوهري السابق يصحح بإعادة عرض المقارنات عندما يكون ذلك ممكنًا.",
        "A policy change is generally retrospective, an estimate change prospective, and a material prior-period error corrected by restating comparatives when practicable.",
      ),
    ],
    [
      b(
        "وصف تصحيح خطأ جوهري بأنه تغيير تقدير لتجنب إعادة العرض.",
        "Calling a material error correction an estimate change to avoid restatement.",
      ),
      b(
        "تسمية المعيار «أساس إعداد القوائم المالية» أو إحالة أحكام الاستمرارية المنقولة إليه كما لو كانت سارية قبل تطبيق IFRS 18.",
        "Using the 'Basis of Preparation' title or transferred going-concern paragraph references as though effective before IFRS 18 adoption.",
      ),
    ],
    [
      b(
        "اشرح طبيعة وأسباب تغيير السياسة ومبالغ أثره على الفترات والبنود المتأثرة.",
        "Explain the nature and reasons for a policy change and its effects on affected periods and line items.",
      ),
      b(
        "أوضح طبيعة التقدير المعدل وأثره في الفترة الحالية والمستقبلية إن أمكن تقديره.",
        "Describe an estimate change and its current and estimable future-period effects.",
      ),
      b(
        "عند تصحيح خطأ سابق، صفه وأظهر مبالغ التصحيح لكل فترة مقارنة مع بيان التعذر إن وجد.",
        "For a prior-period error, describe it and show correction amounts for each comparative period, explaining any impracticability.",
      ),
    ],
  ),
  "IAS 10": notes(
    [
      b(
        "الحدث بين نهاية الفترة وتاريخ اعتماد القوائم يعدل الأرقام إذا قدم دليلًا على حالة كانت موجودة بنهاية الفترة؛ وإلا فغالبًا يقتصر على الإفصاح إذا كان جوهريًا.",
        "An event between period end and authorisation adjusts amounts if it evidences a condition existing at period end; otherwise a material event generally requires disclosure rather than adjustment.",
      ),
      b(
        "إذا أظهرت الأحداث اللاحقة أن فرض الاستمرارية لم يعد مناسبًا، فلا تُعد القوائم على هذا الأساس.",
        "If subsequent events show that going concern is no longer appropriate, the statements are not prepared on that basis.",
      ),
    ],
    [
      b(
        "اعتبار هبوط سعر استثمار بعد نهاية الفترة وحده دليلًا على انخفاض قيمته في تاريخ التقرير دون فحص السبب.",
        "Treating a post-period market-price fall alone as evidence of impairment at the reporting date without assessing its cause.",
      ),
      b(
        "إثبات توزيعات أرباح أعلنت بعد الفترة كالتزام قائم في نهايتها.",
        "Recording dividends declared after period end as a liability existing at period end.",
      ),
    ],
    [
      b(
        "اذكر تاريخ اعتماد القوائم والجهة التي اعتمدتها.",
        "State the authorisation date and who authorised the statements.",
      ),
      b(
        "حدّث إفصاحات الحالات القائمة بنهاية الفترة إذا وصلت معلومات إضافية قبل الاعتماد.",
        "Update disclosures about conditions existing at period end when further information arrives before authorisation.",
      ),
      b(
        "للأحداث غير المعدلة الجوهرية، صف الحدث وقدّر أثره المالي أو اشرح تعذر تقديره.",
        "For material non-adjusting events, describe the event and estimate its financial effect or explain why that cannot be estimated.",
      ),
    ],
  ),
  "IAS 12": notes(
    [
      b(
        "قارن القيمة الدفترية بالأساس الضريبي لتحديد الفروق المؤقتة، ثم اعترف بالضريبة المؤجلة وفق قواعد الأصول والالتزامات والاستثناءات الخاصة.",
        "Compare carrying amounts with tax bases to identify temporary differences, then recognise deferred tax using the asset, liability and exception rules.",
      ),
      b(
        "لا يُعترف بأصل ضريبي مؤجل للخسائر أو الفروق القابلة للخصم إلا بقدر توافر أرباح خاضعة للضريبة يُرجّح استخدامها، مع إعادة تقييم الدليل كل فترة.",
        "Recognise a deferred tax asset for losses or deductible differences only to the extent future taxable profit is probable, reassessing evidence each period.",
      ),
    ],
    [
      b(
        "افتراض أن الاستثناء الأولي يمنع الضريبة المؤجلة على أصل حق الاستخدام والتزام الإيجار الناشئين في معاملة واحدة.",
        "Assuming the initial-recognition exception bars deferred tax on a right-of-use asset and lease liability arising in one transaction.",
      ),
      b(
        "الاعتراف بأصل عن خسائر ضريبية لمجرد وجودها دون خطة أرباح خاضعة للضريبة تدعمه.",
        "Recognising a tax-loss asset merely because losses exist without supportable future taxable profit.",
      ),
    ],
    [
      b(
        "افصل الضريبة الجارية والمؤجلة ومكونات مصروف الضريبة وتسوية المعدل الفعلي.",
        "Separate current and deferred tax, components of tax expense and the effective-rate reconciliation.",
      ),
      b(
        "اعرض حركة الأصول والالتزامات الضريبية المؤجلة بحسب أنواع الفروق والخسائر غير المستخدمة.",
        "Present deferred-tax asset and liability movements by temporary-difference type and unused loss.",
      ),
      b(
        "اشرح أدلة الاعتراف بأصول ضريبية مؤجلة جوهرية ومبالغ الخسائر غير المعترف بها وأثر قواعد الركيزة الثانية إن انطبق.",
        "Explain evidence for material deferred-tax assets, unrecognised losses and Pillar Two effects when relevant.",
      ),
    ],
  ),
  "IAS 16": notes(
    [
      b(
        "تتضمن تكلفة الأصل سعره والتكاليف المباشرة اللازمة لإتاحته للاستخدام والتزام الإزالة أو إعادة الموقع عند نشوئه؛ يبدأ الإهلاك حين يصبح جاهزًا للاستخدام.",
        "PPE cost includes price, directly attributable costs to ready it for use and any initial dismantling or site-restoration obligation; depreciation begins when available for use.",
      ),
      b(
        "افصل مكونات الأصل المهمة ذات الأعمار المختلفة في الإهلاك، وراجع العمر والقيمة المتبقية والطريقة دوريًا؛ طبّق نموذج التكلفة أو إعادة التقييم على فئة كاملة.",
        "Depreciate significant components with different lives separately and review life, residual value and method regularly; apply cost or revaluation to a whole asset class.",
      ),
    ],
    [
      b(
        "تخفيض تكلفة الأصل بإيرادات بيع منتجات صنعت قبل أن يصبح الأصل جاهزًا للاستخدام بدل إثباتها على نحو مستقل.",
        "Deducting proceeds from items produced before intended use from PPE cost rather than accounting for them separately.",
      ),
      b(
        "الاستمرار في الرسملة بعد أن يصبح الأصل جاهزًا للاستخدام أو عدم فصل مكون جوهري مثل فحص دوري كبير.",
        "Continuing capitalisation after an asset is available for use or failing to separate a material component such as a major inspection.",
      ),
    ],
    [
      b(
        "اعرض أسس القياس والإهلاك والأعمار أو المعدلات والقيمة الدفترية حسب كل فئة.",
        "Disclose measurement bases, depreciation methods, lives or rates and carrying amounts by class.",
      ),
      b(
        "صالح تكلفة ومجمع إهلاك كل فئة من أول الفترة إلى آخرها مع الإضافات والاستبعادات والانخفاض.",
        "Reconcile each class's cost and accumulated depreciation from opening to closing, including additions, disposals and impairment.",
      ),
      b(
        "اذكر الأصول المرهونة والالتزامات التعاقدية وما نتج عن إعادة التقييم إن استُخدم النموذج.",
        "Disclose pledged assets, contractual commitments and revaluation effects if that model is used.",
      ),
    ],
  ),
  "IAS 19": notes(
    [
      b(
        "افصل منافع العاملين قصيرة الأجل وخطط المساهمات المحددة وخطط المنافع المحددة؛ الأخيرة تقاس بالقيمة الحالية للالتزام مطروحًا منها القيمة العادلة لأصول الخطة.",
        "Separate short-term benefits, defined-contribution plans and defined-benefit plans; the latter are measured as the present value of obligations less fair-valued plan assets.",
      ),
      b(
        "قسم تكلفة المنافع المحددة إلى خدمة وصافي فائدة في الربح أو الخسارة وإعادة قياس في الدخل الشامل الآخر، مع مراعاة سقف الأصل عند وجود فائض.",
        "Split defined-benefit cost into service and net interest in profit or loss and remeasurement in OCI, applying the asset ceiling when a surplus exists.",
      ),
    ],
    [
      b(
        "إدخال مكاسب وخسائر إعادة القياس في ربح الفترة أو تجاهل سقف الأصل عندما لا يمكن الاستفادة من فائض الخطة.",
        "Taking remeasurement gains and losses to period profit or ignoring the asset ceiling when a plan surplus is not recoverable.",
      ),
      b(
        "الخلط بين التزام صاحب العمل وفق IAS 19 وتقارير خطة التقاعد نفسها وفق IAS 26.",
        "Confusing the employer's IAS 19 obligation with the retirement plan's own IAS 26 reporting.",
      ),
    ],
    [
      b(
        "صف خصائص الخطط ومخاطرها ومبالغ الالتزام وأصول الخطة وتسوياتهما.",
        "Describe plan characteristics, risks, obligation and asset balances and their reconciliations.",
      ),
      b(
        "افصل تكلفة الخدمة وصافي الفائدة وإعادة القياس والافتراضات الاكتوارية المهمة وحساسيتها.",
        "Separate service cost, net interest and remeasurement, and disclose significant actuarial assumptions and sensitivities.",
      ),
      b(
        "اشرح أثر الخطط على التدفقات النقدية المستقبلية والمساهمات المتوقعة ومدة الالتزام المرجحة.",
        "Explain future cash-flow effects, expected contributions and weighted-average obligation duration.",
      ),
    ],
  ),
  "IAS 20": notes(
    [
      b(
        "لا يعترف بالمنحة الحكومية إلا عند وجود تأكيد معقول من الالتزام بشروطها واستلامها؛ وتُربط بمصروفات الفترات التي تعوضها.",
        "Recognise a government grant only when compliance and receipt are reasonably assured, matching it to the periods of the related costs.",
      ),
      b(
        "اعرض المنحة المرتبطة بأصل كدخل مؤجل أو بخصم من قيمة الأصل وفق سياسة متسقة؛ وتُعالج المنحة المرتبطة بالدخل بما يوضح المصروف الذي تعوضه.",
        "Present an asset-related grant as deferred income or a deduction from the asset under a consistent policy; present an income-related grant to explain the costs it compensates.",
      ),
    ],
    [
      b(
        "إثبات المنحة دخلًا عند الموافقة المبدئية دون تقييم شروط الأداء وإمكان الاسترداد.",
        "Recognising grant income on preliminary approval without assessing performance conditions and repayment risk.",
      ),
      b(
        "اعتبار قرض حكومي دون سعر سوقي منحة بالكامل من دون فصل منفعة السعر عن الالتزام المالي.",
        "Treating a below-market government loan entirely as a grant without separating the rate benefit from the financial liability.",
      ),
    ],
    [
      b(
        "اذكر السياسة وطريقة عرض المنح المعترف بها وطبيعة المساعدات الحكومية الأخرى.",
        "State the accounting policy, presentation method and nature of recognised grants and other government assistance.",
      ),
      b(
        "بيّن المبالغ المعترف بها في القوائم والفترات التي ستوزع عليها المنح المرتبطة بأصول.",
        "Show amounts recognised in the statements and periods over which asset-related grants will be released.",
      ),
      b(
        "افصح عن الشروط غير المستوفاة والالتزامات أو الاحتمالات المرتبطة بالمساعدات.",
        "Disclose unmet conditions and contingencies connected to assistance.",
      ),
    ],
  ),
  "IAS 21": notes(
    [
      b(
        "حدّد العملة الوظيفية بحسب البيئة الاقتصادية الأساسية، ثم سجل المعاملة الأجنبية بسعر تاريخها وأعد ترجمة البنود النقدية بسعر الإقفال.",
        "Determine functional currency from the primary economic environment, record foreign-currency transactions at transaction-date rates and retranslate monetary items at closing rates.",
      ),
      b(
        "عند ترجمة عملية أجنبية إلى عملة العرض، تُترجم الأصول والالتزامات بالإقفال، والدخل والمصروفات بأسعار معاملاتها، وتُجمع فروق الترجمة في الدخل الشامل الآخر حتى التصرف.",
        "For a foreign operation translated into presentation currency, use closing rates for assets and liabilities and transaction rates for income and expenses, accumulating translation differences in OCI until disposal.",
      ),
    ],
    [
      b(
        "إعادة ترجمة أصل غير نقدي مسجل بالتكلفة التاريخية بسعر الإقفال كما لو كان بندًا نقديًا.",
        "Retranslating a historical-cost non-monetary asset at the closing rate as though it were monetary.",
      ),
      b(
        "افتراض توافر سعر صرف لكل عملة من دون اختبار قابلية التبادل أو تجاهل أثر التصرف الجزئي في عملية أجنبية.",
        "Assuming every currency has an available exchange rate without assessing exchangeability, or overlooking partial-disposal effects.",
      ),
    ],
    [
      b(
        "افصح عن فروق الصرف المعترف بها في الربح أو الخسارة والدخل الشامل الآخر وحركة احتياطي الترجمة.",
        "Disclose exchange differences in profit or loss and OCI and movements in the translation reserve.",
      ),
      b(
        "اذكر عملة العرض عندما تختلف عن الوظيفية وأسباب استخدام عملة عرض مختلفة أو تغيير العملة الوظيفية.",
        "State presentation currency when it differs from functional currency and reasons for a different presentation or a functional-currency change.",
      ),
      b(
        "عند تعذر تبادل العملة، صف العملة والقيود وطريقة تقدير سعر الصرف وأثرها.",
        "When a currency is not exchangeable, describe the currency, restrictions, estimated rate method and effects.",
      ),
    ],
  ),
  "IAS 23": notes(
    [
      b(
        "تُرسمل تكاليف الاقتراض المرتبطة مباشرة باقتناء أو إنشاء أو إنتاج أصل يحتاج وقتًا جوهريًا ليصبح جاهزًا لاستخدامه أو بيعه؛ غير ذلك مصروف.",
        "Capitalise borrowing costs directly attributable to an asset taking a substantial time to get ready for use or sale; expense other borrowing costs.",
      ),
      b(
        "ابدأ الرسملة عند اجتماع الإنفاق وتكلفة الاقتراض وأنشطة إعداد الأصل، وأوقفها عند اكتمال الأنشطة اللازمة جوهريًا، مع تعليقها خلال انقطاع ممتد غير ضروري.",
        "Start capitalisation when expenditure, borrowing costs and preparation activities coexist; stop when substantially all necessary activities finish and suspend during an extended unnecessary interruption.",
      ),
    ],
    [
      b(
        "رسملة فائدة كل قروض المنشأة دون ربطها بأصل مؤهل أو تجاوز الإنفاق الفعلي عليه.",
        "Capitalising interest on all borrowings without linking it to a qualifying asset or its actual expenditure.",
      ),
      b(
        "استمرار الرسملة بعد جاهزية الأصل أو تعليقها أثناء عمل فني وإداري ضروري بطبيعته.",
        "Continuing capitalisation after readiness or suspending it during inherently necessary technical or administrative work.",
      ),
    ],
    [
      b(
        "اذكر مبلغ تكاليف الاقتراض المرسملة خلال الفترة.",
        "Disclose the amount of borrowing costs capitalised during the period.",
      ),
      b(
        "اذكر معدل الرسملة المستخدم لتحديد التكاليف المؤهلة من الاقتراض العام.",
        "State the capitalisation rate used for eligible costs from general borrowings.",
      ),
      b(
        "اشرح سياسة تحديد الأصل المؤهل وبدء الرسملة وتعليقها وإيقافها حين يكون الحكم جوهريًا.",
        "Explain the policy for qualifying assets and the start, suspension and cessation of capitalisation where judgement is material.",
      ),
    ],
  ),
  "IAS 24": notes(
    [
      b(
        "حدد الطرف ذا العلاقة من السيطرة أو السيطرة المشتركة أو التأثير المهم أو عضوية الإدارة الرئيسية، لا من الاسم القانوني أو وجود معاملة فقط.",
        "Identify a related party from control, joint control, significant influence or key management, not merely legal names or the existence of a transaction.",
      ),
      b(
        "تُفصح علاقة الأم والتابعة حتى دون معاملات؛ وعند وجود معاملات افصل طبيعتها وأرصدة الالتزامات وشروطها حسب فئة الطرف.",
        "Disclose a parent-subsidiary relationship even without transactions; where transactions exist, explain their nature, balances and terms by party category.",
      ),
    ],
    [
      b(
        "استبعاد راتب وتعويضات الإدارة الرئيسية أو خدمات شركة تقدم الإدارة من خريطة الأطراف ذات العلاقة.",
        "Leaving key-management compensation or services provided by a management entity out of the related-party map.",
      ),
      b(
        "وصف معاملة بأنها بشروط السوق دون دليل يدعم تكافؤ شروطها مع أطراف مستقلة.",
        "Calling a transaction arm's length without evidence supporting equivalence to independent-party terms.",
      ),
    ],
    [
      b(
        "اذكر الشركة الأم والطرف المسيطر النهائي وعلاقة السيطرة حتى إن لم توجد معاملات.",
        "Identify the parent and ultimate controlling party and disclose control relationships even without transactions.",
      ),
      b(
        "افصل المعاملات والأرصدة والالتزامات وشروطها حسب فئات الأطراف ذات العلاقة.",
        "Break down transactions, outstanding balances, commitments and terms by related-party category.",
      ),
      b(
        "اعرض تعويضات الإدارة الرئيسية حسب الفئات المطلوبة والمبالغ المتعلقة بجهة تقدم خدمات الإدارة إن وجدت.",
        "Show key-management compensation by required category and amounts involving a management-services entity when present.",
      ),
    ],
  ),
  "IAS 26": notes(
    [
      b(
        "يطبق هذا المعيار على التقرير المالي الذي تعده خطة منافع التقاعد نفسها للمشاركين، لا على التزام صاحب العمل الذي يعالجه IAS 19.",
        "This Standard applies to the retirement benefit plan's own report for participants, not the employer obligation addressed by IAS 19.",
      ),
      b(
        "خطة المساهمات المحددة تركز على صافي الأصول المتاحة للمنافع، وخطة المنافع المحددة تعرض أيضًا القيمة الاكتوارية الحالية للمنافع الموعودة أو تحيل إلى تقرير اكتواري مصاحب.",
        "A defined-contribution plan focuses on net assets available for benefits; a defined-benefit plan also reports the actuarial present value of promised benefits or refers to an accompanying actuarial report.",
      ),
    ],
    [
      b(
        "تسجيل رصيد التزام صاحب العمل في تقرير الخطة بدل قياس أصول الخطة والتزاماتها الخاصة.",
        "Putting the employer's benefit obligation in the plan report instead of measuring the plan's own assets and liabilities.",
      ),
      b(
        "إهمال تفسير الفرق بين صافي الأصول المتاحة للمنافع والقيمة الاكتوارية للمنافع الموعودة.",
        "Leaving the gap between available net assets and actuarial present value of promised benefits unexplained.",
      ),
    ],
    [
      b(
        "اعرض صافي الأصول المتاحة للمنافع والحركة فيه ومساهمات المشاركين أو صاحب العمل والمدفوعات.",
        "Show net assets available for benefits and their movement, contributions and benefit payments.",
      ),
      b(
        "لخطة المنافع المحددة، قدّم القيمة الاكتوارية للمنافع الموعودة وافتراضاتها المهمة أو التقرير الاكتواري المشار إليه.",
        "For a defined-benefit plan, provide the actuarial present value of promised benefits and material assumptions or the referenced actuarial report.",
      ),
      b(
        "اشرح سياسة تقييم الاستثمارات ووصف الخطة وتغير شروطها الجوهرية.",
        "Explain investment valuation policy, plan description and material changes in plan terms.",
      ),
    ],
  ),
  "IAS 27": notes(
    [
      b(
        "القوائم المنفصلة تعرض استثمارات الأم أو المستثمر في التابعة والمشروعات المشتركة والزميلة وفق خيار التكلفة أو IFRS 9 أو طريقة حقوق الملكية، بما يتفق مع شروط المعيار.",
        "Separate statements account for investments in subsidiaries, joint ventures and associates using the permitted cost, IFRS 9 or equity-method basis, subject to the Standard's conditions.",
      ),
      b(
        "يختار الأساس لكل فئة من الاستثمارات على نحو متسق، مع مراعاة معالجة منشأة الاستثمار ومتطلبات الإعفاء من التوحيد.",
        "Select a basis consistently for each investment category, considering investment-entity treatment and the consolidation exemption.",
      ),
    ],
    [
      b(
        "تسمية قوائم منشأة مستقلة بلا استثمارات في تابعة أو زميلة أو مشروع مشترك «قوائم منفصلة» بالمفهوم الفني للمعيار.",
        "Calling the statements of an entity with no subsidiary, associate or joint venture 'separate financial statements' in the Standard's technical sense.",
      ),
      b(
        "اعتبار خيار القيمة العادلة متاحًا بلا شروط لكل استثمار أو تجاهل مؤشرات انخفاض قيمة الاستثمار في القوائم المنفصلة.",
        "Assuming unrestricted fair-value choice for every investment or ignoring impairment indicators in separate statements.",
      ),
    ],
    [
      b(
        "اذكر أن القوائم منفصلة والأسس المطبقة على كل فئة من الاستثمارات.",
        "State that the statements are separate and identify the basis used for each investment category.",
      ),
      b(
        "حدد الاستثمارات المهمة ونسب الملكية وبلد التسجيل أو الإقامة بحسب متطلبات المعيار.",
        "Identify significant investments, ownership percentages and country of incorporation or residence as required.",
      ),
      b(
        "اذكر القوائم الموحدة ذات الصلة ووسيلة الحصول عليها أو سبب إعداد قوائم منفصلة حين يتطلب الإفصاح.",
        "Identify related consolidated statements and where to obtain them, or explain why separate statements are prepared when required.",
      ),
    ],
  ),
  "IAS 28": notes(
    [
      b(
        "يفترض التأثير المهم عادة عند امتلاك 20% أو أكثر من حقوق التصويت، ويمكن دحض الافتراض في الاتجاهين بالأدلة؛ يُطبّق أسلوب حقوق الملكية حيث يلزم.",
        "Significant influence is generally presumed at 20% or more voting power, but evidence may rebut the presumption in either direction; apply the equity method where required.",
      ),
      b(
        "يبدأ الاستثمار بالتكلفة ثم يعدل بحصة النتائج والدخل الشامل الآخر وتخفض توزيعات الأرباح قيمته؛ تُختبر الخسائر والتدهور وفق ترتيب IAS 28 وIFRS 9.",
        "Start at cost, then adjust the investment for shares of profit or loss and OCI while distributions reduce its carrying amount; assess losses and impairment in the IAS 28 and IFRS 9 sequence.",
      ),
    ],
    [
      b(
        "تطبيق تعديلات بيع الأصول إلى زميلة المؤجلة منذ 2014 كما لو كانت سارية لمجرد ظهور نصها في الطبعة المنشورة.",
        "Applying the indefinitely deferred 2014 sale-or-contribution amendments merely because their text appears in a published edition.",
      ),
      b(
        "إيقاف الاعتراف بالخسائر عند وصول حصة الأسهم العادية للصفر دون فحص المصالح طويلة الأجل التي تشكل جزءًا من صافي الاستثمار.",
        "Stopping loss recognition when ordinary shares reach nil without assessing long-term interests forming part of the net investment.",
      ),
    ],
    [
      b(
        "اشرح أسباب وجود أو عدم وجود تأثير مهم عندما تخالف النتيجة افتراض نسبة التصويت.",
        "Explain significant-influence judgements when the conclusion differs from the voting-percentage presumption.",
      ),
      b(
        "قدّم معلومات مالية ملخصة للزميلة أو المشروع المشترك الجوهري وتسوية القيمة الدفترية.",
        "Provide summarised financial information for material associates or joint ventures and reconcile carrying amounts.",
      ),
      b(
        "اذكر الخسائر غير المعترف بها والقيود على تحويل الأموال وتاريخ قوائم المستثمر فيه إذا اختلف.",
        "Disclose unrecognised losses, restrictions on fund transfers and a different investee reporting date where relevant.",
      ),
    ],
  ),
  "IAS 29": notes(
    [
      b(
        "حكم التضخم المفرط يعتمد على مجموعة مؤشرات كمية ونوعية؛ بلوغ التضخم التراكمي نحو 100% في ثلاث سنوات مؤشر مهم لا حد آلي.",
        "Hyperinflation is judged from several quantitative and qualitative indicators; roughly 100% cumulative inflation over three years is important but not an automatic threshold.",
      ),
      b(
        "أعد التعبير عن البنود غير النقدية والدخل والمصروف والمقارنات بوحدة القياس الجارية في نهاية الفترة؛ البنود النقدية لا يعاد تعبيرها عند الإقفال، ويعترف بمكسب أو خسارة المركز النقدي في الربح أو الخسارة.",
        "Restate non-monetary items, income, expenses and comparatives in end-period measuring units; closing monetary items are not restated, and the monetary-position gain or loss goes to profit or loss.",
      ),
    ],
    [
      b(
        "التعامل مع قائمة دول منشورة أو نسبة 100% كحكم IFRS نهائي بدل تقييم ظروف عملة المنشأة في تاريخ التقرير.",
        "Treating a published country list or 100% figure as an IFRS conclusion instead of assessing the entity's currency at the reporting date.",
      ),
      b(
        "إعادة تعبير النقد والأرصدة النقدية عند الإقفال أو إبقاء المقارنات بالقيم الاسمية القديمة.",
        "Restating cash and other closing monetary balances or leaving comparatives in old nominal amounts.",
      ),
    ],
    [
      b(
        "أوضح أن القوائم والمقارنات أعيد تعبيرها بوحدة القياس السارية بنهاية الفترة.",
        "State that statements and comparatives were restated into end-period measuring units.",
      ),
      b(
        "اذكر ما إذا كان الأساس تكلفة تاريخية أو حالية، واسم مؤشر الأسعار ومستواه وحركته في الفترة الحالية والسابقة.",
        "State whether the basis is historical or current cost and identify the price index, its level and movements in current and previous periods.",
      ),
      b(
        "أظهر مكسب أو خسارة صافي المركز النقدي في الربح أو الخسارة مع تفسير منهج الاحتساب.",
        "Show the net monetary-position gain or loss in profit or loss and explain the calculation approach.",
      ),
    ],
  ),
  "IAS 32": notes(
    [
      b(
        "صنّف الأداة من منظور المصدر بحسب جوهر الالتزام التعاقدي بتسليم نقد أو أصل مالي؛ اسم «سهم» أو «دين» لا يحسم التصنيف.",
        "Classify an instrument from the issuer's perspective by the substance of any contractual duty to deliver cash or another financial asset; a 'share' or 'debt' label is not decisive.",
      ),
      b(
        "افصل الأداة المركبة إلى التزام بالقيمة الحالية وحقوق ملكية متبقية، ولا تُقاصّ الأصول والالتزامات المالية إلا عند وجود حق قانوني قابل للتنفيذ ونية للتسوية الصافية أو المتزامنة.",
        "Split a compound instrument into a present-valued liability and residual equity; offset financial assets and liabilities only with an enforceable legal right and intention to settle net or simultaneously.",
      ),
    ],
    [
      b(
        "اعتبار الأسهم الممتازة القابلة للاسترداد إلزاميًا حقوق ملكية بسبب شكلها القانوني.",
        "Treating mandatorily redeemable preference shares as equity because of legal form.",
      ),
      b(
        "صافي عرض ذمم والتزامات لدى الطرف نفسه بلا حق مقاصة نافذ، أو تطبيق مقترحات FICE غير الصادرة كمتطلبات حالية.",
        "Netting balances with the same counterparty without an enforceable offset right, or applying unissued FICE proposals as current requirements.",
      ),
    ],
    [
      b(
        "اشرح السياسات والأحكام في تصنيف الأدوات المركبة والقابلة للاسترداد وعقود الأسهم الخاصة.",
        "Explain policies and judgements for compound, redeemable and own-equity instruments.",
      ),
      b(
        "بيّن عناصر التزام وحقوق الملكية للأدوات المركبة وأثر التوزيعات أو الفوائد حسب التصنيف.",
        "Show liability and equity components of compound instruments and how dividends or interest follow classification.",
      ),
      b(
        "عند عرض مبالغ بالصافي، وضح حقوق المقاصة والترتيبات ذات الصلة وفق إفصاحات IFRS 7.",
        "When reporting net amounts, explain offset rights and related arrangements under IFRS 7 disclosures.",
      ),
    ],
  ),
  "IAS 33": notes(
    [
      b(
        "ربحية السهم الأساسية تساوي الربح المنسوب لحملة الأسهم العادية مقسومًا على المتوسط المرجح لعدد الأسهم العادية القائمة.",
        "Basic EPS divides profit attributable to ordinary shareholders by the weighted-average ordinary shares outstanding.",
      ),
      b(
        "في الربحية المخفضة عدّل البسط والمقام للأدوات المحتملة المخفِّضة فقط، واختبر كل إصدار بترتيب يحقق أكبر تخفيض للربحية.",
        "For diluted EPS, adjust numerator and denominator only for dilutive potential shares, testing instruments in the order producing greatest dilution.",
      ),
    ],
    [
      b(
        "إدخال خيارات أو سندات قابلة للتحويل مضادة للتخفيف ضمن حساب الربحية المخفضة.",
        "Including anti-dilutive options or convertibles in diluted EPS.",
      ),
      b(
        "استخدام عدد الأسهم في نهاية السنة بدل المتوسط المرجح أو نسيان تعديل المقارنات لتجزئة الأسهم.",
        "Using year-end rather than weighted-average shares, or failing to restate comparatives for a share split.",
      ),
    ],
    [
      b(
        "اعرض الربحية الأساسية والمخفضة للربح أو الخسارة من العمليات المستمرة وللربح أو الخسارة ككل حيث يلزم.",
        "Present basic and diluted EPS for continuing operations and total profit or loss where required.",
      ),
      b(
        "صالح بسط ومقام الحسابين وفسر أدوات الأسهم المحتملة المؤثرة.",
        "Reconcile the numerators and denominators of both calculations and explain affecting potential shares.",
      ),
      b(
        "اذكر الأدوات المضادة للتخفيف المستبعدة التي قد تخفض الربحية مستقبلًا والمعاملات اللاحقة المؤثرة على عدد الأسهم.",
        "Disclose excluded anti-dilutive instruments that may dilute EPS later and subsequent transactions affecting share counts.",
      ),
    ],
  ),
  "IAS 34": notes(
    [
      b(
        "التقرير المرحلي المكثف يحدث آخر قوائم سنوية ويركز على الأحداث والتغيرات المهمة منذ ذلك التاريخ، مع الحد الأدنى من القوائم والمقارنات المحددة.",
        "Condensed interim reporting updates the last annual statements, focusing on significant events and changes since then, with specified minimum statements and comparatives.",
      ),
      b(
        "طبّق سياسات الاعتراف والقياس السنوية ذاتها على الفترة المرحلية، وقدّر الأهمية النسبية في ضوء بيانات الفترة المرحلية نفسها.",
        "Use the same annual recognition and measurement policies in the interim period, assessing materiality against interim data itself.",
      ),
    ],
    [
      b(
        "تأجيل تكلفة تخص فترة مرحلية إلى الربع التالي لمجرد تنعيم الأرباح دون أساس تسمح به القوائم السنوية.",
        "Deferring an interim cost to the next quarter merely to smooth results without a basis permitted in annual reporting.",
      ),
      b(
        "تكرار الإفصاحات السنوية فقط مع إغفال الأحداث الجوهرية والتغيرات في التقديرات منذ نهاية السنة.",
        "Repeating annual disclosures while missing significant events and estimate changes since year end.",
      ),
    ],
    [
      b(
        "تحقق من وجود القوائم المرحلية المكثفة المطلوبة وفترات المقارنة الصحيحة لكل قائمة.",
        "Check that required condensed interim statements and the correct comparative periods are presented.",
      ),
      b(
        "اشرح الأحداث والمعاملات المهمة والتغيرات في التقديرات والقطاعات منذ آخر تقرير سنوي.",
        "Explain significant events, transactions, estimate changes and segment information since the last annual report.",
      ),
      b(
        "اذكر تغير السياسات أو الموسمية أو الأحداث اللاحقة المهمة وآثارها حيث تنطبق.",
        "Disclose policy changes, seasonality or material subsequent events and their effects where applicable.",
      ),
    ],
  ),
  "IAS 36": notes(
    [
      b(
        "اختبر الانخفاض عند وجود مؤشر، واختبر الشهرة والأصول غير الملموسة غير المحددة العمر أو غير الجاهزة للاستعمال سنويًا؛ القيمة القابلة للاسترداد هي الأعلى من قيمة الاستخدام والقيمة العادلة ناقص تكاليف التصرف.",
        "Test on an indicator, and annually for goodwill and indefinite-life or not-yet-available intangibles; recoverable amount is the higher of value in use and fair value less disposal costs.",
      ),
      b(
        "حمّل خسارة وحدة توليد النقد على الشهرة أولًا ثم على الأصول الأخرى بنسب مناسبة مع مراعاة الحدود الدنيا، ولا تعكس خسارة الشهرة لاحقًا.",
        "Allocate a CGU loss first to goodwill and then to other assets proportionately subject to individual floors; never reverse goodwill impairment.",
      ),
    ],
    [
      b(
        "اختبار الشهرة منفردة بلا وحدة أو مجموعة وحدات تولد التدفقات التي تستفيد من الاستحواذ.",
        "Testing goodwill in isolation rather than in the cash-generating unit or group benefiting from the acquisition.",
      ),
      b(
        "عكس خسارة انخفاض الشهرة أو استخدام توقعات تدفقات نقدية لا تتوافق مع الأصل في حالته الحالية.",
        "Reversing goodwill impairment or using cash-flow forecasts inconsistent with the asset in its current condition.",
      ),
    ],
    [
      b(
        "اذكر خسائر الانخفاض والعكس حسب فئة الأصول والقطاع وبند الربح أو الخسارة ذي الصلة.",
        "Disclose impairment losses and reversals by asset class and segment and the related profit-or-loss line.",
      ),
      b(
        "للوحدة الجوهرية التي تحمل شهرة، صف قيمتها الدفترية وأساس القيمة القابلة للاسترداد والافتراضات الحساسة.",
        "For a material goodwill-bearing CGU, describe its carrying amount, recoverable-amount basis and sensitive assumptions.",
      ),
      b(
        "اشرح معدل الخصم وفترة التوقعات ومعدل النمو وهامش الحساسية عند اعتماد قيمة الاستخدام.",
        "Explain discount rate, forecast period, growth rate and sensitivity headroom when using value in use.",
      ),
    ],
  ),
  "IAS 37": notes(
    [
      b(
        "يثبت المخصص عند وجود التزام حالي قانوني أو ضمني بسبب حدث سابق مع رجحان خروج موارد وإمكان تقدير المبلغ بموثوقية.",
        "Recognise a provision for a present legal or constructive obligation from a past event when an outflow is probable and reliably estimable.",
      ),
      b(
        "قِس المخصص بأفضل تقدير لتسوية الالتزام، وخصمه عندما يكون أثر القيمة الزمنية جوهريًا؛ الإفصاح عن الالتزام المحتمل يختلف عن الاعتراف بالمخصص.",
        "Measure a provision at the best estimate of settlement, discounting if time value is material; contingent-liability disclosure is distinct from provision recognition.",
      ),
    ],
    [
      b(
        "إنشاء مخصص لخسائر تشغيل مستقبلية بلا التزام حالي أو الإعلان عن إعادة هيكلة دون خطة مفصلة وتواصل يولد توقعًا مشروعًا.",
        "Providing for future operating losses without a current obligation, or for restructuring without a detailed plan and communication creating valid expectations.",
      ),
      b(
        "احتساب عقد مرهق قبل اختبار انخفاض الأصول المستخدمة للوفاء به أو تجاهل تكاليف الوفاء المباشرة.",
        "Measuring an onerous-contract provision before impairing assets used to fulfil it, or ignoring directly related fulfilment costs.",
      ),
    ],
    [
      b(
        "قدّم حركة كل فئة مخصص: رصيد البداية والإضافات والاستخدام والعكس وأثر الخصم ورصيد النهاية.",
        "Reconcile each provision class from opening to closing through additions, use, reversals and discount unwinding.",
      ),
      b(
        "صف طبيعة الالتزام وتوقيت الخروج المتوقع ومصادر عدم التأكد والافتراضات الجوهرية.",
        "Describe the obligation, expected outflow timing, uncertainty and material assumptions.",
      ),
      b(
        "اشرح الالتزامات المحتملة والأصول المحتملة ذات الصلة، بما في ذلك تقدير الأثر المالي عندما يكون عمليًا.",
        "Explain relevant contingent liabilities and assets, including financial-effect estimates where practicable.",
      ),
    ],
  ),
  "IAS 38": notes(
    [
      b(
        "الأصل غير الملموس يجب أن يكون قابلًا للتحديد وتحت سيطرة المنشأة وتتحقق منه منافع اقتصادية؛ تُحمّل مرحلة البحث مصروفًا وتُرسمل مرحلة التطوير فقط عند استيفاء شروطها المحددة.",
        "An intangible asset must be identifiable, controlled and yield economic benefits; research is expensed while development is capitalised only after its specified criteria are met.",
      ),
      b(
        "عمر الأصل المحدد يستهلك عندما يصبح جاهزًا للاستخدام، أما العمر غير المحدد فلا يستهلك بل يختبر سنويًا للانخفاض ويعاد تقييم العمر.",
        "A finite-life asset is amortised when available for use; an indefinite-life asset is not amortised but is tested annually for impairment and its life reassessed.",
      ),
    ],
    [
      b(
        "رسملة تدريب العاملين أو علامات تجارية وسمعة مولدة داخليًا باعتبارها أصولًا غير ملموسة.",
        "Capitalising staff training or internally generated brands and goodwill as intangible assets.",
      ),
      b(
        "الرسملة من بداية مشروع التطوير قبل إثبات الجدوى والنية والقدرة والموارد وقياس الإنفاق.",
        "Capitalising a development project from inception before demonstrating feasibility, intent, capability, resources and reliable cost measurement.",
      ),
    ],
    [
      b(
        "افصل الأصول المولدة داخليًا عن المقتناة وحدد الأعمار وطرق الإطفاء لكل فئة.",
        "Distinguish internally generated from acquired assets and state useful lives and amortisation methods by class.",
      ),
      b(
        "صالح القيمة الدفترية من أول الفترة إلى آخرها مع الإضافات والإطفاء والانخفاض والاستبعاد.",
        "Reconcile opening and closing carrying amounts through additions, amortisation, impairment and disposals.",
      ),
      b(
        "اذكر الإنفاق البحثي المعترف به مصروفًا والأصول الجوهرية ذات الأعمار غير المحددة وأسباب تصنيفها.",
        "Disclose research expenditure expensed and material indefinite-life assets with reasons for that assessment.",
      ),
    ],
  ),
  "IAS 40": notes(
    [
      b(
        "العقار الاستثماري يحتفظ به للإيجار أو نمو رأس المال، لا للاستخدام الذاتي أو البيع المعتاد؛ صنّفه بحسب الاستخدام الحقيقي والحقوق في العقار.",
        "Investment property is held for rentals or capital appreciation, not owner use or ordinary-course sale; classify by actual use and property rights.",
      ),
      b(
        "اختر نموذج القيمة العادلة مع تغيراته في الربح أو الخسارة أو نموذج التكلفة، مع تطبيق السياسة على كامل فئة العقارات الاستثمارية وفق الشروط.",
        "Choose the fair-value model with changes in profit or loss or the cost model, applying the policy across investment property as required.",
      ),
    ],
    [
      b(
        "نقل العقار إلى الاستثمار بمجرد قرار الإدارة رغم عدم تحقق تغير في الاستخدام تدعمه أدلة.",
        "Transferring property to investment classification on management intent alone without evidence of a change in use.",
      ),
      b(
        "تسجيل تغير القيمة العادلة في الدخل الشامل الآخر أو إغفال الإفصاح عنها عند تطبيق نموذج التكلفة.",
        "Recording fair-value changes in OCI or failing to disclose fair value when using the cost model.",
      ),
    ],
    [
      b(
        "اذكر نموذج القياس المختار ومعايير التمييز بين العقار الاستثماري والمشغول من المالك.",
        "State the chosen measurement model and criteria distinguishing investment from owner-occupied property.",
      ),
      b(
        "أظهر إيراد الإيجار والمصروفات التشغيلية المباشرة المرتبطة بالعقار.",
        "Show rental income and directly related operating expenses.",
      ),
      b(
        "صالح القيمة الدفترية وحركة التحويلات والمكاسب والخسائر، وقدّم القيمة العادلة حتى عند استخدام نموذج التكلفة.",
        "Reconcile carrying amounts, transfers and gains or losses, and disclose fair value even under the cost model.",
      ),
    ],
  ),
  "IAS 41": notes(
    [
      b(
        "الأصل البيولوجي يُقاس عادة بالقيمة العادلة ناقص تكاليف البيع عند الاعتراف وفي كل تاريخ تقرير، والمنتج الزراعي يقاس بهذا الأساس عند الحصاد ثم يدخل نطاق IAS 2.",
        "A biological asset is generally measured at fair value less costs to sell on recognition and at each reporting date; agricultural produce uses that basis at harvest before IAS 2 applies.",
      ),
      b(
        "النباتات المثمرة المنتجة تُعالج كأصول ثابتة وفق IAS 16، بينما المنتج النامي عليها يبقى ضمن IAS 41.",
        "Bearer plants are accounted for as PPE under IAS 16, while produce growing on them remains within IAS 41.",
      ),
    ],
    [
      b(
        "إبقاء محصول حُصد ضمن IAS 41 بدل نقله إلى المخزون بقيمة الحصاد.",
        "Leaving harvested produce under IAS 41 instead of transferring it to inventory at harvest-date value.",
      ),
      b(
        "معاملة الأرض الزراعية أو النبات المثمر كأصل بيولوجي يُعاد قياسه وفق IAS 41.",
        "Treating agricultural land or a bearer plant as a biological asset remeasured under IAS 41.",
      ),
    ],
    [
      b(
        "صف مجموعات الأصول البيولوجية وطبيعة النشاط الزراعي والقياسات غير المالية للكميات حيث تلائم.",
        "Describe biological-asset groups, farming activity and relevant non-financial quantity measures.",
      ),
      b(
        "أظهر المكاسب والخسائر من القيمة العادلة ناقص تكاليف البيع وتسوية القيمة الدفترية لكل مجموعة.",
        "Show fair-value-less-costs-to-sell gains and losses and reconcile each group's carrying amount.",
      ),
      b(
        "اشرح طرق التقييم وافتراضاتها والأصول المرهونة والقيود والمنح المرتبطة بالأصول البيولوجية.",
        "Explain valuation methods and assumptions, pledged assets, restrictions and grants related to biological assets.",
      ),
    ],
  ),
};

export function getStandardReferenceNotes(code: string): StandardReferenceNotes | undefined {
  return IFRS_STANDARD_REFERENCE_NOTES[code];
}
