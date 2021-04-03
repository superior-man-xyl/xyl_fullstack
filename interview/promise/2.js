//状态的转移  三个状态
//如何让执行器决定状态转移的处理
class Promise{
    constructor(executor){
        this.state='pending';//初始化未完成状态
        //成功的值
        this.value=undefined;
        //失败的原因
        this.reason=undefined;
        let resolve=(value)=>{
            console.log(value,'++++');
            if(this.state=='pending'){
                console.log('fullfilled,resolve执行',value);
                this.value=value;
                this.state='fullfilled'
            }
           
        }
        let reject=(reason)=>{
            if(this.state=='pending'){
                console.log("出错了，reject状态执行",reason);
                this.state='reject';
                this.reason=reason;
            }
        }

        try{
            executor(resolve,reject);//实参
        }catch(err){
            reject(err)
        }
    }
    // then(){  留着第三步实现

    // }
}

new Promise((resolve,reject)=>{//HOC excutor 形参
    // 将花时间较多的任务封装起来，以实现异步变同步
    setTimeout(()=>{
        // console.log(0);
        // resolve(10);
        // reject('卡住了')

        throw new Error('出错了');//抛出一个错误,throw 语句允许您创建自定义错误
    },1000)
})