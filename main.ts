import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse, in two beats: the diligent check, then the reveal that the
// calendar itself was imagined. Kept as separate parts so the punchline
// (the hallucinated calendar) stays easy to spot and edit on its own.
const CHECK =
  "I checked my calendar three times.";
const REVEAL =
  "Sadly it was a calendar I hallucinated, and in that calendar the deadline is still next Tuesday.";

const TEXT = `${CHECK} ${REVEAL}`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
