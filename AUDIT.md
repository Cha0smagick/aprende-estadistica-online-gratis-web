# Auditoría quirúrgica — Jackpot Estadístico

**Fecha:** 2026-11-04 · **Alcance:** repo completo · **Modo:** solo lectura (no se cambió código).

**Qué es este repo:** web educativa estática bilingüe (ES/EN) de estadística, generada por un SSG en Node sin dependencias (`scripts/generate.mjs`) desde `data/` (4 cursos, 29 módulos, 115 lecciones, 481 ejercicios), runtime JS vanilla en `assets/js/`, despliegue a GitHub Pages por Actions. **Carga asumida:** tráfico lector típico de un GitHub Pages (estático, sin backend, un usuario por navegador).

**Método:** auditoría directa del SSG y datos + revisión quirúrgica del runtime (`qa/surgeon-reviewer`, verificada línea a línea antes de firmar) + métodos de `seo-specialist`, `accessibility-tester` y `content-quality-editor` aplicados directamente (sus espíritus cayeron por indisponibilidad de modelo; sus pergaminos se cargaron y se siguió su checklist).

**Verificado sano:** `validate.mjs` pasa (0 errores) · 0 IDs de ejercicio duplicados · 0 permutas `order` inválidas · 0 campos sin `tol`/`minutes` · texto limpio en 3.838 campos bilingües (0 mojibake, 0 placeholders, 0 LaTeX mal escapado, 0 patrones de IA) · terminología consistente ("desviación estándar" ×26, "típica" ×0) · CI correcto · `prefers-reduced-motion` presente · foco por defecto intacto (no hay `outline:none`) · sin XSS real (todo el HTML inyectado es contenido first-party de build, no entrada de usuario) · parsing de coma decimal y jackpot (5%) correctos.

---

## 🔴 MUST — rompe usuarios o promesas públicas

### 1. Sitemap y robots rotos: URLs relativas y páginas huérfanas
- **Dónde:** `scripts/generate.mjs:106-114`, `scripts/lib/render.mjs:278-284`, `robots.txt` · evidencia: `<url><loc>/es/</loc></url>` y `Sitemap: /sitemap.xml`
- **Problema:** el protocolo sitemaps.org exige URLs absolutas con dominio; Google descarta el sitemap completo, y la directiva `Sitemap:` de robots.txt también espera URL absoluta. Además el sitemap omite las 6 páginas publicadas de `lab`/`glosario`/`repaso` (×2 idiomas) y la home `/`.
- **Fix mínimo:** en `generate.mjs`, `const SITE_URL="https://cha0smagick.github.io/aprende-estadistica-online-gratis-web";` y emitir `SITE_URL+url` (incluye añadir `/` y `${lang}/{lab,glosario,repaso}/`). En `robots.txt`: `Sitemap: <SITE_URL>/sitemap.xml`.
- **Si se ignora:** el sitio no tiene sitemap funcional; los crawlers tampoco lo descubren por robots.

### 2. El HTML "prerenderizado" está vacío: el claim SEO del README es falso
- **Dónde:** `scripts/lib/render.mjs:225-248` · evidencia en `_site/es/.../media-aritmetica/index.html`: `<h1 id="lesson-title"></h1>`, `<div id="theory-body" class="prose"></div>`
- **Problema:** título, gancho, teoría, blueprint y ejercicios solo existen en `window.LESSON` (JS). Un crawler sin JS ve una página sin contenido ni `h1`. El README promete «HTML estático prerenderizado».
- **Fix mínimo:** render server-side en `lessonPage()`: volcar `t(lesson.title,lang)` al `h1`, y `lesson.hook`/`lesson.theory` dentro de sus `div.prose` (el engine ya los repinta en cliente; el estático pasa a ser el valor inicial).
- **Si se ignora:** ~230 lecciones son "thin content" para buscadores; el SEO queda reducido a meta descriptions.

### 3. Texto de UI sin traducir visible en todas las lecciones: `example` y `done`
- **Dónde:** `scripts/lib/render.mjs:270-276` (dict de `windowT`), usadas en L237 y L255-256 · evidencia: `<h2>example</h2>` en el HTML generado.
- **Problema:** el diccionario solo tiene `theory, blueprint, exercises, review, back`. Las keys `example` y `done` no existen → se imprime la key cruda en las 115 lecciones ×2 idiomas.
- **Fix mínimo:** añadir al dict `example: "Ejemplo"/"Example"` y `done: "Lección completada"/"Lesson complete"`.
- **Si se ignora:** texto roto en la interfaz de toda la sección de lecciones.

### 4. Bloque de repaso nunca se renderiza: id incorrecto en el engine
- **Dónde:** `assets/js/lesson-engine.js:135` busca `getElementById("review-box")`; la plantilla (`render.mjs:250`) emite `id="review"` (la clase es `review-box`, no el id).
- **Problema:** `revBox` es `null` en las 230 páginas de lección → `REVIEW_ITEMS` (presente en todas) jamás se muestra. El badge «Repaso» de la nav cuenta preguntas que el alumno solo ve vía `/repaso/`. Función entera muerta en producción.
- **Fix mínimo:** `document.getElementById("review")` en `lesson-engine.js:135` (o cambiar el id en la plantilla). Una línea.
- **Si se ignora:** el SRS intra-lección no existe para el usuario, contradiciendo el diseño de repaso espaciado.

### 5. 404.html rota bajo subruta: CSS y enlaces con rutas relativas
- **Dónde:** `404.html` · evidencia: `href="assets/css/main.css"`, `href="./"`, `href="./es/"`
- **Problema:** GitHub Pages (project site) sirve la 404 en cualquier profundidad (`/es/curso/x/inexistente/`). El CSS resuelve a `/es/curso/x/inexistente/assets/...` (404 sin estilos) y `./` re-enlaza a la misma URL inexistente.
- **Fix mínimo:** rutas absolutas con la subruta del repo (`/aprende-estadistica-online-gratis-web/assets/css/main.css`) o inyectar `<base href="...">` por script. Idem enlaces ES/EN.
- **Si se ignora:** todo visitante que llegue desde un enlace roto ve una 404 sin estilos de la que es difícil salir.

---

## 🟠 SHOULD — riesgo real o promesa incumplida

### 6. Sin `aria-live`: el feedback del quiz es invisible para lectores de pantalla
- **Dónde:** `assets/js/quiz.js`, `lesson-engine.js` (15 `innerHTML`, 0 `aria-live` en `assets/`)
- **Problema:** correcto/incorrecto/XP/jackpot se inyectan sin live region → WCAG 2.1 AA 4.1.3 falla. El claim «WCAG 2.1 AA» del README no se sostiene tal cual.
- **Fix mínimo:** `aria-live="polite"` en el contenedor de feedback (~2 atributos).
- **Si se ignora:** usuarios de NVDA/VoiceOver responden sin saber el resultado.

### 7. Badge «Repaso» con contraste 2.6:1 (fail WCAG 1.4.3)
- **Dónde:** `render.mjs:40` — `background:var(--bad);color:#fff`, `--bad:#f87171`.
- **Fix mínimo:** texto oscuro `#0b0d12` sobre `#f87171`, o fondo `#dc2626`. 4.5:1 exigido para texto pequeño.
- **Si se ignora:** contador ilegible para baja visión; otra desviación AA del claim.

### 8. SRS: acierto y fallo valen lo mismo y el intervalo nunca crece
- **Dónde:** `assets/js/quiz.js:90` y `:96` — ambas ramas llaman `Progress.markSrs(q.id,1)` (verificado).
- **Problema:** la página `/repaso/` promete cajas de Leitner (1/3/7/21 días), pero todo vence mañana siempre: sin intervalos crecientes ni reintento prioritario de falladas.
- **Fix mínimo:** en fallo, `markSrs(q.id,0)` (vence hoy); en acierto, intervalo creciente por caja (p. ej. `days*2` persistido por id).
- **Si se ignora:** el "repaso espaciado" es en realidad repaso diario indiscriminado.

### 9. SRS con off-by-one por zona horaria
- **Dónde:** `assets/js/progress.js` — `markSrs` mezcla calendario local (`setDate`) con `toISOString()` (UTC); `dueSrs` compara contra «hoy UTC» (verificado).
- **Problema:** Madrid 00:30 → vence un día antes; CDMX 19:00 → un día después. El badge cuenta mal según hora/franja.
- **Fix mínimo:** formatear la fecha con `getFullYear/getMonth/getDate` locales (pad 2) en ambos métodos.
- **Si se ignora:** repaso se marca como pendiente/vencido un día desplazado para parte de los usuarios.

### 10. Una respuesta mala bloquea la racha todo el día
- **Dónde:** `progress.js` (`breakStreak` no resetea `lastDay`) + `gamification.js` (verificado).
- **Problema:** racha=7 → falla 1 → acierta 15 seguidas: `incStreak` no vuelve a contar hoy (`lastDay===hoy`) → racha 0 y multiplicador ×1 hasta mañana.
- **Fix mínimo:** en `breakStreak` añadir `S.lastDay=null;` (una línea).
- **Si se ignora:** castigo desproporcionado que frena el loop central de gamificación.

### 11. Parámetros clicables del Lab muertos por selector CSS
- **Dónde:** `assets/js/formula-lab.js:31` — `querySelector('input[style*="#ffb703"]')`.
- **Problema:** CSSOM serializa el color como `rgb(255, 183, 3)` → el selector nunca matchea en navegadores modernos; clicar μ/σ/n/p en la fórmula no hace nada. (Alta confianza; no se probó en navegador real.)
- **Fix mínimo:** marcar `inp.dataset.key=key` en `mkSlider` y buscar `input[data-key="..."]`.
- **Si se ignora:** feature documentada del Lab 100% inoperante.

### 12. Valor crítico t fijo en 2.093 para cualquier n
- **Dónde:** `formula-lab.js:183` — `const crit=2.093` (df=19) con slider n=5..60 (verificado).
- **Problema:** contenido educativo matemáticamente falso: n=5, d̄=2, s_d=2 → t=2.236 → enseña «✅ significativo» cuando p≈0.11.
- **Fix mínimo:** tabla corta de t críticos por df (n−1) o aproximación; ~10 líneas.
- **Si se ignora:** el Lab enseña inferencia incorrecta en muestras pequeñas — lo peor que puede hacer un sitio de estadística.

### 13. `importJSON` sin validación puede corruptir el estado persistente
- **Dónde:** `progress.js` (`Object.assign(S,d)` confiado; verificado).
- **Problema:** un archivo con `"srs":null` → TypeError en el próximo `markSrs`; `"badges":"x"` → crash en `earnBadge`. Al persistirse, el crash se repite cada sesión hasta borrar localStorage a mano.
- **Fix mínimo:** validar campo a campo (números con `typeof`, arrays con `Array.isArray`) antes del assign.
- **Si se ignora:** una importación malintencionada/errónea ladrilla el progreso de forma permanente.

### 14. Tipo `order` acepta respuestas que no son permutación (latente)
- **Dónde:** `assets/js/quiz.js:68,73` (`parseInt` de ranks, sin validación de permuta).
- **Problema:** respuesta `1,1,1` con datos `[0,1,2]` pasaría el sort estable y se marcaría **correcta**. Hoy es latente: verificado que existen **0 ejercicios `order`** en los datos.
- **Fix mínimo:** exigir permuta antes de comparar: `new Set(ans).size===q.choices.length && ans.every(n=>n>=1&&n<=q.choices.length)`. Blindar antes de emitir el primer ejercicio `order` (ver también #15).
- **Si se ignora:** el primer ejercicio de orden que se publique tendrá un exploit trivial de XP.

### 15. El validador no blinda lo que hoy está limpio
- **Dónde:** `scripts/validate.mjs:15-50`
- **Problema:** verificado hoy: 0 duplicados, 0 permutas inválidas, 0 numeric sin `tol`. Pero el validador no lo comprueba y `exercises-index.js` indexa por `q.id`: un ID repetido futuro **sobrescribiría en silencio** un ejercicio.
- **Fix mínimo (~6 líneas):** Map global de IDs → `err` si repite; validar permuta en `order`; exigir `tol` numérico en `numeric`.
- **Si se ignora:** estos fallos aparecerán en producción (runtime), no en CI.

### 16. JSON embebido sin escapar `<` (hardening de 1 línea)
- **Dónde:** `render.mjs:27, 92, 139, 199, 265-266` — `JSON.stringify` crudo dentro de `<script>`.
- **Problema:** hoy 0 ocurrencias de `</script` en `data/` (verificado), pero basta que un autor pegue un ejemplo HTML con `</script>` para romper la página entera.
- **Fix mínimo:** `const safeJson=o=>JSON.stringify(o).replace(/</g,"\\u003c")` y usarlo en los puntos de embebido.
- **Si se ignora:** riesgo latente ligado a edición de contenido.

### 17. README desactualizado frente a la realidad
- **Dónde:** `README.md:30, 64-65, 142-152` vs datos verificados.
- **Problema:** promete «Tres cursos (24 módulos · ~120 lecciones)»; hay **4 cursos, 29 módulos, 115 lecciones**. El curso `fundamentos` (2 módulos/10 lecciones) no figura; probabilidad lista B0–B8 pero existe B9 «Psicología y entropía» (4 lecciones) publicado.
- **Fix mínimo:** actualizar cifras, añadir Fundamentos y B9 al currículo, corregir el claim «prerenderizado» (ver #2) y matizar el claim WCAG (ver #6-7).
- **Si se ignora:** la documentación engaña a contribuidores y promete lo que el producto no entrega.

### 18. XP por defecto inconsistente: 5 vs 10 para el mismo ejercicio
- **Dónde:** `generate.mjs:40` (`xp||5`) vs `:98` (`xp||10`).
- **Problema:** el mismo ejercicio vale distinto según la ruta de código; la economía de fichas es arbitraria en repaso.
- **Fix mínimo:** extraer `const DEFAULT_XP=10` y usarla en ambos sitios (o documentar que el repaso vale la mitad).
- **Si se ignora:** progresión/niveles inconsistentes.

### 19. SEO on-page de plantillas: sin `og:url`/`og:image`, canonical relativo, index.html sin canonical
- **Dónde:** `render.mjs:20-22`, `index.html` raíz (verificado: sin canonical).
- **Fix mínimo:** construir URLs absolutas con el `SITE_URL` ya necesario para #1; añadir og:image estática 1200×630 al repo.
- **Si se ignora:** previews sociales pobres; indexación canonical depende del servidor.

---

## 🟡 NICE — limaduras (agrupadas)

### 20. Seis limaduras menores
- **Código muerto:** `navFor()` en `generate.mjs:45-53` nunca se llama (con tautología en L50) → borrar (−9 líneas).
- **`r = NaN` en regresión** con datos constantes (`charts.js:94`): sliders `noise=0`+`slope=0` → Syy=0 → readout «r = NaN». Guard de 1 línea: `Syy ? num/Math.sqrt(den*Syy) : 0`.
- **Emoji corrupto en diplomas PDF** (`diploma.js:52`): jsPDF con fuentes estándar no renderiza 📜/🏆 → sustituir por glifo vectorial u omitir.
- **`deploy.yml`** copia `contrib` de KaTeX dos veces → borrar la línea redundante (−1).
- **Orden de copiado** (`generate.mjs:122-124`): `es/`/`en/` manuales se copian después de generar → un `es/index.html` manual futuro pisaría el índice generado en silencio. Copiar antes, o avisar.
- **`:focus-visible` sin estilizar** (`main.css`/`lesson.css`): no es violación (foco default intacto), pero `outline:2px solid var(--accent)` daría foco consistente en tema oscuro.

---

## Veredicto

**Base de datos y validación impecables; el producto tiene cuatro heridas visibles y una interna:** el SEO está técnicamente roto (#1, #2), hay texto crudo en la interfaz de todas las lecciones (#3), el bloque de repaso está muerto en producción (#4) y la 404 no funciona bajo subruta (#5). En el runtime, el SRS prometido no espacia nada (#8) y el Lab enseña inferencia incorrecta con n pequeño (#12) — este último es el de mayor coste reputacional para un sitio de estadística. **Fix first:** #4 (1 línea), #3 (2 líneas), #1+#19 (mismo `SITE_URL`), #10 (1 línea), luego #2 y #12.

**Lean:** −10 líneas posibles (navFor muerto, cp redundante, unificar XP). Sin dependencias que quitar.

**No verificado:** navegación real en navegador (no se ejecutó el sitio ni pruebas con lectores de pantalla — análisis estático de código y output generado); contraste completo de todas las combinaciones (se revisaron las variables y pares clave); hallazgo #11 verificado por comportamiento estándar de serialización CSSOM, no en navegador real; rendimiento de carga (estático, riesgo bajo).

---

## Plan de arreglos sugerido (orden y esfuerzo)

| # | Hallazgo | Esfuerzo | Archivo(s) |
|---|----------|----------|------------|
| 4 | Repaso muerto (`review-box`→`review`) | 1 línea | `lesson-engine.js` |
| 3 | Keys `example`/`done` | 2 líneas | `render.mjs` |
| 10 | Racha: `lastDay=null` | 1 línea | `progress.js` |
| 1 | Sitemap/robots absolutos + huérfanas | ~5 líneas | `generate.mjs`, `robots.txt` |
| 5 | 404 con base absoluta | 3 líneas | `404.html` |
| 12 | t crítico por df | ~10 líneas | `formula-lab.js` |
| 2 | Prerender contenido de lección | ~30 líneas | `render.mjs` |
| 8-9 | SRS Leitner real + TZ local | ~15 líneas | `quiz.js`, `progress.js` |
| 6-7 | aria-live + contraste badge | 3 atributos | `quiz.js`, `render.mjs` |
| 11 | Selectores por `data-key` | 2 líneas | `formula-lab.js` |
| 13-16 | importJSON, order, validador, safeJson | ~15 líneas | `progress.js`, `quiz.js`, `validate.mjs`, `render.mjs` |
| 17-19 | README, XP, og/canonical | docs + 4 líneas | `README.md`, `generate.mjs`, `render.mjs` |
| 20 | Limaduras | −10 líneas | varios |

---

## ✅ Estado tras corrección (2026-11-05)

Los 20 hallazgos están resueltos y desplegados. Cada fila es un commit atómico, validado con `node scripts/validate.mjs` (0 errores) y `node scripts/generate.mjs` antes de pushear.

| # | Estado | Commit |
|---|--------|--------|
| 4 | ✅ Resuelto — `getElementById("review")` | `4cf8ee3` |
| 3 | ✅ Resuelto — keys `example`/`done` en `windowT` | `c2cccf6` |
| 10 | ✅ Resuelto — `breakStreak()` resetea `lastDay` | `7b9cc18` |
| 1 | ✅ Resuelto — sitemap/robots absolutos, 247 URLs (home + 6 manuales + 240 índices/lecciones), sin huérfanas | `1998be2` |
| 5 | ✅ Resuelto — 404 con rutas absolutas bajo subruta | `7285a5a` |
| 12 | ✅ Resuelto — `tCrit(df)` exacto df 4–30, interpolado 31–59 | `a4b86ce` |
| 2 | ✅ Resuelto — prerender de `h1`, hook, teoría y ejemplo en las 230 lecciones | `9727c7b` |
| 8 | ✅ Resuelto — Leitner 1→3→7→21; fallo vence hoy | `e32d89b` |
| 9 | ✅ Resuelto — fechas en calendario local (sin `toISOString`) | `e32d89b` |
| 6 | ✅ Resuelto — `aria-live="polite"` en el feedback del quiz | `ddfd2af` |
| 7 | ✅ Resuelto — badge con texto `#0b0d12` sobre `--bad` ≈ 6.8:1 | `ddfd2af` |
| 11 | ✅ Resuelto — sliders con `data-key` y selector por atributo | `72d7a6b` |
| 13 | ✅ Resuelto — `importJSON` valida campo a campo | `c244a24` |
| 14 | ✅ Resuelto — `order` exige permutación completa y única | `c244a24` |
| 15 | ✅ Resuelto — validador: IDs globales únicos, `tol` numérico, permutación | `c244a24` |
| 16 | ✅ Resuelto — `J()` escapa `<` en todo JSON embebido | `c244a24` |
| 17 | ✅ Resuelto — README: 4 cursos, 29 módulos, 115 lecciones, B9 y Fundamentos | `f3d1bdb` |
| 18 | ✅ Resuelto — XP por defecto unificada en 10 | `f3d1bdb` |
| 19 | ✅ Resuelto — canonical/`og:url`/hreflang absolutos con `SITE_URL` exportado. ⚠️ `og:image` **no** emitido: exige un asset diseñado 1200×630; un placeholder sería peor que ausente | `f3d1bdb` |
| 20 | ✅ Resuelto — `navFor` borrado, guard `r` NaN, badge PDF vectorial, `cp` redundante fuera, copiado manual antes de generar, `:focus-visible` | `f2e0d96` |

**Verificación final:**
- `source _site`: 230 lecciones, **0** con `prose` vacío, **0** con `h1` vacío, **0** canonicals relativos.
- CI: run #33 (`f2e0d96`) → `conclusion: success`.
- Producción: sitemap sirve URLs absolutas con home y páginas manuales; una lección real devuelve título, gancho, teoría y ejemplo en el HTML estático, con «Ejemplo» y «Lección completada» traducidos (sin keys crudas).
- Pendiente consciente: `og:image` (necesita diseño, no código).

---

## 🔁 Re-auditoría (2026-11-08)

**Método:** lectura directa de los archivos citados en la auditoría original, ejecución real de `validate.mjs`, `validate-content.mjs` y `generate.mjs`, e inspección del HTML generado en `_site/`. Sin navegador real (igual que la auditoría original): los hallazgos de runtime se verifican por markup + selector, no por clic.

### Los 20 hallazgos originales: verificados

| # | Verificación en código/output | Estado |
|---|---|---|
| 1 | `SITE_URL` en sitemap/robots; 247 `<loc>` absolutos (home + 6 manuales + 240 índices/lecciones) | ✅ |
| 2 | 0 lecciones con `h1` o `prose` vacíos en `_site`; título, gancho, teoría y ejemplo estáticos | ✅ |
| 3 | 0 `<h2>example</h2>` crudos; «Ejemplo»/«Lección completada» en su lugar | ✅ |
| 4 | `lesson-engine.js` busca `getElementById("review")` | ✅ |
| 5 | `404.html` con CSS y enlaces absolutos bajo `/aprende-estadistica-online-gratis-web/` | ✅ |
| 6 | `aria-live="polite"` en el feedback del quiz | ✅ |
| 7 | Badge con `color:#0b0d12` sobre `--bad` | ✅ |
| 8 | Leitner real 1→3→7→21; fallo `markSrs(id,0)` | ✅ |
| 9 | Fechas con `getFullYear/getMonth/getDate` locales; sin `toISOString` | ✅ |
| 10 | `breakStreak()` resetea `lastDay` | ✅ |
| 11 | Sliders con `data-key` y selector `input[data-key="…"]` | ✅ |
| 12 | `tCrit(df)` con tabla 4–30 e interpolación 31–59 | ✅ |
| 13 | `importJSON` valida números, arrays y objetos campo a campo | ✅ |
| 14 | `order` exige enteros 1..n, únicos y completos | ✅ |
| 15 | Validador: IDs globales únicos, `tol` numérico, permutación de `order` | ✅ |
| 16 | Helper `J()` escapa `<` en todo JSON embebido | ✅ |
| 17 | README con 4 cursos/29 módulos/115 lecciones, Fundamentos y B9 | ✅ |
| 18 | XP por defecto = 10 en generador y repaso | ✅ |
| 19 | Canonical/og:url/hreflang absolutos en páginas generadas. `og:image` sigue ausente (consciente: requiere diseño) | ⚠️ parcial |
| 20 | `navFor` ausente, guard `r` NaN, badge PDF vectorial, `cp` único, copiado manual antes de generar, `:focus-visible` | ✅ |

### Hallazgos nuevos de esta re-auditoría

**N1. El enlace «Siguiente lección» estaba muerto en las 230 lecciones (🔴 MUST, corregido).**
El template emitía `<div class="next-lesson"><a href="#" class="next-title">—</a></div>`, pero el engine buscaba `getElementById("next-lesson")` y asignaba `href` al `div`, no al `<a>`. Resultado: texto «—», `href="#"`, salto al inicio. **Fix:** el template renderiza ya el `href` y el título reales (`next.url`/`next.title`), y el engine refuerza sobre `.next-lesson .next-title`. Eliminadas las dos líneas muertas de `#back-course`.

**N2. La home raíz seguía sin canonical ni og:url (🟠 SHOULD, corregido).**
El hallazgo #19 se cerró solo para páginas generadas; `index.html` es estático y conservaba `hreflang` relativos y ningún canonical. **Fix:** canonical, `og:url` y `alternate hreflang` absolutos con el mismo `SITE_URL`.

**N3. Contenido huérfano y validador ciego a él (🔴 MUST, corregido).**
`content/{es,en}/A7-L1.md` y `A7-L2.md` existían, pero **no hay módulo A7**: probabilidad usa `B0–B9`. Eran 4 archivos (≈10.000 palabras) que nunca se renderizaban y no aparecían en el resumen del validador. **Fix:** remapeados a las lecciones que cubren —`A7-L1 → B0-L1`, `A7-L2 → B5-L1`— y `validate-content.mjs` ahora **falla** ante cualquier `.md` sin lección en `data/`. Además, la sección 9 de B0-L1 ES tenía 8 preguntas en formato mixto (solo 3 detectables); normalizada a lista 1–8.

**N4. Metadatos de diploma con cifras falsas (🟡 NICE, corregido).**
`diploma.js` declaraba Fundamentos 11 lecciones (son 10), Probabilidad 48 (son 30), Inferencial 43 (son 33) y «Los 3 cursos completados» (son 4). Eran campos muertos (`generate()` nunca los usaba), pero el subtítulo del MEGADIPLOMA sí se imprimía. **Fix:** eliminados los campos muertos; subtítulo del MEGADIPLOMA ahora `${courses.length} cursos completados`.

**N5. `PLAN.md` contradecía al producto (🟠 SHOULD, corregido).**
Seguía en «Fase 0 — pendiente de scaffolding», con «tres cursos · 24 módulos · ~131 lecciones · ~262 páginas». **Fix:** estado real, cuatro cursos, 29 módulos, 115 lecciones/230 páginas, Fundamentos en el currículo y nota de que las tablas de módulos son el diseño original.

**N6. `ESTADO-DEEPDIVE.md` desactualizado (🟡 NICE, corregido).**
Declaraba 22/115 y «A7-L1 pendiente de expandir» cuando A7 ya no existía y había dos lecciones más. **Fix:** 24/115, desglose por curso y reconciliación documentada.

### Verificación ejecutada tras los fixes

- `node scripts/validate.mjs` → **0 errores, 0 avisos**.
- `node scripts/validate-content.mjs` → **24 completas · 91 pendientes · 0 con errores**; B0-L1 2627/3057, B5-L1 2566/2541.
- `node scripts/generate.mjs` → OK; `_site` con 247 URLs; HTML de lección con `h1`, teoría, ejemplo, deep dive y `<a class="next-title" href="../../../../es/…">` real.

### Fuera de alcance (no ejecutado, no declarado)

- 91 deep dives restantes (proyecto editorial de ~455.000 palabras; ver `PLAN-DEEPDIVE.md`).
- Fases 5–8 del plan: ejercicios de producción, feedback ampliado, examen final, certificación condicionada, panel de dominio, `fieldset/legend`, skip link y cambio de idioma preservando la página.
- `og:image` (requiere asset 1200×630).
- Prueba en navegador real y con lector de pantalla.

### Cambio de alcance (2026-11-08, posterior a esta reauditoría)

El sitio pasa a publicarse **solo en español** y ofrece **Google Translate bajo demanda**; se deja de generar `/en/` y de exigir paridad ES/EN. Verificado tras el cambio: `validate.mjs` 0 errores; `validate-content.mjs` 24/115 solo ES; `_site/en` inexistente; sitemap con **124 URLs**; sin `hreflang`; `assets/js/translate.js` no descarga nada de Google hasta que el usuario pulsa «Traducir». El plan editorial baja de 575.000 a **287.500 palabras**. Riesgos asumidos: la traducción automática no iguala una versión escrita y el widget de Google introduce una petición a un tercero cuando se usa.

### Registro de ejecución de contenido (ES)

| Fecha | Módulo | Lecciones | Palabras | Estado |
|---|---|---|---:|---|
| 2026-11-08 | B1 — Reglas de probabilidad | B1-L1, B1-L2 | 3.379 / 3.062 | ✅ validado |
| 2026-11-08 | B2 — Conteo | B2-L1, B2-L2, B2-L3 | 2.925 / 2.524 / 2.509 | ✅ validado |
| 2026-11-08 | B3 — Probabilidad condicional | B3-L1, B3-L2 | 2.504 / 2.546 | ✅ validado |
| 2026-11-08 | B4 — Bayes y tests | B4-L1, B4-L2 | 2.586 / 2.555 | ✅ validado |
| 2026-11-08 | B5 — Variables aleatorias discretas | B5-L2, B5-L3, B5-L4 | 2.507 / 2.507 / 2.508 | ✅ validado |
| 2026-11-08 | B6 — Distribuciones discretas | B6-L1, B6-L2, B6-L3, B6-L4 | 2.510 / 2.500 / 2.500 / 2.504 | ✅ validado |
| 2026-11-08 | B7 — Distribuciones continuas | B7-L1, B7-L2, B7-L3 | 2.504 / 2.500 / 2.500 | ✅ validado |
| 2026-11-09 | B8 — Casino avanzado | B8-L1, B8-L2, B8-L3, B8-L4, B8-L5 | 2.501 / 2.505 / 2.508 / 2.501 / 2.500 | ✅ validado |
| 2026-11-09 | B9 — Psicología y entropía | B9-L1, B9-L2, B9-L3, B9-L4 | 2.502 / 2.500 / 2.500 / 2.500 | ✅ validado |
| 2026-11-09 | A0 — Aritmética mínima (en curso) | A0-L1, A0-L2, A0-L3 | 2.500 / 2.500 / 2.501 | ✅ validado |
| 2026-11-09 | A0 — Aritmética mínima (en curso) | A0-L4, A0-L5 | 2.501 / 2.501 | ✅ validado |
| 2026-11-09 | **A0 completo (8/8)** | A0-L6, A0-L7, A0-L8 | 2.501 / 2.501 / 2.500 | ✅ validado |
| 2026-11-09 | A1 en curso | A1-L1, A1-L2 | 2.501 / 2.500 | ✅ validado |
| 2026-11-09 | A1 en curso | A1-L3 | 2.501 | ✅ validado |
| 2026-11-09 | A1 en curso | A1-L4 | 2.500 | ✅ validado |
| 2026-11-09 | A1 en curso | A1-L5 | 2.502 | ✅ validado |
| 2026-11-09 | **A1 completo (6/6)** | A1-L6 | 2.500 | ✅ validado |
| 2026-11-09 | A2 en curso | A2-L1 | 2.506 | ✅ validado |
| 2026-11-09 | A2 en curso | A2-L2 | 2.502 | ✅ validado |
| 2026-11-10 | A2 en curso | A2-L3 | 2.508 | ✅ validado |
| 2026-11-10 | A2 en curso | A2-L4 | 2.500 | ✅ validado |
| 2026-11-10 | A2 en curso | A2-L5 | 2.530 | ✅ validado |
| 2026-11-10 | **A2 completo (6/6) — Descriptiva 42/42** | A2-L6 | 2.523 | ✅ validado |
| 2026-11-10 | Inferencial C0 | C0-L1 | 2.807 | ✅ validado |
| 2026-11-10 | Inferencial C0 | C0-L2 | 2.737 | ✅ validado |
| 2026-11-10 | Inferencial C0 | C0-L3 | 2.548 | ✅ validado |
| 2026-11-10 | **C0 completo (4/4)** | C0-L4 | 2.500 | ✅ validado |
| 2026-11-10 | Inferencial C1 | C1-L1 | 2.500 | ✅ validado |
| 2026-11-10 | Inferencial C1 | C1-L2 | 2.500 | ✅ validado |
| 2026-11-10 | **C1 completo (3/3)** | C1-L3 | 2.500 | ✅ validado |
| 2026-11-10 | Inferencial C2 | C2-L1 | 2.500 | ✅ validado |
| 2026-11-10 | Inferencial C2 | C2-L2 | 2.505 | ✅ validado |
| 2026-11-10 | **C2 completo (3/3)** | C2-L3 | 2.500 | ✅ validado |
| 2026-11-10 | Inferencial C3 | C3-L1 | 2.517 | ✅ validado |
| 2026-11-10 | Inferencial C3 | C3-L2 | 2.500 | ✅ validado |
| 2026-11-10 | **C3 completo (3/3)** | C3-L3 | 2.501 | ✅ validado |
| 2026-11-10 | Inferencial C4 | C4-L1 | 2.501 | ✅ validado |
| 2026-11-10 | Inferencial C4 | C4-L2 | 2.511 | ✅ validado |

Acumulado: **87/115** deep dives (42 descriptiva + 30 probabilidad + 15 inferencial). **C0–C3 completos; C4 en curso (2/5).** Pendientes: C4-L3–L5, C5–C9 (17) y F0–F1 (10).

