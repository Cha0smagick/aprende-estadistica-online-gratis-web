// Amplía explicaciones existentes (fase 5, E2). Uso: node scripts/append-explain.mjs <patch.json>
import fs from "node:fs";
const p = process.argv[2];
if (!p) { console.error("Uso: node scripts/append-explain.mjs <patch.json>"); process.exit(2); }
const patch = JSON.parse(fs.readFileSync(p, "utf8"));
let text = fs.readFileSync(patch.module, "utf8");
let n = 0, skipped = [];
for (const [id, extra] of Object.entries(patch.items)) {
  const re = new RegExp(`^(.*\\{ id: "${id}".*?explain: \\{ es: ")((?:[^"\\\\]|\\\\.)*)(" \\}, xp:.*)$`, "m");
  const m = text.match(re);
  if (!m) { skipped.push(id); continue; }
  text = text.replace(re, `$1${m[2]} ${extra.replace(/"/g, '\\"')}$3`);
  n++;
}
fs.writeFileSync(patch.module, text, "utf8");
console.log(`Ampliadas: ${n}${skipped.length ? " · sin match: " + skipped.join(", ") : ""}`);
