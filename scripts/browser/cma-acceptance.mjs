// Run against a local development server; never publish or modify real user data.
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { chromium } from "playwright";

const base = new URL(process.env.CMA_SMOKE_URL || "http://127.0.0.1:4173");
assert.ok(["127.0.0.1", "localhost", "[::1]"].includes(base.hostname), "Local server required");
const output = "artifacts/cma-browser";
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true });
const evidence = [];
try {
  for (const width of [360, 768, 900, 1024, 1440]) {
    const context = await browser.newContext({ viewport: { width, height: 900 }, locale: "en-US" });
    try {
      // Isolate the smoke run from real accounts, external APIs and analytics.
      await context.route("**/*", route => {
        const url = new URL(route.request().url());
        return url.origin === base.origin ? route.continue() : route.abort();
      });
      const page = await context.newPage();
      const started = Date.now();
      const response = await page.goto(new URL("/library/cma", base).href, { waitUntil: "domcontentloaded" });
      assert.ok(response?.ok(), "CMA route must return HTTP success");
      const main = page.locator("[data-study-main]");
      await main.waitFor({ state: "visible" });
      const english = page.getByRole("button", { name: "التبديل إلى العربية", exact: true });
      await english.waitFor({ state: "visible" });
      const dock = page.locator("aside").filter({ has: page.getByRole("button", { name: "Close notebook", exact: true }) });
      if (width < 900) {
        await page.getByRole("button", { name: "Open notebook", exact: true }).click();
      }
      const editor = dock.getByRole("textbox", { name: "Notebook typing area", exact: true });
      await editor.waitFor({ state: "visible" });
      const note = "CMA browser smoke " + width;
      await editor.fill(note);
      // Wait for the observable storage write rather than an arbitrary sleep.
      await page.waitForFunction(text => Object.values(localStorage).some(v => v.includes(text)), note);
      await dock.getByRole("button", { name: "Close notebook", exact: true }).click();
      await english.click();
      await page.getByRole("button", { name: "Switch to English", exact: true }).waitFor({ state: "visible" });
      await page.screenshot({ path: output + "/arabic-" + width + ".png" });
      await page.getByRole("button", { name: "Switch to English", exact: true }).click();
      await page.reload({ waitUntil: "domcontentloaded" });
      await main.waitFor({ state: "visible" });
      if (width < 900) await page.getByRole("button", { name: "Open notebook", exact: true }).click();
      await editor.waitFor({ state: "visible" });
      assert.equal(await editor.inputValue(), note, "Notebook must restore the saved text");
      await page.screenshot({ path: output + "/notebook-" + width + ".png" });
      evidence.push({ width, height: 900, locale: "en-US", noteRestored: true, languageSwitch: true, smokeElapsedMs: Date.now() - started });
    } finally { await context.close(); }
  }
} finally {
  await browser.close();
  await writeFile(output + "/results.json", JSON.stringify(evidence, null, 2));
}
