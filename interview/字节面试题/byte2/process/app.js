const http=require('http');
// 怎么可以把这台机器所有CPU都用起来？多线程？充分把设备的潜力激发出来
module.export=http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/plain'
    });
    res.end('hello world');
}).listen(3000,()=>{
    console.log(`listen 3000`);
})