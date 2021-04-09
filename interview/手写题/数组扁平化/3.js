//es6实现flat
// some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。
// some() 方法会依次执行数组的每个元素：
// 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
// 如果没有满足条件的元素，则返回false。
// 在下面while循环中检测到，some没有遍历完就不会停止，只有在全都不满足条件时才返回false，
// 当有满足条件后返回true，while开始运行，解开一层数组，接着while还会继续运行，继续调用some，直到返回false
function flatten(arr){
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
console.log(flatten([1,[1],[[2]]]));//输出[ 1, 1, 2 ]
console.log([].concat(...[].concat(...[1,[1],[[2]]])));//[ 1, 1, 2 ]