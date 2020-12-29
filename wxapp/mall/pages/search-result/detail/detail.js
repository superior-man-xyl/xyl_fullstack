// pages/search-result/detail/detail.js
const WXAPI = require('apifm-wxapi');
//引入接口使用接口的数据
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsDetail: {},
    goodsId:'',
    selectSizePrice:'',
    selectSizeOPrice:'',
    shareQuanziProduct:"true"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('on load');
    // this.data.goodsId = options.id;
    this.data.goodsId=5781;//写死来调试
    console.log(this.data.goodsId);
  },
  // 只要有数据请求的（因为花时间多）就加async
  async getGoodsDetailAndKanjieInfo(goodsId){
    //network  /goods/:id
    const goodsDetailRes = await WXAPI.goodsDetail(goodsId);
    // goodsDetail.data.basicInfo.videoId='123';//为了调试用的，本来goodsDetail.basicInfo.videoId为空，因为之前调试选的商品没视频，等下删除
    console.log(goodsDetailRes);
    this.setData({
      goodsDetail:goodsDetailRes.data,
      selectSizePrice:goodsDetailRes.data.basicInfo.minPrice,
    selectSizeOPrice:goodsDetailRes.data.basicInfo.originalPrice
    })
  },
  //小程序只允许分享到个人后者群里，但是不可以直接分享到朋友圈
  async drawSharePic(){
    //用户登陆，获取用户权限
    const qrcodeRes = await WXAPI.wxaQrcode({
      scene: this.data.goodsDetail.basicInfo.id + ',1111' ,
      page: '/pages/search-result/detail/detail',
      is_hyaline: true,
      autoColor: true,
      expireHours: 1
    })
    console.log(qrcodeRes);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('on ready');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      console.log('on show');
      // 在onload后，它晚一点去做数据请求，先让css和html完成页面结构的绘制
      this.getGoodsDetailAndKanjieInfo(this.data.goodsId);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('on hide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('on unload');
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
    let _data = {
      title: this.data.goodsDetail.basicInfo.name,
      path: '/pages/search-result/detail/detail?id=' + this.data.goodsDetail.basicInfo.id ,
      success: function(res) {
        // 转发成功
      },
      fail: function(res) {
        // 转发失败
      }
    }
    return _data

  }
})