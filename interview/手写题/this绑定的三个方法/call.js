//利用this的上下文特性
Function.prototype.mycall = function (context = window) {
    //判断调用对象
    if (typeof this !== 'function') {
        throw new TypeError("Error")
    }
    //获取参数
    let arg = [...arguments].slice(1);
    let result = null;
    //将调用函数设为对象的方法
    context.fn = this; //这里就是把原函数赋给了context对象，fn的this就是context
    result = context.fn(...arg); //将参数赋值，立即执行得结果
    delete context.fn; //删除属性
    return result;
}