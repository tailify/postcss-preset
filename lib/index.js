'use strict';

const postcss = require('postcss');
const presetEnv = require('postcss-preset-env');

module.exports = postcss.plugin('@tailify/postcss-preset', () => (root, result) => {
  result.processor.use(presetEnv({
    features: {
      'all-property': true,
      'break-properties': true,
      'custom-properties': true,
      'font-variant-property': true,
      'gap-properties': true,
      'grid-layout': true,
      'media-query-ranges': true,
    },
    stage: false,
  }));
});
