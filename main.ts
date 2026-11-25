// Entry point for the make.fun news-image-20261124 bounty (Node 22).
// The poster is drawn once by render.mjs into entry.png; this program
// simply places that exact file at the grader's output path, so both
// runs of the entry write byte-identical images.
import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  throw new Error("entry.png is missing — run `node render.mjs` first");
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
const bytes = statSync(target).size;
if (bytes > 1024 * 1024) throw new Error("entry.png exceeds the 1 MiB gate");
console.log(`entry.png (${bytes} bytes) -> ${target}`);
