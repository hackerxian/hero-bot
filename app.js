/**
 * Created by xianda on 15/7/10.
 */

var middlewares = require('koa-middlewares');
var routes = require('./routes');
var koa = require('koa');
var app = koa();
var http = require('http');

app.use(middlewares.bodyParser());

var router = middlewares.router(app);

app.use(router.routes()).use(router.allowedMethods());


routes(router);

app.listen(7000);
console.log('listening on port 7000');