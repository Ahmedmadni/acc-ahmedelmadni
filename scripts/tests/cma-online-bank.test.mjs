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
  assert.match(page, /<CmaPart2OnlineBank lang=\{lang\}/);
  assert.doesNotMatch(page, /CmaPrivateBank/);
  assert.match(component, /CMA_LOCAL_QUESTIONS/);
  assert.match(component, /CMA_TOPICS/);
  assert.match(component, /topic\.part === "part-2"/);
  assert.match(component, /get.*topic|topicById/);
  assert.match(component, /CmaTranslatedQuestion/);
  assert.match(component, /\.map\(\(question, index\)/);
  assert.doesNotMatch(component, /type="file"|FileReader|file\.text\(|new FormData|supabase|\/api\/cma-translate/);
});

test("online bank filters per domain/topic and keeps answer keys sourced from the existing question", () => {
  const component = read("src/components/library/CmaPart2OnlineBank.tsx");
  assert.match(component, /topic\.domain === domain/);
  assert.match(component, /topic\.id === topicId/);
  assert.match(component, /question\.answerIndex/);
  assert.match(component, /answers\[question\.id\]/);
  assert.match(component, /PAGE_SIZE = 12/);
  assert.match(component, /Math\.ceil\(filtered\.length \/ PAGE_SIZE\)/);
  assert.match(component, /independently authored practice questions/);
  assert.doesNotMatch(component, /https?:\/\//);
});

test("protected ICMA PDF content and local private importer are excluded from published code", () => {
  for (const removed of [
    "src/components/library/CmaPrivateBank.tsx",
    "src/lib/cma-private-bank.ts",
  ]) assert.equal(fs.existsSync(path.resolve(root, removed)), false);
  const sourceBank = read("src/data/cma-question-bank.ts");
  assert.doesNotMatch(sourceBank, /cma-private-question-bank-v1|IMA2024-P2-A-001/);
});
