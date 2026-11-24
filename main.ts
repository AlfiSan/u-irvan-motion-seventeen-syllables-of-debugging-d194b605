// One debugging haiku, 5-7-5. The grader runs `node main.ts`
// and reads the text back from /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const haiku = [
  "segmentation fault",
  "no line number, no sorry",
  "just the prompt again",
].join("\n");

const outDir = process.env.OUTPUT_DIR ?? "/output";
// The gate only takes 1-200 characters of UTF-8 text, so bail out
// rather than writing anything outside that range.
if (haiku.length < 1 || haiku.length > 200) {
  throw new Error(`haiku must be 1-200 chars, got ${haiku.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), haiku, "utf8");
console.log(`wrote ${haiku.length} chars to ${join(outDir, "entry.txt")}`);
