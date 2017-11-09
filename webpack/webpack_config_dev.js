const webpack = require("webpack");
const baseConfig = require('./webpack_config_base.js');

const config = Object.create(baseConfig);

config.watch = true;
config.devtool = 'inline-source-map';
config.output.publicPath = '/dist/assets/';

config.externals = {
  'react/addons': true,
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': 'window',
};

config.plugins = config.plugins.concat([
  new webpack.LoaderOptionsPlugin({
    debug: true
  })
]);

config.devServer = {
  port: 3000,
  contentBase: 'dist/',
  quiet: false,
  stats: {
    colors: true,
  },
};

module.exports = config;
