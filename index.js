const Koa = require('koa');
const app = new Koa();

const port = process.env.PORT || 3000
app.use(async ctx => {
    ctx.res.setHeader('content-type', 'application/json')
    ctx.body = JSON.stringify({result: 'Hello World'});
});

app.listen(port);