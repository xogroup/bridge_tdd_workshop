const path = require('path');
const webpack = require("webpack");
const helpers = require('./loader_helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const findAllVendorLibs = () => {
  return Object.keys(require('../package.json').dependencies);
};

const constructEntry = Object.assign(
  {},
  { vendor: findAllVendorLibs() },
  { index: path.resolve('./client/index.js') }
);

module.exports = {
  context: path.resolve('client'),
  entry: constructEntry,
  output: {
    path: path.resolve('./dist/assets'),
    filename: '[name]_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        include: /client/,
        exclude: /(node_modules|coverage)/,
        use: [
          'underscore-template-loader'
        ],
      },
      {
        test: /\.(js|jsx)$/,
        include: /client/,
        exclude: /(node_modules|coverage)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ["es2015", "react"]
            }
          },
        ],
      }
    ].concat(helpers.rules()),
  },
  plugins: helpers.pluginsLoaders().concat([
    new HtmlWebpackPlugin({
      template: '../client/html/index.ejs',
      filename: '../index.html',
      minify: {
        removeComments: true,
        removeScriptTypeAttributes: true,
        preserveLineBreaks: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true
      }
    })
  ]),
  resolve: {
    alias: {
      client: path.resolve('./client'),
      components: path.resolve('./client/components')
    },
    extensions: [
      '.js',
      '.jsx',
      '.json'
    ]
  },
};
