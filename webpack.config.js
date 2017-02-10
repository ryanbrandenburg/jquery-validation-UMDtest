// webpack.config.js

var webpack = require('webpack');
var path = require('path');
var libraryName = 'webpackoutput';
var outputFile = libraryName + '.js';

module.exports = {
  resolve: {
    alias: {
      "jquery.validate": "jquery-validation"
    }
  },
  entry: __dirname + '/commonjs.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd'
  }
};