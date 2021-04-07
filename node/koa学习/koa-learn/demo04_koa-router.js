const Koa=require('koa');
const Router=require('koa-router');

const app=new Koa();
const router=new Router();

router//路由使用方法
    .get('/',(ctx,next)=>{
        ctx.body="hello Router";
    })
    .get('/todo',(ctx,next)=>{
        ctx.body="Todo page"
    })
    .get('/index',(ctx,next)=>{
        ctx.body="index page"
    })
    .get('/404',(ctx,next)=>{
        ctx.body="404 page"
    })

app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3000,()=>{
    console.log("服务器已经在3000端口启动");
})