'use strict';

const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const styleLoader = (loaders) => {
  if (process.env.NODE_ENV === 'test') {
    return [{loader: 'style-loader'}].concat(loaders);
  } else {
    return ExtractTextPlugin.extract({
      fallback: [{loader: 'style-loader', options: {insertAt: 'top', singleton: false}}],
      use: loaders
    });
  }
};

const webpackHelpers = {
  rules: () => {
    return [
      {
        test: /\.(scss|sass)$/,
        include: /client/,
        exclude: /(node_modules|coverage)/,
        use: styleLoader([
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')]
            },
          },
          'sass-loader'
        ]),
      },
      {
        test: /\.css$/,
        include: /client/,
        exclude: /(node_modules|coverage)/,
        use: styleLoader([
          {
            loader: 'css-loader',
            options: {
              minimize: true,
              modules: true,
              camelCase: true,
              importLoaders: 1,
              localIdentName: '[local]${utils.packageVersion()}[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')]
            },
          },
        ]),
      },
    ];
  },
  pluginsLoaders: () => {
    let plugins = [];

    plugins.push(new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: '[name]_bundle.js',
    }));
    plugins.push(new ExtractTextPlugin("[name]_bundle.css"));

    return plugins;
  }
};

module.exports = webpackHelpers;
