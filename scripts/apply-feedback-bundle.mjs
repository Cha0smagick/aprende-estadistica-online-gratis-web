// Aplica feedback directamente al bundle JSON (data/<curso>.js), sin depender de los módulos fuente.
// Uso: node scripts/apply-feedback-bundle.mjs <curso> <patch.json>
import fs from "node:fs";

const [course, patchPath] = process.argv.slice(2);
if (!course || !patchPath) { console.error("Uso: node scripts/apply-feedback-bundle.mjs <curso> <patch.json>"); process.exit(2); }
const patch = JSON.parse(fs.readFileSync(patchPath, "utf8"));
const file = `data/${course}.js`;

let text = fs.readFileSync(file, "utf8");
const json = text.replace(/^\uFEFF?export default\s*/, "").replace(/;\s*$/, "");
const bundle = JSON.parse(json);

const index = new Map();
for (const m of bundle.modules) for (const l of m.lessons) for (const q of l.exercises || []) index.set(q.id, q);

let changed = 0;
const skipped = [];
for (const [id, c] of Object.entries(patch.items)) {
  const q = index.get(id);
  if (!q) { skipped.push(id); continue; }
  if (c.type === "short") {
    q.type = "short";
    delete q.choices;
    delete q.answer;
    delete q.tol;
    q.answers = c.answers;
  }
  if (c.prompt) q.prompt = { es: c.prompt };
  if (c.choicesEs) q.choices = c.choicesEs.map((s) => ({ es: s }));
  if (c.hint) q.hint = { es: c.hint };
  if (c.solution) q.solution = { es: c.solution };
  if (c.explain) q.explain = { es: c.explain };
  changed++;
}

fs.writeFileSync(file, `export default ${JSON.stringify(bundle, null, 2)};\n`, "utf8");
console.log(`Aplicados: ${changed}${skipped.length ? " · omitidos: " + skipped.join(", ") : ""}`);
