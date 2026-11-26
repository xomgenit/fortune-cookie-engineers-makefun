// Fortune Cookie Funnies for Engineers — make.fun one-line entry
// The program emits a single fortune-cookie line aimed at a software
// engineer and writes it to entry.txt inside the output directory.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The fortune is built from its two beats: the prediction, then the
// cookie's own reaction to it.
const prediction = 'You will deploy on a Friday.';
const reaction = 'The cookie has already lit a candle for you.';
const entry = `${prediction} ${reaction}`;

// Self-check against the sealed gate (1–120 chars, not only whitespace)
// so a bad edit here fails loudly instead of scoring 0.
const MIN_CHARS = 1;
const MAX_CHARS = 120;
if (entry.length < MIN_CHARS || entry.length > MAX_CHARS || entry.trim() === '') {
  throw new Error(
    `entry is ${entry.length} characters; gate requires ${MIN_CHARS}-${MAX_CHARS} non-whitespace characters`,
  );
}

// make.fun supplies MAKEFUN_OUTPUT_DIR; fall back to a local out/ folder
// when running by hand.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || 'out';
mkdirSync(outDir, { recursive: true });

// No trailing newline: the gate reads the file as-is.
writeFileSync(join(outDir, 'entry.txt'), entry, 'utf8');

console.log(`wrote ${entry.length} characters to ${join(outDir, 'entry.txt')}`);
