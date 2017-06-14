# Ejemplo para Interacción de componentes y estado.

## Lista de usuarios

Ejemplo usando Webpack y babel.

### Instalación:

Para descargar todos los modulos adicionales:
```sh
$ npm install
```
Los archivos con codigo fuente estan dentro de la carpeta ./src/

Para transpilar toda la aplicación:
```sh
$ ./node_modules/webpack/bin/webpack.js
```
En este ejemplo uso dos componentes, los cuales ejecutan handlers enviados por un contenedor parent.

- App:   Tiene dentro de su estado una colección.
- Form: Renderiza un formulario al cual se le pasa el handle de la función de app para agregar un usuario.
- Lista:  Hay una lista que se actualiza si hay cambios en la colección, ademas tiene un handle a la funcion de app para borrar usuarios.
