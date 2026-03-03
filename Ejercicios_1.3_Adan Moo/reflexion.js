/* Adan Adair Moo Noh */

/* REFLEXIÓN - EJERCICIO 1.3 MÓDULOS JS

1. ¿Cuál es la diferencia fundamental entre módulo nativo (como
'fs') y un módulo de NPM (como 'sillyname') en cuanto a su origen e instalación?

         R: la diferencia es que los 'fs' ya vienen con librerias instaladas y las 'npm'
            son librerias externas que deben instalarse en la terminal.


2. Investigando la sintaxis: ¿Qué diferencia existe entre 'require'
(CommonJS) y 'import' (ES Modules)?. Considera el momento en que se cargan los
módulos.

         R: la principal diferencia es la forma y el momento en que se cargan los modulos,
            ya que en CommonJS se cargan de forma síncrona en tiempo ejecucion, y en cuanto a 
            ES Modules se procesa de forma estática antes de que el codigo se ejecute.

            Por otra parte import es la sintaxis moderna y mas conocida en JavaScript, mientras
            que require es el sistema tradicional usado por Node.js.


3. Sobre el archivo 'package.json':

   a) ¿Por qué es vital compartir este archivo pero NO la carpeta
      'node_modules' al subir a un repositorio?

      R: es importante ya que ahi se registran todas las dependencias
         y configuraciones del proyecto, lo que permite que cualquier persona pueda
        reconstruir el entorno de manera facil y sencilla. A diferencia de ello si no
        se comparte puede pesar demasiado y sus archivos se pueden volver a generar
        automaticamente. Por eso es mas recomendable que en su lugar se comparta el archivo 
        package.json para que las dependencias se instalen nuevamente cuando sea necesario.

   b) ¿Qué sucede si ejecutas 'npm install' en una carpeta que solo
      tiene el package.json?

      R:Si se ejcuta puede que automaticamente se descarguen todas las dependencias
        especificadas en ese archivo y se cree la carpeta node_modules. Esto nos permite
        recrear completamente el entorno del proyecto sin necesidad de haber compartido
        previamente todas las librerías.