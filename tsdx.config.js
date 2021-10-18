/* eslint-disable import/no-extraneous-dependencies */
const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const images = require('@rollup/plugin-image');

module.exports = {
  rollup(config) {
    config.plugins.push(
      postcss({
        modules: true,
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        sourceMap: true,
        inject: true,
        extract: false,
      }),
    );
    config.plugins.unshift(
      images({ include: ['**/*.png', '**/*.jpg', '**/*.svg'] }),
    );
    return config;
  },
};
