[source](https://github.com/qiangliyu/-React-/blob/master/src/store/index.js)
- redux-logger 用法


## 电商网站
1. 商品
    - 列表（首页） /home   对应一个reducer ， productReducer 提供 list changeList  api/
    - 详情  /detail/:id  对应一个reducer ， productReducer 提供 detail changeDetail  api/
2. 购物车  /cart    reducer cartReducer
3. 我的 /my      reducer userReducer
这个项目是仿小米有品

后端数据就express来调用数据库，发送数据

商品列表
商品详情页
路由    id ->action ->store ->详情页去显示

yarn add swiper@5.3.6   指定该版本，最好用，稳定