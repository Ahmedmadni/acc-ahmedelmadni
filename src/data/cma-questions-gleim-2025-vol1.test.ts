import { describe, expect, it } from "vitest";
import { CMA_GLEIM_2025_VOL1_QUESTIONS, hasCompleteArabic } from "./cma-questions-gleim-2025-vol1";
import unit1 from "./cma-gleim-2025-vol1-unit-1.json";

const base = { choices: ["a", "b", "c", "d"] };

describe("CMA Part 1 Arabic translation", () => {
  it("uses Arabic only when stem, explanation and all four choices exist", () => {
    expect(hasCompleteArabic({ ...base, stemAr: "س", choicesAr: ["أ", "ب", "ج", "د"], explanationAr: "ش" })).toBe(true);
    expect(hasCompleteArabic({ ...base, stemAr: "س", choicesAr: ["أ", "ب", "ج"], explanationAr: "ش" })).toBe(false);
    expect(hasCompleteArabic({ ...base, stemAr: "س", choicesAr: ["أ", "ب", "ج", "د"] })).toBe(false);
    expect(hasCompleteArabic(base)).toBe(false);
  });

  it("keeps the original English text and answer index for every unit 1 question", () => {
    const mapped = CMA_GLEIM_2025_VOL1_QUESTIONS.slice(0, unit1.length);
    mapped.forEach((q, i) => {
      expect(q.question.en).toBe(unit1[i].stem);
      expect(q.choices.en).toEqual(unit1[i].choices);
      expect(q.answerIndex).toBe(unit1[i].answerIndex);
    });
  });
});
