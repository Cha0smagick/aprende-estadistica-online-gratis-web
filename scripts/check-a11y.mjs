// Auditoría de accesibilidad sobre el HTML generado.
// Uso: node scripts/check-a11y.mjs [--browser] [--limit=N]
// Sin --browser solo revisa el HTML; con --browser recorre el foco con Tab por CDP.
import fs from "node:fs";
import path from "node:path";

const SITE = "_site";
const pages = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith(".html")) pages.push(p.replace(/\\/g, "/").replace("_site", ""));
  }
})(SITE);

const issues = [];
const add = (page, kind, detail) => issues.push({ page, kind, detail });

for (const rel of pages) {
  const html = fs.readFileSync(SITE + rel, "utf8");
  const name = rel;

  if (!/<html[^>]+lang="(es|en)"/.test(html)) add(name, "lang", "sin atributo lang");

  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) add(name, "h1", `${h1} elementos h1`);

  const levels = [...html.matchAll(/<h([1-6])[\s>]/g)].map(m => Number(m[1]));
  for (let i = 1; i < levels.length; i++) {
    if (levels[i] > levels[i - 1] + 1) {
      add(name, "jerarquia", `salta de h${levels[i - 1]} a h${levels[i]}`);
      break;
    }
  }

  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/alt=/.test(m[0])) add(name, "img", "imagen sin alt");
  }

  // controles de formulario sin nombre accesible
  for (const m of html.matchAll(/<(input|select|textarea)\b([^>]*)>/g)) {
    const attrs = m[2];
    if (/type="(hidden|submit|button)"/.test(attrs)) continue;
    const hasName = /aria-label=|aria-labelledby=/.test(attrs) || /id="/.test(attrs);
    if (!hasName) add(name, "control", `<${m[1]} sin aria-label ni id`);
  }

  for (const m of html.matchAll(/tabindex="(\d+)"/g)) {
    if (Number(m[1]) > 0) add(name, "tabindex", `tabindex positivo (${m[1]})`);
  }

  for (const m of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)) {
    const text = m[2].replace(/<[^>]+>/g, "").trim();
    if (!text && !/aria-label=/.test(m[1])) add(name, "enlace", "enlace sin texto ni aria-label");
  }

  for (const m of html.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/g)) {
    const text = m[2].replace(/<[^>]+>/g, "").trim();
    if (!text && !/aria-label=/.test(m[1])) add(name, "boton", "botón sin texto ni aria-label");
  }

  if (!/class="skip-link"/.test(html)) add(name, "skip", "sin enlace de salto");
  if (!/id="main"/.test(html)) add(name, "main", "sin id=main");

  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);
  const dup = ids.filter((v, i) => ids.indexOf(v) !== i);
  if (dup.length) add(name, "id", "ids duplicados: " + [...new Set(dup)].slice(0, 3).join(", "));

  // los SVG de gráficos se generan por JS; aquí solo se comprueba el contenedor estático
}

const byKind = {};
for (const i of issues) byKind[i.kind] = (byKind[i.kind] || 0) + 1;
console.log(`Páginas: ${pages.length} · incidencias: ${issues.length}`);
for (const [k, n] of Object.entries(byKind).sort((a, b) => b[1] - a[1])) console.log(`  ${k}: ${n}`);
for (const i of issues.slice(0, 15)) console.log(`  ${i.page} · ${i.kind} · ${i.detail}`);

if (process.argv.includes("--browser")) {
  const { keyboardAudit } = await import("./lib/a11y-browser.mjs");
  await keyboardAudit(Number(process.argv.find(a => a.startsWith("--limit="))?.slice(8) || 5));
}

process.exit(issues.length ? 1 : 0);
