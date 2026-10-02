import fs from "node:fs/promises";

const standardsSource = await fs.readFile("src/data/ifrs-standards.ts", "utf8");
const pagesSource = await fs.readFile("src/data/ifrs-standard-pages.ts", "utf8");
const deepDiveSource = await fs.readFile("src/data/ifrs-standard-deep-dives.ts", "utf8");
const referenceNotesSource = await fs.readFile("src/data/ifrs-standard-reference-notes.ts", "utf8");
const studyExpansionSource = await fs.readFile(
  "src/data/ifrs-standard-study-expansions.ts",
  "utf8",
);
const routeSource = await fs.readFile("src/routes/library.standards_.$standardSlug.tsx", "utf8");
const caseSource = await fs.readFile("src/components/library/IfrsStandardCase.tsx", "utf8");
const sitemapSource = await fs.readFile("src/routes/sitemap[.]xml.ts", "utf8");

const standards = [
  ...new Set(
    [...standardsSource.matchAll(/\bcode:\s*"((?:IFRS|IAS) \d+)"/g)].map((match) => match[1]),
  ),
];
const slugs = standards.map((code) => code.toLowerCase().replace(/\s+/g, "-"));
const deepDiveCodes = [
  ...new Set(
    [...deepDiveSource.matchAll(/"((?:IFRS|IAS) \d+)": define\(/g)].map((match) => match[1]),
  ),
];
const referenceNoteCodes = [
  ...new Set(
    [...referenceNotesSource.matchAll(/"((?:IFRS|IAS) \d+)": notes\(/g)].map((match) => match[1]),
  ),
];
const requiredPageSignals = [
  "الملخص التنفيذي",
  "الهدف والنطاق",
  "الاعتراف والقياس",
  "العرض والإفصاح",
  "خطوات التطبيق",
  "IfrsStandardStudyExpansion",
  "أخطاء شائعة",
  "IfrsStandardCase",
  "فنيات وملاحظات مهنية",
  "البيانات والعلاقات",
  "Checklist قبل الإقفال",
  "المصادر والمنهجية",
  "IfrsQuestionBank",
];
const requiredCaseSignals = ["حالة تطبيقية بحساباتها", "قيود محاسبية من الحالة"];

const failures = [];
if (standards.length !== 43) failures.push(`Expected 43 standards; found ${standards.length}`);
if (new Set(slugs).size !== standards.length) failures.push("Standard page slugs are not unique");
if (deepDiveCodes.length !== standards.length)
  failures.push(`Expected ${standards.length} deep dives; found ${deepDiveCodes.length}`);
const missingDeepDives = standards.filter((code) => !deepDiveCodes.includes(code));
if (missingDeepDives.length)
  failures.push(`Standards missing a worked case: ${missingDeepDives.join(", ")}`);
const missingReferenceNotes = standards.filter((code) => !referenceNoteCodes.includes(code));
if (missingReferenceNotes.length)
  failures.push(`Standards missing reference notes: ${missingReferenceNotes.join(", ")}`);
if (!pagesSource.includes("IFRS_STANDARDS.map(buildPage)"))
  failures.push("Learning pages are not generated from the unified standards source");
if (!pagesSource.includes("IFRS_LOCAL_QUESTION_COUNTS"))
  failures.push("Learning pages are not linked to local question counts");
if (!pagesSource.includes("getStandardStudyExpansion"))
  failures.push("Learning pages are not linked to the unified study-expansion source");
if (!studyExpansionSource.includes("IFRS_STANDARD_STUDY_EXPANSIONS"))
  failures.push("Unified study-expansion source is missing");
for (const signal of requiredPageSignals) {
  if (!routeSource.includes(signal)) failures.push(`Dynamic route is missing: ${signal}`);
}
for (const signal of requiredCaseSignals) {
  if (!caseSource.includes(signal)) failures.push(`Worked-case component is missing: ${signal}`);
}
if (!sitemapSource.includes("for (const standard of IFRS_STANDARDS)"))
  failures.push("Dynamic standard pages are missing from the sitemap");

console.log(
  JSON.stringify(
    {
      indexed_standards: standards.length,
      unique_page_slugs: new Set(slugs).size,
      worked_cases: deepDiveCodes.length,
      detailed_reference_notes: referenceNoteCodes.length,
      dynamic_route: "/library/standards/$standardSlug",
      required_sections: requiredPageSignals.length,
    },
    null,
    2,
  ),
);

if (failures.length) {
  console.error("\nIFRS page coverage check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("\nIFRS page coverage check passed.");
