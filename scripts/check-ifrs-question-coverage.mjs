#!/usr/bin/env node
/**
 * Guardrail for the IFRS question bank.
 * Verifies unique IDs, full 43-standard coverage, difficulty metadata totals,
 * and the Phase 3 minimum of 20 questions for priority standards.
 */

import { promises as fs } from "node:fs";

const files = [
  "src/lib/exam-bank.ts",
  "src/data/ifrs-quiz-seed.ts",
  "src/data/ifrs-quiz-phase3.ts",
  "src/data/ifrs-quiz-coverage.ts",
  "src/data/ifrs-quiz-depth-a.ts",
  "src/data/ifrs-quiz-depth-b.ts",
  "src/data/ifrs-quiz-depth-c.ts",
  "src/data/ifrs-quiz-baseline-extra.ts",
  "src/data/ifrs-quiz-phase4-depth.ts",
];

const priority = [
  "IFRS 9",
  "IFRS 15",
  "IFRS 16",
  "IFRS 18",
  "IAS 2",
  "IAS 12",
  "IAS 16",
  "IAS 21",
  "IAS 24",
  "IAS 36",
  "IAS 37",
];

function readQuestions(content) {
  const blocks = content
    .split(/\n\s*(?:\{|\{\s*)"?id"?\s*:\s*"/)
    .slice(1)
    .map((rest) => `{"id":"${rest}`);

  return blocks
    .map((block) => {
      const id = block.match(/"?id"?\s*:\s*"([^"]+)"/)?.[1] ?? "";
      const track = block.match(/"?track"?\s*:\s*"([^"]+)"/)?.[1] ?? "";
      const topic = block.match(/"?topic"?\s*:\s*"([^"]+)"/)?.[1] ?? "";
      const reference = block.match(/"?reference"?\s*:\s*"([^"]+)"/)?.[1] ?? "";
      const difficulty =
        block.match(/"?difficulty"?\s*:\s*"([^"]+)"/)?.[1] ?? "intermediate";
      const match = `${topic} ${reference}`.match(/\b(IFRS|IAS)\s*([0-9]{1,2})\b/i);
      return {
        id,
        track,
        standard: match ? `${match[1].toUpperCase()} ${match[2]}` : null,
        difficulty,
      };
    })
    .filter((question) => question.track === "IFRS");
}

const all = [];
for (const file of files) {
  const content = await fs.readFile(file, "utf8");
  all.push(...readQuestions(content));
}

const byId = new Map();
const duplicateIds = [];
for (const question of all) {
  if (byId.has(question.id)) duplicateIds.push(question.id);
  byId.set(question.id, question);
}

const questions = [...byId.values()];
const counts = new Map();
const difficulty = { easy: 0, intermediate: 0, hard: 0, other: 0 };

for (const question of questions) {
  const key = question.standard ?? "Unmapped";
  counts.set(key, (counts.get(key) ?? 0) + 1);
  if (question.difficulty in difficulty) difficulty[question.difficulty] += 1;
  else difficulty.other += 1;
}

const standardsSource = await fs.readFile("src/data/ifrs-standards.ts", "utf8");
const indexed = [
  ...new Set(
    [...standardsSource.matchAll(/\bcode:\s*"((?:IFRS|IAS) \d+)"/g)].map(
      (match) => match[1],
    ),
  ),
];

const missing = indexed.filter((code) => (counts.get(code) ?? 0) === 0);
const belowBaseline = indexed.filter((code) => (counts.get(code) ?? 0) < 2);
const belowPriority = priority.filter((code) => (counts.get(code) ?? 0) < 20);
const unmapped = counts.get("Unmapped") ?? 0;

console.log(
  JSON.stringify(
    {
      total_questions: questions.length,
      indexed_standards: indexed.length,
      standards_with_questions: indexed.length - missing.length,
      difficulty,
      priority_counts: Object.fromEntries(priority.map((code) => [code, counts.get(code) ?? 0])),
      duplicate_ids: duplicateIds,
      unmapped,
      missing,
      below_baseline: belowBaseline,
      below_priority_target: belowPriority,
    },
    null,
    2,
  ),
);

const failures = [];
if (indexed.length !== 43) failures.push(`Expected 43 indexed standards; found ${indexed.length}`);
if (duplicateIds.length) failures.push(`Duplicate IDs: ${duplicateIds.join(", ")}`);
if (unmapped) failures.push(`${unmapped} IFRS questions could not be mapped to a standard`);
if (missing.length) failures.push(`Standards without questions: ${missing.join(", ")}`);
if (belowBaseline.length)
  failures.push(`Standards below two-question baseline: ${belowBaseline.join(", ")}`);
if (belowPriority.length)
  failures.push(`Priority standards below 20 questions: ${belowPriority.join(", ")}`);

if (failures.length) {
  console.error("\nCoverage check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("\nIFRS question coverage check passed.");
