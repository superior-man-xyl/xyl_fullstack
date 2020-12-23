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
// const db=wx.cloud.database();
// const phoneTable=db.collection("products");//collection->table
// console.log(db);
//全局变量
// Page({
//   data:{
//     phone_list:[]
//   },
//   onLoad(){
//     //加载数据
//     db
//     .collection("products")
//     // get取数据
//     .get({
//       // 成功，回调函数中处理
//       success:res=>{
//         // console.log(res);
//         this.setData({
//           phone_list:res.data
//         })
//       }
//     })
//   },
//   viewItem(e){
//     var id=e.currentTaget.dataset.id;
//     wx.navigateTo({
//       url:'../phoneDetail/phoneDetail?id='+id
//     })
//   }
// })

// 连接云数据库
const db = wx.cloud.database()
// 一个叫做userInfo的collection，即要提前有创建数据库userInfo
const userInfo = db.collection('userInfo')


// 每个页面都是page函数
Page({
  data:{
    userList:[]
  },
  navigatTo(){

  },
  
  getUserInfo(result){
    // console.log(result.detail.userInfo);//测试用

    // 一切的云开发未来都是从一个函数开始
    // getOpenID:登陆
    // complete:一个回调函数
    // 一次上云事件
    wx.cloud.callFunction({
      name: 'getUserOpenId',
      complete: res => {
        console.log(res);

        // 在哪里 像mysql where 条件查询
        userInfo.where({
          // 去云端就是为了拿到openId
          // 这里的openId是唯一的，用于确定用户
          _openid:res.result.openId
        }).count().then( res => {
          // count()判断用户是否存在
        // console.log(res);
        // 如果total为0，就是新用户
        if(res.total==0){
          // 插入新用户
          // Insert：插入
          userInfo.add({
            // 一定要有一个data 一个JSON
            data: result.detail.userInfo
          }).then(res => {
            wx.navigateTo({
              url: '../add/add',
            })
          }).catch(err => {
            console.error(err)
          })
        }else{
          wx.navigateTo({
            url: '../add/add',
          })

        }
        })
      }
    })
  }
})