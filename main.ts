// News-image entry for make.fun (Node 22, standard library only).
//
// The entry is one picture, entry.png, drawn at build time from the
// newspaper front page in layout.html and kept beside this file. This program
// only places a copy of it at /output/entry.png, where the grader expects it.
// It runs twice and must write identical bytes both times, so it never
// generates or alters anything: a plain byte-for-byte copy keeps both runs
// exactly the same.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const source = fileURLToPath(new URL('./entry.png', import.meta.url));
const target = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');

// Make sure the destination folder exists first: the grader provides
// /output, but a local run with MAKEFUN_OUTPUT_DIR=out starts without one.
mkdirSync(dirname(target), { recursive: true });
copyFileSync(source, target);
