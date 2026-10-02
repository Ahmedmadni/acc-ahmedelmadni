#!/usr/bin/env node
import { createServer } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const server = await createServer({
  configFile: false,
  plugins: [tsconfigPaths()],
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

let expansions;
let standards;
let reviewedQuestions;
try {
  ({ IFRS_STANDARD_STUDY_EXPANSIONS: expansions } = await server.ssrLoadModule(
    "/src/data/ifrs-standard-study-expansions.ts",
  ));
  ({ IFRS_STANDARDS: standards } = await server.ssrLoadModule("/src/data/ifrs-standards.ts"));
  ({ IFRS_REVIEWED_EXTRACT_QUESTIONS: reviewedQuestions } = await server.ssrLoadModule(
    "/src/data/ifrs-quiz-reviewed-extracts.ts",
  ));
} finally {
  await server.close();
}

const failures = [];
const indexed = new Set(standards.map((standard) => standard.code));
const officialReference = /^(?:IFRS|IAS) \d+/;
const hasText = (value) =>
  value &&
  typeof value.ar === "string" &&
  value.ar.trim().length > 0 &&
  typeof value.en === "string" &&
  value.en.trim().length > 0;

for (const [code, expansion] of Object.entries(expansions)) {
  if (!indexed.has(code)) failures.push(`${code}: standard is not indexed`);
  if (!Array.isArray(expansion.sections) || expansion.sections.length === 0)
    failures.push(`${code}: no detailed sections`);
  if (!Array.isArray(expansion.workedExamples) || expansion.workedExamples.length === 0)
    failures.push(`${code}: no worked examples`);

  for (const section of expansion.sections ?? []) {
    if (!hasText(section.title) || !hasText(section.explanation))
      failures.push(`${code}: incomplete bilingual study section`);
    if (!officialReference.test(section.reference))
      failures.push(`${code}: non-IFRS public reference in study section`);
    if (!Array.isArray(section.keyPoints) || section.keyPoints.some((point) => !hasText(point)))
      failures.push(`${code}: incomplete key points`);
  }

  for (const example of expansion.workedExamples ?? []) {
    if (!hasText(example.title) || !hasText(example.facts) || !hasText(example.conclusion))
      failures.push(`${code}: incomplete bilingual worked example`);
    if (!officialReference.test(example.reference))
      failures.push(`${code}: non-IFRS public reference in worked example`);
    if (!Array.isArray(example.calculations) || example.calculations.some((item) => !hasText(item)))
      failures.push(`${code}: incomplete calculation steps`);
  }
}

const ids = new Set();
const reviewedEnglishSourceText = new Map([
  [
    "ifrs-reviewed-ias16-disposal-01",
    {
      question:
        "A company bought some land for $15m in 20X0, revalued it at various dates up to $23m in 20X7, and sold it for $21m in 20X7, but did not receive any cash until 20X8. Ignoring tax, the gain/loss recorded in 20X7 should be:",
      choices: ["Zero", "A gain of $6m", "A loss of $2m", "A gain of $21m"],
    },
  ],
  [
    "ifrs-reviewed-ifrs15-broadband-01",
    {
      question:
        "EF Co provides a wireless router and 12 months' superfast broadband package to a customer for $220 payable in advance. A customer buying the router separately would pay $30 and a customer buying the broadband package separately would pay $20 per month. When is the transaction price allocated to the broadband package recognised?",
      choices: [
        "Immediately, when the $220 payment is received",
        "Over the 12 month period",
        "At the end of the 12 month period",
        "$30 immediately with the remaining spread over the contract period",
      ],
    },
  ],
  [
    "ifrs-reviewed-ias38-rd-expense-01",
    {
      question:
        "At 1 January 20X5, Moor Labs Co has capitalised development costs with an original cost of $10million and carrying amount of $5million. The company started a new R&D project on 1 January 20X5, incurring $1.6 million costs during the research phase, which lasted until 31 August 20X5. From that date, average development costs incurred on the project were $750,000 per month. On 1 November 20X5, the management of Moor Labs Co became confident that the project would be a commercial success and make good profits. The project is still in development at 31 December 20X5. Capitalised development expenditure is amortised at 25% per annum using the straight line method. What amount is recognised as an expense in terms of R&D in the year ended 31 December 20X5?",
      choices: ["$1.6million", "$3.1million", "$4.1million", "$5.6million"],
    },
  ],
  [
    "ifrs-reviewed-ias38-statements-01",
    {
      question:
        "Which of the following statements is/are true? 1. IAS 38 requires that intangible assets are assigned a useful life of no more than 20 years 2. When certain criteria are met, IAS 38 allows a company to choose to capitalise development expenditure or continue to recognise it as an expense 3. IAS 38 allows intangible assets to be revalued if there is an active market for the asset",
      choices: ["1 and 2", "3 only", "1 and 3", "All of the above"],
    },
  ],
  [
    "ifrs-reviewed-ias40-fair-value-01",
    {
      question: "In accordance with IAS 40, an investment property",
      choices: [
        "May be held at fair value with gains and losses recorded through other comprehensive income",
        "May be held at fair value with gains and losses recorded through profit and loss",
        "Must be held at historical cost less depreciation",
        "Must be held at net realisable value",
      ],
    },
  ],
  [
    "ifrs-reviewed-ifrs5-sale-criteria-01",
    {
      question:
        "Which of the following conditions is not required for an asset to be classified as held for sale under IFRS 5?",
      choices: [
        "Management is committed to a plan to sell",
        "The selling price must be in line with current fair value",
        "Asset has not been revalued",
        "Sale is highly probable",
      ],
    },
  ],
  [
    "ifrs-reviewed-ifrs5-acquired-subsidiary-01",
    {
      question:
        "Poetry Co acquires Prose Co, a subsidiary, on 1 October 20X7, exclusively with a view to selling it. Prose Co meets the criteria to be classified as held for sale. At the date of the financial statements 31 May 20X8, Prose Co has not yet been sold. At what amount should Prose Co be measured in the statement of financial position at 31 May 20X8?",
      choices: [
        "At fair value less cost to sell",
        "At the lower of cost and fair value less costs to sell",
        "At depreciated carrying amount",
        "At realisable value",
      ],
    },
  ],
  [
    "ifrs-reviewed-ias32-liability-01",
    {
      question: "Which of the following is a financial liability under IAS 32:Presentation?",
      choices: [
        "Deferred revenue from a government grant",
        "A provision for warranty payments",
        "An obligation to deliver own shares worth a fixed amount of cash",
        "An onerous contract",
      ],
    },
  ],
  [
    "ifrs-reviewed-ifrs9-recognition-01",
    {
      question:
        "When should a financial asset or liability be recognised in accordance with IFRS 9 Financial Instruments?",
      choices: [
        "When it is probable that future economic benefits will flow to the entity",
        "When the entity becomes a party to the contractual provisions of the instrument",
        "When the entity obtains control of the instrument",
        "When the entity obtains the risks and rewards of ownership",
      ],
    },
  ],
  [
    "ifrs-reviewed-ias32-convertible-01",
    {
      question:
        "On 1 July 20X1 White Co issues 10,000 $100 convertible bonds at par. The bonds pay interest annually in arrears at 4% and are redeemable at par on 30 June 20X5. On this date each of the bonds can be exchanged for 15 ordinary shares. The market rate of interest for similar bonds with no conversion rights attached is 5%. What should be recognised in the financial statements when the bonds are issued?",
      choices: [
        "A liability of $964,840 and an equity balance of $35,160.",
        "A liability of $1,000,000",
        "A liability of $855,920 and an equity balance of $144,080",
        "An asset of $1,000,000",
      ],
    },
  ],
  [
    "ifrs-reviewed-ifrs3-goodwill-01",
    {
      question:
        "Netley Co purchased the whole of the share capital of Orell Co for $2,500,000 cash. Shareholders’ funds of the two companies at the date of the purchase were as follows: Netley—share capital $5,000,000 and retained earnings $600,000; Orell—share capital $2,000,000 and retained earnings $250,000. The fair value of Orell Co’s tangible assets exceeded carrying amount by $150,000. What balance should appear in the consolidated statement of financial position of Netley Co for goodwill at acquisition?",
      choices: ["$400,000", "$100,000", "$250,000", "$500,000"],
    },
  ],
  [
    "ifrs-reviewed-ifrs11-joint-control-01",
    {
      question:
        "One third of the shares, and also voting rights, in Snow White Co are held by each of Sneezy Co, Sleepy Co and Dopey Co. Which of the following statements is true?",
      choices: [
        "If an agreement has been drawn up specifying that decision making requires at least 60% of the voting rights Sneezy Co would therefore have joint control.",
        "If an agreement has been drawn up specifying that, as a minimum, decision making requires unanimous agreement by Sleepy Co and Dopey Co, Sneezy Co would have joint control due to the equal share in voting rights.",
        "If an agreement has been drawn up specifying that decision making requires unanimous consent of Sneezy Co, Sleepy Co and Dopey Co, Sneezy Co would have joint control.",
        "None of the above",
      ],
    },
  ],
  [
    "ifrs-reviewed-ifrs10-voting-control-01",
    {
      question:
        "Harwich Co holds 70,000 $1 preference shares in Sall Co. These are non-voting but rank equally with the ordinary shares in a winding-up. Felixstowe Co holds 20,000 $1 voting ordinary shares in Sall Co. The share capital of Sall Co is made up of the following: 100,000 preference shares of $1 each and 30,000 ordinary shares of $1 each. Sall Co is a subsidiary undertaking of:",
      choices: [
        "Both Harwich Co and Felixstowe Co",
        "Harwich Co",
        "Felixstowe Co",
        "Neither Harwich Co nor Felixstowe Co",
      ],
    },
  ],
  [
    "ifrs-reviewed-ias28-equity-method-01",
    {
      question:
        "What is disclosed in the consolidated statement of financial position of an investor when the equity method is used to account for associates?",
      choices: [
        "Receivables but not share of net assets of the associate.",
        "Investment in associate at cost plus /minus the group's share of the associate's post acquisition retained profits or losses.",
        "Share of net assets of the associate and receivables.",
        "Cost of investment plus goodwill on acquisition less amounts written off but not receivables.",
      ],
    },
  ],
]);
for (const question of reviewedQuestions) {
  if (ids.has(question.id)) failures.push(`${question.id}: duplicate reviewed question ID`);
  ids.add(question.id);
  if (!officialReference.test(question.reference))
    failures.push(`${question.id}: public reference must be IFRS/IAS only`);
  if (
    !indexed.has(
      question.examDomain?.match(/(?:IFRS|IAS) \d+/)?.[0] ??
        question.topic.match(/(?:IFRS|IAS) \d+/)?.[0],
    )
  )
    failures.push(`${question.id}: question is not linked to an indexed standard`);
  for (const lang of ["ar", "en"]) {
    if (!question.question[lang]?.trim()) failures.push(`${question.id}: missing ${lang} prompt`);
    if (question.choices[lang]?.length !== 4)
      failures.push(`${question.id}: ${lang} must have four choices`);
    if (!question.explanation[lang]?.trim())
      failures.push(`${question.id}: missing ${lang} explanation`);
  }
  if (
    !Number.isInteger(question.answerIndex) ||
    question.answerIndex < 0 ||
    question.answerIndex > 3
  )
    failures.push(`${question.id}: invalid answer index`);
  const sourceText = reviewedEnglishSourceText.get(question.id);
  if (!sourceText) failures.push(`${question.id}: missing locked source-text check`);
  else {
    if (question.question.en !== sourceText.question)
      failures.push(`${question.id}: English prompt no longer matches the reviewed source text`);
    if (JSON.stringify(question.choices.en) !== JSON.stringify(sourceText.choices))
      failures.push(`${question.id}: English choices no longer match the reviewed source text`);
  }
}

console.log(
  JSON.stringify(
    {
      expanded_standards: Object.keys(expansions).length,
      detailed_sections: Object.values(expansions).reduce(
        (sum, item) => sum + item.sections.length,
        0,
      ),
      worked_examples: Object.values(expansions).reduce(
        (sum, item) => sum + item.workedExamples.length,
        0,
      ),
      reviewed_source_questions: reviewedQuestions.length,
      public_reference_policy: "IFRS/IAS only",
    },
    null,
    2,
  ),
);

if (failures.length) {
  console.error("\nIFRS study expansion check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("\nIFRS study expansion check passed.");
