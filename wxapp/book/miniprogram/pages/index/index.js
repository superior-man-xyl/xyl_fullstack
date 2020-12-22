// //index.js
// const app = getApp()

// Page({
//   data: {
//     // 这里写的是假数据
//     phone_list:[{
//       title:"小米10",
//       price:1300,
//       image:"https://img14.360buyimg.com/n1/s546x546_jfs/t1/108026/34/14255/109472/5ea55bdfEedeec507/e21a69a1456dd33c.jpg",
//       color:"黑色"
//     }]
//   },




//连接数据库
const db=wx.cloud.database();
const phoneTable=db.collection("products");//collection->table
// console.log(db);
//全局变量
Page({
  data:{
    phone_list:[]
  },
  onLoad(){
    //加载数据
    db
    .collection("products")
    // get取数据
    .get({
      // 成功，回调函数中处理
      success:res=>{
        // console.log(res);
        this.setData({
          phone_list:res.data
        })
      }
    })
  },
  viewItem(e){
    var id=e.currentTaget.dataset.id;
    wx.navigateTo({
      url:'../phoneDetail/phoneDetail?id='+id
    })
  }
})