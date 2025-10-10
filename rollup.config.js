import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/k-ui.esm.js',
      format: 'es',
    },
    {
      file: 'dist/k-ui.cjs.js',
      format: 'cjs',
      exports: 'auto'
    },
    {
      file: 'dist/k-ui.umd.js',
      format: 'umd',
      name: 'kui',
      globals: {
        vue: 'Vue',
      },
    },
  ],
  external: ['vue'],
  plugins: [
    vue({ css: true }),
    babel({
      exclude: 'node_modules/**',
      presets: [
        ['@babel/preset-env', { modules: false }],
        ['@vue/babel-preset-jsx']
      ]
    }),
    terser(),
  ],
}