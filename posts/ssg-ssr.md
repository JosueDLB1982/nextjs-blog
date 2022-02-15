---
title: 'Generación estática vs. Representación del lado del servidor'
date: '2022-02-14'
---

Recomendamos usar **Generación estática** (con y sin datos) siempre que sea posible porque su página puede construirse una vez y servirse mediante CDN, lo que hace que sea mucho más rápido que tener un servidor que renderice la página en cada solicitud.

Puede usar la generación estática para muchos tipos de páginas, que incluyen:

- Páginas de marketing
- Publicaciones de blog
- Listados de productos de comercio electrónico
- Ayuda y documentación.

Debería preguntarse: "¿Puedo renderizar previamente esta página **antes** de la solicitud de un usuario?" Si la respuesta es afirmativa, entonces debe elegir Generación estática.

Por otro lado, la generación estática **no** es una buena idea si no puede renderizar previamente una página antes de la solicitud de un usuario. Tal vez su página muestre datos actualizados con frecuencia y el contenido de la página cambie con cada solicitud.

En ese caso, puede usar **Representación del lado del servidor**. Será más lento, pero la página renderizada previamente siempre estará actualizada. O puede omitir la representación previa y usar JavaScript del lado del cliente para completar los datos.