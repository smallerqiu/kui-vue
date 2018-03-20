/**
 * by chuchur /chuchur@qq.com
 * 打包vue 组件
 */
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path');
const pkg = require('../package.json');
const webpackBaseConfig = require('./webpack.base.conf.js');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(webpackBaseConfig, {
  entry: {
    index: ['./dos/main.js'],
    // index: path.resolve(__dirname, '../dos/main.js'),
    // vendors: ['vue', 'vue-router']
  },
  output: {
    path: path.resolve(__dirname, '../dos-html'),
    filename: 'js/[name].[hash:5].js',
    publicPath: '/',
    chunkFilename: 'js/[name].[chunkhash:5].js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [ {
      test: /\.vue$/, 
      loader: 'vue-loader',
      exclude: /node_modules/    
  },]
  },
  /*   externals: {
       vue: {
          root: 'Vue',
          commonjs: 'vue',
          commonjs2: 'vue',
          amd: 'vue'
       }
    }, */
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
      }
    }),
    new ExtractTextPlugin("css/doc.css"),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      // 生成html文件的名字，路径和生产环境下的不同，要与修改后的publickPath相结合，否则开启服务器后页面空白
      filename: 'index.html',
      // 源文件，路径相对于本文件所在的位置
      template: path.resolve(__dirname, '../dos/index.html'),
      // 需要引入entry里面的哪几个入口，如果entry里有公共模块，记住一定要引入
      // chunks: ['index', 'vendors'],
      // 要把<script>标签插入到页面哪个标签里(body|true|head|false)
      inject: true,
      // 生成html文件的标题
      // title: 'KUI 使用文档',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      chunksSortMode: 'dependency'
      // hash如果为true，将添加hash到所有包含的脚本和css文件，对于解除cache很有用
      // minify用于压缩html文件，其中的removeComments:true用于移除html中的注释，collapseWhitespace:true用于删除空白符与换行符
    }),
    // new webpack.optimize.CommonsChunkPlugin({name:'vendor'}),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    new webpack.BannerPlugin(pkg.name + ' v' + pkg.version + ' by chuchur (c) ' + new Date().getFullYear() + ' Licensed ' + pkg.license),
    // 允许错误不打断程序
    // new webpack.NoErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ],

})