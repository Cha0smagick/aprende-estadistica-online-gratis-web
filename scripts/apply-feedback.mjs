// Aplica un parche de feedback (fase 5) a las líneas de ejercicios de un módulo fuente.
// Uso: node scripts/apply-feedback.mjs scripts/patches/<archivo>.json
import fs from "node:fs";

const patchPath = process.argv[2];
if (!patchPath) { console.error("Uso: node scripts/apply-feedback.mjs <patch.json>"); process.exit(2); }
const patch = JSON.parse(fs.readFileSync(patchPath, "utf8"));
const file = patch.module;
let text = fs.readFileSync(file, "utf8");
let changed = 0, skipped = [];

const q = (s) => JSON.stringify(s);

for (const [id, c] of Object.entries(patch.items)) {
  const re = new RegExp(`^([ \\t]*)\\{ id: "${id}".*$`, "m");
  const m = text.match(re);
  if (!m) { skipped.push(id); continue; }
  const indent = m[1];
  const line = m[0];
  const pm = line.match(/prompt: (\{[^}]*\})/);
  if (!pm) { skipped.push(id + " (prompt)"); continue; }
  const prompt = pm[1];
  const trailingComma = line.trimEnd().endsWith(",");
  let body;

  if (c.type === "short") {
    body = `{ id: "${id}", type: "short", prompt: ${prompt}, answers: [${c.answers.map(q).join(", ")}], hint: { es: ${q(c.hint)} }, solution: { es: ${q(c.solution)} }, explain: { es: ${q(c.explain)} }, xp: 10 }`;
  } else {
    const tm = line.match(/type: "([a-z]+)"/);
    const type = tm ? tm[1] : "mcq";
    if (type === "truefalse") {
      const am = line.match(/answer: (true|false)/);
      if (!am) { skipped.push(id + " (answer)"); continue; }
      body = `{ id: "${id}", type: "truefalse", prompt: ${prompt}, answer: ${am[1]}, hint: { es: ${q(c.hint)} }, solution: { es: ${q(c.solution)} }, explain: { es: ${q(c.explain)} }, xp: 10 }`;
    } else {
      const cm = line.match(/choices: (\[.*?\]), answer:/);
      const am = line.match(/answer: (\d+)/);
      if (!cm || !am) { skipped.push(id + " (choices/answer)"); continue; }
      body = `{ id: "${id}", type: "mcq", prompt: ${prompt}, choices: ${cm[1]}, answer: ${am[1]}, hint: { es: ${q(c.hint)} }, solution: { es: ${q(c.solution)} }, explain: { es: ${q(c.explain)} }, xp: 10 }`;
    }
  }

  text = text.replace(re, indent + body + (trailingComma ? "," : ""));
  changed++;
}

fs.writeFileSync(file, text, "utf8");
console.log(`Aplicados: ${changed}${skipped.length ? " · omitidos: " + skipped.join(", ") : ""}`);
