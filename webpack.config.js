//webpack.config.js
var webpack = require('webpack');
var path = require('path');

module.exports = {
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
    //提取公共文件
    new webpack.optimize.CommonsChunkPlugin('common',  'common.js'),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify("production") }
    }),
    // 如需压缩js文件，将以下注释去掉
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}