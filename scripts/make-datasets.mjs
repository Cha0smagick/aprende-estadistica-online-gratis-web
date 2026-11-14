// Genera datasets didácticos reproducibles (datos simulados) en es/datos/.
// Uso: node scripts/make-datasets.mjs
import fs from "node:fs";
import path from "node:path";

const OUT = path.join("es", "datos");
fs.mkdirSync(OUT, { recursive: true });

// PRNG determinista (mulberry32) para que los CSV no cambien entre ejecuciones
function rng(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const r2 = (x) => Math.round(x * 100) / 100;
function normal(rand, mu, sd) {
  const u = Math.max(rand(), 1e-9), v = rand();
  return mu + sd * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

// 1) ventas por tienda y semana: tendencia + estacionalidad + ruido
{
  const rand = rng(1);
  const tiendas = ["Centro", "Norte", "Sur"];
  const rows = [["tienda", "semana", "ventas", "clientes", "ticket_medio"]];
  tiendas.forEach((t, i) => {
    const base = 900 + i * 120;
    for (let s = 1; s <= 40; s++) {
      const tendencia = 8 * s;
      const estacional = 90 * Math.sin((2 * Math.PI * s) / 13);
      const ventas = Math.max(200, Math.round(base + tendencia + estacional + normal(rand, 0, 60)));
      const clientes = Math.max(80, Math.round(ventas / (12 + i) + normal(rand, 0, 8)));
      rows.push([t, s, ventas, clientes, r2(ventas / clientes)]);
    }
  });
  fs.writeFileSync(path.join(OUT, "ventas-tiendas.csv"), rows.map(r => r.join(",")).join("\n") + "\n");
}

// 2) clientes: gasto, canal, satisfacción, abandono
{
  const rand = rng(2);
  const canales = ["organico", "ads", "email", "referido"];
  const rows = [["id", "edad", "canal", "gasto_anual", "satisfaccion", "abandono"]];
  for (let i = 1; i <= 300; i++) {
    const canal = canales[Math.floor(rand() * canales.length)];
    const edad = Math.round(18 + rand() * 50);
    const efecto = { organico: 60, ads: 20, email: 45, referido: 90 }[canal];
    const gasto = Math.max(10, r2(normal(rand, efecto + edad * 0.9, 45)));
    const sat = Math.min(10, Math.max(1, Math.round(normal(rand, 7.2 - (canal === "ads" ? 1.1 : 0), 1.6))));
    const pAbandono = 1 / (1 + Math.exp(-(3.1 - sat * 0.55 - (canal === "ads" ? 0.7 : 0))));
    rows.push([i, edad, canal, gasto, sat, rand() < pAbandono ? 1 : 0]);
  }
  fs.writeFileSync(path.join(OUT, "clientes.csv"), rows.map(r => r.join(",")).join("\n") + "\n");
}

// 3) piezas por línea y turno: control de calidad
{
  const rand = rng(3);
  const lineas = ["A", "B", "C"];
  const turnos = ["mañana", "tarde", "noche"];
  const rows = [["pieza", "linea", "turno", "diametro_mm", "defectuosa"]];
  let id = 1;
  for (const l of lineas) for (const t of turnos) for (let k = 0; k < 25; k++) {
    const mu = 10 + (l === "C" ? 0.12 : 0) + (t === "noche" ? 0.06 : 0);
    const sd = l === "C" ? 0.09 : 0.06;
    const d = normal(rand, mu, sd);
    rows.push([id++, l, t, r2(d), Math.abs(d - 10) > 0.18 ? 1 : 0]);
  }
  fs.writeFileSync(path.join(OUT, "piezas.csv"), rows.map(r => r.join(",")).join("\n") + "\n");
}

// 4) encuesta: dos categóricas y una ordinal
{
  const rand = rng(4);
  const estudios = ["basica", "media", "superior"];
  const rows = [["id", "edad", "estudios", "satisfaccion", "recomienda"]];
  for (let i = 1; i <= 400; i++) {
    const u = rand();
    const est = u < 0.35 ? "basica" : u < 0.7 ? "media" : "superior";
    const edad = Math.round(18 + rand() * 60);
    const base = est === "superior" ? 7.4 : est === "media" ? 6.8 : 6.1;
    const sat = Math.min(10, Math.max(1, Math.round(normal(rand, base, 1.7))));
    const pRec = 1 / (1 + Math.exp(-(sat - 6.4)));
    rows.push([i, edad, est, sat, rand() < pRec ? "si" : "no"]);
  }
  fs.writeFileSync(path.join(OUT, "encuesta.csv"), rows.map(r => r.join(",")).join("\n") + "\n");
}

for (const f of fs.readdirSync(OUT)) {
  const n = fs.readFileSync(path.join(OUT, f), "utf8").trim().split("\n").length - 1;
  console.log(f, n, "filas");
}
