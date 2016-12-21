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
    library: 'Inferno.Motion',
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
    'inferno': {
      root: 'Inferno',
      commonjs2: 'inferno',
      commonjs: 'inferno',
      amd: 'inferno'
    },
    'inferno-component': {
      root: 'Inferno.Component',
      commonjs2: 'inferno-component',
      commonjs: 'inferno-component',
      amd: 'inferno-component'
    },
    'inferno-create-class': {
      root: 'Inferno.createClass',
      commonjs2: 'inferno-create-class',
      commonjs: 'inferno-create-class',
      amd: 'inferno-create-class'
    }
  }

};

module.exports = config;
