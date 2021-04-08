//直接使用Array.prototype.flat() 来直接实现数组扁平化
console.log([1,[1],[[2]]].flat(2));//里面指定拉开几层数组。默认一层
//输出了  [ 1, 1, 2 ]