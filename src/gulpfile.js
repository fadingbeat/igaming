const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
  
gulp.task('sass', function () {
  return gulp.src('*.scss')
    .pipe( sass() )
    .pipe( gulp.dest('css') );
});

gulp.task('automate', function() {
  return gulp.watch('*.scss', gulp.parallel('sass'));
});