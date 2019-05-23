/**
 * by chuchur /chuchur@qq.com
 * 打包vue 组件
 */
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //for webpack 4
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //for webpack 4
const pkg = require('../package.json');
const path = require('path');
const webpackBaseConfig = require('./webpack.base.conf.js');
const merge = require('webpack-merge');
const VueLoaderPlugin = require('vue-loader/lib/plugin') //for vue-loader 15
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(webpackBaseConfig, {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: "",
        filename: "k-ui.js",
        library: 'kui-vue',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                test: /\.(c|le)ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'], // : , 
            },
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        loaders: { css: 'vue-style-loader!css-loader', less: 'vue-style-loader!css-loader!less-loader' },
                        // postLoaders: { html: 'babel-loader' }
                    }
                },
                ]
            },]
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        // warnings: false,
                        drop_debugger: true,
                        drop_console: true
                    },
                    sourceMap: false
                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new VueLoaderPlugin(), //for vue-loader 15
        new webpack.DefinePlugin({ PRODUCTION: "'true'" }),
        new MiniCssExtractPlugin({ filename: 'k-ui.css' }),
        new webpack.BannerPlugin(pkg.name + ' v' + pkg.version + ' by chuchur (c) ' + new Date().getFullYear() + ' Licensed ' + pkg.license),
        // 允许错误不打断程序
        // new webpack.NoErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({ minimize: true })
    ],

})