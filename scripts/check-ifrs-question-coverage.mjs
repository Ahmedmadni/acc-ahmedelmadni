#!/usr/bin/env node
/**
 * Guardrail for the IFRS question bank.
 * Verifies unique IDs, full 43-standard coverage, difficulty metadata totals,
 * the twenty-five-question all-standard baseline and the deeper priority targets.
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
  "src/data/ifrs-quiz-phase4-baseline.ts",
  "src/data/ifrs-quiz-phase5-a.ts",
  "src/data/ifrs-quiz-phase5-b.ts",
  "src/data/ifrs-quiz-phase6-guide-mastery.ts",
  "src/data/ifrs-quiz-phase8-enrichment.ts",
  "src/data/ifrs-quiz-phase9-applied.ts",
  "src/data/ifrs-quiz-reviewed-extracts.ts",
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

const phase4Depth = ["IFRS 3", "IFRS 10", "IFRS 13", "IAS 7"];

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
      const difficulty = block.match(/"?difficulty"?\s*:\s*"([^"]+)"/)?.[1] ?? "intermediate";
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

function readPhase6GeneratedQuestions(file, content) {
  if (!file.endsWith("ifrs-quiz-phase6-guide-mastery.ts")) return [];

  const start = content.indexOf("export const IFRS_PHASE6_TARGETS = [");
  const end = content.indexOf("] as const;", start);
  if (start < 0 || end < 0) return [];

  const targetBlock = content.slice(start, end);
  const targets = [...targetBlock.matchAll(/"((?:IFRS|IAS) \d+)"/g)].map((match) => match[1]);

  const difficultyPattern = [
    "easy",
    "intermediate",
    "intermediate",
    "intermediate",
    "hard",
    "easy",
    "easy",
    "intermediate",
    "hard",
    "hard",
  ];

  return targets.flatMap((standard) =>
    difficultyPattern.map((difficulty, index) => ({
      id: `ifrs-p6-${standard.toLowerCase().replace(" ", "")}-${String(index + 1).padStart(2, "0")}`,
      track: "IFRS",
      standard,
      difficulty,
    })),
  );
}

function readPhase8GeneratedQuestions(file, content) {
  if (!file.endsWith("ifrs-quiz-phase8-enrichment.ts")) return [];

  const start = content.indexOf("export const IFRS_PHASE8_TARGETS = [");
  const end = content.indexOf("] as const;", start);
  if (start < 0 || end < 0) return [];

  const targets = [...content.slice(start, end).matchAll(/"((?:IFRS|IAS) \d+)"/g)].map(
    (match) => match[1],
  );
  const difficultyPattern = ["easy", "intermediate", "intermediate", "hard", "hard"];

  return targets.flatMap((standard) =>
    difficultyPattern.map((difficulty, index) => ({
      id: `ifrs-p8-${standard.toLowerCase().replace(" ", "")}-${String(index + 1).padStart(2, "0")}`,
      track: "IFRS",
      standard,
      difficulty,
    })),
  );
}

function readPhase9GeneratedQuestions(file, content) {
  if (!file.endsWith("ifrs-quiz-phase9-applied.ts")) return [];

  const start = content.indexOf("export const IFRS_PHASE9_TARGETS = [");
  const end = content.indexOf("] as const;", start);
  const perStandard = Number(content.match(/IFRS_PHASE9_QUESTIONS_PER_STANDARD = (\d+)/)?.[1] ?? 0);
  if (start < 0 || end < 0 || perStandard === 0) return [];

  const targets = [...content.slice(start, end).matchAll(/"((?:IFRS|IAS) \d+)"/g)].map(
    (match) => match[1],
  );
  const cases = content.slice(content.indexOf("const cases:"), content.indexOf("const counts ="));
  const counts = new Map();
  const questions = [
    ...cases.matchAll(
      /code:\s*"((?:IFRS|IAS) \d+)"[\s\S]*?difficulty:\s*"(easy|intermediate|hard)"/g,
    ),
  ].map((match) => {
    const standard = match[1];
    const sequence = (counts.get(standard) ?? 0) + 1;
    counts.set(standard, sequence);
    return {
      id: `ifrs-p9-${standard.toLowerCase().replace(" ", "")}-${String(sequence).padStart(2, "0")}`,
      track: "IFRS",
      standard,
      difficulty: match[2],
    };
  });
  if (targets.some((standard) => counts.get(standard) !== perStandard)) {
    throw new Error("Phase 9 applied-question coverage is incomplete");
  }
  return questions;
}

function readCompactQuestions(file, content) {
  const prefix = file.endsWith("ifrs-quiz-phase4-baseline.ts")
    ? "ifrs-p4base"
    : file.endsWith("ifrs-quiz-phase5-a.ts")
      ? "ifrs-p5a"
      : file.endsWith("ifrs-quiz-phase5-b.ts")
        ? "ifrs-p5b"
        : null;

  if (!prefix) return [];

  return [
    ...content.matchAll(
      /q\("((?:IFRS|IAS) \d+)",\s*(\d+),\s*"([^"]+)",\s*"(easy|intermediate|hard)"/g,
    ),
  ].map((match) => {
    const standard = match[1];
    const sequence = Number(match[2]);
    return {
      id: `${prefix}-${standard.toLowerCase().replace(" ", "")}-${String(sequence).padStart(2, "0")}`,
      track: "IFRS",
      standard,
      difficulty: match[4],
    };
  });
}

const all = [];
for (const file of files) {
  const content = await fs.readFile(file, "utf8");
  all.push(...readQuestions(content));
  all.push(...readCompactQuestions(file, content));
  all.push(...readPhase6GeneratedQuestions(file, content));
  all.push(...readPhase8GeneratedQuestions(file, content));
  all.push(...readPhase9GeneratedQuestions(file, content));
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
    [...standardsSource.matchAll(/\bcode:\s*"((?:IFRS|IAS) \d+)"/g)].map((match) => match[1]),
  ),
];

const missing = indexed.filter((code) => (counts.get(code) ?? 0) === 0);
const belowBaseline = indexed.filter((code) => (counts.get(code) ?? 0) < 25);
const belowPriority = priority.filter((code) => (counts.get(code) ?? 0) < 25);
const belowPhase4Depth = phase4Depth.filter((code) => (counts.get(code) ?? 0) < 10);
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
      below_phase4_depth_target: belowPhase4Depth,
      expected_total: 1131,
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
  failures.push(`Standards below twenty-five-question baseline: ${belowBaseline.join(", ")}`);
if (questions.length !== 1131)
  failures.push(`Expected 1131 IFRS questions; found ${questions.length}`);
if (belowPriority.length)
  failures.push(`Priority standards below 25 questions: ${belowPriority.join(", ")}`);
if (belowPhase4Depth.length)
  failures.push(`Phase 4 depth standards below 10 questions: ${belowPhase4Depth.join(", ")}`);

if (failures.length) {
  console.error("\nCoverage check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("\nIFRS question coverage check passed.");
