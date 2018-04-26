var sass       = require('gulp-sass');
var concat     = require('gulp-concat');
var uglify     = require('gulp-uglify');
var minify     = require('gulp-minify');
var cssnano    = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var plumber    = require('gulp-plumber');
var gulp       = require('gulp');

var output = '../public_html/';

// Compile Our Sass Styles
gulp.task('styles', function () {
    return gulp.src('scss/app.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concat('app.css'))
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(output + 'css'));
});

// Compile Our Vendor Styles
gulp.task('vendorStyles', function () {
    return gulp.src([

    ])
        .pipe(plumber())
        .pipe(concat('vendor.css'))
        .pipe(minify())
        .pipe(cssnano())
        .pipe(gulp.dest(output + 'css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function () {
    return gulp.src([
        '../vendor/kiksaus/kikcms/resources/js/utils.js',
        '../vendor/kiksaus/kikcms/resources/js/kikcms.js',
        'js/app.js'
    ])
        .pipe(plumber())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest(output + 'js'));
});

// Concatenate & Minify Vendor JS
gulp.task('vendorScripts', function () {
    return gulp.src([
        'bower_components/jquery/dist/jquery.min.js'
    ])
        .pipe(plumber())
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(gulp.dest(output + 'js'));
});

// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch(['js/*.js', '../vendor/kiksaus/kikcms-*/assets/js/*.js'], ['scripts']);
    gulp.watch(['scss/*.scss', 'scss/**/*.scss', '../vendor/kiksaus/kikcms-*/assets/scss/*.scss'], ['styles']);
});