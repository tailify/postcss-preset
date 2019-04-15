'use strict';

const postcss = require('postcss');
const postcssrc = require('postcss-load-config');

const source = `
@media (width >= 768px) {
  body {
    background-color: red;
  }
}
`;

test('should not contain invalid rules', async () => {
  const config = await postcssrc({}, './lib', { configPath: './lib/index.js' });
  const processor = postcss(config);

  const result = await processor.process(source, { from: 'foo/bar.css' });
  expect(result.css).toMatchSnapshot();
});

test('should minify when building for production', async () => {
  const config = await postcssrc({ env: 'production' }, './lib', { configPath: './lib/index.js' });
  const processor = postcss(config);

  const result = await processor.process(source, { from: 'foo/bar.css' });
  expect(result.css).toMatchSnapshot();
});
