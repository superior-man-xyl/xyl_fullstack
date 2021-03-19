const koa =require('koa');
const mount =require('koa-mount')
const serve=require('koa-static')//引入koa-static
//静态文件要单独的提供一个 static 服务 -> cdn 
const app=new koa();
const fs=require('fs');

app.use(serve(__dirname+'/static/'));

app.use(
    mount('/', ctx => {
        ctx.body = fs.readFileSync(__dirname + '/max_count.html', 'utf-8');//使用这个返回html
      })
)

app.listen(1234);