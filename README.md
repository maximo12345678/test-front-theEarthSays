------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
ORGANIZACION CARPETAS DEL PROYECTO:

data: archivos javascript donde se hace el acceso a datos necesario, funciones que retornan la informacion y se consume desde 
los componentes que sea necesario, dejando estos componentes limpios de logica y solo con jsx.

pages: los componentes que representan una pagina de una ruta, por ejemplo Home. 

images: para tener todas las imagenes del proyecto en un solo lugar.

components: todos los componentes reutilizables donde se muestran secciones de html, todas invocadas desde HOME en este caso.

styles: todos los archivos .css organizados en esta carpeta.

models: las interfaces creadas en typescript, para organizar bien todos objetos con sus tipos de datos, y en caso de agrandar el proyecto, reutilizar y no repetir codigo.

config: retorno de variables de configuracion, como por ejemplo el link de acceso a las Api.



------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Decidi usar typescript para lograr una consistencia mas solida en el tipado de los datos.
Para el backend, utilice Nodejs y el framework Express. Como base de datos, Mysql. 

---
Muchas gracias.


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

