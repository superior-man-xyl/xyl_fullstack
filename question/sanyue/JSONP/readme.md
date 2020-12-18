1.http协议
tcp/ip协议 HTTP在上层
web server  RestFul

JSON是资源文件，这里的装了喜欢的运动员，然后HTTP提供下服务？----RQ服务（请求与响应）
url http://127.0.0.1/players.json
动作 GET 和 POST
live-server:静态资源，一般用于前端
JSON server:json-server可以直接把一个json文件托管成一个具备全RESTful风格的API,并支持跨域、jsonp、路由订制、数据快照保存等功能的 web 服务器

url->资源 resources

跨域问题 域名不一样 协议不一样 http->https 端口不一样3000->8080
json-server 带有跨域能力
而js是不允许跨域的 https://www.runoob.com/try/ajax/jsonp.php
不支持？解决方案是 JSONP ---JSON with padding

这里用了DOM编程，document.createElement("script")
 script.src="https://www.runoob.com/try/ajax/jsonp.php?jsoncallback=callbackFunction";
 document.body.appendChild(script);


 - 文章

 用前端实现底层
 1.fetch promise thenable能实现去服务器端通信
2.DOM API
tree
document.createElement()
父节点.appendChild(子节点)
document.createTextNode()


http 底层协议
请求响应  url+method
数据格式是 json

跨域 为了安全（保护数据） 只要域名或端口等有异，就是跨域
json-server   是本地的  自带解决方案  
JSONP fn(data) 在页面端预留一个函数fn

response 来到客户端
script 返回来 fn(data)

代码有一定的功能区分时，一定写函数
createUserElement =(user)=>{
    const user=createElement;
    return user;
}

使用了es6的 for of