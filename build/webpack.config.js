const { merge } = require('webpack-merge');


module.exports = (env) => {
  const envConfig = require(`./webpack.${env}.js`);
  global.env = env
  const baseConfig = require('./webpack.base.js');
  return merge(baseConfig, envConfig);
};