/**
 * by chuchur /chuchur@qq.com
 * 打包vue 组件
 */
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //for webpack 3 ||4
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //for webpack 4 ,5
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); //for webpack 5

// const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //for webpack 4
const TerserPlugin = require('terser-webpack-plugin');  //for webpack 5

const path = require('path');
// const WebpackBar = require('webpackbar')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
let { NODE_ENV, npm_package_version, npm_package_name, npm_lifecycle_event } = process.env

module.exports = {
	mode: 'production',
	stats: {
		children: false,
	},
	entry: {
		main: path.resolve(__dirname, '../components/bin')
		// main: '../components/bin',
	},
	output: {
		path: path.resolve(__dirname, "../dist"),
		// path: "../dist",
		publicPath: "",
		filename: "k-ui.js",
		library: 'kui',
		globalObject: 'this',
		libraryTarget: 'umd',
		libraryExport: 'default',
		umdNamedDefine: true
	},
	performance: {
		hints: false
	},
	externals: {
		"vue": "vue",
		'vue-router': 'VueRouter',
		// "kui-icons": "kui-icons",
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
				extractComments: false,
			}),
			// new OptimizeCSSAssetsPlugin({}), // use CssMinimizerPlugin
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
		// 	name: '🚗  K UI a vue components',
		// 	color: 'green',
		// }),
		new MiniCssExtractPlugin({ filename: 'k-ui.css' }),
		// new CleanWebpackPlugin()
	],
}