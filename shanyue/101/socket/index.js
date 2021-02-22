// 启动web服务  http -> ? websocket 
const express = require('express'); // 网站的实例
const app = express();
const http = require('http').Server(app); // node 内置模块http
const io = require('socket.io')(http);//websocket io对象
// http 请求， 一去一来
app.get('/',(req,res)=>{
    // res.send('永良，腾讯');
    res.sendFile(__dirname + '/index.html')//node中超级变量 __dirname 总是指向被执行 js 文件的绝对路径
})

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('message',msg=>{
      console.log(msg);
      io.emit('message', msg);
  });
})

http.listen(3000, () => {
    console.log('http web 服务跑起来了');
}) // http协议， 让他在某个端口， 服务器， 


// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', function(socket){
//   console.log('a user connected');
// });

// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });

