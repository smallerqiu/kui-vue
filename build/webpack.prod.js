/**
 * by chuchur /chuchur@qq.com
 * 打包vue 组件
 */
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //for webpack 3 ||4
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //for webpack 4
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //for webpack 4
const TerserPlugin = require('terser-webpack-plugin');  //for webpack 5

const path = require('path');
const WebpackBar = require('webpackbar')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	mode: 'production',
	stats: {
		children: false,
	},
	entry: {
		main: path.resolve(__dirname, '../components/index.js')
	},
	output: {
		path: path.resolve(__dirname, "../dist"),
		publicPath: "",
		filename: "k-ui.js",
		library: 'kui',
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
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production'),
			}
		}),
		new WebpackBar({
			name: '🚗  K UI a vue components',
			color: 'green',
		}),
		new MiniCssExtractPlugin({ filename: 'k-ui.css' }),
		new CleanWebpackPlugin()
	],
}