const Koa=require('koa');
const app=new Koa();
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
        let postData=await parsePostData(ctx)
        ctx.body=parseQueryStr(postData);//顺便解析，下面有写url解析的处理函数
        //得到json对象 {"userName":"15170725069","age":"18","webSite":"http://localhost:3000/"}
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

//url解析
function parseQueryStr(queryStr){
    let queryData={};
    let queryStrList=queryStr.split("&");//将url拆分为数组
    console.log(queryStrList);
    queryStrList.forEach((item)=>{
        if(/=/.test(item)){
            let [key,value]=item.split("=");
            value=decodeURIComponent(value);
            if(queryData.hasOwnProperty(key)){//判断是否有该属性，有就以数组形式，存多个值
                queryData[key]=[].concat(queryData[key],value);
            }else{
                queryData[key]=value;
            }
        }else{
            queryData[item]=true;
        }
    })
    return queryData;//返回url解析后的对象
}

app.listen(3000,()=>{
    console.log("服务已近启动了，在 http://localhost:3000/");
});