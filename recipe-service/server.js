const koa = require('koa');

const app = new koa();

app.use((ctx) => {
  ctx.body = {
    message: 'hello world'
  }
});

app.listen(4000, () => {
  console.log('server is running on port 3000');
});
