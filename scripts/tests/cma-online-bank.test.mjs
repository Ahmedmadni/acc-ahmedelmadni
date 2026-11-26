import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const read = (location) => fs.readFileSync(path.resolve(root, location), "utf8");

test("CMA Part 2 shows bundled original question bank, not a private file picker", () => {
  const page = read("src/routes/library.cma.tsx");
  const component = read("src/components/library/CmaPart2OnlineBank.tsx");
  assert.match(page, /<CmaPart2OnlineBank[\s\S]*?studyUnit=\{selected\.studyUnit\}/);
  assert.doesNotMatch(page, /CmaPrivateBank/);
  assert.match(component, /CMA_LOCAL_QUESTIONS/);
  assert.match(component, /CMA_TOPICS/);
  assert.match(component, /topic\.part === "part-2"/);
  assert.match(component, /get.*topic|topicById/);
  assert.match(component, /CmaTranslatedQuestion/);
  assert.match(component, /\.map\(\(question, index\)/);
  assert.doesNotMatch(component, /type="file"|FileReader|file\.text\(|new FormData|supabase|\/api\/cma-translate/);
});

test("Both parts follow topic selection, guide and examples, then topic questions", () => {
  const page = read("src/routes/library.cma.tsx");
  const topicList = page.indexOf('aria-label={lang === "ar" ? "موضوعات CMA" : "CMA topics"}');
  const lesson = page.indexOf('id="cma-study-guide"');
  const explanation = page.indexOf("guide.lessonSections?.map");
  const workedExample = page.indexOf("guide.practicalCase.titleAr");
  const topicQuestions = page.indexOf("questions.slice(0, visibleQuestions)");
  const cases = page.indexOf("CMA_STUDY_UNIT_CASES.filter");
  const unitReview = page.indexOf("<CmaPart2OnlineBank");
  const externalSources = page.indexOf("CMA_PART2_PRACTICE_SOURCES.map");
  assert.ok(topicList > 0 && topicList < lesson && lesson < explanation);
  assert.ok(explanation < workedExample && workedExample < topicQuestions);
  assert.ok(topicQuestions < cases && cases < unitReview && unitReview < externalSources);
  assert.doesNotMatch(page.slice(0, topicList), /<CmaPart2OnlineBank/);
  assert.match(page, /selected\?\.part === "part-2" && showUnitReview/);
  assert.match(page, /setShowUnitReview\(false\)/);
  assert.match(page, /selected !== null && item\.studyUnit === selected\.studyUnit/);
});

test("Optional Part 2 full review includes only questions belonging to the currently selected unit", () => {
  const component = read("src/components/library/CmaPart2OnlineBank.tsx");
  const page = read("src/routes/library.cma.tsx");
  assert.match(component, /studyUnit: CmaStudyUnit/);
  assert.match(component, /question\.studyUnit === studyUnit/);
  assert.match(component, /topic\.studyUnit === studyUnit/);
  assert.match(component, /unitBank\.filter/);
  assert.match(component, /unitBank\.length/);
  assert.match(page, /studyUnit=\{selected\.studyUnit\}/);
  assert.match(page, /aria-expanded=\{showUnitReview\}/);
  assert.doesNotMatch(component, /type="file"|FileReader/);
});

test("online bank filters per domain/topic and keeps answer keys sourced from the existing question", () => {
  const component = read("src/components/library/CmaPart2OnlineBank.tsx");
  assert.match(component, /topic\.domain === domain/);
  assert.match(component, /topic\.id === topicId/);
  assert.match(component, /question\.answerIndex/);
  assert.match(component, /answers\[question\.id\]/);
  assert.match(component, /PAGE_SIZE = 12/);
  assert.match(component, /Math\.ceil\(filtered\.length \/ PAGE_SIZE\)/);
  assert.match(component, /independent practice questions/);
  assert.match(component, /ICMA © 2024/);
  assert.doesNotMatch(component, /https?:\/\//);
});

test("ICMA 2024 Part 2 official retired bank is published and credited, without a local upload", () => {
  for (const removed of [
    "src/components/library/CmaPrivateBank.tsx",
    "src/lib/cma-private-bank.ts",
  ]) assert.equal(fs.existsSync(path.resolve(root, removed)), false);
  const sourceBank = read("src/data/cma-question-bank.ts");
  assert.match(sourceBank, /CMA_ICMA_2024_PART2_QUESTIONS/);
  const mapped = read("src/data/cma-icma-2024-part2.ts");
  assert.match(mapped, /ICMA CMA Exam Support Package/);
  assert.match(mapped, /raw\.answerIndex/);
  assert.match(mapped, /raw\.layoutCheckRecommended/);
  for (const section of "abcdef") {
    const file = read(`src/data/cma-icma-2024-part2-${section}.ts`);
    assert.match(file, /Copyright © 2024 Institute of Certified Management Accountants/);
  }
  const onlineUI = read("src/components/library/CmaPart2OnlineBank.tsx");
  assert.match(onlineUI, /unitIcmaCount/);
  assert.match(onlineUI, /sourceLayoutReview/);
  assert.match(onlineUI, /ICMA © 2024/);
});

test("Part 2 provisional source comparisons never count toward performance", async () => {
  const { summarizeCmaReview } = await import("../../src/lib/cma-source-review.shared.ts");
  const questions = [
    { id: "a", answerIndex: 0 },
    { id: "b", answerIndex: 2, sourceLayoutReview: false },
    { id: "c", answerIndex: 1, sourceLayoutReview: true },
    { id: "d", answerIndex: 3, sourceLayoutReview: true },
    { id: "e", answerIndex: 0 },
  ];
  assert.deepEqual(summarizeCmaReview(questions, { a: 0, b: 1, c: 1, d: 0 }), { answered: 2, correct: 1, provisional: 2 });
  assert.deepEqual(summarizeCmaReview(questions, {}), { answered: 0, correct: 0, provisional: 0 });
  assert.deepEqual(summarizeCmaReview(questions.slice(2), { c: 1 }), { answered: 0, correct: 0, provisional: 1 });
  const component = read("src/components/library/CmaPart2OnlineBank.tsx");
  assert.ok(component.includes("summarizeCmaReview(filtered, answers)"));
  assert.ok(component.includes("scorable && revealed"));
  assert.ok(component.includes("Provisional source key:"));
  assert.ok(component.includes("scorable && <CmaAnswerSupport"));
});

test("CMA topic index preserves source order and isolates topic lookups", async () => {
  const { indexCmaQuestionsByTopic } = await import("../../src/lib/cma-topic-index.shared.ts");
  const questions = [
    { id: "1", topicId: "a" }, { id: "2", topicId: "b" }, { id: "3", topicId: "a" },
  ];
  const index = indexCmaQuestionsByTopic(questions);
  assert.deepEqual(index.get("a"), [questions[0], questions[2]]);
  assert.deepEqual(index.get("b"), [questions[1]]);
  assert.equal(index.get("missing"), undefined);
  assert.equal(indexCmaQuestionsByTopic([]).size, 0);
  const source = read("src/routes/library.cma.tsx");
  assert.ok(source.includes("indexCmaQuestionsByTopic(CMA_LOCAL_QUESTIONS)"));
  assert.ok(source.includes("questionsByTopic.get(selected.id)"));
  assert.ok(source.includes("questionsByTopic.get(item.id)?.length"));
  assert.doesNotMatch(source, /CMA_LOCAL_QUESTIONS\.filter\(\(q\) => q\.topicId === item\.id\)/);
});
