- 阮一峰 js

1.函数的this调用方式，作用域|上下文环境相关
函数作用域 scope 变量查找？
顺序：内部查找-》外部查找 闭包（函数嵌套函数）

(function(){
    //上
    return function(){
        //环境
        //下
        this 指向当前的运行环境
    }
})()

- 差异的本质来自于this的使用
函数运行时所在的环境
obj.foo 对象的方法
foo 普通函数 运行方式-》所在的环境
（window|global|strict）

- 函数的运行环境由什么决定？

原子级别 原理
- 闭包 声明在哪里？
```js
    function(){
        let a=1;
        return function(){
            console.log(a)
        }
    }
    const fun=funcA();
```
- 内存的特别操作
    执行栈是内存才有的权力

    obj.foo() obj.foo内存的指向的链条 this指向对象
    foo=obj.foo; value=>地址1交给了foo
    foo();  普通函数
