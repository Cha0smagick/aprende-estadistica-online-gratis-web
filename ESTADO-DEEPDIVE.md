# Estado del proyecto — Deep Dive Content

**Actualizado:** 2026-11-10

## Progreso actual

- **115/115 lecciones completas** con deep dive ≥2.500 palabras en español, validadas por `validate-content.mjs --all` (bloqueante en CI).
- **Descriptiva: 42/42 — curso completo** (A0: 8/8, A1: 6/6, A2: 6/6, A3–A6: 22/22).
- **Probabilidad:** 30/30 — **curso completo** (B0–B9).
- **Inferencial: 33/33 — curso completo** (C0–C9).
- **Fundamentos: 10/10 — curso completo** (F0 5/5, F1 5/5).
- **Contenido cerrado al 100 %.** Quedan las fases transversales 5–8 (evaluación, retención, UX, certificación).
- Pipeline completo: mdDeep(), validate-content.mjs (≥2.500 palabras, 9 secciones, ###, tablas, $$, preguntas, detección de contenido huérfano). El inglés ya no se exige ni se publica.

## Reconciliación 2026-11-08

- Los archivos `A7-L1`/`A7-L2` eran huérfanos: el curso de probabilidad usa IDs `B*`, no existe módulo A7 y nunca se renderizaban. Se remapearon a las lecciones cuyo contenido cubren: **A7-L1 → B0-L1** (experimento, espacio muestral, reglas, condicional) y **A7-L2 → B5-L1** (variable aleatoria, esperanza, varianza, Bernoulli).
- `validate-content.mjs` ahora falla si hay `content/<lang>/*.md` sin lección correspondiente en `data/` (el fallo que dejó pasar los huérfanos).
- B0-L1 ES tenía la sección 9 en formato no numerado (3 preguntas detectadas de 8 reales); se normalizó a lista 1–8.

## Quick wins completados

- Marcador del quiz vivo (Score ya no queda fijo en 0/N)
- Reintento tras fallo y pista/solución solo tras intento
- IDs SRS corregidos (ya no generan zombies en /repaso/)
- Badge de repaso con contador real
- Portada arreglada (tarjeta 00 rota, copy de cursos, Squid Game)
- IDs de módulo sin duplicar
- Enlace «Siguiente lección» del template arreglado (el engine buscaba `#next-lesson`, el template emitía `.next-lesson`; el enlace era `#` en las 230 lecciones)
- validate-content.mjs en CI (no bloqueante hasta 115/115)

## Próximos pasos (por prioridad)

1. Contenido cerrado: 115/115 deep dives, validador bloqueante en CI.
2. **Fase 5 — evaluación y feedback (en curso)**: motor con tipo `short`, explicación del error y maestría ≥80 % operativo. Fundamentos y Descriptiva cerrados; Probabilidad B0–B5 cerrados (284/481 con feedback; 156 en producción). Siguen B6–B9 e Inferencial. Plan: `.opencode/plans/fase5-evaluacion.md`.
3. Fase 6 — retención y metacognición (SRS, intercalado, panel de dominio).
4. Fase 7 — motivación, UX, lengua y accesibilidad.
5. Fase 8 — certificación y auditoría final (rúbrica ≥95/100).

## Comando de validación

- `node scripts/validate-content.mjs` — reporta pendientes sin fallar; falla con errores reales u huérfanos.
- `node scripts/validate-content.mjs --all` — exige 115/115 (CI bloqueante).