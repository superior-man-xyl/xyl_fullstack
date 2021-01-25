const webp=require('webp-converter');//转化为webp文件

webp.cwebp('52.jpg',"output.webp","-q 80",function(status,error){
    //参数（）
    console.log(status);
});