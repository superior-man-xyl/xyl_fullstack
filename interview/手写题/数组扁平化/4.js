//但是对复杂数据类型不友好
function flatten(arr){
    return arr.toString().split(',');
}
console.log(flatten([[1,[1],[[2]]]]));//输出[ '1', '1', '2' ]

console.log([[1,[1],[[2]]]].toString());//输出字符串 '1,1,2'
console.log([[1,[1],[[2]]]].toString().split(','));//输出数组 [ '1', '1', '2' ]