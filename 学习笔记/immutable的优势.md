# immutable数据是什么？
immutable数据是一种利用结构共享的持久化数据结构，一旦有部分被修改，那么将会返回一个全新的对象，并且原来相同的节点会直接共享。

immutable对象内部采用的是多叉树的结构，凡是有节点改变，那么和它有关的上级节点都会更新

![](https://user-gold-cdn.xitu.io/2019/10/20/16de7a154c8b30b8?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

Immutable Data 就是一旦创建，就不能再被更改的数据。

对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象。Immutable 实现的原理是 Persistent Data Structure（持久化数据结构），也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。

同时为了避免 deepCopy 把所有节点都复制一遍带来的性能损耗，Immutable 使用了 Structural Sharing（结构共享），即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享。

```js
// 使用 immutable.js
import Immutable from 'immutable';
foo = Immutable.fromJS({a: {b: 1}});
bar = foo.setIn(['a', 'b'], 2);   // 使用 setIn 赋值
console.log(foo.getIn(['a', 'b']));  // 使用 getIn 取值，打印 1
console.log(foo === bar);  //  打印 false
```
immutable 的一些方法

1. fromJS
它的功能是将 JS 对象转换为 immutable 对象。
```js
import {fromJS} from 'immutable';
const immutableState = fromJS ({
    count: 0
});
```
大家以后会经常在 redux 的 reducer 文件中看到这个 api, 是 immutable 库当中导出的方法。

2. toJS
和 fromJS 功能刚好相反，用来将 immutable 对象转换为 JS 对象。但是值得注意的是，这个方法并没有在 immutable 库中直接导出，而是需要让 immutable 对象调用。比如:
```js
const jsObj = immutableState.toJS ();
```
3. get/getIn
用来获取 immutable 对象属性。通过与 JS 对象的对比来体会一下：
```js
//JS 对象
let jsObj = {a: 1};
let res = jsObj.a;

//immutable 对象
let immutableObj = fromJS (jsObj);
let res = immutableObj.get ('a');

//JS 对象
let jsObj = {a: {b: 1}};
let res = jsObj.a.b;

//immutable 对象
let immutableObj = fromJS (jsObj);
let res = immutableObj.getIn (['a', 'b']);// 注意传入的是一个数组
```
4. set
用来对 immutable 对象的属性赋值。
```js
let immutableObj = fromJS ({a: 1});
immutableObj.set ('a', 2);
```
5. merge
新数据与旧数据对比，旧数据中不存在的属性直接添加，旧数据中已存在的属性用新数据中的覆盖。
```js
let immutableObj = fromJS ({a: 1});
immutableObj.merge ({
    a: 2,
    b: 3
});// 修改了 a 属性，增加了 b 属性
```