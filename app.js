/**
 * Created by xianda on 15/7/10.
 */

var middlewares = require('koa-middlewares');
var routes = require('./routes');
var config = require('./config');
var koa = require('koa');
var app = koa();
var http = require('http');

/**
 * ignore favicon
 */
app.use(middlewares.favicon());

app.use(middlewares.bodyParser());

var router = middlewares.router(app);

app.use(router.routes()).use(router.allowedMethods());

routes(router);

app = module.exports = http.createServer(app.callback());
app.listen(config.port);
console.log('listening on port ' + config.port);