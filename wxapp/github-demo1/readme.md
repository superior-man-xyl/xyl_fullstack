- github 小程序
小程序组件语法
component
1.vant 框架开发
2.apifm 后台API
3.
- 应用的截图和psd
- 小程序的架构升级了
基本：/pages
/components  组件（组件构成页面） 使用html标签构成页面，不利于分工协作，和做大型项目，效率不高（复用）
组件就像积木一样，不是一个页面，但是可以拼凑成一个页面，其复用性好，就像之前的search页，都是公用的
page里调用了组件<component-name repo="item"></component-name>
component声明一下repo

npm i @vant/weapp -S --production 安装vant  （看mall里的readme）
