import fs from "node:fs";
const checks = [
  ["_site/es/estadistica-descriptiva/index.html", ["skip-link", 'id="main"', "mastery-panel", "exam-box"]],
  ["_site/es/estadistica-descriptiva/tendencia-central/media-aritmetica/index.html", ["skip-link", 'id="main"', "assets/js/quiz.js", "REVIEW_ITEMS"]],
  ["_site/es/repaso/index.html", ["error-log", "Errores recientes"]],
  ["_site/es/fundamentos-e-historia/historia-de-la-estadistica/origenes/index.html", ["Orígenes"]],
  ["assets/js/quiz.js", ['role:"radiogroup"', "aria-labelledby"]],
];
let bad = 0;
for (const [file, needles] of checks) {
  if (!fs.existsSync(file)) { console.log("FALTA", file); bad++; continue; }
  const c = fs.readFileSync(file, "utf8");
  const res = needles.map(n => `${n}:${c.includes(n) ? "ok" : "NO"}`);
  console.log(file.replace("_site", ""), "·", res.join(" "));
  if (res.some(r => r.endsWith("NO"))) bad++;
}

// R2: el repaso no debe ser siempre el primer ejercicio de cada lección
const p = "_site/es/estadistica-descriptiva/dispersion/varianza-y-desviacion/index.html";
const c = fs.readFileSync(p, "utf8");
const m = c.match(/window\.REVIEW_ITEMS=(\[[\s\S]*?\]);/);
if (m) {
  const items = JSON.parse(m[1]);
  console.log("repaso:", items.map(i => i.id).join(", "));
}
process.exit(bad ? 1 : 0);
