// including plugins
var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var gp_concat = require('gulp-concat');
var gp_rename = require('gulp-rename');
var gp_uglify = require('gulp-uglify');
var less = require('gulp-less');
var to5 = require('gulp-6to5');
var path = require('path');
const babel = require('gulp-babel');

gulp.task('less', function() {
  return gulp
    .src('./public/style.less')
    .pipe(
      less({
        paths: [path.join(__dirname, 'less', 'includes')]
      })
    )
    .pipe(gulp.dest('./public/css'));
});

gulp.task('css', ['less'], function() {
  return gulp
    .src([
      './public/css/bootstrap.css',
      './public/css/style.css',
      './public/css/swiper.css',
      './public/css/dark.css',
      './public/css/font-icons.css',
      './public/css/animate.css',
      './public/css/magnific-popup.css',
      './public/css/responsive.css',
      './public/css/custom.css'
    ])
    .pipe(minifyCSS())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(gp_concat('style.min.css'))
    .pipe(gulp.dest('./public/dist/css/'));
});

gulp.task('copy-fonts', function() {
  return gulp.src(['./public/css/fonts/**']).pipe(gulp.dest('./public/dist/css/fonts/'));
});

gulp.task('style', ['css', 'copy-fonts'], function() {});

gulp.task('js', function() {
  return gulp
    .src([
      './public/js/jquery.js',
      './public/js/plugins.js',
      './public/js/functions.js',
      './public/js/custom.js'
    ])
    .pipe(gp_concat('vendor.min.js'))
    .pipe(gulp.dest('./public/dist/js/'))
    .pipe(gp_rename('vendor.min.js'))
    .pipe(gp_uglify())
    .pipe(gulp.dest('./public/dist/js/'));
});

gulp.task('babel', ['js'], function() {
  return gulp
    .src(['./src/*/**.js', './src/*/*/**.js'])
    .pipe(
      babel({
        presets: ['env']
      })
    )
    .pipe(gulp.dest('./public/dist/es5/'));
});

gulp.task('watch', function() {
  gulp.watch(['./src/*/**.js', './src/*/*/**.js', './public/js/**.js'], ['babel']);
});

gulp.task('prod', ['style', 'babel'], function() {});

gulp.task('default', ['babel', 'watch'], function() {});
