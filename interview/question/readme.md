# js考题
怎么使
console.log(a==1&&a==2&&a==3);//使其输出为true

JS中类型转换
- 隐式类型转换
- 显式类型转换

只有三种转换  
- 转换成数字
- 转换成布尔值
- 转换成字符串

null是对象吗？  typeof null  //object
这是JS的一个bug，最初版本中使用的是32位系统
32位中二进制，前3位是用来标明它是什么类型的。
undefined null 0000000000000000000000000000
{} 的前三位也是 000  
typeof只考虑这前三位，所以null也被判断为object了
Object.prototype.toString() //进行类型转换后，就能判断了

总结：'1'.toString()
String->Object上的
Object 是所有对象的原型对象，Array Function  。。。String
简单数据类型 不会有方法的  但有以下机制
1. 创建包装类实例 s=new String("1")
2. 调用该实例的方法，'1'.toString() -》 s.toString()给回结果
3. 使命完成，s=null 执行往方法后立即销毁实例
也就是 给字符串s.color='red'，不会报错，但是输出s.color 为undefined，访问不到了