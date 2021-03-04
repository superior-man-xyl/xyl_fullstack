网易前端面试题
1. 大摆锤   css3 clock逻辑思维——基础考题准备法
- 使用 css animation
- transform rotate 45  -45
- transform-origin 基点
2. 文本域限制缩放
3. 定制滚动条,带有回弹效果
-webkit-overflow-scrolling 属性控制元素在移动设备上是否使用滚动回弹效果.就像ios原生的滚动条一样流畅
auto: 使用普通滚动, 当手指从触摸屏上移开，滚动会立即停止。
touch: 使用具有回弹效果的滚动, 当手指从触摸屏上移开，内容会继续保持一段时间的滚动效果。继续滚动的速度和持续的时间和滚动手势的强烈程度成正比。同时也会创建一个新的堆栈上下文。
定制滚动条样式的伪类：::-webkit-scrollbar

js部分
1. JS原始数据类型有哪些？引用数据类型有哪些？
简单数据类型：(原始数据类型)7种
Boolean
number
string
null
undefined
symbol
bigint 表示大数据的

object 复杂数据类型 引用数据类型？ 指针