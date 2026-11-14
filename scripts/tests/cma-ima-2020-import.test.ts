import { describe, expect, it } from "vitest";
import { CMA_LOCAL_QUESTIONS } from "../../src/data/cma-question-bank";
import { CMA_STUDY_UNIT_CASES } from "../../src/data/cma-guides";
import { CMA_TOPICS } from "../../src/data/cma-topics";
import {
  CMA_IMA_2020_ESSAY_CASES,
  CMA_IMA_2020_SAMPLE_QUESTIONS,
} from "../../src/data/cma-ima-2020-sample-questions";
import audit from "../../src/data/cma-ima-2020-import-audit.json";

// Answer letters from the IMA February and April 2020 answer keys.
const IMA_KEYS: Record<string, string> = {
  "cma-ima-2020-feb-p1-q1": "c", "cma-ima-2020-feb-p1-q8": "c", "cma-ima-2020-feb-p1-q9": "b",
  "cma-ima-2020-feb-p2-q1": "c", "cma-ima-2020-feb-p2-q2": "d", "cma-ima-2020-feb-p2-q3": "c",
  "cma-ima-2020-feb-p2-q4": "d", "cma-ima-2020-feb-p2-q5": "b", "cma-ima-2020-feb-p2-q6": "c",
  "cma-ima-2020-feb-p2-q7": "c", "cma-ima-2020-feb-p2-q8": "c", "cma-ima-2020-feb-p2-q9": "c",
  "cma-ima-2020-feb-p2-q10": "d", "cma-ima-2020-apr-p1-q5": "c", "cma-ima-2020-apr-p2-q1": "a",
  "cma-ima-2020-apr-p2-q2": "d", "cma-ima-2020-apr-p2-q3": "c", "cma-ima-2020-apr-p2-q4": "c",
  "cma-ima-2020-apr-p2-q5": "c",
};

describe("IMA 2020 sample import", () => {
  it("adds exactly the 19 non-duplicate MCQs out of 30 in the two PDFs", () => {
    expect(audit).toHaveLength(30);
    expect(CMA_IMA_2020_SAMPLE_QUESTIONS).toHaveLength(19);
    expect(CMA_IMA_2020_SAMPLE_QUESTIONS.map((q) => q.id).sort()).toEqual(Object.keys(IMA_KEYS).sort());
  });

  it("keeps the IMA answer key and English choice order for every question", () => {
    const source = new Map(audit.map((q) => [q.id, q]));
    for (const q of CMA_IMA_2020_SAMPLE_QUESTIONS) {
      expect("abcd"[q.answerIndex]).toBe(IMA_KEYS[q.id]);
      expect(q.choices.en).toEqual(source.get(q.id)!.choices.en);
      expect(q.question.en).toBe(source.get(q.id)!.question.en);
      expect(q.choices.ar).toHaveLength(q.choices.en.length);
      expect(q.question.ar).toMatch(/[\u0600-\u06ff]/);
      expect(q.explanation.ar).toMatch(/[\u0600-\u06ff]/);
    }
  });

  it("links every question to an existing topic in the matching study unit", () => {
    const topics = new Map(CMA_TOPICS.map((t) => [t.id, t]));
    for (const q of CMA_IMA_2020_SAMPLE_QUESTIONS) {
      expect(topics.get(q.topicId)?.studyUnit).toBe(q.studyUnit);
    }
  });

  it("appears once in the shared CMA bank used by the library and exam tool", () => {
    const ids = CMA_LOCAL_QUESTIONS.map((q) => q.id);
    for (const q of CMA_IMA_2020_SAMPLE_QUESTIONS) expect(ids.filter((id) => id === q.id)).toHaveLength(1);
  });

  it("adds the Brown Printing and Grandeur essays with the published results", () => {
    expect(CMA_IMA_2020_ESSAY_CASES.map((c) => c.studyUnit)).toEqual([7, "p2-13"]);
    for (const c of CMA_IMA_2020_ESSAY_CASES) expect(CMA_STUDY_UNIT_CASES).toContain(c);
    const [brown, grandeur] = CMA_IMA_2020_ESSAY_CASES;
    expect(brown.tasks[1].solution.en).toContain("$220,000");
    expect(brown.tasks[2].solution.en).toContain("$300,000");
    expect(brown.tasks[4].solution.en).toContain("$80,000");
    expect(grandeur.tasks[1].solution.en).toContain("C and D");
  });
});
