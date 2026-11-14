// Comprueba enlaces y recursos internos del sitio generado.
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve("_site");
const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith(".html")) files.push(p);
  }
})(ROOT);

const missing = new Map();
const external = new Set();
for (const f of files) {
  const html = fs.readFileSync(f, "utf8");
  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    let u = m[1];
    if (/^(https?:|mailto:|tel:|#|javascript:|data:)/.test(u)) { if (u.startsWith("http")) external.add(u); continue; }
    // rutas absolutas del dominio de Pages: válidas en producción, no en local
    if (u.startsWith("/aprende-estadistica-online-gratis-web/")) continue;
    // vendor/ se copia en el workflow de despliegue, no en el build local
    if (u.includes("vendor/katex/")) continue;
    u = u.split("#")[0].split("?")[0];
    if (!u) continue;
    const target = u.startsWith("/") ? path.join(ROOT, u) : path.resolve(path.dirname(f), u);
    const ok = fs.existsSync(target) && (fs.statSync(target).isFile() || fs.existsSync(path.join(target, "index.html")));
    if (!ok) {
      const rel = path.relative(ROOT, f);
      if (!missing.has(u)) missing.set(u, []);
      missing.get(u).push(rel);
    }
  }
}

console.log(`HTML: ${files.length} · enlaces externos distintos: ${external.size}`);
if (!missing.size) { console.log("Enlaces internos: todos resuelven"); process.exit(0); }
console.log(`Enlaces internos roto(s): ${missing.size}`);
for (const [u, from] of [...missing].slice(0, 20)) console.log(`  ${u}  ← ${from.slice(0, 2).join(", ")}${from.length > 2 ? " …" : ""}`);
process.exit(1);
