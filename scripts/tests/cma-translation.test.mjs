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


test("CMA Unit 12 regression source translations keep all 23 original answer indexes and numeric tokens", () => {
  const records=JSON.parse(readFileSync(
    new URL("../../src/data/cma-gleim-2025-vol2-unit-12.json", import.meta.url), "utf8",
  ));
  assert.equal(records.length,155);
  const expected=new Map([
    [1,1],[2,2],[3,3],[4,1],[5,3],[6,0],[7,2],
    [10,0],[11,2],[12,2],[15,0],[16,2],[17,3],[18,3],
    [19,2],[20,2],[21,0],[22,0],[23,2],[24,2],[25,0],[26,3],[27,0],
  ]);
  const translated=records.filter(q=>q.section===1 && (q.stemAr!==undefined ||
    q.choicesAr!==undefined || q.explanationAr!==undefined));
  assert.equal(translated.length,expected.size);
  assert.deepEqual(translated.map(q=>[q.section,q.number]),
    [...expected.keys()].map(n=>[1,n]));
  for(const row of translated){
    assert.equal(row.section,1);
    assert.equal(row.answerIndex,expected.get(row.number),
      "Unit 12 source answer index changed: "+row.number);
    assert.equal(row.choicesAr.length,4);
    const checked=validateCmaTranslation(
      {question:{en:row.stem},choices:{en:row.choices},explanation:{en:row.explanation}},
      {question:row.stemAr,choices:row.choicesAr,explanation:row.explanationAr},
    );
    assert.equal(checked.valid,true,
      "Arabic numerical/text validation failed for Unit 12 Q"+row.number+
      ": "+checked.reason);
    assert.match(row.stemAr,/[\u0600-\u06ff]/);
    assert.match(row.explanationAr,/[\u0600-\u06ff]/);
  }
  // Complex publisher source tables are intentionally not misrepresented
  // as fully translated before layout and numeric context review.
  assert.deepEqual(records.filter(row=>row.section===1&&!row.stemAr)
    .map(row=>row.number),[8,9,13,14,28]);
  // Section 5 remains English-only; Sections 3 and 4 have their own
  // separate, explicit allowlists and answer-key integrity tests below.
  assert.ok(records.filter(row=>row.section===5).every(
    row=>row.stemAr===undefined && row.choicesAr===undefined &&
      row.explanationAr===undefined));
});

test("an incomplete or numerically changed Unit 12 translation never passes validation",()=>{
  const row=JSON.parse(readFileSync(
    new URL("../../src/data/cma-gleim-2025-vol2-unit-12.json", import.meta.url), "utf8",
  )).find(q=>q.section===1&&q.number===26);
  const source={question:{en:row.stem},choices:{en:row.choices},explanation:{en:row.explanation}};
  assert.equal(validateCmaTranslation(source,{
    question:row.stemAr,choices:row.choicesAr.slice(1),explanation:row.explanationAr,
  }).valid,false);
  assert.equal(validateCmaTranslation(source,{
    question:row.stemAr.replace("5,000 ساعة","5,100 ساعة"),
    choices:row.choicesAr,explanation:row.explanationAr,
  }).valid,false);
});


test("Unit 12 learning-curve Section 2 has exactly 31 numerically faithful Arabic translations",()=>{
  const records=JSON.parse(readFileSync(
    new URL("../../src/data/cma-gleim-2025-vol2-unit-12.json",import.meta.url),"utf8",
  ));
  const expected=new Map([
    [1,2],[2,3],[5,1],[6,2],[7,1],[8,0],[9,1],
    [10,2],[11,0],[12,1],[13,3],[14,0],[15,3],
    [16,0],[17,1],[18,0],[19,3],[20,1],[21,1],[22,0],
    [24,0],[25,3],[26,1],[27,3],[28,2],[29,2],[30,0],
    [31,0],[32,1],[33,2],[34,1],
  ]);
  const translated=records.filter(q=>q.section===2 &&
    (q.stemAr!==undefined||q.choicesAr!==undefined||q.explanationAr!==undefined));
  assert.equal(translated.length,expected.size);
  assert.deepEqual(translated.map(q=>q.number),[...expected.keys()]);
  for(const row of translated){
    assert.equal(row.answerIndex,expected.get(row.number),
      "Learning-curve answer index changed: "+row.number);
    const checked=validateCmaTranslation(
      {question:{en:row.stem},choices:{en:row.choices},explanation:{en:row.explanation}},
      {question:row.stemAr,choices:row.choicesAr,explanation:row.explanationAr},
    );
    assert.equal(checked.valid,true,
      "Arabic learning-curve figures/choices mismatch Q"+row.number+": "+checked.reason);
    assert.equal(row.choicesAr.length,4);
    assert.match(row.stemAr,/[\u0600-\u06ff]/);
    assert.match(row.explanationAr,/[\u0600-\u06ff]/);
  }
  assert.deepEqual(records.filter(q=>q.section===2&&!q.stemAr).map(q=>q.number),
    [3,4,23]);
});

test("Learning-curve solved examples follow independently recomputed arithmetic",()=>{
  // Cumulative-average learning model: average time per unit after each
  // doubling is the previous average multiplied by the learning factor.
  const cumulative=(first,rate,doublings)=>first*rate**doublings;
  assert.equal(cumulative(50,0.9,2),40.5);
  assert.equal(cumulative(50,0.8,3),25.600000000000005);
  assert.equal(2*cumulative(50,0.8,1)-50,30);
  assert.equal(Math.round(400*72*0.6),17280);
  assert.equal(Math.round(320*cumulative(120/80,0.8,2)*10)/10-120,187.2);
  assert.equal(Math.round(cumulative(10,0.9,3)*100)/100,7.29);
  assert.equal(Math.round(cumulative(10000,0.8,3)),5120);
  assert.equal(Math.round(8*cumulative(10000,0.8,3)),40960);
  assert.equal(Math.round(8*cumulative(10000,0.8,3)-10000),30960);
  assert.equal(Math.round(cumulative(20000,0.7,3)),6860);
  assert.equal(8*Math.round(cumulative(20000,0.7,3)),54880);
  assert.equal(8*Math.round(cumulative(20000,0.7,3))-20000,34880);
  assert.equal(Math.round(4*(800*0.9**2)-800),1792);
  assert.equal(Math.round(4*((200/2)*0.9)),360);
});


test("CMA Unit 12 Section 3 has exactly 40 complete Arabic expected-value and sensitivity questions",()=>{
  const records=JSON.parse(readFileSync(
    new URL("../../src/data/cma-gleim-2025-vol2-unit-12.json",import.meta.url),"utf8",
  ));
  const expected=new Map([
    [1,1],[2,2],[3,3],[4,3],[5,2],[6,1],[7,3],[9,1],
    [11,2],[12,1],[13,2],[14,0],[15,2],[16,2],[17,1],[18,1],
    [19,3],[20,3],[21,0],[22,2],[25,0],[26,1],[30,2],[31,1],
    [33,0],[37,3],[38,2],[39,2],[40,2],[41,2],[42,0],[43,1],[44,0],
    [45,2],[46,0],[47,2],[48,0],[49,1],[50,0],[51,0],
  ]);
  const localized=records.filter(r=>r.section===3 &&
    (r.stemAr!==undefined||r.choicesAr!==undefined||r.explanationAr!==undefined));
  assert.equal(localized.length,expected.size);
  assert.deepEqual(localized.map(r=>r.number),[...expected.keys()]);
  for(const row of localized){
    assert.equal(row.answerIndex,expected.get(row.number),
      "Original CMA source answer key changed: section 3 Q"+row.number);
    assert.equal(row.choicesAr.length,4);
    const checked=validateCmaTranslation(
      {question:{en:row.stem},choices:{en:row.choices},explanation:{en:row.explanation}},
      {question:row.stemAr,choices:row.choicesAr,explanation:row.explanationAr},
    );
    assert.equal(checked.valid,true,
      "Invalid source numbers/choices in Arabic Unit 12 §3 Q"+row.number+": "+checked.reason);
    assert.match(row.stemAr,/[\u0600-\u06ff]/);
    assert.match(row.explanationAr,/[\u0600-\u06ff]/);
  }
  assert.equal(records.filter(r=>r.section===3).length,51);
  for(const n of [8,10,23,24,27,28,29,32,34,35,36]){
    const row=records.find(r=>r.section===3&&r.number===n);
    assert.equal(row.stemAr,undefined,
      "An unverified source layout must remain English-first: Q"+n);
  }
  assert.ok(records.filter(r=>r.section===5).every(r=>
    r.stemAr===undefined&&r.choicesAr===undefined&&r.explanationAr===undefined));
});

test("CMA Unit 12 expected-value examples are independently recalculated",()=>{
  const weighted=(items)=>items.reduce((sum,[payoff,p])=>sum+payoff*p,0);
  assert.equal(weighted([[60000,.25],[85000,.40],[100000,.35]])*.8,67200);
  assert.equal(Math.round((.45+.25)*100),70);
  assert.equal(weighted([[100,.15],[300,.45],[500,.25],[700,.15]]),380);
  assert.equal(weighted([[200000,.5],[100000,.4],[550000,.1]]),195000);
  assert.equal(Math.round(12*((19/12)*800-1000)),3200);
  assert.equal(weighted([[2000,.10],[3000,.15],[4000,.20],[5000,.35],[6000,.20]]),4400);
  assert.equal(3000-4000*.3,1800);
  assert.equal(4000-4000*.3,2800);
  const demand=weighted([[200000,.4],[300000,.3],[400000,.2],[500000,.1]]);
  assert.equal(demand,300000);
  assert.equal(demand*.4+50000,170000);
  assert.equal(demand*.6+20000,200000);
  assert.equal(demand*.2+120000,180000);
  assert.equal(weighted([[180,.1],[200,.4],[240,.3],[250,.2]]),220);
  assert.equal(weighted([[550000,.20],[475000,.35],[350000,.45]]),433750);
  assert.equal(weighted([[2000000,.15],[2500000,.45],[3500000,.30],[5000000,.10]]),2975000);
  assert.equal(weighted([[120000,.25],[170000,.4],[200000,.35]])*.8,134400);
});


test("CMA Unit 12 Section 4 strategy and BCG questions are 28/28 complete with unchanged keys",()=>{
  const records=JSON.parse(readFileSync(
    new URL("../../src/data/cma-gleim-2025-vol2-unit-12.json",import.meta.url),"utf8",
  ));
  const keys=[2,0,2,3,1,2,2,0,0,0,2,3,1,0,2,3,1,2,2,1,2,0,2,3,3,3,3,1];
  const rows=records.filter(q=>q.section===4);
  assert.equal(rows.length,28);
  for(const row of rows){
    assert.equal(row.answerIndex,keys[row.number-1],"Source answer changed Q"+row.number);
    assert.equal(row.choices.length,4);
    assert.equal(row.choicesAr?.length,4,"Incomplete Arabic choices Q"+row.number);
    const checked=validateCmaTranslation(
      {question:{en:row.stem},choices:{en:row.choices},explanation:{en:row.explanation}},
      {question:row.stemAr,choices:row.choicesAr,explanation:row.explanationAr},
    );
    assert.equal(checked.valid,true,
      "Numerical or structural translation mismatch §4 Q"+row.number+": "+checked.reason);
    assert.match(row.stemAr,/[\u0600-\u06ff]/);
    assert.match(row.explanationAr,/[\u0600-\u06ff]/);
  }
  assert.deepEqual(rows.map(q=>q.number),Array.from({length:28},(_,i)=>i+1));
  assert.ok(records.filter(q=>q.section===5).every(q=>
    q.stemAr===undefined&&q.choicesAr===undefined&&q.explanationAr===undefined));
});

test("New CMA expected-value and operating profit calculations recompute independently",()=>{
  const weighted=(items)=>items.reduce((sum,[value,prob])=>sum+value*prob,0);
  assert.equal(weighted([[-4000,.2],[10000,.3],[30000,.3],[60000,.2]]),23200);
  const planOne=weighted([[300000,.4],[240000,.6]]);
  const planTwo=weighted([[370000,.4],[180000,.6]]);
  assert.equal(planOne,264000);
  assert.equal(planTwo,256000);
  assert.equal(planOne-planTwo,8000);
  const expectedUnits=weighted([[15000,.10],[30000,.35],[45000,.10],
    [60000,.25],[75000,.20]]);
  assert.equal(expectedUnits,46500);
  assert.equal(expectedUnits*(5.20-3.20)-40000,53000);
  assert.equal(Math.round(weighted([[-20,.1],[5,.2],[15,.4],[20,.2],[30,.1]])),12);
  const weightedContribution=weighted([[600000,.2],[800000,.5],[1000000,.3]])*(100-60);
  assert.equal(weightedContribution-25000000,7800000);
  const avgAnimals=weighted([[12,1/12],[20,4/12],[25,3/12],[35,2/12],[40,2/12]]);
  assert.equal(Math.round(avgAnimals*100)/100,26.42);
  const staffNeeded=avgAnimals<=10?1:avgAnimals<=23?2:avgAnimals<=36?3:4;
  assert.equal(staffNeeded,3);
  const expectedBoothRent=weighted([[37.5*70*.2,.4],[37.5*40*.2,.6]]);
  assert.equal(expectedBoothRent,390);
  assert.equal(weighted([[-300000,.1],[0,.2],[100000,.5],[600000,.2]]),140000);
  const locationA=weighted([[400000,.45],[325000,.55]]);
  const locationB=weighted([[600000,.25],[250000,.75]]);
  assert.equal(locationA,358750);
  assert.equal(locationB,337500);
  assert.equal(locationA-locationB,21250);
});
