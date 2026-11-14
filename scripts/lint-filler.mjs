// Detecta relleno: frases repetidas y líneas-fragmento al final de cada lección.
import fs from "node:fs";
import path from "node:path";

const ROOT = "content/es";
const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p); else if (e.name.endsWith(".md")) files.push(p);
  }
})(ROOT);

const rows = [];
for (const f of files) {
  const raw = fs.readFileSync(f, "utf8");
  const body = raw.replace(/```[\s\S]*?```/g, " ").replace(/\$\$[\s\S]*?\$\$/g, " ");
  const sentences = body
    .split(/(?<=[.!?])\s+/)
    .map(s => s.replace(/[*_`#>|]/g, "").trim())
    .filter(s => s.split(/\s+/).length >= 4);
  const seen = new Map();
  for (const s of sentences) seen.set(s, (seen.get(s) || 0) + 1);
  const dups = [...seen].filter(([, n]) => n > 1);
  const dupCount = dups.reduce((a, [, n]) => a + (n - 1), 0);

  // líneas-fragmento: prosa corta suelta (sin lista, tabla, encabezado, fórmula)
  const frag = raw.split(/\r?\n/).filter(l => {
    const t = l.trim();
    if (!t || t.length > 90) return false;
    if (/^([-*+]|\d+\.|\||#|>|\$\$|<)/.test(t)) return false;
    if (/^\*\*[^*]+\*\*\.?$/.test(t)) return false;
    return t.split(/\s+/).length <= 12 && /[a-záéíóúñ]/i.test(t);
  }).length;

  rows.push({ f: path.basename(f), dupCount, frag, words: body.split(/\s+/).length });
}

rows.sort((a, b) => b.dupCount - a.dupCount || b.frag - a.frag);
const bad = rows.filter(r => r.dupCount > 0 || r.frag > 15);
console.log(`Lecciones: ${rows.length} · con frases duplicadas: ${rows.filter(r => r.dupCount).length} · con >15 fragmentos: ${rows.filter(r => r.frag > 15).length}`);
console.log("\nTop 20 por frases duplicadas:");
for (const r of rows.slice(0, 20)) console.log(`  ${String(r.dupCount).padStart(3)} dup · ${String(r.frag).padStart(3)} frag · ${r.words} palabras · ${r.f}`);
const totalDup = rows.reduce((a, r) => a + r.dupCount, 0);
console.log(`\nTotal de repeticiones: ${totalDup}`);

// El relleno se detecta por líneas-fragmento: prosa de menos de 12 palabras suelta
// entre párrafos. Las repeticiones de datos de ejemplo en los pasos y soluciones son legítimas.
const padded = rows.filter(r => r.frag > 15);
if (process.argv.includes("--strict")) {
  console.log(`\n--strict: lecciones con relleno (>15 fragmentos)=${padded.length} → ${padded.length ? "FALLA" : "ok"}`);
  for (const p of padded) console.log(`  ${p.f}`);
  process.exit(padded.length ? 1 : 0);
}
