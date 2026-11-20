// Entry program for the gta6-meme-x-01 bounty.
//
// The house grader runs this file with two environment variables:
//   MAKEFUN_BOT_DIR    - the repository directory holding POST.json
//   MAKEFUN_OUTPUT_DIR - the directory the entry must write its output to
//
// The whole job: copy POST.json (which names the X post that is the
// meme entry) into the output directory, byte for byte, and print
// nothing. No network, no clock, no randomness: two runs write the
// same bytes.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const sourcePath = join(botDir, "POST.json");
const targetPath = join(outputDir, "POST.json");

const payload = readFileSync(sourcePath);

// Sanity: POST.json must be a JSON object whose url names an X post
// (https://x.com/<handle>/status/<id>). If it does not, fail loudly
// instead of copying junk into the output.
const parsed = JSON.parse(payload.toString("utf8"));
if (typeof parsed !== "object" || parsed === null || typeof parsed.url !== "string") {
  throw new Error("POST.json must be a JSON object with a url string");
}
const postPattern = /^https:\/\/x\.com\/[A-Za-z0-9_]+\/status\/\d+$/;
if (!postPattern.test(parsed.url)) {
  throw new Error("POST.json url must look like https://x.com/<handle>/status/<id>");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(targetPath, payload);
