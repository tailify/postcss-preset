'use strict';

const postcss = require('postcss');
const preset = require('./../lib');

it('should not contain invalid rules', () => {
  return postcss([preset])
    .process('a { font-weight: 500; }\n', { from: 'foo/bar.css' })
    .then(result => {
      expect(result).toBeTruthy();
      expect(result.css).toBe('a { font-weight: 500; }\n');
    });
});
