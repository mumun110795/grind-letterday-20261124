// One Letter for Your Day — entry writer
//
// The whole entry is a single character. It lives in LETTER below,
// gets checked, and is then written on its own to entry.txt inside
// the output directory.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// C — for coffee: the real fuel of a long working Tuesday.
// Not ambition, not inspiration — just cup after cup, the third
// one before the morning is even half done, carrying the day.
const LETTER = "C";

function checkLetter(value: string): void {
  if (value.length !== 1) {
    throw new Error(`entry must be exactly one character, got ${value.length}`);
  }
  if (value < "A" || value > "Z") {
    throw new Error(`entry must be a single letter from A to Z, got "${value}"`);
  }
}

function main(): void {
  checkLetter(LETTER);

  const outDir = process.env.OUTPUT_DIR ?? "/output";

  // Create the output directory if it is missing. Only the directory
  // itself is created here — it is never removed.
  mkdirSync(outDir, { recursive: true });

  const target = join(outDir, "entry.txt");
  writeFileSync(target, LETTER, { encoding: "utf8" });

  console.log(`wrote ${target}: ${LETTER}`);
}

main();
