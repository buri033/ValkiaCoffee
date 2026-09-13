# Valkia Coffee — Cafés de Autor

> **Sitio web en vivo (Vercel):** [https://valkia-coffee.vercel.app](https://valkia-coffee.vercel.app)  
> *(Reemplaza la URL anterior por tu enlace público final de Vercel)*

---

## ☕ 1. Descripción del Proyecto

**Valkia Coffee** es un mercado web e-commerce de café de especialidad y productos de autor en Colombia. La plataforma está pensada para amantes del buen café que buscan explorar lotes únicos de pequeños caficultores independientes (Huila, Nariño, Sierra Nevada, Quindío), conocer sus notas de cata y métodos de preparación (V60, Espresso, Prensa Francesa, Cold Brew) y suscribirse a cajas exploradoras mensuales.

**Problema que resuelve:** Conecta directamente al consumidor final con caficultores artesanales de especialidad (+85 puntos SCAA), ofreciendo transparencia de origen, recomendación personalizada de perfil según el gusto del usuario y una experiencia de compra intuitiva.

---

## 📱 2. Vista Previa (Móvil y Escritorio)

- **Escritorio:** Diseño fluido a tres y cuatro columnas con carrusel interactivo, carrito lateral desplegable (Drawer) y navegación completa.
- **Móvil:** Menú hamburguesa emergente con animaciones CSS, grillas adaptables de 1 sola columna y soporte para gestos táctiles (*swipe*) en el carrusel de cafés destacados.

---

## 🛠️ 3. Decisiones Técnicas

### 📐 ¿Dónde usé Flexbox y dónde Grid, y por qué en cada caso?
- **Flexbox (`display: flex`)**: Lo utilicé en estructuras unidireccionales de alineación y distribución. Por ejemplo, en la barra de navegación principal (`header`), en los botones de llamada a la acción (`.hero-ctas`), en las tarjetas de pasos (`.paso`), en los ítems dentro del carrito flotante (`.cart-item`) y en los íconos de redes del pie de página. Flexbox es ideal aquí porque requería alinear elementos en una sola fila o columna respetando su tamaño contenido y espacio entre ellos.
- **CSS Grid (`display: grid`)**: Lo utilicé para las maquetaciones bidimensionales y complejas que requieren orden estructurado en columnas y filas. Específicamente, en el catálogo de productos (`.cafe-grid`), la sección de cifras estadísticas (`.cifras-grid`), las características de los métodos de extracción (`.metodo-grid`), las comparativas de la sección nosotros (`.historia-wrap`) y las columnas del footer (`.footer-top`). Grid me permitió cambiar fácilmente de 1 columna en teléfonos a 2 o 4 columnas en pantallas anchas usando `@media` queries sin alterar el HTML.

---

### ⚡ ¿Qué hace mi JavaScript y cómo funciona la validación?
El código JavaScript (`assets/js/script.js`) gestiona toda la interactividad dinámica sin librerías externas:
1. **Renderizado Dinámico y Carrito (`localStorage`)**: El catálogo de productos y los métodos de preparación se leen desde arreglos de objetos en JS y se inyectan en el DOM. El carrito de compras guarda el estado en `localStorage` para que los productos no se borren al recargar la página.
2. **Filtros de Catálogo & Carrusel Interactivo**: Permite filtrar cafés por categoría (Cafés, Accesorios, Suscripciones) mediante eventos de clic. En la página de inicio, el carrusel cuenta con cambio automático de diapositivas (autoplay), pausa al pasar el ratón (*hover*) y soporte táctil (*swipe*) para móviles.
3. **Menú Hamburguesa y Modal Carrito**: Abre y cierra el menú responsivo y el panel del carrito lateral cambiando clases CSS (`.open`) y atributos de accesibilidad (`aria-expanded`).
4. **Validación del Formulario**: En la página de Sommelier (`descubre.html`), el formulario valida en tiempo real con eventos `input` y `submit`. Comprueba que los campos no estén vacíos, que el nombre tenga al menos 3 caracteres y que el correo cumpla con una expresión regular (Regex) estándar. Si hay errores, se despliegan mensajes explicativos directamente debajo de cada campo (sin usar la alerta del navegador `alert()`), impidiendo el envío hasta que la información sea correcta.

---

### 🤖 Uso de Inteligencia Artificial
Utilicé la IA como un **tutor y asistente de maquetación**. Le pedí orientación sobre buenas prácticas de CSS moderno (variables CSS y unidades relativas como `clamp()` para tipografía responsiva) y ayuda para depurar la lógica de eventos táctiles (`touchstart` y `touchend`) en el carrusel.  
**¿Qué cambié yo del resultado?** Ajusté manualmente toda la paleta de colores (`:root` con tonos orgánicos como café oscuro, crema y oliva), personalicé los contenidos y descripciones reales de los lotes de café colombianos, reestructuré la maquetación semántica del HTML y organicé las tarjetas de pasos en la sección de selección para asegurar un acabado único.

---

### 🎯 Lo más difícil y cómo lo resolví
Lo más desafiante fue implementar el **carrusel de cafés destacados con autoplay responsivo y gestos táctiles (swipe) en móviles** manteniendo al mismo tiempo el estado sincronizado del carrito en `localStorage`.  
Lo resolví dividiendo la lógica en funciones independientes (`goToSlide`, `startAutoplay`, `stopAutoplay`), escuchando los eventos de toque `touchstart` y `touchend` para calcular la diferencia de desplazamiento en el eje X (`diffX`), y asegurando que las funciones globales de actualización del carrito invocaran el renderizado sin reiniciar el temporizador del carrusel.

---

## 📂 Estructura de Archivos

- `index.html` — Página de bienvenida con hero, manifiesto, datos clave y carrusel interactivo.
- `catalogo.html` — Tienda completa con filtros dinámicos por categoría y botón de compra.
- `nosotros.html` — Manifiesto de origen, testimonios y criterio de selección en 4 pasos.
- `descubre.html` — Test sommelier interactivo con validación de formulario en tiempo real.
- `assets/css/style.css` — Sistema de diseño propio con CSS variables, Flexbox y Grid.
- `assets/js/script.js` — Lógica de catálogo, carrusel, carrito en `localStorage`, menú responsivo y validación.
