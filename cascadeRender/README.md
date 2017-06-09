# Ejemplo para probar Render en cascada.

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
Este ejemplo es para probar el renderizado en cascada en ReactJS y obtener conclusiones sobre esto.

## Conclusiones:
1) React ejecuta el metodo render de todos los componentes.
2) El constructor de los componentes se ejecuta una sola vez.
