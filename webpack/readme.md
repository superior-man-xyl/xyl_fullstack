# 进阶的开发方式

- 之前学了parcel，parcel用于轻量级的代码
- parcel的上一级 webpack
- webpack 是面试的重灾区
其是一个工作流程，没有webpack，何以代码？
1.build 打包为了上线 dist/    dev  src/开发阶段
    build：打包 编译 例如 C语言的.c .o javac (执行脚本 "build":"webpack --mode=development")
2.入口文件 index.html

main.js->bundle.js
js es6|7|8|9|10 老的浏览器不支持 要编译一下
stylus-》css 要编译   npm run build 编译

写的代码 build编译一下  成为用户执行的代码    （例如，高版本降级低版本）
webpack 来执行代码生成工艺
webpack --mode=development  webpack命令


操作流程：
 npm init -y
 "scripts": {
    "build":"webpack --mode=production"
  },
  npm i webpack

  建立webpack.config.js配置文件

  npm install -D webpack-cli

  npm run build
