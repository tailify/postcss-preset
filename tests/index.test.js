'use strict';

const postcss = require('postcss');
const processor = postcss([require('./../lib/index.js')]);

const source = '@media (width >= 768px) {}\n';

test('should not contain invalid rules', async () => {
  const result = await processor.process(source, { from: 'foo/bar.css' });
  expect(result).toBeTruthy();
  expect(result.css).toMatchSnapshot();
});
