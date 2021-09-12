//instance使用：arr instanceof Array;
function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left); //获取到left的原型
    let prototype = right.prototype; //获取到构造函数的原型对象
    while (true) { //判断构造函数的原型是否在对象的原型链上
        if (!proto) {
            return false;
        }
        if (proto == prototype) {
            return true;
        }
        proto = Object.getPrototypeOf(proto); //原型链继续向下走
    }

}