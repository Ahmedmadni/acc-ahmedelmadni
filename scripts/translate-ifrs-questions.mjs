#!/usr/bin/env node
/**
 * Translate normalized IFRS question JSON into professional Arabic accounting terminology.
 *
 * Input shape: output from scripts/normalize-ifrs-questions.mjs
 *
 * Required environment variables:
 *   IFRS_TRANSLATION_API_URL   OpenAI-compatible /chat/completions endpoint
 *   IFRS_TRANSLATION_API_KEY   API key
 *   IFRS_TRANSLATION_MODEL     model name
 *
 * Usage:
 *   node scripts/translate-ifrs-questions.mjs \
 *     --input ./tmp/ifrs-questions.normalized.json \
 *     --output ./tmp/ifrs-questions.ar.json
 *
 * The script never changes answer_index or English source text. All translated
 * records are marked review_required so a qualified Arabic accounting reviewer
 * can approve them before publication.
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
const outputPath = args.output ?? "./tmp/ifrs-questions.ar.json";
const limit = args.limit ? Number(args.limit) : Number.POSITIVE_INFINITY;

if (!inputPath) {
  console.error("Missing --input <normalized-json>");
  process.exit(1);
}

const apiUrl = process.env.IFRS_TRANSLATION_API_URL;
const apiKey = process.env.IFRS_TRANSLATION_API_KEY;
const model = process.env.IFRS_TRANSLATION_MODEL;

if (!apiUrl || !apiKey || !model) {
  console.error(
    "Missing IFRS_TRANSLATION_API_URL, IFRS_TRANSLATION_API_KEY, or IFRS_TRANSLATION_MODEL.",
  );
  process.exit(1);
}

const GLOSSARY = {
  inventory: "المخزون",
  "net realisable value": "صافي القيمة القابلة للتحقق",
  "fair value": "القيمة العادلة",
  "recoverable amount": "القيمة القابلة للاسترداد",
  "value in use": "القيمة الاستخدامية",
  "expected credit loss": "الخسائر الائتمانية المتوقعة",
  "performance obligation": "التزام الأداء",
  "right-of-use asset": "أصل حق الاستخدام",
  "lease liability": "التزام الإيجار",
  "cash-generating unit": "وحدة مولدة للنقد",
  goodwill: "الشهرة",
  "related party": "طرف ذو علاقة",
  "statement of financial position": "قائمة المركز المالي",
  "statement of profit or loss": "قائمة الربح أو الخسارة",
  "other comprehensive income": "الدخل الشامل الآخر",
  "weighted average": "المتوسط المرجح",
  FIFO: "الوارد أولاً صادر أولاً (FIFO)",
  LIFO: "الوارد أخيراً صادر أولاً (LIFO)",
};

function glossaryText() {
  return Object.entries(GLOSSARY)
    .map(([en, ar]) => `- ${en} => ${ar}`)
    .join("\n");
}

function safeJson(value) {
  if (typeof value !== "string") return value;
  const fenced = value.match(/\`\`\`(?:json)?\s*([\s\S]*?)\s*\`\`\`/i);
  return JSON.parse(fenced ? fenced[1] : value);
}

function validateTranslation(source, translated) {
  if (!translated || typeof translated !== "object") throw new Error("Translation is not JSON");
  if (!String(translated.question_ar ?? "").trim()) throw new Error("question_ar is empty");
  if (!Array.isArray(translated.choices_ar)) throw new Error("choices_ar is not an array");
  if (translated.choices_ar.length !== source.choices_en.length)
    throw new Error("Arabic choice count differs from English choice count");
  if (!String(translated.explanation_ar ?? "").trim())
    throw new Error("explanation_ar is empty");
  return translated;
}

async function callTranslator(record) {
  const system = [
    "You are a senior Arabic IFRS technical editor.",
    "Translate educational accounting MCQs from English to professional Modern Standard Arabic.",
    "Use established Arabic accounting terminology used by professional accountants in Saudi Arabia and the GCC.",
    "Do not change the accounting meaning, answer order, standard references, numbers, currencies, or abbreviations.",
    "Do not add legal or accounting conclusions that are not present in the source.",
    "Return JSON only with keys: question_ar, choices_ar, explanation_ar.",
    "Preserve IFRS/IAS codes exactly.",
    "",
    "Preferred glossary:",
    glossaryText(),
  ].join("\n");

  const user = JSON.stringify(
    {
      standard_code: record.standard_code,
      question_en: record.question_en,
      choices_en: record.choices_en,
      explanation_en: record.explanation_en,
      reference: record.reference,
    },
    null,
    2,
  );

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      temperature: 0,
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
      response_format: { type: "json_object" },
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Translation API failed (${response.status}): ${body.slice(0, 500)}`);
  }

  const payload = await response.json();
  const content =
    payload?.choices?.[0]?.message?.content ??
    payload?.output_text ??
    payload?.content ??
    null;

  if (!content) throw new Error("Translation API returned no content");
  return validateTranslation(record, safeJson(content));
}

const source = JSON.parse(await fs.readFile(inputPath, "utf8"));
const records = Array.isArray(source.records) ? source.records : [];
const translated = [];
const failed = [];

for (let index = 0; index < records.length && translated.length < limit; index += 1) {
  const record = records[index];

  if (
    String(record.question_ar ?? "").trim() &&
    Array.isArray(record.choices_ar) &&
    record.choices_ar.length === record.choices_en?.length &&
    String(record.explanation_ar ?? "").trim()
  ) {
    translated.push({ ...record, translation_status: "review_required" });
    continue;
  }

  try {
    const ar = await callTranslator(record);
    translated.push({
      ...record,
      ...ar,
      translation_status: "review_required",
    });
    process.stdout.write(
      `Translated ${translated.length}/${Math.min(records.length, limit)} — ${record.standard_code}\n`,
    );
  } catch (error) {
    failed.push({
      source_item_id: record.source_item_id,
      standard_code: record.standard_code,
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(
  outputPath,
  JSON.stringify(
    {
      ...source,
      translated_at: new Date().toISOString(),
      translation_model: model,
      records: translated,
      translation_failures: failed,
    },
    null,
    2,
  ),
  "utf8",
);

console.log(
  `Finished: ${translated.length} translated/review-pending, ${failed.length} failed. Output: ${outputPath}`,
);
