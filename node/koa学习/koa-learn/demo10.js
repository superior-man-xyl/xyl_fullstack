//使用koa-static来访问静态资源

const Koa=require('koa');
const path=require('path');
const static=require('koa-static');

const app=new Koa();
const staticPath='./static';
//node.js 里join 将多个参数组合成一个 path
app.use(static(path.join(__dirname,staticPath)));//拼接两个路径

app.use(async(ctx)=>{
    ctx.body='hello word!'
})

app.listen(3000,()=>{
    console.log('服务已在3000端口启动');
})

//http://localhost:3000/ewm.jpg  接着这样就能访问到静态文件了