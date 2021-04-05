let jsonp=(url,data={},callbackName="callback")=>{//默认回调函数就是叫callback
    //indexOf方法找不到指定值就会返回-1
    let dataStr=url.indexOf('?')==-1?'?':'&';
    //根据传入的url判断是用?连接，还是用&连接
    for(let key in data){
        //通过遍历将data里数据写入url
        dataStr+=`${key}=${data[key]}&`;
    }
    dataStr+="callback"+callbackName;
    //有了url字符串后，接着就构建script标签用于请求
    let scriptEle=document.createElement('script');
    scriptEle.src=url+dataStr;//拼接成完整URL
    document.appendChild(scriptEle);

    return new Promise((resolve,reject)=>{
        window[callbackName]=(data)=>{
            try{
                resolve(data);
            }catch(error){
                reject(error);
            }finally{
                //使用script标签进行过数据请求后，该标签已经没用了，要删除
                scriptEle.parentNode.removeChild(scriptEle);
            }
        }
    });
}