- 图片性能优化，我们想到什么？减少http数，lazyload   throttle节流
base64图片：
每一个图片相当于一次http请求，图片多了的话，耗性能比较严重。而将jpg转化成base64格式的图片，则极大地减少了请求数，因为base64是文本格式，可以直接放在body里。
- 编解码：
data:img/jpg;base64,文件头base64编程格式    /9j/文件内容  主要用于icon，每个icon这么小却很多，要很多请求
google 大量的使用base64减少请求数，是最严重的耗费页面性能优化的地方

1. 网页性能优化
- 精灵图（雪碧图）的优化技术  多张图（小图，icon）合并在一张图中去，以减少http请求
- 历史 lazyload scroll + API，减少一些执行次数  throttle
- 现在有 base64 把发送请求的机会都夺去了，不是所有图片都使用base64，大图片转化后会使html文件变大，可以用webp,
处理图片要衡量，小图片，icon之类就可以换成base64.
- 大图的话，特别是头图，banner图，商品详情页的图片
其可以在webp时大小减少四分之一以上，清晰度不受损，再结合图片懒加载lazyload

问题：除了base64还有什么方法可以不发出http请求，却能展示图片？

npm init -y
npm i webp-converter  安装webp转换工具

view-source:https://www.jd.com   看源码

- js多线程的苗头 Worker 推出有一段时间了，但是没有成为主流
js是单线程语言，但是有多线程的能力
new Worker('另一个js文件')  使其单独运行，其不会阻塞主线程

分出来的线程：1.跟dom相关的事情不能做
js是css和html外的第三者，是性能缓慢的原因，其的要求就是简单
worker不能和主线程去同时操作同一个元素