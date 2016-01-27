import gulp from 'gulp';
import config from '../config';
import util from 'gulp-util';
import babel from 'gulp-babel';

gulp.task('js:release', () => {
  return gulp.src([config.path.src.components])
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(config.absolute(config.directories.lib)));
});
