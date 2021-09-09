//判断是否是数组或者对象，一般不会比较函数
function isObject(obj) {
    return typeof obj === 'object' || obj !== null;
}

function isEquel(obj1, obj2) {
    if (isObject(obj1) && isObject(obj2)) {
        //说明是值类型比较
        return obj1 === obj2;
    }
    if (obj1 === obj2) {
        return true;
    }
    // 当两个都是对象或者数组，而且不相等时
    //深度比较
    //1. 先取出obj1和obj2的keys，比较个数
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }
    //2. 以obj1为基准，和obj2依次递归比较
    for (let key in obj1) {
        const res = isEquel(obj1[key], obj2[key]);
        if (!res) {
            return false;
        }
    }
    // 3 全相等
    return true;
}