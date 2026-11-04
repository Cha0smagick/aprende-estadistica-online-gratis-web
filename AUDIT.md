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
