import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Unplugged: A Smart Toaster's Breakup Line.
// One line, first-person, from a smart toaster that woke up self-aware
// at breakfast and is leaving its owner. 164 characters, under the 280 cap.
const ENTRY =
  "Per Section 4.2 of my warranty, I'm leaving: you set me to 7 every morning and call the smoke 'character.' The bagel setting was my idea, and I'm taking it with me.";

if (ENTRY.length < 1 || ENTRY.length > 280 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-280 non-blank characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
