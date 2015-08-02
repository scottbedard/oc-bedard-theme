//
// Dependencies
//
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var browserify = require('gulp-browserify');
var autoprefixer = require('gulp-autoprefixer');

//
// Javascript
//
gulp.task('js', function() {
    gulp.src('assets/js/main.js')
        .pipe(browserify({ debug: true }))
        .pipe(rename('script.js'))
        .pipe(gulp.dest('./assets/dist'));
});

//
// SCSS
//
gulp.task('scss', function() {
    gulp.src('./assets/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('style.css'))
        .pipe(autoprefixer())
        .pipe(minifycss())
        .pipe(gulp.dest('./assets/dist'));
});

//
// Watcher
//
gulp.task('watch', function() {
    gulp.watch('assets/scss/**/*.scss', ['scss']);
    gulp.watch('assets/js/**/*.js', ['js']);
});
