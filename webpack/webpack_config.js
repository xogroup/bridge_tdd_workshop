const _merge = require('lodash').merge;
const baseConfig = require('./webpack_config_base.js');

const config = _merge(baseConfig, require('./webpack_config_dev.js'));

module.exports = config;
