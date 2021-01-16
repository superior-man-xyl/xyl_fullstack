//思路：头一个顺序排序，为一个倒序，加起来，删除头一个尾一个，对每个数组都是这样
//array是个二重数组
// 使用map
// map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

// map() 方法按照原始数组元素顺序依次处理元素。

// 注意： map() 不会对空数组进行检测。

// 注意： map() 不会改变原始数组。
function snail(array) {
    var vector = [];
    while (array.length) {
      vector.push(...array.shift());
      array.map(row => vector.push(row.pop()));
      array.reverse().map(row => row.reverse());
    }
    return vector;
  }
  console.log(snail([[1, 2, 3, 4, 5],
                     [6, 7, 8, 9, 10],
                     [11, 12, 13, 14, 15],
                     [16, 17, 18, 19, 20],
                      [21, 22, 23, 24, 25]]));