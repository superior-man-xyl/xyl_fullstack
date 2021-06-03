# html语义化的理解
- 对人的阅读友好
例子：使用语义类标签增强了可读性，结构更加清晰，开发者能清晰的看出网页的结构，便于团队的开发与维护
- 对搜索引擎友好，使其更能读懂（seo）
例子：带有语义的文字表现力丰富，更适合搜索引擎的爬虫爬取有效信息，有利于SEO。除此之外，语义类还支持读屏软件，根据文章可以自动生成目录；
# 内联元素和块级元素
块级元素：display: block/table，有div h1-h6 table ul ol p
内联元素：display: inline/inline-block, 有span input img button 
# 布局
## 盒子模型宽度怎么计算
标准盒模型：offsetWidth = width + border + padding ie盒模型：offsetWidth = width
## margin纵向重叠问题
1. 相邻元素的margin-top和margin-bottom会重叠
2. 空白内容的p标签也会重叠
## margin负值问题
1. margin-top和margin-left为负值，元素向上，向左移动
2. margin-bottom为负值，元素自身不受影响，下方元素向上移动
3. margin-righ为负值，元素自身不受影响，右侧元素向左移动
## BFC的理解和应用
1. BFC（Block Format Context）块级格式化上下文
2. 一块独立的渲染区域，内部元素的渲染不会影响边界以外的元素
3. 形成BFC的条件
- float不是none
- position是absolute和fixed
- overflow不是visible
- display是flex或inline-block等
4. BFC的布局规则
- 内部的Box会在垂直方向，一个接一个地放置。
- Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠。
- 每个盒子（块盒与行盒）的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
- BFC的区域不会与float box重叠。
- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
- 计算BFC的高度时，浮动元素也参与计算。
5. BFC的应用
- 清除浮动
## float布局的问题，clearfix
### 如何实现双飞翼布局和圣杯布局
1. 双飞翼布局和圣杯布局的目的
- 三栏布局，中间一栏最先加载和渲染
- 两侧宽度固定，中间随着宽度改变自适应
- 一般用于pc网页
2. 圣杯布局和双飞翼布局的技术总结
- 使用float布局
- 两边使用margin负值，以便和中间内容横向重叠
- 防止中间内容被两侧覆盖，一个用padding 一个用margin
### 手写clearfix
```css
.clearFix:after{
    content:'';
    display:table;
    /* 记住要指定什么类型 */
    clear:both;
}
.clearFix{
    zoom:1;
}
```
## flex布局的问题，画色子

## 定位
1. absolute和relative分别根据什么定位？
- relative根据自身定位，元素“相对于”它的起点进行移动，不脱离文档流
- absolute根据上一级定位元素定位，比如absolute，relative，fixed，即不为static，没有就是body
2. 居中对齐有哪些实现方式？
- 水平居中
inline元素：  text-align: center
block元素：margin：auto
absolute元素：left：50% + margin负值

- 垂直居中
inline元素：line-height等于height值
absolute：top:50%+margin-top负值
下面就不需要知道内部元素尺寸
absolute：transform：translate(-50%,-50%)
absolute: top,buttom,left,right=0 + margin：auto

## 图文样式
1. line-height 如何继承
- 父元素的高度为具体数值就继承具体数值，例如body的line-height为50px，那么子元素就继承50px
- 为数值 2 1.5 这样的就是 子元素fontsize*父元素line-height的值，即继承的是比例
- 为百分比，父元素fontsize*父元素line-height，即继承的是计算后的值