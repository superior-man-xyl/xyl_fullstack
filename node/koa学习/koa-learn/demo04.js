//从原理来自己写一个路由

const Koa=require('koa');
const app=new Koa();
const fs=require('fs');

function render(page){
    return new Promise((resolve,reject)=>{
        let pageUrl=`./pages/${page}`;//文件的相对路径
        fs.readFile(pageUrl,'binary',(err,data)=>{//读文件
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })//binary指的是二进制
    })
}

async function route(url){
    let page='404.html';//先写一个默认的
    switch(url){
        case '/':
            page='index.html';
            break;
        case '/index':
            page='index.html';
            break;
        case '/todo':
            page='todo.html';
            break;
        case '/404':
            page='404.html';
            break;
        default:
            break;
    }
    let html=await render(page);//渲染

    return html;
}

app.use(async(ctx)=>{
 let url=ctx.request.url;//获得url
 let html=await route(url);//将url传给route方法
 ctx.body=html;
})
app.listen(3000,()=>{
    console.log("服务器已经启动");
})