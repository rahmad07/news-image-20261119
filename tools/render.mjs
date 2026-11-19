// Render the newspaper front page (layout.html) to entry.png, 1024x1024.
// Run from ~/workspace/shot-tool so `playwright` resolves from its node_modules:
//   node render.mjs <repo-dir>
// If the PNG is over the 1 MiB gate, re-render as JPEG quality 85 instead
// (the file keeps the name entry.png; the gate tells PNG from JPEG by bytes).
import { chromium } from 'playwright';
import { statSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

const repo = resolve(process.argv[2] ?? '.');
const html = join(repo, 'layout.html');
const out = join(repo, 'entry.png');
const LIMIT = 1048576;

const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1024, height: 1024 } });
  await page.goto('file://' + html, { waitUntil: 'load' });
  await page.waitForTimeout(400);
  await page.screenshot({ path: out, type: 'png' });
  let size = statSync(out).size;
  console.log(`png: ${size} bytes`);
  if (size > LIMIT) {
    await page.screenshot({ path: out, type: 'jpeg', quality: 85 });
    size = statSync(out).size;
    console.log(`jpeg q85: ${size} bytes`);
  }
  console.log(existsSync(out) && size <= LIMIT ? 'OK within 1 MiB' : 'STILL OVER 1 MiB');
} finally {
  await browser.close();
}
