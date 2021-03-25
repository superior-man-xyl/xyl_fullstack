//负责文章模块的路由 
import express from 'express';
import * as postController from './post.controller';//其中就有store方法

const router=express.Router();


/**
 * 创建内容
*/
router.post('/posts',postController.store)//store使用了类型限定，store()里的参数在post.controller.ts中写了限定

/**
 * 获得文章列表，即获得内容
 */
// router.get('/posts')//get获得

export default router;