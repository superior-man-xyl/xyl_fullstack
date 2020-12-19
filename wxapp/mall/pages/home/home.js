// pages/home/home.js
// 引入
const WXAPI=require('apifm-wxapi');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    keyword: '',
    noticeList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 首页功能很多
    // 1.取banners数据
    this.initBanners();
    // 2.商品列表
    this.categories();
    // 3.优惠卷
    this.getCoupons();
    // 4.提醒
    this.getNotice();
    // 5.砍价
    this.kanjiaGoods();
    // 6.拼团
    this.pingtuanGoods();
  },
  // async 与 await 配套的
  // async 函数修饰符 里面可以有大量的耗时操作，告别then
 async initBanners(){
  // es7写法 await
  // 数据从WXAPI来
  // 小程序是前端，API来自后端，
  // 由第三方提供URL+method
  // SDK banners 接口名 type 不同的banner
  const res=await WXAPI.banners({
    //index表示获取index的
    type:"index",

  })
  // console.log(res);
  this.setData({
    banners:res.data
  })
},
categories(){

},
getCoupons(){},
 async getNotice(){
  // 改成es7
  // WXAPI
  // .noticeList({pageSize:5})
  // .then(res=>{
  //   this.setData({
  //     noticeList:res.data
  //   })
  // })
  const res = await WXAPI.noticeList({pageSize: 5})
    this.setData({
      noticeList: res.data
    })
},
kanjiaGoods(){},
pingtuanGoods(){},

tapBanner(e){
  const url=e.currentTarget.dataset.url;
  if(url){
    wx.navigateTo({
      url:url
    })
  }//通过这里跳转
},
doSearchInput(e){
  this.setData({
    keyword:e.datail.value
  })
},
doSearch(e){
  wx.navigateTo({
    url: `../goods/list?name=${this.data.keyword}`,
  })
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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