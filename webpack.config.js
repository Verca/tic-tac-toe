/*eslint no-var: 0 */

var webpack = require('webpack');
var CircularDependencyPlugin = require('circular-dependency-plugin');
var path = require('path');
var glob = require('glob');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './js/applicationSettings/app.jsx', './assets/globalStyles/index.less'],
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
    // extract CSS into separate file
    new ExtractTextPlugin('app.bundle.global.css')
  ],
  resolve: {
    extensions: ['', '.jsx', '.js'],
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'js', 'modules')],
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader']
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      // {
      //   test: /\.jsx?$/,
      //   exclude: /node_modules/,
      //   loaders: ['babel-loader', 'eslint-loader']
      // },
      {
        test: /\.less$/,
        include: [path.resolve(__dirname, 'assets'), path.resolve(__dirname, 'dist')],
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader'),
      },
      {
        test: /\.less$/,
        include: [path.resolve(__dirname, 'js', 'modules')],
        loader: 'style-loader!css-loader?modules&importLoaders=2&sourceMap&localIdentName=[path][name]---[local]---[hash:base64:5]!less-loader'
      },
      { test: /\.css$/, loader: 'style-loader!css-loader?modules' },
      { test: /\.png$/, loader: 'url-loader?mimetype=image/png' }
    ],
  },
};
