// @annotation//用处很大，装饰模式
// @cook
// class MyClass {//MyClass 里有annotated属性吗？
//   constructor(){
//     this.name="jack"  //public属性
//   }
// }
// //有新属性后就不用像下面，使用装饰器模式
// // MyClass.annotated=false//static属性
// function cook(target){

// }
// //有几个类，都有共有的属性时，例如上面的cook，就可以直接@cook 作为公共的方法
// // 复用装饰函数 新的构建类的方式 
// function annotation(target) {
//   target.annotated = true;
// }


  class Person {
    @readonly // 装饰的不是一个类， 装饰的是一个方法 方法可以得到readonly 能力 只可读， 不可写？ 
    name() {//这里装饰的不是一个类，装饰的是一个方法，
  // 方法怎样可以得到readonly能力 只可读，不可写？
  //使用defineProperty
      return `${this.first} ${this.last}`
    }
  }
  //target Class 方法，属性
  //name 
  function readonly(target, name, descriptor) {
    console.log(target, name, descriptor);
    descriptor.writable=false;//使其不可写
    descriptor.enumerable=true;
    console.log(target, name, descriptor);
    return descriptor;
  }
  