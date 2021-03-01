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
