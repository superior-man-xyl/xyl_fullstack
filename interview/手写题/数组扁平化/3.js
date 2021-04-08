//es6实现flat
function flatten(arr){
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
console.log(flatten([1,[1],[[2]]]));//输出[ 1, 1, 2 ]