- 在提交代码前需要注意什么？
1.check检查一下代码 看bug 
 review一下代码  

 git中有哪个代码可以review代码？
 git diff unique.js
 查看后没有问题就可以提交了
　git diff 不加参数即默认比较工作区与暂存区

 2.测试驱动开发 mocha


 ## 如何用markdown表达代码和上一个版本的区别？
diff的代码一定要顶着才能出现效果
 ```diff
const unique=(arr)=>{
- return Array.from(new Set(arr))
+ return [...new Set()]
}
 ```

 ## TodoList  
 列个列表，功能计划，已完成，未完成
 - [首页搜索]待完成
 - [x]首页swiper   表示已经完成
 - [ ]~~icon未完成~~    表示未完成

 ## 展开 功能
- markdown写法</br>
![](https://sf3-ttcdn-tos.pstatp.com/img/user-avatar/5f23db3950d58a607f35495cea91e6e6~300x300.image)
 - html写法：</br>
 <img src="https://sf3-ttcdn-tos.pstatp.com/img/user-avatar/5f23db3950d58a607f35495cea91e6e6~300x300.image" width="2000"/>

<details>
<summary>展开查看规范</summary>
这是展开的内容一
</details>