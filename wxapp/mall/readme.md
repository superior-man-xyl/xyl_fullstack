# 电商小程序开发

- 前端框架  vant
步骤：
1.使用npm init -y 加入后端，初始化下，以安装第三方插件
2.npm i @vant/weapp -s --production  安装来自有赞的框架vant，有赞来自微信生态得为长
3.在微信开发者工具页面，点击工具，选择构建npm，就会在文件中生成个miniprogram_npm文件夹,这里的东西能直接引入（"van-button":"@vant/weapp/button/index"）不需要相对地址

在index.json中引入
（usingComponents:引入组件）
"usingComponents": {
    "van-button":"@vant/weapp/button/index"
  }
这里引入这个button组件，在index.wxml里就能使用   ``<van-button type="primary">按钮</van-button>`` 

- 问题： api在哪里？
例如； npm i apifm-wxapi
apifm-wxapi 可以提供数据（api工厂）https://www.yuque.com/apifm/doc/ns2pm0

- 电商项目的要素
  收索栏
  导航栏
  banners横幅，轮播图
  推荐
  商品列表

- 总结一下搜索体验，把自己当成小白来进行设计
placeholder + padding-left(框内留白，文字不紧贴边) + bindinput + bindConfirm + search 图标


- 业务
1.搜索
2.tabbar(前端)条件筛选页面（后端查询参数？order=price 用参数为其分类）
3.列表业务 wx:for
data:{
  goods:[]
}
apifm:使用这个api，使用接口把数据都获取
url：/goods?order=&page=${n}&size=20&keyword=addidas//分类 加 页面数 加 数量 加 搜索的关键字
这里以search-result为例  

