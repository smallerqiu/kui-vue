/**
 * by chuchur /chuchur@qq.com
 * 打包vue 组件
 */
// const ExtractTextPlugin = require('extract-text-webpack-plugin')//for webpack 3
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //for webpack 4
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //for webpack 4
const path = require('path');
const webpackBaseConfig = require('./webpack.base.conf.js');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const progress = require('webpack-simple-progress-plugin');

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  entry: {
    index: ['./docs/src/main.js'],
    // vendors: ['vue', 'vue-router']
  },
  output: {
    path: path.resolve(__dirname, '../docs/dist'),
    filename: 'js/[name].[hash:5].js',
    publicPath: './dist/',
    chunkFilename: 'js/[name].[chunkhash:5].js',
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        // use: ExtractTextPlugin.extract({ fallback: "style-loader", use: [{ loader: "css-loader" }, { loader: "less-loader" },], }),
        use: [
          {
            loader: MiniCssExtractPlugin.loader, options: {
              publicPath: '../'
            }
          },
          'css-loader', 'less-loader'],
      },
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: {
            loaders: {
              css: 'vue-style-loader!css-loader',
              less: 'vue-style-loader!css-loader!less-loader'
            },
            // postLoaders: { html: 'babel-loader' }
          }
        },
        {
          loader: 'kui-loader',
          options: { prefix: false }
        }]
      },]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: `chunk-vendors`,
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial',
        },
        common: {
          name: `chunk-common`,
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true,
        },
      },
    },
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          cache: true,
          parallel: true,
          sourceMap: true,
          uglifyOptions: {
            warnings: false,
          },
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new WebpackBar({
      name: '🚙  K UI a vue components',
      color: 'green',
    }),
    new MiniCssExtractPlugin({ filename: "css/[name].[contenthash:5].css" }),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: path.resolve(__dirname, '../docs/src/index.html'),
      favicon: path.join(__dirname, '../docs/src/assets/favicon.png'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
    }),
  ],
})