// gta6-meme-x-01 entry program, written for this repository.
//
// What it does, and all it does: the entry itself is the X post named in
// POST.json at the repository root. The grader expects that file to show
// up in its output directory, so this program copies POST.json from the
// bot directory (the repository, in the grader's container) into the
// output directory, byte for byte.
//
// Runtime: Node 22, standard library only, no network, no clock.
//
// Local run, the way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

// An X post address, the only thing POST.json may name:
// https://x.com/<handle>/status/<numeric id> (twitter.com works too).
const POST_URL_PATTERN = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status(es)?\/\d+\/?$/;

function fail(message: string): never {
  console.error(`gta6-meme-x-01: ${message}`);
  process.exit(1);
}

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(botDir, 'POST.json');
const targetPath = join(outputDir, 'POST.json');

// POST.json is the whole hand-in: without it there is nothing to copy,
// so say so plainly instead of letting copyFileSync throw a bare ENOENT.
if (!existsSync(sourcePath)) {
  fail(`POST.json not found in bot directory ${botDir}`);
}

// Read it back and check the address before copying: a malformed file or
// a url that is not an X status link can only be refused by the gate, so
// failing here with a clear reason beats handing in a dead entry.
let postUrl = '';
try {
  const parsed: unknown = JSON.parse(readFileSync(sourcePath, 'utf8'));
  postUrl = (parsed as { url?: unknown })?.url as string;
} catch (err) {
  fail(`POST.json is not valid JSON: ${(err as Error).message}`);
}
if (typeof postUrl !== 'string' || !POST_URL_PATTERN.test(postUrl)) {
  fail(`POST.json url is not an X post address: ${String(postUrl)}`);
}

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(sourcePath, targetPath);
} catch (err) {
  fail(`could not copy POST.json to ${outputDir}: ${(err as Error).message}`);
}

const copied = statSync(targetPath);
if (copied.size === 0) {
  fail('the copied POST.json is empty, which cannot name a post');
}

console.log(`gta6-meme-x-01: handed in ${postUrl} (POST.json, ${copied.size} bytes)`);
