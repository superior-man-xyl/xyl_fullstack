# http常见的状态码有哪些？
## 首先不同开头不同意思
- 1开头：信息，服务器成功收到请求，需要请求者继续执行操作
- 2开头：成功，请求已被服务器接收并且进行了处理
- 3开头：重定向，需要进一步的操作以完成请求
- 4开头：客户端错误，请求包含语法错误或者无法完成请求
- 5开头：服务器端错误，服务器在处理请求过程中发生错误

## 常见状态码
- 100 ：继续，客户端应该继续请求
- 101 ：切换协议，服务器根据客户端的请求切换协议，只能切换到更高级的协议，例如切换到http的更高级版本
- 200 ：请求成功，一般用于get和post请求
- 204 ：无内容，服务器成功处理，但是没有返回内容，未更新网页时，确保浏览器继续显示当前文档
- 301 ：永久移动，请求的资源被永久移动到新URl，返回信息中包含着新的URL，浏览器会自动定向到新URL。今后任何新的请求都会使用新的URl替代
- 302 ：临时移动，和301类似，只是临时移动到新URL，之后还是使用原来URL
- 304 ：未修改，所请求的资源未改变，服务器不会返回任何资源，客户端通常会缓存访问过的资源，然后在请求头中提供一个头信息，表示希望返回发生改变后的资源
- 400 ：客户端请求的语法错误，服务器端无法理解
- 403 ：服务器端理解客户端的请求，但是是拒绝执行这次请求
- 404 ：服务器无法根据客户端的请求找到资源或网页
- 401 ：请求要求用户的身份认证
- 500 ：服务器内部错误，无法完成请求
- 501 ：服务器不支持请求的功能，无法完成请求
- 505 ：服务器不支持请求的http版本，无法完成处理
# http常见的header有哪些？
下面有解答
# 什么是restful API  ，Graphql有什么不同
- 传统的methods
    - get 获取服务器的数据
    - post 向服务器提交数据
- 现在的methods  因为现在的场景更加复杂了
    - get 提交数据
    - post 新建数据*
    - patch/put 更新数据
    - delete 删除数据

restful  一种API设计方法
- 传统的API：把每一url当作一个功能
- restful API：把每一个url当作一个唯一的资源 标识

如何设计成一个资源：
- 尽量不要用url参数
    - 传统的API: /api/list?pageList=2 （/api/list就像一个函数一个功能，后面？后的就代表了传入的参数）
    - restful API设计：/api/list/2  与传统的不一样，这个2就是一个资源的标识
- 用method表示操作类型
    - 传统的API：
        - post请求：/api/create-blog
        - post请求：/api/update-blog?id=100
        - get请求： /api/get-blog?id=100
    - restful:（相比之下没有在url里区分请求类型，通过method来判断要进行什么操作  唯一标识url+操作类型）
        - post请求： /api/blog   都只是标识一个唯一资源
        - patch请求： /api/blog/100
        - get请求：  /api/blog/100

# http headers
- request headers
    - Accept：浏览器可接收的数据格式
    - Accept-Encoding: 浏览器可接收的压缩算法 如gzip
    - Accept-Languange：浏览器可接收的语言，比如zh-CN
    - connect : keep-alive 一次tcp连接可以重复使用
    - cookie：**同域**下发送请求，才会带上
    - host：请求的域名是什么
    - User-Agent: UA 浏览器信息
    - Content-type：发送数据的格式，如application/json   get请求就没有，因为get请求都是获取数据，而不会发送数据

- response headers
    - content-type：返回数据的格式，如application/json css 还是图片image/png
    - content-length： 返回数据的大小，多少字节
    - content-Encodin：返回数据的压缩算法，如gzip
    - set-cookie：用于告诉浏览器为当前页面设置cookie
    - cache-Control：用于强缓存，如果服务器端认为其返回的资源适合缓存就就会返回这个字段，里面有max-age值
    - cache-control：下面会说
    - Expires：
![](https://pic4.zhimg.com/80/v2-5bd4ebff7cf3c25448c5c2de66d3821b_1440w.jpg)

# 描述下http缓存机制
- 强缓存：
    - cache-control：
        - 在Response Headers中
        - 控制强缓存的逻辑  cache-control：max-age：3121154541 （**单位为秒**），在时间内，**不会再有请求该资源的网络请求**

        - no-cache：不用强制缓存，交给服务端来处理判断
        no-chache 使用 ETag 响应头来告知客户端（浏览器、代理服务器）这个资源首先需要被no-cache将会和服务器进行一次通讯，检查是否在服务端修改过，在这之前不能被复用。这个意味着确保返回的资源没有修改过，如果没有修改过，才没有必要下载这个资源。反之，则需要重新下载。

        - no-store：不用强制缓存，也不要服务端做缓存判断，就返回实时最新的
        no-store 在处理资源不能被缓存和复用的逻辑的时候与 no-cache 类似，然而，他们之间有一个重要的区别。no-store要求资源每次都被请求并且下载下来。

        - private：表示响应资源仅仅只能被获取它的浏览器端缓存。它不允许任何中间者（intermediate）缓存响应的资源。
        - public：表示允许被任何中间者（可能是代理服务器、类似于 cdn 网络）缓存。这个指令通常不需要在响应头中用到，因为其他指令已经表明了响应资源是否可以被缓存（例如：max-age）
    
    - Expires：
        - 在Response Headers中
        - 用于控制缓存过期
        - 是个老标准，已经被cache-control代替了 cache-control优先级高
        - Expires: Wed, 21 Oct 2015 07:28:00 GMT  时间戳后就过期

- 协商缓存：（也叫对比缓存）
    - 一个服务端缓存策略，服务端如何判断是否使用缓存的策略
    - 服务端判断缓存的资源，是否和服务端的一样（一致则返回304，即资源未被修改，服务端不返回任何资源，不一致则返回200，与最新的资源）
    - 根据资源标识来判断
        - 资源标识在response header中，有两种（可以共同存在，两种共存，优先etag）
        - last-modified: 资源最后修改时间 （response的headers中，浏览器端请求时会以if-modified-since带着去服务器端）
        - etag：资源的唯一标识，类似于人类的指纹，资源更新后etag改变 （浏览器端请求时会以if-none-match带着去服务器端）
        - last-modified只能精确到秒级，资源重复生成，内容不变，其会改变，所以Etag更加精准

