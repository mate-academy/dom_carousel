var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: 'src'
        },
        notify: false
    });
});

gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', gulp.parallel('sass', 'browser-sync'));
  gulp.watch('src/*.html').on('change', browserSync.reload);
  gulp.watch('src/js/**/*.js').on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass'));