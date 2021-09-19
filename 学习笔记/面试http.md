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


说一说常见的请求头和相应头都有什么呢？
1)请求(客户端->服务端[request])
    GET(请求的方式) /newcoder/hello.html(请求的目标资源) HTTP/1.1(请求采用的协议和版本号)
    Accept: */*(客户端能接收的资源类型)
    Accept-Language: en-us(客户端接收的语言类型)
    Connection: Keep-Alive(维护客户端和服务端的连接关系)
    Host: localhost:8080(连接的目标主机和端口号)
    Referer: http://localhost/links.asp(告诉服务器我来自于哪里)
    User-Agent: Mozilla/4.0(客户端版本号的名字)
    Accept-Encoding: gzip, deflate(客户端能接收的压缩数据的类型)
    If-Modified-Since: Tue, 11 Jul 2000 18:23:51 GMT(缓存时间) 
    Cookie(客户端暂存服务端的信息)
    Date: Tue, 11 Jul 2000 18:23:51 GMT(客户端请求服务端的时间)


2)响应(服务端->客户端[response])
    HTTP/1.1(响应采用的协议和版本号) 200(状态码) OK(描述信息)
    Location: http://www.baidu.com(服务端需要客户端访问的页面路径) 
    Server:apache tomcat(服务端的Web服务端名)
    Content-Encoding: gzip(服务端能够发送压缩编码类型) 
    Content-Length: 80(服务端发送的压缩数据的长度) 
    Content-Language: zh-cn(服务端发送的语言类型) 
    Content-Type: text/html; charset=GB2312(服务端发送的类型及采用的编码方式)
    Last-Modified: Tue, 11 Jul 2000 18:23:51 GMT(服务端对该资源最后修改的时间)
    Refresh: 1;url=http://www.it315.org(服务端要求客户端1秒钟后，刷新，然后访问指定的页面路径)
    Content-Disposition: attachment; filename=aaa.zip(服务端要求客户端以下载文件的方式打开该文件)
    Transfer-Encoding: chunked(分块传递数据到客户端）  
    Set-Cookie:SS=Q0=5Lb_nQ; path=/search(服务端发送到客户端的暂存数据)
    Expires: -1//3种(服务端禁止客户端缓存页面数据)
    Cache-Control: no-***(服务端禁止客户端缓存页面数据)  
    Pragma: no-***(服务端禁止客户端缓存页面数据)   
    Connection: close(1.0)/(1.1)Keep-Alive(维护客户端和服务端的连接关系)  
    Date: Tue, 11 Jul 2000 18:23:51 GMT(服务端响应客户端的时间)
在服务器响应客户端的时候，带上Access-Control-Allow-Origin头信息，解决跨域的一种方法。



# http 1.0 / 1.1 / 2.0 / 3.0 的特性
https://zhuanlan.zhihu.com/p/266578819
首先http协议是无状态，无连接的应用层协议。

## http1.0 存在的问题是
- 无法复用连接，每次都要进行tcp连接，然后http传输后又要释放连接，频繁的连接释放，这种无连接的特性会使网络的利用率降低
- 队头阻塞，由于HTTP1.0规定下一个请求必须在前一个请求响应到达之后才能发送，假设前一个请求响应一直不到达，那么下一个请求就不发送，后面的请求就阻塞了。

## http1.1的进步
- http1.1继承了http1.0的简单，优化了http1.0的一些性能问题
- http1.1是长连接的，其增加了connection 字段，通过设置Keep-Alive 保持http连接不断，避免频繁的连接释放，客户端想要关闭连接时就需要在请求头里携带 Connection:false,来告知服务端关闭连接
- http1.1支持请求管道化，基于其的长连接，使请求管道化成为可能，管道化使得请求可以“并行”传输
- http1.1加入了缓存处理机制（强缓存，协商缓存），加入新的字段如cache-control，支持断点传输，以及增加了Host字段（使得一个服务器能够用来创建多个Web站点）

## http2.0的突破
- 二进制分帧，http2.0在应用层和传输层之间增加了个二进制分帧层，突破了http1.1的性能限制，改进了传输性能
- 多路复用（链路共享），真并行传输，HTTP2.0实现了真正的并行传输，它能够在一个TCP上进行任意数量的HTTP请求。而这个强大的功能基于“二级制分帧”的特性。
- 头部压缩，HTTP2.0使用encoder来减少需要传输的header大小，通讯双方各自cache一份header_files表，既避免重复header的传输，又减少了需要传输的大小。高效的压缩算法可以很大的压缩header，减少发送包的数量从而降低延迟。
- 服务器推送，服务器除了最初请求的响应外，服务器还可以额外向客户端推送资源，而无需客户端明确的需求。比如浏览器像服务器请求html资源，服务器首先会向其发送html资源。然后不会等浏览器请求css和js资源，而是在发送完html后主动再向浏览器发送css和js资源

https://www.jianshu.com/p/e57ca4fec26f
## http3
HTTP3 的主要改进在传输层上。传输层不会再有我前面提到的那些繁重的 TCP 连接了。现在，一切都会走 UDP。

顺便说一下，QUIC 的意思是“快速 UDP Internet 连接”。协议的这种更改将显著加快连接建立和数据传输的速度。然而，虽说 UDP 肯定更快、更简单，但它不具备 TCP 的可靠性和错误处理能力。

TCP 必须进行多次往返，才能以方形且稳定的方式建立连接。UDP 不会顾虑那么多，而且它确实可以快速运行，代价是稳定性下降和丢包的风险。但是，UDP 能大大减少请求中的延迟。到同一服务器的重复连接的延迟几乎为零，因为不需要往返来建立连接。

HTTP3 是 HTTP2 的复用和压缩，协议从 TCP 更改为 UDP。然后，谷歌的那些人在协议中添加了他们做的层，以确保稳定性、数据包接收顺序及安全性。

QUIC协议特性
- QUIC协议提供类似于HTTP2的流功能
- QUIC协议使用流ID取代IP和端口，这样就能实现连接迁移。例如说从4G信号切换到wifi，下层的IP和端口变了，但是由于QUIC的流ID没有变，这个连接不会变，可以继续使用这个连接。
- 然后我们看一下HTTP3在QUIC上有什么变化呢？HTTP3由HTTP2进化，HTTP2最大的变化就是基于二进制流的传输。那么到HTTP3，由于QUIC已经管理了流，HTTP3本身就减负了，将流管理下移QUIC，而本身就直接调用QUIC的接口就可以了。

QUIC能够实现TCP协议的所有功能性需求，并集成了TLS，功能上赶超了TCP

HTTP3如何工作
- 我们回想一下HTTPS，HTTPS是类似于TCP握手的工作方式，先工作在HTTP1上，通过HTTP1传递交换得到秘钥，然后切换到HTTPS上工作。
- 接着我们回想一下HTTP2，HTTP2也是基于TLS的，所以HTTP2的工作方式和HTTPS也是同样的过程，需要握手建立TLS连接，只是TLS连接完成后，发送一个HTTP2的连接确认消息，确认后，客户端服务器使用HTTP2进行连接通讯。
- 最后让我们看下HTTP3如何工作。首先要建立好HTTP2连接，然后发送HTTP2扩展帧，这个帧包含IP和端口，浏览器收到扩展帧，使用该IP和端口，使用QUIC建立连接，如果成功，断开HTTP2，升级为HTTP3。

## https
### http和https的区别
- HTTP 明文传输，数据都是未加密的，安全性较差，HTTPS（SSL+HTTP） 数据传输过程是加密的，安全性较好。
- 使用 HTTPS 协议需要到 CA（Certificate Authority，数字证书认证机构） 申请证书，一般免费证书较少，因而需要一定费用。证书颁发机构如：Symantec、Comodo、GoDaddy 和 GlobalSign 等。
- HTTP 页面响应速度比 HTTPS 快，主要是因为 HTTP 使用 TCP 三次握手建立连接，客户端和服务器需要交换 3 个包，而 HTTPS除了 TCP 的三个包，还要加上 ssl 握手需要的 9 个包，所以一共是 12 个包。
- http 和 https 使用的是完全不同的连接方式，用的端口也不一样，前者是 80，后者是 443。
- HTTPS 其实就是建构在 SSL/TLS 之上的 HTTP 协议，所以，要比较 HTTPS 比 HTTP 要更耗费服务器资源。

SSL(Secure Sockets Layer 安全套接层),及其继任者传输层安全（Transport Layer Security，TLS）是为网络通信提供安全及数据完整性的一种安全协议。TLS与SSL在**传输层**（）对网络连接进行加密。

SSL协议位于TCP/IP协议与各种应用层协议之间，为数据通讯提供安全支持。
SSL协议可分为两层： 
- SSL记录协议（SSL Record Protocol）：它建立在可靠的传输协议（如TCP）之上，为高层协议提供数据封装、压缩、加密等基本功能的支持。

- SSL握手协议（SSL Handshake Protocol）：它建立在SSL记录协议之上，用于在实际的数据传输开始前，通讯双方进行身份认证、协商加密算法、交换加密密钥等。

SSL/TLS协议的基本思路是采用公钥加密法，也就是说，客户端先向服务器端索要公钥，然后用公钥加密信息，服务器收到密文后，用自己的私钥解密。
但是，这里有两个问题。
（1）如何保证公钥不被篡改？
解决方法：将公钥放在数字证书中。只要证书是可信的，公钥就是可信的。
（2）公钥加密计算量太大，如何减少耗用的时间？
解决方法：每一次对话（session），客户端和服务器端都生成一个“对话密钥”（session key），用它来加密信息。由于“对话密钥”是对称加密，所以运算速度非常快，而服务器公钥只用于加密”对话密钥”本身，这样就减少了加密运算的消耗时间。