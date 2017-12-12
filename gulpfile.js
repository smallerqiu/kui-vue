/**
 * create by chuchur
 * date 2016年12月5日12:57:40
 */
const gulp = require('gulp'),
    sequence = require('gulp-sequence'),
    path = require('path'),
    connect = require('gulp-connect'),
    less = require('gulp-less'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cleancss = require('gulp-clean-css'),
    debug = require('gulp-debug'),
    clean = require('gulp-clean'),
    changed = require('gulp-changed'),
    opn = require('opn'),
    plumber = require('gulp-plumber'),
    gutil = require('gulp-util'),
    // vue = require('gulp-vue-module'),
    rename = require('gulp-rename'),
    htmlmin = require('gulp-htmlmin'),
    webpack = require('webpack-stream'),


    errorHandler = (e) => {
        gutil.beep();
        gutil.log(e);
    };

gulp.task('webpack', () => {
    return gulp.src('src/*.*')
        .pipe(webpack(require('./webpack.js')))
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});

//lcss压缩和发布
gulp.task('less', () => {
    return gulp.src('./dos/demo.less')
        .pipe(plumber({
            errorHandler: errorHandler
        }))
        .pipe(less())
        // .pipe(changed(build.less, { extension: '.less' }))
        .pipe(debug({
            title: '编译less:'
        }))
        .pipe(postcss([autoprefixer({
            browsers: ['Firefox > 0', 'Opera > 0', 'ie > 0']
        })]))
        .pipe(cleancss({
            advanced: true, //类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            // "compatibility": 'ie7', //保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepSpecialComments: '*', //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
            keepBreaks: false, //类型：Boolean 默认：false [是否保留换行]
        }))
        .pipe(rename({ suffix: '.min' }))
        // .pipe(concat('demo.css'))
        // .pipe(rename((path) => {
        //     path.basename += webConfig.hash
        // }))
        .pipe(gulp.dest('./dist/dos'))
});

gulp.task('pages', () => {
    return gulp.src('dos/**/*.html')
        // .pipe(gulpif('layout/*.html', changed(build.pages)))
        // .pipe(changed(build.pages))
        .pipe(plumber({
            errorHandler: errorHandler
        }))
        // .pipe(nunjucksRender({
        //     src: 'dos',
        // }))
        // .pipe(cache('html'))
        .pipe(debug({
            title: '编译:'
        }))
        .pipe(htmlmin({
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: {
                mangle: false
            }
        }))
        .pipe(gulp.dest('./dist/dos'));
});

// http 前端服务器
gulp.task('connect', () => {
    return connect.server({
        root: 'dist/dos', //根目录
        port: 9001,
        livereload: true, //是否更改自动刷新页面
        middleware: (connect, opt) => {
            console.log('run in：http://localhost:9001')
            return []
        }
    });
});


gulp.task('reload', () => {
    return gulp.src('./dist/**/*').pipe(connect.reload());
});
//清理
gulp.task("clean", () => {
    return gulp.src('./dist')
        .pipe(debug({
            title: '清理文件:'
        }))
        .pipe(clean());
});

//输出日志
var watchEvent = (event) => {
    console.log('文件 ' + path.basename(event.path) + ' 发生 ' + event.type + ', 重启任务...');
};

//监听文件改变
gulp.task('watch', () => {
    gulp.watch('./dos/*.less', ['less', 'reload']).on("change", watchEvent);
    gulp.watch('./dos/**/*.html', ['pages', 'reload']).on("change", watchEvent);

});
// var development = ['webpack','connect','reload','watch'];
var development = ['webpack', 'connect', 'pages', 'less', 'reload', 'watch'];
var test = ['pages', 'webpack', 'less', ];
var building = ['pages', 'webpack', 'less'];

gulp.task('default', sequence(development, 'connect'));
gulp.task('dev', sequence(development, 'connect'));
gulp.task('test', sequence('clean', test, 'zip'))
gulp.task('build', sequence('clean', building, 'zip'))