安装 nvm
nvm能使 一台电脑多node管理 

nvm list 可以查看都有哪些版本
nvm use v15.7.0 指定现在使用的版本

- vite 正在和webpack 竞争
使用vite 很快 vue3全面使用vite
:3001端口上进行前端项目(前端项目本使用3000，但是3000被占用，其能改变端口号，但后端项目不行) react
- :3000 端口上运行后端项目 music sdk API服务
sdk服务允许跨域服务 端口不一样也叫跨域
- 前后端分离
:如何把:3000/banner 数据展示到页面上
 yarn add axios
1. 使用 axios  使数据从后端到前端src/api
构建API模块 /banner => 请求后端
/singers 歌手列表
2. 数据到store里   getBannerList

3. 组件


store 提供给Provider -> App 组件
connect({state,dispatch})(Component)
HOC高阶函数
不需要每个组件都去store取数据，connect

store 由createStore(reducer 其来自很多模块)构建
{reducer函数,action} 组合
bannerList reuder 函数 getBannerList