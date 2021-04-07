//使用中间件进行url解析

const Koa=require('koa');
const app=new Koa();
const bodyparser=require('koa-bodyparser');

app.use(bodyparser());//引用中间件

app.use(async(ctx)=>{
    //分辨是POST请求还是GET，还是路径写错
    if(ctx.url==='/'&&ctx.method==='GET'){
        //是GET就显示表单页面
        let html=`
        <h1>Koa2 request post demo</h1>
        <form method="POST"  action="/">
            <p>userName</p>
            <input name="userName" /> <br/>
            <p>age</p>
            <input name="age" /> <br/>
            <p>webSite</p>
            <input name='webSite' /><br/>
            <button type="submit">submit</button>
        </form>
        `
        ctx.body=html;
    }else if(ctx.url==='/'&&ctx.method==='POST'){
       let postData=ctx.request.body;
       //因为使用了中间件。所以url不用自己处理了。已经被中间件处理好了，成立json格式
       ctx.body=postData;
    }else{//两种都不是，就给个404
        ctx.body='<h1>404!</h1>'
    }
})

function parsePostData(ctx){//转换post数据
    return new Promise((resolve,reject)=>{
        try{
            let postdata="";
            ctx.req.addListener('data',(data)=>{
                postdata+=data;
            })
            ctx.req.on('end',function(){
                resolve(postdata);
            })
        }catch(error){
            reject(error);
        }
    })
}

app.listen(3000,()=>{
    console.log("服务已近启动了，在 http://localhost:3000/");
});