const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack');
const path = require('path');
let { NODE_ENV, npm_package_version, npm_package_name, npm_lifecycle_event } = process.env

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // no check
  productionSourceMap: false, //no .map
  configureWebpack: {
    // optimization: {
    //   splitChunks: true,
    // },
    // externals: {
    // 'lodash': {
    //   commonjs: 'lodash',
    //   amd: 'lodash',
    //   root: '_'
    // }
    // },
    // pages: {

    // },
    // plugins: [
    // new webpack.optimize.LimitChunkCountPlugin({
    //   maxChunks: 5,
    // }),
    //   new MiniCssExtractPlugin({ filename: 'k-ui.css' }),
    // ],
    // entry: {
    // }
    resolve: {
      alias: {
        '@': '/src',
        'kui-vue': '/components',
      }
    }
  },
  chainWebpack: (config) => {

    config.module.rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('md-loader')
      .loader('./src/utils/md-loader')
      .options()
      .end()
      .use('kui-loader')
      .loader('kui-loader')
      .options({ prefix: false })
      .end()

    const isProduction = NODE_ENV === 'production';
    // banner
    config.plugin('banner').use(webpack.BannerPlugin, [{
      banner: `${npm_package_name} v${npm_package_version}\nCopyright 2017-present, kui-vue.\nAll rights reserved.\nAuthor: chuchur@qq.com / www.chuchur.com`,
      raw: false,
      entryOnly: !isProduction
    }]);
    // buid lang
    if (npm_lifecycle_event == 'buildlib') {
      // config.entryPoints.delete('app')
      // config.optimization.splitChunks(false);

      config.entryPoints.clear();
      config.entry('k-ui').add(`./components/bin/index.js`).end()
      config.output.library('kui')
        .filename("k-ui.js")
        .libraryExport('default')
        .libraryTarget('umd') //--formats
        .umdNamedDefine(true)
        .globalObject('this')
      config.plugins.delete('demo-html')
    } else if (npm_lifecycle_event == 'buildlang') {
      /**
       * fuck ,why can't build mult lib ?
       * at \@vue\cli-service\lib\commands\build\resolveLibConfig.js
       * remove line 113 - 115 at :rawConfig.entry = { ... }
       * remove line 120 at: libraryTarget: format,
       * remove line 127 at:filename: `${entryName}.js`,
       *  */

      config.entryPoints.clear();
      ['de', 'el', 'en', 'fr', 'it', 'ja', 'ko', 'ru', 'th', 'ua', 'vi', 'zh-CN', 'zh-TW'].forEach(lang => {
        config.entry(lang.replace('-', '')).add(`./components/locale/lang/${lang}.js`).end()
      });
      config.output
        // .filename("[name].js")
        .library("kui_lang_[name]")
        .libraryTarget("assign") //assign-properties
        .umdNamedDefine(true)
    } else {
      // config.resolve.alias
      //   .set('@', '/src')
      //   .set('kui-vue', '/components')
    }
  },
})
