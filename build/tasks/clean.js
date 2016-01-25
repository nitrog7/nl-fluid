import gulp from 'gulp';
import config from '../config';
import del from 'del';
import vinylPaths from 'vinyl-paths';

// Deletes all files in the output path
gulp.task('clean', () => {
  return gulp.src(config.absolute(config.directories.lib) + '/*', {dot: true, read: false})
    .pipe(vinylPaths(del));
});