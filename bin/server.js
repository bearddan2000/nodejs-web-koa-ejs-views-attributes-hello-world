'use strict';

const Koa = require('koa');
const Router = require('@koa/router');
const render = require('koa-ejs');
const path = require('path');

const app = new Koa();
const router = new Router();

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'index',
  viewExt: 'html',
  cache: false,
  debug: true
});

router.get('koa-example', '/', (ctx) => {
  let dogs = [];
  dogs.push({breed: 'Poodle', color: 'white'});
  dogs.push({breed: 'Shepard', color: 'black'});
  dogs.push({breed: 'Setter', color: 'tan'});

  return ctx.render('index', {attributes: dogs});
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8000);
