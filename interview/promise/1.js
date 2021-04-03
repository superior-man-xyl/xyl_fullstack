// 实现三种状态 Promise的类

//这里实现excutor执行器
class Promise{
    constructor(executor){
        // 1. cb(回调函数)的意义是什么？
        // exexutor 语义化  执行器 立即执行
        // 2. resolve 应该是一个函数
        // 3. 状态只能从一个状态到另一个状态
        // payload 固定格式 执行结果
        // error 报错信息
        let resolve=(data)=>{ console.log(data);};
        let reject=()=>{};
        executor(resolve,reject);
    }
}

new Promise((resolve,reject)=>{//HOC  形参
    // 将花时间较多的任务封装起来，以实现异步变同步
    setTimeout(()=>{
        console.log(0);
        resolve(10);
    },1000)
})