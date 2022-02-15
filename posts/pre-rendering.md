---
title: 'Dos formas de renderizado previo'
date: '2022-02-13'
---

Next.js tiene dos formas de representación previa: **Generación estática** y **Representación del lado del servidor**. La diferencia está en **cuando** genera el HTML para una página.

- **Generación estática** es el método de representación previa que genera el HTML en el **tiempo de compilación**. El HTML renderizado previamente se _reutiliza_ en cada solicitud.
- **Representación del lado del servidor** es el método previo a la representación que genera el HTML en **cada solicitud**.

Es importante destacar que Next.js le permite **elegir** qué formulario de representación previa usar para cada página. Puede crear una aplicación Next.js "híbrida" mediante el uso de generación estática para la mayoría de las páginas y el procesamiento del lado del servidor para otras.