#!/usr/bin/env node
/**
 * Generate balanced IFRS question packs from a local standards-reference.md snapshot.
 *
 * Required env:
 *   IFRS_QUESTION_GEN_API_URL
 *   IFRS_QUESTION_GEN_API_KEY
 *   IFRS_QUESTION_GEN_MODEL
 *
 * Example:
 *   npm run ifrs:generate-questions -- \
 *     --source ./vendor/ifrs-sources/ramyatrouny-ifrs-skill/ifrs/standards-reference.md \
 *     --standards "IFRS 9,IFRS 15,IFRS 16,IAS 2" \
 *     --count 25 \
 *     --output ./tmp/ifrs-generated-questions.json
 */

import { promises as fs } from "node:fs";
import path from "node:path";

const args = Object.fromEntries(
  process.argv
    .slice(2)
    .map((value, index, list) => (value.startsWith("--") ? [value.slice(2), list[index + 1]] : null))
    .filter(Boolean),
);

const sourcePath = args.source;
const outputPath = args.output ?? "./tmp/ifrs-generated-questions.json";
const requestedCount = Math.max(20, Math.min(50, Number(args.count ?? 25)));
const standards = String(args.standards ?? "")
  .split(",")
  .map((value) => value.trim().toUpperCase())
  .filter(Boolean);

if (!sourcePath || standards.length === 0) {
  console.error('Usage requires --source <standards-reference.md> and --standards "IFRS 9,IAS 2".');
  process.exit(1);
}

const apiUrl = process.env.IFRS_QUESTION_GEN_API_URL;
const apiKey = process.env.IFRS_QUESTION_GEN_API_KEY;
const model = process.env.IFRS_QUESTION_GEN_MODEL;

if (!apiUrl || !apiKey || !model) {
  console.error(
    "Missing IFRS_QUESTION_GEN_API_URL, IFRS_QUESTION_GEN_API_KEY, or IFRS_QUESTION_GEN_MODEL.",
  );
  process.exit(1);
}

const markdown = await fs.readFile(sourcePath, "utf8");

function extractSection(code) {
  const lines = markdown.split(/\r?\n/);
  const start = lines.findIndex((line) => line.startsWith("## " + code + " —"));
  if (start < 0) return null;
  let end = lines.length;
  for (let index = start + 1; index < lines.length; index += 1) {
    if (/^## (?:IFRS|IAS)\s+\d+\s+—/.test(lines[index])) {
      end = index;
      break;
    }
  }
  return lines.slice(start, end).join("\n").slice(0, 28000);
}

function parseJson(value) {
  if (typeof value !== "string") return value;
  const fenced = value.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  return JSON.parse(fenced ? fenced[1] : value);
}

function normalizedDifficulty(value) {
  const difficulty = String(value ?? "").toLowerCase();
  if (difficulty === "easy" || difficulty === "hard") return difficulty;
  return "intermediate";
}

function normalizeQuestion(raw, code, index) {
  const choices = Array.isArray(raw.choices_en) ? raw.choices_en.map(String) : [];
  const answerIndex = Number(raw.answer_index);
  if (
    !String(raw.question_en ?? "").trim() ||
    choices.length !== 4 ||
    !Number.isInteger(answerIndex) ||
    answerIndex < 0 ||
    answerIndex >= choices.length ||
    !String(raw.explanation_en ?? "").trim()
  ) {
    return null;
  }

  return {
    track: "IFRS",
    standard_code: code,
    topic: String(raw.topic ?? code).trim(),
    question_en: String(raw.question_en).trim(),
    question_ar: "",
    choices_en: choices.map((choice) => choice.trim()),
    choices_ar: [],
    answer_index: answerIndex,
    question_type: "MCQ",
    difficulty: normalizedDifficulty(raw.difficulty),
    exam_domain: String(raw.domain ?? "general").trim().toLowerCase(),
    explanation_en: String(raw.explanation_en).trim(),
    explanation_ar: "",
    reference: String(raw.reference ?? code).trim(),
    source_key: "ramyatrouny-ifrs-skill",
    source_path: path.basename(sourcePath),
    source_item_id:
      "generated:" + code.replace(/\s+/g, "-").toLowerCase() + ":" + String(index + 1),
    translation_status: "original",
    status: "pending_review",
    is_public: false,
  };
}

async function generateForStandard(code, section) {
  const system = [
    "You are a senior IFRS technical education author.",
    "Create original multiple-choice learning questions from the supplied reference notes.",
    "Do not copy sentences verbatim from the reference.",
    "Do not invent requirements not supported by the supplied notes.",
    "Use exactly four options per question and exactly one correct answer.",
    "Return JSON only with a top-level questions array.",
    "Each item must have: domain, difficulty, topic, question_en, choices_en, answer_index, explanation_en, reference.",
    "difficulty must be easy, intermediate, or hard.",
    "answer_index must be zero-based.",
    "Balance conceptual questions, short scenarios, calculations when appropriate, presentation/disclosure points, and common pitfalls.",
    "Target distribution: about 30% easy, 50% intermediate, 20% hard.",
    "Avoid trivial rewordings and avoid duplicate learning objectives.",
    "References should identify the standard/paragraph when present in the notes, otherwise the standard code.",
    "These are educational questions, not official IFRS Foundation or ACCA exam questions.",
  ].join("\n");

  const user = [
    "STANDARD: " + code,
    "QUESTION COUNT: " + String(requestedCount),
    "",
    "REFERENCE NOTES:",
    section,
  ].join("\n");

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      temperature: 0.15,
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
      response_format: { type: "json_object" },
    }),
  });

  if (!response.ok) {
    throw new Error(
      code +
        ": generation failed (" +
        String(response.status) +
        ") " +
        (await response.text()).slice(0, 400),
    );
  }

  const payload = await response.json();
  const output =
    payload?.choices?.[0]?.message?.content ??
    payload?.output_text ??
    payload?.content ??
    null;
  if (!output) throw new Error(code + ": model returned no content");

  const parsed = parseJson(output);
  const questions = Array.isArray(parsed?.questions) ? parsed.questions : [];
  const normalized = questions
    .map((question, index) => normalizeQuestion(question, code, index))
    .filter(Boolean);

  if (normalized.length < Math.floor(requestedCount * 0.8)) {
    throw new Error(
      code +
        ": only " +
        String(normalized.length) +
        "/" +
        String(requestedCount) +
        " generated questions passed structural validation",
    );
  }

  return normalized.slice(0, requestedCount);
}

const records = [];
const failures = [];

for (const code of standards) {
  const section = extractSection(code);
  if (!section) {
    failures.push({ standard_code: code, error: "Standard section not found in source file" });
    continue;
  }

  try {
    const generated = await generateForStandard(code, section);
    records.push(...generated);
    console.log(code + ": generated " + String(generated.length) + " review-pending questions");
  } catch (error) {
    failures.push({
      standard_code: code,
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

const seen = new Set();
const unique = records.filter((item) => {
  const fingerprint =
    item.standard_code +
    "|" +
    item.question_en.toLowerCase().replace(/\s+/g, " ").trim();
  if (seen.has(fingerprint)) return false;
  seen.add(fingerprint);
  return true;
});

await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(
  outputPath,
  JSON.stringify(
    {
      schema_version: "1.0.0",
      generated_at: new Date().toISOString(),
      model,
      requested_questions_per_standard: requestedCount,
      records: unique,
      failures,
    },
    null,
    2,
  ),
  "utf8",
);

console.log(
  "Generated " +
    String(unique.length) +
    " structurally valid questions across " +
    String(standards.length) +
    " requested standards. Human review is required before publication.",
);
