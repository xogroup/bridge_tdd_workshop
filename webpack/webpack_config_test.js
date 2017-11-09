const devConfig = require('./webpack_config_dev.js');

const config = Object.create(devConfig);

config.module.rules = [
  {
    test: /\.(scss|sass|css)$/,
    exclude: /(node_modules|coverage)/,
    use: [
      'ignore-loader'
    ]
  },
  {
    test: /\.js$/,
    include: /client/,
    exclude: /(node_modules|coverage)/,
    loader: 'istanbul-instrumenter-loader'
  },
  {
    test: /\.(js|jsx)$/,
    include: /support/,
    exclude: /(setup_test_scripts)/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ["es2015", "react"]
        }
      },
    ],
  }
].concat(config.module.rules);

module.exports = config;
