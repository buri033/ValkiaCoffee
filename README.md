# Valkia Coffee — Sitio Web del Proyecto

Enlace del proyecto publicado en Vercel:
https://valkia-coffee.vercel.app

## Imágenes del Proyecto
<img width="1900" height="942" alt="image" src="https://github.com/user-attachments/assets/4018d191-9324-49f4-8407-78271869abbe" />
<img width="1903" height="942" alt="image" src="https://github.com/user-attachments/assets/4777c952-564f-4479-9b40-7f30c54a4f22" />
<img width="1906" height="913" alt="image" src="https://github.com/user-attachments/assets/acf95a62-e76a-482d-b730-3c78e933c9a1" />
<img width="1905" height="916" alt="image" src="https://github.com/user-attachments/assets/cc78caea-96dd-4040-aed6-7e5c6afb2f6c" />
<img width="1903" height="941" alt="image" src="https://github.com/user-attachments/assets/119072c2-3a90-4a36-a900-1b00f541f6d4" />
<img width="1893" height="909" alt="image" src="https://github.com/user-attachments/assets/5b5fc8ce-12ba-447a-afab-5043e79cf48e" />
<img width="1903" height="947" alt="image" src="https://github.com/user-attachments/assets/aa25d44e-b82c-440c-9135-ed9e78974eeb" />
<img width="1898" height="938" alt="image" src="https://github.com/user-attachments/assets/a8f69d3d-bd30-4efa-bcc9-3c0bcb9ad2b2" />
<img width="397" height="947" alt="image" src="https://github.com/user-attachments/assets/0024fc68-f944-4bb6-a03e-fcb34ef20a0e" />
<img width="404" height="744" alt="image" src="https://github.com/user-attachments/assets/c4544040-89ba-4191-a3f7-eb9dd044b8e8" />
<img width="402" height="780" alt="image" src="https://github.com/user-attachments/assets/0fba971d-2638-4207-a1ed-7ae595236058" />
<img width="424" height="839" alt="image" src="https://github.com/user-attachments/assets/8e2e4301-8bb7-4eb8-96c8-438472b639c3" />
<img width="402" height="834" alt="image" src="https://github.com/user-attachments/assets/25d13853-d168-4ef1-935c-fa28ccc9ccf1" />
<img width="397" height="825" alt="image" src="https://github.com/user-attachments/assets/302e32a1-f6fd-4cbe-9e0a-7a162ea0b53d" />
<img width="401" height="830" alt="image" src="https://github.com/user-attachments/assets/98a0b8ee-80fa-4542-ace9-f23f1c5667b0" />



## Descripción del Proyecto

Valkia Coffee es un sitio web de presentación para una tienda en línea de café de especialidad colombiano. El proyecto está enfocado en amantes del café que desean comprar lotes de pequeños caficultores de regiones como Huila, Nariño, Sierra Nevada y Quindío, además de adquirir accesorios de preparación como V60 o prensas francesas y suscribirse a cajas mensuales.

El sitio resuelve la necesidad de conectar de forma directa a caficultores artesanales con clientes que buscan café de alta calidad (+85 puntos SCAA), ofreciendo información transparente sobre el origen, notas de cata y una herramienta para recomendar el café ideal según las preferencias del usuario.

## Estructura de Páginas

- index.html: Página principal con la presentación de la marca, cifras clave y un carrusel interactivo de cafés destacados.
- catalogo.html: Tienda con filtrado de productos por categoría y opción de añadir al carrito.
- nosotros.html: Historia de la marca, testimonio de caficultores y el proceso de selección en cuatro pasos.
- descubre.html: Formulario interactivo del sommelier virtual para recomendar café según los gustos del usuario.

## Decisiones Técnicas

### Flexbox vs Grid
Utilicé Flexbox en los componentes que requerían alineación en una sola dirección (horizontal o vertical). Por ejemplo, en la barra de navegación del header, en los botones de llamada a la acción, en las tarjetas de los pasos de selección, en los ítems dentro del carrito flotante y en los enlaces del footer. Flexbox me permitió controlar fácilmente el alineamiento y el espacio entre elementos de tamaño variable.

Por otro lado, utilicé CSS Grid en las estructuras bidimensionales donde necesitaba organizar el contenido en filas y columnas. Específicamente en la cuadrícula del catálogo de productos (cafe-grid), en la sección de datos estadísticos, en los métodos de extracción y en las columnas principales del footer. Usar Grid me facilitó cambiar la disposición de una sola columna en pantallas móviles a dos o cuatro columnas en escritorio usando media queries de forma muy limpia.

### Funcionamiento de JavaScript y Validación
El archivo de JavaScript (assets/js/script.js) gestiona toda la interactividad en el DOM sin utilizar librerías externas. La lógica se organiza en las siguientes funciones principales:

- Renderizado Dinámico y Catálogo: Lee la información desde un arreglo de objetos (productos y metodos) e inyecta dinámicamente el HTML en el catálogo usando el método map(). También filtra los productos por categoría al hacer clic en los botones de la tienda.
- Gestión del Carrito en localStorage: Funciones como addToCart(), removeFromCart(), updateQty() y saveCart() administran los productos seleccionados por el usuario y los guardan en el localStorage del navegador para que no se borren al recargar o cambiar de página.
- Modo Oscuro con Persistencia: Escucha el clic en el botón conmutador del header para alternar la clase dark-mode en el body del documento y guarda la preferencia del usuario (dark o light) en localStorage.
- Navegación Móvil y Modales: Maneja la apertura y cierre del menú hamburguesa en celulares y del panel lateral del carrito activando clases CSS (.open) y actualizando atributos de accesibilidad como aria-expanded.
- Carrusel Destacado e Interacción Táctil: Controla el cambio automático de diapositivas en la página de inicio (startAutoplay), pausa la transición cuando el usuario pasa el ratón por encima (mouseenter) y permite deslizar las imágenes en celulares escuchando eventos táctiles (touchstart y touchend).
- Validación del Formulario: En la página descubre.html, la función validateForm() valida los datos ingresados antes del envío. Comprueba que el nombre tenga al menos tres caracteres y que el correo cumpla con una expresión regular. Muestra los mensajes de error al lado de cada campo en tiempo real al escribir (evento input) y previene el envío (preventDefault) si la información es incorrecta, evitando el uso de alertas nativas (alert).

### Uso de Inteligencia Artificial
Usé la inteligencia artificial como apoyo para consultar conceptos de CSS responsivo, para orientarme sobre cómo implementar el modo oscuro con la clase dark-mode en el body guardando la preferencia en localStorage, y para guiarme en la detección de gestos táctiles (touchstart y touchend) en el carrusel móvil.

Del resultado que me sugirió la IA, cambié los estilos visuales para adaptarlos a la paleta de colores de mi marca (café oscuro, crema y oliva), reescribí todo el contenido para que fuera real y enfocado en el café colombiano, ajusté las proporciones y tamaños de fuente para pantallas móviles y reorganicé la estructura del HTML para que tuviera etiquetas semánticas apropiadas.

### Lo más difícil y cómo se resolvió
Lo más complicado fue lograr que el carrusel de cafés destacados fuera completamente responsivo en celulares, permitiendo deslizar las tarjetas con gestos táctiles en pantallas táctiles y manteniendo sincronizado el estado del carrito sin romper la animación automática. Lo resolví separando la lógica del carrusel en funciones cortas para controlar el cambio de diapositivas y calculando la distancia de desplazamiento en el eje X durante los eventos de toque.
