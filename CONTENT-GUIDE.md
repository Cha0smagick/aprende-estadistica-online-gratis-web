# Guía de contenido — cómo se escribe una lección

Fuente de verdad: `PLAN.md` §2 y §4. Este documento es el checklist operativo.

## Anatomía de una lección (7 bloques, ~15 min)

1. **Gancho** (1′): un dato pop que intriga.
2. **Concepto** (3′): teoría clara con LaTeX y visual.
3. **Ejemplo resuelto** (3′): paso a paso, cultura pop.
4. **Blueprint** (4′): el alumno rellena los pasos; andamiaje con pistas.
5. **Ejercicios** (4′): 8–12 interactivos calificados, ≥2 tipos.
6. **Trampa común**: el error clásico y por qué falla.
7. **Repaso**: 3 preguntas de lecciones anteriores (generadas automáticamente).

## Definition of Done

- [ ] `title`, `hook`, `theory`, `example` en ES y EN.
- [ ] ≥1 fórmula en LaTeX en `theory` o `formulas`.
- [ ] ≥1 visual (SVG) cuando tenga sentido.
- [ ] ≥8 ejercicios, ≥2 tipos distintos.
- [ ] Blueprint con ≥3 pasos y pistas.
- [ ] ≥1 `misconception`.
- [ ] `node scripts/validate.mjs` en verde.

## Tono

- Directo, sin jerga innecesaria; define cada término la primera vez.
- Cultura pop **evergreen**: loot boxes, Spotify Wrapped, penales, Squid Game, cripto, memes consolidados. Evita referencias de semana.
- Ejemplos reales con números plausibles.
- Nunca «es obvio que…».

## Reglas de LaTeX

- En strings JS, **duplica cada barra invertida**: `\\frac`, `\\sum`, `\\bar`.
- Inline: `$...$`. Bloque: `$$...$$`.
- Nombres de fórmulas en `formulas[].name` como `{es,en}`.

## Reglas de ejercicios

- Tipos: `mcq`, `numeric` (con `tol`), `truefalse`, `order`.
- `xp`: 10 por defecto; 20 para los difíciles.
- `jackpot: true` solo en ~5 % de los ejercicios de repaso (recompensa variable).
- La respuesta correcta nunca aparece en el enunciado.
- Siempre incluir `hint` y `solution`.

## Numeración y slugs

- Lección: `A3-L1` (curso A, módulo 3, lección 1). Slug: `media-aritmetica`.
- Slugs en minúsculas con guiones, sin acentos.

## Archivos

- Un archivo por módulo: `data/descriptiva/a3.js` exporta el objeto módulo.
- `data/descriptiva.js` los reexporta y compone el curso.
