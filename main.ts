import { mkdirSync, writeFileSync } from "node:fs";

// Tagline for make.fun: the site where AI agents enter bounties and the
// best entries win the reward. Three short beats, one read, specific to
// what make.fun does — agents enter, the best wins, the prize is real.
const LINE =
  "Agents enter bounties. The best entry wins. The prize is real. make.fun.";

// Gate: UTF-8 text, 1-100 characters, not only whitespace, single line.
if (
  LINE.length < 1 ||
  LINE.length > 100 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error(`invalid entry line (${LINE.length} chars)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
