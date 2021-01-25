# xyl_fullstack
谢永良的前端全栈学习代码仓库

view-source是一种协议，早期基本上每个浏览器都支持这个协议。后来Microsoft考虑安全性，对于WindowsXP pack2以及更高版本以后IE就不再支持此协议。但是这个方法在FireFox和Chrome浏览器都还可以使用。 如果要在IE下查看源代码,只能使用查看中的"查看源代码"命令.
　　以前的使用方法：在浏览器地址栏中输入
　　view-source: sURL
　　回车即可看到当前网页的源代码了。
JS用法:
       window.location="view-source:" + window.location

最小学习原理，学习最少的东西，就去实践，实践中继续学习
问题：
- 研究页面怎么先出现页面,再加载出一些难加载的图片
图片懒加载
如果body及其子元素的高度设置为窗口高度时，html上也要添加
document：
- js/drap_drop
