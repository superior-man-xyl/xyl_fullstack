# 跨域
    - 后端的跨域解决方案
    - JSONP  （json with padding）
    https://photo.sina.cn/aj/index?page=1&cate=recommend
    同源机制 

1. 通过script\img标签的src跨域 向sina发出请求，完成了一次http
规避了JS代码的xhr fetch 同源机制
JSON 怎么写JS代码能使其使用，下面第二点

2. 尾部写了&callback=callback  sina在页面上有一个callback函数，等待调用，赋值自己写的callback函数

3. callback({})  表示JSON+padding =》JSONP

xhr/fetch 因运行在'沙箱'js同源机制,无法请求跨域的资源
迂回到使用script标签   有跨域访问资源的能力，http请求中
带上&callback=callback（key：value） 这个padding，远程资源服务器就在json数据外面包一层callback函数
将这个带有padding的，可以在script得到后运行的函数，页面上已经准备好了这个函数，从而效果一样