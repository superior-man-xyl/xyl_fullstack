const Koa = require('koa');
const app = new Koa();
//启用中间件 一个个函数服务于app，访问者
//node server基本思路
app.use(async (ctx)=>{
    //ctx 是request response 合集
    ctx.body='hello world';
    if(ctx.url=='/index'){//这个代码是先到/index里种下cookies,然后到/里看看能不能查看
        //设置cookies   
        //在服务器端设置，种在客户端，客户端会每次带上cookies向服务器发送请求，这样服务器就能知道客户端身份
        ctx.cookies.set('uid','1212165',{
            //cookies是有域名限制的，比如淘宝的cookie和京东的，为安全

            domain: '127.0.0.1',//域名，注意域名localhost和127.0.0.1虽然是同一个地址，
            // 但域名是不同的，只有使用127.0.0.1访问时才能种下cookies

            maxAge: 1000*60*60*24,//有效时间

            path:'/index',//添加路径后就限定了cookie存在的网页,127.0.0.1:1234/就不能访问cookies了

            // expires:new Date('2020-1-1')//设置过期时间为以前就是删除,有有效时间就没用,按有效时间算

            httpOnly:false//对于web安全非常重要,为false就会被js脚本读取和操作,
            // 控制台试试document.cookie,false时可以拿到uid,默认是true
            //如果cookie中设置了HttpOnly属性(为true)，那么通过js脚本将无法读取到cookie信息，
            // 这样能有效的防止XSS攻击，窃取cookie内容，这样就增加了cookie的安全性，
        })
        ctx.body='/index';
    }else if(ctx.url=='/'){
        // ctx.body='/'
        if(ctx.cookies.get('uid')){
            ctx.body=ctx.cookies.get('uid')
        }else{
            ctx.type = 'text/html;charset=utf-8';
            ctx.body = 'Cookie is none';
        }
    }
})


app.listen(1234, () => {
  console.log('server is starting at port 1234')
})
