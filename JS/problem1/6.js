var reg=/(\d{4})-(\d{2})-(\d{2})/;
//（）括号分组
console.log(reg.test('0797-86-34'));

console.log(RegExp.$1);
console.log(RegExp.$2);
console.log(RegExp.$3);

reg.test('2018-86-34');
console.log(RegExp.$1+RegExp.$2+RegExp.$3);