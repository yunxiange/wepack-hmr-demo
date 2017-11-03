var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var express = require('express');
var path = require('path');

var compiler = webpack(webpackConfig);
var app = express();

app.use(webpackDevMiddleware(compiler, {
    noInfo: false,
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true
    },
    historyApiFallback: true
}));
app.use(webpackHotMiddleware(compiler, {
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
}));

express.static(path.resolve(__dirname, 'www'));
app.listen(3001);
