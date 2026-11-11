# Fase 5 — Evaluación y feedback

**Estado:** en ejecución (etapa 1)
**Fecha:** 2026-11-10
**Alcance:** motor de ejercicios + validador + primer lote de contenido convertido.

## Punto de partida medido

`node scripts/audit-exercises.mjs` sobre `data/`:

- 481 ejercicios, **100 % tipo `mcq`**. Formato «producción» (numeric/order/short): **0 %**.
- **481 sin `explain`** (explicación del error).
- **480 con `solution` < 60 caracteres** (no razonada).
- **20 pistas filtran la solución** (contienen el texto de la respuesta).

Objetivo del plan: E1 ≥50 % producción, E2 explicación ≥40 palabras y solución ≥60, E3 pistas sin respuesta, E4 primer intento vs final, E5 umbral de maestría ≥80 %, E6 examen final por curso.

## Etapas

### Etapa 1 — Motor y validador (este lote)

1. `assets/js/quiz.js`
   - Nuevo tipo `short`: entrada de texto, respuesta por lista normalizada (minúsculas, sin tildes, sin puntuación).
   - Mostrar `q.explain` al fallar (si existe), antes de la pista.
   - Registrar **primer intento** y **final** por ejercicio y calcular maestría = aciertos al primer intento / total.
   - Devolver la maestría por callback (`opts.onFinish`).
2. `assets/js/progress.js`
   - `recordAttempt(id, ok, first)`: guarda `{ok, first, ts}` en `S.answers`.
   - `attemptStats(ids)`: aciertos al primer intento.
3. `assets/js/lesson-engine.js`
   - Al terminar el quiz, si maestría ≥ 0,8 → marcar lección completada automáticamente y mostrar línea de maestría.
4. `scripts/validate.mjs`
   - Añadir `short` a `TYPES` y su validación de `answers`.
   - `isText` exige solo `es` (el proyecto es ES-only desde 2026-11-08).
5. `scripts/validate-feedback.mjs` (nuevo, informativo)
   - Exige `explain` ≥40 palabras y `solution` ≥60 caracteres en los ejercicios de lecciones ya convertidas (lista blanca), para no bloquear las 481.
   - CI: paso no bloqueante hasta que la cobertura llegue al 100 %.

### Etapa 2 — Contenido por cursos (pendiente)

Orden: F0 (15) → F1 (15) → A0 → … → C9. Cada lección: convertir ≥50 % de sus ejercicios a `numeric`/`short`/`order`, añadir `explain` y `solution` razonada, y eliminar pistas que filtran.

### Etapa 3 — Maestría y examen (pendiente)

- E5: umbral por lección (hecho en motor en etapa 1), panel de dominio.
- E6: examen final por curso (20 preguntas muestreadas del banco) y banco de preguntas.

## Criterio de aceptación

- Etapa 1: `validate.mjs` y `validate-content.mjs --all` en verde; el motor renderiza `short`, muestra explicación y calcula maestría; F0 convertido al 100 % con explicación y solución largas.

## Estado etapa 1 (2026-11-10)

Hecho:

- `quiz.js`: tipo `short`, `explain` al fallar, primer intento vs final, maestría y callback `onFinish`.
- `progress.js`: `recordAttempt`, `attemptInfo`, `mastery`.
- `lesson-engine.js`: al llegar a 80 % de maestría se completa la lección automáticamente.
- `validate.mjs`: `short` admitido; `isText` exige solo `es`.
- `scripts/validate-feedback.mjs` y `scripts/audit-exercises.mjs` (informativos).
- Pilot F0: 15 ejercicios sincronizados; 10 convertidos a `short` (67 %), 10 con `explain` ≥40 palabras y solución ≥60.
- CI: `validate.mjs` y `validate-content --all` bloqueantes; feedback y auditoría informativos.

Hallazgo importante: el sitio consume **`data/<curso>.js` (bundle)**, no los archivos de `data/<curso>/`. Los módulos son fuentes y pueden divergir. Se añadió `scripts/sync-module.mjs <curso> <archivo> <ID>` para sincronizar ejercicios; todo cambio de contenido debe pasar por ahí.

Pendiente (etapas 2–3): 451 ejercicios por convertir, 451 sin `explain`, 451 con solución corta, 20 pistas que filtran, examen final por curso.

## Progreso etapa 2 (2026-11-10)

- F0 cerrado: 15/15 con explicación y solución; 10 a `short`.
- F1 cerrado: 15/15 con explicación y solución; 10 a `short`.
- A0 cerrado: 40/40 con explicación y solución; 25 `numeric`.
- A1 cerrado: 30/30 con explicación y solución; 16 a `short`.
- A2 cerrado: 30/30 con explicación y solución; 18 en producción.
- A3 cerrado: 30/30 con explicación y solución; 20 en producción. Corregido un error de contenido: la teoría afirmaba «armónica = geométrica = aritmética» cuando la relación correcta es H ≤ G ≤ A (igualdad solo si todos los valores coinciden).
- A4 cerrado: 25/25 con explicación y solución; 15 en producción. Corregido el enunciado de A4-L5-E4 (comparaba N con n−1 en lugar de n con n−1).
- A5 cerrado: 25/25 con explicación y solución; 13 en producción. Verificados cuartiles, z, asimetría/curtosis, regla empírica y boxplot.
- A6 cerrado: 30/30 con explicación y solución; 16 en producción. Corregido A6-L4-E4: las dos primeras opciones eran idénticas (`y - y`) por pérdida de la notación con gorro; ahora son «observado menos predicho» y «predicho menos observado».
- **Curso de Descriptiva completo en fase 5**: 210/210 con feedback, 123 en producción, 0 pistas filtradas.
- Probabilidad B0–B3 cerrados: 26/26 con explicación y solución; 8 en producción.
- Probabilidad B4–B5 cerrados: 18/18 con explicación y solución; 5 en producción. Verificados Bayes (0,6), sensibilidad/especificidad, VPP y prevalencia, función de probabilidad, esperanza y varianza.
- Probabilidad B6–B7 cerrados: 21/21 con explicación y solución; 5 en producción. Verificados Bernoulli, binomial (E=5, Var=2,5), Poisson (E=Var=3, e^-2), hipergeométrica, densidad, normal estándar y exponencial.
- Probabilidad B8 cerrado: 25/25 con explicación y solución; 6 en producción. Verificados house edge (2,70 % y 5,26 %), P(7)=6/36, martingala (no cambia el EV), RTP y volatilidad, ruina del jugador.
- Acumulado: 330/481 con feedback completo (68,6 %), 167/481 en producción (34,7 %). Probabilidad sin pistas filtradas.
- Quedan B9 (12 ejercicios) e Inferencial (139).

### Herramientas para bundles

`data/probabilidad.js` y `data/descriptiva-inferencial` usan formato JSON pretty-printed, distinto del formato compacto de los módulos. Se añadieron `apply-feedback-bundle.mjs` y `append-explain-bundle.mjs`, que operan sobre el bundle y evitan el desajuste entre fuente y bundle (detectado: B0-L1-E1 era `mcq` en el bundle y `numeric` en el módulo).

### Lección de proceso

Las explicaciones escritas «a ojo» salen de ~35 palabras. Regla fija: cuatro frases (qué falló, por qué, ejemplo, consecuencia) y verificar con `validate-feedback.mjs` antes de seguir.

## Criterio de aceptación

- Etapa 1: `validate.mjs` y `validate-content.mjs --all` en verde; el motor renderiza `short`, muestra explicación y calcula maestría; F0 convertido al 100 % con explicación y solución largas.
- Fase completa: ≥50 % de los 481 en producción, 100 % con `explain` y `solution` ≥60, 0 pistas que filtran, examen final por curso.
