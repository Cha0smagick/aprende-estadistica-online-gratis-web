// Recorrido de teclado y árbol de accesibilidad por CDP (Chrome headless).
import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 9333;

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function waitJson(url, tries = 40) {
  for (let i = 0; i < tries; i++) {
    try { const r = await fetch(url); if (r.ok) return await r.json(); } catch {}
    await sleep(250);
  }
  throw new Error("no responde el depurador en " + url);
}

class CDP {
  constructor(ws) {
    this.ws = ws; this.id = 0; this.pending = new Map(); this.handlers = [];
    ws.addEventListener("message", ev => {
      const msg = JSON.parse(ev.data);
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result);
      } else if (msg.method) {
        for (const h of this.handlers) h(msg);
      }
    });
  }
  send(method, params = {}) {
    const id = ++this.id;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }
  once(method, timeout = 15000) {
    return new Promise((resolve, reject) => {
      const t = setTimeout(() => reject(new Error("timeout esperando " + method)), timeout);
      const h = (msg) => {
        if (msg.method === method) {
          clearTimeout(t);
          this.handlers = this.handlers.filter(x => x !== h);
          resolve(msg.params);
        }
      };
      this.handlers.push(h);
    });
  }
}

export async function keyboardAudit(limit = 4) {
  const userDir = fs.mkdtempSync(path.join(os.tmpdir(), "a11y-"));
  const chrome = spawn(CHROME, [
    "--headless=new", "--disable-gpu", "--no-sandbox", "--no-first-run",
    "--remote-debugging-port=" + PORT, "--user-data-dir=" + userDir, "about:blank",
  ], { stdio: "ignore" });

  const pages = [
    "/es/estadistica-descriptiva/tendencia-central/media-aritmetica/",
    "/es/estadistica-descriptiva/",
    "/es/repaso/",
    "/es/proyecto/",
  ].slice(0, limit);

  try {
    await waitJson(`http://127.0.0.1:${PORT}/json/version`);
    for (const rel of pages) {
      const target = await (await fetch(`http://127.0.0.1:${PORT}/json/new?${encodeURIComponent("http://localhost:4178" + rel)}`, { method: "PUT" })).json();
      const ws = new WebSocket(target.webSocketDebuggerUrl);
      await new Promise((res, rej) => { ws.addEventListener("open", res); ws.addEventListener("error", rej); });
      const cdp = new CDP(ws);
      await cdp.send("Page.enable");
      await cdp.send("Runtime.enable");
      await cdp.send("Accessibility.enable");
      await sleep(800);

      // árbol de accesibilidad: landmarks y encabezados
      const ax = await cdp.send("Accessibility.getFullAXTree");
      const roles = ax.nodes.map(n => n.role?.value).filter(Boolean);
      const landmarks = roles.filter(r => ["main", "navigation", "banner", "contentinfo"].includes(r));
      const headings = ax.nodes.filter(n => n.role?.value === "heading")
        .map(n => ({ level: n.properties?.find(p => p.name === "level")?.value?.value, name: n.name?.value }));
      const onlyHeadingH1 = headings.filter(h => h.level === 1).length;

      // recorrido con Tab
      const focused = [];
      for (let i = 0; i < 14; i++) {
        await cdp.send("Input.dispatchKeyEvent", { type: "rawKeyDown", windowsVirtualKeyCode: 9, key: "Tab", code: "Tab" });
        await cdp.send("Input.dispatchKeyEvent", { type: "keyUp", windowsVirtualKeyCode: 9, key: "Tab", code: "Tab" });
        const r = await cdp.send("Runtime.evaluate", {
          expression: `(() => { const a = document.activeElement; if (!a || a === document.body) return null;
            const label = (a.getAttribute('aria-label') || a.textContent || a.value || '').trim().replace(/\\s+/g,' ').slice(0,48);
            return { tag: a.tagName.toLowerCase(), label, visible: a.matches(':focus-visible'), href: (a.getAttribute('href')||'').slice(0,40) }; })()`,
          returnByValue: true,
        });
        const v = r.result.value;
        if (!v) break;
        focused.push(v);
      }

      const first = focused[0];
      const okFirst = first && first.tag === "a" && /saltar al contenido/i.test(first.label);
      console.log(`\n${rel}`);
      console.log(`  landmarks: ${landmarks.join(", ") || "ninguno"} · h1: ${onlyHeadingH1} · encabezados: ${headings.length}`);
      console.log(`  primer foco: ${first ? first.tag + " «" + first.label + "»" : "sin foco"} · visible: ${first ? first.visible : "-"}`);
      console.log(`  focos recorridos: ${focused.length} · todos con :focus-visible: ${focused.every(f => f.visible)}`);
      console.log(`  secuencia: ${focused.slice(0, 6).map(f => f.tag + "«" + f.label.slice(0, 22) + "»").join(" → ")}`);
      console.log(`  veredicto: ${okFirst && onlyHeadingH1 === 1 && focused.length >= 5 ? "ok" : "revisar"}`);
      ws.close();
    }
  } finally {
    chrome.kill();
    try { fs.rmSync(userDir, { recursive: true, force: true }); } catch {}
  }
}
