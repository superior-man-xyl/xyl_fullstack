# 开发工作流，交给node去做

- 工作内容和工作流程是两码事
- 轻量级的开发流程
parcel
- 重量级的开发流程
webpack  babel

- live-server http静态服务
 stylus --watch style.styl -o style.css  使用stylus的编译
 初级阶段的开发流程-》高级阶段

 多个命令行，有点复杂，怎么统一起来？

 - 轻量级的前端开发流程套件 parcel
 - node 做开发流程工具
 npm init -y
 npm i parcel 安装在当前目录下
 - npm node package management
 yarn add parcel
 yarn add stylus -D
 脚本
"start": "parcel index.html"
写到
"scripts": {
    "start": "parcel index.html"
  },
运行脚本(使用parcel来启动页面)
 npm run start
 生成
 Server running at http://localhost:1234 
√  Built in 5.66s.
 http://localhost:1234 就是页面了（html里链接的css直接就是style.styl,就直接使用了）

 - 现代开发工艺
 parcel live-server+stylus+...全部包圆
 index.html 是入口文件 http 服务 1234
 built编译stylus->css
 在html里找到.styl, devDependencies style.styl -> style.css
  src / 开发目录 js