import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import {
  CMA_UNIT14_REVIEW_HOLDS,
  getCmaUnit14SourceReview,
} from "../../src/lib/cma-unit14-source-review.ts";

const source = (p) => readFileSync(new URL("../../" + p, import.meta.url), "utf8");
const records = JSON.parse(source("src/data/cma-gleim-2025-vol2-unit-14.json"));
const keyOf = (row) => "14." + row.section + "." + row.number;
const held = new Map(CMA_UNIT14_REVIEW_HOLDS.map((review) => [review.id, review]));

test("Unit 14: 25 documented review holds cover exactly the 15 untranslated and 10 translated draft exceptions", () => {
  assert.equal(records.length, 175);
  assert.equal(CMA_UNIT14_REVIEW_HOLDS.length, 25);
  assert.equal(held.size, 25, "Duplicate review ID in the manifest");
  assert.equal(records.filter((q) => !!q.stemAr).length, 160);
  assert.equal(records.filter((q) => !q.stemAr).length, 15);

  const untranslated = records.filter((q) => !q.stemAr);
  const translatedHeld = records.filter((q) => !!q.stemAr && held.has(keyOf(q)));

  assert.equal(untranslated.length, 15);
  assert.equal(translatedHeld.length, 10);
  assert.ok(untranslated.every((q) => held.has(keyOf(q))),
    "Every English-first hold must have a named reviewer reason");
  assert.ok(records.filter((q) => !held.has(keyOf(q))).every((q) => !!q.stemAr),
    "A non-held Unit 14 question unexpectedly has no Arabic draft");
  assert.ok(translatedHeld.every((q) => q.choicesAr?.length === 4 && !!q.explanationAr),
    "Do not mistake a partial Arabic translation for a complete draft");
});

test("Unit 14: every review item matches source question ID and publisher page without changing an answer", () => {
  for (const entry of CMA_UNIT14_REVIEW_HOLDS) {
    const row = records.find((q) => keyOf(q) === entry.id);
    assert.ok(row, "Unmatched source record: " + entry.id);
    assert.equal(row.page, entry.page, "Wrong page for " + entry.id);
    assert.ok(row.answerIndex >= 0 && row.answerIndex < row.choices.length,
      "Source choices/key missing for " + entry.id);

    const canonicalId =
      "cma-gleim-2025-vol2-su14-s" + row.section + "-q" + String(row.number).padStart(3, "0");
    const warning = getCmaUnit14SourceReview(canonicalId);
    assert.equal(warning?.id, entry.id);
    assert.equal(warning?.page, row.page);
    assert.ok(warning?.message.ar.length > 25 && warning?.message.en.length > 25);
  }

  assert.equal(getCmaUnit14SourceReview("cma-gleim-2025-vol2-su14-s1-q001"), undefined);
  assert.equal(getCmaUnit14SourceReview("cma-gleim-2025-vol2-su13-s1-q004"), undefined);
});

test("Unit 14: translated source reflows and Montero context remain held from scored practice", () => {
  const reflowed = CMA_UNIT14_REVIEW_HOLDS.filter(
    (review) => review.kind === "reflowed-table" || review.kind === "reconstructed-choice",
  );
  assert.equal(reflowed.length, 9);
  for (const review of reflowed) {
    const q = records.find((row) => keyOf(row) === review.id);
    assert.ok(q?.stemAr && q.explanationAr && q.choicesAr?.length === 4);
    assert.ok(["reconstructed", "table-reflowed"].includes(q.sourceTextStatus));
  }

  const montero = held.get("14.5.10");
  assert.equal(montero?.kind, "missing-context");
  const predecessor = records.find((q) => keyOf(q) === "14.5.9");
  assert.ok(predecessor?.stemAr, "Montero prior case must remain in source");
  const adapter = source("src/data/cma-questions-gleim-2025-vol2.ts");
  assert.match(adapter, /pendingStandaloneContextReviews\s*=\s*new Set\(\["14\.5\.10"\]\)/);
  assert.match(adapter, /sourceLayoutReview:\s*item\.sourceTextStatus/);
  for (const review of CMA_UNIT14_REVIEW_HOLDS) {
    const q = records.find((row) => keyOf(row) === review.id);
    if (!q.sourceTextStatus) {
      assert.ok(adapter.includes('"' + review.id + '"'),
        "Unflagged publisher source case in scoring adapter: " + review.id);
    }
  }
});

test("CMA library and exam practice use the same bilingual, source-specific warnings", () => {
  for (const path of ["src/routes/library.cma.tsx", "src/components/tools/ExamPrep.tsx"]) {
    const ui = source(path);
    assert.match(ui, /getCmaUnit14SourceReview\(q\.id\)\?\.message\[lang\]/);
    assert.match(ui, /q\.sourceLayoutReview/);
  }
});
