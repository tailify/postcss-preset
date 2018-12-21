'use strict';

const postcss = require('postcss');
const preset = require('./../lib/index.js');

it('should not contain invalid rules', () => {
  return postcss([preset])
    .process('@media (width >= 768px) {}\n', { from: 'foo/bar.css' })
    .then(result => {
      expect(result).toBeTruthy();
      expect(result.css).toBe('@media (min-width: 768px) {}\n');
    });
});
