URI 格式
[协议名]://[用户名]:[密码]@[主机名]:[端口]/[路径]?[查询参数]#[片段ID]

mysql://root:123456@localhost:3306/student_db?max_connection=50

URL格式
[协议名]://[主机名]:[端口]/[路径]?[查询参数]#[片段ID]

https://www.baidu.com:443/info?query=如何xxxx#

HTTP的工作流程（客户端和服务端是如何通信的）
1. 服务器要监听80（HTTP）和443（HTTPS）端口
2. 客户端向服务器端发送请求，如果是HTTPS，会传输证书，验证请求
3. 双方建立TCP连接
4. 客户端向服务器端发送请求
5. 服务端响应请求，返回数据包
6. tcp关闭连接（4次挥手）

请求报文的请求行由三部分组成：
1. 请求方法
- GET 用于读取URL内的参数信息
- POST 添加数据，请求参数写到请求体里
- PUT 用于更新数据，整条更新，覆盖
- PATCH  用于更新局部部分数据，补丁
- DELETE 删除
- HEAD 请求读取头部信息
- OPTIONS 
2. URL

首部行常用的 Header
User-Agent：浏览器版本
Content-Type：请求体数据类型 text/plain text/html
application/json
Content-Length：请求体的长度，单位：字节
Content-Encoding：请求体的编码格式，gzip，deflate
Accept-Encoding：告诉对方我方的编码格式
Referer：请求来源
Cache-Control: 缓存机制 no-cache，max-age=10 单位秒
Host: 主机名

响应报文状态行组成
1. 版本
2. 状态码
- 1**：请求收到，继续
- 2**：成功
    200 成功

- 3**：需要进一步处理
- 4**：请求包含错误，服务器拒绝处理
    400 请求错误
    401 未授权
    403 禁止访问
    404 找不到
    405 请求方法不被允许
- 5**：服务器出现错误，但请求有效
    500 内部服务器错误
    502 网关错误
    503 服务器不可用
    504 网关超时

3. 状态短语

响应常见 Header
Date： 服务器的时间
Content-Type：响应体数据类型
Set-Cookie：设置Cookie
Server：后端服务器名

HTTP1.0 vs HTTP1.1
1.1 默认支持长连接
增加了更多的响应和请求头
加入了缓存机制 身份认证 状态管理
1.1 还加入了HOST

HTTP2.0 VS HTTP1.0
头部压缩    二进制传输
服务器端推送
多路复用 并行接受数据 更快

HTTP与HTTPS的区别
SSL HTTP未加密 HTTP加密
HTTP应用层 HTTPS 传输层 （SSL就在传输层上进行）
HTTPS需要证书
端口 80 和 443
HTTP性能低于HTTP

HTTPS通信过程
1. 请求 HTTPs 链接
2. 服务端返回证书（公钥）
3. 客户端验证证书有效性
4. 客户端生成一个随机密钥用于对称加密
5. 用公钥加密对称密钥传输给服务器端
6. 服务器端用私钥解密，得到对称密钥
7. 服务端和客户端通过对称密钥加密的密文通信