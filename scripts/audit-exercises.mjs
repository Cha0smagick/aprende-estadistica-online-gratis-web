import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = process.cwd();
const courses = [];
for (const f of ["fundamentos.js", "descriptiva.js", "probabilidad.js", "inferencial.js"]) {
  courses.push((await import(pathToFileURL(path.join(ROOT, "data", f)).href)).default);
}

const byType = {};
const rows = [];
let total = 0, noExplain = 0, noSolution = 0, leakyHints = 0;

for (const c of courses) {
  let t = 0, missE = 0, missS = 0, leak = 0;
  for (const m of c.modules) for (const l of m.lessons) for (const q of l.exercises || []) {
    total++; t++;
    byType[q.type] = (byType[q.type] || 0) + 1;
    if (!q.explain || !(q.explain.es || "").trim()) { noExplain++; missE++; }
    const sol = q.solution && (q.solution.es || "");
    if (!sol || sol.trim().length < 60) { noSolution++; missS++; }
    // pista que filtra la respuesta: contiene la solución literal (>=12 caracteres) o el índice correcto
    const hint = (q.hint && (q.hint.es || "")) || "";
    if (hint && sol) {
      const h = hint.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const s = sol.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const core = s.replace(/[^a-z0-9 ]/g, " ").trim();
      if (core.length >= 12 && h.includes(core)) { leakyHints++; leak++; }
    }
  }
  rows.push({ course: c.id, exercises: t, sinExplicacion: missE, solucionCorta: missS, pistasFiltradas: leak });
}

console.log("Tipo        N");
for (const [k, v] of Object.entries(byType).sort((a, b) => b[1] - a[1])) console.log(`${k.padEnd(11)} ${v}`);
console.log("\nCurso        Ejerc.  Sin explic.  Solución <60  Pista filtra");
for (const r of rows) console.log(`${r.course.padEnd(12)} ${String(r.exercises).padStart(6)} ${String(r.sinExplicacion).padStart(12)} ${String(r.solucionCorta).padStart(13)} ${String(r.pistasFiltradas).padStart(14)}`);
console.log(`\nTOTAL ejercicios: ${total}`);
console.log(`Sin explicación de error: ${noExplain} (${(100 * noExplain / total).toFixed(1)}%)`);
console.log(`Solución <60 caracteres: ${noSolution} (${(100 * noSolution / total).toFixed(1)}%)`);
console.log(`Pistas que filtran la solución: ${leakyHints}`);
const prod = (byType.numeric || 0) + (byType.order || 0) + (byType.short || 0) + (byType.output || 0);
console.log(`Formato "producción" (numeric/order/short/output): ${prod} (${(100 * prod / total).toFixed(1)}%)`);
