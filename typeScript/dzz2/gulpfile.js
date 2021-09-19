const gulp = require('gulp');
const ts = require('gulp-typescript');

gulp.task('typescript', () => {
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'index.js'
        }))
        .pipe(gulp.dest('./src/js'));
});
gulp.task('watch', () => gulp.watch('./**/*.ts', gulp.series('typescript')));
gulp.task('default', gulp.series('watch'));