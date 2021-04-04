var express = require('express');
var cors=require('cors');//后端cors中间件,相当于设置访问白名单
const app=express();
app.use(cors());
app.get('/product',(req,res)=>{
    res.json({
        a:1,
        b:2
    })
})
app.listen(8000,()=>{
    console.log('server is ok');
})