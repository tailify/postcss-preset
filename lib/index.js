'use strict';

module.exports = ({ env }) => {
  return {
    plugins: [
      require('postcss-preset-env')({
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
      }),
      env === 'production' &&
        require('cssnano')({
          preset: 'default',
        }),
    ].filter(Boolean),
  };
};
