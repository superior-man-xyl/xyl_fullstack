// miniprogram/pages/homepage/homepage.js
const app = getApp(); //全局方法， app.js 定义的全局方法

Page({

  /**
   * 页面的初始数据
   */
  data: {
    fruitInfo: [],
    offline: false, // 打烊
    isShow: true,
    imgUrls: [
      'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/152869/36/733/129848/5f6da644E8c640b50/35117f17f08456ad.jpg!q70.dpg.webp',
      'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/149571/38/9289/117895/5f6da644E784f911b/21a284afecffdb4f.jpg!q70.dpg.webp'
    ],
    activeTypeId: 0,
    typeCat: [ /** 类型的数据配置 */
      {
        id: 0, name:"美味鲜果",
      },
      {
        id: 1, name: "今日特惠"
      },
      {
        id: 2, name: "新鲜上架"
      },
      {
        id: 3, name: "店主推荐"
      }
    ]
  },
  typeSwitch(e) {
    this.setData({
      activeTypeId: e.currentTarget.dataset.id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('load') // wxml wxss
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // ready 在show 后面？ js 跟页面交互了 
    console.log('ready'); 
    // 
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('show')
    // 数据请求 云端请求数据 比较早， 放
// 到ready 晚了, 花时间， 尽量提前, 
// onLoad 正在加载  加载且计算渲染页面， 线程
// 如果又再启动下载进程的话 可能就会卡到
    // 封装所有的请求为一个方法
    // app  当前应用
    app.getInfoByOrder('fruit-board', 'time', 'desc', e => {
      this.setData({
        fruitInfo: e.data,
        isShow:true
      })
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
