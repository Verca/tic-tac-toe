/*eslint no-var: 0 */

var webpack = require('webpack');
var CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
  entry: ["babel-polyfill", './js/app.jsx'],
  output: {
    path: './dist',
    filename: 'bundle.js',
  },
  plugins: [
    // new webpack.NoErrorsPlugin(),
    new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      exclude: /a\.js|node_modules/,
      // add errors to webpack instead of warnings
      failOnError: false
    }),
  ],
  resolve: {
    extensions: ["", ".jsx", ".js"],
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    // preLoaders: [
    //   {
    //     test: /\.jsx?$/,
    //     exclude: /node_modules/,
    //     loader: 'eslint-loader'
    //   },
    // ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader']
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.png$/, loader: "url-loader?mimetype=image/png" }
    ],
  }
};
