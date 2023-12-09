---
import: "../../../layouts/Layoutmd.astro"
title: HTML estructura
date: 10 Noviembre 2023
author: Marcos Fernández de Salamanca
desc: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quasi cupiditate quam maxime repudiandae, sapiente, aut repellendus qui tenetur voluptatem fuga adipisci distinctio, ipsam corrupti fugiat eligendi obcaecati eius voluptates.
image: https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg
---

# Estructura HTML

![html](https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg)

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quasi cupiditate quam maxime repudiandae, sapiente, aut repellendus qui tenetur voluptatem fuga adipisci distinctio, ipsam corrupti fugiat eligendi obcaecati eius voluptates.

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quasi cupiditate quam maxime repudiandae, sapiente, aut repellendus qui tenetur voluptatem fuga adipisci distinctio, ipsam corrupti fugiat eligendi obcaecati eius voluptates.

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quasi cupiditate quam maxime repudiandae, sapiente, aut repellendus qui tenetur voluptatem fuga adipisci distinctio, ipsam corrupti fugiat eligendi obcaecati eius voluptates.

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quasi cupiditate quam maxime repudiandae, sapiente, aut repellendus qui tenetur voluptatem fuga adipisci distinctio, ipsam corrupti fugiat eligendi obcaecati eius voluptates.

```html
<html lang="es">
	<head>
		<meta charset="UTF-8" />
		<meta name="description" content="Astro description" />
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="generator" content={Astro.generator} />
	</head>
	<body>
		<Header />
		<div class="container">
			<slot />
		</div>
	</body>
</html>

```
