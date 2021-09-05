const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack-base.config');

module.exports = merge(baseConfig, {
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory:  path.join(__dirname, '../src/static'),
    },
    compress: true,
    port: 5000
  },
});
