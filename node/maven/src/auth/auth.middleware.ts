import {Request,Response,NextFunction} from 'express'
export const authGard =(request:Request,response:Response,next:NextFunction)=>{
    //写这个中间件来检查是否登陆
    // if(request.user.id){

    // }
    console.log('到auth一游，验证用户身份');
    next(new Error('UNAUTHORIZED'))
}