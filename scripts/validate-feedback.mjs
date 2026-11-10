#!/usr/bin/env node
// Fase 5 (E2/E3): cobertura de explicación del error y solución razonada.
// Sin flags: informa y no falla (cobertura parcial durante la migración).
// --strict: falla si algún ejercicio no cumple (usar cuando la cobertura sea 100 %).
import path from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = process.cwd();
const STRICT = process.argv.includes("--strict");
const MIN_EXPLAIN_WORDS = 40;
const MIN_SOLUTION_CHARS = 60;

const courses = [];
for (const f of ["fundamentos.js", "descriptiva.js", "probabilidad.js", "inferencial.js"]) {
  courses.push((await import(pathToFileURL(path.join(ROOT, "data", f)).href)).default);
}

const words = (s) => String(s || "").trim().split(/\s+/).filter(Boolean).length;
const plain = (s) => String(s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();

let total = 0, okExplain = 0, okSolution = 0, leak = 0, prod = 0;
const byCourse = {};

for (const c of courses) {
  const row = { total: 0, explain: 0, solution: 0, leak: 0, prod: 0 };
  for (const m of c.modules) for (const l of m.lessons) for (const q of l.exercises || []) {
    total++; row.total++;
    const ex = (q.explain && q.explain.es) || "";
    const sol = (q.solution && q.solution.es) || "";
    const hint = (q.hint && q.hint.es) || "";
    if (words(ex) >= MIN_EXPLAIN_WORDS) { okExplain++; row.explain++; }
    if (sol.trim().length >= MIN_SOLUTION_CHARS) { okSolution++; row.solution++; }
    if (["numeric", "short", "order", "output"].includes(q.type)) { prod++; row.prod++; }
    if (hint && sol) {
      const h = plain(hint), s = plain(sol);
      if (s.length >= 12 && h.includes(s)) { leak++; row.leak++; }
    }
  }
  byCourse[c.id] = row;
}

const pct = (n) => ((100 * n) / total).toFixed(1) + "%";
console.log("Curso           Ejerc.  explain>=40  solución>=60  pista filtra  producción");
for (const [k, r] of Object.entries(byCourse)) {
  console.log(`${k.padEnd(15)} ${String(r.total).padStart(6)} ${String(r.explain).padStart(12)} ${String(r.solution).padStart(13)} ${String(r.leak).padStart(13)} ${String(r.prod).padStart(11)}`);
}
console.log(`\nTotal ${total} ejercicios`);
console.log(`Formato producción (numeric/short/order/output): ${prod} (${pct(prod)})`);
console.log(`Con explicación ≥${MIN_EXPLAIN_WORDS} palabras: ${okExplain} (${pct(okExplain)})`);
console.log(`Con solución ≥${MIN_SOLUTION_CHARS} caracteres: ${okSolution} (${pct(okSolution)})`);
console.log(`Pistas que filtran la solución: ${leak}`);

if (STRICT && (okExplain < total || okSolution < total || leak > 0)) {
  console.error("\nModo --strict: hay ejercicios sin explicación/solución suficiente o con pistas que filtran.");
  process.exit(1);
}
