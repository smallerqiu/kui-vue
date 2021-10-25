const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-minify-css');
const rename = require('gulp-rename')

// @import '../../../components/styles/index.less';
// @import '../../../components/styles/dark.less';

gulp.task('default', function (done) {
  //编译src目录下的所有less文件
  //除了reset.less和test.less（**匹配src/less的0个或多个子文件夹）
  gulp.src('components/styles/index.less')
    .pipe(less())
    .pipe(cssmin())
    .pipe(
      rename({
        // dirname: '', // 文件路径
        basename: 'k-ui', // 文件名
        // prefix: 'prefix.', // 文件名前缀
        // suffix: '.suffix', // 文件名后缀
        extname: '.css', // 文件扩展名
      }))
    .pipe(gulp.dest('./dist'))
    .pipe(gulp.dest('./docs/dist/css'))
  done();
});

gulp.task('dark', function (done) {
  //编译src目录下的所有less文件
  //除了reset.less和test.less（**匹配src/less的0个或多个子文件夹）
  gulp.src('components/styles/dark.less')
    .pipe(less())
    .pipe(cssmin())
    .pipe(
      rename({
        // dirname: '', // 文件路径
        basename: 'k-ui-dark', // 文件名
        // prefix: 'prefix.', // 文件名前缀
        // suffix: '.suffix', // 文件名后缀
        extname: '.css', // 文件扩展名
      }))
    .pipe(gulp.dest('./dist'))
    .pipe(gulp.dest('./docs/dist/css'));
  done();
});

gulp.task('docs-dark', function (done) {
  //编译src目录下的所有less文件
  //除了reset.less和test.less（**匹配src/less的0个或多个子文件夹）
  gulp.src('docs/assets/css/index-dark.less')
    .pipe(less())
    .pipe(cssmin())
    .pipe(
      rename({
        // dirname: '', // 文件路径
        basename: 'style-dark', // 文件名
        // prefix: 'prefix.', // 文件名前缀
        // suffix: '.suffix', // 文件名后缀
        extname: '.css', // 文件扩展名
      }))
    .pipe(gulp.dest('./docs/dist/css'));
  done();
});

gulp.task('docs', function (done) {
  //编译src目录下的所有less文件
  //除了reset.less和test.less（**匹配src/less的0个或多个子文件夹）
  gulp.src('docs/assets/css/index.less')
    .pipe(less())
    .pipe(cssmin())
    .pipe(
      rename({
        // dirname: '', // 文件路径
        basename: 'style', // 文件名
        // prefix: 'prefix.', // 文件名前缀
        // suffix: '.suffix', // 文件名后缀
        extname: '.css', // 文件扩展名
      }))
    .pipe(gulp.dest('./docs/dist/css'));
  done();
});