# 🎰 Jackpot Estadístico — Aprende estadística de cero a hero

> **Gratis · Sin registro · Sin cookies · Español e Inglés · Interactivo**

Web educativa de estadística y probabilidad que lleva al alumno desde *«¿qué es un número?»* hasta
estadística inferencial con datos continuos. Tres cursos independientes y progresivos:

1. **Estadística Descriptiva** — *El Contador de Fichas*
2. **Probabilidad y Estadística** — *La Casa Siempre Gana* (edición casino)
3. **Estadística Inferencial** — *Contando Cartas*

Cada lección mezcla teoría clara (LaTeX), ejemplos de cultura pop, un *blueprint* paso a paso
con andamiaje que se retira, y ejercicios online con corrección al instante. La gamificación
(fichas, rachas, jackpots, niveles, insignias) está diseñada con base en la teoría del aprendizaje
y la teoría del casino, pero **aquí solo se apuesta conocimiento: las fichas no valen dinero.**

---

## 🌐 Demo online

**https://cha0smagick.github.io/aprende-estadistica-online-gratis-web/**

> Si la URL devuelve 404, ve a **Settings → Pages → Source → GitHub Actions** en el repo y guarda.
> El workflow `deploy.yml` se ejecutará automáticamente.

---

## ✨ Características

- **Tres cursos completos** (24 módulos · ~120 lecciones) con todas las fórmulas en LaTeX.
- **Interactivo**: quizzes calificados, blueprints con pistas que se desvanecen, gráficos SVG.
- **Bilingüe real** ES/EN con un solo origen de contenido.
- **Privado por diseño**: progreso en `localStorage`, sin cuenta, sin cookies (exento de GDPR).
- **Gamificación**: fichas, rachas, jackpots (recompensa variable), niveles casino, insignias, SRS (Leitner).
- **SEO**: HTML estático prerenderizado, sitemap, schema JSON-LD (`Course`, `Quiz`, `FAQPage`), hreflang.
- **Accesible**: WCAG 2.1 AA, teclado, `prefers-reduced-motion`, paleta segura para daltonismo.
- **CI/CD**: GitHub Actions valida el contenido y despliega a Pages en cada push a `main`.

---

## 🛠️ Stack

| Capa | Elección |
|---|---|
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |
| Frontend | JS vainilla + ES modules (sin framework) |
| Datos | `data/*.js` (un solo origen bilingüe) |
| Matemáticas | KaTeX (self-host, fallback CDN) |
| Gráficos | SVG propio (`assets/js/charts.js`) |
| Progreso | `localStorage` + export/import JSON |
| Generador | Node script sin dependencias (render estático en CI) |

---

## 📁 Estructura del repositorio

```
.
├── .github/workflows/   # deploy.yml + validate.yml
├── assets/              # css, js (engine, quiz, gamification, charts), img
├── data/                # única fuente de contenido (un archivo por módulo)
│   ├── descriptiva.js   # compone el curso (7 módulos)
│   ├── probabilidad.js  # compone el curso (9 módulos)
│   └── inferencial.js   # compone el curso (10 módulos)
├── scripts/
│   ├── generate.mjs     # data/*.js → /es/** y /en/** HTML estático + sitemap
│   ├── validate.mjs     # valida schema, respuestas, bilingüe, enlaces
│   └── lib/render.mjs   # plantillas HTML
├── index.html           # selector de idioma / landing
├── 404.html             # página 404 temática
├── robots.txt           # generado/estático
├── sitemap.xml          # generado por CI
├── PLAN.md              # plano maestro (fuente de verdad del producto)
├── CONTENT-GUIDE.md     # cómo se escribe una lección
├── LICENSE              # MIT
└── .nojekyll            # desactiva Jekyll en Pages
```

---

## 🚀 Desarrollo local

Requisitos: Node.js 20+.

```bash
# 1. Validar el contenido (falla si hay errores)
node scripts/validate.mjs

# 2. Generar el sitio estático en _site/
node scripts/generate.mjs

# 3. Servir localmente
npx serve _site
# o: python -m http.server 8000 --directory _site
```

Para preview con KaTeX local (opcional):
```bash
npm i katex@0.16.9 --no-save
mkdir -p vendor/katex
cp -r node_modules/katex/dist/* vendor/katex/
node scripts/generate.mjs
```
Sin `vendor/`, el engine cae automáticamente a CDN (perfecto para desarrollo).

---

## 📝 Contribuir contenido

1. Edita los archivos en `data/` (un módulo por archivo, p. ej. `data/descriptiva/a3.js`).
2. Sigue las reglas de `CONTENT-GUIDE.md` (Definition of Done, tono, LaTeX, ejercicios).
3. Ejecuta `node scripts/validate.mjs` (debe dar 0 errores).
4. Abre PR; el workflow `validate.yml` bloquea contenido inválido.
5. Merge a `main` despliega automáticamente.

### Convenciones

- **Lección**: `A3-L1` (curso A, módulo 3, lección 1). Slug: `media-aritmetica`.
- **Slugs**: minúsculas con guiones, sin acentos.
- **LaTeX en JS**: duplica cada barra invertida (`\\frac`, `\\sum`).
- **Ejercicios**: tipos `mcq`, `numeric` (con `tol`), `truefalse`, `order`. `xp: 10` por defecto.
- **Bilingüe**: cada campo de texto es `{es, en}`.

---

## 🎮 Gamificación (resumen)

| Mecánica | Implementación |
|---|---|
| Fichas (chips) | +10 por acierto, multiplicador por racha (×1 → ×1.5 → ×2 → ×3) |
| Jackpot | 5% de preguntas valen ×10 (recompensa variable, Skinner) |
| Niveles | Novato → Aprendiz de Crupier → Contador de Cartas → Ballena Estadística |
| Rachas diarias | Aversión a la pérdida (no rompas la racha) |
| Insignias | «Cerebro de Bayes», «Anti-p-hacking», «Matademartingalas» |
| SRS | Cajas de Leitner (1/3/7/21 días) para repaso espaciado |

---

## 📊 Currículo

### Curso 1 — Estadística Descriptiva (El Contador de Fichas)
A0 Aritmética mínima vital · A1 Datos y variables · A2 Tablas y gráficos · A3 Tendencia central ·
A4 Dispersión · A5 Posición y forma · A6 Dos variables

### Curso 2 — Probabilidad y Estadística (La Casa Siempre Gana)
B0 Azar desde cero · B1 Reglas · B2 Conteo y póker · B3 Condicional · B4 Bayes · B5 V.A. discretas ·
B6 Distribuciones discretas · B7 Distribuciones continuas · B8 Casino avanzado

### Curso 3 — Estadística Inferencial (Contando Cartas)
C0 Muestras y sesgos · C1 Distribuciones muestrales · C2 Intervalos de confianza · C3 Pruebas de hipótesis ·
C4 Pruebas para medias · C5 Proporciones · C6 Chi-cuadrada · C7 ANOVA · C8 Regresión inferencial · C9 Cierre hero

---

## 🔐 Privacidad

- Sin cookies, sin cuentas, sin tracking.
- Progreso en `localStorage` con exportar/importar JSON como copia de seguridad.
- Exento de fricción GDPR.

---

## ⚖️ Licencia

MIT. Ver [LICENSE](LICENSE).

---

## 🙏 Créditos

Hecho por el **Adeptus Vinictus II**. Plan maestro en [`PLAN.md`](PLAN.md). Guía de contenido en [`CONTENT-GUIDE.md`](CONTENT-GUIDE.md).
