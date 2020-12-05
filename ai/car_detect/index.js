console.log('AI 来了，帅！');
//图像识别api
//require('baidu-api-sdk').imageClassify;
//require是node的引入模块的关键字
const ApiImageClassifyClient=require('baidu-aip-sdk').imageClassify;
const fs =require('fs');//引入模块(node 内置模块 fileSystem)
// 1.读入文件：I/O操作  从硬盘里读入到内存中，
const APP_ID="23077962";
const API_KEY="bZLtTLppWIMFgC8wtPXSrKVP";
const SECRET_KEY="lMMEkGNvMzGrYeR2iYvnottZFVghCocw";

const client=new ApiImageClassifyClient(APP_ID,API_KEY,SECRET_KEY);
// const fs=require('fs');
const image=fs.readFileSync("timg.jfif").toString("base64");

client
    .carDetect(image)
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err)
    })