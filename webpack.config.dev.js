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

  modules: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'client')
      },
      {
        test: /\.styl$/,
        include: path.join(__dirname, 'client')
      }
    ]
  }

}
