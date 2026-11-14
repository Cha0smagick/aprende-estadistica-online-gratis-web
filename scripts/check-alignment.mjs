// Comprueba que cada deep dive habla de la lección que le toca.
// Uso: node scripts/check-alignment.mjs [--top=N]
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const STOP = new Set(["de","la","el","los","las","y","o","en","del","al","un","una","unos","unas","por","para","con","sin","que","como","mas","su","sus","a","e","es","the","and","to","of"]);
const norm = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(w => w && !STOP.has(w) && (w.length > 2 || /\d/.test(w)));

const courses = ["fundamentos", "descriptiva", "probabilidad", "inferencial"];
const rows = [];

for (const c of courses) {
  const file = path.resolve("data", c + ".js");
  const mod = await import(pathToFileURL(file).href);
  const data = mod.default;
  const list = Array.isArray(data) ? data : data.courses || [data];
  for (const course of list) {
    for (const m of course.modules || []) {
      for (const l of m.lessons || []) {
        const md = path.join("content", "es", l.id + ".md");
        if (!fs.existsSync(md)) { rows.push({ id: l.id, ok: false, why: "sin md" }); continue; }
        const head = fs.readFileSync(md, "utf8").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const toks = norm(l.title.es || "");
        const compact = head.replace(/[^a-z0-9]/g, "");
        const has = t => head.includes(t) || compact.includes(t.replace(/[^a-z0-9]/g, ""));
        const hits = toks.filter(has);
        const ratio = toks.length ? hits.length / toks.length : 0;
        rows.push({ id: l.id, title: l.title.es, ok: toks.length > 0 && ratio >= 0.5, ratio, hits: hits.length, toks: toks.length, missing: toks.filter(t => !has(t)) });
      }
    }
  }
}

const bad = rows.filter(r => !r.ok);
console.log(`Lecciones: ${rows.length} · desalineadas: ${bad.length}`);
for (const b of bad) console.log(`  ${b.id} «${b.title || ""}» faltan: ${(b.missing || []).join(", ") || b.why}`);
process.exit(bad.length ? 1 : 0);
