# Estado del proyecto — Deep Dive Content

## Progreso actual

- **22/115 lecciones completas** con deep dive ≥2500 palabras (ES/EN)
- **Descriptiva:** 22/42 lecciones (A3: 6/6, A4: 5/5, A5: 5/5, A6: 6/6 — pendientes A0: 8, A1: 6, A2: 6)
- **Probabilidad:** A7-L1 ES/EN escritas (EN pendiente de expandir a 2500 palabras)
- **Inferencial:** 0/33 — **Fundamentos:** 0/10
- Pipeline completo: mdDeep(), validate-content.mjs (valida ≥2500 palabras, 9 secciones, ###, tablas, $$, preguntas, paridad ES/EN)

## Quick wins completados

- Marcador del quiz arreglado (Score ya no queda fijo en 0/N)
- Reintento tras fallo y pista/solución solo tras intento
- IDs SRS corregidos (ya no generan zombies en /repaso/)
- Badge de repaso con contador real
- Portada arreglada (tarjeta 00 rota, copy de cursos, Squid Game)
- IDs de módulo sin duplicar
- validate-content.mjs en CI (no bloqueante hasta 115/115)

## Próximos pasos (por prioridad)

1. Expandir A7-L1 EN a ≥2500 palabras
2. Escribir A7-L2 a A7-L5 (probabilidad — restantes del curso)
3. Escribir A0, A1, A2 (descriptiva — 20 lecciones restantes)
4. Continuar probabilidad (B0–B9, 30 lecciones)
5. Continuar inferencial (C0–C9, 33 lecciones)
6. Continuar fundamentos (F0–F1, 10 lecciones)
7. Activar validate-content.mjs --all en CI cuando esté 115/115
8. Re-auditoría pedagógica con la rúbrica de 25 dimensiones (objetivo ≥95/100)

## Comando de validación

- `node scripts/validate-content.mjs` — reporta pendientes sin fallar
- `node scripts/validate-content.mjs --all` — exige 115/115 (CI bloqueante)
