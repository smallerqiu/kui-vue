const rm = require('rimraf')
const ora = require('ora')

// const webpackConfig = require('./webpack.prod.conf')
const spinner = ora('开始构建...')
const chalk = require('chalk')
const webpack = require('webpack')
const path = require('path')

let buidDoc = process.argv.indexOf('doc') >= 0

process.env.NODE_ENV = buidDoc ? 'prod' : 'dev'

const webpackConfig = buidDoc ? require('./webpack.dev.conf') : require('./webpack.prod.conf')
const rmpath = buidDoc ? './dos-html/' : './dist/'

if (buidDoc) {
    webpackConfig.output = {
        path: path.resolve(__dirname, '../dos-html'),
        filename: 'js/[name].[hash].js',
        publicPath: path.resolve(__dirname, '/'),
        chunkFilename: 'js/[name].[chunkhash].js'
    }
} else {
    webpackConfig.output.publicPath = ''
}
// return
spinner.start()

rm(rmpath, (err) => {
    if (err) throw err
    webpack(webpackConfig, function (err, stats) {
        spinner.stop()
        if (err) throw err
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')

        if (stats.hasErrors()) {
            console.log(chalk.red('  编译出现错误.\n'))
            process.exit(1)
        }

        console.log(chalk.cyan('  编译完成.\n'))
        process.exit()
    })
})