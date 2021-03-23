//控制器
export const show=async(request,response)=>{
    const { postId }= request.params;
    response.send(`hello,post ,这里是文章${postId}`);
}