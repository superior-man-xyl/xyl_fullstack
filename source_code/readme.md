# 源码分析
## 国际化的命名规范 BEM
1。取类名
- .weui-btn
其中：btn 组件名 70%都是由框架提供的，基础类
weui 项目前缀 tb前缀-淘宝 tm 项目组概念

2.css知识点
- 元素分为行内元素和块级元素 inline block inline-block
- 元素在页面中的占位，由内容（width，height）padding border margin
position 盒子模型

3.面向对象的css
- 一个元素有多个类
.weui-btn 每个类都是个Block(块)
.weui-btn_primary  Modifier 多态

4.安装了一个插件（live-server）
node js 的后端(i install安装)
npm i -g live-server
live-server web服务器
输入命令 live-server --browser=浏览器名    指定浏览器打开，而不是默认(live-server)。

5.结构
结构套路 移动端页面 超越项目
.page>.page_hd+.page_bd
weui项目组使用BEM
BEM 思想：搭积木
block 块
Element 子元素 使用_
modifier 装饰 _