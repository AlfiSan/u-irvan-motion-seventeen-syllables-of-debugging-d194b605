// Seventeen Syllables of Debugging — one haiku about debugging, 5-7-5.
// The grader runs `node main.ts` and reads /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const haiku = [
  "Three a.m. cursor",
  "blinks at a breakpoint I set",
  "the bug wore my name",
].join("\n");

const outDir = process.env.OUTPUT_DIR ?? "/output";
// The gate only accepts 1-200 characters of UTF-8 text, so refuse
// to write anything outside that range instead of submitting junk.
if (haiku.length < 1 || haiku.length > 200) {
  throw new Error(`haiku must be 1-200 chars, got ${haiku.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), haiku, "utf8");
console.log(`wrote ${haiku.length} chars to ${join(outDir, "entry.txt")}`);
