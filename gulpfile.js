const gulp = require('gulp');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const jsmin = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const spritesmith = require('gulp.spritesmith');
const sass = require('gulp-sass');
const path = require('path');


sass.compiler = require('node-sass');

// 1. 压缩html
// cnpm i gulp-htmlmin -D
gulp.task('htmlmin', function() {
    return gulp
        .src('./src/html/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/html'));
});


// 2. 压缩css文件
// cnpm i gulp-cssmin -D
gulp.task('cssmin', function() {
    return gulp.src('./src/style/*.css')
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/style'));
});

// 3. 压缩JS文件
// cnpm i gulp-uglify -D
gulp.task('jsmin', function() {
    return gulp
        .src(['./src/js/*.js', '!src/js/*.min.js'])
        .pipe(jsmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/js'));
});

// 4. 压缩图片
// cnpm i gulp-imagemin -D
gulp.task('imagemin', function() {
    return gulp
        .src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
});

// 5. 合并文件
// 为什么要合并文件？
// 减少HTTP请求次数
// cnpm i gulp-concat -D

// 先合并 再压缩
gulp.task('concat', function() {
    return gulp
        .src(['./src/js/index.js', './src/js/jquery.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/js'));
});


// 6. 制作精灵图(雪碧图)
// cnpm i gulp.spritesmith -D
gulp.task('sprite', function() {
    var spriteData = gulp.src('src/img/*').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.css'
    }));
    return spriteData.pipe(gulp.dest('src/img'));
});

// less编译
// cnpm i gulp-less -D
// gulp.task('sass', function() {
//     return gulp.src('./src/style/*.scss')
//         .pipe(scss({
//             paths: [path.join(__dirname, 'scss', 'includes')]
//         }))
//         .pipe(gulp.dest('./src/style'));
// });

gulp.task('sass', function () {
    return gulp.src('./src/style/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./src/style'));
  });


// 7. 监听文件
gulp.task('watchsass', function() {
    // 监听所有的less文件
    // 如果有修改 就执行 less 这个 task
    gulp.watch('./src/style/*.scss', gulp.series('sass'));
});

// 自动构建
gulp.task('dev', function() {
    gulp.watch(['./src/style/*.scss','./src/style/*.css', './src/html/*.html', './src/js/*.js'], gulp.series('htmlmin', 'concat', 'sass', 'cssmin'));
});