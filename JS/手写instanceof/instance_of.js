// function instance_of(L,R){
//     var o=R.prototype;//构造函数的原型对象
//     if(L.__proto__==o){
//         return true;
//     }
//     return false;
// }//简版，还不能沿着原型链去查找，判断继承

//这里注意了：构造函数一般要首字母大写，以示区分
function instance_of(L,R){
        var o=R.prototype;//构造函数的原型对象
      L= L.__proto__;
      while(true){//一直循环往上找
        if(L===null) return false;//到末尾就是null,说明没有继承关系
        if(L===o){
            return true;
        }
        L=L.__proto__;
      }
    }

function animal(name){
    this.name=name;
}
var cat =new animal("tom");
console.log(cat.name);//tom
console.log(instance_of(cat,animal));//true

var Cat=function(name){
    console.log(name+"--mioamiao");
}
Cat.prototype=new animal("miao");
var TOM=new Cat("TOM");
console.log(Cat.name+'-----');
console.log(TOM);
console.log(instance_of(TOM,animal));