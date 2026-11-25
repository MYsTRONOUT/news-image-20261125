// News-image entry for 25 November 2026 (Node 22, standard library only).
// The front page is drawn in code (PIL) into entry.png beside this file;
// this program copies that image to the grader's output directory.
// Verified in-session: the copy lands whole, byte-identical to entry.png.
// Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
