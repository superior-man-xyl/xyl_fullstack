https://www.w3cschool.cn/socket/socket-ulbj2eii.html

1.npm i express   安装基于 Node.JS 的 web 框架 express  MVC
    - 引入express require('express')
    - app = express() 中小型应用适合用node
    - http服务 简单， 传输完就断开的 简单协议
    - app.get('/'.(req,res)=>{
        res.send('')
    })
    - 101 协议的跳转？ 聊天室。websocket，一直保持链接
    聊天室是HTTP协议无法实现的，所以101，切换新协议进行
    - app.listen(:port)

2.npm i socket.io 安装socket.io
    - 101 在wx 应用场景下， 服务器用socket.io(封装了websocket的实现),
    客户端主动的申请切换协议 101
    - socket.io 在服务器端启用后，他会提供/socket.io.js/socket.io.js
    - 客户端n:1服务器

