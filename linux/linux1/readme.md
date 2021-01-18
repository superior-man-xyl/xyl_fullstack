linux + docker +k8s
- 文件系统  readme.md输出到命令行怎么做？  
使用cat命令 cat readme.md
- git bash 是个小型的linux
- seq 序列内容
 seq 10 20 >> spring
 结果：生成spring文件
 内容 cat -n spring/ cat spring 读取，-n加不加行号
     1  10
     2  11
     3  12
     4  13
     5  14
     6  15
     7  16
     8  17
     9  18
    10  19
    11  20
- cat > index.html <<EOF
> <html>
>     <head><title></title></head>
> <body></body>
> </html>
> EOF

 cat > 996 <<EOF
> 996: 996 is a funcking thing . which make woman as man , man as ass .
> we all on the bus , bus bus on the way . 996
> way to icu. icuuuuuu......
> The greedy green boss rides on the pity programmer
> EOF

- 基于996文件 找到996开头的这行内容.... 怎么做？
使用正则+linux命令grep
grep：意思就是正则表达式
命令：grep -rn '996'   
$ grep -rn '996'
996:1:996: 996 is a funcking thing . which make woman as man , man as ass .
996:2:we all on the bus , bus bus on the way . 996

- |管道 
$ cat 996 | grep -E ^996
996: 996 is a funcking thing . which make woman as man , man as ass .

$ cat 996 | grep -E 996$
we all on the bus , bus bus on the way . 996

- 匹配到 icu icuuuuu
$ cat 996 | grep -E icu
way to icu. icuuuuuu......
或
$ cat 996 | grep -E icu+
way to icu. icuuuuuu......

$ cat 996 | grep -E [0-9]
996: 996 is a funcking thing . which make woman as man , man as ass .
we all on the bus , bus bus on the way . 996

$ cat 996 | grep -E ^[\^0-9]
we all on the bus , bus bus on the way . 996
way to icu. icuuuuuu......
The greedy green boss rides on the pity programmer
该命令意思：\^ 就是个转义字符，匹配^本身就使用\^
[^0-9]是否定的意思，^[\^0-9]表示不要匹配0-9开头的行

$ cat 996 | grep -E -v [0-9]{3}
way to icu. icuuuuuu......
The greedy green boss rides on the pity programmer
-v是否定的意思（反向查找条件）

$ cat 996 | grep -E boss\|icu
way to icu. icuuuuuu......
The greedy green boss rides on the pity programmer
\|：表示将|作为或，而不是管道