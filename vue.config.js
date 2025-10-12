const { defineConfig } = require('@vue/cli-service');
// import defineConfig from '@vue/cli-service'
// import {BannerPlugin} from 'webpack'
// const BannerPlugin = require('webpack').BannerPlugin
// const config = require('@vue/cli-service/lib/commands/build/resolveLibConfig.js')
const webpack = require('webpack');
let { NODE_ENV, npm_package_version, npm_package_name, npm_lifecycle_event } = process.env
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // no check
  productionSourceMap: false, //no .map
  configureWebpack: {
    // resolve: {
    //   alias: {
    //     '@': '/src',
    //     'kui-vue': '/components',
    //   }
    // }
  },
  chainWebpack: (config) => {
    const isProduction = NODE_ENV === 'production';
    config.optimization.runtimeChunk = 'single'
    if (!isProduction || npm_lifecycle_event == 'build:docs') {
      config.module.rule('md')
        .use('vue-loader')
        .loader('vue-loader')
        .end()
        .test(/\.md$/)
        .use('md-loader')
        .loader('./src/utils/md-loader')
        .options()
        .end()
        .use('kui-loader')
        .loader('kui-loader')
        .options({ prefix: false })
        .end()
    }

    // banner
    config.plugin('banner').use(webpack.BannerPlugin, [{
      banner: `${npm_package_name} v${npm_package_version}\nCopyright 2017-present, kui-vue.\nAll rights reserved.\nAuthor: Qiu / www.chuchur.com`,
      raw: false,
      entryOnly: !isProduction
    }]);
    // build lang
    if (npm_lifecycle_event == 'build:lib') {
      config.output
        .filename('k-ui')
        .library('kui')
        .libraryExport('default')
        .libraryTarget('umd') //--formats
        .umdNamedDefine(true)
        .globalObject('this')
      config.plugins.delete('demo-html')
    } else if (npm_lifecycle_event == 'build:lang') {
      config.plugins.delete('html')
      /**
       * to build mult lib ?
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
        .library("kui_lang_[name]")
        .libraryTarget("assign") //assign-properties
        .umdNamedDefine(true)
    } else {
      config.resolve.alias
        .set('@', '/src')
        .set('kui-vue', '/components')
    }
  },
})
