# ls

1.ls是如何运作的，有哪些参数？
在linux里一切皆文件
ls 文件列表？
ls /:  /path 根路径 列出根路径下文件
```
$ ls /
bin/  etc/           LICENSE.txt  ReleaseNotes.html  unins000.exe*
cmd/  git-bash.exe*  mingw64/     tmp/               unins000.msg
dev/  git-cmd.exe*   proc/        unins000.dat       usr/
```
ls -l:列举
- 理解根目录的一些意义
/bin (binary:二进制)bin目录下是各种应用，ls cat 等
/dev device:设备
/etc 系统配置文件 
    host 文件用来配置什么的？哪个场景下使用
    host里有端口映射的设置，更改后可以改变某些网站对应得地址,但是要加端口号
    127.0.0.1：1314   www.taobao.com:1314    改成了本地服务器
    www.taobao.com ip dns 缓存-》网络服务商
    hosts文件这里会先检测一下
    以后公司里hosts配置是必须做的，因为要本地调试，将公司网站在本地的映射改为本地调试地址与端口
/usr 用户配置，很多应用程序放在该目录下
/tmp 临时文件

分析：
$ ls -al
total 4
drwxr-xr-x 1 谢永良 197121    0  1月 19 14:07 ./
drwxr-xr-x 1 谢永良 197121    0  1月 18 14:13 ../
drwxr-xr-x 1 谢永良 197121    0  1月 18 14:36 996/
drwxr-xr-x 1 谢永良 197121    0  1月 19 14:36 ls/
-rw-r--r-- 1 谢永良 197121 2144  1月 18 15:15 readme.md

drwxr-xr-x ：第一位是文件类型 d 目录 dictionary -普通文件
rwx：第二位到第四位 权限 read write 执行
r-x：5到7位表示用户所具有得权限 r x
r-x：8-10 其他用户所具有得权限