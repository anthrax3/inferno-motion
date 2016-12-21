'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

var webpack = require('webpack');
var path = require('path');

var config = {
  devtool: 'sourcemap',
  entry: {
    index: './src/inferno-motion.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: 'build/',
    filename: 'inferno-motion.js',
    library: 'Inferno.Motion',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)/,
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: {
      'inferno': {
        root: 'Inferno',
        commonjs2: 'inferno',
        commonjs: ['inferno', 'inferno-component', 'inferno-create-class'],
        amd: 'inferno'
      },
    }
};

module.exports = config;
