# js常考考点
js是个单线程的语言，今天学习与数据通信相关
- promise  五星  异步
- vue/react 不重要，底层和基础最重要，算法和红宝书

今天步骤：(输入ctrl+c可以停止json-server)
1.npm init -y  初始化了，建立了一个package.json
2.npm i json-server 启动json服务
3.建立数据文件  db.json
json是js 前端和后端通信的数据文件
怎么启动（使用命令行）db.json成后台数据源？
在package.json下写（"脚本名字":"命令"）脚本名字随便取
"scripts": {
   "server:json":"json-server --watch db.json"
  },//一直监听 --watch
  接下来在命令行输入  npm run server:json 运行脚本
  得到：
  Resources
  http://localhost:3000/users

  Home
  http://localhost:3000
  
  访问http://localhost:3000/users就能得到db.json的数据文件

  后台数据已经搭建完成，http server 3000端口 db.json作为数据源
  提供出来访问  

  - 问题要在db.json中加一个用户数据怎么办？
  json-server提供了http服务 GET方式获得 http://localhost:3000/users数据
  使用POST 保存表单 name-》 http://localhost:3000/users，添加数据

4.使用postMan来模拟，直接post数据到 http://localhost:3000/users，db.json会多出一条数据
- postman 可以用来做http访问代理
POST非常方便使用
- ajax来表达
JS最重要的考点是 XMLHttpRequest对象
1.历史性的突破，带来前端主动请求数据的能力，微博就是Ajax应用
前端更加主动了，Ajax加上DOM编程，页面会变得丰富，动态
2.http://localhost:3000/users，一切皆资源 Restfull
数据资源 GET 请求动作 path/users []
POST 新增的 /users {name:'xxx'}
3.api:  XMLHttpRequest  ActiveXObject("Microsoft.XMLHTTP")
后面的是为了兼容ie低版本，这也叫浏览器嗅探，使用if else
let httpRequest;        http协议
步骤：
- 创建好对象
- .open('GET','url地址',true)打开一个请求通道
  .send() 这个请求就发送出去了
   .onreadystatechange（onreadystatechange 是一个事件句柄）
   XMLHttpRequest.Done 完成了
   JSON.parse(httpRequest.responseText) 返回的数据
   json数组变为-》html数组 map 使用`<li>${user.id}-${user.name}</li>`  innerHTML

-前端+后端   
live-server提供前端服务 index.html  8080端口
json-server 后端数据 3000端口
前端和后端要数据通信？怎么做
前端去拉取后端的数据
获取：GET方式 从http://localhost:3000/users
保存：POST方式到http://localhost:3000/users

