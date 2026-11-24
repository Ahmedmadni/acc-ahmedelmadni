import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import {
  cmaNumericTokens,
  validateCmaTranslation,
} from "../../src/lib/cma-translation.shared.ts";

const source = new URL("../../src/data/cma-gleim-2025-vol2-unit-15.json", import.meta.url);
const records = JSON.parse(readFileSync(source, "utf8"));
const sourceRows = records.filter((row) => row.section === 1);
const keys = new Map([
  [1, [563, 0, "55577131"]],
  [2, [564, 0, "d59fd896"]],
  [3, [565, 0, "6b095ebd"]],
  [4, [566, 3, "5ee76dde"]],
  [5, [567, 3, "8c0c90ca"]],
  [6, [567, 3, "e8babb19"]],
  [7, [568, 2, "2999a714"]],
  [8, [569, 1, "daebcb61"]],
  [10, [571, 2, "0b5a5996"]],
  [11, [571, 3, "65ee16a9"]],
  [12, [572, 1, "26c04ada"]],
  [13, [573, 1, "073e6461"]],
  [14, [573, 3, "986db0cc"]],
  [15, [574, 0, "c285eaec"]],
]);

function fingerprint(text) {
  let hash = 0x811c9dc5;
  for (let i = 0; i < text.length; i++)
    hash = Math.imul(hash ^ text.charCodeAt(i), 0x01000193);
  return (hash >>> 0).toString(16).padStart(8, "0");
}

test("Unit 15 first wave: all fourteen original Section 1 Arabic drafts remain intact after later waves", () => {
  assert.equal(records.length, 264);
  const firstWave = records.filter((q) => q.section === 1 && keys.has(q.number));
  assert.equal(firstWave.length, 14);
  assert.deepEqual(
    firstWave.map((q) => q.section + "." + q.number),
    [...keys.keys()].map((number) => "1." + number),
  );
  for (const q of firstWave) {
    assert.ok(q.stemAr && q.explanationAr && q.choicesAr?.length === 4,
      "Previously approved Unit 15 Arabic source draft was damaged: 1." + q.number);
  }
});

test("Unit 15 wave 1: canonical English, original key, source-page mapping and ordered numeric tokens are locked", () => {
  for (const [number, [page, key, canonicalHash]] of keys) {
    const row = sourceRows.find((r) => r.number === number);
    assert.ok(row, "Missing question " + number);
    assert.equal(row.page, page);
    assert.equal(row.answerIndex, key);
    assert.equal(row.answerStatus, "source");
    assert.equal(row.sourceTextStatus, undefined);
    assert.equal(
      fingerprint(JSON.stringify([row.stem, row.choices, row.explanation, row.answerIndex, row.page])),
      canonicalHash,
      "The original publisher fields changed for question " + number,
    );
    assert.equal(row.choices.length, 4);
    assert.equal(row.choicesAr?.length, 4);
    const validation = validateCmaTranslation(
      { question: { en: row.stem }, choices: { en: row.choices }, explanation: { en: row.explanation } },
      { question: row.stemAr, choices: row.choicesAr, explanation: row.explanationAr },
    );
    assert.equal(validation.valid, true, "Invalid Arabic fields for Q" + number + ": " + validation.reason);
    for (const [english, arabic] of [
      [row.stem, row.stemAr],
      ...row.choices.map((choice, index) => [choice, row.choicesAr[index]]),
      [row.explanation, row.explanationAr],
    ]) {
      assert.deepEqual(
        cmaNumericTokens(arabic),
        cmaNumericTokens(english),
        "Numeric integrity must preserve original order for Q" + number,
      );
    }
  }
});

test("Unit 15 wave 1: didactic distinctions preserve management by exception, controllability and flexible budgeting", () => {
  const q = (number) => sourceRows.find((row) => row.number === number);
  assert.ok(q(1).explanationAr.includes("التحسين المستمر"));
  assert.ok(q(4).explanationAr.includes("ملائمة أو غير ملائمة"));
  assert.ok(q(6).stemAr.includes("10%"));
  assert.ok(q(8).explanationAr.includes("القابلية للرقابة"));
  assert.ok(q(11).explanationAr.includes("الانحرافات الإيجابية"));
  assert.ok(q(15).choicesAr[0].includes("لكل وحدة"));
  assert.ok(q(15).choicesAr[0].includes("بإجماليها"));
});
