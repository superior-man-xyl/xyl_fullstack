// 学习更优秀的方式
//直接把用toString()方法把数字转化为二进制的字符串了
countBits = n => n.toString(2).split('0').join('').length;
console.log(countBits(3));
