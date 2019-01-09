const path = require('path');

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
      { test: /\.s(a|c)ss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.styl(us)?$/, use: ['style-loader', 'css-loader', 'stylus-loader'] },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', /* 'postcss-loader' */]
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
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
      '@': path.resolve(__dirname, '../src'),
    },
  }
}