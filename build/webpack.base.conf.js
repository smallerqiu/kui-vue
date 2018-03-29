const ExtractTextPlugin = require('extract-text-webpack-plugin')
const pkg = require('../package.json');
const webpack = require('webpack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',
        /* query: {
          presets: ['es2015', 'stage-3'],
          plugins: ['transform-runtime']
        } */
      },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'autoprefixer-loader']
      },
      {
        test: /\.less$/,
        // use: ['style-loader', 'css-loader', 'less-loader'],
        use: ExtractTextPlugin.extract({ fallback: "style-loader", use: [{ loader: "css-loader" }, { loader: "less-loader" },], }),
        exclude: /node_modules/
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
    plugins: [
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.DefinePlugin({
        'process.env.VERSION': `'${pkg.version}'`
      }),
    ]
  }
}