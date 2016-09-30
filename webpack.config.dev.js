var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: [
    './client/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015-native-modules','es2015', 'react'],
      },
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
    }],
  },

}
