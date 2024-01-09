/**
 * by chuchur /chuchur@qq.com
 * 打包vue 组件
 */
// const ExtractTextPlugin = require('extract-text-webpack-plugin')//for webpack 3
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //for webpack 4
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //for webpack 4
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // use CssMinimizerPlugin
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); //for webpack 5

// const WebpackBar = require('webpackbar')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')



module.exports = {
  mode: 'production',
  stats: {
    children: false,
  },
  entry: {
    index: ['./src/main.js'],
    vendors: ['vue', 'vue-router']
  },
  output: {
    path: path.resolve(__dirname, '../docs'),
    filename: 'js/[name].[hash:5].js',
    publicPath: '/',
    chunkFilename: 'js/[name].[chunkhash:5].js',
  },
  performance: {
    hints: false
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
      // new UglifyJsPlugin({
      //   uglifyOptions: {
      //     cache: true,
      //     parallel: true,
      //     sourceMap: true,
      //     uglifyOptions: {
      //       warnings: false,
      //     },
      //   }
      // }),
      new TerserPlugin({
        // cache: true,
        // parallel: true,
        // sourceMap: true,
        // terserOptions: {
        //   output: {
        //     // comments: /kui-vue/i,
        //   },
        // },
        extractComments: false,
      }),
      new CssMinimizerPlugin()
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
    // new WebpackBar({
    //   name: '🚗  K UI a vue components',
    //   color: 'green',
    // }),
    new MiniCssExtractPlugin({ filename: "css/[name].[contenthash:5].css" }),
    // new MiniCssExtractPlugin({ filename: "css/style.css" }),
    new HtmlWebpackPlugin({
      favicon: './public/favicon.png',
      filename: 'index.html',
      template: './public/index.html',
      chunks: ['vendors', 'index'],
      title:'KUI 一套基于Vue.js的桌面UI组件库',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        minifyJS: true,
        minifyCSS: true
      },
    }),
    new CleanWebpackPlugin()
  ],
}