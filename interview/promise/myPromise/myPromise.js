const PENDING='pending';
const RESOLVED='resolved';
const REJECTED='rejected';

function myPromise(fn){
    const that=this;
    that.state=PENDING;
    that.value=null;
    that.resolvedCallbacks=[]//用于装回调函数

    function resolve(value){
        if(that.state==PENDING){
            that.state=RESOLVED;
            that.value=value;
            that.resolvedCallbacks.map((cb)=>{
                cb(that.value)//为回调函数打了括号，使其执行
            })
        }
    }

    function reject(value){
        
    }

    try{
        fn(resolve,reject)
    }catch(e){
        reject(e);
    }
}

myPromise.prototype.then=function(onFulfilled,onRejected){
    const that=this;
    onFulfilled=typeof onFulfilled==='function'?onFulfilled:v=>v;//不是函数就是什么就返回什么
    onRejected=typeof onRejected==='function'?onRejected:r=>{throw r};

    if(that.state===PENDING){
        that.resolvedCallbacks.push(onFulfilled);
    }

    if(that.state===REJECTED){
        onFulfilled();
    }
}

new myPromise((resolve,reject)=>{
    resolve('ok')
}).then((res)=>{
    console.log(res);
})