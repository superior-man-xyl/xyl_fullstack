//用于返回一个app的模块 给main里用
//使用require是commonjs的
//import 是es6的模块化的  使用ts就可以使用es6 ts会编译它成为require
//这样我们就能引入ts写node，模块化更加优秀
import express from 'express';//es6的模块引入
// 引入路由模块
import postRouter from '../post/post.router'

const app=express();
//启用中间件  资源在哪里
app.use(
    postRouter //文章路由
)

export default app;//作为功能模块