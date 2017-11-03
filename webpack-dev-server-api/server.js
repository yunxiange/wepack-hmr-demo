var webpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');

var config = require('./webpack.config.js');
var options = {
    contentBase: './www',
    hot: true,
    host: 'localhost',
    stats: {
        colors: true
    }
};

webpackDevServer.addDevServerEntrypoints(config, options);

var compiler = webpack(config);
var server = new webpackDevServer(compiler, options);

server.listen(3001, 'localhost', () => {
    console.log('dev server listening on port 3001');
});
