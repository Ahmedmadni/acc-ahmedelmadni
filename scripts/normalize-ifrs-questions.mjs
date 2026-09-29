#!/usr/bin/env node
/**
 * Normalize IFRS question-bank exports into the website's import shape.
 *
 * Usage:
 *   node scripts/normalize-ifrs-questions.mjs \
 *     --input ./vendor/ifrs-quiz/MCQs/questions.json \
 *     --output ./tmp/ifrs-questions.normalized.json
 *
 * The script intentionally does not scrape or bypass access controls. Supply a
 * local export/check-out whose licence has already been verified.
 */

import { promises as fs } from "node:fs";
import path from "node:path";

const args = Object.fromEntries(
  process.argv
    .slice(2)
    .map((value, index, list) => (value.startsWith("--") ? [value.slice(2), list[index + 1]] : null))
    .filter(Boolean),
);

const inputPath = args.input;
const outputPath = args.output ?? "./tmp/ifrs-questions.normalized.json";

if (!inputPath) {
  console.error("Missing --input <file-or-directory>");
  process.exit(1);
}

const STANDARD_RE = /\b(IFRS|IAS)[\s_-]*([0-9]{1,2})\b/i;

function detectStandardCode(...values) {
  for (const value of values) {
    const match = String(value ?? "").match(STANDARD_RE);
    if (match) return `${match[1].toUpperCase()} ${Number(match[2])}`;
  }
  return null;
}

function asText(value) {
  if (value == null) return "";
  if (typeof value === "string") return value.trim();
  return String(value).trim();
}

function asOptions(value) {
  if (Array.isArray(value)) return value.map(asText).filter(Boolean);
  if (value && typeof value === "object") {
    return Object.keys(value)
      .sort()
      .map((key) => asText(value[key]))
      .filter(Boolean);
  }
  return [];
}

function answerIndex(rawAnswer, options) {
  if (Number.isInteger(rawAnswer)) {
    const numeric = Number(rawAnswer);
    if (numeric >= 0 && numeric < options.length) return numeric;
    if (numeric >= 1 && numeric <= options.length) return numeric - 1;
  }

  const answer = asText(rawAnswer);
  if (!answer) return null;

  if (/^[A-F]$/i.test(answer)) return answer.toUpperCase().charCodeAt(0) - 65;
  if (/^\d+$/.test(answer)) {
    const numeric = Number(answer);
    if (numeric >= 1 && numeric <= options.length) return numeric - 1;
    if (numeric >= 0 && numeric < options.length) return numeric;
  }

  const exact = options.findIndex((option) => option.toLowerCase() === answer.toLowerCase());
  return exact >= 0 ? exact : null;
}

function normalizeRecord(raw, sourcePath, sourceIndex) {
  const questionEn = asText(
    raw.question_en ?? raw.question ?? raw.prompt ?? raw.text ?? raw.stem,
  );
  const optionsEn = asOptions(
    raw.options_en ?? raw.options ?? raw.choices_en ?? raw.choices ?? raw.answers,
  );
  const correct = answerIndex(
    raw.correct_answer ??
      raw.correctAnswer ??
      raw.answer ??
      raw.answer_index ??
      raw.answerIndex ??
      raw.key,
    optionsEn,
  );

  const standardCode = detectStandardCode(
    raw.standard_code,
    raw.standard,
    raw.topic,
    raw.reference,
    sourcePath,
    questionEn,
  );

  if (!questionEn || optionsEn.length < 2 || correct == null || !standardCode) return null;

  const explanationEn = asText(
    raw.explanation_en ?? raw.explanation ?? raw.rationale ?? raw.reason,
  );

  return {
    track: "IFRS",
    standard_code: standardCode,
    topic: asText(raw.topic) || standardCode,
    question_en: questionEn,
    question_ar: asText(raw.question_ar),
    choices_en: optionsEn,
    choices_ar: asOptions(raw.options_ar ?? raw.choices_ar),
    answer_index: correct,
    question_type: asText(raw.question_type || raw.type || "MCQ").toUpperCase(),
    difficulty: asText(raw.difficulty || "intermediate").toLowerCase(),
    exam_domain: asText(raw.exam_domain ?? raw.domain ?? raw.topic),
    explanation_en: explanationEn,
    explanation_ar: asText(raw.explanation_ar),
    reference: asText(raw.reference) || standardCode,
    source_path: sourcePath,
    source_item_id: asText(raw.id) || `${sourcePath}#${sourceIndex + 1}`,
    translation_status:
      asText(raw.question_ar) && asOptions(raw.options_ar ?? raw.choices_ar).length === optionsEn.length
        ? "review_required"
        : "original",
  };
}

function flattenJson(value) {
  if (Array.isArray(value)) return value;
  if (!value || typeof value !== "object") return [];
  for (const key of ["questions", "mcqs", "items", "data"]) {
    if (Array.isArray(value[key])) return value[key];
  }
  return [value];
}

async function readJsonFile(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  if (filePath.endsWith(".jsonl")) {
    return raw
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => JSON.parse(line));
  }
  return flattenJson(JSON.parse(raw));
}

async function collectFiles(target) {
  const stat = await fs.stat(target);
  if (stat.isFile()) return [target];

  const entries = await fs.readdir(target, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) =>
      collectFiles(path.join(target, entry.name)).catch(() => []),
    ),
  );
  return nested.flat();
}

const files = (await collectFiles(inputPath)).filter(
  (file) => file.endsWith(".json") || file.endsWith(".jsonl"),
);

const normalized = [];
const rejected = [];

for (const file of files) {
  const records = await readJsonFile(file);
  records.forEach((raw, index) => {
    const relative = path.relative(process.cwd(), file);
    const item = normalizeRecord(raw, relative, index);
    if (item) normalized.push(item);
    else rejected.push({ source_path: relative, source_index: index + 1 });
  });
}

const unique = new Map();
for (const item of normalized) {
  const fingerprint = [
    item.standard_code,
    item.question_en.toLowerCase().replace(/\s+/g, " ").trim(),
  ].join("|");
  if (!unique.has(fingerprint)) unique.set(fingerprint, item);
}

await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(
  outputPath,
  JSON.stringify(
    {
      schema_version: "1.0.0",
      generated_at: new Date().toISOString(),
      records: [...unique.values()],
      rejected,
    },
    null,
    2,
  ),
  "utf8",
);

console.log(
  `Normalized ${unique.size} questions from ${files.length} files; rejected ${rejected.length}. Output: ${outputPath}`,
);
