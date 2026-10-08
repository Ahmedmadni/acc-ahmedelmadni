#!/usr/bin/env node
import { createHash } from "node:crypto";
import { createServer } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const server = await createServer({
  configFile: false,
  plugins: [tsconfigPaths()],
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

let expansions;
let standards;
let reviewedQuestions;
let reviewedExtensionQuestions;
let openPracticeCases;
try {
  ({ IFRS_STANDARD_STUDY_EXPANSIONS: expansions } = await server.ssrLoadModule(
    "/src/data/ifrs-standard-study-expansions.ts",
  ));
  ({ IFRS_STANDARDS: standards } = await server.ssrLoadModule("/src/data/ifrs-standards.ts"));
  ({ IFRS_REVIEWED_EXTRACT_QUESTIONS: reviewedQuestions } = await server.ssrLoadModule(
    "/src/data/ifrs-quiz-reviewed-extracts.ts",
  ));
  ({ IFRS_REVIEWED_EXTENSION_QUESTIONS: reviewedExtensionQuestions } = await server.ssrLoadModule(
    "/src/data/ifrs-quiz-reviewed-extensions.ts",
  ));
  ({ IFRS_BOOK2_PRACTICE_CASES: openPracticeCases } = await server.ssrLoadModule(
    "/src/data/ifrs-book2-practice-cases.ts",
  ));
} finally {
  await server.close();
}

reviewedQuestions = [...reviewedQuestions, ...reviewedExtensionQuestions];

const failures = [];
const indexed = new Set(standards.map((standard) => standard.code));
const officialReference = /^(?:IFRS|IAS) \d+/;
const hasText = (value) =>
  value &&
  typeof value.ar === "string" &&
  value.ar.trim().length > 0 &&
  typeof value.en === "string" &&
  value.en.trim().length > 0;

for (const [code, expansion] of Object.entries(expansions)) {
  if (!indexed.has(code)) failures.push(`${code}: standard is not indexed`);
  if (!Array.isArray(expansion.sections) || expansion.sections.length === 0)
    failures.push(`${code}: no detailed sections`);
  if (!Array.isArray(expansion.workedExamples) || expansion.workedExamples.length === 0)
    failures.push(`${code}: no worked examples`);

  for (const section of expansion.sections ?? []) {
    if (!hasText(section.title) || !hasText(section.explanation))
      failures.push(`${code}: incomplete bilingual study section`);
    if (!officialReference.test(section.reference))
      failures.push(`${code}: non-IFRS public reference in study section`);
    if (!Array.isArray(section.keyPoints) || section.keyPoints.some((point) => !hasText(point)))
      failures.push(`${code}: incomplete key points`);
  }

  for (const example of expansion.workedExamples ?? []) {
    if (!hasText(example.title) || !hasText(example.facts) || !hasText(example.conclusion))
      failures.push(`${code}: incomplete bilingual worked example`);
    if (!officialReference.test(example.reference))
      failures.push(`${code}: non-IFRS public reference in worked example`);
    if (!Array.isArray(example.calculations) || example.calculations.some((item) => !hasText(item)))
      failures.push(`${code}: incomplete calculation steps`);
    if (!Array.isArray(example.journalEntries))
      failures.push(
        `${code}: worked example must declare journal entries, even when none are quantified`,
      );
  }
}

const practiceIds = new Set();
const protectedPracticeIds = [
  "ifrs-book2-ias12-quiz-investment-difference",
  "ifrs-book2-ias12-quiz-three-differences",
  "ifrs-book2-eramu-loss-carryback",
  "ifrs-book2-carrol-anchor-dividend-tax",
  "ifrs-book2-beta-land-revaluation-tax",
  "ifrs-book2-charlton-revaluation-tax-split",
  "ifrs-book2-tax-base-five-assets",
  "ifrs-book2-tax-base-five-liabilities",
  "ifrs-book2-catsu-tax-depreciation",
  "ifrs-book2-epsilon-development-tax",
  "ifrs-book2-darton-current-tax-true-up",
  "ifrs-book2-alpha-beta-acquisition-tax",
  "ifrs-book2-bets-cash-flow-hedge-cumulative",
  "ifrs-book2-jules-inventory-fair-value-hedge",
  "ifrs-book2-rathbone-compound-bond",
  "ifrs-book2-redblack-receivables-matrix",
  "ifrs-book2-plyman-accumulating-sick-leave",
  "ifrs-book2-factory-termination-retention",
  "ifrs-book2-lease-lis",
  "ifrs-book2-retail-unit-eastway",
  "ifrs-book2-courtney-currency",
  "ifrs-book2-pilum-eps",
  "ifrs-book2-hewlett-options",
  "ifrs-book2-biological-assets",
  "ifrs-book2-ace-related-parties",
  "ifrs-book2-jenson-repurchase",
  "ifrs-book2-jenson-subscriptions",
  "ifrs-book2-pqr-debentures",
  "ifrs-book2-pqr-preference-shares",
  "ifrs-book2-barcelona-madrid-consolidation",
  "ifrs-book2-fallowfield-rusholme-profit",
  "ifrs-book2-hever-subsidiary-associate",
  "ifrs-book2-smith-loss-of-control",
  "ifrs-book2-reprise-encore-consolidation",
  "ifrs-book2-vident-share-options",
  "ifrs-book2-vident-share-option-tax",
  "ifrs-book2-sirus-director-shares",
  "ifrs-book2-alpha-gamma-associate",
  "ifrs-book2-biogenics-research-project",
  "ifrs-book2-extract-provision-criteria",
  "ifrs-book2-jerzy-defined-benefit",
  "ifrs-book2-gains-investment-property",
  "ifrs-book2-panther-inventory-timing",
  "ifrs-book2-dt-tax-components",
  "ifrs-book2-jenson-franchise-licence",
  "ifrs-book2-santolina-contract-profit",
  "ifrs-book2-arturo-asset-grant",
  "ifrs-book2-acruni-general-borrowings",
  "ifrs-book2-jameson-consignment",
  "ifrs-book2-minimart-cgu",
  "ifrs-book2-capital-sale-leaseback",
  "ifrs-book2-doug-development-threshold",
  "ifrs-book2-intangible-downward-revaluation",
  "ifrs-book2-parker-warranty-expected-value",
  "ifrs-book2-leaf-onerous-construction",
  "ifrs-book2-ias37-provision-trigger-matrix",
];
for (const practiceCase of openPracticeCases) {
  if (practiceIds.has(practiceCase.id)) failures.push(`duplicate practice case ${practiceCase.id}`);
  practiceIds.add(practiceCase.id);
  if (!indexed.has(practiceCase.standardCode))
    failures.push(`${practiceCase.id}: standard is not indexed`);
  if (
    !hasText(practiceCase.title) ||
    !hasText(practiceCase.facts) ||
    !hasText(practiceCase.question)
  )
    failures.push(`${practiceCase.id}: incomplete bilingual question`);
  if (
    !Array.isArray(practiceCase.solution) ||
    practiceCase.solution.length === 0 ||
    practiceCase.solution.some((step) => !hasText(step))
  )
    failures.push(`${practiceCase.id}: missing bilingual solution`);
  if (!practiceCase.reference.startsWith(practiceCase.standardCode))
    failures.push(`${practiceCase.id}: public reference does not match its Standard`);
  if ("choices" in practiceCase || "answerIndex" in practiceCase)
    failures.push(`${practiceCase.id}: open-response case has invented MCQ fields`);
}
for (const id of protectedPracticeIds) {
  if (!practiceIds.has(id)) failures.push(`${id}: previously reviewed practice case is missing`);
}
if (
  openPracticeCases.find((item) => item.id === "ifrs-book2-bets-cash-flow-hedge-cumulative")
    ?.standardCode !== "IFRS 9"
)
  failures.push("Bets cash flow hedge case must stay with IFRS 9");
if (
  openPracticeCases.find((item) => item.id === "ifrs-book2-jules-inventory-fair-value-hedge")
    ?.standardCode !== "IFRS 9"
)
  failures.push("Jules fair value hedge case must stay with IFRS 9");
if (
  openPracticeCases.find((item) => item.id === "ifrs-book2-rathbone-compound-bond")
    ?.standardCode !== "IAS 32"
)
  failures.push("Rathbone convertible bond case must stay with IAS 32");
if (
  openPracticeCases.find((item) => item.id === "ifrs-book2-redblack-receivables-matrix")
    ?.standardCode !== "IFRS 9"
)
  failures.push("Redblack matrix case must stay with IFRS 9");
for (const id of [
  "ifrs-book2-plyman-accumulating-sick-leave",
  "ifrs-book2-factory-termination-retention",
]) {
  const practiceCase = openPracticeCases.find((item) => item.id === id);
  if (practiceCase?.standardCode !== "IAS 19")
    failures.push(`${id}: chapter 9 case must stay with IAS 19`);
}

const reviewedCalculations = [
  ["Eramu carryback refund", 24000 * 0.3, 7200],
  ["Carrol planned distributions, not an asserted tax base", 500000 * 3, 1500000],
  ["Beta land revaluation taxable difference", 500000 - 400000, 100000],
  ["Beta land revaluation OCI tax", (500000 - 400000) * 0.3, 30000],
  ["Charlton prior difference if base unchanged", 2000000 - 1800000, 200000],
  ["Charlton prior deferred tax if base unchanged", (2000000 - 1800000) * 0.3, 60000],
  ["Charlton total deferred tax at reporting date", (2500000 - 1800000) * 0.3, 210000],
  ["Charlton revaluation tax in OCI", (2500000 - 2000000) * 0.3, 150000],
  ["machine future tax deduction", 10000 - 3000, 7000],
  ["cash-deductible accrual tax base", 1000 - 1000, 0],
  ["taxed advance income tax base", 10000 - 10000, 0],
  ["non-deductible fine tax base", 100 - 0, 100],
  ["Catsu accounting depreciation", (1000000 - 100000) / 10, 90000],
  ["Catsu year-one deferred tax", (910000 - 800000) * 0.3, 33000],
  ["Catsu year-two tax base", 800000 * (1 - 0.2), 640000],
  ["Catsu year-two deferred tax balance", (820000 - 640000) * 0.3, 54000],
  ["Catsu year-two deferred tax charge", 54000 - 33000, 21000],
  ["Epsilon three-month amortisation", (1600000 / 5) * (3 / 12), 80000],
  ["Epsilon deferred tax liability", (1600000 - 80000) * 0.25, 380000],
  ["Pappa intragroup profit", 200 - 150, 50],
  ["Pappa current tax", (200 - 150) * 0.4, 20],
  ["Sierra deferred tax asset on group difference", (200 - 150) * 0.5, 25],
  ["Darton current-year tax", 120000 * 0.3, 36000],
  ["Darton underassessment tax expense", 36000 + (35000 - 30000), 41000],
  ["Darton overassessment tax expense", 36000 - (30000 - 25000), 31000],
  ["Alpha-Beta acquisition deferred tax liability in millions", (54 - 50) * 0.25, 1],
  ["Black seven-year promise fair value", Math.round((20000 / 1.04 ** 7) * 100) / 100, 15198.36],
  ["Blue seven-year promise fair value", Math.round((20000 / 1.08 ** 7) * 100) / 100, 11669.81],
  ["Issuer credit comparison difference", 15198.36 - 11669.81, 3528.55],
  ["Bets inception locked dollar outflow", 60000000 / 1.5, 40000000],
  ["Bets December derivative gain", Math.round((60000000 / 1.24 - 60000000 / 1.5) * 100) / 100, 8387096.77],
  ["Bets December exposure change", Math.round((60000000 / 1.2 - 60000000 / 1.45) * 100) / 100, 8620689.66],
  ["Bets closing cumulative derivative gain", 60000000 / 1 - 60000000 / 1.5, 20000000],
  ["Bets closing cumulative hedged change", Math.round((60000000 / 1 - 60000000 / 1.45) * 100) / 100, 18620689.66],
  ["Bets second-period reserve movement on rounded balances", 18620689.66 - 8387096.77, 10233592.89],
  ["Bets cumulative ineffectiveness", 20000000 - 18620689.66, 1379310.34],
  ["Bets asset after basis adjustment", 60000000 - 18620689.66, 41379310.34],
  ["Jules year-end hedged-item gain", 10000 * (220 - 200), 200000],
  ["Jules year-end futures loss", 10000 * (227 - 210), 170000],
  ["Jules year-end net gain", 200000 - 170000, 30000],
  ["Jules subsequent hedged-item gain", 10000 * (230 - 220), 100000],
  ["Jules subsequent futures loss", 10000 * (230 - 227), 30000],
  ["Jules settlement liability", 170000 + 30000, 200000],
  ["Jules whole-trade profit", 2300000 - 2000000 - 200000, 100000],
  ["Rathbone precise liability", Math.round((2000000 / 1.09 ** 3 + 120000 * [1, 2, 3].reduce((sum, year) => sum + 1 / 1.09 ** year, 0)) * 100) / 100, 1848122.32],
  ["Rathbone precise equity residual", Math.round((2000000 - (2000000 / 1.09 ** 3 + 120000 * [1, 2, 3].reduce((sum, year) => sum + 1 / 1.09 ** year, 0))) * 100) / 100, 151877.68],
  ["Rathbone truncated-factor equity", 2000000 - (2000000 * 0.772 + 120000 * 2.531), 152280],
  [
    "Redblack 20X4 allowance",
    30000000 * 0.003 + 15000000 * 0.016 + 8000000 * 0.036 + 5000000 * 0.066 + 2000000 * 0.106,
    1160000,
  ],
  [
    "Redblack 20X5 allowance",
    32000000 * 0.005 + 16000000 * 0.018 + 10000000 * 0.038 + 7000000 * 0.07 + 3000000 * 0.11,
    1648000,
  ],
  ["Redblack allowance increase without other movements", 1648000 - 1160000, 488000],
  ["Plyman incremental sick days", 8 * (6.5 - 5), 12],
  ["factory total expected cash", 20 * 10000 + 100 * 30000, 3200000],
  ["factory termination component", 120 * 10000, 1200000],
  ["factory service component", 100 * (30000 - 10000), 2000000],
  ["factory monthly service cost", (100 * (30000 - 10000)) / 10, 200000],
  ["Doug development recognised cost", 100000 - 90000, 10000],
  ["IAS 38 revaluation loss through profit or loss", 500 - 400, 100],
  ["Parker warranty expected value", 0.75 * 0 + 0.2 * 1000000 + 0.05 * 4000000, 400000],
  ["Leaf net fulfilment loss", 120000 - 100000, 20000],
  ["Leaf unavoidable contract loss", Math.min(120000 - 100000, 30000), 20000],
  [
    "advance-payment lease liability",
    Math.round(18420 * [1, 2, 3, 4, 5].reduce((sum, year) => sum + 1 / 1.125 ** year, 0)),
    65586,
  ],
  ["advance-payment right-of-use asset", 65586 + 18420, 84006],
  ["advance-payment first-year interest", Math.round(65586 * 0.125), 8198],
  ["market leaseback right-of-use asset", Math.round((500000 * 700000) / 740000), 472973],
  ["market leaseback recognised gain", Math.round(240000 * (1 - 700000 / 740000)), 12973],
  ["Courtney initial payable", 300000 / 20, 15000],
  ["Courtney closing payable", 300000 / 16, 18750],
  ["Courtney exchange loss", 300000 / 16 - 300000 / 20, 3750],
  ["Pilum preference dividend", 4600000 * 0.06, 276000],
  ["Pilum ordinary earnings", 1403000 - 4600000 * 0.06, 1127000],
  ["Pilum rights issue shares", 4120000 / 5, 824000],
  [
    "Pilum weighted-average shares",
    Math.round((4120000 * (1.78 / (10.1 / 6)) * 9) / 12 + (4944000 * 3) / 12),
    4503446,
  ],
  ["Pilum diluted conversion shares", (1500000 / 100) * 90, 1350000],
  ["Pilum diluted earnings", 1127000 + 1500000 * 0.1 * (1 - 0.3), 1232000],
  ["Hewlett year one cumulative charge", ((800 - 95) * 200 * 7.5) / 3, 352500],
  ["Hewlett year two cumulative charge", ((800 - 70) * 200 * 7.5 * 2) / 3, 730000],
  ["Hewlett final cumulative charge", (800 - 60) * 200 * 7.5, 1110000],
  ["Hewlett exercise proceeds", 740 * 200 * 1.5, 222000],
  ["Hewlett balanced share premium", 222000 + 1110000 - 740 * 200, 1184000],
  ["Jenson nine-month finance cost", (35000 * 0.12 * 9) / 12, 3150],
  ["Jenson closing financing liability", 35000 + 3150, 38150],
  ["Jenson delivered subscription revenue", (240000 / 24) * 6, 60000],
  ["Jenson remaining contract liability", 240000 - 60000, 180000],
  ["PQR effective interest income", Math.round(34000 * 0.086), 2924],
  ["PQR cash coupon", 40000 * 0.04, 1600],
  ["PQR gross year-end debenture balance", 34000 + 2924 - 1600, 35324],
  ["PQR annual preference payment", 100000 * 0.06, 6000],
  ["Barcelona consideration", (50 / 0.2) * 0.6 * 1.06, 159],
  ["Barcelona acquisition net assets", 50 + 104 + 11 + 8 + 6 + 20, 199],
  ["Barcelona full goodwill", 159 + 86 - 199, 46],
  ["Barcelona closing goodwill", 46 - 20, 26],
  ["Barcelona retained earnings", 2086 + (394 - 104 - 8 - (20 / 10) * 4) * 0.6 - 20 * 0.6, 2238.4],
  ["Barcelona NCI", 86 + (394 - 104 - 8 - 8) * 0.4 + (46 - 11) * 0.4 - 20 * 0.4, 201.6],
  ["Barcelona consolidated assets", 3220 + 45 + 26 + 1120 + 1599 + 246, 6256],
  [
    "Barcelona consolidated equity and liabilities",
    920 + 2238.4 + 796 + 201.6 + 726 + 1351 + 23,
    6256,
  ],
  ["Fallowfield unrealised inventory profit", 40000 * 0.5 * (25 / 125), 4000],
  ["Fallowfield group revenue", 403400 + 193000 - 40000, 556400],
  ["Fallowfield group cost of sales", 201400 + 92600 - 40000 + 4000, 258000],
  ["Fallowfield group profit", 298400 - 30600 - 42050 - 83750, 142000],
  ["Fallowfield NCI profit", (46000 - 4000) * 0.4, 16800],
  ["Fallowfield opening retained earnings", 163000 + (61000 - 16000) * 0.6, 190000],
  ["Fallowfield closing retained earnings", 238000 + (82000 - 16000 - 4000) * 0.6, 275200],
  ["Hever ownership of Spiro", 48000 / 80000, 0.6],
  ["Hever ownership of Aldridge", 15000 / 50000, 0.3],
  ["Hever Spiro acquisition net assets", 80 + 80 + 20 + 50 - 20, 210],
  ["Hever Spiro goodwill", 128 + 90 - 210, 8],
  ["Hever associate carrying amount", 90 + (400 - 150) * 0.3, 165],
  ["Hever unrealised downstream profit", (16 - 10) * 0.25, 1.5],
  [
    "Hever group retained earnings",
    568 - 1.5 + (200 - 20 + 20 - 5) * 0.6 + (400 - 150) * 0.3,
    758.5,
  ],
  ["Hever NCI", 90 + (200 - 20 + 20 - 5) * 0.4, 168],
  ["Hever consolidated assets", 605 + 8 + 165 + 258.5 + 260 + 90, 1386.5],
  ["Hever equity and liabilities", 200 + 100 + 758.5 + 168 + 160, 1386.5],
  ["Smith goodwill", 324 + 360 * 0.2 - 360, 36],
  ["Smith disposal gain", 650 + 540 * 0.2 - 540 - 36, 182],
  ["Smith consolidated profit", 153 + 126 + 182 - 45 - 36, 380],
  ["Smith NCI profit", (126 - 36) * 0.2, 18],
  ["Smith group retained earnings", 414 + 182 + (360 - 180) * 0.8, 740],
  ["Smith consolidated assets", 360 + 370 + 650, 1380],
  ["Smith equity and liabilities", 540 + 740 + 100, 1380],
  ["Reprise fair-value NCI at acquisition", 500 * 0.25 * 4.4, 550],
  ["Reprise acquisition goodwill", 2000 + 550 - 500 - 1044, 1006],
  ["Reprise closing goodwill", 1006 - 180, 826],
  ["Reprise unrealised downstream profit", 31.2 * (30 / 130), 7.2],
  ["Reprise reciprocal balance after cash transit", 75 - 39, 36],
  ["Reprise consolidated receivables", 1372 + 514 - 39 - 36, 1811],
  ["Reprise consolidated cash", 89 + 51 + 39, 179],
  ["Reprise retained earnings", 4225 - 7.2 + (2610 - 1044) * 0.75 - 180 * 0.75, 5257.3],
  ["Reprise NCI", 550 + (2610 - 1044) * 0.25 - 180 * 0.25, 896.5],
  ["Reprise consolidated assets", 3350 + 3220 + 855 + 826 + 1234.8 + 1811 + 179, 11475.8],
  ["Reprise equity and liabilities", 1000 + 2500 + 5257.3 + 896.5 + 500 + 1322, 11475.8],
  ["Vident first grant opening expense", (20000 * 5) / 2, 50000],
  ["Vident first grant current expense", (20000 * 5) / 2, 50000],
  ["Vident second grant current expense", (50000 * 6) / 3, 100000],
  ["Vident current share-based expense", 50000 + 100000, 150000],
  ["Vident cumulative option reserve", 50000 + 150000, 200000],
  ["Vident opening tax deduction", 20000 * (12.5 - 4.5) * 0.5, 80000],
  ["Vident opening deferred tax asset", 80000 * 0.3, 24000],
  ["Vident closing tax deduction", 20000 * (12 - 4.5) + (50000 * (12 - 6)) / 3, 250000],
  ["Vident closing deferred tax asset", 250000 * 0.3, 75000],
  ["Vident closing cumulative equity tax", (250000 - 200000) * 0.3, 15000],
  ["Vident current profit or loss tax benefit", 150000 * 0.3, 45000],
  ["Vident current equity tax benefit", 15000 - (80000 - 50000) * 0.3, 6000],
  ["Sirus presented equity before classification review", 100 + 20 + 30, 150],
  ["Alpha ownership of Gamma", 20 / 50, 0.4],
  ["Alpha Gamma associate cost", 20 * 1.6, 32],
  ["Alpha Gamma post-acquisition share", (28 - 15) * 0.4, 5.2],
  ["Alpha unrealised downstream profit share", 16 * (25 / 125) * 0.4, 1.28],
  ["Alpha Gamma associate carrying amount", 32 + 5.2 - 1.28, 35.92],
  ["Biogenics research equipment depreciation", (200000 / 4) * (3 / 12), 12500],
  ["Biogenics research equipment closing balance", 200000 - 12500, 187500],
  ["Jerzy closing defined-benefit deficit", 208 - 200, 8],
  ["Gains investment-property fair-value loss", 160000 - 110000, 50000],
  ["Panther maximum inventory unrealised profit", 60000 * (20 / 120), 10000],
  ["DT Bravo acquisition deferred-tax liability", (76 - 60) * 0.25, 4],
  ["DT Bravo goodwill including deferred tax", 90 - (76 - 4), 18],
  ["DT intragroup inventory profit", 30 * 0.2, 6],
  ["DT inventory deferred-tax asset", (30 - (30 - 6)) * 0.25, 1.5],
  ["Jenson nominal five-year franchise cash", 50000 + 4 * 5000, 70000],
  ["Jenson indicative cost-plus service price", 8000 / (1 - 0.2), 10000],
  ["IFRS 15 retrospective discount quarter one", 70 * 500, 35000],
  ["IFRS 15 retrospective discount quarter two", 250 * 450 - 70 * 50, 109000],
  ["IFRS 15 financing first-year interest", 10000 * 0.1, 1000],
  ["IFRS 15 financing second-year interest", 11000 * 0.1, 1100],
  ["IFRS 15 extended warranty machine allocation", 196000 * (196000 / 200000), 192080],
  ["IFRS 15 extended warranty service allocation", 196000 * (4000 / 200000), 3920],
  ["Santolina combined revenue", 230000 + 14000, 244000],
  ["Santolina combined cost of sales", 210450 + 10000, 220450],
  ["Santolina gross profit", 244000 - 220450, 23550],
  ["Santolina contract asset", 230000 - 210000, 20000],
  ["Santolina trade receivable", 210000 - 194000 + 14000, 30000],
  ["Arturo asset grant", 40000 * 0.5, 20000],
  ["Arturo year-one reducing-balance grant", 40000 * 0.4 * 0.5, 8000],
  ["Arturo final-year depreciation", 40000 - 16000 - 9600 - 5760, 8640],
  ["Arturo final-year grant income", 20000 - 8000 - 4800 - 2880, 4320],
  ["Acruni weighted capitalisation rate", (120 * 0.1 + 80 * 0.095) / 200, 0.098],
  ["Acruni borrowing cost capitalised", 30 * 0.098 + 20 * 0.098 * (3 / 12), 3.43],
  ["Acruni remaining interest expense", 120 * 0.1 + 80 * 0.095 - 3.43, 16.17],
  [
    "Krisp value in use to nearest dollar",
    Math.round(
      [280000, 450000, 500000, 550000].reduce(
        (sum, cash, index) => sum + cash / 1.05 ** (index + 1),
        0,
      ),
    ),
    1559235,
  ],
  ["Krisp carrying amount before impairment", 3000000 - 3000000 / 5, 2400000],
  ["Krisp impairment to nearest dollar", 2400000 - 1559235, 840765],
  [
    "Krisp rounded teaching example",
    [280000, 450000, 500000, 550000].reduce(
      (sum, cash, index) => sum + Math.round(cash / 1.05 ** (index + 1) / 1000) * 1000,
      0,
    ),
    1559000,
  ],
  ["Capital leaseback opening liability", 90000 * 4.329, 389610],
  ["Capital retained right-of-use asset", 300000 * (389610 / 400000), 292207.5],
  ["Capital transferred-right gain", 100000 * ((400000 - 389610) / 400000), 2597.5],
  ["Capital first-year depreciation", 292207.5 / 5, 58441.5],
  ["Capital first-year lease interest", 389610 * 0.05, 19480.5],
  ["Capital first-year closing liability", 389610 + 19480.5 - 90000, 319090.5],
  ["Capital closing right-of-use carrying amount", 292207.5 - 58441.5, 233766],
  ["Capital next-year interest to cents", Math.round(319090.5 * 0.05 * 100) / 100, 15954.53],
  ["Capital current lease liability", 90000 - 15954.53, 74045.47],
  ["Capital noncurrent lease liability", 319090.5 - 74045.47, 245045.03],
];
for (const [label, actual, expected] of reviewedCalculations) {
  if (Math.abs(actual - expected) > 1e-9)
    failures.push(`${label}: expected ${expected}, got ${actual}`);
}

const ids = new Set();
const reviewedEnglishSourceText = new Map([
  [
    "ifrs-reviewed-ias12-current-tax-measurement-01",
    {
      question: "How should current tax be measured?",
      choices: [
        "The total liability, including deferred tax",
        "The amount expected to be paid to (or recovered from) the tax authorities",
        "The amount calculated on profit at current tax rates",
        "The amount calculated on profit at future tax rates",
      ],
    },
  ],
  [
    "ifrs-reviewed-ias16-disposal-01",
    {
      question:
        "A company bought some land for $15m in 20X0, revalued it at various dates up to $23m in 20X7, and sold it for $21m in 20X7, but did not receive any cash until 20X8. Ignoring tax, the gain/loss recorded in 20X7 should be:",
      choices: ["Zero", "A gain of $6m", "A loss of $2m", "A gain of $21m"],
    },
  ],
  [
    "ifrs-reviewed-ifrs15-broadband-01",
    {
      question:
        "EF Co provides a wireless router and 12 months' superfast broadband package to a customer for $220 payable in advance. A customer buying the router separately would pay $30 and a customer buying the broadband package separately would pay $20 per month. When is the transaction price allocated to the broadband package recognised?",
      choices: [
        "Immediately, when the $220 payment is received",
        "Over the 12 month period",
        "At the end of the 12 month period",
        "$30 immediately with the remaining spread over the contract period",
      ],
    },
  ],
  [
    "ifrs-reviewed-ias38-rd-expense-01",
    {
      question:
        "At 1 January 20X5, Moor Labs Co has capitalised development costs with an original cost of $10million and carrying amount of $5million. The company started a new R&D project on 1 January 20X5, incurring $1.6 million costs during the research phase, which lasted until 31 August 20X5. From that date, average development costs incurred on the project were $750,000 per month. On 1 November 20X5, the management of Moor Labs Co became confident that the project would be a commercial success and make good profits. The project is still in development at 31 December 20X5. Capitalised development expenditure is amortised at 25% per annum using the straight line method. What amount is recognised as an expense in terms of R&D in the year ended 31 December 20X5?",
      choices: ["$1.6million", "$3.1million", "$4.1million", "$5.6million"],
    },
  ],
  [
    "ifrs-reviewed-ias38-statements-01",
    {
      question:
        "Which of the following statements is/are true? 1. IAS 38 requires that intangible assets are assigned a useful life of no more than 20 years 2. When certain criteria are met, IAS 38 allows a company to choose to capitalise development expenditure or continue to recognise it as an expense 3. IAS 38 allows intangible assets to be revalued if there is an active market for the asset",
      choices: ["1 and 2", "3 only", "1 and 3", "All of the above"],
    },
  ],
  [
    "ifrs-reviewed-ias40-fair-value-01",
    {
      question: "In accordance with IAS 40, an investment property",
      choices: [
        "May be held at fair value with gains and losses recorded through other comprehensive income",
        "May be held at fair value with gains and losses recorded through profit and loss",
        "Must be held at historical cost less depreciation",
        "Must be held at net realisable value",
      ],
    },
  ],
  [
    "ifrs-reviewed-ifrs5-sale-criteria-01",
    {
      question:
        "Which of the following conditions is not required for an asset to be classified as held for sale under IFRS 5?",
      choices: [
        "Management is committed to a plan to sell",
        "The selling price must be in line with current fair value",
        "Asset has not been revalued",
        "Sale is highly probable",
      ],
    },
  ],
  [
    "ifrs-reviewed-ifrs5-acquired-subsidiary-01",
    {
      question:
        "Poetry Co acquires Prose Co, a subsidiary, on 1 October 20X7, exclusively with a view to selling it. Prose Co meets the criteria to be classified as held for sale. At the date of the financial statements 31 May 20X8, Prose Co has not yet been sold. At what amount should Prose Co be measured in the statement of financial position at 31 May 20X8?",
      choices: [
        "At fair value less cost to sell",
        "At the lower of cost and fair value less costs to sell",
        "At depreciated carrying amount",
        "At realisable value",
      ],
    },
  ],
  [
    "ifrs-reviewed-ias32-liability-01",
    {
      question: "Which of the following is a financial liability under IAS 32:Presentation?",
      choices: [
        "Deferred revenue from a government grant",
        "A provision for warranty payments",
        "An obligation to deliver own shares worth a fixed amount of cash",
        "An onerous contract",
      ],
    },
  ],
  [
    "ifrs-reviewed-ifrs9-recognition-01",
    {
      question:
        "When should a financial asset or liability be recognised in accordance with IFRS 9 Financial Instruments?",
      choices: [
        "When it is probable that future economic benefits will flow to the entity",
        "When the entity becomes a party to the contractual provisions of the instrument",
        "When the entity obtains control of the instrument",
        "When the entity obtains the risks and rewards of ownership",
      ],
    },
  ],
  [
    "ifrs-reviewed-ias32-convertible-01",
    {
      question:
        "On 1 July 20X1 White Co issues 10,000 $100 convertible bonds at par. The bonds pay interest annually in arrears at 4% and are redeemable at par on 30 June 20X5. On this date each of the bonds can be exchanged for 15 ordinary shares. The market rate of interest for similar bonds with no conversion rights attached is 5%. What should be recognised in the financial statements when the bonds are issued?",
      choices: [
        "A liability of $964,840 and an equity balance of $35,160.",
        "A liability of $1,000,000",
        "A liability of $855,920 and an equity balance of $144,080",
        "An asset of $1,000,000",
      ],
    },
  ],
  [
    "ifrs-reviewed-ifrs3-goodwill-01",
    {
      question:
        "Netley Co purchased the whole of the share capital of Orell Co for $2,500,000 cash. Shareholders’ funds of the two companies at the date of the purchase were as follows: Netley—share capital $5,000,000 and retained earnings $600,000; Orell—share capital $2,000,000 and retained earnings $250,000. The fair value of Orell Co’s tangible assets exceeded carrying amount by $150,000. What balance should appear in the consolidated statement of financial position of Netley Co for goodwill at acquisition?",
      choices: ["$400,000", "$100,000", "$250,000", "$500,000"],
    },
  ],
  [
    "ifrs-reviewed-ifrs11-joint-control-01",
    {
      question:
        "One third of the shares, and also voting rights, in Snow White Co are held by each of Sneezy Co, Sleepy Co and Dopey Co. Which of the following statements is true?",
      choices: [
        "If an agreement has been drawn up specifying that decision making requires at least 60% of the voting rights Sneezy Co would therefore have joint control.",
        "If an agreement has been drawn up specifying that, as a minimum, decision making requires unanimous agreement by Sleepy Co and Dopey Co, Sneezy Co would have joint control due to the equal share in voting rights.",
        "If an agreement has been drawn up specifying that decision making requires unanimous consent of Sneezy Co, Sleepy Co and Dopey Co, Sneezy Co would have joint control.",
        "None of the above",
      ],
    },
  ],
  [
    "ifrs-reviewed-ifrs10-voting-control-01",
    {
      question:
        "Harwich Co holds 70,000 $1 preference shares in Sall Co. These are non-voting but rank equally with the ordinary shares in a winding-up. Felixstowe Co holds 20,000 $1 voting ordinary shares in Sall Co. The share capital of Sall Co is made up of the following: 100,000 preference shares of $1 each and 30,000 ordinary shares of $1 each. Sall Co is a subsidiary undertaking of:",
      choices: [
        "Both Harwich Co and Felixstowe Co",
        "Harwich Co",
        "Felixstowe Co",
        "Neither Harwich Co nor Felixstowe Co",
      ],
    },
  ],
  [
    "ifrs-reviewed-ias28-equity-method-01",
    {
      question:
        "What is disclosed in the consolidated statement of financial position of an investor when the equity method is used to account for associates?",
      choices: [
        "Receivables but not share of net assets of the associate.",
        "Investment in associate at cost plus /minus the group's share of the associate's post acquisition retained profits or losses.",
        "Share of net assets of the associate and receivables.",
        "Cost of investment plus goodwill on acquisition less amounts written off but not receivables.",
      ],
    },
  ],
]);
const reviewedEnglishSourceFingerprints = new Map([
  [
    "ifrs-reviewed-ias8-prior-error-02",
    "c04d5a30d6214adfae965256641f62701e976b0b611963179a7d88b24cdf316b",
  ],
  [
    "ifrs-reviewed-ifrs15-software-support-02",
    "0dbfc87703ef078303180cea60d605cb02dfe3648ed95e71208c2aa42519b30b",
  ],
  [
    "ifrs-reviewed-ifrs16-rou-initial-02",
    "38582f7b5079c563a063c70766655abc6b2481b6c406ba2dcdcf3181fd132d3a",
  ],
  [
    "ifrs-reviewed-ias23-general-borrowings-02",
    "b833a6c979d18b0a7725f117658c51c4862f38da3673bc6e188647bb45788314",
  ],
  [
    "ifrs-reviewed-ias38-development-testing-02",
    "24cd632f34f95a3a6bf6fcfd275206bb21f499cea4574c9b3c96b3f888ddb262",
  ],
  [
    "ifrs-reviewed-ias40-rental-property-02",
    "95c6e05c88571677026f0297bd62dbfed6559a1ac3e2ba56006c81e1a3874a59",
  ],
  [
    "ifrs-reviewed-ias10-flood-02",
    "12534c20f01714375926c63f52e49c9733fa76cca2a470c7a898b678b27de370",
  ],
  [
    "ifrs-reviewed-ias37-onerous-contract-02",
    "36f0767e999b94a04e8e0b561824e9b020e35ce204a9e0d6ce306e3bd7601a36",
  ],
  [
    "ifrs-reviewed-ias12-accelerated-allowances-02",
    "ec03dd683cf41b6e06772c075ffa9f5ea0bb9cc256fae4c472f5e6606b0ce4f0",
  ],
  [
    "ifrs-reviewed-ias37-warranty-population-02",
    "ccf854844244b1771f5815c4a44f695fda007ef9b009060fef5dec56a54c6776",
  ],
  [
    "ifrs-reviewed-ias37-contingent-asset-02",
    "87106ea5bb0026471bd8c0e4cb697ad320ee3a397318089ec912127fee8d739e",
  ],
  [
    "ifrs-reviewed-ifrs9-sppi-assets-02",
    "e1d1400cc321d2e6aae66762613e3fa49fe16e424d70f14a371abf8e4422be85",
  ],
  [
    "ifrs-reviewed-ias8-material-error-03",
    "6a1b1556e39b4258b1cebcab4784e4c5383831fb8790af2ba28f37678ff9a141",
  ],
  [
    "ifrs-reviewed-ifrs15-vehicle-control-03",
    "c63d025aad4e6b2879769042eec8fb43980d2d992f04311f2978eb861651df67",
  ],
  [
    "ifrs-reviewed-ias16-revalued-disposal-03",
    "f90c24f75e602af3f959872c9bc5104dc257d9157741b3bdeff88d9bae1de596",
  ],
  [
    "ifrs-reviewed-ias36-value-in-use-02",
    "30968ae275fd26e64fa4c1d124a8d13d4272bca9bb454b29c5421ab4470456b1",
  ],
  [
    "ifrs-reviewed-ias10-going-concern-03",
    "d301d020485c8239e8312a86a015ba4b78ce4d5e65da0f5bd6330096e57ff059",
  ],
  [
    "ifrs-reviewed-ias19-actuarial-assumptions-02",
    "40e7f0cb8ec56b22a1b1e8a72257bebb019dd5ef3ca239359ac833fa27ec8f90",
  ],
  [
    "ifrs-reviewed-ias12-revaluation-tax-03",
    "2a68841b08fa6076de67beb9548f4e351dfc23db0fa840f30287a28ada211cb3",
  ],
  [
    "ifrs-reviewed-ifrs3-trademark-02",
    "cf844ea8a806356c7b14dc177d942794508e425a0a8c57760496717071e76ab2",
  ],
  [
    "ifrs-reviewed-ifrs3-full-goodwill-03",
    "8aa234f1d3696da3c5068eb861cccb752f2ab6beeada02544eece14d4f564e30",
  ],
  [
    "ifrs-reviewed-ifrs3-partial-goodwill-04",
    "210335e048ddd2f126f9961e26b1ee9abcc27eabf042e1ddb625c20d83d03a63",
  ],
  [
    "ifrs-reviewed-ifrs11-joint-operation-02",
    "d3ee66d8cf3cb05b9bbc799b4150eedd1ab2d590ed35c061be55506c4319b0ed",
  ],
  [
    "ifrs-reviewed-ias8-residual-value-04",
    "6bb94ad7c79c2597b46a6ae932816fc9bd6f99f09da3fead5b70a2c857a477db",
  ],
  [
    "ifrs-reviewed-ifrs8-segment-definition-02",
    "4213eeaf60be6843b4e7d486d048fb392efee24f3ea117a69efe06750e205f9d",
  ],
  [
    "ifrs-reviewed-ias24-supplier-02",
    "db3af5b73dc73df7ad899fd79ddb990f2710e69de6cab7409861e49f2c199042",
  ],
  [
    "ifrs-reviewed-ias33-convertible-eps-02",
    "79e4d745501dcb9893eb0759f3be485f0ce7337ab16714be87aa6d8e6ea9fbee",
  ],
]);
for (const question of reviewedQuestions) {
  if (ids.has(question.id)) failures.push(`${question.id}: duplicate reviewed question ID`);
  ids.add(question.id);
  if (!officialReference.test(question.reference))
    failures.push(`${question.id}: public reference must be IFRS/IAS only`);
  if (
    !indexed.has(
      question.examDomain?.match(/(?:IFRS|IAS) \d+/)?.[0] ??
        question.topic.match(/(?:IFRS|IAS) \d+/)?.[0],
    )
  )
    failures.push(`${question.id}: question is not linked to an indexed standard`);
  for (const lang of ["ar", "en"]) {
    if (!question.question[lang]?.trim()) failures.push(`${question.id}: missing ${lang} prompt`);
    if (question.choices[lang]?.length !== 4)
      failures.push(`${question.id}: ${lang} must have four choices`);
    if (!question.explanation[lang]?.trim())
      failures.push(`${question.id}: missing ${lang} explanation`);
  }
  if (
    !Number.isInteger(question.answerIndex) ||
    question.answerIndex < 0 ||
    question.answerIndex > 3
  )
    failures.push(`${question.id}: invalid answer index`);
  const sourceText = reviewedEnglishSourceText.get(question.id);
  const lockedFingerprint = reviewedEnglishSourceFingerprints.get(question.id);
  if (!sourceText && !lockedFingerprint)
    failures.push(`${question.id}: missing locked source-text check`);
  else if (sourceText) {
    if (question.question.en !== sourceText.question)
      failures.push(`${question.id}: English prompt no longer matches the reviewed source text`);
    if (JSON.stringify(question.choices.en) !== JSON.stringify(sourceText.choices))
      failures.push(`${question.id}: English choices no longer match the reviewed source text`);
  } else {
    const actualFingerprint = createHash("sha256")
      .update(`${question.question.en}\n${JSON.stringify(question.choices.en)}`)
      .digest("hex");
    if (actualFingerprint !== lockedFingerprint)
      failures.push(`${question.id}: reviewed source fingerprint no longer matches`);
  }
}

console.log(
  JSON.stringify(
    {
      expanded_standards: Object.keys(expansions).length,
      detailed_sections: Object.values(expansions).reduce(
        (sum, item) => sum + item.sections.length,
        0,
      ),
      worked_examples: Object.values(expansions).reduce(
        (sum, item) => sum + item.workedExamples.length,
        0,
      ),
      reviewed_source_questions: reviewedQuestions.length,
      open_practice_cases: openPracticeCases.length,
      public_reference_policy: "IFRS/IAS only",
    },
    null,
    2,
  ),
);

if (failures.length) {
  console.error("\nIFRS study expansion check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("\nIFRS study expansion check passed.");
