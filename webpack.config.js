/* eslint-disable import/no-extraneous-dependencies */
// Initialization
const webpack = require('webpack');

// File Ops
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Folder Ops
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

// PostCSS support
const postcssImport = require('postcss-easy-import');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
/* eslint-enable import/no-extraneous-dependencies */

// Constants
const APP = path.join(__dirname, 'src');
const BUILD = path.join(__dirname, 'build');
const STYLE = path.join(__dirname, 'src/styles/style.scss');
const IMAGES = path.join(__dirname, 'src/images');
const HTML = path.join(__dirname, 'src/html/index.html');
const NODE_MODULES = path.join(__dirname, 'node_modules');
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;

module.exports = {
  // Paths and extensions
  entry: {
    app: APP,
    style: STYLE
  },
  output: {
    path: BUILD,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: APP
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'postcss'],
        include: [APP, NODE_MODULES]
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss'],
        include: [APP, NODE_MODULES]
      },
      {
        test: /\.json$/,
        loaders: ['json'],
        include: [APP, NODE_MODULES]
      }
    ]
  },
  // Configure PostCSS plugins
  postcss: function processPostcss(webpack) {  // eslint-disable-line no-shadow
    return [
      postcssImport({
        addDependencyTo: webpack
      }),
      precss,
      autoprefixer({ browsers: ['last 2 versions'] })
    ];
  },
  // Source maps used for debugging
  devtool: 'eval-source-map',
  // webpack-dev-server configuartion
  devServer: {
    historyApiFallback: true,
    hot: true,
    progress: true,

    stats: 'errors-only',
    host: HOST,
    port: PORT,

    // CopyWebpackPlugin: This is required for webpack-dev-server
    // The path should be an absolute path to build destination
    outputPath: BUILD
  },
  // Webpack plugins
  plugins: [
    // Required to inject NODE_ENV within React app.
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development') // eslint-disable-line quote-props
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      { from: IMAGES, to: BUILD }
    ],
      {
        ignore: [
          // Doesn't copy mac storage system files
          '.DS_Store'
        ]
      }
    ),
    new HtmlWebpackPlugin({
      template: HTML,
      // JS placed at the bottom of the body element
      inject: 'body'
    })
  ]
};
