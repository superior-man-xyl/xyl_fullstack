# 当你在浏览器输入一个url后，看到页面前发生了什么？
# 当你有了一台服务器后，你可以干什么？
    有了docker 一台物理主机，可以虚拟出来很多云服务器，所以云服务器不贵
    - IP地址
        直接用服务器IP121.36.208.222不能看到网页 ？ 提供了什么服务？怎么才能看到网页呢？
        （浏览器域名或IP访问，https访问）
        首先 现在的服务器没有安装web服务器

        Nginx是一个高性能的HTTP和方向代理的web服务器

    - 使用putty 远程SSH链接华为云的服务器
        输入root 和passward密码
    - web服务就安装 Nginx
        安装Nginx的依赖      yum -y install gcc  gcc-c++ autoconf pcre-devel make automake
                            yum -y install wget httpd-tools vim
                            yum list 查看所有包
                             yum list | grep nginx
                             yum install nginx 安装nginx
                             nginx -v   查看版本
                             输入nginx就能启动服务器
                             ps aux|grep nginx  查看nginx启动的进程

            安装完nginx后，在浏览器输入服务器ip地址后就能看到默认页面了
                    niginx -s stop 就是关闭niginx，然后IP地址又不能访问了

            vi /etc/nginx/nginx.conf  打开配置
            /usr/share/nginx/html 这个路径就是网页的了
            cd /usr/share/nginx/html 进入
            vi index.html 就可以编辑默认页面了
            cd / 进入根目录
            mkdir www
            cd www
            mkdir blog
            vi index.html  

             vi /etc/nginx/nginx.conf 打开并编写配置文件
             将 root         /usr/share/nginx/html;
             改为 /www/blog
             nginx -s reload 重启一下，就能看到刚刚编辑的blog页面了

搭建动态网页：
1. centos安装 node
- cd /
cd /usr/local/bin/  通常在这里安装软件
使用wget下载node的安装包，taobao的mirrors .tar
 wget https://npm.taobao.org/mirrors/node/v12.16.1/node-v12.16.1-linux-x64.tar.gz
 解压缩：tar -xvf node-v12.16.1-linux-x64.tar.gz
 删除安装包：rm -rf node-v12.16.1-linux-x64.tar.gz
 新建一个文件夹,放入 node-v12.16.1-linux-x64到文件夹：mv node-v12.16.1-linux-x64/ node
 - node现在在 /user/local/bin/node/bin
 - 使其变为全局命令，像Windows添加全局path这样的，配置软链接 
 ln是linux中一个非常重要命令,它的功能是为某一个文件在另外一个位置建立一个同不的链接，
 这个命令最常用的参数是-s,(symbolic代号的意思)
具体用法是：ln -s 源文件 目标文件
    in -s /user/local/bin/node/bin/node /user/bin/node
    ln -s /usr/local/bin/node/bin/npx  /usr/bin/npx
    ln -s /usr/local/bin/node/bin/npm  /usr/bin/npm
    这样全局就能使用node npm npx

 rm -rf /usr/bin/npx  删除链接

 2. 学koa code
 cd /www/
 mkdoir koa-demo
 cd koa-demo
 npm init -y
  npm i koa --save
  vi app.js
esc退出后按 a  最后 o  换行  dd 删除一行
```
const Koa = require('koa');//引入最好的node开发框架
const app = new Koa();
//下面的就是中间件(middlewares)，app.use
app.use(async ctx => {//这一次http服务流程
        ctx.body = 'Hello World';
})
app.listen(3000);//在3000端口服务

```
怎么样访问3000端口？
node app.js运行后 命令行就会被霸占，
在3000端口上 等待着任何人发出请求，ctx伺服
所以就要把服务放到后台运行，不占用命令行
//npm i -g pm2 安装pm2   
// PM2是node进程管理工具，可以利用它来简化很多node应用管理的繁琐任务，如性能监控、自动重启、负载均衡等，而且使用非常简单。
// 使用pm2 start app.js  就行了
停止:pm2 stop app.js

服务器上使用淘宝源：npm config set registry https://registry.npm.taobao.org
./node_modules/.bin/pm2 start app.js  这样运行，就能够在3000端口看到内容了

