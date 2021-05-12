# 全栈项目
- react 全家桶，全面react hooks 函数化编程。
- 服务器端采用egg.js + ts + mysql 提供API服务。
- 数据库的说明文件。

mysql 关系型   mongodb 是NoSQL 文档型数据库 使用js语言操作
关系型业务适合mysql user post comment
mongodb 没有表的概念，是collection 集合  JSON文件组成的  适合很多杂的碎片化数据， 短视频之类

数据库连接 egg.js 的config.js
redis 内存数据库 KV 90% 都是重复的  所以就先查内存数据库，使用内存数据库里的数据，而不是从mysql里



后端程序和数据库是分离的，甚至在机器上是分离的
使用mysql时有 mysql2 作为数据库的驱动 有个model层   使用egg.js配置插件

koa/express   轻量级的node服务端开发框架
egg.js  企业级node服务端开发，更标准对新手更加友好，约定大于一切，看文档就可使用

项目执行顺序：
- app.ts 7001 启动web服务
- http访问由中间件打理
    路由器中间件 匹配到路由地址后，交给相应的controller
    http.createServer((req,res)=>{
        //这是这些框架底层都有的
    })

- 校验表单数据  交给 serverice 存储