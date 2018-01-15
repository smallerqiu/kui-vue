/**
 * by chuchur /chuchur@qq.com
 * 打包vue 组件
 */
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const webpackBaseConfig = require('./webpack.base.conf.js');

module.exports = merge(webpackBaseConfig, {
    entry: {
        index: path.resolve(__dirname, '../dos/main.js'),
        vendors: ['vue', 'vue-router']
    },
    output: {
        path: '/',
        filename: '[name].[hash].js',
        publicPath: '/',
        chunkFilename: '[id].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        loaders: { css: 'vue-style-loader!css-loader', less: 'vue-style-loader!css-loader!less-loader' },
                        // postLoaders: { html: 'babel-loader' }
                    }
                },
                { loader: 'kui-loader', options: { prefix: false } }
                ]
            },]
    },
    plugins: [
        // 位于开发环境下
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }),
        // 自动生成html插件，如果创建多个HtmlWebpackPlugin的实例，就会生成多个页面
        new HtmlWebpackPlugin({
            // 生成html文件的名字，路径和生产环境下的不同，要与修改后的publickPath相结合，否则开启服务器后页面空白
            filename: 'index.html',
            // 源文件，路径相对于本文件所在的位置
            template: path.resolve(__dirname, '../dos/index.html'),
            // 需要引入entry里面的哪几个入口，如果entry里有公共模块，记住一定要引入
            chunks: ['vendors', 'index'],
            // 要把<script>标签插入到页面哪个标签里(body|true|head|false)
            inject: 'body',
            // 生成html文件的标题
            title: 'KUI 使用文档'
            // hash如果为true，将添加hash到所有包含的脚本和css文件，对于解除cache很有用
            // minify用于压缩html文件，其中的removeComments:true用于移除html中的注释，collapseWhitespace:true用于删除空白符与换行符
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new ExtractTextPlugin("css/[name].[contenthash].css"),
        // 提取入口文件里面的公共模块
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendors.js', path: 'js' }),
        // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
        new webpack.optimize.OccurrenceOrderPlugin(),
        // 模块热替换插件
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.optimize.UglifyJsPlugin({ sourceMap: false, compress: { warnings: false } }),
        // 允许错误不打断程序
        new webpack.NoErrorsPlugin(),
        // new webpack.LoaderOptionsPlugin({ minimize: true }),
    ]
}) 