  /*eslint no-var: 0 */

var webpack = require('webpack');
//var path = require('path');

//var SRC_PATH = [__dirname, 'src'];

module.exports = {
  entry: ["babel-polyfill", './js/app.jsx'],
  output: {
    path: './dist',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    /*alias: {
      constants: path.join(...SRC_PATH, 'constants')
    },*/
    extensions: ["", ".jsx", ".js"],
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    preLoaders: [
      // { test: /\.jsx$|\.js$/, exclude: /node_modules/, loader: 'eslint-loader'}
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.png$/, loader: "url-loader?mimetype=image/png" }
    ],
  }
};
