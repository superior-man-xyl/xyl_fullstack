const Koa = require('koa');
const app = new Koa();
app.use(async ctx => {
        ctx.body = 'Hello World';
})
app.listen(3000);
//node app.js 然后打开本地的localhost:3000就能看到页面了
//npm i -g pm2 安装pm2   
// PM2是node进程管理工具，可以利用它来简化很多node应用管理的繁琐任务，如性能监控、自动重启、负载均衡等，而且使用非常简单。
// 使用pm2 start app.js就行了