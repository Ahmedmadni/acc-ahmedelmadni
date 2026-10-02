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
