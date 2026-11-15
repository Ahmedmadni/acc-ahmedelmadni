import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import vm from "node:vm";
import ts from "typescript";

const source = await readFile("src/lib/library-study-language.ts", "utf8");
const transformed = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const module = { exports: {} };
vm.runInNewContext(transformed, {
  module,
  exports: module.exports,
  require: (name) => {
    if (name === "react") return {};
    throw Error("Unexpected import " + name);
  },
});
const { studySectionForPath, studyLanguageStorageKey, readStudyLanguage } = module.exports;

test("CMA and IFRS both resolve within their nested study routes; other pages retain site language", () => {
  assert.equal(studySectionForPath("/library/cma"), "cma");
  assert.equal(studySectionForPath("/library/cma/"), "cma");
  assert.equal(studySectionForPath("/library/standards"), "standards");
  assert.equal(studySectionForPath("/library/standards/ifrs-17"), "standards");
  assert.equal(studySectionForPath("/library/standards/ias-2"), "standards");
  assert.equal(studySectionForPath("/library/books"), null);
  assert.equal(studySectionForPath("/library/standards-old"), null);
  assert.equal(studySectionForPath("/"), null);
});

test("English is the independent default even if the portfolio global-language setting is Arabic", () => {
  for (const section of ["cma", "standards"]) {
    const key = studyLanguageStorageKey(section);
    assert.notEqual(key, "global-lang");
    assert.equal(readStudyLanguage(section, () => null), "en");
    assert.equal(readStudyLanguage(section, (query) => query === "global-lang" ? "ar" : null), "en");
    assert.equal(readStudyLanguage(section, () => "fr"), "en");
    assert.equal(readStudyLanguage(section, () => { throw Error("blocked"); }), "en");
  }
  assert.notEqual(studyLanguageStorageKey("cma"), studyLanguageStorageKey("standards"));
});

test("Arabic is selected only for the section explicitly saved; other study section remains English", () => {
  const preferences = new Map([[studyLanguageStorageKey("cma"), "ar"]]);
  const read = (key) => preferences.get(key) ?? null;
  assert.equal(readStudyLanguage("cma", read), "ar");
  assert.equal(readStudyLanguage("standards", read), "en");
  preferences.set(studyLanguageStorageKey("standards"), "ar");
  assert.equal(readStudyLanguage("standards", read), "ar");
});

test("Study routes consume library language context rather than global language directly", async () => {
  const [layout,cma,standards,standard,quiz] = await Promise.all([
    readFile("src/routes/library.tsx", "utf8"),
    readFile("src/routes/library.cma.tsx", "utf8"),
    readFile("src/routes/library.standards.tsx", "utf8"),
    readFile("src/routes/library.standards_.$standardSlug.tsx", "utf8"),
    readFile("src/components/library/IfrsQuestionBank.tsx", "utf8"),
  ]);
  for (const [name,content] of [["CMA",cma],["IFRS index",standards],["IFRS article",standard]]) {
    assert.match(content,/const lang = useLibLang\(\);/,name);
    assert.doesNotMatch(content,/useSiteLang/,"Global site language must not override "+name);
  }
  assert.match(layout,/const lang = studySection \? studyLanguages\[studySection\] : siteLang;/);
  assert.match(layout,/setStudyLanguage\(studySection, lang === "en" \? "ar" : "en"\)/);
  assert.match(layout,/LibLangCtx\.Provider value=\{lang\}/);
  assert.match(layout,/document\.documentElement\.dir = isRTL \? "rtl" : "ltr"/);
  assert.match(layout,/focus && studySection/,"Arabic toggle must also work in focus mode");
  assert.match(cma,/setStudyUnit\(value\);\s*setDomain\("all"\);\s*setQuery\(""/,
    "CMA unit changes must not keep stale search/domain filters");
  assert.match(quiz,/currentQuestion\.question\[lang\]/,
    "Exam question and its bilingual explanations must follow the chosen language");
});

test("English-first CMA and IFRS metadata accompany accessible Arabic switching", async () => {
  const [cma,ifrs,detail] = await Promise.all([
    readFile("src/routes/library.cma.tsx", "utf8"),
    readFile("src/routes/library.standards.tsx", "utf8"),
    readFile("src/routes/library.standards_.$standardSlug.tsx", "utf8"),
  ]);
  assert.match(cma,/CMA Exam Study — Parts 1 & 2/);
  assert.match(ifrs,/IFRS & IAS Standards — English-first Study Library/);
  assert.match(detail,/standard\.summaryEn/);
});
