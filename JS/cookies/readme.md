cookies

Cookie，有时也用其复数形式 Cookies。类型为“小型文本文件”，
是某些网站为了辨别用户身份，进行Session跟踪而储存在用户本地终端上的数据（通常经过加密），
由用户客户端计算机暂时或永久保存的信息 

npm i koa 

1. Cookies 是服务器种在客户端的存储的数据，浏览器每次发送请求时都会带上。
cookies比较小 4kb  
记录登陆状态

2. 
node 设置cookies
有哪些选项?

3. 讶羽
cookies 安全问题
cookies 由服务器端种下,写在用户端,是一段比较小的文本,因为其每次都要传给服务器
传送的过程是不安全的 http
有些攻击,可以得到用户的cookies,得到后就可以伪装成用户去进行用户方面的操作

如果cookie中设置了HttpOnly属性，那么通过js脚本将无法读取到cookie信息，这样能有效的防止XSS攻击，窃取cookie内容，这样就增加了cookie的安全性，即便是这样，也不要将重要信息存入cookie。XSS全称Cross SiteScript，跨站脚本攻击，是Web程序中常见的漏洞，XSS属于被动式且用于客户端的攻击方式，所以容易被忽略其危害性。其原理是攻击者向有XSS漏洞的网站中输入(传入)恶意的HTML代码，当其它用户浏览该网站时，这段HTML代码会自动执行，从而达到攻击的目的。如，盗取用户Cookie、破坏页面结构、重定向到其它网站等。


前端什么都能做了现在,比如操作cookies,有些cookies没那么重要
比如一些用户选项设置,夜间模式(可以低安全性),uid(必须高安全性,很重要)

cookie 和 localStorage 都是用来做存储的,
区别是:
cookies:4kb 用户状态,最基本用户配置
locaStorage 5MB  lokijs 数据库 多存一些 用户的地址 家公司 用户看过什么

cookie 性能不好
浪费的地方:每次http请求都会带上它,存在开销
http是一种无状态的网络协议,Cookie用于登陆
http 一个请求,一个返回,cookie为其提供了状态
Cookie是http的状态的一种弥补,存在于头部,太大了,http请求就会变慢,使得性能下降
localStorage 只存在于客户端 性能好
