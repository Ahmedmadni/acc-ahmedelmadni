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
 * Numeric answer keys require --numeric-answer-base 0|1. Every record must
 * identify its original source URL, revision and licence.
 */

import { promises as fs } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { importedAnswerIndex } from "./lib/ifrs-answer-index.mjs";

const args = Object.fromEntries(
  process.argv
    .slice(2)
    .map((value, index, list) =>
      value.startsWith("--") ? [value.slice(2), list[index + 1]] : null,
    )
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

function asOriginalText(value) {
  return typeof value === "string" ? value : "";
}

function asOptions(value) {
  // Keep positions intact: dropping an empty choice could silently move the keyed answer.
  if (Array.isArray(value)) return value.map(asOriginalText);
  if (value && typeof value === "object") {
    return Object.keys(value)
      .sort()
      .map((key) => asOriginalText(value[key]));
  }
  return [];
}

function normalizeRecord(raw, sourcePath) {
  if (!raw || typeof raw !== "object") return null;
  const rawQuestion = raw.question_en ?? raw.question ?? raw.prompt ?? raw.text ?? raw.stem;
  const rawOptions = raw.options_en ?? raw.options ?? raw.choices_en ?? raw.choices ?? raw.answers;
  const rawAnswer =
    raw.correct_answer ??
    raw.correctAnswer ??
    raw.answer ??
    raw.answer_index ??
    raw.answerIndex ??
    raw.key;
  const questionEn = asOriginalText(rawQuestion);
  const optionsEn = asOptions(rawOptions);
  const baseValue = raw.answer_index_base ?? args["numeric-answer-base"];
  const numericBase = baseValue == null ? undefined : Number(baseValue);
  const correct = importedAnswerIndex(rawAnswer, optionsEn, numericBase);

  const standardCode = detectStandardCode(
    raw.standard_code,
    raw.standard,
    raw.topic,
    raw.reference,
    sourcePath,
    questionEn,
  );

  const sourceUrl = asText(raw.source_url ?? args["source-url"]);
  const sourceRevision = asText(raw.source_revision ?? args["source-revision"]);
  const sourceLicense = asText(raw.source_license ?? args["source-license"]);
  const sourceItemId = asText(raw.source_item_id ?? raw.id ?? raw.source_page);
  if (
    !questionEn.trim() ||
    optionsEn.length !== 4 ||
    optionsEn.some((option) => !option.trim()) ||
    correct == null ||
    !standardCode ||
    !/^https?:\/\//.test(sourceUrl) ||
    !sourceRevision ||
    !sourceLicense ||
    !sourceItemId
  )
    return null;

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
    source_item_id: sourceItemId,
    source_url: sourceUrl,
    source_revision: sourceRevision,
    source_license: sourceLicense,
    source_answer_key: rawAnswer,
    source_fingerprint: createHash("sha256")
      .update(JSON.stringify([rawQuestion, rawOptions, rawAnswer]))
      .digest("hex"),
    translation_status:
      asText(raw.question_ar) &&
      asOptions(raw.options_ar ?? raw.choices_ar).length === optionsEn.length
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
    entries.map((entry) => collectFiles(path.join(target, entry.name)).catch(() => [])),
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
    const item = normalizeRecord(raw, relative);
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

if (rejected.length || unique.size === 0) {
  console.error(
    `Import review failed: ${rejected.length} invalid records; ${unique.size} eligible records. Every question needs a valid answer, source item ID, URL, revision and licence. Output was not updated.`,
  );
  if (rejected.length) console.error(JSON.stringify(rejected.slice(0, 20), null, 2));
  process.exitCode = 1;
} else {
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
}
