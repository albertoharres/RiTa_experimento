var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  jquery: 'node_modules/jquery/dist/jquery.min.js',
  rita: 'node_modules/rita/lib/rita.js'
}

gulp.task('js', function() {
  return gulp.src([
    paths.jquery,
    paths.rita,    
    'src/main.js'
  ])
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(concat('script.js'))    
    .pipe(gulp.dest('./'));
});


/*
 * Watch for changes in files.
 */
gulp.task('watch', function() {
  gulp.watch(['src/**/*.js'], ['js']);
});

//Watch task
gulp.task('default',function() {
  gulp.start('js');
});

