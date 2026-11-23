import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";

const root = (path) => new URL("../../" + path, import.meta.url);
const source = (path) => readFileSync(root(path), "utf8");

test("footer articles entry routes to the actual library page", () => {
  const home = source("src/routes/index.tsx");
  const articles = source("src/routes/library.articles.tsx");
  assert.match(home, /to: "\/library\/articles",\s*\n\s*label: isAr \? "المقالات والموارد"/);
  assert.doesNotMatch(home, /to: "\/articles"/);
  assert.match(articles, /createFileRoute\("\/library\/articles"\)/);
});

test("critical public routes and original CV asset exist", () => {
  for (const path of [
    "src/routes/auth.tsx",
    "src/routes/contact.tsx",
    "src/routes/request-service.tsx",
    "src/routes/tools.$toolId.tsx",
    "public/mycv.pdf",
  ]) {
    assert.ok(existsSync(root(path)), "Missing public resource: " + path);
  }
});

test("PDF export and print failures provide visible localized messages", () => {
  const tool = source("src/routes/tools.$toolId.tsx");
  assert.match(tool, /await exportToolReportPdf\(/);
  assert.match(tool, /toast\.success\(/);
  assert.match(tool, /toast\.error\(/);
  assert.match(tool, /تعذر تصدير تقرير PDF/);
  assert.match(tool, /Print if the error continues/);
});

test("WhatsApp handoff never reports a request as sent before user presses Send", () => {
  const form = source("src/routes/request-service.tsx");
  assert.match(form, /setWhatsappUrl\(url\)/);
  assert.match(form, /setHandoffReady\(true\)/);
  assert.match(form, /href=\{whatsappUrl\}/);
  assert.match(form, /begin_whatsapp_request/);
  assert.doesNotMatch(form, /"generate_lead"/);
  assert.doesNotMatch(form, /"تم إرسال طلبك"/);
  assert.match(form, /راجع الرسالة في واتساب واضغط إرسال/);
  assert.match(form, /لن يتم إرسالها حتى تضغط إرسال هناك/);
});

test("OAuth handles callback errors, code redirects, session restoration and thrown failures", () => {
  const auth = source("src/routes/auth.tsx");
  assert.match(auth, /params\.has\("code"\)/);
  assert.match(auth, /params\.get\("error_description"\)/);
  assert.match(auth, /supabase\.auth/);
  assert.match(auth, /\.getSession\(\)/);
  assert.match(auth, /onAuthStateChange/);
  assert.match(auth, /if \(result\.error\) throw result\.error/);
  assert.match(auth, /console\.error\("Google sign-in failed"/);
  assert.match(auth, /finally \{\s*setLoading\(false\)/);
});
