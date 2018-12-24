'use strict';

const postcss = require('postcss');
const preset = require('./../lib/index.js');

test('should not contain invalid rules', async () => {
  const processor = postcss([preset]);
  const result = await processor.process('@media (width >= 768px) {}\n', { from: 'foo/bar.css' });
  expect(result).toBeTruthy();
  expect(result.css).toBe('@media (min-width: 768px) {}\n');
});
