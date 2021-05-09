// 服务器端渲染
// 接受React在服务器端，处理Vitual DOM 生成 HTML ，就是些String

import {renderToString} from 'react-dom/server';//将虚拟DOM编译为字符串
import express from 'express';
import Home from '../containers/Home';
import React from 'react';
// import React from 'react';
//怎么兼容import，使用工作流

var app = express();
const content=renderToString(<Home/>);
app.get('/',(req,res)=>{
    res.send(`
        <html>
            <head>
                <title>hello</title>
            </head>
            <body>
            body>
                <div id="root">${content}</div>
                <h1>hello</h1>
                <p>谢永良</p>
            </body>
        </html>
    `)
})

app.listen(3001,()=>{
    console.log('服务在3001端口成功运行');
})