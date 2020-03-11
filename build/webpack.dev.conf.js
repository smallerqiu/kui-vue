/**
 * by chuchur /chuchur@qq.com
 * 打包vue 组件
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf.js');
// const webpack = require('webpack')


module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devServer: {
    contentBase: '/',
    inline: true,
    compress: true,
    port: 7005,
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    historyApiFallback: true,
  },
  entry: {
    index: ['./docs/main.js'],
    vendors: ['vue', 'vue-router']
  },
  output: {
    path: path.resolve(__dirname, 'docs/dist'),
    filename: '[name].[hash:5].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: false } },
          { loader: 'less-loader', options: { sourceMap: false, javascriptEnabled: true } }
        ],
      },
    ]
  },
  performance: {
    hints: false,
  },
  devtool: '#source-map',
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './docs/assets/favicon.png',
      filename: 'index.html',
      template: './docs/index.html',
      chunks: ['vendors', 'index'],
      inject: true,
    }),
  ]
})
