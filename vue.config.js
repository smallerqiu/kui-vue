const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': '/src',
        'kui-vue': '/components',
      }
    }
  },
  chainWebpack: (config) => {
    config.optimization.runtimeChunk = 'single'
    config.module.rule('md')
    .use('vue-loader')
        .loader('vue-loader')
        .end()
    .test(/\.md$/)
    .use('md-loader')
    .loader('./src/utils/md-loader')
    .options()
    .end()
  }
})
