#!/usr/bin/env node
// Valida el contenido profundo de content/<lang>/<lessonId>.md.
// Uso: node scripts/validate-content.mjs [--all]
//   sin --all: las lecciones sin contenido se reportan como pendientes y no fallan.
//   con --all: cualquier lección sin contenido (o por debajo del umbral) falla. Para CI.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT = path.join(ROOT, "content");
const LANG_FILES = { es: "fundamentos.js", en: "fundamentos.js" };
const LANGS = ["es", "en"];
const MIN_WORDS = 2500;
const STRICT = process.argv.includes("--all");

const courses = [];
for (const f of ["fundamentos.js", "descriptiva.js", "probabilidad.js", "inferencial.js"]) {
  courses.push((await import(pathToFileURL(path.join(ROOT, "data", f)).href)).default);
}
const lessons = [];
for (const c of courses) for (const m of c.modules) for (const l of m.lessons) lessons.push({ ...l, course: c.id });

// Prosa real: fuera bloques de codigo y formulas; fuera marcas de Markdown.
function proseWords(md) {
  const plain = md
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/\$\$[\s\S]*?\$\$/g, " ")
    .replace(/\$[^$\n]+\$/g, " ")
    .replace(/^\s{0,3}#{1,6}\s+/gm, "")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    .replace(/[|>_*`#]/g, " ");
  return plain.split(/\s+/).filter((w) => /[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9]/.test(w)).length;
}

function sectionsOf(md) {
  return [...md.matchAll(/^##\s+(\d+)\.\s+(.+)$/gm)].map((m) => ({ n: Number(m[1]), title: m[2].trim() }));
}

function check(md) {
  const problems = [];
  const words = proseWords(md);
  if (words < MIN_WORDS) problems.push(`${words} palabras de prosa (mínimo ${MIN_WORDS})`);

  const secs = sectionsOf(md);
  const nums = secs.map((s) => s.n);
  for (let n = 1; n <= 9; n++) if (!nums.includes(n)) problems.push(`falta la sección ${n} (## ${n}. ...)`);
  if (nums.some((n, i) => i > 0 && n <= nums[i - 1])) problems.push("las secciones no están en orden 1..9");

  const subs = (md.match(/^###\s+/gm) || []).length;
  if (subs < 6) problems.push(`${subs} subsecciones ### (mínimo 6)`);

  if ((md.match(/^\|/gm) || []).length < 4) problems.push("sin tabla de datos");
  if ((md.match(/\$\$/g) || []).length < 2) problems.push("sin fórmula en bloque $$...$$");

  const sec9 = md.split(/^##\s+9\./m)[1] || "";
  const questions = (sec9.match(/^\s*\d+\.\s+/gm) || []).length;
  if (questions < 5) problems.push(`${questions} preguntas numeradas en la sección 9 (mínimo 5)`);

  return { words, secs: secs.length, subs, questions, problems };
}

let ok = 0, pending = 0, failed = 0;
const rows = [];
const byCourse = {};

for (const lesson of lessons) {
  const res = { id: lesson.id, course: lesson.course, words: {}, problems: [] };
  for (const lang of LANGS) {
    const file = path.join(CONTENT, lang, lesson.id + ".md");
    let md = null;
    try { md = await fs.readFile(file, "utf8"); } catch { /* pendiente */ }
    if (!md) { res.words[lang] = 0; continue; }
    const r = check(md);
    res.words[lang] = r.words;
    for (const p of r.problems) res.problems.push(`${lang}: ${p}`);
  }
  const both = res.words.es > 0 && res.words.en > 0;
  const any = res.words.es > 0 || res.words.en > 0;
  if (!any) {
    pending++;
    res.status = "pending";
  } else if (both && res.problems.length === 0) {
    ok++;
    res.status = "ok";
  } else {
    if (!both) res.problems.push(`paridad: es=${res.words.es} en=${res.words.en} (faltan archivos o palabras)`);
    failed++;
    res.status = "FAIL";
  }
  rows.push(res);
  byCourse[lesson.course] = byCourse[lesson.course] || { ok: 0, total: 0 };
  byCourse[lesson.course].total++;
  if (res.status === "ok") byCourse[lesson.course].ok++;
}

for (const r of rows) {
  const mark = r.status === "ok" ? "OK  " : r.status === "FAIL" ? "FAIL" : "----";
  const w = `${String(r.words.es).padStart(5)} / ${String(r.words.en).padStart(5)}`;
  console.log(`${mark} ${r.id.padEnd(8)} ${w}`);
  for (const p of r.problems) console.log(`       · ${p}`);
}

console.log("\n=== Resumen por curso ===");
for (const [c, v] of Object.entries(byCourse)) console.log(`${c.padEnd(14)} ${v.ok}/${v.total} lecciones completas`);
console.log(`\nTotal: ${ok} completas · ${pending} pendientes · ${failed} con errores · umbral ${MIN_WORDS} palabras/idioma`);

if (failed > 0) process.exit(1);
if (STRICT && pending > 0) {
  console.error(`\nModo --all: ${pending} lecciones siguen sin contenido profundo.`);
  process.exit(1);
}
