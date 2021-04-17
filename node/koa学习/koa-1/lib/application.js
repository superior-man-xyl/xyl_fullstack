let EventEmitter=require('events')
let http=require('http')
let context=require('./context')
let request=require('./request')
let response=require('./response')

class Koa extends EventEmitter{//继承于event，使我们手写的Koa也能有错误处理机制
    constructor(){
        super();//超级继承
        this.fn;
        this.context=context;
        this.request=request;
        this.response=response;
    }

    use(fn){//use里传入回调函数
        this.fn=fn;//执行回调函数,保证其在listen后执行
       
    }

    createContext(req,res){//构建ctx
        const ctx=Object.create(this.context)//使ctx具备三种属性  交叉赋值
        const request=ctx.request=Object.create(this.request)
        const response=ctx.response=Object.create(this.response)
        ctx.req=request.req=response.req=req
        ctx.res=request.res=response.res=res
        request.ctx=response.ctx=ctx
        request.response=response
        response.request=request
        return ctx
    }

    handleRequest(req,res){
        let ctx=this.createContext(req,res)
        this.fn(ctx)//为了方便调用fn，多封装一层
        res.end(ctx.body)
    }

    listen(...args){
        let server=http.createServer(this.handleRequest.bind(this));
        server.listen(...args);
    }
}

module.exports=Koa;