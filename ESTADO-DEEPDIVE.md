# Estado del proyecto — Deep Dive Content

**Actualizado:** 2026-11-10

## Progreso actual

- **102/115 lecciones completas** con deep dive ≥2.500 palabras en español, validadas por `validate-content.mjs`.
- **Descriptiva: 42/42 — curso completo** (A0: 8/8, A1: 6/6, A2: 6/6, A3–A6: 22/22).
- **Probabilidad:** 30/30 — **curso completo** (B0–B9).
- **Inferencial: 30/33** (C0–C8 completos; C9 0/3) · **Fundamentos:** 0/10.
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

1. Curso Descriptiva cerrado (42/42). Sin pendientes.
2. Continuar inferencial (C0–C9, 33 lecciones).
3. Continuar fundamentos (F0–F1, 10 lecciones).
4. Activar `validate-content.mjs --all` en CI cuando esté 115/115.
5. Re-auditoría pedagógica con la rúbrica de 25 dimensiones (objetivo ≥95/100).

## Comando de validación

- `node scripts/validate-content.mjs` — reporta pendientes sin fallar; falla con errores reales u huérfanos.
- `node scripts/validate-content.mjs --all` — exige 115/115 (CI bloqueante).