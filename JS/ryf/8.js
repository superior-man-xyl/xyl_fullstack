//prototype模式

function Animal(){
    this.species='动物';
}

function Cat(name,color){
    this.name=name;
    this.color=color;
}

// var cat1=new Cat('大毛','黑色');

// 过程：cat1->Cat->new Animal(){species}
//修改prototype
//使用原型对象使其继承Animal的属性，这样实例都有Animal的属性了
Cat.prototype=new Animal();//副作用就是（console.log(Cat.prototype.constructor);//输出[Function: Animal]）
Cat.prototype.constructor=Cat;//副作用解决方法
var cat1=new Cat('大毛','黑色');
console.log(cat1.species);//输出动物
console.log(Cat.prototype.constructor);//输出[Function: Animal]

