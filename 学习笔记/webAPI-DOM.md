# DOM是那种数据结构
有html文件解析出来的一颗树
# DOM有哪些API
# attribute 和 property 的区别（这两个翻译出来都叫属性）
- property：修改js对象属性，不会体现到html结构中
例子： 
```js
p1.style.width='100px';
p1.style.color='red';
```
- attrbute：修改html结构，会直接体现到html结构中
```js
p1.setAttrbute('style','font-size:50px;');
p1.getAttrbute('style')
```
- 两者都有可能引起DOM重新渲染，尽量使用property
# 一次性插入多个DOM节点，考虑性能，怎么做
用一个fragment文档碎片临时存储，``const frag = document.creatElementFragment()``,创建一个文档碎片。
在文档碎片里进行当下的一些DOM操作（frag.appendChild(ele)），接着，使用xxx.appendChild(frag),把文档碎片添加进去。