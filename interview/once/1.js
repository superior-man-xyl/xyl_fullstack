//一个函数 console.log 函数执行了 记住返回值
const funcA=()=>{
    console.log('call');
    return 3;
}
//闭包？ 延长作用域
function once(f){
    //第一次的时候，执行，并返回值
    //第二次就直接返回值
    let result
    let revoked=false//判断是否调用过
    return (...args)=>{
        console.log(args);
        if(revoked)return result
        const r =f(...args);
        result=r
        revoked=true
        return r
    }
}
let once_f=once(funcA);//先不执行，返回一个新的函数
console.log(once_f(1,2,3));//只在这里执行了console.log   //输出call 和 3
console.log(once_f());//3
console.log(once_f());//3