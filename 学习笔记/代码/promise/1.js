function timeout(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms,'done')//第三个参数相当于为前面的回调传参数
    });
}

timeout(100).then((value)=>{
    console.log(value);//done
})