//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 设置一个默认位置，如果没打开手机定位
    longitude:116.279767,
    latitude:40.046512,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // onLoad
  onLoad: function () {
    // console.log('地图组件加载完成了，期待经纬度');
    wx.getLocation({
      type:'gcj02',
      success:(res)=>{
        let longitude=res.longitude;
        let latitude=res.latitude;
        console.log(latitude, longitude)
        // 在wxml模板里有写一个{{latitude}}来获取当前值
        this.setData({
          longitude:longitude,
          latitude:latitude
        })
      }
    })
  },
  toScan(){
    // consoloe.log("toScan");
    return wx.scanCode({
      success:(res)=>{
        // wx.showModal({
        //   title:'二维码',
        //   content:JSON.stringify(res)//得到扫码后的结果
        // })
        let id =res.result;
        wx.navigateTo({
          url: '/pages/unlock/unlock?id=${id}',
        })
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
