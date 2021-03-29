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

数据库操作的sql代码：
CREATE TABLE `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

// AUTO_INCREMENT=26   指的是自增初始值为26

 - mysql 先建表  再操作  关系型数据库  用SQL
    而 mongodb是先操作后建表  也是NOSQL 不需要sql语句

    使用[mysql2](https://segmentfault.com/a/1190000020965182)


    yarn add dotenv   环境变量加载工具

  - user业务
  1. user.router.ts 入口  POST  /registrer
  2. user.controller.ts 用户名或密码不为空， 这是绝对不能存的，会带来数据库的问题，用户端 管理数据库
  3. user.service.ts 存数据
  4. user.middleware.ts 检测是否有存在的用户名？  注册
  POST /register  checkIsNameExist 然后 next() 然后 register

  数据库里不能存明文的密码  yarn add bcrypt  安装这个第三方库

  next函数主要负责将控制权交给下一个中间件，如果当前中间件没有终结请求，并且next没有被调用，那么请求将被挂起，后边定义的中间件将得不到被执行的机会。