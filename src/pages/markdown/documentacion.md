---
layout: "../../layouts/Layout.astro"
---

# Documentación del Sitio Web de SOFOS
<br>

## **Descripción**

El sitio web de SOFOS, artista musical, es un espacio virtual diseñado para promover su labor artística. Este incluye una sección principal descriptiva, una tienda online de merchandising (centrada en camisetas), un carrito de compra y una sección de contacto.
<br><br>

## **Objetivos**

El principal objetivo del proyecto es servir como un portfolio interactivo que permita a los oyentes de SOFOS comprar merchandising, productos y entradas para futuros conciertos. Además, se busca crear un prototipo de e-commerce con potencial aplicación en futuros proyectos profesionales.
<br><br>

## **Planificación de tareas a alto nivel**
<br>

### 1. Análisis y Requisitos
<br>

- **Identificación de Necesidades Específicas:**
  - -Información clave para el dossier.
  - -Elementos multimedia necesarios.
  - -Actualización del tablón de novedades por el administrador.
  - -Productos a la venta en la tienda online.

- **Investigación de Mercado:**
  - -Analizar sitios web similares para identificar mejores prácticas y tendencias.
<br><br>

### 2. Diseño y Estructura
<br>

- **Diseño Visual:**
  - -Crear prototipos visuales que reflejen la estética del artista.

- **Estructura de Navegación:**
  - -Definir una jerarquía clara de páginas para una experiencia de usuario intuitiva.

- **Responsive Design:**
  - -Garantizar que el sitio sea totalmente responsive para adaptarse a diferentes dispositivos.
<br><br>

### 3. Desarrollo Técnico
<br>

- **Framework Astro:**
  - -Utilizar el framework Astro para la construcción de la aplicación web.

- **Desarrollo de Layouts y Componentes:**
  - -Desarrollar layouts, páginas y componentes reutilizables.

- **Rutas Dinámicas:**
  - -Implementar rutas dinámicas para una navegación eficiente.

- **Markdown:**
  - -Valorar el uso de markdown para la documentación del sitio web.
<br><br>

### 4. Funcionalidades Principales y Metodología de Trabajo
<br>

#### **Dossier / Portfolio**

- -Implementar secciones de biografía, discografía y muestras de música.
- -Integrar reproductores de vídeo para una experiencia multimedia completa.
<br><br>

#### **Tienda Online**

- -Crear un listado de productos con información detallada.
- -Permitir agregar productos al carrito.
<br><br>

#### **Carrito**

- -Mostrar un listado de productos en el carrito.
- -Calcular la suma total del precio de compra.
- -Implementar un formulario para el proceso de pedido (sin métodos de pago).
<br><br>

#### **Contacto**

- -Crear un formulario de contacto con campos específicos.
- -Incluir información de contacto y enlaces a perfiles sociales.
<br><br><br>

---
<br><br>

*Este documento proporciona una visión general del proyecto, establece los objetivos y detalla las tareas a realizar en cada fase del desarrollo del sitio web.*

<script type="module">
	var contadorCarrito = document.getElementById("contadorCarrito");
	var storedCounter = localStorage.getItem("contadorCarrito");
	contadorCarrito.textContent = storedCounter || (0).toString();
</script>
