var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.config.dev')
var basicAuth = require('basic-auth-connect');

var app = express()
var compiler = webpack(config)

app.use(basicAuth('cc', 'healthy'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(1989, 'localhost', function(err) {
  if(err) {
    console.log(err);
    return
  }

  console.log('Listening at http://localhost:1989')
})
