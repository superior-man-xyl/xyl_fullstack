Promise.prototype.finally=function(callback){
    let p=this.constructor;
    // console.log(p);//[Function: Promise]
    return this.then(
        (value)=>{
           return p.resolve(callback(value)).then(()=>value)
           //不仅要成功错误都执行还要能有下一步
        },
        (error)=>{
            return p.resolve(callback()).then(()=>{throw error})
        }//不管是fullfilled还是rejected都会执行回调函数
    )
}

Promise.resolve(2).finally((value)=>{console.log(value)})