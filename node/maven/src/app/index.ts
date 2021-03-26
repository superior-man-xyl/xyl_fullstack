//这个文件的使命是：app的创建以及基本配置  其最基本的配置就是中间件的配置
// 使用es6 module typescript会编译回es5 node的commonjs语法
import express from 'express';
import postRouter from '../post/post.router';
import {defaultErrorHandler}from './app.middleware'
const app=express();
const bodyParser=require('body-parser');
// 使 app 处于侍服状态  eventEmitter
app.use(bodyParser.urlencoded())
//body是post传来的数据，要加中间件，bodyParser 不然读取为空

// 由中间件来打理 其是个函数
// 所有的路由都在这里汇集

app.use(//函数
    //文章模块的路由存， 删，改，查
    postRouter,
    //用户相关的路由
    //其他路由。。。。

)
//用于处理各种错误
app.use(defaultErrorHandler);

export default app;