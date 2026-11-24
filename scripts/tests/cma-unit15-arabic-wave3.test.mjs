import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import {
  cmaNumericTokens,
  validateCmaTranslation,
} from "../../src/lib/cma-translation.shared.ts";
import { splitCmaQuizSourceReview } from "../../src/lib/cma-source-review.shared.ts";

const read = (path) => readFileSync(new URL("../../" + path, import.meta.url), "utf8");
const records = JSON.parse(read("src/data/cma-gleim-2025-vol2-unit-15.json"));
const q = (section, number) => records.find((row) => row.section === section && row.number === number);
const wave3 = new Map([
  [13, [587, 3, "50131218"]],
  [14, [587, 3, "be4205ba"]],
  [15, [588, 3, "88c8a3bc"]],
  [16, [589, 0, "0815fbef"]],
  [17, [590, 1, "9f3d46bc"]],
  [18, [591, 3, "0e4bd867"]],
  [19, [591, 1, "3d21f6ca"]],
  [20, [592, 3, "94f8a392"]],
  [21, [593, 0, "d67bd5ed"]],
  [22, [594, 1, "7f06ef51"]],
  [23, [595, 3, "9f281eac"]],
  [24, [595, 0, "2d099b5e"]],
  [26, [598, 3, "1a553afb"]],
  [27, [599, 2, "9e09a793"]],
  [28, [600, 3, "2e4346c8"]],
]);
const key = (row) => row.section + "." + row.number;
const sourceFingerprint = (value) => {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i++) hash = Math.imul(hash ^ value.charCodeAt(i), 16777619);
  return (hash >>> 0).toString(16).padStart(8, "0");
};

test("Unit 15 Wave 3 exact Arabic coverage: 43/264, all §1 and 27/39 §2", () => {
  assert.equal(records.length, 264);
  const translated = records.filter(row => row.stemAr || row.choicesAr || row.explanationAr);
  assert.equal(translated.length, 43);
  assert.equal(translated.filter(row => row.section === 1).length, 16);
  assert.equal(translated.filter(row => row.section === 2).length, 27);
  const approved = new Set([
    ...Array.from({ length: 16 }, (_, i) => "1." + (i + 1)),
    ...Array.from({ length: 24 }, (_, i) => "2." + (i + 1)),
    "2.26", "2.27", "2.28",
  ]);
  assert.deepEqual(new Set(translated.map(key)), approved);
  for (const row of records) {
    const complete = typeof row.stemAr === "string" && !!row.stemAr.trim() &&
      typeof row.explanationAr === "string" && !!row.explanationAr.trim() &&
      Array.isArray(row.choicesAr) && row.choicesAr.length === 4 && row.choicesAr.every(x => typeof x === "string" && !!x.trim());
    assert.equal(complete, approved.has(key(row)), "Partial/untracked source translation: " + key(row));
  }
});

test("Unit 15 Wave 3 translations preserve publisher source text, key, pages and every numeric token", () => {
  assert.equal(wave3.size, 15);
  for (const [number, [page, keyIndex, expectedFingerprint]] of wave3) {
    const row = q(2, number);
    assert.ok(row, "Missing Unit 15 §2 Q" + number);
    assert.equal(row.page, page);
    assert.equal(row.answerIndex, keyIndex);
    assert.equal(row.answerStatus, "source");
    assert.equal(row.sourceTextStatus, undefined);
    assert.equal(row.choices.length, 4);
    const fingerprint = sourceFingerprint(JSON.stringify([
      row.stem, row.choices, row.explanation, row.answerIndex, row.page,
    ]));
    assert.equal(fingerprint, expectedFingerprint, "Source text/key changed: §2 Q" + number);
    const validation = validateCmaTranslation(
      { question: { en: row.stem }, choices: { en: row.choices }, explanation: { en: row.explanation } },
      { question: row.stemAr, choices: row.choicesAr, explanation: row.explanationAr },
    );
    assert.equal(validation.valid, true, "Arabic translation rejected for §2 Q" + number + ": " + validation.reason);
    for (const [en, ar] of [[row.stem, row.stemAr], [row.explanation, row.explanationAr], ...row.choices.map((choice, i) => [choice, row.choicesAr[i]])])
      assert.deepEqual(cmaNumericTokens(ar), cmaNumericTokens(en), "Numeric fidelity: §2 Q" + number);
  }
  assert.equal(120 * 600, 72000, "Canoe flexible sales use actual units and original budget price");
  assert.equal(q(2, 17).choices[ q(2, 17).answerIndex ], "$72,000");
  assert.ok(q(2, 19).explanationAr.includes("الإيرادات ملائمة"));
  assert.ok(q(2, 20).choicesAr[3].includes("مرنة"));
  assert.ok(q(2, 21).explanationAr.includes("بمشاركة"));
});

test("Unit 15 §2 Q25/Q32 damaged imported PDF columns remain English-first and unscored", () => {
  const adapter = read("src/data/cma-questions-gleim-2025-vol2.ts");
  const checker = read("scripts/check-cma-content.mjs");
  const held = [
    { number: 25, page: 596, text: "$1.360 U" },
    { number: 32, page: 607, text: "Budgete\n" },
  ];
  const samples = held.map(({number,page,text}) => {
    const row = q(2, number);
    assert.ok(row && row.page === page && row.stem.includes(text));
    assert.equal(row.stemAr, undefined);
    assert.equal(row.choicesAr, undefined);
    assert.equal(row.explanationAr, undefined);
    assert.ok(adapter.includes('"15.2.' + number + '"'),
      "Source review adapter missing question " + number);
    assert.ok(checker.includes('"15.2.' + number + '"'),
      "Content gate missing question " + number);
    return { id: "15.2." + number, sourceLayoutReview: true };
  });
  const { eligible, excluded } = splitCmaQuizSourceReview(samples, false);
  assert.deepEqual(eligible, []);
  assert.deepEqual(excluded.map(x => x.id), ["15.2.25", "15.2.32"]);
  assert.equal(wave3.has(25), false);
  assert.equal(wave3.has(32), false);
});
