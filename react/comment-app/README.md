 1. npm i -g create-react-app  安装react应用程序,脚手架
 2. create-react-app comment-app
 3. npm run start  运行脚本

或者 npx create-react-app comment-app    
Node 自带 npm 模块，所以可以直接使用 npx 命令  所以不用安装就能直接用
npx 还能避免全局安装的模块。比如，create-react-app这个模块是全局安装，npx 可以运行它，而且不进行全局安装。
$ npx create-react-app my-react-app
上面代码运行时，npx 将create-react-app下载到一个临时目录，使用以后再删除。所以，以后再次执行上面的命令，会重新下载create-react-app。
# react 官方项目脚手架 create-react-app

1. creat-react-app  项目开发模板，快速开发
- src 开发目录
    - index.js 入口文件

- 一个评论应用
怎么做？使用react，react 是用来做UI界面的
组件化
评论应用拆分成多少个组件？组合一些标签来完成一个功能？mvvc+组件化
CommentApp
    - commentForm  表单
    - commentList  评论列表
        - commentItem itrm项目

