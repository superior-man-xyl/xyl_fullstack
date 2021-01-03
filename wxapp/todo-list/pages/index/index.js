//index.js
//获取应用实例
const app = getApp()
//引入utils
const utils=require('../../utils/util');

Page({
  data: {
    todos:[{
      id:1609401854644,
      text:'看完三本书',
      status:'0'
    },{
      id:1609401859644,
      text:'看完八本书',
      status:'1'
    },{
      id:1609401864644,
      text:'考过四级',
      status:'1'
    }],
    addText:'',
    addShow:false,
    focus:false,
    status:'1',
    userinfo:{},
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  addTodo(){
    //加一条todo{ text:'看完三本书'，status：0}
    const todo={text:this.data.addText,status:0,id:new Date().getTime()}
    this.setData({
    todos:[...this.data.todos,todo],  //之前的数据在前面展开，后面添加新的todo
    addShow:false
    })
  },
  setInput(e){
    this.setData({
      addText:e.detail.value
    })
    
  },
  addTodoHide(){
    this.setData({
      addShow:false,//像电影拉幕一样出来表单
      focus:false
    })
  },
  addTodoShow(){
    this.setData({
      addShow:true,//像电影拉幕一样出来表单
      focus:true
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log(utils.formatTime(new Date()));//调用utils里的格式化时间的函数
  },
  showStatus(e){
    let status=e.currentTarget.dataset.status;
    this.setData({
      status
    })
  },
  getUserInfo: function(e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
