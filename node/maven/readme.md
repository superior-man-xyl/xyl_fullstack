<!-- 联合XB2一起学习 -->

- 全栈 node+ts
大厂需要这种的
- 数据库
    端口之间的通信 3306(数据库)->3000
    就像node里的fs http 模块 比较复杂和慢
    yarn add typescript tsc-watch（分清楚它们各提供什么服务）
    yarn add express @types/express

- MVC 
数据库->Model模型->Controller控制器->Router(API)路由
post在路由上向控制器请求
请求-》http-》req(url)->router->controller->Model->mysql2(翻译官)

- posts add增操作
controller->restful 路径
mysql post POST方式添加一条记录   /posts
- router 在哪里？ 接收数据
- controller 控制器
- model层 作为映射，对应资源 大型项目中叫service

- 单点入口 


yarn add body-parser  中间件bodyParse安装，用于协助读取body里的值