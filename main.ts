// The 3 AM Commit Message — u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e
//
// Reads the one-line commit message from entry.txt at the repository root
// and writes it to <output dir>/entry.txt for the judge.
// Node 22, standard library only. No network, no clock, no randomness.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));

// The bot tree: MAKEFUN_BOT_DIR in the grader, the repo root otherwise.
const botDir = process.env.MAKEFUN_BOT_DIR ?? repoRoot;

// The output directory: MAKEFUN_OUTPUT_DIR is /output in the grader.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(botDir, "output");

const raw = readFileSync(join(repoRoot, "entry.txt"), "utf8");
const line = raw.replace(/(\r?\n)+$/, "");

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
