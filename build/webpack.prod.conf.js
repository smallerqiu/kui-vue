/**
 * by chuchur /chuchur@qq.com
 * 打包vue 组件
 */
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //for webpack 3 ||4
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //for webpack 4
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //for webpack 4
const TerserPlugin = require('terser-webpack-plugin');  //for webpack 5

const path = require('path');
const webpackBaseConfig = require('./webpack.base.conf.js');
const { merge } = require('webpack-merge');
const WebpackBar = require('webpackbar')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(webpackBaseConfig, {
	mode: 'production',
	entry: {
		main: path.resolve(__dirname, '../components/index.js')
	},
	output: {
		path: path.resolve(__dirname, "../dist"),
		publicPath: "",
		filename: "k-ui.js",
		library: 'KuiVue',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	performance: {
		hints: false
	},
	externals: {
		"vue": "Vue",
		'vue-router': 'VueRouter',
		"kui-icons": "kui-icons",
		'moment': 'moment'
	},
	optimization: {
		minimize: true,
		minimizer: [
			// new UglifyJsPlugin({
			// 	uglifyOptions: {
			// 		cache: true,
			// 		parallel: true,
			// 		sourceMap: true,
			// 		uglifyOptions: {
			// 			warnings: false,
			// 		},
			// 	}
			// }),
			new TerserPlugin({
				// terserOptions: {
				cache: true,
				parallel: true,
				sourceMap: false,
				terserOptions: {
					output: {
						// comments: /kui-vue/i,
					},
					compress: {
						pure_funcs: ["console.log"]
					}
				},
				extractComments: false,
				// }
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	},
	plugins: [
		new WebpackBar({
			name: '🚗  K UI a vue components',
			color: 'green',
		}),
		new MiniCssExtractPlugin({ filename: 'k-ui.css' }),
		new CleanWebpackPlugin()
	],
})