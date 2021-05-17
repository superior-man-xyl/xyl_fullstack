Function.prototype.mybind = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error');
    }
    //获取参数
    var args = [...arguments].slice(1);
    var fn = this;
    return function Fn() {
        //根据调用方式不同传入不同的值
        return fn.apply(
            this instanceof Fn ? this : context,
            args.concat(...arguments)
        )
    }
}