# Estado del proyecto — Deep Dive Content

**Actualizado:** 2026-11-14

## Progreso actual

- **115/115 lecciones completas** con deep dive ≥2.500 palabras en español, validadas por `validate-content.mjs --all` (bloqueante en CI).
- **Descriptiva: 42/42 — curso completo** (A0: 8/8, A1: 6/6, A2: 6/6, A3–A6: 22/22).
- **Probabilidad:** 30/30 — **curso completo** (B0–B9).
- **Inferencial: 33/33 — curso completo** (C0–C9).
- **Fundamentos: 10/10 — curso completo** (F0 5/5, F1 5/5).
- **Contenido cerrado al 100 %.** Fases 5 y 6 completas; fase 7 casi completa (M2 y parte de M5 pendientes); fase 8 sin empezar.
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
2. **Fase 5 — evaluación y feedback: completa (E1–E6)**. 481/481 con explicación y solución; 241 en formato producción; 0 pistas; maestría ≥80 %; panel de dominio y examen final por curso. `--strict` bloqueante en CI.
3. **Fase 6 — retención y metacognición: completa (R1–R4)**. Repaso con IDs resolubles, intercalado con rotación y variedad de tipo, panel de dominio por módulo y diario de errores en `/repaso/`.
4. **Fase 7 — completa**. M1–M6 hechos: racha que resta uno, 16 logros con referencias culturales, 0 enlaces internos rotos, «Orígenes» corregido, skip link + radiogroup + texto alternativo en los 5 gráficos, traductor en línea.
5. **Fase 8 — C1–C3 hechas; C4 no alcanzado**. Proyecto con rúbrica y autoevaluación, diploma condicionado a curso + examen + proyecto, auditoría final con **84,4/100**. Detalle y brechas en `AUDITORIA-FINAL.md`.

## Comando de validación

- `node scripts/validate-content.mjs` — reporta pendientes sin fallar; falla con errores reales u huérfanos.
- `node scripts/validate-content.mjs --all` — exige 115/115 (CI bloqueante).