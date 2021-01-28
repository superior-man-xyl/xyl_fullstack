/*
 * @Author: your name
 * @Date: 2020-12-28 18:24:16
 * @LastEditTime: 2020-12-28 20:19:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \git_pro\xyl_fullstack\wxapp\mall\pages\search-result\search-result.js
 */
// pages/search-result/search-result.js
const WXAPI = require('apifm-wxapi');
//引入接口使用接口的数据
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [],
    listType: 1,
    name: '', //搜索
    orderBy: '', //排序条件
  },
  //点击后转换图片
  changeShowType() {
    if (this.data.listType == 1) {
      this.setData({
        listType: 2
      })
    } else {
      this.setData({
        listType: 1
      })
    }
  },
  // e是传来的事件对象
  bindinput(e) {
    this.setData({
      name: e.detail.value
    })
  },
  bindconfirm(e) {
    this.setData({
      name: e.detail.value
    })
    this.search()
  },
  async search() {
    // 开启搜索的loading效果
    wx.showLoading({
      title: '加载中',
    })

    const _data = {
      orderBy: this.data.orderBy,
      page: 1,
      pageSize: 20,
    }
    if (this.data.name) {
      _data.k = this.data.name
    }
    // WXAPI需要引入，在最上面
    //  /goods?k=addidas&page=1&pageSize=20
    // async和await
    const res = await WXAPI.goods(_data); //使用WXAPI里的goods数据
    console.log(res);
    this.setData({
      goods: res.data
    })
    // 数据取完了关闭loading效果
    wx.hideLoading();

  },

  filter(e) {
    this.setData({
      orderBy: e.currentTarget.dataset.val
    })
    this.search()
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.search();
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