/**
 * by chuchur /chuchur@qq.com
 * 打包vue 组件
 */
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //for webpack 4
const TerserPlugin = require('terser-webpack-plugin');  //for webpack 5

const path = require('path');
const fs = require('fs');
// const WebpackBar = require('webpackbar')
const webpack = require('webpack')

let dir = path.join(__dirname, '../components/locale/lang')
let files = fs.readdirSync(dir)

let entry = {}
files.forEach(x => {
	let k = x.replace(/.js|-/g, '')
	entry[k] = path.resolve(dir, x)
})

module.exports = {
	mode: 'production',
	stats: {
		children: false,
	},
	entry,
	output: {
		path: path.resolve(__dirname, "../dist/locale"),
		publicPath: "",
		// filename: "[id].js",
		library: 'kui_lang_[name]',
		libraryTarget: 'lib',
		// libraryExport: 'default', 
		umdNamedDefine: true,
		globalObject: 'this',
		libraryTarget: 'umd',
	},
	performance: {
		hints: false
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
	],
}