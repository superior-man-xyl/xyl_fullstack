// let a=function(){
//     setTimeout(()=>{
//         console.log('aaa');
//     },1000)
// }
// let b=function(){
//     setTimeout(()=>{
//         console.log('bbb');
//     },500)
// }
// a();
// b();
//先打印bbb，aaa

let a=function(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('aaa');
        resolve('ok');
    },1000)
})
}

let b=function(){
    setTimeout(()=>{
        console.log('bbb');
    },500)
}

a().then((res)=>{//这个res接收的是resolve的ok
    console.log(res)
    b()
});
//现在执行顺序
//aaa
// ok 
// bbb