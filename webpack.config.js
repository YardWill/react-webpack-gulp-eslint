//webpack.config.js
var webpack = require('webpack');
var path = require('path');

module.exports = {
  resolve: {
    modulesDirectories: ["node_modules"]
  },
  entry: {
    index: "./src/js/app/index.jsx",
    common: ['react','react-dom'],
  },
  output: {
    path: path.join(__dirname, '/dist/js'),
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
    new webpack.optimize.CommonsChunkPlugin('common',  'common.js'),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify("production") }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ]
}