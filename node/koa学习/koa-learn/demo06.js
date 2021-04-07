//路由的层级
const Koa=require('koa');
const Router=require('koa-router');

const app=new Koa();

let home=new Router();
home
    .get('/xyl',async(ctx)=>{
        ctx.body="Home xyl page";
    })
    .get('/todo',async(ctx)=>{
        ctx.body='Home todo page'
    })

let page=new Router();
page
    .get('/xyl',async(ctx)=>{
        ctx.body="page xyl page";
    })
    .get('/todo',async(ctx)=>{
        ctx.body="page todo page"
    })

//父级路由
let router=new Router();
//装载子路由
router.use('/home',home.routes(),home.allowedMethods());
router.use('/page',page.routes(),page.allowedMethods());

//加载路由中间件
app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3000,()=>{
    console.log("服务器已经在3000端口启动");
})