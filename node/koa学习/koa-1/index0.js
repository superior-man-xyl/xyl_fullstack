//用原生的方式去启动一个web服务

let http=require('http')

let server = http.createServer((req,res)=>{
    res.end('hello Jak')
})

server.listen(4000,()=>{
    console.log('服务器启动了')
});