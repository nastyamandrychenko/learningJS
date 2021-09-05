function defaultTask(cb) {
    // place code for your default task here
    cb();
  }
  
  exports.default = defaultTask

  var gulp       = require('gulp');
var typescript = require('gulp-typescript');
var sass       = require('gulp-sass');
var tscConfig  = require('./tsconfig.json');

gulp.task('ts', function () {
    return gulp
        .src('src/**/*.ts')
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(gulp.dest('build'));
});

gulp.task('scss', function() {
    return gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['ts', 'scss', 'watch']);

gulp.task('watch', function(cb) {
    gulp.watch('src/**/*.ts', ['ts']);
    gulp.watch('src/**/*.scss', ['scss']);
});