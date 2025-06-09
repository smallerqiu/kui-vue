// webpack.config.js
const path = require('path')

module.exports = {
  mode: 'production',
  entry: './components/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'k-ui.js',
    library: {
      name: 'KuiVue',
      type: 'umd'
    },
    globalObject: 'this',
    clean: true
  },
  externals: {
    vue: 'Vue'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
}