// const ExtractTextPlugin = require('extract-text-webpack-plugin') //for webpack 3
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //for webpack 4
const pkg = require('../package.json');
const webpack = require('webpack');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/, exclude: /node_modules/,loader: 'babel-loader',
        /* query: {
          presets: ['es2015', 'stage-3'],
          plugins: ['transform-runtime']
        } */
      },
      { test: /\.scss$/, use: ['vue-style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.sass$/, use: ['vue-style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.styl(us)?$/, use: ['vue-style-loader', 'css-loader', 'stylus-loader'] },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader']
      },

      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        query: { limit: 13000, name: 'img/[name].[ext]?[hash:7]' }
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        loader: 'file-loader',
        query: { limit: 10000, name: 'fonts/[name].[ext]?[hash:7]', prefix: 'font' }
      },
    ]
  },

  resolve: {
    extensions: ['.js', '.vue', '.json', '.less'],
    alias: {
      'vue': 'vue/dist/vue.esm.js',
    },
  }
}