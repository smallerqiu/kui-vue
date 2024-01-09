const { merge } = require('webpack-merge');


module.exports = (args) => {
  // console.log(env)
  let keys = Object.keys(args)
  let env = keys.pop()
  const envConfig = require(`./webpack.${env}.js`);
  global.env = env
  const baseConfig = require('./webpack.base.js');
  return merge(baseConfig, envConfig);
};