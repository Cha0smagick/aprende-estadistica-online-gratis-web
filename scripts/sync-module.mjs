// Sincroniza los ejercicios de un módulo fuente (data/<curso>/<m>.js) con el bundle
// que consume el sitio (data/<curso>.js). Uso: node scripts/sync-module.mjs fundamentos f0 F0
import fs from "node:fs";
import { pathToFileURL } from "node:url";

const [course, modFile, modId] = process.argv.slice(2);
if (!course || !modFile || !modId) {
  console.error("Uso: node scripts/sync-module.mjs <curso> <archivo-modulo> <id-modulo>");
  process.exit(2);
}

const bundlePath = `data/${course}.js`;
const src = (await import(pathToFileURL(`${process.cwd()}/data/${course}/${modFile}.js`).href)).default;

let text = fs.readFileSync(bundlePath, "utf8");
const json = text.replace(/^\uFEFF?export default\s*/, "").replace(/;\s*$/, "");
const bundle = JSON.parse(json);

const target = bundle.modules.find((m) => m.id === modId);
if (!target) { console.error(`Módulo ${modId} no encontrado en ${bundlePath}`); process.exit(1); }

let updated = 0;
for (const lesson of src.lessons) {
  const bl = target.lessons.find((l) => l.id === lesson.id);
  if (!bl) { console.warn(`Lección ${lesson.id} no está en el bundle`); continue; }
  for (const ex of lesson.exercises || []) {
    const i = (bl.exercises || []).findIndex((e) => e.id === ex.id);
    if (i === -1) { console.warn(`Ejercicio ${ex.id} no está en el bundle`); continue; }
    bl.exercises[i] = ex;
    updated++;
  }
}

fs.writeFileSync(bundlePath, `export default ${JSON.stringify(bundle, null, 2)};\n`, "utf8");
console.log(`Sincronizados ${updated} ejercicios de ${modId} en ${bundlePath}`);
