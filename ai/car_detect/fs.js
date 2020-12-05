const fs=require('fs');

fs.readFile('text.txt',function(err,data){
    //console.log(err);//输出错误
    if(err){
        throw new Error(err)
        return ;
    }
    //console.log(data.toString());
    console.log(data)
})