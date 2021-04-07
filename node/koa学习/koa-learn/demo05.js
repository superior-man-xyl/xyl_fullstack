//路由的层级
const Koa=require('koa');
const Router=require('koa-router');

const app=new Koa();
const router=new Router({
    prefix:'/xyl'//增加了一个层级
    // http://localhost:3000/xyl/todo  这样才能访问todo
});

router//路由使用方法
    .get('/',(ctx,next)=>{
        ctx.body="hello Router";
    })
    .get('/todo',(ctx,next)=>{
        ctx.body="Todo page"
    })

app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3000,()=>{
    console.log("服务器已经在3000端口启动");
})