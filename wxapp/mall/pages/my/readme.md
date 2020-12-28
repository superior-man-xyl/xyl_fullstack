<!--
 * @Author: xyl
 * @Date: 2020-12-27 14:33:01
 * @LastEditTime: 2020-12-28 11:22:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \git_pro\xyl_fullstack\wxapp\mall\pages\my\readme.md
-->
研究页面怎么先出现页面,再加载出一些难加载的图片
图片懒加载

如何学习vant?
- 看文档
- 看官方demo

user-poster:头图,
图片的比例一定要对,不然就会失真
542/288=100vw/53.14vw
注意头图的比例 **542/288**
 <!-- width: 100%;
    height: 53vw; -->
    - vw是Viewport's width的缩写形式，1vw永远等于当前视口宽度的百分之一。vw是一种视窗单位，也是相对单位。相对于视口的宽度，视口被均分为100单位的vw。
    - vw优势在于能够直接获取宽度，而用 % 在没有设置 body 宽度的情况下，是无法正确获得可视区域的宽度的，所以这是挺不错的优势。
    - vh同理
    
