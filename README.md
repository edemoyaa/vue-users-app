# Vue Users App

https://vue-users-app-brm.netlify.app/
Una SPA desarrollada en Vue 3 con Vuetify que consume la API de JSONPlaceholder para mostrar un listado de usuarios con búsqueda en tiempo real y detalles en un modal.

## Características
- **Listado de usuarios**: Muestra avatar (generado dinámicamente), nombre completo, correo electrónico y un botón "Ver más".
- **Modal de detalles**: Incluye dirección completa (calle, suite, ciudad, código postal), teléfono, compañía y sitio web con enlace funcional.
- **Búsqueda en tiempo real**: Filtra usuarios por nombre mientras se escribe.
- **Diseño responsive**: Utiliza el sistema de grid de Vuetify para adaptarse a móviles (1 columna), tablets (2 columnas) y escritorios (3 columnas).
- **Indicador de carga**: Muestra un círculo de progreso mientras se cargan los datos.
- **Manejo de errores**: Muestra mensajes amigables en caso de fallos en la API.
- **Animaciones**: Transición suave en la aparición del modal con `dialog-bottom-transition`.
- **Servicio separado**: Lógica de API encapsulada en `services/api.js` para mejor organización.
- **Íconos visuales**: Uso de Material Design Icons para mejorar la experiencia en el modal.
- **Limitación actual**: Muestra solo 10 usuarios debido a la restricción de la API de JSONPlaceholder; se puede simular más datos si se desea.

## Tecnologías
- **Vue 3**: Uso de la Composition API para modularidad y flexibilidad.
- **Vuetify 3**: Framework de componentes UI y sistema de grid responsive.
- **Axios**: Biblioteca para manejar peticiones HTTP a la API.
- **SASS**: Preprocesador de CSS para estilos personalizados.
- **Material Design Icons**: Íconos para una mejor presentación visual.
- **API**: https://jsonplaceholder.typicode.com/users (proporciona 10 usuarios de ejemplo).

## Instalación
```bash
git clone https://github.com/tu-usuario/vue-users-app.git
cd vue-users-app
npm install
npm run dev

¡Bienvenidos a Vue Users App! Disfruta explorando este proyecto y siéntete libre de contribuir.
