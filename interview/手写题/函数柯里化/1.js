// 柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术
function curry(fn) {
    let judge = (...datas) => {
        if (datas.length == fn.length) {
            //函数的length属性表示其期盼接受到的参数的个数
            return fn(...datas);
            //只在参数数量达到要求才输出值
        }
        return (...data) => {
            return judge(...datas, ...data);
        }
    }
    return judge;
}
//测试
function add(a, b, c) {
    return a + b + c;
}
console.log(add(1, 2, 3)); //6
let curryAdd = curry(add);
console.log(curryAdd(1)(2)(3), 'curry') //6 curry