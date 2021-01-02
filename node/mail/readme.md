使用node写一个发送邮件的程序
#node 自动发送文件，node还能做爬虫,文件操作等等。

- 过程：1.npm init -y  初始化   得到一个package.json的文件
2.npm i nodemailer   {之前用过 npm i -g stylus (多了个-g 指的是global，全局安装。本项目是安装到当前项目)}
3.写一个index文件作为入口
4. npm i axios  
5. npm i node-schedule  定时器

- 重点 JS require + module.exports  common.js 模块化
1. 内置模块（例如 fs）
2. 自己封装的模块（例如 a.js），一个文件就是一个模块，一个文件夹就是一个模块组
    原始-》近现代 module+require -》 现代 docker+k8s（kubernetes k8s是为容器服务而生的一个可移植容器的编排管理工具） 快速运维
3. nodemailer 常用的邮件模块
