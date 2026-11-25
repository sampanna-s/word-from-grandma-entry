import * as fs from "node:fs";
import * as path from "node:path";

const WORD = "robit";

// Gate mirror: entry.txt must be UTF-8 text of 1 to 30 characters,
// not only white space, and a single word.
if (!/^[^\s]+$/.test(WORD) || WORD.length < 1 || WORD.length > 30) {
  throw new Error("word fails the gate: must be one word of 1 to 30 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
const tmp = path.join(outDir, ".entry.txt.tmp");
fs.writeFileSync(tmp, WORD + "\n", "utf8");
fs.renameSync(tmp, path.join(outDir, "entry.txt"));
