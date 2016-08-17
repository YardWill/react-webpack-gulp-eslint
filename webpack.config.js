//webpack.config.js
var webpack = require('webpack');
var path = require('path');

module.exports = {
  resolve: {
    modulesDirectories: ["bower_components"]
  },
  entry: {
    // demo: "./src/entry/demo.js",
    entry: "./src/js/app/index.jsx",
  },
  output: {
    path: path.join(__dirname, '/bundle/js'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel?presets[]=es2015&presets[]=react',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify("production") }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}