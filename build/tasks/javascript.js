import gulp from 'gulp';
import config from '../config';
import util from 'gulp-util';
import webpack from 'webpack';

gulp.task('js:release', function(cb) {
  // Run Webpack
  webpack(config.webpack.prod, function(error, stats) {
    if(error) {
      throw new util.PluginError('[webpack]', error);
    }

    util.log('[webpack]', stats.toString({
      color: true
    }));

    cb();
  });
});
