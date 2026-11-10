# PLAN-DEEPDIVE — Contenido profundo y nota 95+

**Objetivo:** que cada una de las 115 lecciones tenga un *deep dive* real de **≥2.500 palabras en español**, y que la auditoría pedagógica pase de **56/100** a **≥95/100**. El resto de idiomas se cubre con el traductor de Google bajo demanda; no se duplica la autoría en inglés.

**Estado base (2026-11-05):** 115 lecciones · 50 palabras de teoría por lección · 481/481 ejercicios MCQ · 35% de acierto por azar · feedback correcto/incorrecto · certificado por clics · auditoría 56/100.

**Realidad de esfuerzo:** 115 × 2.500 = **287.500 palabras**. Es un plan multi-sesión. Cada lote de contenido es una unidad de commit; no se publica una lección por debajo del umbral. No habrá relleno, párrafos repetidos ni “texto de relleno para llegar al número”: si una sección no aporta, se ajusta la estructura, no se infla.

---

## 0. Contrato de calidad

Una lección está **terminada** solo si cumple todo:

- [ ] `content/es/<lessonId>.md` existe y tiene **≥2.500 palabras** de prosa real.
- [ ] Contiene las 9 secciones obligatorias (ver §2).
- [ ] Incluye al menos **3 ejemplos resueltos con números** y **1 ejemplo con datos reales o verosímiles**.
- [ ] Incluye al menos **1 derivación paso a paso** y **1 comparación con un método alternativo**.
- [ ] Incluye **5 trampas conceptuales** y **5 preguntas de autoevaluación con respuesta razonada**.
- [ ] No contiene afirmaciones estadísticas falsas, citas inventadas ni fórmulas mal escritas.
- [ ] `node scripts/validate-content.mjs` la marca como OK.
- [ ] La página generada muestra el bloque “Contenido completo” y el `h1`/teoría siguen funcionando.
- [ ] Commit atómico con mensaje `content: <ID> deep dive (ES) — <n> palabras`.

**Regla de no regresión:** ninguna lección puede volver a quedar por debajo del umbral. El validador se ejecuta en cada lote y, cuando esté 115/115, se añade a CI como bloqueante.

---

## 1. Diagnóstico que justifica el plan

| Dimensión auditada | Nota base | Qué falta para 95 |
|---|---:|---|
| Exactitud estadística | 90 | Mantener; añadir matices y supuestos |
| Profundidad conceptual | 50 | **Deep dive de 2.500+ palabras** |
| Cobertura | 55 | Potencia, bootstrap, no paramétricos, causalidad, datos reales |
| Práctica de recuperación | 38 | Ejercicios de producción, no solo MCQ |
| Feedback | 35 | Explicación del error, reintento, marcador vivo |
| Evaluación sumativa | 25 | Examen final, proyecto evaluado, rúbrica |
| Certificación | 20 | Diploma condicionado a evidencia |
| SRS / retención | 62 | IDs resolubles, badge, panel, intercalado |
| Metacognición | 34 | Panel de dominio, autoevaluación, diario de errores |
| Motivación | 55 | Racha que premia intentos, no solo aciertos |
| UX / lengua / a11y | 64-70 | Enlaces, tildes, fieldset, alternativas de gráficos |

---

## 2. Arquitectura de contenido

### 2.1 Fuente de verdad

El contenido profundo **no** se mete dentro de `data/*.js` (ya son 1 MB de JSON). Se crea:

```
content/
  README.md
  es/
    A3-L1.md
    A3-L2.md
    ...
```

- Un archivo por lección, nombrado con `lesson.id`, siempre en `content/es/`.
- Markdown con LaTeX (`$...$`, `$$...$$`), encabezados `##`/`###`, listas, tablas y blockquotes.
- `scripts/generate.mjs` los carga en build-time y los inyecta en la página.
- No se copian a `_site`; no aumentan el JS de cliente.
- `content/en/` es legado: no se publica ni se valida.

### 2.2 Plantilla obligatoria (9 secciones, ~2.500-3.000 palabras)

| # | Sección | Palabras objetivo | Qué debe contener |
|---|---|---:|---|
| 1 | Objetivos y prerrequisitos | 150-200 | Qué sabrás hacer, qué necesitas antes, errores de entrada |
| 2 | Por qué importa | 200-250 | Contexto real, consecuencia de hacerlo mal, conexión con el curso |
| 3 | Intuición | 350-450 | Metáfora, imagen mental, caso extremo, por qué la fórmula tiene esa forma |
| 4 | Definición y notación | 350-450 | Definición formal, símbolos, unidades, población vs muestra, casos límite |
| 5 | Derivación paso a paso | 350-450 | De la idea a la fórmula; propiedades; qué se pierde en cada supuesto |
| 6 | Ejemplos resueltos | 550-700 | 3+ ejemplos numéricos, uno con frecuencias/datos reales, uno con trampa |
| 7 | Errores y malinterpretaciones | 250-350 | 5 trampas, por qué ocurren, cómo detectarlas, corrección |
| 8 | Conexiones y transferencia | 200-250 | Con otras lecciones, con inferencia, con decisiones reales |
| 9 | Práctica y resumen | 300-400 | 5 preguntas con solución razonada, autochequeo, mapa de 5 ideas |

**Total:** ~2.500-3.000 palabras. Si una lección no llega, se profundiza en ejemplos y derivación; nunca se rellena con frases vacías.

### 2.3 Render

- `scripts/lib/render.mjs`: nuevo `mdDeep()` con encabezados, listas, tablas, blockquotes y `hr`.
- `lessonPage()`: bloque `#deep-dive` después del ejemplo, con TOC “Contenido completo”.
- `windowT`: claves `deep` en ES/EN.
- CSS: estilos de tabla, blockquote, `hr` y jerarquía dentro de `.prose`.

### 2.4 Validación

`scripts/validate-content.mjs` comprobará:

- Existencia de `content/es/<lessonId>.md`.
- ≥2.500 palabras (conteo de prosa, sin marcas Markdown).
- 9 encabezados obligatorios.
- Al menos 3 bloques de ejemplo y 5 preguntas.
- Cero archivos huérfanos (todo `.md` debe corresponder a una lección de `data/`).
- Salida legible por lección y resumen por curso.

Durante la transición el script **reporta** pero no bloquea CI. Cuando esté 115/115, se añade a `.github/workflows/deploy.yml` como paso bloqueante.

---

## 3. Fases atómicas

### Fase 0 — Guardrails y quick wins (esta sesión)

- [x] **P0.1** Crear `PLAN-DEEPDIVE.md` con contrato, plantilla y scorecard.
- [x] **P0.2** Crear `content/README.md` + plantilla de lección.
- [x] **P0.3** Implementar `mdDeep()` y el bloque `#deep-dive` en `render.mjs`.
- [x] **P0.4** Cargar `content/` en `generate.mjs` y pasar `deepDive` a `lessonPage`.
- [x] **P0.5** Crear `scripts/validate-content.mjs` y contar palabras/secciones.
- [x] **P0.6** Escribir la lección piloto `A3-L1` (ES) con ≥2.500 palabras.
- [x] **P0.7** Escribir la lección piloto `A3-L1` (EN) con ≥2.500 palabras.
- [x] **P0.8** `node scripts/generate.mjs` + `node scripts/validate-content.mjs` + spot-check de la página.
- [x] **P0.9** Commit `content: A3-L1 deep dive (ES/EN) + pipeline de contenido`.
- [x] **P0.10** Arreglar el marcador del quiz (`Score: 0/N` → vivo).
- [x] **P0.11** Permitir reintento tras fallo y desbloquear “Solución” solo tras intento.
- [x] **P0.12** Corregir IDs `*-rev` del SRS para que `/repaso/` los resuelva.
- [x] **P0.13** Actualizar el badge de repaso con `dueSrs().length`.
- [x] **P0.14** Arreglar la tarjeta 00 rota de la portada y el copy “Tres/Cuatro cursos”.
- [x] **P0.15** Quitar el ID duplicado en los `h2` de módulo (`C0 · C0 — ...`).
- [x] **P0.16** Commit de quick wins y push.

### Fase 1 — Contenido: curso Descriptiva (42 lecciones)

Orden: A3 → A4 → A5 → A6 → A2 → A1 → A0.

- [x] **A3** (6): media, mediana, moda, medias ponderada/geométrica/armónica, cuándo usar cada una, relación media-mediana.
- [x] **A4** (5): rango/IQR, varianza/desviación, CV, MAD, poblacional vs muestral.
- [x] **A5** (5): cuartiles/percentiles, z, asimetría/curtosis, regla empírica, boxplots.
- [x] **A6** (6): covarianza, Pearson, Spearman, regresión simple, correlación≠causalidad, ajuste/bondad.
- [x] **A2** (6): frecuencias, histogramas/bins, series temporales, Pareto, gráficos engañosos, bivariados. - **completo (6/6, L1-L6)**
- [x] **A1** (6): población/muestra, tipos de variables, escalas, fuentes, hoja limpia, representatividad.
- [x] **A0** (8): número, fracciones/porcentajes, notación científica, redondeo, medias ponderadas, tablas, tasas, unidades.

Cada módulo es un lote: ES → validar → generate → spot-check → commit → push (alcance ES-only desde 2026-11-08).

### Fase 2 — Contenido: Probabilidad (30 lecciones)

- [x] B0 (1), B1 (2), B2 (3), B3 (2), B4 (2), B5 (4), B6 (4), B7 (3), B8 (5), B9 (4). — **30/30 completas**
- [ ] Añadir en las lecciones que correspondan: simulación, ley de los grandes números, varianza de la suma, aproximaciones, RTP y ruina. *(RTP y ruina cubiertos en B8; simulación/LGN parcialmente en B5–B7.)*

### Fase 3 — Contenido: Inferencial (33 lecciones)

- [x] C0 (4): censo vs muestra, sesgos, tipos de muestreo, tamaño de muestra. — **completo (4/4)**
- [x] C1 (3): estadístico vs parámetro, TCL, error estándar. — **completo (3/3)**
- [x] C2 (3): concepto de IC, IC para la media, IC para una proporción. — **completo (3/3)**
- [x] C3 (3): H0/H1, p-valor, errores tipo I y II. — **completo (3/3)**
- [x] C4 (5): prueba z, prueba t, t de dos muestras, t pareada, tamaño del efecto. — **completo (5/5)**
- [x] C5 (2): prueba z de una proporción, prueba z de dos proporciones. — **completo (2/2)**
- [x] C6 (2): chi-cuadrado de bondad de ajuste e independencia. — **completo (2/2)**
- [x] C7 (4): concepto de ANOVA, estadístico F, supuestos, comparaciones post-hoc. — **completo (4/4)**
- [ ] C8 (4), C9 (3).
- [ ] Añadir: potencia y tamaño de muestra, bootstrap, no paramétricos, causalidad, datos faltantes, regresión múltiple con diagnóstico.

### Fase 4 — Contenido: Fundamentos (10 lecciones)

- [ ] F0 (5), F1 (5).
- [ ] Convertir la historia en historia *conectada* a los métodos, no en trivia.

### Fase 5 — Evaluación y feedback (transversal)

- [ ] **E1** Convertir ≥50% de los 481 ejercicios a producción: numérico, ordenar, respuesta corta, interpretar output.
- [ ] **E2** Añadir explicación del error a cada ejercicio (mín. 40 palabras) y solución razonada (mín. 60).
- [ ] **E3** Eliminar pistas que contienen la respuesta; sustituir por pistas graduadas.
- [ ] **E4** Marcador vivo, reintento, registro de primer intento vs intento final.
- [ ] **E5** Umbral de maestría por lección (≥80%) para marcar “completada”.
- [ ] **E6** Examen final por curso y banco de preguntas.

### Fase 6 — Retención y metacognición

- [ ] **R1** SRS con IDs resolubles, panel de vencimientos y badge.
- [ ] **R2** Intercalado real: mezclar cursos y tipos, no solo las 3 lecciones previas.
- [ ] **R3** Panel “qué dominas / qué revisar” por concepto.
- [ ] **R4** Diario de errores y autoevaluación de confianza.

### Fase 7 — Motivación, UX, lengua y accesibilidad

- [ ] **M1** Racha que premia intentos/correcciones; no resetear por un fallo.
- [ ] **M2** Badges alcanzables (sin pistas, constancia, recuperación).
- [ ] **M3** Enlaces rotos, tarjeta 00, copy “3/4 cursos”, “9/10 módulos”, Squid Game.
- [ ] **M4** Tildes y typos en títulos/summaries; “Origines” → “Orígenes”.
- [ ] **M5** `fieldset/legend` en MCQ, alternativas textuales de gráficos, skip link, orden de encabezados.
- [ ] **M6** Cambio de idioma que preserve la página actual, no que vuelva a la home.

### Fase 8 — Certificación y auditoría final

- [ ] **C1** Proyecto final con entrega, rúbrica y evaluación.
- [ ] **C2** Diploma solo con examen + proyecto aprobados.
- [ ] **C3** Re-auditoría con la misma rúbrica de 25 dimensiones.
- [ ] **C4** Objetivo: ≥95/100 global; ninguna dimensión <85 salvo las estructurales justificadas.

---

## 4. Scorecard objetivo

| Dimensión | Base | Objetivo | Cómo se consigue |
|---|---:|---:|---|
| Exactitud estadística | 90 | 96 | Deep dive + revisión de supuestos |
| Cobertura | 55 | 95 | Temas faltantes + datos reales |
| Profundidad | 50 | 96 | 2.500+ palabras/lección |
| Ejemplos | 70 | 95 | 3+ resueltos + caso real |
| Datos/herramientas | 40 | 90 | Datasets + R/Python/Excel |
| Resultados/prerrequisitos | 52 | 95 | Outcomes y diagnóstico |
| Secuencia | 80 | 95 | Mapa de prerrequisitos |
| Carga cognitiva | 68 | 90 | Deep dive segmentado |
| Andamiaje | 58 | 95 | Worked examples + fading |
| Retrieval | 38 | 95 | Producción, no reconocimiento |
| Feedback | 35 | 95 | Explicación + reintento |
| Espaciado | 62 | 95 | SRS corregido y visible |
| Intercalado | 48 | 90 | Mezcla de cursos/tipos |
| Metacognición | 34 | 90 | Panel de dominio + diario |
| Formativa | 55 | 95 | Blueprint + rúbricas |
| Sumativa | 25 | 95 | Examen final |
| Certificación | 20 | 95 | Evidencia + proyecto |
| UX | 70 | 95 | Enlaces/copy/navegación |
| Accesibilidad | 65 | 95 | WCAG AA + alternativas |
| Lengua ES | 64 | 98 | Tildes/typos/estilo |
| Idioma | 78 | 90 | Español claro + traductor automático |
| Motivación | 55 | 90 | Racha y badges bien diseñados |
| Técnica | 82 | 95 | CI + validadores |
| Autonomía | 88 | 95 | Mantener gratis/sin registro |
| Acompañamiento | 30 | 70 | Guía de estudio y recordatorios |

**Nota global objetivo:** ≥95. No se declara hasta que la re-auditoría con la misma rúbrica lo confirme.

---

## 5. Reglas de producción

1. **Una lección, un archivo, un commit.** No se mezclan 10 lecciones en un commit ilegible.
2. **Solo español.** No se escribe versión EN; el traductor de Google cubre la lectura en otros idiomas.
3. **Números verificables.** Todo cálculo debe poder reproducirse a mano.
4. **Sin citas inventadas.** Si se menciona un autor/resultado, debe ser verificable o formularse como ejemplo.
5. **Sin relleno.** Si faltan 200 palabras, se añade un ejemplo o una derivación; no una frase motivacional.
6. **No romper el runtime.** El contenido profundo es estático; el JS actual sigue funcionando.
7. **Medir antes de commitear.** `validate-content` + `generate` + spot-check de la página.

---

## 6. Riesgos y decisiones

- **Riesgo:** 287.500 palabras es un proyecto editorial, no un sprint. **Decisión:** lotes por módulo, commits atómicos, sin prometer una fecha única.
- **Riesgo:** el contenido generado automáticamente suene a plantilla. **Decisión:** plantilla obligatoria, pero cada sección exige ejemplos y números específicos; el validador no premia relleno.
- **Riesgo:** duplicar teoría y deep dive. **Decisión:** la teoría breve queda como “Resumen”; el deep dive es “Contenido completo”. No se elimina el resumen porque ayuda al repaso rápido.
- **Riesgo:** la traducción automática no alcanza la calidad de una versión escrita. **Decisión:** se asume como coste de reducir el alcance a la mitad; el texto fuente es el español y el traductor es opcional.
- **Riesgo:** el deep dive rompe el render. **Decisión:** `mdDeep()` limitado a Markdown seguro; se prueba con la lección piloto antes de escalar.

---

## 7. Progreso

| Fecha | Hito | Estado |
|---|---|---|
| 2026-11-05 | Plan creado | ✅ |
| 2026-11-05 | Pipeline de contenido + A3-L1 piloto (5156/4864 palabras) | ✅ |
| 2026-11-05 | Módulo A3 completo (6/6) | ✅ |
| 2026-11-05 | Módulo A4 completo (5/5) | ✅ |
| 2026-11-05 | Módulo A5 completo (5/5) | ✅ |
| 2026-11-05 | Módulo A6 completo (6/6) | ✅ |
| 2026-11-05 | Módulos A3–A6 completos (22/22) | ✅ |
| 2026-11-05 | A7-L1/L2 escritas (luego remapeadas a B0-L1/B5-L1) | ✅ |
| 2026-11-08 | Alcance reducido a español + traductor; validador sin paridad | ✅ |
| 2026-11-08 | Módulo B1 completo (2/2, ES) | ✅ |
| 2026-11-08 | Módulo B2 completo (3/3, ES) | ✅ |
| 2026-11-08 | Módulo B3 completo (2/2, ES) | ✅ |
| 2026-11-08 | Módulo B4 completo (2/2, ES) | ✅ |
| 2026-11-08 | Módulo B5 completo (4/4, ES) | ✅ |
| 2026-11-08 | Módulo B6 completo (4/4, ES) | ✅ |
| 2026-11-08 | Módulo B7 completo (3/3, ES) | ✅ |
| 2026-11-09 | Módulo B8 completo (5/5, ES) | ✅ |
| 2026-11-09 | Módulo B9 completo (4/4, ES) — **probabilidad 30/30** | ✅ |
| 2026-11-09 | **Módulo A0 completo (8/8, ES)** | ✅ |
| 2026-11-09 | **Módulo A1 completo (6/6, ES)** | ✅ |
| 2026-11-09 | A2 en curso: A2-L1–L2 (2/6, ES) | ⏳ |
| 2026-11-10 | **Módulo A2 completo (6/6, ES) — Descriptiva 42/42** | ✅ |
| 2026-11-10 | **Estado global: 72/115 deep dives (62,6%)** | ✅ |
| — | Descriptiva 42/42 (100%) | ✅ |
| — | Probabilidad 30/30 (100%) | ✅ |
| — | Inferencial 0/33 (0%) | ⏳ |
| — | Fundamentos 0/10 (0%) | ⏳ |
| — | Fases 5–8: evaluación, retención, UX y certificación | ⏳ |

**Avance de contenido: 72/115 lecciones = 62,6 %.** Quedan 43 deep dives (37,4 %). El plan completo es menor que ese 62,6 % porque las Fases 5–8 (evaluación, retención, motivación/UX y certificación) no han comenzado.

**Avance por módulos: 17 de 29 módulos completos = 58,6 %.** Completos: A0, A1, A2, A3, A4, A5, A6 y B0–B9. Pendientes: C0–C9 (10 módulos) y F0–F1 (2 módulos).

**Lectura del 100 %:** no hay un único porcentaje global fiable porque el plan mezcla contenido (115 deep dives) con fases transversales sin peso definido. La cifra medible es **62,6 % del contenido**; si se contaran las 9 fases por igual, el avance sería ~33 %, pero esa ponderación es arbitraria y no se usa como KPI.

**Siguiente paso inmediato:** inferencial C0–C9 (33) y fundamentos F0–F1 (10), un módulo por commit.
