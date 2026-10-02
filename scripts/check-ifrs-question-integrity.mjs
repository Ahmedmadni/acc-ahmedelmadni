#!/usr/bin/env node
/**
 * Check the local question objects shipped with the website. Account-specific
 * remote questions are outside this audit. This is a structural/provenance
 * check, not a substitute for expert accounting review.
 */
import { createServer } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const server = await createServer({
  configFile: false,
  plugins: [tsconfigPaths()],
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

let questions;
let sourceItems;
let detectStandard;
let indexed;
let reorderChoices;
try {
  const bank = await server.ssrLoadModule("/src/data/ifrs-question-bank.ts");
  const standards = await server.ssrLoadModule("/src/data/ifrs-standards.ts");
  const choiceOrder = await server.ssrLoadModule("/src/lib/ifrs-question-choice-order.ts");
  questions = bank.IFRS_LOCAL_QUESTIONS;
  sourceItems = bank.IFRS_LOCAL_QUESTION_SOURCE_ITEMS;
  detectStandard = bank.detectIfrsStandardCode;
  indexed = new Set(standards.IFRS_STANDARDS.map((standard) => standard.code));
  reorderChoices = choiceOrder.reorderIfrsChoices;
} finally {
  await server.close();
}

const failures = [];
const seenIds = new Set();
const seenPrompts = new Map();
const answerPositions = [0, 0, 0, 0];
const displayedPositions = [0, 0, 0, 0];
const provenance = {
  guide_generated: 0,
  deep_dive_generated: 0,
  original_applied: 0,
  legacy_without_verbatim_source: 0,
  verbatim_source_verified: 0,
};
const normalize = (value) => value.trim().toLocaleLowerCase("en").replace(/\s+/g, " ");

for (const question of sourceItems) {
  if (seenIds.has(question.id)) failures.push(`${question.id}: duplicate source ID`);
  seenIds.add(question.id);
}

for (const question of questions) {
  const code = detectStandard(question);
  const topicCode = question.topic?.match(/\b(IFRS|IAS)\s*([0-9]{1,2})\b/i);
  if (!topicCode) failures.push(`${question.id}: missing standard in topic`);
  else if (`${topicCode[1].toUpperCase()} ${Number(topicCode[2])}` !== code)
    failures.push(`${question.id}: topic/reference standard mismatch`);
  if (!indexed.has(code)) failures.push(`${question.id}: unknown or missing standard ${code}`);
  if (question.track !== "IFRS") failures.push(`${question.id}: wrong track`);

  for (const lang of ["ar", "en"]) {
    const prompt = question.question?.[lang];
    const choices = question.choices?.[lang];
    if (typeof prompt !== "string" || !prompt.trim()) {
      failures.push(`${question.id}: missing ${lang} prompt`);
    }
    if (!Array.isArray(choices) || choices.length !== 4) {
      failures.push(`${question.id}: expected four ${lang} choices`);
    } else {
      const invalidChoice = choices.some((choice) => typeof choice !== "string" || !choice.trim());
      if (invalidChoice) {
        failures.push(`${question.id}: empty ${lang} choice`);
      } else if (new Set(choices.map(normalize)).size !== choices.length) {
        failures.push(`${question.id}: duplicate ${lang} choices`);
      }
    }
    if (typeof question.explanation?.[lang] !== "string" || !question.explanation[lang].trim()) {
      failures.push(`${question.id}: missing ${lang} explanation`);
    }
  }
  if (
    !Number.isInteger(question.answerIndex) ||
    question.answerIndex < 0 ||
    question.answerIndex > 3
  ) {
    failures.push(`${question.id}: invalid answer index`);
  } else {
    answerPositions[question.answerIndex] += 1;
    if (Array.isArray(question.choices?.ar) && Array.isArray(question.choices?.en)) {
      const reordered = reorderChoices(question, 1);
      displayedPositions[reordered.answerIndex] += 1;
      for (const lang of ["ar", "en"]) {
        if (
          reordered.choices[lang][reordered.answerIndex] !==
          question.choices[lang][question.answerIndex]
        ) {
          failures.push(`${question.id}: reordered ${lang} correct choice changed`);
        }
      }
    }
  }
  if (typeof question.reference !== "string" || !question.reference.trim()) {
    failures.push(`${question.id}: missing technical reference`);
  }

  if (typeof question.question?.en === "string") {
    const fingerprint = `${code}|${normalize(question.question.en)}`;
    const earlier = seenPrompts.get(fingerprint);
    if (earlier) failures.push(`${question.id}: duplicate English prompt of ${earlier}`);
    else seenPrompts.set(fingerprint, question.id);
  }

  if (question.id.startsWith("ifrs-p6-")) provenance.guide_generated += 1;
  else if (question.id.startsWith("ifrs-p8-")) provenance.deep_dive_generated += 1;
  else if (question.id.startsWith("ifrs-p9-")) provenance.original_applied += 1;
  else if (question.id.startsWith("ifrs-reviewed-")) provenance.verbatim_source_verified += 1;
  else provenance.legacy_without_verbatim_source += 1;
}

console.log(
  JSON.stringify(
    {
      total: questions.length,
      source_items: sourceItems.length,
      standards: indexed.size,
      answer_index_distribution: answerPositions,
      displayed_answer_distribution: displayedPositions,
      provenance,
      failures,
      warning: "These checks do not prove that accounting answers or cited paragraphs are correct.",
    },
    null,
    2,
  ),
);
if (failures.length) process.exitCode = 1;
