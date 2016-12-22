/*eslint no-var: 0 */

var webpack = require('webpack');

module.exports = {
  entry: ["babel-polyfill", './js/app.jsx'],
  output: {
    path: '/dist',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ["", ".jsx", ".js"],
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
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
