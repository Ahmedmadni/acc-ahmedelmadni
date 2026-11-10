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
  assert.match(onlineUI, /icmaCount/);
  assert.match(onlineUI, /sourceLayoutReview/);
  assert.match(onlineUI, /ICMA © 2024/);
});
