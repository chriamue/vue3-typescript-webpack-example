const path = require('path');
const webpack = require('webpack');

const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/app.ts'),
    lib: path.resolve(__dirname, '../src/lib.ts'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          },
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: [
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    alias: {
      vue: "@vue/runtime-dom",
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [

    new VueLoaderPlugin(),
    new webpack.optimize.SplitChunksPlugin({
      name: 'vendor',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
};
