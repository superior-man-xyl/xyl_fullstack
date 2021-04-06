restful的替代品
来自Facebook出品的查询方案 2015年

使用json-server模拟REST API(接口)
yarn add json-server
这东西有什么缺点？
其基于restful的概念，一切皆资源
url + action
db.json 资源中心
在 http://localhost:3001/results 这请求到了 db.json 的数据

数据库里 其把 db.json 所有数据一起查出来， select * 会有太多无用数据，浪费带宽
我们想 select name,sex from user
在这个基础上，设计了graphql 查询语言
1. 需要什么，就能通过设计查询方案，得到什么
2. 合并时，传统后端需要连很多表进行查询， 而其一次就够了

- 启动graphql
1. express；
2. 加入graphql中间件，每次查询graphql都会介入
graphqlHTTP play
3. schema hero + rootValue
4. graphql 可以省去很多请求浪费
返回一个data数据源
5. 前端可以自己决定用哪些字段，不用接收全部数据

如何快速的为这个项目添加一个前端页面——用express启动静态服务器