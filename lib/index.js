'use strict';

const postcss = require('postcss');

module.exports = postcss.plugin('@tailify/postcss-preset', () => {
  return () => {};
});
