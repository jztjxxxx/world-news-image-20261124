// Draws poster.html into entry.png (1024x1024) with Playwright.
// Fully offline: any request that is not a local file is blocked,
// so the screenshot depends only on the HTML in this folder.
import { chromium } from "playwright";
import { readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const folder = dirname(fileURLToPath(import.meta.url));
const pageFile = resolve(folder, "poster.html");
const shotFile = resolve(folder, "entry.png");

const html = readFileSync(pageFile, "utf8");
if (!html.includes("Tuesday 24 November 2026")) {
  throw new Error("poster.html does not carry the 24 November 2026 dateline");
}

const browser = await chromium.launch({
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--force-device-scale-factor=1"],
});
try {
  const page = await browser.newPage({ viewport: { width: 1024, height: 1024 }, deviceScaleFactor: 1 });
  await page.route("**/*", (route) => {
    const target = route.request().url();
    return target.startsWith("file://") ? route.continue() : route.abort();
  });
  await page.goto("file://" + pageFile, { waitUntil: "load" });
  await page.waitForTimeout(500);
  await page.screenshot({ path: shotFile, type: "png" });
} finally {
  await browser.close();
}

const size = statSync(shotFile).size;
console.log(`rendered ${shotFile} (${size} bytes)`);
if (size > 1024 * 1024) throw new Error("entry.png is over the 1 MiB limit");
