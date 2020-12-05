const AipOcrClient=require('baidu-aip-sdk').ocr;
const OcrClient=require('baidu-aip-sdk').ocr;
const fs =require('fs');//引入模块(node 内置模块 fileSystem)
const image=fs.readFileSync("1.jpg").toString('base64');
const APP_ID="23078075";
const API_KEY="Xur7p65IL4ipU25GNBLP9k5s";
const SECRET_KEY="M5VG7z4DKMNV4AgG2wjNSyEwPv4DGcBm";

const client =new OcrClient(APP_ID,API_KEY,SECRET_KEY);
const options={};
options["multi_detect"]="true";
client 
.licensePlate(image,options)
.then(function(result){
    console.log(result);
})
.catch(function(err){
    console.log(err);
})
