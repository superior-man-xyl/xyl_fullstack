// // require 关键字，引入库
// const fs=require('fs');//fs:文江系统，是node的内置模块
// const nodemailer = require('nodemailer');//nodemailer：第三方库，通过安装获得
// // 模块（module）  语法->函数模块化->module(模块化)
// // 现代语言中，一个文件就是一个模块 
// const modA=require('./a.js')//使用相对地址,引入模块a.js

// console.log(modA.add(1,2));

// fs.readFile('./readme.md',function(err,res){
//     if(err){
//         throw new Error(err);//通过深入浅出node.js学习buffer，要去看
//     }
//     console.log(res.toString());//这里res是readme.md的内容。使用toString()来使其由二进制变成文字字符串
// })

const nodemailer = require('nodemailer');
const {default:Axios}=require('axios');//{default:Axios}:结构
const schedule=require('node-schedule');//定时器
// async声明的表示一个异步函数
//获得土味情话
function getHoneyedWords(){
    const url ='https://chp.shadiao.app/api.php';
    return Axios.get(url);
}
// 把发邮件的事情封装给一个函数
async function sendMail(words,i){
    let user="1433402960@qq.com";
    let pass="nmatkkpzxjnfbace";//授权码
    let to="2052641042@qq.com";//目标邮箱
    let transporter=nodemailer.createTransport({//nodemailer拥有一个方法打开一个传送通道
        host:"smtp.qq.com",//qq发送文件的域名
        port:587,
        secure:false,
        auth:{
            user:user,
            pass:pass
        }
    });
    let info=await transporter.sendMail({
        from:`me<${user}>`,
        to:`hello<${to}>`,
        subject:`当第${i}次见你`,
        text:words
    })
    console.log("发送成功");
}
// for(let i=0;i<5;i++){
//     getHoneyedWords()
//     .then(res=>{
//         sendMail(res.data,i+1);
//         //console.log(res.data);//输出获得的土味情话
//     })
// }
// getHoneyedWords()
//     .then(res=>{
//         sendMail(res.data);
//         //console.log(res.data);//输出获得的土味情话
//     })
// sendMail();
schedule.scheduleJob({hour:18,minute:41},function(){//使用定时器进行发送，指定时与分，运行程序会一直在特定时间发送邮件，并且一直持续下去（程序不终止）
    console.log("启动任务：" + new Date());
    getHoneyedWords()
    .then(res=>{
        sendMail(res.data);
        //console.log(res.data);//输出获得的土味情话
    })
})