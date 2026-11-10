// Aplica un parche de feedback (fase 5) a las líneas de ejercicios de un módulo fuente.
// Admite id:"X" e id: "X", y tipos short/numeric/truefalse/mcq.
// Uso: node scripts/apply-feedback.mjs scripts/patches/<archivo>.json
import fs from "node:fs";

const patchPath = process.argv[2];
if (!patchPath) { console.error("Uso: node scripts/apply-feedback.mjs <patch.json>"); process.exit(2); }
const patch = JSON.parse(fs.readFileSync(patchPath, "utf8"));
const file = patch.module;
let text = fs.readFileSync(file, "utf8");
let changed = 0;
const skipped = [];
const q = (s) => JSON.stringify(s);

for (const [id, c] of Object.entries(patch.items)) {
  const re = new RegExp(`^([ \\t]*)\\{ id:\\s*"${id}".*$`, "m");
  const m = text.match(re);
  if (!m) { skipped.push(id); continue; }
  const indent = m[1];
  const line = m[0];
  const pm = line.match(/prompt:\s*(\{[^}]*\})/);
  if (!pm) { skipped.push(id + " (prompt)"); continue; }
  const prompt = pm[1];
  const trailingComma = line.trimEnd().endsWith(",");

  const type = c.type || (line.match(/type:\s*"([a-z]+)"/) || [])[1] || "mcq";
  let body;

  if (type === "short") {
    body = `{ id:"${id}", type:"short", prompt: ${prompt}, answers: [${c.answers.map(q).join(", ")}], hint:{es:${q(c.hint)}}, solution:{es:${q(c.solution)}}, explain:{es:${q(c.explain)}}, xp:10 }`;
  } else if (type === "numeric") {
    const am = line.match(/answer:\s*(-?\d+(?:\.\d+)?)/);
    const tm = line.match(/tol:\s*([\d.]+)/);
    if (!am) { skipped.push(id + " (answer)"); continue; }
    body = `{ id:"${id}", type:"numeric", prompt: ${prompt}, answer:${am[1]}, tol:${tm ? tm[1] : "0.01"}, hint:{es:${q(c.hint)}}, solution:{es:${q(c.solution)}}, explain:{es:${q(c.explain)}}, xp:10 }`;
  } else if (type === "truefalse") {
    const am = line.match(/answer:\s*(true|false)/);
    if (!am) { skipped.push(id + " (answer)"); continue; }
    body = `{ id:"${id}", type:"truefalse", prompt: ${prompt}, answer:${am[1]}, hint:{es:${q(c.hint)}}, solution:{es:${q(c.solution)}}, explain:{es:${q(c.explain)}}, xp:10 }`;
  } else {
    const cm = line.match(/choices:\s*(\[.*?\]),\s*answer:/);
    const am = line.match(/answer:\s*(\d+)/);
    if (!cm || !am) { skipped.push(id + " (choices/answer)"); continue; }
    body = `{ id:"${id}", type:"mcq", prompt: ${prompt}, choices: ${cm[1]}, answer:${am[1]}, hint:{es:${q(c.hint)}}, solution:{es:${q(c.solution)}}, explain:{es:${q(c.explain)}}, xp:10 }`;
  }

  text = text.replace(re, indent + body + (trailingComma ? "," : ""));
  changed++;
}

fs.writeFileSync(file, text, "utf8");
console.log(`Aplicados: ${changed}${skipped.length ? " · omitidos: " + skipped.join(", ") : ""}`);
