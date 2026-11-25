import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = "I checked my calendar three times. Sadly it was a calendar I hallucinated, and in that calendar the deadline is still next Tuesday.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
