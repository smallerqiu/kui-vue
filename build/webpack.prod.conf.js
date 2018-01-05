/**
 * by chuchur /chuchur@qq.com
 * 打包vue 组件
 */
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path');
const pkg = require('../package.json');
module.exports = {
    entry: {
        main:path.resolve(__dirname, '../src/index.js')
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: "../dist/",
        filename: "k-ui.js",
        library: 'kyui',
        libraryTarget: 'umd',
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        extractCSS: true, esModule: false, preserveWhitespace: false,
                        loaders: {
                            css: ExtractTextPlugin.extract({
                                use: 'css-loader',
                                fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
                            })
                        }
                    }
                }
                ]
            },
            {
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
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'autoprefixer-loader'
                ]
                // 将样式抽取出来为独立的文件
                // use: ExtractTextPlugin.extract({
                //     fallback: "vue-style-loader",
                //     use: [
                //         { loader: "css-loader" },
                //     ],
                // }), 
            },
            //使用less-loader、css-loader和style-loade 加载 .less 结尾的文件
            {
                test: /\.less$/,
                // 将样式抽取出来为独立的文件
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: "css-loader" },
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
                    name: 'img/[name].[ext]?[hash:7]'
                }
            },
            { // 加载图标
                test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                loader: 'file-loader',
                query: {
                    // 把较小的图标转换成base64的字符串内嵌在生成的js文件里    
                    limit: 10000,
                    name: 'fonts/[name].[ext]?[hash:7]',
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
        new webpack.BannerPlugin(pkg.name + ' v' + pkg.version + ' by chuchur (c) ' + new Date().getFullYear() + ' Licensed ' + pkg.license),

        // 允许错误不打断程序
        // new webpack.NoErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json', '.less'],
        alias: {
            'vue': 'vue/dist/vue.esm.js',
        }
    }
}