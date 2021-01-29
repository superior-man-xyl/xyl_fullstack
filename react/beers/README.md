# 创建项目方式
create-react-app beers  直接创建新文件夹beers
 npm i react-router react-router-dom  安装react-router react-router-dom
 
小程序联想型学习react,这里用react实现小程序那样的配置
/page  index tabbar my cart 等 小程序就是给我们内置了一个路由
react就复杂点要安装
1. npm i react-router react-router-dom    安装路由
和之前的 npm i react react-dom一样，是要安装的

2. BrowserRouter 浏览器路由切换，以前是由后端负责，现在前端也可以做 
我们要启动前端路由功能（不是标配）也就是前端想有路由功能就安装这些
用BrowerRouter包住route的配置，接管整个项目

3. 使用<Router path="" component=""/>匹配到path=""部分，显示component=""组件
location.path

4. Main.js 组件化 切图
html结构挂钩 大体上的 和section很像  没个部分封装成组件
本项目分成：header+loader+list+beer(Item.js卡片)

npm i prop-types  安装检测工具  如果父组件没有传参就报错