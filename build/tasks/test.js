import gulp from 'gulp';
import config from '../config';
import plumber from 'gulp-plumber';
import util from 'gulp-util';
import eslint from 'gulp-eslint';

// Tests
// Run all javascript tests
gulp.task('test', ['js:hint']);

// Linting
gulp.task('js:hint', () => {
  return gulp.src([config.path.src.js])
    .pipe(plumber({errorHandler: util.log}))
    .pipe(eslint())
    .pipe(eslint.format());
});
