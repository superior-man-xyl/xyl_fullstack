# ES6
- js的最新版本
 传统es5 + 最新的es6 + 版本
 1.Es6手册，阮一峰
 https://es6.ruanyifeng.com/
2.ES6 15篇

ES6知识点通过大厂的审核
通过阮一峰的ES6在线刷，每周看一篇 冴羽的文章

过程：
1.HTTP Server
live-server 启动，HTTP服务，
以协议为 http://的形式
fetch(url)   //本质是promise的一个实例
.then(data=>{

}) //因为是异步的，所以要等

2.let p1=new Promise((resolve,reject)=>{
    resolve(2)
})  //说明有费时的任务 一定要使用异步，不能同步

3.p1.then()

4.同步
一步cpu计算时间就可以快速执行完的指令
例如加减乘除 变量称量，一下就能执行完

5.异步，多线程
发端于耗时功能需求
定时器以后发生 setTimeout
promise 与它的api-->fetch
resolve():帮助异步任务回到执行流被解决，之前让别的先执行，后面再用resolve取回来执行，回到执行流
let p1=new promise();
let p2=new promise();