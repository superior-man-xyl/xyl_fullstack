// 为什么koa里面没有req
let url=require('url')
let request={
    //使ctx.url==ctx.request.url  即设置一层代理，直接跳过中间步骤
    get url(){
        return this.req.url
    },
    get path() {
        return url.parse(this.req.url).pathname
      }//和url不同的是/abc?a=0  url拿到全部，path只拿到/abc
}

module.exports=request;