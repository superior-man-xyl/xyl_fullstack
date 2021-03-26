# xyl_fullstack
谢永良的前端全栈学习代码仓库

view-source是一种协议，早期基本上每个浏览器都支持这个协议。后来Microsoft考虑安全性，对于WindowsXP pack2以及更高版本以后IE就不再支持此协议。但是这个方法在FireFox和Chrome浏览器都还可以使用。 如果要在IE下查看源代码,只能使用查看中的"查看源代码"命令.
　　以前的使用方法：在浏览器地址栏中输入
　　view-source: sURL
　　回车即可看到当前网页的源代码了。
JS用法:
       window.location="view-source:" + window.location

最小学习原理，学习最少的东西，就去实践，实践中继续学习
问题：
- 研究页面怎么先出现页面,再加载出一些难加载的图片
图片懒加载
如果body及其子元素的高度设置为窗口高度时，html上也要添加
document：
- js/drap_drop

# 资源
- react hooks 项目
- 讶羽 js系列 小黄书
- 山月 神三元 ：面试系列
- leetcode

ts + react + graphql + koa 做一个项目

node——Koa
浏览器——react

npm install moduleName  #安装模块到项目目录下，该方法默认在package文件的dependencies节点写入依赖（所以跟只加 --save的命令是一样的）。
npm install -g moduleName  # -g 的意思是将模块安装到全局，具体安装到磁盘哪个位置，要看 npm config prefix 的位置。
npm install --save moduleName  # --save 的意思是将模块安装到项目目录下，并在package文件的dependencies节点写入依赖。
npm install --save-dev moduleName  # --save-dev 的意思是将模块安装到项目目录下，并在package文件的devDependencies节点写入依赖。

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


MVC模式中，M是指业务模型，V是指用户界面，C则是控制器，使用MVC的目的是将M和V的实现代码分离，从而使同一个程序可以使用不同的表现形式。其中，View的定义比较清晰，就是用户界面。