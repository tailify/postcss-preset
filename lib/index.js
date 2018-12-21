'use strict';

const postcss = require('postcss');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = postcss.plugin('@tailify/postcss-preset', () => (root, result) => {
  const { processor } = result;

  processor.use(require('postcss-preset-env')({
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

  if (!isDevelopment) {
    processor.use(require('cssnano'));
  }
});
