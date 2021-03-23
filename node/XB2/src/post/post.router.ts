import express from 'express';//es6
import * as postController from './post.controller';

const router =express.Router();//得到路由实例
//restful 传id--某一篇文章
//模块化分工，这个文件只负责路由
router.get('/posts/:postId',postController.show);

export default router;