//index.js
//获取应用实例
// 引入
const WXAPI=require('apifm-wxapi');
const app = getApp()

Page({
  data: {
    banners:[]
  },
  // 利用生命周期
  onLoad: function () {
    // 启动滑屏效果
    // 图片数据的来源?
    WXAPI.banners({
      //头部图 banner 位
      //app:表示获取整个应用的，刚开始的
      // https://api.it120.cc/tz/banner/list?type=app//type=app接口
      type:'app'
    })
    // 一个promise
    .then(res=>{
      this.setData({
        banners:res.data})
    })
  },
  getUserInfo: function(e) {
    
  }
})
