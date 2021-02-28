# react 
新特性 hooks
- 学习技术胖jspang react-router redux


1. 开发流程 react + hooks + ts ： 用于大型项目  加上 webpack

- 配置流程
    npm init -y
    npm i webpack --save-dev

    配置文件中写下webpack-cli的版本  注意该版本^3.3.12
    "devDependencies": {
        "webpack": "^5.24.1",
        "webpack-cli":"^3.3.12"
    }
    webpack，webpack-cli，webpack-dev-server
    webpack-cli 4.0 版本与 webpack 5 有兼容问题
    所以手动指定，然后npm i,根据安装依赖安装上不全的-cli

    npm i webpack-dev-server --save-dev

    创建webpack.config.js文件

    创建src文件夹 并加入文件index.html挂载点

    package.json 里写句脚本

    "scripts": {
    "start":"webpack-dev-server --mode development --inline --hot --open"
  },
  --mode development：开发阶段模式
  --inline：为入口页面添加“热加载”功能，即代码改变后重新加载页面。
  --hot：模块热替换，网页随时刷新，部分更新，而不是整个页面重新运行

  npm install css-loader style-loader file-loader url-loader html-webpack-plugin awesome-typescript-loader mini-css-extract-plugin --save-dev  ：管理文件的工具
  webpack loader机制 转译 或编译
  mini-css-extract-plugin  webpack插件
  awesome-typescript-loader  ts转译为js

  "scripts": {//加一条脚本
    "start": "webpack-dev-server --mode development --inline --hot --open",
    "build": "webpack --mode development"
  },

  npm i typescript --save-dev
  并且创建tsconfig.json配置文件，并设置内容

  js处理 babel：es6转es5
  npm install @babel/cli @babel/core @babel/preset-env @babel/polyfill --save-dev
  注意babel-loader新版本的支持也不好，要单独安装,@babel/?是新版本的安装方式
  npm install babel-loader --save-dev

    src里创建main.ts
  配置的差不多后 就 npm run start  运行脚本start
  npm run build 运行打包脚本

开始安装react  ract-dom
npm i react react-dom  --save
ts + react  @types/react @types/react-dom  react的类型约定   就像js的类型约定ts
npm i @types/react @types/react-dom --save-dev


运行流程理解： webpack通过配置文件webpack.config.js :从入口index.tsx->hello.tsx->配置文件中modules部分->awesome-typescript-loader->tyescript组件->tsconfig.json->jsx->babel-core->.babelrc->es5


- 新建一个 app.tsx

- index.tsx
入口文件 webpack entry

- react 16 后。可以在函数组件里直接使用状态
全面拥抱函数式编程   useState
使用 useState 超级函数
1. 创建了name状态
2. setName 修改状态
3. 初始值

- ts就是js加类型约束

围绕着name状态 两个组件开发实现
  App父组件中    状态name：defaultUserName
 使用的是
 //老办法
 this.state={
   name:'defaultUserName'
 }
 //es6中 出了个魔法函数 方便  this.   this.setState......都变成了下面那种形式
  const [name, setName] = React.useState('defaultUserName')
  //setName相当于this.setState({})


  npm i react-router react-router-dom @types/react-router @types/react-router-dom


<Switch>：其中的<Route>在路径相同的情况下，只匹配第一个，这个可以避免重复匹配；

- 大型项目的编写风格
  components 提供 index.tsx 文档一样，把这个目录的所有组件向外输出

- webpack 的优化
    1. entry 可以有多个入口
        引入的文件都可以打包到最后的output中
    2. bootstrap 引入是通过webpack 引入的 
        index.html app.tsx 不用在里面引入
    3. vendor [router, react, react-router-dom]
        lib 不用反复编译， 
        组件是会变的
        不用反复去打包 lib,而业务每次都要打包

- react-router 嵌套路由
分级：一般两级，不会超过三级
例如：
/-》Header首页
  /Albums(专辑页)
    /ALbums/:id某人专辑


- 应用的api应该都放到api文件夹里