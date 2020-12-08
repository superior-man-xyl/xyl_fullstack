# 基于百度大脑做 node AI应用

- node 项目搭建
    1.运行在后端
    npm 命令集
     - npm init 初始化命令
     package.json
     scripts(脚本)
     -y
     - npm run dev
     例如：node index.js
    - npn,yarn 都叫包管理工具
    因为有第三方的库
    - npm i -g baidu-api-sdk
     安装到全局
     不带-g 当前项目下
     - node_modules 目录 

     -AI 作为黑盒子
     SDK

     - fs 模块
     1.语言内置模块
     fs.readFile/writeFile/isDirectory/staStas
     2.url,callback 异步的
     io操作容易出错误，
     先处理错误，err第一位
     data 数据

      npm i baidu-aip-sdk

      1.16.0:(主版本号).(子版本号).(阶段版本号)
     - 主版本号(1)：当功能模块有较大的变动，比如增加多个模块或者整体架构发生变化。此版本号由项目决定是否修改。

     - 子版本号(16)：当功能有一定的增加或变化，比如增加了对权限控制、增加自定义视图等功能。此版本号由项目决定是否修改。

     - 阶段版本号(0)：一般是 Bug 修复或是一些小的变动，要经常发布修订版，时间间隔不限，修复一个严重的bug即可发布一个修订版。此版本号由项目经理决定是否修改。
