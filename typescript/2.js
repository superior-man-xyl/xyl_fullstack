//TS写1.js的内容,TS像Java一样限定类型
var getUserInfoWithTs = function (user) { return "name:" + user.name + " age: " + user.age; };
console.log(getUserInfoWithTs({ name: 'kaola', age: 21 }));
