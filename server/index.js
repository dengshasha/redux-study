const Koa = require('koa');
const path = require('path')
const static = require('koa-static')
const staticPath = '../src'

const app = new Koa();

app.use(static(
    path.join( __dirname,  staticPath)
  ))
app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);