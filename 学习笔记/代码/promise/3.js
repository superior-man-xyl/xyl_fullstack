const p1=new Promise((resolve,reject)=>{
    console.log('1');
    // resolve(1)//没有调用resolve改变状态就不能向下运行
})
p1.then(()=>{
    console.log('2');
}).then(()=>{
    console.log('3');
})