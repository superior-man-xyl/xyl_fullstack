对应mobx-todo-list
- 1. url 在浏览器上输入后，发生了什么，越详细越好
- 2. 要在react 项目中完成article 数据得展示，你会怎么设计，越详细越好
article model mongodb mysql 
Article 组件
1. Store
2. API前后端
3. 组件MVVM
过程：
1. url设计   /articles  /articles/:id
2. react-router-dom  router 配置 前端路由SPA（Single Page Application）
3. 使用mobx 数据管理
provider Store 做一个分支 Article  (把一个大仓库分成多个部分，不同部分子分支负责不同类型的事情)
mobx observerable @action getAticles getArticleById
4. API 
后端URL 在哪里？
5. Article相关组件 @observe store
componentDidMount

路由有多个模块
/users  /articles  /goods
数据结构收到中央

#/article/algood-cabm8p    以井号开头就是hashRoute
http://localhost:3000/#/article/algood-cabm8p
<App /> 外面包一层 HashRouter 

总结下：:3000/#/ HashRouter 
:3000/ HistoryRouter
/article?:id
:3000/#/article/dfdf121  -> Route match 匹配到了
