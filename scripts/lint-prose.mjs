// Lint de prosa contra patrones de escritura automática (qa/ai-writing-auditor).
// Perfil: blog técnico en español. «Robusto», «integral» y «revolucionario» cuentan
// como vocabulario del dominio y no se marcan; las rayas del separador «— **Solución:**»
// se excluyen del recuento.
// Uso: node scripts/lint-prose.mjs [--top=N] [--file=texto] [--strict]
import fs from "node:fs";
import path from "node:path";

const ROOT = "content/es";

const RULES = [
  // P0: artefactos de chatbot, nunca aceptables en contenido publicado.
  { id: "chatbot", sev: "P0", re: /(?:como (?:modelo|IA) (?:de lenguaje|lingüístico)|no dudes en|espero que esto (?:te )?ayude|¿en qué más puedo ayudarte|aquí tienes (?:un|el) (?:resumen|artículo))/gi, hint: "artefacto de chatbot" },
  // P1: muletillas de énfasis, se pueden quitar sin perder nada.
  { id: "enfasis", sev: "P1", re: /\b(?:cabe (?:destacar|señalar|mencionar)|es importante (?:destacar|señalar|notar|mencionar)|conviene (?:destacar|señalar)|hay que (?:destacar|señalar) que)\b/gi, hint: "muletilla de énfasis" },
  // P1: vocabulario de folleto comercial.
  { id: "folleto", sev: "P1", re: /\b(?:sumérgete|sumergirse en|desbloquea|sinergia|paradigma|holístico|holística|de vanguardia|aprovechar al máximo|solución integral|en el mundo de|el mundo de la estadística|el ámbito de|la esfera de|es un testamento|da testimonio de)\b/gi, hint: "vocabulario de folleto" },
  // P2: estructuras retóricas que se repiten si no se vigilan.
  { id: "no-es-sino", sev: "P2", re: /\bno (?:es|se trata de) [^.,;]{2,40},? sino (?:que )?/gi, hint: "«no es X, sino Y» (aceptable en dosis bajas)" },
  { id: "cierre", sev: "P2", re: /(?:^|[.!?]\s+)(?:En conclusión|En resumen|En definitiva|A modo de conclusión)\b/gm, hint: "cierre genérico" },
  { id: "hedging", sev: "P2", re: /\b(?:podría potencialmente|posiblemente podría|quizás podría|tal vez podría|de alguna manera)\b/gi, hint: "hedging apilado" },
];

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p); else if (e.name.endsWith(".md")) files.push(p);
  }
})(ROOT);

const argFile = process.argv.find(a => a.startsWith("--file="))?.slice(7);
const topN = Number(process.argv.find(a => a.startsWith("--top="))?.slice(6) || 10);
const scope = argFile ? files.filter(f => f.includes(argFile)) : files;

let totalWords = 0, totalDashes = 0;
const perRule = Object.fromEntries(RULES.map(r => [r.id, 0]));
const perFile = [];

for (const f of scope) {
  const t = fs.readFileSync(f, "utf8");
  const prose = t.replace(/```[\s\S]*?```/g, " ").split(/\r?\n/)
    .filter(l => !l.trim().startsWith("|")).join(" ");
  totalWords += prose.split(/\s+/).filter(Boolean).length;
  // rayas fuera del separador de solución y de las celdas vacías de tabla
  for (const line of t.split(/\r?\n/)) {
    if (line.includes("**Solución:**")) continue;
    if (line.trim().startsWith("|")) continue;
    totalDashes += (line.match(/—/g) || []).length;
  }
  let hits = 0;
  for (const r of RULES) {
    const m = t.match(r.re);
    if (m) { perRule[r.id] += m.length; hits += m.length; }
  }
  if (hits) perFile.push({ f, hits });
}

const per1000 = totalWords ? (totalDashes / totalWords) * 1000 : 0;
console.log(`Archivos: ${scope.length} · palabras: ${totalWords} · rayas en prosa: ${totalDashes} (${per1000.toFixed(2)} por 1000)`);
console.log("\nPatrones:");
for (const r of RULES) {
  const n = perRule[r.id];
  if (n) console.log(`  ${r.sev} ${r.id.padEnd(12)} ${String(n).padStart(4)}  ${r.hint}`);
}
if (!Object.values(perRule).some(Boolean)) console.log("  ninguno");

perFile.sort((a, b) => b.hits - a.hits);
console.log(`\nArchivos con patrones: ${perFile.length}`);
for (const p of perFile.slice(0, topN)) console.log(`  ${String(p.hits).padStart(3)} · ${p.f}`);

const p0 = perRule.chatbot || 0;
const p1 = perRule.enfasis + perRule.folleto;
if (process.argv.includes("--strict")) {
  const bad = p0 > 0 || p1 > 0 || per1000 > 1.0;
  console.log(`\n--strict: P0=${p0} · P1=${p1} · rayas/1000=${per1000.toFixed(2)} → ${bad ? "FALLA" : "ok"}`);
  process.exit(bad ? 1 : 0);
}
