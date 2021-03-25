import {Request,Response} from 'express';//来自于 @types/express
import {createPost} from './post.service'


export const store=async(
    request:Request,//ts的写法，一方面是类型约束，另一方面是会提供代码提示，即后面泄漏个.会弹出可能的选择
    // response:Response
    // request,
    response
)=>{
    console.log(request.body,'//////////');
    const { title,content }=request.body
    //存 -》 数据存储服务service
    const data=await createPost({ title,content
        // ,id:1 
    })
    response.status(201).send('保存成功')//成功后，就发送这个字符串
//200:请求成功。一般用于GET与POST请求
//201:已创建。成功请求并创建了新的资源

}