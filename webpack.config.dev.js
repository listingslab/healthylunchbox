var path = require('path');
var webpack = require('webpack');

module.exports = {
  devServer: {
    hot: true
  },

  entry: [
    'webpack-hot-middleware/client',
    './client/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015-native-modules','es2015', 'react'],
      },
    },
    {
      test: /\.styl$/,
      include: path.join(__dirname, 'client'),
      loader: 'style-loader!css-loader!stylus-loader'
    },
    {
      test: /\.(jpg|png)$/,
      exclude: /node_modules/,
      loader: 'file',
    }
    ],
  },

}
