import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
// const license = require('rollup-plugin-license');
import banner from 'postcss-banner'
import postcss from 'rollup-plugin-postcss'
import pkg from './package.json'
import autoprefixer from 'autoprefixer'
const bannerText = `/*!
 * ${pkg.name} v${pkg.version}
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: Qiu / https://chuchur.com
 */\n`

export default {
  external: ['vue', 'dayjs'],
  // input: 'components/index.js',
  input: 'components/bin/index.js',
  output: [
    {
      file: 'dist/k-ui.esm.js',
      format: 'es',
      banner: bannerText,
      exports: 'named'
    },
    {
      file: 'dist/k-ui.cjs.js',
      format: 'cjs',
      banner: bannerText,
      exports: 'named'
    },
    {
      file: 'dist/k-ui.umd.js',
      format: 'umd',
      name: 'kui',
      exports: 'named',
      banner: bannerText,
      globals: {
        vue: 'Vue',
        dayjs: 'dayjs'
      },
    },
  ],
  plugins: [
    postcss({
      extract: 'k-ui.css',
      minimize: true,
      sourceMap: false,
      use: {
        less: { javascriptEnabled: true }
      },
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['> 1%', 'not ie 11', 'not dead']
        }),
        banner({
          banner: `${pkg.name} v${pkg.version}\nCopyright 2017-present, kui-vue.\nAll rights reserved.\nAuthor: Qiu / www.chuchur.com\n`,
          important: true
        })
      ]
    }),
    // json(),
    resolve({
      extensions: ['.js', '.jsx', '.vue'],
      browser: true,
      preferBuiltins: false

    }),
    commonjs({ include: 'node_modules/**' }),
    vue({ css: true }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.vue'],
      presets: [
        ['@babel/preset-env', { modules: false }],
        ['@vue/babel-preset-jsx']
      ]
    }),
    terser(),
    // license({
    //   banner: `${pkg.name} v${pkg.version}\nCopyright 2017-present, kui-vue.\nAll rights reserved.\nAuthor: Qiu / www.chuchur.com\n`
    // }),
  ],
}