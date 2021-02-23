# 云开发 最新的技术方案 serverless 不需要服务器

想做一个网站上线时 
    本地访问时 127.0.0.1 localhost
    买服务器的原因？ 拥有一个IP
    没有服务器怎么办？  - 有git静态服务器 但不够用

- 第一步：npm i -g serverless
- 第二步：建立 serverless.yaml
yaml:配置文件

 serverless init website-starter --name example
 再进入example运行命令
 serverless deploy


 # serverless init fullstack 可以直接在文件下建立一个全栈项目模板
  
  然后直接serverless deploy 就能发布了

备用方案总结：
tencent模板
1. serverless init fullstack --name=myblog
2. npm run bootstrap   （bootstrap 引导程序）
    - api 后端项目  还有安装依赖express
    - frontend 前端 也有安装vue之类的
    - db 数据库
3. 