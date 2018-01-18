const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev.conf');
//"dev": "webpack-dev-server --content-base test/ --open --inline --hot --compress --history-api-fallback --port 7001 --config build/webpack.dev.conf.js",

new WebpackDevServer(webpack(config), {
   contentBase: 'test/',
   //   publicPath: config.output.publicPath,
   hot: true,
   open: true,
   inline: true,
   compress: true,
   historyApiFallback: true,
   proxy: {
      '/rest': {
         // target: 'http://10.128.83.28:9596', // 如雷
         // target: 'http://10.120.53.103:9596', // 开发环境
         target: 'http://10.0.101.162:9596', //测试环境 ，发现数据不稳定可以用这个
         changeOrigin: true,
         pathRewrite: {
            '^/rest': '' //本地没有rest
         },
      }
   },
}).listen(7001, 'localhost', function (err, result) {
   if (err) {
      console.log(err);
   }
   console.log('Listening at localhost:7001');
});