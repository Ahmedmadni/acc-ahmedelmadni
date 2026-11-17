import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  cmaNumericTokens,
  cmaSourceHash,
  createPastedCmaTranslation,
  isCmaNumericOnlyChoice,
  normalizeCmaNumericNotation,
  validateCmaTranslation,
} from "../../src/lib/cma-translation.shared.ts";

const source = {
  question: { en: "A company earns 12,500 and spends 1,250.00. What is 10% of profit?" },
  choices: { en: ["1,125", "100", "2,000", "None of the above"] },
  explanation: { en: "Calculate (12,500 - 1,250.00) x 10% = 1,125." },
};

const valid = {
  question: "حققت الشركة 12,500 وأنفقت 1,250.00. ما قيمة 10% من الربح؟",
  choices: ["1,125", "100", "2,000", "لا شيء مما سبق"],
  explanation: "احسب (12,500 - 1,250.00) × 10% = 1,125.",
};

test("preserves source numbers in every field and option", () => {
  assert.equal(validateCmaTranslation(source, valid).valid, true);
  assert.deepEqual(cmaNumericTokens("12,500; 10%; 1,250.00"), ["12,500", "10%", "1,250.00"]);
});

test("rejects numerical changes, option count changes and incomplete translation", () => {
  assert.equal(validateCmaTranslation(source, { ...valid, choices: ["1,125"] }).valid, false);
  assert.equal(validateCmaTranslation(source, { ...valid, choices: ["1,126", ...valid.choices.slice(1)] }).valid, false);
  assert.equal(validateCmaTranslation(source, { ...valid, explanation: "Calculate (12,500 - 1,250.00) x 10% = 1,125." }).valid, false);
  assert.equal(validateCmaTranslation(source, { ...valid, question: "قيمة ١٢,٥٠٠" }).valid, false);
});

test("source edit invalidates the translation cache key", () => {
  const oldHash = cmaSourceHash(source);
  assert.equal(oldHash, cmaSourceHash(structuredClone(source)));
  assert.notEqual(oldHash, cmaSourceHash({ ...source, question: { en: source.question.en + " " } }));
  assert.notEqual(oldHash, cmaSourceHash({ ...source, choices: { en: [...source.choices.en].reverse() } }));
});


test("Arabic-Indic numerals and standard Arabic separators pass only when values are unchanged", () => {
  assert.equal(normalizeCmaNumericNotation("١٢٬٥٠٠ و ۱٬۲۵۰٫۰۰"), "12,500 و 1,250.00");
  assert.deepEqual(cmaNumericTokens("١٢٬٥٠٠ و ١٠٪ و ۱٬۲۵۰٫۰۰"), ["12,500", "10%", "1,250.00"]);
  const good = {
    ...valid,
    question: "حققت الشركة ١٢٬٥٠٠ وأنفقت ١٬٢٥٠٫٠٠. ما قيمة ١٠% من الربح؟",
    explanation: "احسب (١٢٬٥٠٠ - ١٬٢٥٠٫٠٠) × ١٠% = ١٬١٢٥.",
    choices: ["١٬١٢٥", "١٠٠", "٢٬٠٠٠", "لا شيء مما سبق"],
  };
  assert.equal(validateCmaTranslation(source, good).valid, true);
  const unsafe = { ...good, choices: ["١٬١٢٦", ...good.choices.slice(1)] };
  assert.equal(validateCmaTranslation(source, unsafe).valid, false);
  const dropped = { ...good, explanation: good.explanation.replace("١٬٢٥٠٫٠٠", "١٬٢٠٠٫٠٠") };
  assert.equal(validateCmaTranslation(source, dropped).valid, false);
});

test("User-pasted translation is explicitly unreviewed and cannot change answer options", () => {
  const inserted = createPastedCmaTranslation(source, valid);
  assert.equal(inserted.valid, true);
  assert.equal(inserted.data.status, "pasted");
  assert.equal(inserted.data.sourceHash, cmaSourceHash(source));
  assert.equal(inserted.data.choices.length, source.choices.en.length);
  assert.equal(createPastedCmaTranslation(source, { ...valid, choices: valid.choices.slice(1) }).valid, false);
  assert.equal(createPastedCmaTranslation(source, { ...valid, question: "12,500" }).valid, false);
});

test("Numerical answer options need no translation but written choices do", () => {
  assert.equal(isCmaNumericOnlyChoice("1,125.00"), true);
  assert.equal(isCmaNumericOnlyChoice("75%"), true);
  assert.equal(isCmaNumericOnlyChoice("SAR 100"), false);
  assert.equal(isCmaNumericOnlyChoice("Ignore costs"), false);
});


test("CMA Unit 11 has all 58 complete numerically faithful Arabic question translations", () => {
  const records = JSON.parse(readFileSync(
    new URL("../../src/data/cma-gleim-2025-vol2-unit-11.json", import.meta.url), "utf8",
  ));
  const localized = records.filter(item => item.stemAr !== undefined ||
    item.choicesAr !== undefined || item.explanationAr !== undefined);
  assert.equal(records.length,58);
  assert.equal(localized.length,58,"No source question can be advertised as Arabic without translation");
  assert.deepEqual(records.filter(row => row.section===1).map(row => row.number),
    Array.from({length:26},(_,i)=>i+1));
  assert.deepEqual(records.filter(row => row.section===2).map(row => row.number),
    Array.from({length:32},(_,i)=>i+1));
  const expectedKeys = {
    1: [0,0,1,1,2,2,3,0,3,2,3,0,2,0,1,1,2,0,0,2,3,2,1,1,2,2],
    2: [2,2,3,1,3,2,2,3,3,1,0,1,1,0,0,2,3,2,2,3,0,3,3,1,3,3,3,2,3,3,2,1],
  };
  for(const row of localized){
    assert.equal(row.choices.length,4);
    assert.equal(row.answerIndex,expectedKeys[row.section][row.number-1],
      "The original source answer index must never change: "+row.section+"."+row.number);
    const checked = validateCmaTranslation(
      {question:{en:row.stem},choices:{en:row.choices},explanation:{en:row.explanation}},
      {question:row.stemAr,choices:row.choicesAr,explanation:row.explanationAr},
    );
    assert.equal(checked.valid,true,
      "Invalid translated question or changed figures in Unit 11 "+row.section+"."+row.number+
      ": "+checked.reason);
    assert.equal(row.choicesAr.length,row.choices.length);
    assert.match(row.stemAr,/[\u0600-\u06ff]/);
    assert.match(row.explanationAr,/[\u0600-\u06ff]/);
  }
  const repaired=records.filter(row=>row.sourceTextStatus==="table-reflowed");
  assert.deepEqual(repaired.map(row=>[row.section,row.number]),[[2,12],[2,13]]);
  assert.equal(repaired[0].stem,repaired[1].stem.slice(0,repaired[1].stem.lastIndexOf("\n"))+
    "\nWhat is the amount of quality costs classified as preventive costs for the manufacturing firm?",
    "The two separate questions must contain the same repaired original cost table");
  for(const row of repaired){
    assert.ok(row.stem.includes("Design reviews — $275,000"));
    assert.ok(row.stem.includes("Manufacturing rework labor and overhead — 150,000"));
    assert.ok(row.stem.includes("Training of manufacturing workers — 156,000"));
  }
});

test("a partial or altered Arabic question cannot pass the static-source translation gate", () => {
  const row = JSON.parse(readFileSync(
    new URL("../../src/data/cma-gleim-2025-vol2-unit-11.json", import.meta.url), "utf8",
  ))[5];
  const source={question:{en:row.stem},choices:{en:row.choices},explanation:{en:row.explanation}};
  assert.equal(validateCmaTranslation(source,{
    question:row.stemAr, choices:row.choicesAr.slice(0,3), explanation:row.explanationAr,
  }).valid,false);
  assert.equal(validateCmaTranslation(source,{
    question:row.stemAr, choices:row.choicesAr, explanation:row.explanationAr.replace("1.", "8."),
  }).valid,false);
});
