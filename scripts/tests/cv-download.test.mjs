import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const rootFile = (path) => new URL(`../../${path}`, import.meta.url);
const source = (path) => readFileSync(rootFile(path), "utf8");

test("published CV is a real, nonempty PDF asset", () => {
  const pdf = readFileSync(rootFile("public/mycv.pdf"));
  assert.ok(pdf.byteLength > 50_000, "CV asset is suspiciously small");
  assert.equal(pdf.subarray(0, 5).toString("ascii"), "%PDF-");
  assert.ok(
    pdf.lastIndexOf(Buffer.from("%%EOF")) > pdf.length - 2048,
    "CV should contain a closing PDF marker",
  );
});

test("all portfolio CV entry points use the same native download component", () => {
  const component = source("src/components/CvDownloadLink.tsx");
  assert.ok(component.includes('const CV_URL = "/mycv.pdf"'));
  assert.ok(component.includes('const CV_FILENAME = "Ahmed-Elmadani-CV.pdf"'));
  assert.match(component, /t\.nav\.cv\[lang\]/);
  for (const path of [
    "src/routes/index.tsx",
    "src/components/about/CinematicAbout.tsx",
  ]) {
    assert.match(source(path), /<CvDownloadLink\b/);
  }
});

test("static hosts are instructed to serve CV as an attachment", () => {
  const headers = source("public/_headers");
  assert.match(headers, /^\/mycv\.pdf\s*$/m);
  assert.match(
    headers,
    /Content-Disposition: attachment; filename="Ahmed-Elmadani-CV\.pdf"/,
  );
});

test("CV action downloads the verified PDF as a file, not an inline viewer", () => {
  const component = source("src/components/CvDownloadLink.tsx");
  assert.ok(component.includes('fetch(CV_URL, { credentials: "same-origin", cache: "no-store" })'));
  assert.ok(component.includes('pdf.slice(0, 5).text()'));
  assert.ok(component.includes('"%PDF-"'));
  assert.ok(component.includes('URL.createObjectURL'));
  assert.ok(component.includes('link.download = CV_FILENAME'));
  assert.ok(component.includes('link.click()'));
  assert.ok(component.includes('event.preventDefault()'));
  assert.ok(component.includes('toast.error'));
});
