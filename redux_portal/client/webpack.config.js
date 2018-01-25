const path              = require('path');

module.exports = {

  // the entry file for the bundle
  entry: path.join(__dirname, '/src/app.jsx'),

  // the bundle file we will get in the result
  output: {
    path: path.join(__dirname, '../web/js'),
    filename: 'app.js',
  },
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    inline: true,
    publicPath: "/",
    contentBase: "../web",
 },
  module: {

    // apply loaders to files that meet given conditions
    loaders: [
      // Load JSX
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        include: path.join(__dirname, '/src'),
        loader: 'babel-loader',
        query: {
          presets: ["react", "es2015"]
        }
      },      
      // Load JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.join(__dirname, '/src'),
        loader: 'babel-loader',
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]

  },

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true,
  //Esto permite usar el debugger desde el navegador para ver el component y no el bundle
  devtool: 'cheap-module-eval-source-map'
}