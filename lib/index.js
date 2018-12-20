'use strict';

const autoprefixer = require('autoprefixer');
const postcss = require('postcss');

module.exports = postcss.plugin('@tailify/postcss-preset', () => (root, result) => {
  result.processor.use(autoprefixer);
});
