import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('default', ['dev']);
gulp.task('dev', done => {
  runSequence(
    'clean',
    'css:watch',
    'server:dev',
    done
  );
});

gulp.task('release', done => {
  runSequence(
    'test',
    'clean',
    ['css:release', 'js:release'],
    done
  );
});

gulp.task('docs', ['doc']);
