const express = require('express')
const app=express()
app.get('/',(req,res)=>{
    console.log('Home');
    res.send('hello world');
})
// app.listen(3003,()=>{

// })
//使用serverless不用上面那个指定端口了
// export default //es6写法
module.exports=app //common js 写法