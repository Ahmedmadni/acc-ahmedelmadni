import fs from "node:fs/promises";

const standardsSource = await fs.readFile("src/data/ifrs-standards.ts", "utf8");
const pagesSource = await fs.readFile("src/data/ifrs-standard-pages.ts", "utf8");
const routeSource = await fs.readFile("src/routes/library.standards_.$standardSlug.tsx", "utf8");
const sitemapSource = await fs.readFile("src/routes/sitemap[.]xml.ts", "utf8");

const standards = [
  ...new Set(
    [...standardsSource.matchAll(/\bcode:\s*"((?:IFRS|IAS) \d+)"/g)].map((match) => match[1]),
  ),
];
const slugs = standards.map((code) => code.toLowerCase().replace(/\s+/g, "-"));
const requiredPageSignals = [
  "الملخص التنفيذي",
  "الهدف والنطاق",
  "الاعتراف والقياس",
  "العرض والإفصاح",
  "خطوات التطبيق",
  "أخطاء شائعة",
  "مثال عملي رقمي",
  "قيود محاسبية نموذجية",
  "Checklist قبل الإقفال",
  "IfrsQuestionBank",
];

const failures = [];
if (standards.length !== 43) failures.push(`Expected 43 standards; found ${standards.length}`);
if (new Set(slugs).size !== standards.length) failures.push("Standard page slugs are not unique");
if (!pagesSource.includes("IFRS_STANDARDS.map(buildPage)"))
  failures.push("Learning pages are not generated from the unified standards source");
if (!pagesSource.includes("IFRS_LOCAL_QUESTION_COUNTS"))
  failures.push("Learning pages are not linked to local question counts");
for (const signal of requiredPageSignals) {
  if (!routeSource.includes(signal)) failures.push(`Dynamic route is missing: ${signal}`);
}
if (!sitemapSource.includes("for (const standard of IFRS_STANDARDS)"))
  failures.push("Dynamic standard pages are missing from the sitemap");

console.log(
  JSON.stringify(
    {
      indexed_standards: standards.length,
      unique_page_slugs: new Set(slugs).size,
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
