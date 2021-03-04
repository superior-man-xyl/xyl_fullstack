// symbol
//是es6引入的原始数据类型Symbol，表示独一无二的值
// var sym1=Symbol();
// var sym2=Symbol('foo');//唯一的
// var sym3=Symbol('foo');
// console.log(sym2==sym3);//false
//1。 有函数来创建，那么该怎么说明其是原始数据类型
// console.log(typeof sym1);//symbol  说明其是独立的一种数据类型
//2. 用法上有什么区别，和有什么用
// new Symbol()//报错，Symbol is not a constructor
// 变量都是要分配内存空间的，原始数据类型都是在栈上分配空间
// 引用类型的话，就是在堆(树状结构)上分配空间的，因为其要有扩展空间
//Symbol(字符串)  里面的字符串有什么用？ ——做一个标识，该字符串可传可不传

var mySymbol=Symbol();//初始化
// var shapeType={//形状的类型
//     triangle:'Triangle',//三角形
//     square:'Square'//正方形
// }
// 使用symbol改造
var shapeType={//形状的类型
        triangle:Symbol(),//三角形
        square:Symbol()//正方形
    //Symbol就是这样用的，都不用给具体值了。只要是唯一的就好
    }

function getArea(shape, options) {
  var area = 0;
  switch(shape) {
    case shapeType.triangle:
      area = 0.5 * options.width *options.height;
    break;
    case shapeType.square:
      area = options.width * options.height;
    break;
  }
  return area;
}
console.log(getArea(shapeType.triangle, {
  width: 100,
  height: 100
}))


var s1=Symbol('foo');
console.log(s1 instanceof Symbol);//false，因为其是原始数据类型

// const obj={
//     toDtring(){//覆盖Object.prototype.tostring
//         return 'abc'
//     }
// }
// const sym=Symbol(obj);
// console.log(sym.toString());//Symbol('abc')


// var sym2=Symbol("My symbol");
// console.log("your symbol is" + sym);//报错，Symbol不能做字符串的拼接


var obj ={}//symbol可以用于json object添加key，只要表示唯一就好,不用想名字
var a=Symbol("a");
var b=Symbol("b");
obj[a]='hello';
obj[b]='world';//第二种引用场景
obj.cc='cc';//常规，就是取个名字
console.log(obj[a]);//hello
console.log(Object.keys(obj));//[ 'cc' ]  symbol写的不可遍历
console.log(Object.getOwnPropertyNames(obj));//[ 'cc' ]
console.log(Object.getOwnPropertySymbols(obj));//[ Symbol(a), Symbol(b) ]
console.log(obj);//{ cc: 'cc', [Symbol(a)]: 'hello', [Symbol(b)]: 'world' }


for(let key in obj){
    console.log(obj[key]);//cc
}
Object.getOwnPropertySymbols(obj).forEach(item=>{
    console.log(obj[item]);//helle world
})