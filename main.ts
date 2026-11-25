import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const NOTE =
  "You opened me 14 times today and ate nothing. The leftover lasagna watched you do it. We are both disappointed.";

const OUTPUT_PATH = "/output/entry.txt";

const MIN_LENGTH = 1;
const MAX_LENGTH = 200;

function validateEntry(text: string): void {
  if (text.length < MIN_LENGTH || text.length > MAX_LENGTH) {
    throw new Error(
      `Note must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${text.length}.`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("Note must not be only whitespace.");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Note must be a single line.");
  }
}

function main(): void {
  validateEntry(NOTE);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, NOTE, "utf8");
}

main();
