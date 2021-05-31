function parseParam(url){
    // 协议：域名/路径：端口？
    //(.+)这个括号内的东西会单独拿到数组的第二位
    const paramsStr=/.+\?(.+)$/.exec(url)[1];//，表示任意字符，+表示一到多个
    const paramsArr=paramsStr.split('&');//按&切割开来
    // console.log(paramsStr);
    let paramsObj={};
    paramsArr.forEach(param=>{
        //每一个要解构的单元，必须是正确的单元
        if(/=/.test(param)){
            let [key,val]=param.split('=');//将每个单元,如a=1变为[a,1]再赋值给[key,val]数组
            // paramsObj[key]=val;//放到下面判断后存入
            val = decodeURIComponent(val);//解码,传输中的都会编码，防止数据丢失
            // if(key in paramsObj)
            if(paramsObj.hasOwnProperty(key)){
                paramsObj[key]=[].concat(paramsObj[key],val);
            }else{
                paramsObj[key]=val;
            }
        }else{
            paramsObj[param]=true;
        }
    })
    // console.log(paramsObj);
    return paramsObj;
}

console.log(parseParam('http://localhost:8080?a=1&b=2&c=3&d&a=4&keyword=%E6%89%8B%E6%9C%BA'));