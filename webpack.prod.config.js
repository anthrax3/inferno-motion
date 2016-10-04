'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

var webpack = require('webpack');
var path = require('path');

// currently, this is for bower
var config = {
  devtool: 'sourcemap',
  entry: {
    index: './src/inferno-motion.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: 'build/',
    filename: 'inferno-motion.js',
    sourceMapFilename: 'inferno-motion.map',
    library: 'InfernoMotion',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)/,
      loader: 'babel'
    }]
  },
  plugins: [],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  externals: {
    'react': {
      root: 'Inferno',
      commonjs2: 'inferno',
      commonjs: 'inferno',
      amd: 'inferno'
    }
  },
};

module.exports = config;
