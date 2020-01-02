const webpack = require('webpack')
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const pkg = require('../package.json');

const markdown = require('./md-loader/render')

const vueLoaderOptions = {
  loaders: {
    js: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          plugins: ['transform-vue-jsx', 'transform-object-rest-spread'],
        },
      },
    ],
  },
};
module.exports = {
  bail: true,
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          { loader: 'vue-loader', },
          { loader: './build/md-loader', options: markdown },
          { loader: 'kui-loader', options: { prefix: false } }
        ]
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: vueLoaderOptions
          // options: {
          //   loaders: {
          //     css: 'vue-style-loader!css-loader',
          //     less: 'vue-style-loader!css-loader!less-loader'
          //   },
          // }
        },
        { loader: 'kui-loader', options: { prefix: false } }
        ]
      },
      {
        test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: { limit: 8192, name: 'img/[name].[ext]?[hash:7]', esModule: false }
      },
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.vue', '.json', '.less', '.md'],
    alias: {
      'vue': 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, '../'),
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.BannerPlugin(`${pkg.name} v${pkg.version} 
Copyright 2017-present, kui-vue.
All rights reserved.
        `),],
}