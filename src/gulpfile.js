const gulp = require('gulp')

gulp.task('webpack', () => {
    // 转译 JavaScript
    const webpack = require('webpack-stream')
    const config = require('./webpack.config.js')
    gulp.src('./js/**/*.js')
        .pipe(webpack(config))
        .pipe(gulp.dest('../www/js'))
})

gulp.task('less', () => {
    const less = require('gulp-less')
    gulp.src('./less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('../www/css'))
})

gulp.task('default', ['webpack', 'less'])