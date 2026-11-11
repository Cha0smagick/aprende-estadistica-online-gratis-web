// Añade una frase a explain.es en el bundle JSON. Uso: node scripts/append-explain-bundle.mjs <curso> <patch.json>
import fs from "node:fs";
const [course, patchPath] = process.argv.slice(2);
if (!course || !patchPath) { console.error("Uso: node scripts/append-explain-bundle.mjs <curso> <patch.json>"); process.exit(2); }
const patch = JSON.parse(fs.readFileSync(patchPath, "utf8"));
const file = `data/${course}.js`;
let text = fs.readFileSync(file, "utf8");
const json = text.replace(/^\uFEFF?export default\s*/, "").replace(/;\s*$/, "");
const bundle = JSON.parse(json);
const index = new Map();
for (const m of bundle.modules) for (const l of m.lessons) for (const q of l.exercises || []) index.set(q.id, q);
let n = 0;
const skipped = [];
for (const [id, extra] of Object.entries(patch.items)) {
  const q = index.get(id);
  if (!q || !q.explain || !q.explain.es) { skipped.push(id); continue; }
  q.explain.es = q.explain.es.trim() + " " + extra;
  n++;
}
fs.writeFileSync(file, `export default ${JSON.stringify(bundle, null, 2)};\n`, "utf8");
console.log(`Ampliadas: ${n}${skipped.length ? " · sin match: " + skipped.join(", ") : ""}`);
