const express = require('express');
const fs=require('fs');
const path=require('path');
const app=express();
const port=3000;
const md5 = require('md5');

app.get('/',(req,res)=>{
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <title>Document</title>
        </head>
        </head>
        <body>
        demo1
        <script src="/demo.js">
        </script>
        </body>
        </html>
    `)
})

//demo.js 没有被读取，出现404
//路由是 /demo.js
//fs把他读取并发送流

app.get('/demo.js',(req,res)=>{
    console.log('response here');
    //如果浏览器带上一个？ 表达他有这个文件 且时间是多少
    //返回文件
    const jsPath=path.resolve(__dirname,'./static/js/demo.js');
    let status=fs.statSync(jsPath);//返回文件的所有属性
    // console.log(status,'--------');
    //输出
    // Stats {
    //     dev: 3295205824,
    //     mode: 33206,
    //     nlink: 1,
    //     uid: 0,
    //     gid: 0,
    //     rdev: 0,
    //     blksize: 4096,
    //     ino: 4222124650689391,
    //     size: 27,
    //     blocks: 0,
    //     atimeMs: 1618314483327.5205,
    //     mtimeMs: 1618314483327.5205,
    //     ctimeMs: 1618314483327.5205,
    //     birthtimeMs: 1618314449844.9985,
    //     atime: 2021-04-13T11:48:03.328Z,
    //     mtime: 2021-04-13T11:48:03.328Z,
    //     ctime: 2021-04-13T11:48:03.328Z,
    //     birthtime: 2021-04-13T11:47:29.845Z
    //   } --------
    let lastModified=status.mtime.toUTCString();
    let cont=fs.readFileSync(jsPath);
    //方案二 使用Etag
    let etag=md5(cont);//md5对一个文件进行加密
    if (req.headers['if-none-match'] === etag) {
        res.setHeader('ETag', etag);
        res.writeHead(304, 'Not Modified');
        res.end();
        return;
      }
    //方案一  下一个方案是种个etag
    // if(lastModified==req.headers['if-modified-since']){//比对
    //     res.writeHead(304,'Not Modified');
    //     res.end();//反馈的东西为空，因为，304不需要响应体，让浏览器使用本地缓存
    //     return;
    // }
    console.log(lastModified,'+++++');// Tue, 13 Apr 2021 11:48:03 GMT +++++
    // 1. 把文件返回
    // 2. 如何在返回文件的同时，给它加一个标志，加上创建时间，——http Etag
    //设置响应头，
    res.setHeader('Cache-Content','public, max-age=30')
    res.setHeader('last-Modified',lastModified)
    res.setHeader('Etag',etag)
    res.writeHead(200,'Ok')
    res.end(cont)
})

app.listen(port,()=>{
    console.log("服务器端已经启动");
});