let path = require('path')
let UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname, '../dos-html'),
        compress: true,
        port: 9000
    },
    optimization: {
        // splitChunks: {
        //     cacheGroups: {
        //         commons: {
        //             test: /[\\/]node_modules[\\/]/,
        //             name: "vendors",
        //             chunks: "all"
        //         }
        //     }
        // },
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false
                    },
                    sourceMap: true
                }
            })
        ]
    }
}