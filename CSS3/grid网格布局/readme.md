# grid 网格布局
- 在哪里，会经常看到？
比如：微信的功能模块页面，每个小程序，占一个格子

- 在考题中，有多少让元素在屏幕居中的方法？
    - flex   
         body d:f justify-content:center   align-items:center;
    - grid
        justify-content:center
    - 定位
    - margin 负值
    - 。。。

- grid-template-rows|columns
    布局可以直接对二维进行操作，

- 九个元素给个方案使其背景颜色不也一样
    - 使用js DOM 操作ele.style
    - css方案  使用伪元素:nth-child(odd)
    ？怎么使其每个都不一样
     .box:nth-child(1|odd|event) :last-child
     更多格子怎么高效写css样式
     使用stylus
     .box
    for n in (1..9)
        &:nth-child({n})
            background-color rgba(n*20,n*5,n*9,n*0.1)
&:表示连接上面，rgba？
rgba(red, green, blue, alpha)
red	    定义红色值，取值范围为 0 ~ 255，也可以使用百分比 0% ~ 100%。
green	定义绿色值，取值范围为 0 ~ 255，也可以使用百分比 0% ~ 100%。
blue	定义蓝色值，取值范围为 0 ~ 255，也可以使用百分比 0% ~ 100%。
alpha - 透明度	定义透明度 0（完全透明） ~ 1（完全不透明）

问题：如果box的数量不确定，怎么写代码？

弹性布局在解决现代移动端甚至未来物联网，不好解决或解决麻烦的问题
 九宫格 多加每一行的父元素
  grid 的二维布局方案来了

- 在垂直方向做主元素分配高度
    display:grid+ grid-template-rows: 1fr auto;
更加具有优势

- fristChild lastChild
ChildNodes  换行符 会作为空的文本节点(text)
lastElementChild