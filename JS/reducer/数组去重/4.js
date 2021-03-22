function unique(arr) {
    const result=new Set(arr);
    return [...result];//使用扩展运算符将Set数据结构转为数组
}

console.log(unique([1,2,3,4,4,5,5,5,6,7]));