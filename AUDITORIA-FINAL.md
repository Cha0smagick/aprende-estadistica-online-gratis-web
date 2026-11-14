# Auditoría final — Fase 8 (C3)

**Fecha:** 2026-11-14
**Método:** rúbrica de 25 dimensiones del plan, puntuada contra evidencia ejecutada (validadores, pruebas E2E, inspección de contenido). No se puntúa por intención.

> Cambios desde la primera pasada: módulo `/es/datos/` (#2, #5, #24), lecciones A6 sin relleno y con datos del curso (#4), auditoría de prosa y de accesibilidad con script (#19, #20), entrega descargable del proyecto (#25), y corrección de dos deep dives desalineados en A6 (#2). La media se recalcula siempre desde la tabla.

## Puntuación

| # | Dimensión | Nota | Evidencia / límite |
|---|---|---:|---|
| 1 | Exactitud estadística | 92 | Errores corregidos y cifras recalculadas contra los CSV publicados (covarianza 186,62; F = 343,6; pendiente 49,7 g/mm; residuo típico 394,3 g). Sin revisión estadística externa. |
| 2 | Cobertura | 94 | 115/115 alineadas con su lección (`check-alignment.mjs`) y 5 conjuntos de datos, uno real con licencia CC0. |
| 3 | Profundidad | 95 | ≥2.500 palabras por lección, validado por script. |
| 4 | Ejemplos | 93 | Seis lecciones de A6 con datos del curso, informe modelo con cifras verificadas sobre pingüinos y tres ejercicios con respuesta calculada. |
| 5 | Datos/herramientas | 86 | Guía de R, Python y Excel con carga, descriptivos, gráfico y contraste, más ejercicio de contraste entre herramientas. Python ejecutado; R no (no instalado). |
| 6 | Resultados/prerrequisitos | 92 | Cada lección abre con objetivos y prerrequisitos explícitos. |
| 7 | Secuencia | 90 | Orden A0→A6, B0→B9, C0→C9, F0→F1 con dependencias declaradas. |
| 8 | Carga cognitiva | 90 | Relleno eliminado: ninguna lección termina con repetición mecánica (`lint-filler --strict`). |
| 9 | Andamiaje | 90 | Blueprint paso a paso en cada lección. |
| 10 | Retrieval | 95 | 241/481 ejercicios en producción (numérico/texto/orden). |
| 11 | Feedback | 95 | 481/481 con explicación ≥40 palabras y solución ≥60. |
| 12 | Espaciado | 90 | SRS Leitner con IDs resolubles, badge y `/repaso/`. |
| 13 | Intercalado | 92 | El repaso mezcla cursos: cada lección añade dos ejercicios del curso anterior y evita dos tipos iguales seguidos (verificado en el HTML generado). |
| 14 | Metacognición | 90 | Panel de dominio por módulo + diario de errores. |
| 15 | Formativa | 92 | Informe modelo y lista de revisión entre pares de seis puntos, además de la rúbrica. |
| 16 | Sumativa | 90 | Examen final por curso, 20 preguntas, umbral 80 % (probado: 100/80/75/0). |
| 17 | Certificación | 84 | El diploma exige curso, examen y proyecto; la entrega registra quién la revisó. Sin verificación externa del certificado. |
| 18 | UX | 93 | Contraste AA en tema claro y oscuro, 0 desbordes a 360 px, objetivos táctiles ≥24 px (excepciones inline documentadas). |
| 19 | Accesibilidad | 94 | 0 incidencias en 127 páginas; contraste medido en navegador en los dos temas; teclado y árbol AX verificados. |
| 20 | Lengua ES | 88 | `lint-prose.mjs --strict` sobre 314.561 palabras: 0 artefactos de chatbot, 0 muletillas de énfasis, 0 vocabulario de folleto, 0,30 rayas por 1000. `lint-filler.mjs --strict`: 0 relleno. Sin revisión humana. |
| 21 | Idioma | 85 | Español claro + traductor en línea que conserva la página. |
| 22 | Motivación | 85 | 16 logros con referencias culturales, racha que resta en vez de reiniciar. |
| 23 | Técnica | 94 | Siete scripts de auditoría (contenido, feedback, prosa, relleno, alineación, accesibilidad, UX) y CI bloqueante con seis de ellos. |
| 24 | Datos reales | 88 | Palmer Penguins (CC0) incluido con fuente, fecha de descarga, diccionario y tres ejercicios con cifras reales. |
| 25 | Proyecto final | 85 | Entrega descargable, informe modelo, revisión entre pares y campo de revisor. Sin revisión humana obligatoria. |

**Media:** 2262 / 25 = **90,5 / 100**. (La primera pasada decía 84,4; recalculada desde la tabla daba 84,1. Queda corregido: la media se calcula desde las notas de la tabla, no a ojo.)

## Veredicto

- **C3:** hecha, con resultado **no alcanzado**: la media queda en 90,5 y cinco dimensiones bajan de 88 (datos/herramientas 86, certificación 84, proyecto 85, idioma 85, motivación 85).
- **C4 (≥95):** **no se cumple.** Faltan revisión humana del contenido, verificación externa de la certificación y prueba con lector de pantalla real; nada de eso lo puede producir un script.

## Qué haría falta para llegar a 95

1. ~~Un módulo de datos: 3–5 datasets descargables con diccionario y ejercicios guiados.~~ Hecho: `/es/datos/` con 4 CSV, diccionario, 7 ejercicios y guía de herramientas.
2. Sustituir o acompañar los datos simulados con un dataset real citado (INE, Eurostat) y su diccionario.
3. Entrega real del proyecto (formulario o repositorio) con revisión por rúbrica.
4. Revisión humana de la prosa: los patrones automáticos están a cero, pero un corrector de carne y hueso detecta cosas que un regex no.
5. Prueba con lector de pantalla real (NVDA o VoiceOver); el árbol de accesibilidad y el recorrido de teclado ya están verificados.

Ninguno de esos cinco puntos se puede declarar hecho sin ejecutarlo.
