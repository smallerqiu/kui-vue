/**
 * by chuchur /chuchur@qq.com
 * 打包vue 组件
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, '../docs/dist'),//'/',
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
    path: path.resolve(__dirname, '../docs/dist'),
    filename: 'js/[name].[hash:5].js',
    publicPath: '/',
    chunkFilename: 'js/[name].[chunkhash:5].js',
  },
  performance: {
    hints: false,
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      }
    }),
    new HtmlWebpackPlugin({
      favicon: './docs/assets/favicon.png',
      filename: 'index.html',
      template: './docs/assets/index.html',
      chunks: ['vendors', 'index'],
      inject: true,
    }),
  ]
}
