import type { StandardStudyExpansion, StudyText } from "./ifrs-standard-study-expansions";

const text = (ar: string, en: string): StudyText => ({ ar, en });

/**
 * Additional applied material reviewed against the cited IFRS requirements.
 * Source-page and acquisition records stay in the private editorial audit;
 * learner-facing references identify the applicable Standard only.
 */
export const IFRS_BOOK2_STUDY_EXPANSIONS: Partial<Record<string, StandardStudyExpansion>> = {
  "IFRS 13": {
    sections: [
      {
        title: text("القيمة العادلة للالتزام: أثر الجدارة الائتمانية للمنشأة", "Liability fair value: the entity's own credit risk"),
        explanation: text(
          "القيمة العادلة للالتزام هي سعر تحويله إلى مشارك في السوق في معاملة منتظمة بتاريخ القياس، لا المبلغ الذي تختار المنشأة دفعه لتسويته مبكرًا. يفترض القياس استمرار الالتزام بعد التحويل، ويشمل خطر عدم الوفاء به، ومنه الجدارة الائتمانية للمدين نفسه. لذلك قد تنخفض القيمة العادلة لوعد نقدي ثابت كلما زاد عائد السوق المطلوب لتحمل خطر المُصدر، مع ثبات المبلغ وتاريخ السداد وسائر الافتراضات. استخدم مدخلات المشاركين في السوق الملائمة ولا تُدخل فرق الائتمان مرتين في التدفقات ومعدل الخصم. IFRS 13 يحدد طريقة القياس عندما يطلب أو يجيز معيار آخر القيمة العادلة؛ ولا يحول تلقائيًا كل ذمة دائنة مقاسة بالتكلفة المستهلكة إلى التزام بالقيمة العادلة، ولا يعني انخفاض القيمة العادلة أن الدائن تنازل عن أصل المطالبة الاسمية.",
          "A liability's fair value is the price to transfer it to a market participant in an orderly transaction at the measurement date, not an amount the entity elects to pay for early settlement. The liability is assumed to continue after transfer, and the measure includes non-performance risk, including the debtor's own credit risk. Thus, with the promised cash flow, maturity and other assumptions unchanged, a higher market yield for the issuer's risk can reduce the promise's fair value. Use relevant market-participant inputs and do not double count credit risk in both cash flows and the discount rate. IFRS 13 specifies how to measure fair value when another Standard requires or permits it; it does not automatically convert every amortised-cost payable to fair value, and a lower fair value does not extinguish the creditor's nominal claim.",
        ),
        keyPoints: [
          text("حدد أولًا هل يطلب أو يسمح المعيار المختص بقياس الالتزام بالقيمة العادلة.", "First establish whether the applicable Standard requires or permits fair-value measurement of this liability."),
          text("قارن التزامات متماثلة في التدفق والأجل قبل عزل أثر ائتمان المُصدر.", "Compare liabilities with the same cash flow and term before isolating issuer credit risk."),
          text("ارتفاع معدل الخصم قد يخفض القيمة العادلة؛ لا يعني ذلك سقوط أصل الدين المستحق.", "A higher discount rate can lower fair value without cancelling the contractual principal."),
        ],
        reference: "IFRS 13.9, 34–43, 61–67",
      },
    ],
    workedExamples: [
      {
        title: text("وعدان بسداد 20,000 بعد سبع سنوات", "Two promises to pay 20,000 in seven years"),
        facts: text(
          "تعهدت Black وBlue، كل منهما على حدة، بسداد 20,000 دولار نقدًا إلى Green بعد سبع سنوات. عائد السوق الملائم لوعد Black ذي الجدارة الأعلى 4% سنويًا، وللوعد المماثل من Blue ذي الجدارة الأقل 8%. لأجل عزل خطر ائتمان المُصدر، يفترض تطابق العملة وموعد السداد وسائر شروط العقد ومخاطره، وعدم وجود كوبونات أو تدفقات وسيطة؛ والمعدلان يعكسان مدخلات المشاركين في السوق لهذا القياس.",
          "Black and Blue each independently promise to pay Green $20,000 cash in seven years. The relevant market yield is 4% a year for higher-credit-quality Black and 8% for otherwise comparable lower-credit-quality Blue. To isolate issuer credit risk, assume identical currency, maturity, other contractual terms and risks, with no coupons or interim cash flows; the yields represent market-participant inputs for this measurement.",
        ),
        calculations: [
          text("القيمة الحالية لوعد Black = 20,000 ÷ (1.04)^7 = 15,198.36 دولار.", "Present value of Black's promise = $20,000 ÷ (1.04)^7 = $15,198.36."),
          text("القيمة الحالية لوعد Blue = 20,000 ÷ (1.08)^7 = 11,669.81 دولار؛ الفرق بين القيمتين = 3,528.55 دولار. استُخدمت معاملات خصم كاملة ثم قربت النتيجة إلى السنت، فلا يُستبدل الناتج الدقيق بتقدير ناتج عن تقريب المعاملات.", "Present value of Blue's promise = $20,000 ÷ (1.08)^7 = $11,669.81; the values differ by $3,528.55. Full discount factors were used before rounding to cents, rather than substituting an estimate from prematurely rounded factors."),
        ],
        conclusion: text(
          "إذا كان مطلوبًا قياس هذين الالتزامين بالقيمة العادلة، فإن قيمة وعد Blue الأقل تعكس العائد الأعلى المطلوب لتحمل خطر عدم وفائه، لا إعفاءه من التزامه التعاقدي بدفع 20,000. المثال مقارنة قياس، ولا يقدم وقائع إصدار أو تصنيف تكفي لاشتقاق قيد اعتراف أو ربح إعادة قياس.",
          "Where fair-value measurement is required, Blue's lower measured value reflects the higher yield demanded for its non-performance risk; Blue still contractually owes $20,000. This is a measurement comparison, not a complete issuance or classification fact pattern from which an initial-recognition entry or remeasurement gain can be derived.",
        ),
        journalEntries: [],
        reference: "IFRS 13.9, 34–43, 61–67",
      },
    ],
  },
  "IAS 32": {
    sections: [
      {
        title: text("السند القابل للتحويل: قيّم الدين أولًا ثم خيار الأسهم", "Convertible bond: value the debt before the share option"),
        explanation: text(
          "إذا ألزم السند المصدر بسداد نقد أو كوبونات ومنح حامله خيار تحويل مؤهلًا إلى عدد ثابت من أسهم المصدر مقابل مبلغ ثابت، فهو أداة مركبة: التزام مالي وخيار حقوق ملكية منفصلان. حدد القيمة العادلة للالتزام بما كان سيدفعه السوق لسند مماثل بلا حق تحويل؛ اخصم أصل الدين والكوبونات بسعر دين مماثل، ثم خصص باقي متحصلات الإصدار لحقوق الملكية. سعر السهم الحالي والتوزيعات المتوقعة لا يحلان محل سعر الدين في هذه الطريقة. بعد الإصدار تبقى قيمة الخيار في حقوق الملكية دون إعادة قياس بسبب تغير احتمال التحويل، بينما يقاس الالتزام بالتكلفة المستهلكة وبالفائدة الفعلية. تحقق أولًا من عدم وجود بديل تسوية نقدية أو شرط يجعل عدد الأسهم أو مبلغ المقابل متغيرًا، فقد يغير ذلك تصنيف الخيار.",
          "If the issuer must pay cash principal or coupons and the holder has a qualifying option to exchange a fixed amount for a fixed number of the issuer's shares, the bond contains separately presented debt and equity components. First measure the liability at the value of comparable debt without conversion by discounting principal and coupons at that debt yield; assign the residual proceeds to equity. Current share price and expected dividends do not replace the comparable debt yield in this allocation. Subsequently, the equity option is not remeasured for changes in conversion likelihood, while the liability follows amortised cost and effective interest. First inspect any cash-settlement alternative or variable share or consideration clause, which may change the option's classification.",
        ),
        keyPoints: [
          text("اختبر مبلغًا ثابتًا مقابل عدد ثابت قبل افتراض أن خيار التحويل حقوق ملكية.", "Test fixed consideration for a fixed number of shares before treating the conversion option as equity."),
          text("استخدم معاملات خصم دقيقة؛ المعاملات المدوّرة قد تغير الباقي المخصص للخيار.", "Use sufficiently precise discount factors; rounded factors change the residual allocated to the option."),
          text("مكون حقوق الملكية ثابت بعد الإصدار، أما رصيد الدين فيتغير بالفائدة الفعلية والكوبونات.", "The equity component remains fixed after issue; the debt balance changes with effective interest and coupons."),
        ],
        reference: "IAS 32.16, 22, 28–32, AG30–AG35; IFRS 9.5.4.1",
      },
    ],
    workedExamples: [
      {
        title: text("Rathbone: فصل 2,000 سند قابل للتحويل", "Rathbone: separating 2,000 convertible bonds"),
        facts: text(
          "أصدرت Rathbone في بداية 20X2 عدد 2,000 سند قابل للتحويل، القيمة الاسمية ومتحصل الإصدار لكل منها 1,000 دولار، لمدة ثلاث سنوات. الكوبون السنوي 6% يدفع آخر كل سنة، ويجوز تحويل كل سند إلى 250 سهمًا عاديًا خلال المدة. عائد سند مماثل بلا خيار تحويل 9%. يفترض أن خيار التحويل يفي بشرط المبلغ الثابت مقابل العدد الثابت، ولا توجد بدائل تسوية أخرى أو تكاليف إصدار. سعر السهم الحالي 3 دولارات والتوزيع المتوقع 0.14 دولار للسهم، لكنهما لا يدخلان تقييم جزء الدين.",
          "At the start of 20X2, Rathbone issues 2,000 three-year convertible bonds at face value and proceeds of $1,000 each. The 6% annual coupon is paid in arrears, and each bond can convert to 250 ordinary shares during its term. Comparable debt without conversion yields 9%. Assume the conversion option meets fixed-for-fixed, with no other settlement alternatives or issue costs. Current share price is $3 and expected dividend $0.14 a share, neither of which measures the debt component.",
        ),
        calculations: [
          text("المتحصلات = 2,000 × 1,000 = 2,000,000 دولار، والكوبون السنوي = 2,000,000 × 6% = 120,000. القيمة الحالية لأصل الدين = 2,000,000 ÷ 1.09³ = 1,544,366.96؛ القيمة الحالية للكوبونات = 120,000 × (1/1.09 + 1/1.09² + 1/1.09³) = 303,755.36.", "Proceeds are 2,000 × $1,000 = $2,000,000 and annual coupon is $2,000,000 × 6% = $120,000. Principal present value = $2,000,000 ÷ 1.09³ = $1,544,366.96; coupon present value = $120,000 × (1/1.09 + 1/1.09² + 1/1.09³) = $303,755.36."),
          text("مكون الالتزام = 1,848,122.32 دولار؛ مكون حقوق الملكية المتبقي = 151,877.68. إن استُخدمت معاملات مختصرة إلى 0.772 و2.531، تنتج قيمة التزام تقريبية 1,847,720 وخيار 152,280؛ الفارق 402.32 دولار سببه تقريب المعاملات لا اختلاف المبدأ.", "Liability component = $1,848,122.32; residual equity component = $151,877.68. Truncating discount factors to 0.772 and 2.531 gives an approximate $1,847,720 liability and $152,280 option; the $402.32 difference is discount-factor rounding, not a different accounting principle."),
          text("تكلفة الفائدة الفعلية للسنة الأولى = 1,848,122.32 × 9% = 166,331.01؛ بعد دفع كوبون 120,000 يصبح رصيد الالتزام نحو 1,894,453.33. لا يعاد قياس خيار حقوق الملكية البالغ 151,877.68.", "First-year effective interest is $1,848,122.32 × 9% = $166,331.01; after the $120,000 coupon, the liability is about $1,894,453.33. The $151,877.68 equity option is not remeasured."),
        ],
        conclusion: text("يعرض عند الإصدار التزام 1,848,122.32 وخيار تحويل ضمن حقوق الملكية 151,877.68 باستخدام خصم 9% الدقيق، بشرط ثبات التحويل. لا تستخدم سعر السهم أو توزيعاته لقياس هذا الباقي.", "At issue, present a $1,848,122.32 liability and a $151,877.68 equity conversion option using precise 9% discounting, subject to fixed-for-fixed conversion. Do not use the share price or dividend to measure this residual."),
        journalEntries: [
          { label: text("إصدار السند المركب", "Issue the compound bond"), debit: text("نقدية", "Cash"), credit: text("التزام سند 1,848,122.32 + خيار تحويل ضمن حقوق الملكية 151,877.68", "Bond liability $1,848,122.32 + equity conversion option $151,877.68"), amount: text("2,000,000 دولار", "$2,000,000") },
          { label: text("فائدة السنة الأولى وسداد الكوبون", "Year-one interest and coupon"), debit: text("مصروف تمويل", "Finance cost"), credit: text("نقدية 120,000 + التزام سند 46,331.01", "Cash $120,000 + bond liability $46,331.01"), amount: text("166,331.01 دولار", "$166,331.01") },
        ],
        reference: "IAS 32.28–32, AG30–AG35; IFRS 9.5.4.1",
      },
    ],
  },
  "IFRS 9": {
    sections: [
      {
        title: text("مصفوفة الخسائر المتوقعة: معدل تعثر أم معدل خسارة؟", "ECL provision matrix: default rate or loss rate?"),
        explanation: text(
          "يسمح IFRS 9 باستخدام مصفوفة عملية للذمم التجارية ضمن المنهج المبسط، فتُجمع الأرصدة بحسب خصائص المخاطر وأعمار التأخر وتطبق معدلات خسائر ائتمانية متوقعة على مدى العمر. تُشتق المعدلات من خبرة التحصيل السابقة بعد تعديلها للظروف الراهنة والتوقعات المستقبلية المعقولة، مع مراعاة المبالغ المتوقع استردادها والقيمة الزمنية للنقود عند جوهريتها. لا يكفي ضرب احتمال التعثر وحده في كامل الرصيد إذا كانت هناك تحصيلات بعد التعثر؛ يجب أن يعكس المعدل الخسارة النقدية المتوقعة. عند مقارنة مخصص تاريخين، يسجل فرق الرصيد المطلوب عن الرصيد القائم فقط بعد النظر في الشطب والاستخدام والتحصيل والحركات الأخرى.",
          "IFRS 9 permits a practical provision matrix for trade receivables under the simplified approach. Group balances by shared credit risk and ageing, then apply lifetime expected credit-loss rates. Derive the rates from collection experience adjusted for current conditions and reasonable forward-looking forecasts, considering recoveries and the time value of money where material. Multiplying a probability of default alone by the full balance overstates ECL if post-default recovery is expected: the rate must represent expected cash shortfall. When comparing allowances at two dates, record the difference between required and existing balances only after considering write-offs, utilisation, collections and other movements.",
        ),
        keyPoints: [
          text("المنهج المبسط يعني خسائر العمر من البداية لذمم IFRS 15 بلا عنصر تمويل مهم.", "The simplified approach means lifetime ECL from inception for IFRS 15 receivables without significant financing."),
          text("استخدم معدلات خسارة معايرة، لا احتمالات تعثر مجردة دون معدل عدم الاسترداد.", "Use calibrated loss rates, not bare default probabilities without loss-given-default."),
          text("طابق المخصص الختامي مع القيد بعد تحليل حركات الرصيد الافتتاحي.", "Reconcile the closing allowance to the entry after analysing opening-balance movements."),
        ],
        reference: "IFRS 9.5.5.15–5.5.17, B5.5.35; IFRS 7.35N",
      },
      {
        title: text("تحوط القيمة العادلة للمخزون: افصل أثر الخطر المحوّط", "Inventory fair value hedge: isolate the hedged-risk adjustment"),
        explanation: text(
          "عندما توثق المنشأة منذ البداية تحوطًا مؤهلًا لمخاطر تغير السعر في مخزون قائم، يقاس عقد التحوط المشتق بالقيمة العادلة ويذهب ربحه أو خسارته إلى الربح أو الخسارة. ويعدل رصيد المخزون فقط بمقدار تغير قيمته العادلة المنسوب إلى الخطر المحدد في العلاقة، مع إثبات المقابل في الربح أو الخسارة. لذلك قد يظهر تعديل موجب في قيمة المخزون رغم أن القاعدة المعتادة في IAS 2 هي التكلفة أو صافي القيمة القابلة للتحقق أيهما أقل؛ ذلك التعديل استثناء خاص بمحاسبة التحوط وليس اختيار نموذج قيمة عادلة للمخزون كله. لا يكفي وجود عقد آجل اقتصاديًا: يلزم تعيين وتوثيق عند البدء، وأداة وبند مؤهلان، وعلاقة اقتصادية ونسبة تحوط ملائمة. عند البيع، تدخل القيمة الدفترية المعدلة للمخزون في تكلفة المبيعات، ويُسوّى المشتق منفصلًا.",
          "For a qualifying, documented hedge of price risk in recognised inventory, measure the derivative hedging instrument at fair value and recognise its gain or loss in profit or loss. Adjust the inventory only for the fair value change attributable to the designated risk, also in profit or loss. A positive inventory adjustment can therefore arise even though ordinary IAS 2 measurement is lower of cost and net realisable value: this is a hedge-accounting adjustment, not a general fair-value model for inventory. An economically protective forward alone is insufficient; inception designation and documentation, eligible items, an economic relationship and an appropriate hedge ratio are required. On sale, the adjusted inventory carrying amount becomes cost of sales and the derivative is settled separately.",
        ),
        keyPoints: [
          text("سجل المشتق وتعديل البند المحوّط في مسارين منفصلين ثم احسب صافي عدم الفاعلية في الربح أو الخسارة.", "Record derivative and hedged-item adjustments separately, then identify net ineffectiveness in profit or loss."),
          text("لا ترفع جميع المخزونات للقيمة العادلة لمجرد ارتفاع سعر السوق.", "Do not uplift all inventory to fair value merely because its market price rose."),
          text("أدخل تعديل التحوط المتراكم في تكلفة المبيعات عند بيع المخزون.", "Include the cumulative hedge adjustment in cost of sales when the inventory is sold."),
        ],
        reference: "IFRS 9.6.4.1, 6.5.2(a), 6.5.8; IAS 2.9, 34",
      },
      {
        title: text("تحوط التدفقات النقدية: اختبر الحد الأدنى التراكمي لا حركة الفترة وحدها", "Cash flow hedge: test the cumulative lower-of, not each period in isolation"),
        explanation: text(
          "يجوز اختيار محاسبة تحوط تدفقات نقدية لمخاطر العملة في ارتباط شراء ملزم، إذا وُثقت العلاقة واستوفت شروط IFRS 9. يقاس المشتق بالقيمة العادلة في كل تاريخ، لكن احتياطي تحوط التدفقات النقدية يُضبط على الأقل بالقيمة المطلقة من مكسب الأداة المتراكم منذ البداية أو التغير المتراكم في القيمة الحالية للتدفقات المحوطة منذ البداية. الفرق الباقي من حركة الأداة يثبت عدم فاعلية في الربح أو الخسارة؛ لذلك قد يختلف نصيب الفترة الثانية في الاحتياطي عن التغير المنفرد في تعرض تلك الفترة. إذا أدى الشراء إلى أصل غير مالي، ينقل الرصيد المتراكم من الاحتياطي مباشرةً إلى تكلفة الأصل، لا يُعاد تدويره عبر الربح أو الخسارة. يلزم قياس القيمة الحالية وأثر النقاط الآجلة وفق التعيين الفعلي؛ إذا لم تتوافر بيانات الخصم، فالأرقام المبسطة مشروطة بعدم جوهرية أثره.",
          "A foreign-currency firm commitment may be designated as a cash flow hedge if the relationship is documented and qualifies under IFRS 9. Remeasure the derivative each reporting date, but set the cash flow hedge reserve at the lower absolute amount of the instrument's cumulative gain since inception and the cumulative present-value change of hedged cash flows since inception. The remaining derivative movement is ineffectiveness in profit or loss. Thus a second period's reserve movement need not equal that period's stand-alone exposure change. When the purchase creates a non-financial asset, remove the accumulated reserve directly into its cost rather than recycling it through profit or loss. Present-value effects and forward points depend on the actual designation; simplified figures without discount inputs assume immaterial time value.",
        ),
        keyPoints: [
          text("قارن رصيدين تراكميين في كل تاريخ ثم احسب حركة الاحتياطي، ولا تطبق الحد الأدنى على كل فترة منفصلة.", "Compare cumulative balances at each date, then calculate the reserve movement; do not run the lower-of test separately for each period."),
          text("افصل عدم الفاعلية في الربح أو الخسارة عن الجزء الفعال في الدخل الشامل الآخر.", "Separate profit-or-loss ineffectiveness from the effective portion in OCI."),
          text("عند نشوء أصل غير مالي، عدّل التكلفة الأولية مباشرةً برصيد التحوط المتراكم.", "When a non-financial asset arises, adjust its initial cost directly for the accumulated hedge reserve."),
        ],
        reference: "IFRS 9.6.4.1, 6.5.4, 6.5.11(a)–(d), B6.5.4–B6.5.5",
      },
    ],
    workedExamples: [
      {
        title: text("Bets: تصحيح احتياطي التحوط على أساس تراكمي", "Bets: correcting the cash flow hedge reserve cumulatively"),
        facts: text(
          "ارتبطت Bets في 1 نوفمبر 20X1 بشراء أصل مقابل 60 مليون يورو في 1 نوفمبر 20X2، وعملتها الوظيفية الدولار. عيّنت العقد الآجل كاملًا لشراء اليورو في موعد السداد بسعر 1 دولار = 1.50 يورو ضمن تحوط تدفقات نقدية مستوفٍ للشروط، دون فصل عنصر الآجل في معالجة مستقلة لتكلفة التحوط. في البداية كان السعر الفوري 1.45 يورو للدولار. في 31 ديسمبر 20X1 صار الفوري 1.20 والآجل للموعد نفسه 1.24. في يوم الشراء صار الفوري والآجل 1.00. للتطبيق العددي فقط، يفترض أن تغير التدفقات المحوطة المحسوب من الأسعار الفورية يمثل قيمتها الحالية وأن أثر خصم التدفقات غير جوهري؛ ولا يهمل المثال فرق السعر الآجل بل ينعكس في عدم الفاعلية. إن لم يصح فرض الخصم يلزم قياس مستقل بالقيم الحالية.",
          "On 1 November 20X1 Bets commits to buy an asset for €60m on 1 November 20X2, with USD functional currency. It designates the entire forward to buy euros on that date at $1 = €1.50 in a qualifying cash flow hedge, without separately accounting for its forward element as a cost of hedging. Inception spot is €1.45 per dollar. At 31 December 20X1, spot is €1.20 and forward for the purchase date €1.24. On purchase date, both spot and forward are €1.00. For the numerical illustration only, assume spot-derived hedged cash-flow changes represent present values and discounting the cash flows has no material additional effect. The forward-point difference is not ignored: it contributes to ineffectiveness. If discounting is material, independently measure present values.",
        ),
        calculations: [
          text("31 ديسمبر: مكسب المشتق = 60,000,000 ÷ 1.24 − 60,000,000 ÷ 1.50 = 8,387,096.77 دولار. تغير تعرض الشراء المتراكم = 60,000,000 ÷ 1.20 − 60,000,000 ÷ 1.45 = 8,620,689.66. الأقل تراكميًا = 8,387,096.77 في احتياطي التحوط؛ لا عدم فاعلية موجبة حينها.", "31 December: derivative gain = €60,000,000 ÷ 1.24 − €60,000,000 ÷ 1.50 = $8,387,096.77. Cumulative purchase-exposure change = €60,000,000 ÷ 1.20 − €60,000,000 ÷ 1.45 = $8,620,689.66. The cumulative lower amount is $8,387,096.77 in the hedge reserve; there is no positive ineffectiveness then."),
          text("1 نوفمبر 20X2: مكسب المشتق المتراكم = 60,000,000 ÷ 1.00 − 60,000,000 ÷ 1.50 = 20,000,000. تغير البند المحوط المتراكم = 60,000,000 ÷ 1.00 − 60,000,000 ÷ 1.45 = 18,620,689.66. إذن الاحتياطي الختامي قبل تحويله للأصل = 18,620,689.66، وحركته منذ ديسمبر = 10,233,592.89 تقريبًا، وعدم الفاعلية التراكمية في الربح أو الخسارة = 1,379,310.34.", "1 November 20X2: cumulative derivative gain = €60,000,000 ÷ 1.00 − €60,000,000 ÷ 1.50 = $20,000,000. Cumulative hedged-item change = €60,000,000 ÷ 1.00 − €60,000,000 ÷ 1.45 = $18,620,689.66. Thus the reserve before basis adjustment is $18,620,689.66, its movement since December is about $10,233,592.89, and cumulative profit-or-loss ineffectiveness is $1,379,310.34."),
          text("يثبت الأصل يوم الشراء بمبلغ 60,000,000 دولار ويُقبض 20,000,000 من تسوية العقد الآجل؛ ثم يخفض رصيد احتياطي التحوط تكلفة الأصل مباشرةً بمبلغ 18,620,689.66، فتصبح تكلفته 41,379,310.34 دولار ضمن هذه الافتراضات. الفارق بين صافي النقد 40,000,000 والتكلفة 41,379,310.34 هو مكسب عدم الفاعلية 1,379,310.34 المثبت في الربح أو الخسارة.", "Recognise the asset on purchase for $60,000,000 and receive $20,000,000 on forward settlement; then directly reduce its cost by the $18,620,689.66 hedge reserve, giving $41,379,310.34 under these assumptions. The $1,379,310.34 gap between $40,000,000 net cash and $41,379,310.34 asset cost is the ineffectiveness gain in profit or loss."),
        ],
        conclusion: text("لا يكفي اختبار مكسب العقد وتغير تكلفة الشراء خلال الفترة الثانية منفصلين؛ IFRS 9 يطلب مقارنة الرقمين المتراكمين منذ البداية. وعليه يكون الاحتياطي 18,620,689.66 لا 18,387,096، وتكلفة الأصل بعد تعديل الأساس 41,379,310.34 في الحساب المبسط. فرق الآجل داخل مكسب العقد ويسهم في عدم الفاعلية؛ وإذا كان أثر خصم التدفقات جوهريًا فهذه الأرقام توضيحية لا قياسًا نهائيًا.", "The second period's instrument and purchase-cost changes cannot be capped in isolation: IFRS 9 compares cumulative amounts from inception. The reserve is therefore $18,620,689.66, not $18,387,096, and the simplified basis-adjusted asset cost is $41,379,310.34. Forward points are included in the instrument gain and contribute to ineffectiveness; if cash-flow discounting is material, these are illustrative rather than final measured amounts."),
        journalEntries: [
          { label: text("31 ديسمبر: مكسب العقد الفعال", "31 December: effective forward gain"), debit: text("أصل عقد آجل", "Forward asset"), credit: text("احتياطي تحوط التدفقات النقدية عبر OCI", "Cash flow hedge reserve through OCI"), amount: text("8,387,096.77 دولار", "$8,387,096.77") },
          { label: text("1 نوفمبر: الحركة الإضافية للعقد", "1 November: further forward movement"), debit: text("أصل عقد آجل", "Forward asset"), credit: text("احتياطي التحوط 10,233,592.89 + ربح عدم فاعلية 1,379,310.34", "Hedge reserve $10,233,592.89 + ineffectiveness gain $1,379,310.34"), amount: text("11,612,903.23 دولار", "$11,612,903.23") },
          { label: text("شراء الأصل بسعر الصرف الفوري", "Acquire asset at spot rate"), debit: text("أصل غير مالي", "Non-financial asset"), credit: text("نقدية", "Cash"), amount: text("60,000,000 دولار", "$60,000,000") },
          { label: text("تسوية العقد الآجل", "Settle the forward"), debit: text("نقدية", "Cash"), credit: text("أصل عقد آجل", "Forward asset"), amount: text("20,000,000 دولار", "$20,000,000") },
          { label: text("إدراج الاحتياطي في تكلفة الأصل", "Basis-adjust the asset from the reserve"), debit: text("احتياطي تحوط التدفقات النقدية", "Cash flow hedge reserve"), credit: text("أصل غير مالي", "Non-financial asset"), amount: text("18,620,689.66 دولار", "$18,620,689.66") },
        ],
        reference: "IFRS 9.6.5.4, 6.5.11(a)–(d), B6.5.4–B6.5.5; IAS 21.21",
      },
      {
        title: text("Jules: تحوط مخزون المعدن حتى بيعه", "Jules: hedging metal inventory through sale"),
        facts: text(
          "في 1 يوليو 20X6 اشترت Jules كمية 10,000 أونصة معدن بتكلفة 200 دولار للأونصة، وعيّنت عقد بيع مستقبلي للكمية نفسها بسعر 210 دولارات للتسليم في 30 يونيو 20X7 تحوطًا مؤهلًا لتغير سعر المخزون. في 31 ديسمبر 20X6 أصبح سعر المخزون 220 دولارًا للأونصة وسعر العقد المستقبلي للتسليم المحدد 227 دولارًا. في 30 يونيو 20X7 بيع المخزون وأغلق العقد عند سعر فوري 230 دولارًا للأونصة. يفترض المثال أن 200 دولار كان سعر البند المعين عند بدء التحوط، وأن تغير الأسعار المعطى يقيس خطر السعر المحوّط وقيمة المشتق دون أثر خصم أو هامش جوهري، وأن شروط IFRS 9 للتحوط موثقة ومستوفاة.",
          "On 1 July 20X6 Jules buys 10,000 ounces of metal at $200 per ounce and designates a futures sale of the same quantity at $210 for 30 June 20X7 as a qualifying hedge of inventory price risk. On 31 December 20X6 inventory price is $220 per ounce and the future for that delivery date is $227. On 30 June 20X7 the inventory is sold and the future closed at a $230 spot price. Assume $200 was the designated item's inception price, the quoted changes represent hedged-risk and derivative fair value changes without material discount or margin effects, and IFRS 9 hedge criteria are documented and met.",
        ),
        calculations: [
          text("في 31 ديسمبر: ربح البند المحوّط = 10,000 × (220 − 200) = 200,000 دولار؛ خسارة العقد = 10,000 × (227 − 210) = 170,000؛ صافي الربح في الفترة 30,000، ورصيد المخزون المعدل 2,200,000 والتزام المشتق 170,000.", "At 31 December: hedged-item gain = 10,000 × ($220 − $200) = $200,000; futures loss = 10,000 × ($227 − $210) = $170,000. Net period gain is $30,000, adjusted inventory $2,200,000 and derivative liability $170,000."),
          text("من 1 يناير إلى 30 يونيو: زيادة تعديل المخزون = 10,000 × (230 − 220) = 100,000؛ خسارة مشتق إضافية = 10,000 × (230 − 227) = 30,000. يصبح رصيد المخزون 2,300,000 والتزام المشتق 200,000. عند البيع بمبلغ 2,300,000 تظهر إيرادات وتكلفة مبيعات متساويتان في ذلك التاريخ، بينما صافي أثر التحوط على مدى الفترتين ربح 300,000 من البند ناقص خسارة 200,000 من العقد = 100,000 قبل أي مصروفات أخرى.", "From 1 January to 30 June: inventory adjustment rises 10,000 × ($230 − $220) = $100,000; further derivative loss is 10,000 × ($230 − $227) = $30,000. Inventory reaches $2,300,000 and derivative liability $200,000. Sale for $2,300,000 produces equal revenue and cost of sales at that date, while the cumulative price movement on the hedged item of $300,000 less $200,000 futures loss gives $100,000 profit before other costs."),
        ],
        conclusion: text("المحصلة الاقتصادية من الشراء والبيع والعقد هي 2,300,000 − 2,000,000 − 200,000 = 100,000 دولار. محاسبة التحوط توزع أثر تغير السعر عبر الفترتين بصورة متسقة؛ لا تُعامل زيادة المخزون 300,000 كإعادة تقييم عامة وفق IAS 2.", "The combined economic result is $2,300,000 sale proceeds − $2,000,000 original cost − $200,000 futures settlement = $100,000. Hedge accounting allocates price changes across periods consistently; the $300,000 inventory uplift is not a general IAS 2 revaluation."),
        journalEntries: [
          { label: text("31 ديسمبر: خسارة العقد", "31 December: futures loss"), debit: text("خسارة مشتق في الربح أو الخسارة", "Derivative loss in profit or loss"), credit: text("التزام عقد مستقبلي", "Futures liability"), amount: text("170,000 دولار", "$170,000") },
          { label: text("31 ديسمبر: تعديل المخزون للخطر المحوّط", "31 December: hedged-risk inventory adjustment"), debit: text("مخزون", "Inventory"), credit: text("ربح تحوط في الربح أو الخسارة", "Hedged-item gain in profit or loss"), amount: text("200,000 دولار", "$200,000") },
          { label: text("30 يونيو: خسارة العقد الإضافية", "30 June: further futures loss"), debit: text("خسارة مشتق في الربح أو الخسارة", "Derivative loss in profit or loss"), credit: text("التزام عقد مستقبلي", "Futures liability"), amount: text("30,000 دولار", "$30,000") },
          { label: text("30 يونيو: تعديل المخزون الإضافي", "30 June: further inventory adjustment"), debit: text("مخزون", "Inventory"), credit: text("ربح تحوط في الربح أو الخسارة", "Hedged-item gain in profit or loss"), amount: text("100,000 دولار", "$100,000") },
          { label: text("البيع: إثبات المتحصل", "Sale: recognise proceeds"), debit: text("نقدية", "Cash"), credit: text("إيراد", "Revenue"), amount: text("2,300,000 دولار", "$2,300,000") },
          { label: text("البيع: إخراج المخزون المعدل", "Sale: derecognise adjusted inventory"), debit: text("تكلفة مبيعات", "Cost of sales"), credit: text("مخزون", "Inventory"), amount: text("2,300,000 دولار", "$2,300,000") },
          { label: text("إقفال العقد بدفع صافي الالتزام", "Close the future by paying its net liability"), debit: text("التزام عقد مستقبلي", "Futures liability"), credit: text("نقدية", "Cash"), amount: text("200,000 دولار", "$200,000") },
        ],
        reference: "IFRS 9.6.4.1, 6.5.2(a), 6.5.8; IAS 2.34",
      },
      {
        title: text("Redblack: مصفوفة أعمار الذمم وحركة المخصص", "Redblack: receivables ageing matrix and allowance movement"),
        facts: text(
          "في 30 يونيو 20X4 بلغ إجمالي الذمم 60 مليون دولار موزعًا على شرائح: جارية 30 مليون بمعدل 0.3%؛ متأخرة 1–30 يومًا 15 مليون بمعدل 1.6%؛ 31–60 يومًا 8 ملايين بمعدل 3.6%؛ 61–90 يومًا 5 ملايين بمعدل 6.6%؛ أكثر من 90 يومًا مليونان بمعدل 10.6%. في 30 يونيو 20X5 كانت الأرصدة 32 و16 و10 و7 و3 ملايين، والمعدلات 0.5% و1.8% و3.8% و7% و11% بالترتيب. يفترض للحساب أن النسب المعطاة معدلات خسارة ائتمانية متوقعة على مدى العمر بعد معايرة التحصيلات والتوقعات، وأن المخصص الافتتاحي بقي 1.16 مليون دون شطب أو استخدام أو حركة أخرى.",
          "At 30 June 20X4 gross receivables total $60m by bucket: current $30m at 0.3%; 1–30 days overdue $15m at 1.6%; 31–60 days $8m at 3.6%; 61–90 days $5m at 6.6%; over 90 days $2m at 10.6%. At 30 June 20X5, balances are $32m, $16m, $10m, $7m and $3m, with rates of 0.5%, 1.8%, 3.8%, 7% and 11%. For this calculation, assume those rates are calibrated lifetime ECL rates after considering recoveries and forecasts, and that the opening $1.16m allowance has no intervening write-offs, use or other movement.",
        ),
        calculations: [
          text("مخصص 20X4 بالآلاف = 30,000 × 0.3% + 15,000 × 1.6% + 8,000 × 3.6% + 5,000 × 6.6% + 2,000 × 10.6% = 90 + 240 + 288 + 330 + 212 = 1,160.", "20X4 allowance in $000 = 30,000 × 0.3% + 15,000 × 1.6% + 8,000 × 3.6% + 5,000 × 6.6% + 2,000 × 10.6% = 90 + 240 + 288 + 330 + 212 = 1,160."),
          text("مخصص 20X5 بالآلاف = 32,000 × 0.5% + 16,000 × 1.8% + 10,000 × 3.8% + 7,000 × 7% + 3,000 × 11% = 160 + 288 + 380 + 490 + 330 = 1,648. الزيادة = 1,648 − 1,160 = 488 ألف دولار إذا لم توجد حركات أخرى.", "20X5 allowance in $000 = 32,000 × 0.5% + 16,000 × 1.8% + 10,000 × 3.8% + 7,000 × 7% + 3,000 × 11% = 160 + 288 + 380 + 490 + 330 = 1,648. Increase = 1,648 − 1,160 = $488,000 if there are no other movements."),
        ],
        conclusion: text("رصيد المخصص المطلوب في 20X5 هو 1,648,000 دولار، والزيادة المفترضة في الربح أو الخسارة 488,000 دولار. إذا كانت النسب مجرد احتمالات تعثر وليست معدلات خسارة بعد الاسترداد، فلا تكفي لحساب IFRS 9 دون بيانات الخسارة عند التعثر وغيرها.", "The required 20X5 allowance is $1,648,000 and the assumed increase in profit or loss is $488,000. If the percentages are merely default probabilities rather than post-recovery loss rates, IFRS 9 ECL cannot be determined without loss-given-default and other inputs."),
        journalEntries: [
          { label: text("زيادة المخصص المفترضة في 20X5", "Assumed 20X5 allowance increase"), debit: text("مصروف خسائر ائتمانية متوقعة", "Expected credit-loss expense"), credit: text("مخصص خسائر الذمم", "Receivables loss allowance"), amount: text("488,000 دولار", "$488,000") },
        ],
        reference: "IFRS 9.5.5.15–5.5.17, B5.5.35; IFRS 7.35N",
      },
    ],
  },
  "IAS 19": {
    sections: [
      {
        title: text(
          "الإجازة المرضية المتراكمة: احسب الزيادة المتوقعة في المدفوعات",
          "Accumulating sick leave: measure expected incremental payments",
        ),
        explanation: text(
          "الإجازة المدفوعة المتراكمة تنشئ التزامًا مع تقديم الخدمة التي تزيد حق الموظف في غياب مستقبلي، حتى لو كان الرصيد غير قابل للصرف نقدًا عند ترك العمل. لكن رصيد الأيام المرحلة ليس هو المصروف تلقائيًا: يقاس الالتزام بالمبلغ الإضافي المتوقع دفعه بسبب الأيام غير المستعملة في نهاية الفترة. افحص ترتيب استهلاك أيام السنة الجديدة والمرحلة، واحتمال بلوغ الموظفين سقف أيام السنة الجديدة؛ إذا استعمل الموظف أيام السنة الجديدة أولًا ولم يتجاوزها، فلن يتطلب الرصيد القديم دفعًا إضافيًا. عند عدم إعطاء أجر اليوم، أعرض النتيجة بوحدة أيام ولا تخترع مبلغًا نقديًا.",
          "Accumulating paid absence creates an obligation as service increases entitlement to future leave, even if unused days are not paid out on departure. Yet the carried-forward balance is not automatically the expense: measure the additional amount expected to be paid because of unused entitlement at period-end. Check the order in which new-year and carried-forward days are consumed and the likelihood of employees exceeding the new-year allowance. If current-year days are used first and an employee stays within that allowance, the old balance causes no incremental payment. Without a daily pay rate, report days rather than inventing a currency amount.",
        ),
        keyPoints: [
          text("ميّز التراكم عن استحقاق التعويض النقدي عند انتهاء العمل.", "Distinguish accumulation from cash vesting on leaving employment."),
          text("استخرج الأيام الإضافية المتوقعة، لا كامل الرصيد المرحّل.", "Calculate expected incremental days, not the entire carried-forward balance."),
          text("راجع ترتيب الاستهلاك وتاريخ انتهاء صلاحية الأيام.", "Check consumption order and expiry of days."),
        ],
        reference: "IAS 19.13–17",
      },
      {
        title: text(
          "إغلاق منشأة: افصل تعويض الإنهاء عن مكافأة البقاء",
          "Factory closure: separate termination pay from retention pay",
        ),
        explanation: text(
          "قد تعلن المنشأة مبلغًا أكبر لمن يظل حتى الإغلاق، مع مبلغ أساس تدفعه لكل من تنتهي خدمته بسبب القرار. مبلغ الأساس مقابل إنهاء العمل، فيعترف به عند التاريخ الأسبق لتعذر سحب العرض أو إثبات تكلفة إعادة هيكلة مؤهلة تشمل تلك المدفوعات. الزيادة المشروطة بأداء خدمة حتى الإغلاق ليست كلها تعويض إنهاء؛ إنها مقابل الخدمة المستقبلية وتُحمّل على فترات تقديمها مع تحديث عدد المتوقع بقائهم. اختبر مدة التسوية لتحديد ما إذا كانت الزيادة منفعة قصيرة الأجل، ولا تثبتها كلها يوم إعلان الخطة. في خطط المنافع المحددة، لا تستخدم نموذج «العائد المتوقع» القديم لقياس صافي الفائدة؛ تكلفة الخدمة وصافي الفائدة في الربح أو الخسارة، وإعادة القياس في الدخل الشامل الآخر.",
          "An entity may announce a larger payment for employees who stay until closure and a base amount for everyone whose employment ends because of the decision. The base amount is for termination and is recognised at the earlier of the offer becoming non-withdrawable and recognition of a qualifying restructuring cost involving the payments. The increment conditional on service until closure is not entirely termination pay: it compensates future service and is accrued over the service periods, updating the expected number who stay. Assess settlement timing to classify the increment as short-term when appropriate; do not expense it all on announcement. For defined-benefit plans, do not use the old separate expected-return model for net interest; service cost and net interest are in profit or loss, while remeasurements are in OCI.",
        ),
        keyPoints: [
          text("حدد المبلغ المستحق سواء بقي الموظف أم غادر قبل الإغلاق.", "Identify the amount payable whether the employee stays or leaves early."),
          text("وزع فقط الزيادة المشروطة بالخدمة على فترة البقاء المطلوبة.", "Spread only the service-dependent increment over the required retention period."),
          text("أعد تقدير العدد المتوقع بقاؤه ولا تخلط بين التوقيت والتصنيف.", "Re-estimate expected stayers and keep timing separate from classification."),
        ],
        reference: "IAS 19.8, 11, 159–170; IAS 37.72–83",
      },
    ],
    workedExamples: [
      {
        title: text("Plyman: اثنا عشر يومًا لا مئتا يوم", "Plyman: twelve days, not two hundred"),
        facts: text(
          "لدى Plyman مئة موظف، ولكل منهم خمسة أيام مرضية مدفوعة سنويًا. تنتقل الأيام غير المستعملة لسنة واحدة، وتستهلك أيام السنة الجديدة قبل الأيام المرحلة. في نهاية 20X8 تبقى في المتوسط يومان لكل موظف. يتوقع أن يستخدم 92 موظفًا خمسة أيام أو أقل في 20X9، وأن يستخدم الثمانية الآخرون 6.5 أيام لكل منهم. لم يحدد أجر اليوم.",
          "Plyman has 100 employees, each entitled to five paid sick days a year. Unused days carry forward for one year, and new-year days are used before carried-forward days. At the end of 20X8, each employee has two unused days on average. In 20X9, 92 employees are expected to use no more than five days, and the other eight to use 6.5 days each. No daily pay rate is given.",
        ),
        calculations: [
          text("الرصيد النظري = 100 × 2 = 200 يوم. للـ92 موظفًا لا توجد أيام إضافية متوقعة. لكل من الثمانية الآخرين: 6.5 − 5 = 1.5 يوم من الرصيد القديم، وهو أقل من الحد المرحّل البالغ يومين؛ الإجمالي 8 × 1.5 = 12 يومًا.", "The nominal balance is 100 × 2 = 200 days. The 92 employees generate no expected incremental days. Each of the other eight needs 6.5 − 5 = 1.5 carried-forward days, below the two-day balance; total incremental days are 8 × 1.5 = 12."),
        ],
        conclusion: text("يعترف بتكلفة والتزام يعادلان أجر 12 يومًا وفق الأجر المعمول به؛ لا يمكن تحديد مبلغ نقدي من الوقائع ولا يصح ضرب الأجر في 200 يوم.", "Recognise expense and liability for 12 days at the applicable pay rate. The facts do not support a currency amount, nor an expense for all 200 days."),
        journalEntries: [
          {
            label: text("استحقاق الإجازة المرضية الإضافية", "Accrue incremental sick leave"),
            debit: text("مصروف منافع الموظفين", "Employee-benefit expense"),
            credit: text("التزام إجازات مرضية مستحقة", "Accrued sick-leave liability"),
            amount: text("أجر 12 يومًا؛ المعدل غير معطى", "Pay for 12 days; rate not supplied"),
          },
        ],
        reference: "IAS 19.13–17",
      },
      {
        title: text("إغلاق المصنع: 1.2 مليون إنهاء و2 مليون خدمة", "Factory closure: 1.2 million termination and 2 million service"),
        facts: text(
          "ستغلق منشأة مصنعًا بعد عشرة أشهر وتنهي عمل العاملين المتبقين. تعرض 10,000 وحدة نقد لكل عامل يغادر قبل الإغلاق و30,000 لمن يستمر حتى يوم الإغلاق. عدد العاملين 120، ويتوقع مغادرة 20 مبكرًا وبقاء 100. نفترض استيفاء شروط الاعتراف بمزايا الإنهاء عند إعلان خطة الإغلاق، وأن المنفعة الإضافية قصيرة الأجل ولا يلزم خصمها.",
          "An entity will close a factory in ten months and terminate remaining staff. It offers CU10,000 to each employee leaving early and CU30,000 to each who serves until closure. There are 120 employees; 20 are expected to leave early and 100 to remain. Assume the termination-recognition criteria are met when the plan is announced, and the incremental benefit is short-term with no discount required.",
        ),
        calculations: [
          text("التدفق النقدي المتوقع = 20 × 10,000 + 100 × 30,000 = 3,200,000. جزء الإنهاء الأساسي = 120 × 10,000 = 1,200,000. الزيادة المقابلة للخدمة = 100 × (30,000 − 10,000) = 2,000,000، وتكلفتها الشهرية المبدئية 2,000,000 ÷ 10 = 200,000.", "Expected cash outflow = 20 × CU10,000 + 100 × CU30,000 = CU3,200,000. Base termination component = 120 × CU10,000 = CU1,200,000. Service-dependent increment = 100 × (CU30,000 − CU10,000) = CU2,000,000, initially CU200,000 per month over ten months."),
        ],
        conclusion: text("عند تحقق شرط الاعتراف يثبت 1,200,000 فورًا كمزايا إنهاء. ويثبت 200,000 شهريًا، وفق تقدير البقاء المحدّث، مقابل الخدمة اللاحقة؛ لا يثبت كامل 3,200,000 في يوم الإعلان.", "When the recognition trigger occurs, CU1,200,000 is recognised as termination benefits. Accrue the service component initially at CU200,000 a month, revising expected retention; do not recognise all CU3,200,000 on announcement."),
        journalEntries: [
          { label: text("عند تحقق شرط إنهاء الخدمة", "At termination recognition trigger"), debit: text("مصروف مزايا إنهاء الخدمة", "Termination-benefit expense"), credit: text("التزام مزايا إنهاء الخدمة", "Termination-benefit liability"), amount: text("1,200,000 وحدة نقد", "CU1,200,000") },
          { label: text("في كل شهر خدمة، مبدئيًا", "Each service month, initially"), debit: text("مصروف مزايا الموظفين قصيرة الأجل", "Short-term employee-benefit expense"), credit: text("التزام مكافأة البقاء", "Retention-benefit liability"), amount: text("200,000 وحدة نقد", "CU200,000") },
        ],
        reference: "IAS 19.11, 159–170; IAS 37.72–83",
      },
    ],
  },
  "IAS 37": {
    sections: [
      {
        title: text(
          "من نسب عيوب الضمان إلى مخصص واحد قابل للتسوية",
          "From warranty defect frequencies to one reconcilable provision",
        ),
        explanation: text(
          "عند بيع مجموعة كبيرة من المنتجات بضمان مطابقة، لا تختبر المنشأة احتمال مطالبة كل عميل منفردًا ثم تهمل الباقي. تقيّم الالتزام على مستوى مجموعة الضمانات، وتضرب احتمال كل نتيجة في تكلفة تحققها لو انطبقت على كامل المجموعة، ثم تجمع القيم المتوقعة. تحقق من أن فئات النتائج حصرية ومجموع احتمالاتها 100%، وأن تقديرات التكلفة تخص المبيعات التي نشأ عنها التزام في تاريخ التقرير. ضمان الخدمة المنفصل يخضع لتحليل IFRS 15 بدل افتراض دخوله تلقائيًا في هذا المخصص.",
          "For a large population of assurance warranties, do not dismiss each individual claim because it is uncertain. Evaluate the population, multiply each outcome's probability by its cost if applied to the whole population, and sum the expected values. Check that outcomes are mutually exclusive and probabilities total 100%, and that costs relate to sales already creating an obligation at reporting date. A separate service warranty requires IFRS 15 analysis rather than automatic inclusion in this provision.",
        ),
        keyPoints: [
          text(
            "استخدم التوزيع الاحتمالي الكامل، بما فيه فئة «بلا عيوب» بتكلفة صفر.",
            "Use the complete probability distribution, including a zero-cost no-defect category.",
          ),
          text(
            "راجع ما إذا كان الضمان لتأكيد المطابقة أو خدمة مستقلة قبل اختيار المعيار.",
            "Check whether the warranty assures compliance or provides a separate service before choosing the Standard.",
          ),
        ],
        reference: "IAS 37.14, 24, 36–40; IFRS 15.B28–B33",
      },
      {
        title: text(
          "العقد المرهق: قارن الخسارة الصافية بخيار الخروج",
          "Onerous contract: compare net fulfilment loss with exit cost",
        ),
        explanation: text(
          "وجود عقد بسعر أقل من تكلفة تنفيذه لا يعني تلقائيًا أن المخصص يساوي كامل تكلفة التنفيذ. احسب صافي خسارة الوفاء بعد المنافع المتوقعة من العقد، ثم قارنها بالتعويض أو الغرامة الواجبة عند الإخلال؛ الأقل يمثل تكلفة الخروج التي لا يمكن تجنبها. تشمل تكلفة التنفيذ التكاليف الإضافية وتوزيع التكاليف الأخرى المرتبطة مباشرة بالعقد وفق IAS 37 الحالي. قبل إنشاء مخصص منفصل، أثبت أي انخفاض في الأصول المستخدمة لتنفيذه. لا تعدّ احتمال الحصول على عقود مستقبلية مستقلة منفعة مؤكدة من العقد القائم بلا حق تعاقدي.",
          "A fixed price below fulfilment cost does not make the provision equal to total fulfilment cost. Calculate the net fulfilment loss after benefits expected from the contract, then compare it with compensation or penalty for failing to perform; the lower figure is the unavoidable exit cost. Current IAS 37 includes incremental costs and allocated other directly related costs in fulfilment cost. Recognise impairment of assets used to fulfil the contract before a separate provision. Do not treat hopes of separate future contracts as enforceable benefits of this one.",
        ),
        keyPoints: [
          text(
            "افحص أولًا انخفاض الأصول المتعلقة بالعقد ثم احسب المخصص المتبقي.",
            "Test assets related to the contract for impairment before measuring the remaining provision.",
          ),
          text(
            "لا تخلط بين مبلغ الإيراد المتوقع والخسارة الصافية من الوفاء.",
            "Do not confuse expected contract revenue with the net loss from fulfilment.",
          ),
        ],
        reference: "IAS 37.66–69; IAS 36.9",
      },
    ],
    workedExamples: [
      {
        title: text(
          "مخصص ضمان Parker بالقيمة المتوقعة",
          "Parker warranty provision using expected value",
        ),
        facts: text(
          "تبيع Parker Co سلعًا بضمان مطابقة ستة أشهر. تشير الخبرة إلى أن 75% من المبيعات بلا عيوب، و20% تحتاج إصلاحًا بسيطًا، و5% إصلاحًا كبيرًا. لو احتاجت جميع الوحدات إصلاحًا بسيطًا لكانت تكلفته مليون دولار؛ ولو احتاجتها جميعًا إصلاحًا كبيرًا لكانت التكلفة 4 ملايين. يفترض المثال أن المبيعات أنشأت التزام ضمان حاليًا وأن أثر خصم ستة أشهر غير جوهري.",
          "Parker Co sells goods with a six-month assurance warranty. Experience suggests 75% will have no defect, 20% a minor defect and 5% a major defect. Repairing the entire population for minor defects would cost $1 million; repairing it all for major defects would cost $4 million. Assume the sales created a present warranty obligation and discounting over six months is immaterial.",
        ),
        calculations: [
          text(
            "القيمة المتوقعة = 75% × صفر + 20% × 1,000,000 + 5% × 4,000,000 = 400,000 دولار. لا تجمع 1 و4 ملايين ثم تضربهما في إجمالي نسبة العيوب 25%؛ لكل فئة احتمالها وتكلفتها.",
            "Expected value = 75% × nil + 20% × $1,000,000 + 5% × $4,000,000 = $400,000. Do not add the two full-population costs and multiply by the combined 25% defect rate; each outcome has its own probability and cost.",
          ),
        ],
        conclusion: text(
          "يثبت مخصص ضمان 400,000 دولار للمجموعة المباعة، ويعاد تقديره لاحقًا حسب المطالبات والمعلومات الجديدة.",
          "Recognise a $400,000 provision for the sold population and update the estimate as claims and information change.",
        ),
        journalEntries: [
          {
            label: text("إثبات مخصص الضمان", "Recognise warranty provision"),
            debit: text("مصروف الضمان", "Warranty expense"),
            credit: text("مخصص الضمان", "Warranty provision"),
            amount: text("400,000 دولار", "$400,000"),
          },
        ],
        reference: "IAS 37.14, 24, 36–40; IFRS 15.B28–B33",
      },
      {
        title: text(
          "عقد Leaf المرهق: الوفاء أم دفع التعويض؟",
          "Leaf's onerous contract: perform or pay compensation?",
        ),
        facts: text(
          "وقعت Leaf Co عقدًا لإنشاء أصل لدى عميل بسعر ثابت 100,000 دولار. التكاليف المقدرة اللازمة للوفاء 120,000 دولار، وتعويض الانسحاب من العقد 30,000. تأمل الشركة كسب أعمال مستقبلية بسبب علاقتها بالعميل، لكن لا حق تعاقدي لها في تلك الأعمال. يفترض المثال أن الـ120,000 تشمل جميع التكاليف المرتبطة مباشرة بالعقد، ولا توجد أصول متعلقة به يلزم اختبار انخفاضها أو أثر خصم جوهري.",
          "Leaf Co signs a contract to build an asset on a customer's premises for a fixed $100,000. Estimated costs to fulfil are $120,000 and compensation for withdrawing is $30,000. The company hopes for future customer business but has no contractual right to it. Assume the $120,000 includes all costs directly related to this contract, there is no related asset requiring an impairment test, and discounting is immaterial.",
        ),
        calculations: [
          text(
            "خسارة الوفاء الصافية = 120,000 − 100,000 = 20,000. تكلفة الانسحاب = 30,000؛ الأقل غير القابل للتجنب = 20,000 دولار.",
            "Net fulfilment loss = $120,000 − $100,000 = $20,000. Exit compensation = $30,000; the lower unavoidable cost is $20,000.",
          ),
        ],
        conclusion: text(
          "يثبت مخصص عقد مرهق 20,000 دولار لا 30,000 أو 120,000. الأمل في عمل مستقبلي منفصل لا يقلل التزام هذا العقد.",
          "Recognise a $20,000 onerous-contract provision, not $30,000 or $120,000. Hoped-for separate future business does not reduce this contract's obligation.",
        ),
        journalEntries: [
          {
            label: text("إثبات خسارة العقد المرهق", "Recognise onerous-contract loss"),
            debit: text("خسارة عقد مرهق", "Onerous-contract loss"),
            credit: text("مخصص عقد مرهق", "Onerous-contract provision"),
            amount: text("20,000 دولار", "$20,000"),
          },
        ],
        reference: "IAS 37.66–69",
      },
    ],
  },
  "IAS 38": {
    sections: [
      {
        title: text(
          "تاريخ استيفاء شروط التطوير هو بداية الأصل",
          "The development criteria date is the asset's starting point",
        ),
        explanation: text(
          "تُحمل تكاليف البحث والتطوير السابقة لتاريخ إثبات شروط IAS 38 الستة جميعًا على المصروف. من ذلك التاريخ فقط يبدأ تجميع تكاليف الأصل غير الملموس. نجاح المشروع لاحقًا أو ارتفاع قيمته القابلة للاسترداد لا يسمح بإعادة رسملة ما سبق إثباته مصروفًا. افصل في ملف المشروع بين إثبات الجدوى والموارد والقدرة على البيع أو الاستخدام، وتاريخ كل نفقة.",
          "Expense research and development costs incurred before all six IAS 38 criteria can be demonstrated. Only costs from that date form the internally generated intangible's cost. Later success or a high recoverable amount does not permit reinstatement of earlier expenses. Record evidence of feasibility, resources and ability to use or sell alongside each expenditure date.",
        ),
        keyPoints: [
          text(
            "الرسملة تبدأ مستقبلًا عندما تُثبت كل الشروط؛ ليست خيارًا بأثر رجعي.",
            "Capitalisation begins prospectively once every criterion is demonstrated; it is not a retrospective choice.",
          ),
          text(
            "لا تخلط بين تكلفة الأصل والقيمة القابلة للاسترداد في اختبار الانخفاض.",
            "Do not confuse asset cost with recoverable amount in an impairment test.",
          ),
        ],
        reference: "IAS 38.54–57, 65–67, 71; IAS 36.18",
      },
    ],
    workedExamples: [
      {
        title: text(
          "مشروع تطوير: إنفاق قبل استيفاء الشروط وبعده",
          "Development spending before and after the criteria date",
        ),
        facts: text(
          "أنفقت Doug Co مبلغ 100,000 دولار على عملية إنتاج جديدة خلال 20X3: منها 90,000 قبل 1 ديسمبر و10,000 في ديسمبر. في 1 ديسمبر أمكن إثبات جميع شروط الاعتراف بأصل تطوير. قدرت القيمة القابلة للاسترداد للمعرفة الفنية الناتجة في نهاية السنة بـ50,000 دولار. لا يحدد السؤال متى أصبح الأصل متاحًا للاستخدام أو عمره النافع.",
          "Doug Co spent $100,000 on a new production process in 20X3: $90,000 before 1 December and $10,000 during December. All development-asset recognition criteria could first be demonstrated on 1 December. The resulting know-how's year-end recoverable amount was estimated at $50,000. The facts do not specify an available-for-use date or useful life.",
        ),
        calculations: [
          text(
            "تكلفة الأصل المؤهل = 10,000 فقط منذ 1 ديسمبر. تبقى الـ90,000 السابقة مصروفًا، ولا يعاد إثباتها أصلًا عند نجاح المشروع.",
            "Qualifying asset cost is only the $10,000 incurred from 1 December. The earlier $90,000 remains expense and is not reinstated after the project's success.",
          ),
          text(
            "القيمة القابلة للاسترداد 50,000 لا ترفع تكلفة الأصل من 10,000 إلى 50,000، ولا تشير الأرقام المعطاة إلى خسارة انخفاض. لا يخترع المثال إهلاكًا دون تاريخ الإتاحة والعمر النافع.",
            "The $50,000 recoverable amount does not uplift $10,000 cost to $50,000, and the supplied figures do not indicate impairment. No amortisation is invented without an available-for-use date and useful life.",
          ),
        ],
        conclusion: text(
          "تظهر تكلفة تطوير 10,000 دولار قبل أي إهلاك يحتاج وقائع إضافية، مع مصروف سابق 90,000 دولار في 20X3.",
          "Development cost is $10,000 before any amortisation needing further facts, while $90,000 is a 20X3 expense.",
        ),
        journalEntries: [
          {
            label: text("الإنفاق السابق لاستيفاء الشروط", "Spending before the criteria date"),
            debit: text("مصروف بحث وتطوير", "Research and development expense"),
            credit: text("نقدية أو دائنون", "Cash or payables"),
            amount: text("90,000 دولار", "$90,000"),
          },
          {
            label: text("التطوير المؤهل منذ 1 ديسمبر", "Qualifying development from 1 December"),
            debit: text("أصل غير ملموس — تطوير", "Intangible asset — development"),
            credit: text("نقدية أو دائنون", "Cash or payables"),
            amount: text("10,000 دولار", "$10,000"),
          },
        ],
        reference: "IAS 38.54–57, 65–67, 71; IAS 36.18",
      },
      {
        title: text(
          "هبوط إعادة تقييم يتجاوز فائض الأصل",
          "Downward revaluation exceeding the asset's surplus",
        ),
        facts: text(
          "لأصل غير ملموس مطبق عليه نموذج إعادة التقييم بافتراض وجود سوق نشط، رصيد فائض خاص به 400 دولار من إعادة تقييم 20X3. في نهاية 20X4 لزم خفض قيمته الدفترية 500 دولار، دون تغير آخر في فائض الأصل.",
          "For an intangible measured under the revaluation model, assuming an active market, a $400 surplus for that asset arose in 20X3. At the end of 20X4 its carrying amount must fall by $500, with no other change in this asset's surplus.",
        ),
        calculations: [
          text(
            "من هبوط 500 دولار، يُعترف بـ400 في الدخل الشامل الآخر مع خفض فائض الأصل إلى صفر، وبالـ100 الزائدة في الربح أو الخسارة.",
            "Of the $500 decrease, $400 goes to other comprehensive income and reduces this asset's surplus to nil; the $100 excess goes to profit or loss.",
          ),
        ],
        conclusion: text(
          "لا يُسجل الانخفاض كله مصروفًا، ولا يُستخدم فائض أصل آخر. يشترط السوق النشط أصلًا لتطبيق نموذج إعادة التقييم.",
          "Do not expense the entire decrease or use another asset's surplus. An active market is a prerequisite for this revaluation model.",
        ),
        journalEntries: [
          {
            label: text("الجزء المقابل لفائض الأصل", "Amount offset against this asset's surplus"),
            debit: text(
              "الدخل الشامل الآخر — فائض إعادة التقييم",
              "Other comprehensive income — revaluation surplus",
            ),
            credit: text("الأصل غير الملموس", "Intangible asset"),
            amount: text("400 دولار", "$400"),
          },
          {
            label: text("الجزء الزائد على الفائض", "Amount exceeding the surplus"),
            debit: text(
              "خسارة إعادة تقييم — الربح أو الخسارة",
              "Revaluation loss — profit or loss",
            ),
            credit: text("الأصل غير الملموس", "Intangible asset"),
            amount: text("100 دولار", "$100"),
          },
        ],
        reference: "IAS 38.75–78, 86",
      },
    ],
  },
  "IAS 36": {
    sections: [
      {
        title: text(
          "احسب القيمة من الاستخدام من التدفقات، ثم قارنها بالبيع",
          "Discount use cash flows before comparing with disposal value",
        ),
        explanation: text(
          "اختبار الانخفاض ليس مقارنة القيمة الدفترية بإجمالي التدفقات المستقبلية غير المخصومة. تُقدّر التدفقات النقدية الملائمة الناتجة من الأصل في حالته الحالية، وتُخصم بمعدل مناسب إلى تاريخ القياس لاستخراج القيمة من الاستخدام. ثم تُقارن بالقيمة العادلة ناقص تكاليف التصرف؛ الأكبر منهما هو القيمة القابلة للاسترداد. تفصل الخطوات بين إهلاك السنة السابقة وتقدير الخسارة الجديدة، وتوضح أثر التقريب في المثال الرقمي.",
          "An impairment test does not compare carrying amount with undiscounted future cash flows. Estimate relevant cash flows from the asset in its current condition and discount them at an appropriate rate to the measurement date to obtain value in use. Compare that with fair value less costs of disposal; the higher is recoverable amount. Keep the prior year's depreciation separate from the new loss estimate and disclose rounding in numerical examples.",
        ),
        keyPoints: [
          text(
            "استخدم القيمة الأعلى بين الاستخدام والتصرف، لا مجموعهما ولا الأقل منهما.",
            "Use the higher of use and disposal values, neither their sum nor the lower value.",
          ),
          text(
            "طابق تاريخ التدفقات ومعدل الخصم، ولا تضف تدفقات تمويل أو تحسينات مستقبلية غير مسموحة.",
            "Align cash-flow timing and discount rate; do not add financing flows or unsupported future enhancement benefits.",
          ),
        ],
        reference: "IAS 36.6, 18–21, 30–57, 59–60",
      },
    ],
    workedExamples: [
      {
        title: text(
          "قيمة من الاستخدام لأربع سنوات وخسارة انخفاض مع أثر التقريب",
          "Four-year value-in-use estimate and impairment with rounding",
        ),
        facts: text(
          "اشترت منشأة أصلًا بمبلغ 3,000,000 دولار في 1 يونيو 20X3، ويهلك خطيًا خلال خمس سنوات دون قيمة متبقية. في 31 مايو 20X4 قدرت صافي التدفقات السنوية في نهاية السنوات الأربع التالية بمبالغ 280,000 و450,000 و500,000 و550,000 دولار. القيمة العادلة ناقص تكاليف التصرف 1,400,000 دولار. يفترض المثال ملاءمة معدل خصم 5% والتدفقات المعطاة، وعدم وجود تدفقات إضافية بعد السنة الرابعة.",
          "An entity acquires an asset for $3,000,000 on 1 June 20X3, depreciated straight-line over five years with nil residual value. At 31 May 20X4 it estimates net cash flows at the ends of the next four years of $280,000, $450,000, $500,000 and $550,000. Fair value less costs of disposal is $1,400,000. Assume the supplied 5% discount rate and cash flows are appropriate and no additional flows arise after year four.",
        ),
        calculations: [
          text(
            "إهلاك السنة الأولى = 3,000,000 ÷ 5 = 600,000؛ القيمة الدفترية قبل اختبار الانخفاض = 2,400,000.",
            "Year-one depreciation = $3,000,000 ÷ 5 = $600,000; pre-test carrying amount = $2,400,000.",
          ),
          text(
            "القيمة من الاستخدام = 280,000÷1.05 + 450,000÷1.05² + 500,000÷1.05³ + 550,000÷1.05⁴ = 1,559,235 دولارًا تقريبًا. إذا قُرِّب كل تدفق مخصوم إلى أقرب ألف، يصبح المجموع 1,559,000.",
            "Value in use = $280,000÷1.05 + $450,000÷1.05² + $500,000÷1.05³ + $550,000÷1.05⁴ ≈ $1,559,235. Rounding each discounted flow to the nearest thousand gives a total of $1,559,000.",
          ),
          text(
            "القيمة القابلة للاسترداد هي الأعلى بين 1,559,235 تقريبًا و1,400,000، أي 1,559,235. خسارة الانخفاض بالحساب غير المقرب ≈ 2,400,000 − 1,559,235 = 840,765؛ وتصبح 841,000 عند عرض المثال بأقرب ألف.",
            "Recoverable amount is the higher of approximately $1,559,235 and $1,400,000, so about $1,559,235. The unrounded impairment is approximately $2,400,000 − $1,559,235 = $840,765; reporting to the nearest thousand gives $841,000.",
          ),
        ],
        conclusion: text(
          "يخفض الأصل إلى قيمته القابلة للاسترداد، ويعاد حساب إهلاكه اللاحق على قيمته الجديدة وعمره المتبقي. الفرق بين 840,765 و841,000 تقريب عرض فقط، لا قاعدتان مختلفتان للقياس.",
          "Write the asset down to recoverable amount and recalculate subsequent depreciation using its revised carrying amount and remaining life. The difference between $840,765 and $841,000 is display rounding, not a different measurement rule.",
        ),
        journalEntries: [
          {
            label: text(
              "إثبات الخسارة بالحساب غير المقرب تقريبًا",
              "Recognise approximately unrounded loss",
            ),
            debit: text("خسارة انخفاض — الربح أو الخسارة", "Impairment loss — profit or loss"),
            credit: text("مجمع انخفاض الأصل", "Accumulated impairment"),
            amount: text("840,765 تقريبًا", "approximately $840,765"),
          },
        ],
        reference: "IAS 36.6, 18, 30–57, 59–60, 63",
      },
    ],
  },
  "IAS 20": {
    sections: [
      {
        title: text(
          "منحة الأصل تتبع استهلاك الأصل لا يوم قبضها",
          "An asset grant follows the asset's consumption, not its receipt date",
        ),
        explanation: text(
          "إذا توافر التأكيد المعقول باستيفاء شروط المنحة وتحصيلها، تُعترف منحة الأصل بصورة منهجية عبر الفترات التي تحمل إهلاك الأصل. يجوز عرضها دخلًا مؤجلًا يُطلق تدريجيًا، أو خصمها من القيمة الدفترية للأصل بحيث يظهر أثرها بخفض مصروف الإهلاك. لا يجوز الجمع بين الطريقتين للمنحة نفسها، ولا يغير اختلاف طريقة الإهلاك مجموع المنحة المستحق.",
          "Once there is reasonable assurance of compliance with grant conditions and receipt, an asset grant is recognised systematically over the periods bearing the asset's depreciation. It may be presented as deferred income released over time or deducted from the asset's carrying amount so its effect reduces depreciation expense. Do not apply both methods to the same grant; the depreciation pattern changes timing, not total grant entitlement.",
        ),
        keyPoints: [
          text(
            "في طريقة الدخل المؤجل، قابل نسبة الإيراد المعترف به بنسبة إهلاك الأصل المرتبط.",
            "Under deferred income, match the proportion of grant income to the related asset's depreciation pattern.",
          ),
          text(
            "قبل الإثبات تحقق من شروط المنحة والتأكيد المعقول، ولا تفترض أن القبض وحده يكفي.",
            "Check grant conditions and reasonable assurance before recognition; cash receipt alone is insufficient.",
          ),
        ],
        reference: "IAS 20.7, 12, 24–27",
      },
    ],
    workedExamples: [
      {
        title: text(
          "منحة تغطي نصف تكلفة آلة مع طريقتين للإهلاك",
          "Grant covering half a machine's cost under two depreciation patterns",
        ),
        facts: text(
          "تكلفة آلة 40,000 دولار، وعمرها أربع سنوات وقيمتها المتبقية صفر. تغطي منحة حكومية 50% من تكلفتها، أي 20,000 دولار. يفترض المثال تحقق شروط الاعتراف واختيار عرض المنحة دخلًا مؤجلًا. قارن الإهلاك الخطي بإهلاك 40% من الرصيد المتناقص مع تسوية المتبقي في السنة الأخيرة لإتمام العمر المحدد.",
          "A machine costs $40,000, has a four-year useful life and nil residual value. A government grant covers 50% of its cost, or $20,000. Assume recognition conditions are met and the grant is presented as deferred income. Compare straight-line depreciation with 40% reducing balance, clearing the remaining balance in the final year to meet the specified life.",
        ),
        calculations: [
          text(
            "القسط الثابت: إهلاك كل سنة = 40,000 ÷ 4 = 10,000؛ إيراد المنحة المقابل = 20,000 ÷ 4 = 5,000. إجمالي كل منهما خلال أربع سنوات 40,000 و20,000.",
            "Straight line: annual depreciation = $40,000 ÷ 4 = $10,000; related annual grant income = $20,000 ÷ 4 = $5,000. Four-year totals are $40,000 and $20,000 respectively.",
          ),
          text(
            "الرصيد المتناقص: إهلاك السنوات 1–3 = 16,000 ثم 9,600 ثم 5,760؛ الرصيد الباقي للسنة 4 = 8,640. إيراد المنحة المقابل = 8,000 ثم 4,800 ثم 2,880 ثم 4,320؛ مجموعه 20,000.",
            "Reducing balance: depreciation in years 1–3 is $16,000, $9,600 and $5,760; the remaining year-four amount is $8,640. Corresponding grant income is $8,000, $4,800, $2,880 and $4,320, totalling $20,000.",
          ),
          text(
            "بديل العرض بخصم المنحة من الأصل يخفض الأساس القابل للإهلاك إلى 20,000، ويخفض كل قسط إهلاك في هذا المثال إلى نصف القسط الإجمالي المقابل؛ لا يُثبت حينئذ إيراد منحة منفصل.",
            "The alternative presentation deducts the grant from the asset, leaving a $20,000 depreciable base and halving each corresponding gross depreciation charge in this example; no separate grant income is then recorded.",
          ),
        ],
        conclusion: text(
          "نمط الإهلاك يحدد توقيت تحرير المنحة، لكن إجمالي الأثر الصافي عبر عمر الأصل يبقى 20,000 دولار قبل أي ضرائب أو تغييرات تقدير.",
          "The depreciation pattern determines grant-release timing, but the total net effect over the asset's life remains $20,000 before tax or estimate changes.",
        ),
        journalEntries: [
          {
            label: text(
              "عند استحقاق المنحة وتحصيلها، بطريقة الدخل المؤجل",
              "On entitlement and collection, deferred-income method",
            ),
            debit: text("النقدية", "Cash"),
            credit: text("دخل منحة مؤجل", "Deferred grant income"),
            amount: text("20,000", "20,000"),
          },
          {
            label: text(
              "إهلاك السنة الأولى بطريقة القسط الثابت",
              "Year-one straight-line depreciation",
            ),
            debit: text("مصروف إهلاك", "Depreciation expense"),
            credit: text("مجمع إهلاك", "Accumulated depreciation"),
            amount: text("10,000", "10,000"),
          },
          {
            label: text(
              "تحرير منحة السنة الأولى بطريقة القسط الثابت",
              "Year-one straight-line grant release",
            ),
            debit: text("دخل منحة مؤجل", "Deferred grant income"),
            credit: text("إيراد منحة", "Grant income"),
            amount: text("5,000", "5,000"),
          },
        ],
        reference: "IAS 20.7, 12, 24–27; IAS 16.50–62",
      },
    ],
  },
  "IAS 23": {
    sections: [
      {
        title: text(
          "الإنفاق على أصل مؤهل بتمويل عام: عامل الزمن حاسم",
          "General borrowings for a qualifying asset: timing matters",
        ),
        explanation: text(
          "عند تمويل أصل مؤهل من اقتراض عام، تُحسب نسبة الرسملة من المتوسط المرجح لتكاليف القروض المعنية ثم تطبق على الإنفاق المؤهل خلال المدة التي تتحقق فيها شروط بدء الرسملة. مبلغ يصرف في أول السنة يتحمل وزنًا زمنيًا مختلفًا عن مبلغ يصرف في أول الربع الأخير. لا يتجاوز مجموع الرسملة تكاليف الاقتراض الفعلية للفترة، وتبقى التكاليف غير المؤهلة مصروفًا.",
          "For a qualifying asset funded by general borrowings, derive the capitalisation rate from the weighted average borrowing costs and apply it to qualifying expenditure for the period in which commencement criteria are met. Spending at the year's start has a different time weight from spending at the final quarter's start. Capitalisation cannot exceed borrowing costs actually incurred; ineligible costs remain an expense.",
        ),
        keyPoints: [
          text(
            "احسب معدل كل قرض موزونًا بحجم القرض، ثم زن كل دفعة إنفاق بعدد أشهرها.",
            "Weight each borrowing rate by its loan balance, then time-weight each expenditure tranche.",
          ),
          text(
            "وجود قرض طوال السنة لا يجعل إنفاق أكتوبر كأنه أنفق في يناير.",
            "A loan outstanding all year does not make October expenditure a January expenditure.",
          ),
        ],
        reference: "IAS 23.8, 14, 17–18",
      },
    ],
    workedExamples: [
      {
        title: text(
          "آلة كهرومائية وقرضان عامان بإنفاق مرحلي",
          "Hydroelectric machine with two general loans and staged expenditure",
        ),
        facts: text(
          "بدأ إنشاء آلة مؤهلة للرسملة في 1 يناير 20X6، واستمرت أنشطة تجهيزها خلال السنة. لدى المنشأة قرضان عامان قائمان طوال السنة: 120 مليون دولار بفائدة 10% و80 مليونًا بفائدة 9.5%. أنفقت 30 مليونًا على الآلة في 1 يناير و20 مليونًا إضافية في 1 أكتوبر. يفترض المثال عدم وجود قروض مخصصة أو أصول مؤهلة أخرى تؤثر في الحد الأقصى.",
          "Construction of a qualifying machine starts on 1 January 20X6 and necessary preparation continues through the year. The entity has two general loans outstanding throughout: $120m at 10% and $80m at 9.5%. It spends $30m on the machine on 1 January and another $20m on 1 October. Assume no specific borrowings or other qualifying assets affect the cap.",
        ),
        calculations: [
          text(
            "نسبة الرسملة = (120 × 10% + 80 × 9.5%) ÷ (120 + 80) = 19.6 ÷ 200 = 9.8%.",
            "Capitalisation rate = (120 × 10% + 80 × 9.5%) ÷ (120 + 80) = 19.6 ÷ 200 = 9.8%.",
          ),
          text(
            "نصيب إنفاق يناير = 30 × 9.8% × 12÷12 = 2.94 مليون؛ ونصيب إنفاق أكتوبر = 20 × 9.8% × 3÷12 = 0.49 مليون.",
            "January expenditure contributes $30m × 9.8% × 12÷12 = $2.94m; October expenditure contributes $20m × 9.8% × 3÷12 = $0.49m.",
          ),
          text(
            "تكلفة الاقتراض المرسملة = 3.43 مليون. إجمالي فائدة القرضين خلال السنة = 19.6 مليون؛ فلا يتجاوز المبلغ المرسمل السقف. إذا لم توجد أصول مؤهلة أخرى، يبقى 16.17 مليون مصروف تمويل.",
            "Capitalised borrowing cost is $3.43m. Total interest on both loans for the year is $19.6m, so the capitalised amount is below the cap. With no other qualifying assets, the remaining $16.17m is finance expense.",
          ),
        ],
        conclusion: text(
          "يضاف 3.43 مليون إلى تكلفة الآلة تحت الإنشاء، ولا تُرسمل فائدة إنفاق أكتوبر إلا عن الأشهر الثلاثة الأخيرة من السنة.",
          "Add $3.43m to the machine under construction; interest on the October tranche is capitalised only for the year's final three months.",
        ),
        journalEntries: [
          {
            label: text("رسملة التكلفة المؤهلة", "Capitalise eligible borrowing cost"),
            debit: text("آلة تحت الإنشاء", "Machine under construction"),
            credit: text("فوائد مستحقة أو نقدية", "Interest payable or cash"),
            amount: text("3.43 مليون", "$3.43m"),
          },
        ],
        reference: "IAS 23.8, 14, 17–18",
      },
    ],
  },
  "IFRS 2": {
    sections: [
      {
        title: text(
          "خدمة الموظف تُقاس عبر فترة الاستحقاق",
          "Employee services accrue over the vesting period",
        ),
        explanation: text(
          "في منح الخيارات المسددة بأسهم للموظفين، تُستخدم القيمة العادلة للخيار في تاريخ المنح أساسًا لقياس خدمات الموظفين. شرط البقاء في الخدمة لا يُخفض قيمة الخيار المقاسة؛ بدلًا من ذلك، يُحدَّث عدد الخيارات المتوقع استحقاقها عند كل تاريخ تقرير. المصروف التراكمي يساوي عدد الأدوات المتوقع استحقاقها × قيمتها في تاريخ المنح × نسبة فترة الخدمة المنقضية. قيد كل سنة هو الفرق بين المصروف التراكمي الجديد وما سُجل سابقًا، ويقابله رصيد في حقوق الملكية. عند الممارسة، تُضاف حصيلة سعر الممارسة إلى حقوق الملكية ولا يُعاد قياس تكلفة الخدمة بسبب سعر السهم اللاحق.",
          "For equity-settled employee options, grant-date option fair value provides the basis for measuring employee services. A service vesting condition does not reduce the measured option value; instead, update the number expected to vest at each reporting date. Cumulative expense equals expected vesting instruments × grant-date value × proportion of service period completed. Each year's charge is the revised cumulative amount less previous charges, with a corresponding equity credit. On exercise, the exercise proceeds enter equity; later share prices do not remeasure the service cost.",
        ),
        keyPoints: [
          text(
            "لا تضرب القيمة العادلة بسعر الممارسة؛ لكل منهما دور مختلف.",
            "Do not multiply fair value by the exercise price; they serve different purposes.",
          ),
          text(
            "أعد تقدير المغادرين كل سنة، ثم احسب مصروف السنة من تغير الرصيد التراكمي.",
            "Revise expected leavers each year, then derive annual expense from the change in cumulative cost.",
          ),
          text(
            "تحقق من توازن قيد الإصدار: النقد مع احتياطي الخيارات في المدين يساوي رأس المال والعلاوة في الدائن.",
            "Check the issue entry balances: cash plus the options reserve debits equal share capital plus premium credits.",
          ),
        ],
        reference: "IFRS 2.14–23",
      },
    ],
    workedExamples: [
      {
        title: text("برنامج 800 موظف خلال ثلاث سنوات", "Three-year grant to 800 employees"),
        facts: text(
          "مُنح كل من 800 موظف 200 خيار، قيمته العادلة في تاريخ المنح 7.50 دولارات وسعر ممارسته 1.50 دولار. يشترط البقاء ثلاث سنوات. التقدير النهائي للمغادرين 60 موظفًا، ومارس 740 موظفًا الخيارات. القيمة الاسمية للسهم دولار واحد.",
          "Each of 800 employees receives 200 options, with grant-date fair value $7.50 and exercise price $1.50. Vesting requires three years' service. Ultimately 60 employees leave and the remaining 740 exercise. Par value is $1 per share.",
        ),
        calculations: [
          text(
            "عدد الخيارات المستحقة = 740 × 200 = 148,000.",
            "Vested options = 740 × 200 = 148,000.",
          ),
          text(
            "إجمالي تكلفة الخدمات = 148,000 × 7.50 = 1,110,000 دولار تُثبت عبر فترة الخدمة.",
            "Total service cost = 148,000 × $7.50 = $1,110,000 across the service period.",
          ),
          text(
            "حصيلة الممارسة = 148,000 × 1.50 = 222,000 دولار؛ رأس المال الاسمي = 148,000 دولار؛ العلاوة = 222,000 + 1,110,000 − 148,000 = 1,184,000 دولار.",
            "Exercise proceeds = 148,000 × $1.50 = $222,000; par share capital = $148,000; share premium = $222,000 + $1,110,000 − $148,000 = $1,184,000.",
          ),
        ],
        conclusion: text(
          "المصروف النهائي 1,110,000؛ يتوازن قيد الإصدار بمجموع 1,332,000 على كل جانب.",
          "Final service expense is $1,110,000; the share issue entry balances at $1,332,000 on each side.",
        ),
        journalEntries: [
          {
            label: text(
              "تكلفة الخدمة الإجمالية خلال السنوات الثلاث",
              "Total service cost over three years",
            ),
            debit: text("مصروف موظفين", "Staff expense"),
            credit: text("احتياطي مدفوعات أسهم", "Share-based-payment reserve"),
            amount: text("1,110,000 دولار إجمالًا", "$1,110,000 in total"),
          },
          {
            label: text("الممارسة — قيد مركب", "Exercise — compound entry"),
            debit: text("نقدية 222,000 + احتياطي 1,110,000", "Cash 222,000 + reserve 1,110,000"),
            credit: text(
              "رأس مال 148,000 + علاوة إصدار 1,184,000",
              "Share capital 148,000 + share premium 1,184,000",
            ),
            amount: text("1,332,000 لكل جانب", "1,332,000 each side"),
          },
        ],
        reference: "IFRS 2.14–23",
      },
    ],
  },
  "IAS 21": {
    sections: [
      {
        title: text(
          "المعاملة الأجنبية: ما الذي يعاد ترجمته؟",
          "Foreign-currency transactions: what is retranslated?",
        ),
        explanation: text(
          "ابدأ بتحديد العملة الوظيفية من البيئة الاقتصادية الأساسية، ثم حوّل المعاملة الأجنبية بسعر الصرف الفوري يوم نشوئها. عند الإقفال، أعد ترجمة البنود النقدية غير المسددة بسعر الإقفال؛ يظهر فرق الصرف عادة في الربح أو الخسارة. أما الأصل غير النقدي المقاس بالتكلفة التاريخية فيبقى بسعر تاريخ المعاملة. اختيار مجموعة لعملة عرض مختلفة لا يبدّل عملة الشركة التابعة الوظيفية وحده.",
          "First establish functional currency from the primary economic environment, then translate a foreign-currency transaction at the transaction-date spot rate. At year-end, retranslate outstanding monetary items at the closing rate; the exchange difference normally enters profit or loss. A non-monetary asset measured at historical cost stays at its transaction-date rate. A group's different presentation currency does not by itself change a subsidiary's functional currency.",
        ),
        keyPoints: [
          text(
            "اسأل: هل سيُسدد البند بعدد ثابت أو محدد من وحدات النقد الأجنبي؟",
            "Ask whether the item will be settled in a fixed or determinable number of foreign-currency units.",
          ),
          text(
            "لا تُعد ترجمة المخزون التاريخي لمجرد أن الدائن المقابل له ما زال مفتوحًا.",
            "Do not retranslate historical-cost inventory merely because the related payable remains outstanding.",
          ),
          text(
            "ترجمة قوائم عملية أجنبية إلى عملة عرض المجموعة خطوة منفصلة عن إعادة قياس المعاملة داخل دفاتر التابعة.",
            "Translation of a foreign operation into the group's presentation currency is distinct from remeasurement within the subsidiary's books.",
          ),
        ],
        reference: "IAS 21.8–12, 21–23, 28, 38–39",
      },
    ],
    workedExamples: [
      {
        title: text(
          "دائن تجاري بالوون عند انخفاض قيمة الدولار",
          "Won-denominated payable as the dollar weakens",
        ),
        facts: text(
          "في 1 ديسمبر اشترت منشأة موادًا بمبلغ 300,000 وون على الحساب. عملتها الوظيفية الدولار: الدولار = 20 وون عند الشراء و16 وون عند 31 ديسمبر. لم تُسدد الفاتورة ولم تُستخدم المواد.",
          "On 1 December an entity bought materials on credit for 300,000 won. Its functional currency is the US dollar: US$1 = 20 won at purchase and 16 won at 31 December. The invoice remains unpaid and the materials unused.",
        ),
        calculations: [
          text(
            "التكلفة والدائن عند الشراء = 300,000 ÷ 20 = 15,000 دولار.",
            "Initial inventory and payable = 300,000 ÷ 20 = US$15,000.",
          ),
          text(
            "الدائن النقدي عند الإقفال = 300,000 ÷ 16 = 18,750 دولار.",
            "Closing monetary payable = 300,000 ÷ 16 = US$18,750.",
          ),
          text(
            "خسارة الصرف = 18,750 − 15,000 = 3,750 دولار؛ يظل المخزون التاريخي 15,000 دولار.",
            "Exchange loss = 18,750 − 15,000 = US$3,750; historical-cost inventory remains US$15,000.",
          ),
        ],
        conclusion: text(
          "المركز المالي: مخزون 15,000 ودائنون 18,750؛ الربح أو الخسارة: خسارة صرف 3,750.",
          "Financial position: inventory 15,000 and payable 18,750; profit or loss: exchange loss 3,750.",
        ),
        journalEntries: [
          {
            label: text("عند شراء المواد", "On purchase"),
            debit: text("مخزون مواد", "Materials inventory"),
            credit: text("دائنون تجاريون", "Trade payables"),
            amount: text("15,000 دولار", "US$15,000"),
          },
          {
            label: text("في 31 ديسمبر", "At 31 December"),
            debit: text("خسارة صرف", "Exchange loss"),
            credit: text("دائنون تجاريون", "Trade payables"),
            amount: text("3,750 دولار", "US$3,750"),
          },
        ],
        reference: "IAS 21.21–23, 28",
      },
    ],
  },
  "IAS 33": {
    sections: [
      {
        title: text(
          "الحقوق والتحويل: افصل البسط عن المقام",
          "Rights and convertibles: separate numerator from denominator",
        ),
        explanation: text(
          "ربحية السهم الأساسية تقسم الربح المنسوب إلى حملة الأسهم العادية على المتوسط المرجح لعدد الأسهم. تُستبعد توزيعات الأسهم الممتازة من البسط، لكن توزيعات الأسهم العادية وتحويل الربح إلى الاحتياطيات لا يُخصمان مرة أخرى. إصدار الحقوق بسعر أقل من السوق يتضمن عنصر منحة يستوجب تعديل عدد الأسهم السابق للإصدار بمعامل القيمة العادلة قبل الحق إلى السعر النظري بعد الحق. عند اختبار قرض قابل للتحويل للمخفضة، افترض التحويل من بداية الفترة إن كان قائمًا حينها: أضف الفائدة بعد الضريبة إلى البسط والأسهم الناشئة إلى المقام، ثم ادرج الأثر فقط إن كان مخفِّضًا.",
          "Basic EPS divides profit attributable to ordinary shareholders by weighted-average ordinary shares. Preference dividends reduce the numerator; ordinary dividends and reserve transfers are not deducted again. A below-market rights issue contains a bonus element, requiring the pre-issue shares to be adjusted by the pre-rights fair value divided by theoretical ex-rights price. For a convertible loan, assume conversion from the period's start if outstanding then: add after-tax interest to the numerator and conversion shares to the denominator, including the effect only if dilutive.",
        ),
        keyPoints: [
          text(
            "احسب السعر النظري للحقوق دون تقريب مبكر، ثم زن الأسهم قبل الإصدار وبعده زمنيًا.",
            "Calculate theoretical ex-rights price without premature rounding, then time-weight pre- and post-issue shares.",
          ),
          text(
            "لا تفترض أن كل أداة قابلة للتحويل مخفِّضة؛ قارن الربحية الناتجة بالأساسية.",
            "Do not assume every convertible is dilutive; compare resulting EPS with basic EPS.",
          ),
          text(
            "اعرض الأساسية والمخفضة حتى عندما تتساويان لعدم وجود أسهم محتملة مخفِّضة.",
            "Present basic and diluted EPS even when equal because no dilutive potential shares exist.",
          ),
        ],
        reference: "IAS 33.12–15, 19–27, 31–40, A2",
      },
    ],
    workedExamples: [
      {
        title: text("إصدار حقوق بنسبة سهم لكل خمسة", "One-for-five rights issue"),
        facts: text(
          "الربح العائد للأسهم العادية 1,127,000 دولار، والأسهم العادية 4,120,000 في بداية السنة. أصدرت الشركة في 1 أكتوبر سهمًا لكل خمسة بسعر 1.20 دولار؛ سعر السهم قبل الحق 1.78 دولار. لا توجد أسهم محتملة مخفِّضة أخرى.",
          "Profit attributable to ordinary shares is $1,127,000 and 4,120,000 ordinary shares were outstanding at the year's start. On 1 October the entity offered one new share for every five at $1.20; the pre-rights price was $1.78. No other dilutive potential shares exist.",
        ),
        calculations: [
          text(
            "الأسهم الجديدة = 4,120,000 ÷ 5 = 824,000؛ الأسهم بعد الإصدار = 4,944,000.",
            "New shares = 4,120,000 ÷ 5 = 824,000; post-issue shares = 4,944,000.",
          ),
          text(
            "السعر النظري = (5 × 1.78 + 1.20) ÷ 6 = 1.683333؛ معامل المنحة = 1.78 ÷ 1.683333 ≈ 1.057426.",
            "Theoretical ex-rights price = (5 × 1.78 + 1.20) ÷ 6 = 1.683333; bonus factor = 1.78 ÷ 1.683333 ≈ 1.057426.",
          ),
          text(
            "المتوسط المرجح ≈ 4,120,000 × 1.057426 × 9/12 + 4,944,000 × 3/12 = 4,503,446 سهمًا.",
            "Weighted average ≈ 4,120,000 × 1.057426 × 9/12 + 4,944,000 × 3/12 = 4,503,446 shares.",
          ),
          text(
            "الربحية = 1,127,000 ÷ 4,503,446 ≈ 0.250253 دولار = 25.03 سنتًا للسهم.",
            "EPS = 1,127,000 ÷ 4,503,446 ≈ $0.250253 = 25.03 cents per share.",
          ),
        ],
        conclusion: text(
          "الأساسية والمخفضة 25.03 سنتًا، على افتراض عدم وجود أدوات أخرى قد تخفّض الربحية.",
          "Basic and diluted EPS are 25.03 cents, assuming no other potentially dilutive instruments.",
        ),
        journalEntries: [],
        reference: "IAS 33.19–27, A2",
      },
    ],
  },
  "IFRS 15": {
    sections: [
      {
        title: text(
          "إعادة الشراء: لماذا قد لا يكون البيع إيرادًا؟",
          "Repurchase: why a sale may not be revenue",
        ),
        explanation: text(
          "انظر إلى حق العميل في توجيه استخدام الأصل والحصول على منافعه، لا إلى عنوان عقد البيع. إذا التزم البائع بإعادة الشراء أو احتفظ بحق شراء الأصل نفسه، فلا يحصل العميل عادة على السيطرة. عندما لا يقل سعر إعادة الشراء عن سعر البيع الأصلي تعالج المتحصلات تمويلًا: يبقى الأصل في دفاتر البائع ويثبت التزام مالي وتكلفة تمويل. أما إذا كان السعر أقل، فتُفحص معالجة الإيجار وفق IFRS 16. خيار إعادة الشراء الذي يملكه العميل يحتاج تحليلًا منفصلًا للحافز الاقتصادي وسعر السوق المتوقع، ولا يُعامل آليًا كخيار البائع.",
          "Look beyond the sale label to the customer's ability to direct use of and obtain benefits from the asset. If the seller is obliged or has the right to repurchase the same asset, the customer generally does not obtain control. A repurchase price at least equal to the original selling price makes the proceeds a financing arrangement: the seller retains the asset and recognises a financial liability and finance cost. A lower price generally leads to lease accounting under IFRS 16. A customer-held put option requires a separate analysis of economic incentive and expected market value; it is not automatically treated like the seller's option.",
        ),
        keyPoints: [
          text(
            "تحقق من صاحب الخيار: البائع أم المشتري، ومن سعر الممارسة مقارنة بسعر البيع والقيمة السوقية المتوقعة.",
            "Identify who holds the option and compare the exercise price with both the selling price and expected market value.",
          ),
          text(
            "في ترتيب التمويل لا يُشطب الأصل ولا تُثبت إيرادات بيع عند استلام النقد.",
            "Under a financing arrangement, the asset remains recognised and cash receipt is not sale revenue.",
          ),
          text(
            "راجع ما يحدث إذا انتهى خيار البائع دون ممارسة؛ عندئذ يعاد تقييم الاعتراف بالإيراد.",
            "If the seller's option expires unexercised, reassess revenue recognition at that point.",
          ),
        ],
        reference: "IFRS 15.B64–B76",
      },
      {
        title: text(
          "الأصيل والوكيل: الإيراد الإجمالي أم العمولة؟",
          "Principal or agent: gross revenue or commission?",
        ),
        explanation: text(
          "قبل تحديد رقم الإيراد، حدّد السلعة أو الخدمة المحددة التي وُعد بها العميل واسأل هل سيطرت عليها المنشأة قبل نقلها. الأصيل يثبت المقابل الإجمالي الذي يتوقع استحقاقه مقابل أدائه؛ الوكيل يثبت الرسم أو العمولة مقابل ترتيب تقديم طرف آخر للسلعة أو الخدمة. المسؤولية الأساسية عن الوفاء، ومخاطر المخزون، وحرية التسعير مؤشرات مساعدة وليست اختبارات مستقلة أو بديلًا عن اختبار السيطرة.",
          "Before measuring revenue, identify the specified good or service and ask whether the entity controls it before transfer. A principal recognises the gross consideration to which it expects to be entitled for its performance; an agent recognises the fee or commission for arranging another party's provision. Primary fulfilment responsibility, inventory risk and pricing discretion are supporting indicators, not independent substitutes for the control assessment.",
        ),
        keyPoints: [
          text(
            "المنصة التي ترتب البيع فقط لا تعرض قيمة بضاعة المورد كإيرادها تلقائيًا.",
            "A platform that merely arranges a sale does not automatically report the supplier's gross sales as its own revenue.",
          ),
          text(
            "وثّق الحكم لكل سلعة أو خدمة محددة في العقد؛ قد تختلف النتيجة داخل العقد الواحد.",
            "Document the conclusion for each specified good or service; outcomes can differ within one contract.",
          ),
        ],
        reference: "IFRS 15.B34–B38",
      },
      {
        title: text(
          "الأمانة التجارية والفاتورة مع الاحتفاظ بالبضاعة",
          "Consignment and bill-and-hold",
        ),
        explanation: text(
          "تسليم البضاعة إلى موزع لا يساوي انتقال السيطرة عندما يستطيع المورد استردادها أو نقلها إلى موزع آخر، ولا يلتزم الموزع بسداد ثمنها دون شرط؛ عندئذ تبقى ضمن مخزون المورد إلى وقوع البيع النهائي أو انتقال السيطرة فعلًا. وفي ترتيب الفاتورة مع الاحتفاظ بالبضاعة قد تنتقل السيطرة قبل التسليم المادي، لكن يلزم سبب جوهري للترتيب، وتحديد البضاعة منفصلة باعتبارها للعميل، وجاهزيتها للنقل، وعدم قدرة البائع على استخدامها أو تحويلها لعميل آخر. كما تُقيّم خدمة الحفظ المتبقية بوصفها التزام أداء محتملًا.",
          "Delivery to a dealer is not a transfer of control when the supplier can recall or redirect the goods and the dealer has no unconditional payment obligation; inventory remains with the supplier until the ultimate sale or another genuine transfer of control. In a bill-and-hold arrangement, control can pass before physical delivery only if the arrangement has a substantive reason, the goods are separately identified for the customer, are ready for transfer, and cannot be used or redirected by the seller. Any remaining custodial service is also assessed as a possible performance obligation.",
        ),
        keyPoints: [
          text(
            "الفاتورة أو الحيازة المادية وحدهما لا يحسمان توقيت الإيراد.",
            "An invoice or physical possession alone does not settle the revenue timing.",
          ),
          text(
            "مخزون الأمانة يظل لدى المورد إذا لم تنتقل السيطرة إلى الموزع.",
            "Consigned inventory remains with the supplier if the dealer has not obtained control.",
          ),
        ],
        reference: "IFRS 15.B77–B82",
      },
    ],
    workedExamples: [
      {
        title: text(
          "تحصيل مليون مع خيار إعادة الشراء",
          "One million received with a repurchase call option",
        ),
        facts: text(
          "في 1 يناير نقلت منشأة أصلًا إلى عميل مقابل 1,000,000، واحتفظت بخيار إعادة شراء الأصل نفسه في نهاية السنة مقابل 1,100,000. يفترض المثال ممارسة الخيار وعدم وجود عناصر تعاقدية أخرى.",
          "On 1 January an entity transfers an asset to a customer for 1,000,000 but retains an option to repurchase that same asset at year-end for 1,100,000. Assume the option is exercised and there are no other contractual components.",
        ),
        calculations: [
          text(
            "سعر إعادة الشراء أعلى من سعر التحصيل، والعميل مقيد بخيار البائع؛ لا يتحقق بيع لأغراض الإيراد.",
            "The repurchase price exceeds the proceeds and the seller's option constrains the customer; no revenue sale occurs.",
          ),
          text(
            "فرق التمويل خلال السنة = 1,100,000 − 1,000,000 = 100,000.",
            "Finance cost for the year = 1,100,000 − 1,000,000 = 100,000.",
          ),
          text(
            "يبقى الأصل في الدفاتر ويستمر قياسه وفق المعيار الذي كان ينطبق عليه قبل الترتيب.",
            "The asset remains recognised and continues to be measured under its pre-existing applicable Standard.",
          ),
        ],
        conclusion: text(
          "المتحصلات التزام تمويلي، لا إيراد بقيمة مليون. عند إعادة الشراء يُسوى الالتزام البالغ 1,100,000.",
          "The proceeds are a financing liability, not revenue of one million. Repurchase settles the 1,100,000 liability.",
        ),
        journalEntries: [
          {
            label: text("عند التحصيل", "On receipt"),
            debit: text("النقدية", "Cash"),
            credit: text("التزام تمويلي", "Financing liability"),
            amount: text("1,000,000", "1,000,000"),
          },
          {
            label: text("إثبات تكلفة التمويل", "Accrue finance cost"),
            debit: text("تكلفة تمويل", "Finance cost"),
            credit: text("التزام تمويلي", "Financing liability"),
            amount: text("100,000", "100,000"),
          },
          {
            label: text("عند ممارسة الخيار", "On exercise"),
            debit: text("التزام تمويلي", "Financing liability"),
            credit: text("النقدية", "Cash"),
            amount: text("1,100,000", "1,100,000"),
          },
        ],
        reference: "IFRS 15.B64–B68",
      },
      {
        title: text("اشتراك مجلات مدفوع مقدمًا", "Prepaid magazine subscription"),
        facts: text(
          "قبض ناشر 240,000 مقدمًا مقابل 24 عددًا شهريًا متماثلًا من مجلة. عند نهاية السنة أرسل ستة أعداد فقط، ولا توجد التزامات أخرى في العقد.",
          "A publisher receives 240,000 in advance for 24 equivalent monthly magazine issues. By year-end it has delivered only six issues and there are no other contractual promises.",
        ),
        calculations: [
          text(
            "نصيب العدد الواحد = 240,000 ÷ 24 = 10,000.",
            "Allocation per issue = 240,000 ÷ 24 = 10,000.",
          ),
          text(
            "الإيراد المتحقق بعد تسليم ستة أعداد = 6 × 10,000 = 60,000.",
            "Revenue on delivering six issues = 6 × 10,000 = 60,000.",
          ),
          text(
            "التزام العقد للأعداد الثمانية عشر الباقية = 240,000 − 60,000 = 180,000.",
            "Contract liability for the remaining 18 issues = 240,000 − 60,000 = 180,000.",
          ),
        ],
        conclusion: text(
          "لا يتحول المقبوض مقدمًا كله إلى إيراد عند التحصيل؛ يعترف فقط بقيمة الأعداد المسلّمة.",
          "Advance cash does not all become revenue on receipt; only the delivered issues are recognised.",
        ),
        journalEntries: [
          {
            label: text("عند قبض الاشتراك", "On subscription receipt"),
            debit: text("النقدية", "Cash"),
            credit: text("التزام عقد", "Contract liability"),
            amount: text("240,000", "240,000"),
          },
          {
            label: text("بعد إرسال ستة أعداد", "After six issues"),
            debit: text("التزام عقد", "Contract liability"),
            credit: text("إيراد الاشتراكات", "Subscription revenue"),
            amount: text("60,000", "60,000"),
          },
        ],
        reference: "IFRS 15.22–30, 31–38, 106",
      },
      {
        title: text("خصم كميات بأثر رجعي", "Retrospective volume discount"),
        facts: text(
          "تبيع منشأة حواسيب بسعر 500 دولار للوحدة، ويصبح السعر 450 دولارًا لكل الوحدات المبيعة خلال سنة العقد إذا تجاوزت مشتريات العميل 500 وحدة. في الربع الأول باعت 70 وحدة وتوقعت، على أساس الأدلة المتاحة، عدم بلوغ الحد. في الربع الثاني باعت 250 وحدة أخرى وأصبح تجاوز الحد متوقعًا بدرجة تستوفي قيد المقابل المتغير.",
          "An entity sells computers for $500 each, reduced retrospectively to $450 for every unit bought during the contract year if the customer buys more than 500. It sells 70 in quarter one and, on the available evidence, does not expect the threshold to be met. It sells another 250 in quarter two, when meeting the threshold becomes sufficiently probable under the variable-consideration constraint.",
        ),
        calculations: [
          text(
            "إيراد الربع الأول = 70 × 500 = 35,000 دولار.",
            "Quarter-one revenue = 70 × $500 = $35,000.",
          ),
          text(
            "القيمة التراكمية المحدثة للوحدات الـ320 = (70 + 250) × 450 = 144,000 دولار.",
            "Revised cumulative consideration for 320 units = (70 + 250) × $450 = $144,000.",
          ),
          text(
            "إيراد الربع الثاني = 144,000 − 35,000 المعترف بها سابقًا = 109,000 دولار؛ أو 250 × 450 − 70 × 50 = 109,000 دولار.",
            "Quarter-two revenue = $144,000 − $35,000 already recognised = $109,000; equivalently 250 × $450 − 70 × $50 = $109,000.",
          ),
        ],
        conclusion: text(
          "التغيير في تقدير المقابل المتغير يعدل الإيراد التراكمي عند ظهور المعلومات الجديدة؛ مبلغ 3,500 دولار تصحيح لخصم الوحدات السابقة، وليس مصروف بيع جديدًا. يعاد تقييم التقدير في كل تاريخ تقرير.",
          "The revised estimate of variable consideration adjusts cumulative revenue as new information becomes available; $3,500 corrects the discount on earlier units, rather than being a new selling expense. Reassess the estimate at each reporting date.",
        ),
        journalEntries: [
          {
            label: text("إيراد وحدات الربع الأول", "Quarter-one units"),
            debit: text("ذمم مدينة", "Receivable"),
            credit: text("إيراد", "Revenue"),
            amount: text("35,000", "35,000"),
          },
          {
            label: text("وحدات الربع الثاني بالسعر المحدث", "Quarter-two units at revised price"),
            debit: text("ذمم مدينة", "Receivable"),
            credit: text("إيراد", "Revenue"),
            amount: text("112,500", "112,500"),
          },
          {
            label: text("تعديل خصم الوحدات السابقة", "True-up for earlier units"),
            debit: text("إيراد", "Revenue"),
            credit: text(
              "التزام رد أو تخفيض ذمم مدينة بحسب شروط التسوية",
              "Refund liability or receivable reduction, depending on settlement terms",
            ),
            amount: text("3,500", "3,500"),
          },
        ],
        reference: "IFRS 15.50–59, 87–90",
      },
      {
        title: text("بيع بتمويل مؤجل لسنتين", "Sale with two-year deferred financing"),
        facts: text(
          "سُلّم منتج للعميل في 31 ديسمبر 20X7 وانتقلت إليه السيطرة. سعره النقدي 10,000 دولار وتكلفته 8,000 دولار، لكن العميل سيدفع 12,100 دولار بعد سنتين. يفترض المثال أن الفرق يمثل مكون تمويل مهمًا وأن معدل الخصم الملائم عند نشأة العقد 10% سنويًا.",
          "A product is delivered and control passes on 31 December 20X7. Its cash selling price is $10,000 and cost $8,000, but the customer will pay $12,100 two years later. Assume the difference is a significant financing component and the appropriate rate at contract inception is 10% annually.",
        ),
        calculations: [
          text(
            "10,000 × 1.10² = 12,100؛ لذلك لا يُعرض كامل المبلغ المؤجل إيرادًا عند البيع.",
            "$10,000 × 1.10² = $12,100; the entire deferred amount is not revenue on sale.",
          ),
          text(
            "في 31 ديسمبر 20X7: الإيراد والذمم المدينة 10,000، وتكلفة المبيعات 8,000.",
            "At 31 December 20X7: revenue and receivable $10,000, and cost of sales $8,000.",
          ),
          text(
            "في نهاية 20X8: دخل فائدة 10,000 × 10% = 1,000؛ رصيد الذمم 11,000.",
            "At the end of 20X8: interest income $10,000 × 10% = $1,000; receivable $11,000.",
          ),
          text(
            "في نهاية 20X9: دخل فائدة 11,000 × 10% = 1,100؛ رصيد الذمم 12,100 يسوى عند التحصيل.",
            "At the end of 20X9: interest income $11,000 × 10% = $1,100; receivable $12,100 settled on collection.",
          ),
        ],
        conclusion: text(
          "يفصل الإيراد عند انتقال السيطرة عن دخل التمويل اللاحق، مع مراعاة متطلبات قياس الذمم وخسائرها الائتمانية بموجب IFRS 9.",
          "Separate revenue when control transfers from subsequent financing income, while applying IFRS 9 to receivable measurement and credit losses.",
        ),
        journalEntries: [
          {
            label: text("عند تسليم المنتج", "On product delivery"),
            debit: text("ذمم مدينة", "Receivable"),
            credit: text("إيراد", "Revenue"),
            amount: text("10,000", "10,000"),
          },
          {
            label: text("إخراج تكلفة المنتج", "Recognise product cost"),
            debit: text("تكلفة مبيعات", "Cost of sales"),
            credit: text("مخزون", "Inventory"),
            amount: text("8,000", "8,000"),
          },
          {
            label: text("فائدة 20X8", "20X8 interest"),
            debit: text("ذمم مدينة", "Receivable"),
            credit: text("دخل تمويل", "Finance income"),
            amount: text("1,000", "1,000"),
          },
          {
            label: text("فائدة 20X9", "20X9 interest"),
            debit: text("ذمم مدينة", "Receivable"),
            credit: text("دخل تمويل", "Finance income"),
            amount: text("1,100", "1,100"),
          },
        ],
        reference: "IFRS 15.60–65; IFRS 9.5.5",
      },
      {
        title: text(
          "آلة مع ضمان مطابقة وضمان خدمة ممتد",
          "Machine with assurance and extended service warranties",
        ),
        facts: text(
          "بيعت آلة بمبلغ 196,000 دولار، وهو سعرها المستقل. يضمن البائع مطابقتها للمواصفات لمدة سنة، ويضيف ستة أشهر من خدمة ضمان ممتد يمكن بيعها منفصلة بسعر 4,000 دولارات. يفترض المثال أن الخدمة الممتدة التزام أداء مميز وأن المقابل يدفع عند التسليم.",
          "A machine is sold for $196,000, its stand-alone selling price. The seller assures compliance with specifications for one year and adds six months of extended warranty service available separately for $4,000. Assume the extended service is a distinct performance obligation and payment is made on delivery.",
        ),
        calculations: [
          text(
            "الضمان الأساسي للمطابقة ليس التزام أداء منفصلًا؛ تُقيّم مخصصاته بموجب IAS 37. مجموع الأسعار المستقلة للآلة والخدمة = 196,000 + 4,000 = 200,000.",
            "The basic assurance warranty is not a separate performance obligation; assess its provision under IAS 37. Combined stand-alone prices = $196,000 + $4,000 = $200,000.",
          ),
          text(
            "المقابل المخصص للآلة = 196,000 × 196,000 ÷ 200,000 = 192,080 دولارًا.",
            "Consideration allocated to the machine = $196,000 × $196,000 ÷ $200,000 = $192,080.",
          ),
          text(
            "المقابل المخصص للخدمة الممتدة = 196,000 × 4,000 ÷ 200,000 = 3,920 دولارًا؛ إذا قُدمت بالتساوي خلال ستة أشهر، فحصة الشهر 653.33 تقريبًا مع تسوية التقريب في الشهر الأخير.",
            "Consideration allocated to extended service = $196,000 × $4,000 ÷ $200,000 = $3,920; if provided evenly over six months, each month is approximately $653.33, with rounding adjusted in the final month.",
          ),
        ],
        conclusion: text(
          "يثبت إيراد الآلة عند انتقال السيطرة، ويبقى 3,920 التزام عقد إلى أن تؤدى خدمة الضمان الممتد خلال فترتها؛ لا تُثبت قيمة الخدمة كلها إيرادًا لمجرد أنها وصفت بأنها مجانية.",
          "Recognise machine revenue when control passes and retain $3,920 as a contract liability until extended warranty service is performed; describing the service as free does not make its allocated consideration immediate revenue.",
        ),
        journalEntries: [
          {
            label: text("عند البيع والتحصيل", "On sale and collection"),
            debit: text("النقدية", "Cash"),
            credit: text(
              "إيراد آلة 192,080 + التزام عقد 3,920",
              "Machine revenue $192,080 + contract liability $3,920",
            ),
            amount: text("196,000 لكل جانب", "$196,000 on each side"),
          },
          {
            label: text("بعد اكتمال خدمة الأشهر الستة", "After completing six months of service"),
            debit: text("التزام عقد", "Contract liability"),
            credit: text("إيراد خدمة الضمان", "Warranty service revenue"),
            amount: text("3,920", "3,920"),
          },
        ],
        reference: "IFRS 15.73–86, B28–B33; IAS 37.14",
      },
    ],
  },
  "IFRS 16": {
    sections: [
      {
        title: text(
          "تحديد الإيجار: الأصل المحدد وحق الاستبدال",
          "Identifying a lease: specified assets and substitution rights",
        ),
        explanation: text(
          "ليس كل عقد لتوفير مركبات أو معدات إيجارًا. يبدأ الفحص بوجود أصل محدد صراحة أو ضمنًا، ثم حق العميل في معظم المنافع الاقتصادية وحقه في توجيه كيفية استخدام الأصل وغرضه طوال المدة. استبدال الأصل للإصلاح أو الصيانة وحده لا يلغي تحديده. أما قدرة المورد الحقيقية على اختيار أي أصل بديل متاح عند كل طلب فقد تعني أن العميل اشترى خدمة نقل لا حق استخدام أصل محدد.",
          "Not every contract to provide vehicles or equipment is a lease. First identify an explicit or implicit asset, then assess the customer's rights to substantially all economic benefits and to direct how and for what purpose it is used throughout the period. Substitution solely for repair or maintenance does not remove identification. A supplier's substantive ability to choose any available asset for each request may mean the customer bought transport services rather than the right to use an identified asset.",
        ),
        keyPoints: [
          text(
            "تحديد عشر مركبات بعينها في العقد يختلف عن اشتراط حافلة بأي رقم تتسع لعشرة ركاب.",
            "Naming ten particular vehicles differs from requiring any available ten-seat minibus.",
          ),
          text(
            "السؤال ليس من يملك الأصل قانونيًا، بل من يسيطر على استخدامه خلال فترة العقد.",
            "The test is not legal ownership, but who controls use during the contract period.",
          ),
        ],
        reference: "IFRS 16.9, B9, B13–B30",
      },
      {
        title: text(
          "الدفعة المقدمة ليست جزءًا من التزام الإيجار غير المدفوع",
          "An advance payment is not an unpaid lease liability",
        ),
        explanation: text(
          "في تاريخ بدء الإيجار يقاس الالتزام بالقيمة الحالية للمدفوعات التي لم تُسدّد بعد. المدفوع عند البدء يزيد تكلفة أصل حق الاستخدام، لكنه لا يبقى ضمن الالتزام. لاحقًا تزيد الفائدة الالتزام وتخفضه الدفعات، بينما يُستهلك حق الاستخدام خلال المدة المناسبة. عند عدم انتقال الملكية أو توقع ممارسة خيار شراء، تكون مدة الإهلاك الأقصر من العمر النافع ومدة الإيجار.",
          "At commencement the liability is the present value of payments not yet made. A payment made at commencement increases the right-of-use asset but is not left in the liability. Interest subsequently increases the liability and payments reduce it, while the right-of-use asset is depreciated over the appropriate period. If ownership is not transferred and a purchase option is not reasonably certain, that period is the shorter of useful life and lease term.",
        ),
        keyPoints: [
          text(
            "ميّز تاريخ الدفع: مقدمًا عند البدء أم في نهاية كل فترة.",
            "Distinguish payments at commencement from payments at each period-end.",
          ),
          text(
            "لا تخلط إهلاك حق الاستخدام مع فائدة التزام الإيجار.",
            "Do not combine right-of-use depreciation with lease-liability interest.",
          ),
        ],
        reference: "IFRS 16.23–29, 36–38",
      },
      {
        title: text(
          "البيع وإعادة الاستئجار: الربح عن الحق المنقول فقط",
          "Sale and leaseback: gain only on the right transferred",
        ),
        explanation: text(
          "اختبر أولًا بموجب IFRS 15 هل انتقلت السيطرة بحيث يعد نقل الأصل بيعًا. إذا لم يتحقق بيع، يبقى الأصل في دفاتر البائع-المستأجر ويعالج النقد التزامًا ماليًا. وإذا تحقق بيع بالقيمة العادلة وبشروط سوقية، يقاس أصل حق الاستخدام بنسبة القيمة الدفترية السابقة التي تتعلق بالحق المحتفظ به؛ لا يُثبت من مكسب البيع إلا الجزء المتعلق بالحق المنقول للمشتري-المؤجر. تُراجع كذلك أي فروق عن سعر السوق ومدفوعات الإيجار غير السوقية، ومتطلبات القياس اللاحق لالتزام إعادة الاستئجار.",
          "First apply IFRS 15 to determine whether control transferred and the transfer is a sale. If not, the seller-lessee retains the asset and treats the proceeds as a financial liability. For a sale at fair value on market terms, the right-of-use asset is the proportion of the former carrying amount relating to the right retained; only the gain on the right transferred to the buyer-lessor is recognised. Off-market sale prices or lease payments and the subsequent measurement of the leaseback liability also need assessment.",
        ),
        keyPoints: [
          text(
            "لا تثبت كامل مكسب بيع الأصل عندما يبقى للبائع حق استخدامه.",
            "Do not recognise the entire disposal gain when the seller retains a right to use the asset.",
          ),
          text(
            "وجود مبلغ أعلى من القيمة العادلة قد يعني تمويلًا إضافيًا لا ربحًا إضافيًا.",
            "Proceeds above fair value may represent additional financing, not additional gain.",
          ),
        ],
        reference: "IFRS 16.98–103, 102A; IFRS 15.31–38",
      },
    ],
    workedExamples: [
      {
        title: text(
          "عقدا نقل محلي متشابهان ظاهريًا لكن أحدهما إيجار",
          "Two local transport contracts: only one contains a lease",
        ),
        facts: text(
          "في العقد الأول تتسلم جهة محلية عشر مركبات محددة لخمس سنوات، وتحدد المسارات والأسعار واستخدام المركبات، وتبقى عندها بين الرحلات؛ لا يستبدل المورد مركبة إلا للصيانة أو العطل. في العقد الثاني تطلب جهة محلية حافلة تتسع لعشرة عند الحاجة لمدة سنتين؛ يختار المورد في كل مرة أي حافلة متاحة من أسطوله وتبقى الحافلات في مقره.",
          "Under the first contract a local authority receives ten specified vehicles for five years, sets routes, fares and use, and keeps them between trips; the supplier substitutes one only for repair or maintenance. Under the second contract an authority requests a ten-seat minibus as needed for two years; the supplier selects any available minibus each time and holds its fleet at its own premises.",
        ),
        calculations: [
          text(
            "العقد الأول: المركبات محددة، والجهة تحدد استخدامها وتحصل على منافعها طوال المدة؛ استبدال الصيانة ليس حق استبدال جوهريًا، فيحتوي العقد على إيجار.",
            "First contract: the vehicles are specified and the authority directs use and receives benefits throughout; repair-only substitution is not substantive, so the contract contains a lease.",
          ),
          text(
            "العقد الثاني: لا تتحدد حافلة بعينها ويستطيع المورد الوفاء بكل طلب من أسطوله؛ على هذه الوقائع لا يوجد حق استخدام أصل محدد، بل خدمة نقل.",
            "Second contract: no particular minibus is identified and the supplier can fulfil each request from its fleet; on these facts there is no right to use an identified asset, but a transport service.",
          ),
        ],
        conclusion: text(
          "في الحالة الأولى يقيّم المستأجر أصل حق استخدام والتزام إيجار وفق المدفوعات وشروط العقد؛ وفي الثانية يعترف بتكلفة الخدمة عند تلقيها. لا تتوافر مبالغ مدفوعات لاحتساب قيد رقمي هنا.",
          "In the first case the lessee measures a right-of-use asset and lease liability using the contract's payments and terms; in the second it expenses the service as received. No payment amounts are provided for a numerical entry.",
        ),
        journalEntries: [],
        reference: "IFRS 16.9, B9, B13–B30",
      },
      {
        title: text("إيجار بست دفعات سنوية مقدمًا", "Lease with six annual payments in advance"),
        facts: text(
          "مدة الإيجار ست سنوات، والمدفوعات 18,420 في بداية كل سنة. دُفعت الأولى عند البدء، والقيمة الحالية للخمس غير المدفوعة 65,586 بمعدل 12.5%. العمر النافع للمستأجر خمس سنوات ولا تنتقل ملكية الأصل.",
          "The lease runs for six years with payments of 18,420 at the start of each year. The first is paid at commencement; the present value of the five unpaid payments is 65,586 at 12.5%. The asset's useful life to the lessee is five years and ownership does not transfer.",
        ),
        calculations: [
          text(
            "التزام الإيجار عند البدء = 65,586؛ أصل حق الاستخدام = 65,586 + 18,420 = 84,006.",
            "Opening liability = 65,586; right-of-use asset = 65,586 + 18,420 = 84,006.",
          ),
          text(
            "إهلاك السنة الأولى = 84,006 ÷ 5 = 16,801 تقريبًا؛ رصيد الأصل = 67,205.",
            "First-year depreciation = 84,006 ÷ 5 ≈ 16,801; asset carrying amount ≈ 67,205.",
          ),
          text(
            "فائدة السنة الأولى = 65,586 × 12.5% ≈ 8,198؛ الالتزام آخر السنة قبل دفعة السنة التالية ≈ 73,784.",
            "First-year interest = 65,586 × 12.5% ≈ 8,198; year-end liability before the next advance payment ≈ 73,784.",
          ),
        ],
        conclusion: text(
          "يظهر حق الاستخدام 67,205 والتزام الإيجار 73,784 تقريبًا بنهاية السنة الأولى؛ ثم تخفضه الدفعة التالية 18,420 عند دفعها.",
          "At first year-end, the right-of-use asset is about 67,205 and the liability about 73,784; the next 18,420 payment reduces that liability when made.",
        ),
        journalEntries: [
          {
            label: text("بدء العقد — قيد مركب", "Commencement — compound entry"),
            debit: text("أصل حق الاستخدام 84,006", "Right-of-use asset 84,006"),
            credit: text(
              "التزام إيجار 65,586 + نقدية 18,420",
              "Lease liability 65,586 + cash 18,420",
            ),
            amount: text("84,006 لكل جانب", "84,006 each side"),
          },
          {
            label: text("فائدة السنة الأولى تقريبًا", "First-year interest, rounded"),
            debit: text("تكلفة تمويل", "Finance cost"),
            credit: text("التزام إيجار", "Lease liability"),
            amount: text("8,198", "8,198"),
          },
          {
            label: text("إهلاك السنة الأولى تقريبًا", "First-year depreciation, rounded"),
            debit: text("مصروف إهلاك", "Depreciation expense"),
            credit: text("مجمع إهلاك حق الاستخدام", "Accumulated ROU depreciation"),
            amount: text("16,801", "16,801"),
          },
        ],
        reference: "IFRS 16.23–29, 36–38",
      },
      {
        title: text(
          "بيع آلة وإعادة استئجارها بالقيمة العادلة",
          "Sale of a machine followed by a market leaseback",
        ),
        facts: text(
          "تبلغ القيمة الدفترية لآلة 500,000. باعتها المنشأة بالقيمة العادلة 740,000 ثم استأجرتها فورًا لخمس سنوات، والقيمة الحالية لمدفوعات الإيجار 700,000. يفترض المثال تحقق البيع وفق IFRS 15 وأن السعر والمدفوعات بشروط سوقية.",
          "A machine has a carrying amount of 500,000. The entity sells it at fair value of 740,000 and immediately leases it back for five years; the present value of lease payments is 700,000. Assume the transfer qualifies as a sale under IFRS 15 and both price and payments are at market terms.",
        ),
        calculations: [
          text(
            "نسبة حق الاستخدام المحتفظ به = 700,000 ÷ 740,000 = 94.5946% تقريبًا.",
            "Proportion of right retained = 700,000 ÷ 740,000 ≈ 94.5946%.",
          ),
          text(
            "أصل حق الاستخدام = 500,000 × 700,000 ÷ 740,000 = 472,973 تقريبًا.",
            "Right-of-use asset = 500,000 × 700,000 ÷ 740,000 ≈ 472,973.",
          ),
          text(
            "المكسب الكلي النظري = 740,000 − 500,000 = 240,000؛ المكسب المتعلق بالحق المحتفظ به = 240,000 × 700,000 ÷ 740,000 ≈ 227,027.",
            "Theoretical total gain = 740,000 − 500,000 = 240,000; gain on the retained right = 240,000 × 700,000 ÷ 740,000 ≈ 227,027.",
          ),
          text(
            "المكسب المعترف به عن الحق المنقول فقط = 240,000 − 227,027 = 12,973.",
            "Recognised gain on the right transferred only = 240,000 − 227,027 = 12,973.",
          ),
        ],
        conclusion: text(
          "يثبت أصل حق استخدام 472,973 والتزام إعادة استئجار 700,000 ومكسب بيع 12,973 فقط، لا كامل المكسب النظري 240,000.",
          "Recognise a 472,973 right-of-use asset, 700,000 leaseback liability and only 12,973 gain, rather than the theoretical full gain of 240,000.",
        ),
        journalEntries: [
          {
            label: text(
              "عند النقل وإعادة الاستئجار — قيد مركب",
              "At transfer and leaseback — compound entry",
            ),
            debit: text(
              "نقدية 740,000 + حق استخدام 472,973",
              "Cash 740,000 + right-of-use asset 472,973",
            ),
            credit: text(
              "آلة 500,000 + التزام إيجار 700,000 + مكسب 12,973",
              "Machine 500,000 + lease liability 700,000 + gain 12,973",
            ),
            amount: text("1,212,973 لكل جانب", "1,212,973 each side"),
          },
        ],
        reference: "IFRS 16.98–102; IFRS 15.31–38",
      },
    ],
  },
};
