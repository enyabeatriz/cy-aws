## Precondiciones para la Ejecución de Pruebas:

Antes de ejecutar las pruebas, es crucial tener configurado un usuario en Amazon.com con los datos necesarios para el proceso de checkout, como la dirección de envío y la información de la tarjeta de crédito. Esto es debido a que, por cuestiones de tiempo, no se han implementado pasos automáticos para configurar estos escenarios dentro de las pruebas.

## Configuración de Credenciales:

Es necesario colocar credenciales válidas en el archivo fixtures/aws_login.js. Este archivo debe contener el nombre de usuario y contraseña que se utilizarán para iniciar sesión en el sitio durante las pruebas. Asegúrate de que estas credenciales sean correctas y estén actualizadas para evitar fallos en las pruebas debido a problemas de autenticación.

## Estructura de Directorios:

cypress: Contiene todos los archivos relacionados con las pruebas de Cypress.
cucumber-json: Directorio para los archivos JSON generados por los tests.
e2e: Pruebas end-to-end que simulan el comportamiento del usuario.
add_to_cart: Pruebas relacionadas con añadir productos al carrito.
load_site: Pruebas que verifican la carga correcta del sitio web.
make_payment: Pruebas para el proceso de pago.
search_product: Pruebas de búsqueda de productos.
fixtures: Archivos estáticos utilizados en las pruebas.
pages: Clases que representan las páginas del sitio web para facilitar la interacción en las pruebas.
reports: Carpeta destinada para los informes generados.
screenshots: Capturas de pantalla guardadas automáticamente cuando una prueba falla.
support: Funciones de soporte y configuraciones globales.

## Paquetes Utilizados:

cypress: Framework principal para ejecutar las pruebas.
cucumber: Usado para definir pruebas en un formato de Gherkin, permitiendo que sean más legibles y funcionen como documentación.
cucumber-html-report: Utilizado para generar informes en formato HTML de los resultados de las pruebas.
Generación de Reportes:

## Generar reporte
Para generar un informe en formato HTML después de ejecutar las pruebas, ejecuta node cucumber-html-report.js. Este comando procesará los archivos JSON generados por las pruebas y creará un informe HTML en el directorio de informes.

## Capturas de Pantalla en Fallas:

Si una prueba falla durante su ejecución, Cypress automáticamente tomará una captura de pantalla y la guardará en la carpeta screenshots. Esto ayuda a diagnosticar el problema visualizando el estado final de la aplicación en el momento de la falla.

## Ejecución de pruebas:

Para ejecutar los casos de prueba con Cypress, utiliza el comando cypress run desde la línea de comandos. Esto ejecutará todos los tests en modo headless (sin interfaz gráfica).

## Notas Adicionales:

Asegúrate de tener todas las dependencias necesarias instaladas antes de ejecutar las pruebas. Esto se puede verificar y corregir con npm install.
Para ver las pruebas en acción, puedes usar cypress open para abrir la interfaz gráfica y ejecutar pruebas de manera interactiva.