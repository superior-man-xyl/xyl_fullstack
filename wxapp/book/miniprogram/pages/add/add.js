// miniprogram/pages/add/add.js

const db = wx.cloud.database()
const photos = db.collection('photos')


Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  upload(){
    //wx.chooseImage 打开手机的摄像头或相册
    // wx.chooseImage({
    //   count:9,//限制九张图片
    //   // 压缩与否
    //   sizeType: ['original', 'compressed'],
    //   sourceType: ['album', 'camera'],//相册，相机
    //   success: res => {
    //     // 拿到图片文件
    //     console.log(res);
    //   }
    // })
    wx.chooseImage({
      count:9,
      // 压缩与否 
      sizeType: ['original', 'compressed'],
      // 相册， 拍摄
      sourceType: ['album', 'camera'],
      success: res => {
        // 拿到图片文件 
        console.log(res);
        // 图片的地址数组
        const tempFilePaths = res.tempFilePaths
        // 通过循环，每张图片单独处理
        for(var i = 0; i < tempFilePaths.length; i ++ ){
          // 生成图片的名字
          let randString = Math.floor(Math.random() * 1000000).toString() + '.png'
          // 向云端上传文件
          wx.cloud.uploadFile({
            // 目的地址
            cloudPath: randString, // 上传至云端的路径
            // 本地文件地址
            filePath: tempFilePaths[i], // 小程序临时文件路径
            success: res => {
              console.log(res);
              // 向photos表插入一条数据
              photos.add({
                data: {
                  image: res.fileID
                }
              }).then(res => {
                //成功后 showToast：弹出一个提示框
                wx.showToast({
                  title: '上传成功',
                  icon: 'success'
                })
              })
            },
            fail: console.error
          })
        }
      
      },
      fail: err => {
        console.error(err)
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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