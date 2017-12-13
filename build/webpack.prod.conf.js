/**
 * by chuchur /chuchur@qq.com
 * 打包vue 组建
 */
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path');
module.exports = {
    entry: [
        path.resolve(__dirname, '../index.js')
    ],
    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: "../dist/",
        filename: "k-ui.js"
    },
    watch: true,
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: { extractCSS: true, esModule: false, preserveWhitespace: false }
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                /* query: {
                  presets: ['es2015', 'stage-3'],
                  plugins: ['transform-runtime']
                } */
            },
            {
                test: /\.scss$/,
                use: ['style', 'css', 'sass']
            },
            {
                test: /\.css$/,
                // 将样式抽取出来为独立的文件
                use: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader"),
                exclude: /node_modules/
            },
            // 使用less-loader、css-loader和style-loade 加载 .less 结尾的文件
            {
                test: /\.less$/,
                // 将样式抽取出来为独立的文件
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{ loader: "css-loader" },
                        { loader: "less-loader" },
                    ],
                }),
                exclude: /node_modules/
            },
            { // 加载图片
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                query: {
                    // 把较小的图片转换成base64的字符串内嵌在生成的js文件里
                    limit: 10000,
                    // 路径要与当前配置文件下的publicPath相结合
                    name: '../img/[name].[ext]?[hash:7]'
                }
            },
            { // 加载图标
                test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                loader: 'file-loader',
                query: {
                    // 把较小的图标转换成base64的字符串内嵌在生成的js文件里    
                    limit: 10000,
                    name: '../fonts/[name].[ext]?[hash:7]',
                    prefix: 'font'
                }
            },

        ]
    },
    // devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new ExtractTextPlugin("k-ui.css"),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false
            }
        }),
        // 允许错误不打断程序
        new webpack.NoErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json', '.less'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    }
}