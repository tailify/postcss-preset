'use strict';

const postcss = require('postcss');
const presetEnv = require('postcss-preset-env');

module.exports = postcss.plugin('@tailify/postcss-preset', () => (root, result) => {
  result.processor.use(presetEnv({ stage: false }));
});
