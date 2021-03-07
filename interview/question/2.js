let obj={name:'obj'};//引用数据类型
console.log(obj.toString());//[object Object]
console.log(typeof null);//object    null的类型是object对象
console.log(Object.prototype.toString.call(null));//[object Null]


//可以运行吗？  可以
'1'.toString();
//'1'是简单数据类型，怎么使用.toString()的
//隐式转为对象  暂时的,进行操作时开辟空间，结束后马上关闭空间
//Symbol和BigInt不行转变为对象
var s=new String('1');
console.log(s);//[String: '1']
console.log(s.toString());//1