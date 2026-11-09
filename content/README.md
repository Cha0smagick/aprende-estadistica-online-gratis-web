# Contenido profundo — reglas de producción

Un archivo por lección, en español: `content/es/<lessonId>.md`.
El `lessonId` es el `id` de la lección en `data/*.js` (por ejemplo `A3-L1`).
`content/en/` queda como legado: no se publica ni se valida.

El generador los inyecta en build-time en el bloque **Contenido completo** de la página.
No se copian a `_site` ni se envían al cliente como JS.

## Contrato de calidad

Una lección está terminada solo si:

- Tiene **≥2.500 palabras de prosa** en español (el validador descuenta fórmulas y bloques de código).
- Contiene las **9 secciones numeradas**, en orden: `## 1.` … `## 9.`.
- Tiene al menos 6 subsecciones `###`, 1 tabla de datos y 1 fórmula en bloque `$$...$$`.
- La sección 9 incluye **5 preguntas numeradas con respuesta razonada**.
- El texto está en español; los demás idiomas se cubren con el traductor de Google.
- Todo número es reproducible a mano. Nada de citas inventadas.

Se comprueba con:

```bash
node scripts/validate-content.mjs        # reporta pendientes sin fallar
node scripts/validate-content.mjs --all  # exige 115/115 (CI)
```

## Plantilla (9 secciones)

1. **Objetivos y prerrequisitos** — qué sabrás hacer, qué necesitas antes, autochequeo de entrada.
2. **Por qué importa** — contexto real, coste de hacerlo mal, conexión con el resto del curso.
3. **Intuición** — metáfora, imagen mental, caso extremo, por qué la fórmula tiene esa forma.
4. **Definición y notación** — definición formal, símbolos, unidades, población vs muestra, casos límite.
5. **Derivación paso a paso** — de la idea a la fórmula, propiedades, qué se pierde en cada supuesto.
6. **Ejemplos resueltos** — 3+ ejercicios numéricos, uno con datos/frecuencias, uno con trampa.
7. **Errores y malinterpretaciones** — 5 trampas, por qué ocurren, cómo detectarlas y corregirlas.
8. **Conexiones y transferencia** — con otras lecciones, con inferencia, con decisiones reales.
9. **Práctica y resumen** — 5 preguntas con solución razonada + mapa de 5 ideas.

## Estilo

- Español con tildes y sin calcos. Inglés natural, no traducción literal.
- Frases cortas, ejemplos con números pequeños verificables.
- Fórmulas en LaTeX: `$...$` en línea, `$$...$$` en bloque.
- Tablas Markdown para datos y comparaciones.
- Negritas para el término que se define, no para decorar.
- Nada de relleno: si faltan palabras, se añade un ejemplo o una derivación, no una frase motivacional.
