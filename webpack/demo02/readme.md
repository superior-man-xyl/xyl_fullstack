# 史上最强工作流套件 webpack 企业级开发
完整的通知整个开发流程
1. parcel webpack
parcel 约定以 index.html作为入口  .styl .ts
webpack 入口为 js文件

一个企业级开发的传送带，

webpack 编译的
webpack-dev-server   webpack 一样的功能
npm install -D webpack-dev-server

webpack.config.js 配置 编译  http dev server

"scripts": {
    "build": "webpack"
  },
  通过这条脚本，其会找到webpack.config.js
  通过一个入口，根据一串文件的关系，构建静态资源

  npm i -D style-loader  -D表示安装在开发环境中

  entry -> module (CSS|JS?|PNG|VUE) -> output


  出错：webpack版本不兼容  删除node_modules 再npm i重新安装
