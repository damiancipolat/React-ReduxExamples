# Scaffolding REACTJS para Windows

Ejemplo usando Webpack, babel, css-loader y less-loader para trabar en un entorno con windows y póder transpilar archivos .less a .css.
Actualmente este escenario no suele causar dificultades en entornos Linux pero en Windows si presenta dificultades, en esta directorio
se encuentra una solución ya revisada para hacer transpilar .less en windows.

Adicionalmente agregamos a webpack los plugins:
ExtractTextPlugin: para procesar archivos .less
CopyWebpackPlugin: para hacer copia de un directorio de carpetas con imagenes.

### Instalación:

Para descargar todos los modulos adicionales:
```sh
$ npm install
```
Los archivos con codigo fuente estan dentro de la carpeta ./src/

Para transpilar toda la aplicación:
```sh
$ npm run bundle
```


