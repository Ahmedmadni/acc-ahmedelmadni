import assert from "node:assert/strict";
import test from "node:test";
import { importedAnswerIndex } from "../lib/ifrs-answer-index.mjs";

const options = ["First", "Second", "Third", "Fourth"];

test("requires an explicit base for numeric answers", () => {
  assert.throws(() => importedAnswerIndex(1, options), /numeric-answer-base/);
});

test("maps one-based and zero-based numeric answers correctly", () => {
  assert.equal(importedAnswerIndex(1, options, 1), 0);
  assert.equal(importedAnswerIndex(1, options, 0), 1);
  assert.equal(importedAnswerIndex(4, options, 1), 3);
  assert.equal(importedAnswerIndex(4, options, 0), null);
});

test("maps letter and exact-text answers without a numeric base", () => {
  assert.equal(importedAnswerIndex("B", options), 1);
  assert.equal(importedAnswerIndex("third", options), 2);
  assert.equal(importedAnswerIndex("unknown", options), null);
});
