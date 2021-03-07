//隐式类型转换
// 规则：
// 1. 当一侧操作数为String类型时，会优先将另一侧转换为字符串类型
console.log(1+'2');//12
console.log(typeof(1+'2'));//string

// 2. 当一侧操作数为Number类型时 另一侧会转换为Number类型  string>number
console.log(1+true);//2

// 3. 当Number类型另一侧为引用类型时，就复杂点了
// 看对象在在表达式里是什么  什么都没就默认[object,object]
console.log(1+{});//1[object Object]
console.log(1+{add:function(x,y,z){z=x+y}});//1[object Object]
console.log(1+{toString:function(){return 'ddd'}});//1ddd
console.log(3*{valueOf:function(){return 5}});//15
console.log(3+{},3*{});//3[object Object] NaN
console.log({}+{});//[object Object][object Object]