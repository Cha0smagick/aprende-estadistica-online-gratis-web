// Auditoría de contraste (WCAG AA) y de diseño móvil por CDP.
// Uso: node scripts/check-ux.mjs [--port=4180]
import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const sleep = ms => new Promise(r => setTimeout(r, ms));
const PORT = 9337;
const userDir = fs.mkdtempSync(path.join(os.tmpdir(), "ux-"));
const chrome = spawn("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", [
  "--headless=new", "--disable-gpu", "--no-sandbox", "--no-first-run",
  "--remote-debugging-port=" + PORT, "--user-data-dir=" + userDir, "about:blank",
], { stdio: "ignore" });

const port = Number(process.argv.find(a => a.startsWith("--port="))?.slice(7) || 4180);
const base = `http://localhost:${port}`;
const pages = [
  "/es/",
  "/es/estadistica-descriptiva/",
  "/es/estadistica-descriptiva/tendencia-central/media-aritmetica/",
  "/es/datos/",
  "/es/repaso/",
];

const CONTRAST_JS = `(() => {
  const lum = (c) => { const [r,g,b] = c.map(v => { v /= 255; return v <= 0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055, 2.4); }); return 0.2126*r + 0.7152*g + 0.0722*b; };
  const parse = (s) => { const m = s.match(/rgba?\\(([^)]+)\\)/); if (!m) return null; const p = m[1].split(',').map(Number); return { rgb: p.slice(0,3), a: p.length > 3 ? p[3] : 1 }; };
  const bgOf = (el) => { let n = el; while (n && n !== document.documentElement) { const c = parse(getComputedStyle(n).backgroundColor); if (c && c.a > 0.9) return c.rgb; n = n.parentElement; } return [11,13,18]; };
  const ratio = (a, b) => { const l1 = lum(a), l2 = lum(b); return (Math.max(l1,l2)+0.05)/(Math.min(l1,l2)+0.05); };
  const out = []; let graded = 0;
  for (const el of document.querySelectorAll('p, a, button, h1, h2, h3, .muted, .lead, .label, td, th, li')) {
    const st = getComputedStyle(el);
    if (st.display === 'none' || st.visibility === 'hidden' || !el.offsetParent) continue;
    const rect = el.getBoundingClientRect();
    if (rect.width < 2 || rect.height < 2) continue;
    const fg = parse(st.color); if (!fg) continue;
    if (fg.a < 0.5) { graded++; continue; }
    const size = parseFloat(st.fontSize);
    const bold = Number(st.fontWeight) >= 700;
    const large = size >= 24 || (size >= 18.66 && bold);
    const cr = ratio(fg.rgb, bgOf(el));
    const need = large ? 3.0 : 4.5;
    if (cr < need) out.push({ tag: el.tagName.toLowerCase(), cls: el.className.toString().slice(0,30), text: (el.textContent||'').trim().slice(0,40), cr: Math.round(cr*100)/100, need, size });
  }
  const seen = new Set(); const uniq = [];
  for (const o of out) { const k = o.tag + o.cls + o.cr; if (!seen.has(k)) { seen.add(k); uniq.push(o); } }
  return JSON.stringify({ issues: uniq.slice(0, 12), graded });
})()`;

const MOBILE_JS = `(() => {
  const vw = window.innerWidth;
  const overflow = document.documentElement.scrollWidth - vw;
  const small = [];
  for (const el of document.querySelectorAll('a, button, select, input, textarea')) {
    const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) continue;
    if (r.height < 24 || r.width < 24) small.push({ tag: el.tagName.toLowerCase(), text: (el.textContent||'').trim().slice(0,24), w: Math.round(r.width), h: Math.round(r.height) });
  }
  const tiny = [...document.querySelectorAll('p, li, td, .muted')].filter(e => parseFloat(getComputedStyle(e).fontSize) < 13).length;
  return JSON.stringify({ vw, overflow, small: small.slice(0,8), tiny });
})()`;

try {
  let ok = false;
  for (let i = 0; i < 40 && !ok; i++) {
    try { ok = (await fetch(`http://127.0.0.1:${PORT}/json/version`)).ok; } catch { await sleep(250); }
  }
  for (const rel of pages) {
    const target = await (await fetch(`http://127.0.0.1:${PORT}/json/new?${encodeURIComponent(base + rel)}`, { method: "PUT" })).json();
    const ws = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise((res, rej) => { ws.addEventListener("open", res); ws.addEventListener("error", rej); });
    let id = 0; const pending = new Map();
    ws.addEventListener("message", ev => { const m = JSON.parse(ev.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } });
    const send = (method, params = {}) => new Promise(resolve => { const i = ++id; pending.set(i, resolve); ws.send(JSON.stringify({ id: i, method, params })); });
    await send("Runtime.enable");
    await sleep(1200);

    console.log(`\n${rel}`);
    for (const mode of ["light", "dark"]) {
      await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-color-scheme", value: mode }] });
      await sleep(250);
      const c = await send("Runtime.evaluate", { expression: CONTRAST_JS, returnByValue: true });
      const res = JSON.parse(c.result.result.value || '{"issues":[]}');
      console.log(`  contraste (${mode}): ${res.issues.length ? "FALLA" : "ok"}${res.graded ? ` · ${res.graded} textos con degradado (no medibles)` : ""}`);
      for (const x of res.issues) console.log(`    <${x.tag} class="${x.cls}"> «${x.text}» ${x.cr}:1 (necesita ${x.need}) ${x.size}px`);
    }
    await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-color-scheme", value: "light" }] });

    await send("Emulation.setDeviceMetricsOverride", { width: 360, height: 740, deviceScaleFactor: 2, mobile: true });
    await sleep(400);
    const m = await send("Runtime.evaluate", { expression: MOBILE_JS, returnByValue: true });
    const mob = JSON.parse(m.result.result.value || "{}");
    console.log(`  móvil 360px: desborde ${mob.overflow > 1 ? mob.overflow + "px FALLA" : "0 ok"} · texto <13px: ${mob.tiny} · objetivos pequeños: ${mob.small.length}`);
    for (const s of mob.small || []) console.log(`    <${s.tag}> «${s.text}» ${s.w}x${s.h}`);
    ws.close();
  }
} finally {
  chrome.kill();
  try { fs.rmSync(userDir, { recursive: true, force: true }); } catch {}
}
