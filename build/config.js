import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import util from 'gulp-util';
import appPackage from '../package.json';

let config = {
  version: appPackage.version,
  env: process.env.NODE_ENV,
  port: {
    dev: 5000,
    release: 5000
  },

  filenames: {
    entry: 'main.js',
    index: 'index.html',
    icons: 'icons.svg',
    scss: 'fluid.scss'
  },

  directories: {
    src: 'src',
    dist: 'demo',
    lib: 'lib',
    test: 'test'
  }
};

// Utilities
const basePath = path.resolve(__dirname, '../');
config.absolute = (...args) => path.resolve.apply(path.resolve, [basePath, ...args]);
config.relative = (...args) => [...args].join('/');

config.path = {
  src: {
    entry: config.absolute(config.directories.src, config.filenames.entry),
    js: config.relative(config.directories.src, '**/*.js'),
    components: config.relative(config.directories.src, 'components/*.js'),
    html: config.relative(config.directories.src, '**/*.html'),
    scss: {
      main: config.relative(config.directories.src, 'styles/', config.filenames.scss),
      demo: config.relative(config.directories.src, 'styles/demo.scss'),
      files: [
        config.relative(config.directories.src, 'styles/**/*.scss')
      ],
      includes: []
    },
    icons: {
      files: config.relative(config.directories.src, 'icons/*.svg')
    }
  },

  dist: {
    css: config.relative(config.directories.dist, 'css/'),
    icons: config.relative(config.directories.dist, 'icons/')
  },

  lib: {
    css: config.relative(config.directories.lib, 'css/'),
    icons: config.relative(config.directories.lib, 'icons/')
  },

  tmp: 'tmp',
  doc: './doc',
  test: {
    e2e: config.relative(config.directories.test, '/e2e'),
    unit: config.relative(config.directories.test, '/unit/**/*.js')
  }
};

// SCSS
config.scss = {
  dev: {
    errLogToConsole: true,
    outputStyle: 'expanded',
    includePaths: []
  },
  dist: {
    errLogToConsole: true,
    outputStyle: 'compressed',
    includePaths: []
  }
};

// Autoprefixer
config.autoprefixer = [
  'last 5 Chrome versions',
  'last 5 Firefox versions',
  'last 2 Safari versions',
  'Explorer >= 10'
];

// Documentation
config.yuidoc = {
  parser: {
    project: {
      name: 'NL Fluid',
      description: 'Fluid ReactJS Components',
      version: '0.1.0',
      url: 'http://nitrog7.github.io/nl-fluid',
      logo: 'https://www.grubhub.com/img/grubhub/b8197ff4.logo-sprite.svg',
      options: {
        external: {
          data: 'http://yuilibrary.com/yui/docs/api/data.json'
        },
        linkNatives: true,
        attributesEmit: true,
        outdir: 'docs/api'
      }
    }
  },
  render: {}
};

// Webpack Vendor chunk
const commonChunk = new webpack.optimize.CommonsChunkPlugin(
  'vendor', '[name].js'
);
commonChunk.__KARMA_IGNORE__ = true;

// Webpack config
let webpackConfig = {
  entry: {
    app: [
      config.path.src.entry
    ],
    vendor: [
      'lodash',
      'moment',
      'quill',
      'react',
      'react-addons-update',
      'react-css-transition-replace',
      'react-dom'
    ]
  },
  output: {
    filename: '[name].js',
    path: config.absolute(config.directories.dist),
    publicPath: '/'
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx'],
    modulesDirectories: [
      config.directories.src,
      'node_dev',
      'node_modules'
    ],
    alias: [
      {actions: './' + config.directories.src + '/actions'},
      {components: './' + config.directories.src + '/components'},
      {constants: './' + config.directories.src + '/constants'},
      {stores: './' + config.directories.src + '/stores'},
      {utils: './' + config.directories.src + '/utils'},
      {views: './' + config.directories.src + '/views'},
      {test: './' + config.directories.test}
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: config.absolute(config.directories.src, config.filenames.index),
      hash: false,
      filename: config.filenames.index,
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(config.env)
      },
      'NODE_ENV': config.env,
      '__DEV__': config.env === 'development',
      '__PROD__': config.env === 'production',
      'APP_VERSION': JSON.stringify(config.version)
    }),
    commonChunk
  ],
  module: {
    noParse: /node_modules\/quill\/dist/,
    preLoaders: [
      {
        loader: 'eslint-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        loader: 'babel',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      }
    ]
  },
  eslint: {
    configFile: '.eslintrc'
  }
};

config.webpack = {
  dev: webpackConfig,
  prod: webpackConfig
};

// Webpack - Dev
config.webpack.dev.devtool = 'eval';
config.webpack.dev.debug = true;
config.webpack.dev.eslint.emitWarning = true;
config.webpack.dev.entry.app.push(
  'webpack-hot-middleware/client'
);
config.webpack.dev.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  })
);

// Webpack - Prod
config.webpack.prod.eslint.failOnError = true;
config.webpack.prod.plugins.push(
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false
    },
    minimize: {
      warnings: false
    },
    sourceMap: false,
    compress: {
      unused: true,
      'dead_code': true,
      warnings: false
    }
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  })
);

export default config;
