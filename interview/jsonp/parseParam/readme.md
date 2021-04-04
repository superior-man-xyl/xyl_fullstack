http://localhost:8080?a=1&b=2&c=3&d&a=4&keyword=%E6%89%8B%E6%9C%BA
1. 准备一个对象{} 装url里所有的数据
2. 从？开始 split得到
3. = 
4. 将数据放到{}里， 形成key:val
5. a 出现过两次， 怎么做
6. keyword 是被编码过后的，其原本是中文

- 围绕着URL的考题有很多
1. 从输入URL到看到页面，发生了什么，越详细越好
2. 跨域问题  协议:域名/路径:端口？查询字符串组成
3. http/https http2 区别是什么
4. 如果解析查询字符串为对象

- 如果解析查询字符串为对象
1. 如何得到？后面的查询字符
```
/.+\?(.+)$/.exec(url)[0]  
```
使用正则
?(.+) :匹配的单元
\?  转意
exec 执行正则表达式   拿到$1 就是结果 [0]

- 切割=后形成的key:value 使用了es6的数组解构，使用test验证正确性
1. a=1 a=4是有两项的  应该得到 a=[1,4]
```
// if(key in paramsObj)  老土的写法
if(paramsObj.hasOwnProperty(key)){
paramsObj[key]=[].concat(paramsObj[key],val);
//[].concat(paramsObj[key],val) 把两个值组成数组
}else{
    paramsObj[key]=val;
}
```
2. decode 
- 解析查询参数的过程 有几个规则
值都需要解码，重复出现的key组成数组，只有key没有值的默认为true
