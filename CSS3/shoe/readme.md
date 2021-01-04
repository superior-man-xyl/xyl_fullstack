# 电商是2021永恒的话题

1.主题：得物APP
新的细分领域的电商在上市的过程中
- 得到：知识电商
- 得物：潮牌电商
 得益于25岁一下的潮牌群体
 两大电商  阿里电商(基于店家)/腾讯电商(基于社会关系微信-拼多多京东)  互联网关系链

 2.本项目的功能细分
 - 难点：半圆-》更大半径的圆，且圆的中心会改变
 - 鞋
 有两个运动方向-向上走-然后旋转一定角度（animation）
 - 然后出现文字部分 
 opacity  0-1
 container 


 使用stylus来写css
 1.新键stylus -w card.styl -o card.css (未安装的话：npm i -g stylus)    tab缩进

 - 注意html良好的结构
 不要先想样式，把毛坯做好
 .dw-项目代号 是项目，不是简单的页面
 .container ? 容器
容器用于：设置 宽度+居中（margin auto）也可以使用 定位 / 弹性布局（水平居中）
居中的五种方法

- stylus的用法
使用命令行
    stylus -w *.styl -o *.css
-w：watch(监听)
-o：output(向外输出)
1.用tab缩进
2.嵌套的css
    .dw_card
        .dw_card__imgBx
生成（.dw_card .dw_card__imgBx{}）

    .dw_card
        &:after
    (.dw_card:after{})&表示不是下级，是引用下级