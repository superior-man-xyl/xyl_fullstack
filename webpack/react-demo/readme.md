# 前端三个最重要三个知识点
1. es6
2. webpack  @5.17.0
安装步骤
npm i -g webpack: 全局安装webpack
npm i -g webpack-cli: webpack的周边生态  @4.4.0
3. react

- webpack 处理的入口，一定是js文件

写代码时在src/index.js  上线的dist/main.js
webpack 有着掌控力

- react 初体验？
1. 每个文件都要引入下react
react 负责提供组件（小程序有内置的组件概念，网页，
）模板的编译功能{{}} {name} 数据绑定。。。
```js
import React from 'react';    
import ReactDOM from 'react-dom';
```
react哪里来：npm i react react-dom


- index.js entry 引入了test.jsx
react 语法中JSX语法，用来表示模板
```js
 render(){
        return(
            <p>测试一下</p>
        )
    }
```
webpack 处理一切的静态文件，bundler打包器
.jsx->.js
loader 

npm i babel-loader -D  :-D devDependencies  开发依赖，
指在"devDependencies": {
    "babel-loader": "^8.2.2"
  }下

  npm i @babel/core @babel/preset-env @babel/preset-react
  得到：
  "devDependencies": {
    "@babel/core": "^7.12.10",
    "@babel/preset-env": "^7.12.11",
    "@babel/preset-react": "^7.12.10",
    "babel-loader": "^8.2.2"
  }