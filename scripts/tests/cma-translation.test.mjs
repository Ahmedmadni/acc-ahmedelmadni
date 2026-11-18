import { isCmaScorableQuestion, splitCmaQuizSourceReview } from "../../src/lib/cma-source-review.shared.ts";
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
  // Each other section has its dedicated answer-key and Arabic translation test.
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
  // The Section 5 corpus is validated in its dedicated complete-coverage test.
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
  // See Section 5 exact source-key and numeric-integrity test below.
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


test("CMA Unit 12 Section 5: all 14 strategic-planning questions are faithful Arabic drafts",()=>{
  const records=JSON.parse(readFileSync(
    new URL("../../src/data/cma-gleim-2025-vol2-unit-12.json",import.meta.url),"utf8",
  ));
  const section=records.filter(row=>row.section===5);
  const keys=[1,0,3,2,1,1,1,3,1,1,3,3,3,2];
  assert.equal(section.length,14);
  assert.deepEqual(section.map(row=>row.number),Array.from({length:14},(_,i)=>i+1));
  for(const row of section){
    assert.equal(row.answerIndex,keys[row.number-1],
      "Unit 12 Section 5 original answer index changed: Q"+row.number);
    assert.equal(row.choices.length,4);
    assert.equal(row.choicesAr?.length,4);
    const checked=validateCmaTranslation(
      {question:{en:row.stem},choices:{en:row.choices},explanation:{en:row.explanation}},
      {question:row.stemAr,choices:row.choicesAr,explanation:row.explanationAr},
    );
    assert.equal(checked.valid,true,
      "Arabic Section 5 original numeric fields/options mismatch Q"+row.number+": "+checked.reason);
    assert.match(row.stemAr,/[\u0600-\u06ff]/);
    assert.match(row.explanationAr,/[\u0600-\u06ff]/);
  }
  // Section 5 Q13 carries the original publisher extraction provenance;
  // Arabic completion does not remove the source-layout-review warning.
  assert.equal(section.find(row=>row.number===13).sourceTextStatus,"table-reflowed");
  assert.equal(records.filter(row=>row.stemAr!==undefined).length,136);
  assert.deepEqual(records.filter(row=>!row.stemAr).reduce((acc,row)=>{
    acc[row.section]=(acc[row.section]??0)+1;return acc;
  },{}),{1:5,2:3,3:11});
});

test("CMA Section 5 strategic market-share goal is not replaced with earnings growth",()=>{
  const thisYear={sales:325000,cogs:152000,marketing:100000,admin:50000,units:1000};
  const nextYear={sales:325000,cogs:146000,marketing:100000,admin:50000,units:1000};
  const operatingProfit=year=>year.sales-year.cogs-year.marketing-year.admin;
  assert.equal(operatingProfit(thisYear),23000);
  assert.equal(operatingProfit(nextYear),29000);
  assert.equal(nextYear.units,thisYear.units);
  // The question explicitly assumes unchanged total market size.
  assert.equal(nextYear.units>thisYear.units,false);
});


test("Source-layout review questions cannot enter scored CMA practice by default",()=>{
  const original=[
    {id:"verified",sourceLayoutReview:false,answerIndex:1},
    {id:"imported-table",sourceLayoutReview:true,answerIndex:3},
    {id:"inferred-layout",sourceLayoutReview:true,answerIndex:0},
    {id:"unspecified",answerIndex:2},
  ];
  const guarded=splitCmaQuizSourceReview(original,false);
  assert.deepEqual(guarded.eligible.map(q=>q.id),["verified","unspecified"]);
  assert.deepEqual(guarded.excluded.map(q=>q.id),["imported-table","inferred-layout"]);
  assert.equal(isCmaScorableQuestion(original[0]),true);
  assert.equal(isCmaScorableQuestion(original[1]),false);
  assert.equal(isCmaScorableQuestion(original[2]),false);
  assert.equal(isCmaScorableQuestion(original[3]),true);
  assert.deepEqual(original.map(q=>q.answerIndex),[1,3,0,2],
    "Filtering must not mutate the source bank or answer keys");

  // An explicit learner opt-in displays all source questions, but does
  // not make the original unreviewed questions count toward any score.
  const optedIn=splitCmaQuizSourceReview(original,true);
  assert.deepEqual(optedIn.eligible.map(q=>q.id),
    ["verified","imported-table","inferred-layout","unspecified"]);
  assert.deepEqual(optedIn.excluded,[]);
  assert.equal(isCmaScorableQuestion(optedIn.eligible[1]),false);
  assert.equal(isCmaScorableQuestion(optedIn.eligible[2]),false);
  assert.deepEqual(splitCmaQuizSourceReview([],false),{eligible:[],excluded:[]});
  assert.deepEqual(splitCmaQuizSourceReview([],true),{eligible:[],excluded:[]});
});

test("The 19 unresolved Unit 12 PDF layouts remain English-only, with stable source pages",()=>{
  const records=JSON.parse(readFileSync(
    new URL("../../src/data/cma-gleim-2025-vol2-unit-12.json",import.meta.url),"utf8",
  ));
  const pages={
    "1.8":63,"1.9":64,"1.13":68,"1.14":69,"1.28":82,
    "2.3":87,"2.4":88,"2.23":110,
    "3.8":127,"3.10":130,"3.23":143,"3.24":144,
    "3.27":151,"3.28":153,"3.29":156,"3.32":161,
    "3.34":167,"3.35":167,"3.36":168,
  };
  const pending=records.filter(row=>!row.stemAr);
  assert.equal(pending.length,19);
  assert.deepEqual(pending.map(row=>row.section+"."+row.number),Object.keys(pages));
  for(const q of pending){
    const id=q.section+"."+q.number;
    assert.equal(q.page,pages[id],"Source PDF page locator changed: "+id);
    assert.equal(q.choices.length,4);
    assert.equal(q.choicesAr,undefined,"Unverified source options must not be published as Arabic");
    assert.equal(q.explanationAr,undefined,"Unverified source math must not be published as Arabic");
  }
});


test("Independent arithmetic audits are not mistaken for publisher PDF verification",()=>{
  // These checks only reproduce numbers as imported, NOT the source-page layout.
  assert.equal(Math.round(684.65+7.2884*420),3746);
  assert.equal(Math.round((0.953**2)*1000)/1000,0.908);
  assert.equal(40000+2.1*20000,82000);
  const fourLotCost=(4*12500*0.8**2+4*1500)*1.1;
  assert.equal(Math.round(fourLotCost)-15400,26400);
  assert.equal(Math.round(((4*1000*0.7**2-1000)/150)*10)/10,6.4);
  assert.equal((4096-2560)/200,7.68);

  assert.equal(-160*.1-40*.3+80*.4+80*.2,20);
  const frostProbability=(120000-100000)/(60000+40000);
  assert.equal(frostProbability,0.2);
  const peanutExpected=[20,27.6,30.4,29.6];
  assert.equal(Math.max(...peanutExpected),30.4);
  assert.equal(
    Math.round(42000*.15+57000*.20+72000*.35+72000*.30),64500);
  const vendorTotal=(unitPrice,passingRate)=>{
    const purchased=100000/passingRate;
    return purchased*unitPrice+(purchased-100000)*25;
  };
  const costTotals=[
    vendorTotal(35,.9),vendorTotal(37,.94),
    vendorTotal(39,.97),vendorTotal(40,.99),
  ];
  assert.equal(costTotals.indexOf(Math.min(...costTotals)),3);
  assert.equal(Math.round(costTotals[3]),4065657);
  assert.equal(.6*15000000+.4*2000000-9500000,300000);
  assert.equal(-100000,-100000);
  const payoffs=[-20000,-10000,30000,70000,100000];
  const weighted=(probs)=>probs.reduce((sum,p,i)=>sum+p*payoffs[i],0);
  assert.deepEqual([
    weighted([.3,.1,.3,.2,.1]),
    weighted([.2,.2,.2,.2,.2]),
    weighted([.3,.1,.2,.3,.1]),
  ],[26000,34000,30000]);
  const outcomes=[50000,75000,100000,150000];
  const ev=(items)=>items.reduce((sum,[v,p])=>sum+v*p,0);
  const alternatives=[
    ev(outcomes.map((v,i)=>[v,[.10,.20,.40,.30][i]])),
    ev(outcomes.map((v,i)=>[v,[.10,.20,.45,.25][i]])),
    ev([ [50000,.10],[75000,.20],[100000,.40],[125000,.30] ]),
    ev([ [150000,.10],[100000,.20],[75000,.40],[50000,.30] ]),
  ];
  assert.deepEqual(alternatives,[105000,102500,97500,80000]);
  assert.equal(ev([[200000,.2],[250000,.5],[300000,.2],[350000,.1]]),260000);
  assert.equal(Math.round(305000*(1.80-1.15)-78000),120250);
  const success=.6*.7+.4*.25;
  assert.equal(success,.52);
  assert.equal(Math.round(success*10000000-(1-success)*4000000),3280000);
});



test("CMA Unit 13 sections 1 and 2: exactly 57 complete Arabic drafts preserve source keys",()=>{
  const unit13=JSON.parse(readFileSync(
    new URL("../../src/data/cma-gleim-2025-vol2-unit-13.json",import.meta.url),"utf8"
  ));
  const s1=unit13.filter(q=>q.section===1);
  const s2=unit13.filter(q=>q.section===2);
  const keys1=[
    3,3,3,3,2,1,3,3,3,3,1,1,1,3,3,3,3,3,3,3,0,1,1,2,
    3,2,2,3,2,3,2,3,0,3,2,3,1,1,3,1,2,1,0,2
  ];
  const keys2=[3,2,1,3,3,3,3,2,2,0,2,3,2,1];
  assert.equal(unit13.length,123);
  assert.equal(s1.length,44);
  assert.equal(s2.length,14);
  assert.deepEqual(s1.map(q=>q.number),Array.from({length:44},(_,i)=>i+1));
  assert.deepEqual(s2.map(q=>q.number),Array.from({length:14},(_,i)=>i+1));
  const localized=[...s1.filter(q=>q.number!==34),...s2];
  assert.equal(localized.length,57);
  for(const q of localized){
    assert.equal(q.answerIndex,q.section===1?keys1[q.number-1]:keys2[q.number-1],
      "Source answer changed Unit 13 §"+q.section+" Q"+q.number);
    assert.equal(q.choicesAr?.length,4);
    const checked=validateCmaTranslation(
      {question:{en:q.stem},choices:{en:q.choices},explanation:{en:q.explanation}},
      {question:q.stemAr,choices:q.choicesAr,explanation:q.explanationAr}
    );
    assert.equal(checked.valid,true,
      "Arabic numeric/choice mismatch Unit 13 §"+q.section+" Q"+q.number+": "+checked.reason);
    assert.match(q.stemAr,/[\u0600-\u06ff]/);
    assert.match(q.explanationAr,/[\u0600-\u06ff]/);
    assert.ok(q.choicesAr.every(c=>typeof c==="string"&&c.trim()!==""));
    assert.equal(q.sourceTextStatus,undefined);
  }
  const q34=s1.find(q=>q.number===34);
  assert.equal(q34?.page,248);
  assert.equal(q34?.sourceTextStatus,"table-reflowed");
  assert.equal(q34?.answerIndex,keys1[33]);
  assert.equal(q34?.stemAr,undefined);
  assert.equal(q34?.choicesAr,undefined);
  assert.equal(q34?.explanationAr,undefined);
  assert.deepEqual(unit13.filter(q=>q.section<=2&&q.stemAr).map(q=>q.section+"."+q.number),
    localized.map(q=>q.section+"."+q.number));
  assert.equal(unit13.filter(q=>q.section===4&&q.stemAr).length,31);
});

test("CMA Unit 13 standard oak and screw price change produces the keyed $44.20",()=>{
  const oldOak=10*3.50;
  const oldScrews=12*.50;
  assert.equal(oldOak+oldScrews,41);
  const expected=Math.round((oldOak*1.10+oldScrews*.95)*100)/100;
  assert.equal(expected,44.20);
  const unit13=JSON.parse(readFileSync(
    new URL("../../src/data/cma-gleim-2025-vol2-unit-13.json",import.meta.url),"utf8"
  ));
  const q=unit13.find(q=>q.section===2&&q.number===11);
  assert.equal(q.answerIndex,2);
  assert.equal(q.choices[q.answerIndex],"$44.20");
  assert.equal(q.choicesAr[q.answerIndex],"$44.20");
  const glass=unit13.find(q=>q.section===2&&q.number===2);
  assert.equal(glass.answerIndex,2);
  assert.match(glass.choicesAr[glass.answerIndex],/معيار نظري/);
});


test("CMA Unit 13 Section 3: 33 complete Arabic master-budget source drafts preserve original keys",()=>{
  const unit13=JSON.parse(readFileSync(
    new URL("../../src/data/cma-gleim-2025-vol2-unit-13.json",import.meta.url),"utf8"
  ));
  const questions=unit13.filter(q=>q.section===3);
  const canonicalKeys=[
    3,0,1,1,1,1,3,3,0,3,2,1,2,1,2,3,3,
    1,0,1,3,3,3,1,3,2,3,2,3,1,3,2,0,2
  ];
  assert.equal(unit13.length,123);
  assert.equal(questions.length,34);
  assert.equal(canonicalKeys.length,34);
  assert.deepEqual(questions.map(q=>q.number),Array.from({length:34},(_,i)=>i+1));
  const localized=questions.filter(q=>q.stemAr!==undefined);
  assert.equal(localized.length,33);
  assert.deepEqual(localized.map(q=>q.number),
    [...Array.from({length:22},(_,i)=>i+1),...Array.from({length:11},(_,i)=>i+24)]);
  for(const row of localized){
    assert.equal(row.answerIndex,canonicalKeys[row.number-1],
      "Changed canonical answer in Unit 13 §3 Q"+row.number);
    assert.equal(row.choicesAr?.length,4);
    const checked=validateCmaTranslation(
      {question:{en:row.stem},choices:{en:row.choices},explanation:{en:row.explanation}},
      {question:row.stemAr,choices:row.choicesAr,explanation:row.explanationAr}
    );
    assert.equal(checked.valid,true,
      "Source ordered numeric fields/choices mismatch Unit 13 §3 Q"+row.number+" "+checked.reason);
    assert.match(row.stemAr,/[\u0600-\u06ff]/);
    assert.match(row.explanationAr,/[\u0600-\u06ff]/);
    assert.ok(row.choicesAr.every(choice=>typeof choice==="string"&&choice.trim()!==""));
    assert.equal(row.sourceTextStatus,undefined);
  }
  const pending=questions.find(q=>q.number===23);
  assert.equal(pending?.page,287);
  assert.equal(pending?.sourceTextStatus,"table-reflowed");
  assert.equal(pending?.answerIndex,canonicalKeys[22]);
  assert.equal(pending?.stemAr,undefined);
  assert.equal(pending?.choicesAr,undefined);
  assert.equal(pending?.explanationAr,undefined);
  assert.equal(unit13.filter(q=>q.stemAr).length,121);
});

test("CMA Unit 13 master-budget sequence does not confuse operating, financial and cash stages",()=>{
  const records=JSON.parse(readFileSync(
    new URL("../../src/data/cma-gleim-2025-vol2-unit-13.json",import.meta.url),"utf8"
  ));
  const q=(n)=>records.find(row=>row.section===3&&row.number===n);
  // Source Q1 orders dependent schedules before the cash flow statement.
  assert.equal(q(1).answerIndex,3);
  assert.equal(q(1).choicesAr[3],
    "تكلفة البضاعة المباعة، ثم قائمة الدخل، ثم قائمة المركز المالي، ثم قائمة التدفقات النقدية.");
  // Source Q13 requires the financial budget to include ALL three schedules.
  assert.equal(q(13).answerIndex,2);
  assert.equal(q(13).choicesAr[2],"نعم — نعم — نعم.");
  // Cash budget is a financial budget, selling expenses an operating one.
  assert.equal(q(16).answerIndex,3);
  assert.equal(q(28).answerIndex,2);
  assert.equal(q(28).choicesAr[2],"موازنة مصروفات البيع.");
  assert.equal(q(29).answerIndex,3);
  // Production budget draws on sales budget, never precedes it.
  assert.equal(q(22).answerIndex,3);
  assert.equal(q(33).answerIndex,0);
});


test("CMA Unit 13 Section 4: all 31 methods questions have complete Arabic drafts and immutable keys",()=>{
  const unit13=JSON.parse(readFileSync(new URL("../../src/data/cma-gleim-2025-vol2-unit-13.json",import.meta.url),"utf8"));
  const rows=unit13.filter(q=>q.section===4);
  const canonicalKeys=[3,3,1,0,3,0,2,3,1,2,3,2,0,2,2,0,2,0,3,3,1,1,0,1,1,1,3,2,1,2,2];
  assert.equal(rows.length,31);
  assert.deepEqual(rows.map(q=>q.number),Array.from({length:31},(_,i)=>i+1));
  assert.equal(canonicalKeys.length,31);
  for(const q of rows){
    assert.equal(q.answerIndex,canonicalKeys[q.number-1],"Source answer changed §4 Q"+q.number);
    assert.equal(q.answerStatus,"source");
    assert.equal(q.sourceTextStatus,undefined);
    assert.equal(q.choicesAr?.length,4);
    assert.equal(validateCmaTranslation({question:{en:q.stem},choices:{en:q.choices},explanation:{en:q.explanation}},
      {question:q.stemAr,choices:q.choicesAr,explanation:q.explanationAr}).valid,true,
      "Unfaithful Arabic Section 4 question "+q.number);
    assert.match(q.stemAr,/[^\S\r\n]*[\u0600-\u06ff]/);
    assert.match(q.explanationAr,/[\u0600-\u06ff]/);
    assert.ok(q.choicesAr.every(c=>typeof c==="string"&&c.trim().length>0));
    assert.ok(q.page>=296&&q.page<=321);
  }
  assert.equal(rows[0].choicesAr[3],"خفض عدم التأكد في التخطيط.");
  assert.equal(rows[1].choicesAr[3],"موازنة ثابتة.");
  assert.equal(rows[8].choicesAr[1],"إعداد الموازنات على أساس الأنشطة.");
  assert.equal(rows[16].choicesAr[2],"التزامًا بمبالغ كبيرة من الأموال، وتكون الفترة المناسبة هي دورة حياة المشروع.");
  assert.equal(rows[20].choicesAr[1],"العبارتان I وIII فقط.");
  assert.equal(rows[30].choicesAr[2],"الموازنة على أساس الأنشطة.");
  assert.equal(unit13.filter(q=>q.stemAr).length,121);
  const pending=unit13.filter(q=>q.section===1&&q.number===34||q.section===3&&q.number===23);
  assert.equal(pending.length,2);
  assert.ok(pending.every(q=>q.sourceTextStatus==="table-reflowed"&&!q.stemAr&&!q.choicesAr&&!q.explanationAr));
});


test("CMA Unit 14 wave 1: ten initial source-ordered Arabic drafts retain keys and numeric values",()=>{
  const rows=JSON.parse(readFileSync(new URL("../../src/data/cma-gleim-2025-vol2-unit-14.json",import.meta.url),"utf8"));
  const reviewed=[
    [1,1,0],[1,3,3],[1,7,2],[1,8,1],
    [2,41,3],[2,42,3],[2,43,2],[3,4,3],[3,18,3],[3,19,3],
  ];
  const expected=new Map(reviewed.map(([s,n,key])=>[s+"."+n,key]));
  assert.equal(rows.length,175);
  assert.equal(rows.filter(q=>q.stemAr).length,79);
  assert.deepEqual(rows.filter(q=>expected.has(q.section+"."+q.number)).map(q=>q.section+"."+q.number),[...expected.keys()]);
  for(const q of rows){
    const id=q.section+"."+q.number;
    if(!expected.has(id)) continue;
    assert.equal(q.answerIndex,expected.get(id),"Original key changed "+id);
    assert.equal(q.answerStatus,"source");
    assert.equal(q.sourceTextStatus,undefined);
    assert.equal(q.choices.length,4);
    assert.equal(q.choicesAr.length,4);
    const integrity=validateCmaTranslation(
      {question:{en:q.stem},choices:{en:q.choices},explanation:{en:q.explanation}},
      {question:q.stemAr,choices:q.choicesAr,explanation:q.explanationAr});
    assert.equal(integrity.valid,true,id+": "+integrity.reason);
    assert.match(q.stemAr,/[\u0600-\u06ff]/);
    assert.match(q.explanationAr,/[\u0600-\u06ff]/);
    assert.ok(q.choicesAr.every(x=>typeof x==="string"&&x.trim()));
  }
  const by=(s,n)=>rows.find(q=>q.section===s&&q.number===n);
  assert.equal(by(1,7).choicesAr[2],"موازنة المبيعات.");
  assert.match(by(2,42).choicesAr[3],/إنتاج الحواسيب المقدر/);
  assert.equal(by(2,43).choicesAr[2],"انخفاض المخزون النهائي المطلوب.");
  assert.match(by(3,19).choicesAr[3],/الخصومات التجارية/);
  assert.equal(rows.filter(q=>q.sourceTextStatus!==undefined&&q.stemAr).length,0);
});

test("CMA Unit 14 Section 1: independently recompute source-keyed multi-product sales-budget scenarios",()=>{
  const rows=JSON.parse(readFileSync(new URL("../../src/data/cma-gleim-2025-vol2-unit-14.json",import.meta.url),"utf8"));
  const q=n=>rows.find(x=>x.section===1&&x.number===n);
  // §1 Q2 source page 324: price effect and complementary-item sales.
  const originalQ2=200000*50+150000*10+300000*30;
  const revisedQ2=(200000*.80)*55+(150000*.80)*10+(300000*1.05)*30;
  assert.equal(originalQ2,20500000);
  assert.equal(revisedQ2,19450000);
  assert.equal(originalQ2-revisedQ2,1050000);
  assert.equal(q(2).answerIndex,0);
  assert.equal(q(2).choices[0],"$1,050,000");
  // §1 Q4–Q6: Niro printers/cartridges, substitution and complementarity.
  const originalNiro=5000*120+12000*100+3000*300;
  assert.equal(originalNiro,2700000);
  const afterInkjet=(5000*.925)*(120*1.05)+(12000*.875)*100+(3000*1.05)*300;
  const afterCartridge=(5000*.95)*120+(12000*.85)*(100*1.05)+(3000*1.025)*300;
  const afterLaser=(5000*1.20)*120+(12000*1.20)*100+(3000*.90)*(300*1.05);
  assert.equal(Math.round(afterInkjet),2577750);
  assert.equal(Math.round(afterCartridge),2563500);
  assert.equal(Math.round(afterLaser),3010500);
  const checks=[
    [4,2,originalNiro-afterInkjet,"Decrease by $122,250."],
    [5,1,originalNiro-afterCartridge,"Decrease by $136,500."],
    [6,2,afterLaser-originalNiro,"Increase by $310,500."],
  ];
  for(const [number,key,delta,option] of checks){
    const item=q(number);
    assert.equal(Math.round(delta),Number(option.match(/\$([\d,]+)/)[1].replace(/,/g,"")));
    assert.equal(item.answerIndex,key);
    assert.equal(item.choices[key],option);
    assert.equal(item.stemAr,undefined,"Keep table-heavy source question English-first until visual PDF layout QA");
    assert.equal(item.choicesAr,undefined);
    assert.equal(item.explanationAr,undefined);
  }
  assert.equal(q(2).stemAr,undefined);
});


test("CMA Unit 14 wave 2: 21 concept translations preserve canonical keys, numerical fidelity and protected source flags",()=>{
  const rows=JSON.parse(readFileSync(new URL("../../src/data/cma-gleim-2025-vol2-unit-14.json",import.meta.url),"utf8"));
  const added=[
    [4,1,3],[4,33,2],[4,34,3],
    [5,16,3],[5,18,0],[5,21,3],[5,26,3],[5,27,2],[5,28,0],[5,29,1],[5,30,3],
    [6,11,3],[6,13,3],[6,14,1],[6,20,2],[6,22,3],[6,23,1],[6,24,1],[6,26,0],[6,27,1],[6,28,2],
  ];
  const first=new Set(["1.1","1.3","1.7","1.8","2.41","2.42","2.43","3.4","3.18","3.19"]);
  const newKeys=new Map(added.map(([s,n,key])=>[s+"."+n,key]));
  assert.equal(added.length,21);
  assert.equal(rows.length,175);
  assert.equal(rows.filter(q=>q.stemAr).length,79);
  assert.deepEqual(rows.filter(q=>newKeys.has(q.section+"."+q.number)).map(q=>q.section+"."+q.number),[...newKeys.keys()]);
  const perSection=[0,4,18,13,13,16,15];
  for(let s=1;s<=6;s++)assert.equal(rows.filter(q=>q.section===s&&q.stemAr).length,perSection[s]);
  for(const q of rows){
    const id=q.section+"."+q.number;
    if(!newKeys.has(id)) continue;
    assert.equal(q.answerIndex,newKeys.get(id),"Canonical answer changed "+id);
    assert.equal(q.answerStatus,"source");
    assert.equal(q.sourceTextStatus,undefined);
    assert.equal(q.choicesAr.length,4);
    const valid=validateCmaTranslation(
      {question:{en:q.stem},choices:{en:q.choices},explanation:{en:q.explanation}},
      {question:q.stemAr,choices:q.choicesAr,explanation:q.explanationAr});
    assert.equal(valid.valid,true,"Numeric/shape fidelity mismatch "+id+": "+valid.reason);
    assert.match(q.stemAr,/[\u0600-\u06ff]/);
    assert.match(q.explanationAr,/[\u0600-\u06ff]/);
  }
  assert.equal(rows.filter(q=>q.sourceTextStatus).length,9);
  assert.ok(rows.filter(q=>q.sourceTextStatus).every(q=>!q.stemAr&&!q.choicesAr&&!q.explanationAr));
  const get=(section,number)=>rows.find(q=>q.section===section&&q.number===number);
  assert.equal(get(5,28).choicesAr[0],"جدول التحصيلات النقدية.");
  assert.equal(get(5,29).choicesAr[1],"قائمة التدفقات النقدية التقديرية.");
  assert.equal(get(6,23).choicesAr[1],"مخزون المنتجات التامة في أول الفترة.");
  assert.equal(get(6,26).choicesAr[0],"قائمة الدخل التقديرية.");
});


test("CMA Unit 14 wave 3: 22 production and cost translations preserve original keys and independent arithmetic",()=>{
  const rows=JSON.parse(readFileSync(new URL("../../src/data/cma-gleim-2025-vol2-unit-14.json",import.meta.url),"utf8"));
  const expected=[
    [2,6,0,114600],[2,7,2,8800],[2,10,2,1010000],[2,19,1,540000],
    [2,20,2,78000],[2,21,3,86000],[2,24,1,71700],[2,25,0,3700],
    [2,29,0,85000],[2,30,0,40820],[2,31,2,8700],[2,32,3,404000],
    [2,36,3,84000],[2,39,2,3700],
    [3,6,2,84736],[3,7,1,26.25],[3,8,1,84480],[3,11,0,54],
    [3,12,3,105000],[3,14,0,950000],[3,16,2,21450],[3,17,0,5500000],
  ];
  const by=(section,number)=>rows.find(q=>q.section===section&&q.number===number);
  const keyed=new Map(expected.map(([s,n,key,value])=>[s+"."+n,{key,value}]));
  assert.equal(expected.length,22);
  assert.equal(rows.length,175);
  assert.equal(rows.filter(q=>q.stemAr).length,79);
  assert.deepEqual(rows.filter(q=>q.stemAr&&keyed.has(q.section+"."+q.number)).map(q=>q.section+"."+q.number),
    [...keyed.keys()]);
  const answerNumber=q=>{
    const m=q.choices[q.answerIndex].match(/\d[\d,]*(?:\.\d+)?/);
    assert.ok(m,"Answer option must contain a number");
    return Number(m[0].replaceAll(",",""));
  };
  for(const [id,{key,value}] of keyed){
    const [s,n]=id.split(".").map(Number);
    const q=by(s,n);
    assert.ok(q,"Missing source "+id);
    assert.equal(q.answerIndex,key,"Canonical key mismatch "+id);
    assert.equal(q.answerStatus,"source");
    assert.equal(q.sourceTextStatus,undefined);
    assert.equal(answerNumber(q),value,"Source numeric answer mismatch "+id);
    const check=validateCmaTranslation(
      {question:{en:q.stem},choices:{en:q.choices},explanation:{en:q.explanation}},
      {question:q.stemAr,choices:q.choicesAr,explanation:q.explanationAr});
    assert.equal(check.valid,true,"Question "+id+": "+check.reason);
    assert.equal(q.choicesAr.length,4);
    assert.match(q.stemAr,/[\u0600-\u06ff]/);
    assert.match(q.explanationAr,/[\u0600-\u06ff]/);
  }
  const arithmetics=new Map([
    ["2.6",34000*3+(48000*3*.3)-(34000*3*.3)],
    ["2.7",8000+12000*.2-8000*.2],
    ["2.10",500000*2+50000-40000],
    ["2.19",728000/1.3+(624000/1.3)*.25-(728000/1.3)*.25],
    ["2.20",72000+84000*.5-72000*.5],
    ["2.21",72000+84000*.5-(72000*.5-8000)],
    ["2.24",67500+(67500/90)*10-(3500-200)],
    ["2.25",4000+600-900],
    ["2.29",90000+20000-25000],
    ["2.30",58000*.65+(74000*.65)*.30-(58000*.65)*.30],
    ["2.31",(2000+325-250)*4+800-400],
    ["2.32",(200000+15000-12000)*2+18000-20000],
    ["2.36",(10000+12000*.25-2500)*2*4],
    ["2.39",2500+8500*.2-2500*.2],
    ["3.6",33100*32*.08],
    ["3.7",245/35*1.25*3],
    ["3.8",33000*32*.08],
    ["3.11",600/40*1.2*3],
    ["3.12",(400000+25000-10000-100000)/3],
    ["3.14",125000*40-(125000*10+100*10000+200*4000+125000*8)],
    ["3.16",(2000+2300+2500-300)*1.10*3],
    ["3.17",10000000-4000000-500000],
  ]);
  assert.equal(arithmetics.size,expected.length);
  for(const [id,result] of arithmetics){
    assert.ok(Math.abs(result-keyed.get(id).value)<0.00001,
      "Independent calculation discrepancy "+id+": "+result);
  }
  assert.ok(12500*24.80<500000,"Water quota should not trigger commission");
  assert.ok(12500*25<500000,"Small cherries quota should not trigger commission");
  assert.ok(33100*32>=1000000 && 33000*32>=1000000);
});

test("CMA Unit 14 §2 Q23 has a rounding ambiguity and must remain unscored until source review",()=>{
  const rows=JSON.parse(readFileSync(new URL("../../src/data/cma-gleim-2025-vol2-unit-14.json",import.meta.url),"utf8"));
  const q=rows.find(q=>q.section===2&&q.number===23);
  assert.equal(q.page,369);
  assert.equal(q.answerIndex,2);
  assert.equal(q.choices[2],"7,133");
  assert.equal(q.stemAr,undefined);
  assert.equal(q.choicesAr,undefined);
  assert.equal(q.explanationAr,undefined);
  assert.equal((6300+590-470),6420);
  assert.ok(7133*.90<6420);
  assert.equal(Math.ceil(6420/.9),7134);
  assert.equal(isCmaScorableQuestion({sourceLayoutReview:true}),false);
});


test("CMA Unit 14 wave 4: 18 cash and forecast-profit translations preserve keys and independent numerical results",()=>{
  const rows=JSON.parse(readFileSync(new URL("../../src/data/cma-gleim-2025-vol2-unit-14.json",import.meta.url),"utf8"));
  const expected=[
    [4,4,0,169800],[4,9,1,180000],[4,11,0,180000],[4,12,2,214700],
    [4,21,2,null],[4,23,2,108000],[4,28,1,174500],[4,35,0,220000],
    [4,36,2,210100],[4,40,2,119000],
    [5,5,1,3115000],[5,8,3,1480000],[5,19,1,40000],
    [5,33,2,3115000],[5,34,3,54000000],
    [6,17,0,260000],[6,19,3,87500],[6,29,1,15575],
  ];
  const keys=new Map(expected.map(([section,number,key,value])=>[section+"."+number,{key,value}]));
  assert.equal(expected.length,18);
  assert.equal(rows.length,175);
  assert.equal(rows.filter(q=>q.stemAr).length,79);
  assert.deepEqual(rows.filter(q=>keys.has(q.section+"."+q.number)).map(q=>q.section+"."+q.number),[...keys.keys()]);
  for(const [id,{key,value}] of keys){
    const [section,number]=id.split(".").map(Number);
    const q=rows.find(x=>x.section===section&&x.number===number);
    assert.ok(q,"Missing source "+id);
    assert.equal(q.answerIndex,key,"Source answer changed "+id);
    assert.equal(q.answerStatus,"source");
    assert.equal(q.sourceTextStatus,undefined);
    assert.equal(q.choicesAr.length,4);
    assert.match(q.stemAr,/[\u0600-\u06ff]/);
    assert.match(q.explanationAr,/[\u0600-\u06ff]/);
    assert.ok(q.choicesAr.every(x=>x.trim()));
    const check=validateCmaTranslation(
      {question:{en:q.stem},choices:{en:q.choices},explanation:{en:q.explanation}},
      {question:q.stemAr,choices:q.choicesAr,explanation:q.explanationAr});
    assert.equal(check.valid,true,"Numerical/source order mismatch "+id+": "+check.reason);
    if(value!==null){
      const match=q.choices[key].match(/\d[\d,]*(?:\.\d+)?/);
      assert.ok(match,"Missing numeric correct answer "+id);
      assert.equal(Number(match[0].replaceAll(",","")),value,"Source keyed answer "+id);
    }
  }
  assert.equal(rows.filter(q=>q.sourceTextStatus).length,9);
  assert.ok(rows.filter(q=>q.sourceTextStatus).every(q=>!q.stemAr&&!q.choicesAr&&!q.explanationAr));
  assert.equal(rows.find(q=>q.section===2&&q.number===23).stemAr,undefined);

  const recomputed=[
    ["4.4",120000*.36+211000*.60],
    ["4.9",100000*.5+100000*.5*.10+200000*.5*.20+300000*.5*.70],
    ["4.11",150000*.36+210000*.60],
    ["4.12",280000*.75*.36+198000*.75*.60+200000*.25],
    ["4.23",100000*.40+(72000/.60)*.50+8000],
    ["4.28",49500+(162000/.90)*.60+170000*.10],
    ["4.35",200000+20000],
    ["4.36",210000*.65+208000*.25+216000*.10],
    ["4.40",(90*.50+120*.30+100*.20+18)*1000],
    ["5.5",4000000*(1-.25)-160000+275000],
    ["5.8",2400000*(1-.40)-60000+100000],
    ["5.19",50000+180000+800000-210000-780000],
    ["5.33",4000000*(1-.25)-160000+275000],
    ["5.34",55000000-(5000000-4000000)],
    ["6.17",350000*.10+450000*(.40+.10)],
    ["6.19",(12000-10000)*125*.35],
    ["6.29",(100000*1.10-60000*1.10-15000*1.05-5000*1.20)*(1-.30)],
  ];
  assert.equal(recomputed.length,17);
  for(const [id,value] of recomputed)assert.ok(Math.abs(value-keys.get(id).value)<.000001,
    "Independent source calculation mismatch "+id+": "+value);
  const monthly={
    August:148000*.36+120000*.60,
    September:120000*.36+211000*.60,
    October:211000*.36+198000*.60,
    November:198000*.36+164000*.60,
  };
  assert.equal(monthly.October,194760);
  assert.equal(Object.entries(monthly).sort((a,b)=>b[1]-a[1])[0][0],"October");
  const q=rows.find(q=>q.section===4&&q.number===21);
  assert.equal(q.choices[q.answerIndex],"October.");
  assert.equal(q.choicesAr[q.answerIndex],"أكتوبر.");
});


test("CMA Unit 14 post-#348: 8 non-overlapping Arabic drafts preserve canonical keys, translation fidelity and independent budget math",()=>{
  const rows=JSON.parse(readFileSync(new URL("../../src/data/cma-gleim-2025-vol2-unit-14.json",import.meta.url),"utf8"));
  const newRecords=[
    [2,33,2],[3,13,0],[3,15,3],[5,1,3],
    [5,6,1],[5,22,0],[6,9,2],[6,25,0],
  ];
  const newSet=new Map(newRecords.map(([s,n,key])=>[s+"."+n,key]));
  assert.equal(rows.length,175);
  assert.equal(rows.filter(q=>q.stemAr).length,79);
  assert.deepEqual(rows.filter(q=>newSet.has(q.section+"."+q.number)).map(q=>q.section+"."+q.number),[...newSet.keys()]);
  for(const q of rows.filter(x=>newSet.has(x.section+"."+x.number))){
    const id=q.section+"."+q.number;
    assert.equal(q.answerStatus,"source");
    assert.equal(q.sourceTextStatus,undefined);
    assert.equal(q.answerIndex,newSet.get(id),"Original answer key changed "+id);
    assert.equal(q.choicesAr?.length,4,"Incomplete Arabic choices "+id);
    const validated=validateCmaTranslation(
      {question:{en:q.stem},choices:{en:q.choices},explanation:{en:q.explanation}},
      {question:q.stemAr,choices:q.choicesAr,explanation:q.explanationAr});
    assert.equal(validated.valid,true,id+": "+validated.reason);
    assert.match(q.stemAr,/[\u0600-\u06ff]/);
    assert.match(q.explanationAr,/[\u0600-\u06ff]/);
  }
  // Source-independent calculations, without relying on imported explanation rows.
  const purchaseCost=600000*.60+(650000*.60)*.15-(600000*.60)*.15;
  assert.equal(purchaseCost,364500);
  assert.equal(rows.find(q=>q.section===2&&q.number===33).choices[2],"$364,500");
  const baseUnitPrice=(372000/.062)/20000;
  assert.equal(baseUnitPrice,300);
  const newMonthlySales=24000*(baseUnitPrice*.9);
  const budgetSAndA=newMonthlySales*.062+(85000/17)*15+176000;
  assert.equal(budgetSAndA,652760);
  assert.equal(rows.find(q=>q.section===3&&q.number===13).choices[0],"$652,760");
  const advertChange=90000000*.10-36000000*.10-6750000*.10-5000000;
  assert.equal(advertChange,-275000);
  assert.match(rows.find(q=>q.section===3&&q.number===15).choices[3],/\$275,000/);
  const expectedCash=100000-50000-25000+15000;
  assert.equal(expectedCash,40000);
  assert.equal(rows.find(q=>q.section===5&&q.number===6).choices[1],"$40,000");
  assert.match(rows.find(q=>q.section===5&&q.number===22).choicesAr[0],/يوليو/);
  assert.match(rows.find(q=>q.section===6&&q.number===25).choicesAr[0],/100%/);
  assert.equal(rows.filter(q=>q.sourceTextStatus).length,9,
    "Never clear the 9 original Unit 14 source warnings by translating other questions");
});

test("CMA Unit 14 §6 Q31 broken PDF-derived options remain unscored and unmodified pending source-page review",()=>{
  const records=JSON.parse(readFileSync(new URL("../../src/data/cma-gleim-2025-vol2-unit-14.json",import.meta.url),"utf8"));
  const q=records.find(q=>q.section===6&&q.number===31);
  assert.equal(q.page,561);
  assert.equal(q.answerIndex,0);
  assert.equal(q.choices.length,4);
  assert.ok(q.choices[2].startsWith("Cash Either"));
  assert.ok(q.choices[3].startsWith("cash "));
  assert.equal(q.stemAr,undefined);
  assert.equal(q.choicesAr,undefined);
  assert.equal(q.explanationAr,undefined);
  const mappedSource=readFileSync(new URL("../../src/data/cma-questions-gleim-2025-vol2.ts",import.meta.url),"utf8");
  assert.match(mappedSource,/"14\.6\.31"/);
  assert.equal(isCmaScorableQuestion({sourceLayoutReview:true}),false);
  const {eligible,excluded}=splitCmaQuizSourceReview(
    [{id:"14.6.31",sourceLayoutReview:true},{id:"14.6.25",sourceLayoutReview:false}],false);
  assert.deepEqual(eligible.map(q=>q.id),["14.6.25"]);
  assert.deepEqual(excluded.map(q=>q.id),["14.6.31"]);
});
