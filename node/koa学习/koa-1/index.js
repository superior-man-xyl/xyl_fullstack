// const Koa = require('koa')
const Koa = require('./lib/application')//使用自己的Koa
const app=new Koa()

app.use((ctx,next)=>{
// app.use((req,res)=>{//ctx
    // ctx.body='Hello World'

    //浏览器输入 http://localhost:3000/564
    console.log(ctx.req.url);//以下全得到/564 
    console.log(ctx.request.req.url);
    console.log(ctx.response.req.url);
    console.log(ctx.request.url);
    console.log(ctx.request.path);
    console.log(ctx.url);
})

app.listen(3000,()=>{
    console.log('服务器启动了');
})