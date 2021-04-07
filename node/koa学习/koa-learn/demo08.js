const Koa=require('koa');
const app=new Koa();

app.use(async(ctx)=>{
    if(ctx.url==='/index'){
        ctx.cookies.set(
            "MyName","XYL",{
                domain:'127.0.0.1',
                path:'/index',//配置cookie有效的哪个页面
                maxAge:1000*60*60*24,//有效时间一天
                httpOnly:false,
                overwrite:false//是否允许重写
            }
            //写入属性名和值,以及其他参数，这样列好
        );//写入cookies
        ctx.body='Cookie is ok'
    }else{
        //读出Cookies
        if(ctx.cookies.get('MyName')){
            ctx.body=ctx.cookies.get('MyName');
        }else{
            ctx.body="cookie is null"
        }
    }
})

app.listen(3000,()=>{
    console.log('服务器已经在3000端口启动');
})