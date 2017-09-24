const webpack           = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path              = require('path');

module.exports = {
      entry   : path.join(__dirname, '/src/app.jsx'),
      output  : {
      path    : path.join(__dirname, '../web/js'),
      filename: 'app.js',
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.DefinePlugin({'process.env': {'NODE_ENV': "'production'"}}),
        new CopyWebpackPlugin([
            {from:'src/assets/img',to:path.join(__dirname, '../web/img')}
        ])        
    ],  
    externals: undefined,
    resolve: {
        extensions: ['', '.js', '.json']
    },
    module: {
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
          },
		  // @Todo: ver como ubicar el main.css dentro de /web/css por el momento se guarda dentro de /web/js.
          //CSS
          {
            test  : /\.css/, 
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
          },
          //LESS
          {
            test  : /\.less$/, 
            loader:  ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
          },
          //JSON
          {
            test  : /\.json$/, 
            loader: 'json'
          },
          //IMG: se guardan dentro de /web/img/
          {
            test: /\.(jpe?g|png|gif|svg|jpg)$/i,
            exclude: /node_modules/,
            include: path.join(__dirname, '/src/assets/img'),
            loader: "file?name=[path][name].[ext]&context=./img"
          },
          //FONTS
          {
            test  : /\.eot|\.ttf|\.svg|\.woff2?/, 
            loader: 'file?name=[name].[ext]'
          }
        ]
    },
  watch:true,   
  devtool: 'cheap-module-eval-source-map'
};