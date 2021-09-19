const gulp = require('gulp');
const ts = require('gulp-typescript');

gulp.task('typescript', () => {
    console.log("rtrtrtrtr")
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'index.js'
        }))
        .pipe(gulp.dest('./src/js'));
});
gulp.task('watch', () => gulp.watch('src/**/*.ts', gulp.series('typescript')));
gulp.task('default', gulp.series('watch'));