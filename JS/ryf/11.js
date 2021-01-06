function Animal() {
}
Animal.prototype.species = '动物'

function Cat(name, color) {
  this.name = name;
  this.color = color;
}


function extand(Child,Parent){
    var F=function(){};//空函数对象，内存开销不大
    F.prototype=Parent.prototype;
    Child.prototype=new F();
    Child.prototype.constructor=Child;
    Child.uber=Parent.prototype;//用一个自定义的属性记录
}

extend(Cat, Animal);

var cat1=new Cat('灰灰','灰色');
console.log(cat1.species);