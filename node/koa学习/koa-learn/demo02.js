//GET请求怎么接收？
const Koa=require('koa');
const app=new Koa();
app.use(async(ctx)=>{
    let url=ctx.url;

    //从request中接收请求Get
    let request=ctx.request;
    let req_query=request.query;
    let req_querystring=request.querystring;

    //从上下文对象ctx中获取Get请求
    let ctx_query=ctx.query;
    let ctx_querystring=ctx.querystring;

    ctx.body={
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }
    //http://localhost:3000/?name=谢永良&age=18 得到下面
    // ctx_query: {name: "谢永良", age: "18"}
    // ctx_querystring: "name=%E8%B0%A2%E6%B0%B8%E8%89%AF&age=18"
    // req_query: {name: "谢永良", age: "18"}
    // req_querystring: "name=%E8%B0%A2%E6%B0%B8%E8%89%AF&age=18"
    // url: "/?name=%E8%B0%A2%E6%B0%B8%E8%89%AF&age=18"
});

app.listen(3000,()=>{
    console.log("demo02在'127.0.0.1:3000'启动了");
});