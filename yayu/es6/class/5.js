var obj = {};//空对象
//defineProperties 方法，如名定义属性 es6 定义
Object.defineProperties(obj, {
  'property1': {
    value: true,
    enumerable:false,//其默认是不可枚举的
    writable: true
  },
  'property2': {
    value: 'Hello',
    enumerable:true,//可不可枚举
    writable: false
  }
});
// console.log(obj.property1,obj.property2);
obj.property2="xyl"
console.log(obj.property2);//还是hello，不可写
console.log(Object.keys(obj));