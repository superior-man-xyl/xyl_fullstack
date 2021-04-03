//状态的转移  三个状态
//如何让执行器决定状态转移的处理
//thenable
class Promise{
    constructor(executor){
        this.state='pending';//初始化未完成状态
        //成功的值
        this.value=undefined;
        //失败的原因
        this.reason=undefined;

        this.onResolvedCallbacks=[];
        this.onRejectedCallbacks=[];

        //异步任务把结果交给resolve
        let resolve=(value)=>{
            console.log(value,'++++');
            if(this.state=='pending'){
                console.log('fulfilled,resolve执行',value);
                this.value=value;
                this.state='fulfilled'
                //接着执行onFulFilled
                this.onResolvedCallbacks.forEach(fn=>fn())
            }
           
        }
        let reject=(reason)=>{
            if(this.state=='pending'){
                console.log("出错了，reject状态执行",reason);
                this.state='reject';
                this.reason=reason;
                //接着执行onRejected
                this.onRejectedCallbacks.forEach(fn=>fn());
            }
        }

        try{
            executor(resolve,reject);//实参
        }catch(err){
            reject(err)
        }
    }

    //只一个promise已经解决了，完成了状态转移，把控制权交出来
    then(onFullfilled,onRejected){
        console.log('进入then****')
        //状态为fulfilled时，传入成功后的回调，将执行权转移
        if(this.state=='fulfilled'){
            console.log('onFUllfilled****')
            onFullfilled(this.value);
        }
        //状态为rejected时，传入失败后的回调
        if(this.state=='rejected'){
            onRejected(this.reason);
        }
        //存起来先,状态未转移时
        if(this.state=='pending'){
            this.onResolvedCallbacks.push(()=>{
                onFullfilled(this.value);
            })
            this.onRejectedCallbacks.push(()=>{
                onRejected(this.reason);
            })
        }
    }
}

new Promise((resolve,reject)=>{//HOC excutor 形参
    // 将花时间较多的任务封装起来，以实现异步变同步
    setTimeout(()=>{
        // console.log(0);
        resolve(10);
        // reject('卡住了')

        // throw new Error('出错了');//抛出一个错误,throw 语句允许您创建自定义错误
    },1000)
}).then((data)=>{//两个参数，resolve和reject,这里希望得到resolve里得到的参数
    console.log(data,'+++');//第一个函数作为形参传给上面的onFullfied
});//要保证then运行后（与前面的是同步执行的）能等到state变化后再执行