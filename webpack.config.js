var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
   template: __dirname + '/app/index.html',
   filename: 'index.html',
   inject: 'body'
});

module.exports = {
   entry: [
      './app/index.js'
   ],
   output: {
      path: __dirname + '/dist',
      filename: "index_bundle.js"
   },
   devServer: {
      inline: true,
      proxy: {
         '*': 'http://localhost'
      }
   },
   module: {
      loaders: [
         {  test: /\.js$/, 
            loader: "babel-loader",
            exclude: /node_modules/, 
            query: { presets: ['react', 'es2015', 'stage-0'],
                     plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'] } 
         },
         { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
         { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!scss-loader") }
      ]
   },
   plugins: [
      HtmlWebpackPluginConfig, 
      new ExtractTextPlugin("styles.css"),
      new webpack.DefinePlugin({
         "process.env": { 
            NODE_ENV: JSON.stringify("production") 
         }
      })
   ]
};