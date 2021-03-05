"use strict";

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

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
var Person = (_class = /*#__PURE__*/function () {
  function Person() {
    _classCallCheck(this, Person);
  }

  _createClass(Person, [{
    key: "name",
    value: function name() {
      //这里装饰的不是一个类，装饰的是一个方法，
      // 方法怎样可以得到readonly能力 只可读，不可写？
      //使用defineProperty
      return "".concat(this.first, " ").concat(this.last);
    }
  }]);

  return Person;
}(), (_applyDecoratedDescriptor(_class.prototype, "name", [readonly], Object.getOwnPropertyDescriptor(_class.prototype, "name"), _class.prototype)), _class); //target Class 方法，属性
//name 

function readonly(target, name, descriptor) {
  console.log(target, name, descriptor);
  descriptor.writable = false; //使其不可写

  descriptor.enumerable = true;
  console.log(target, name, descriptor);
  return descriptor;
}
