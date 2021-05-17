//使用promise来写Ajax
const getJson = function (url) {
    return promise = new Promise((resolve, reject) => {
        const xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Mscrosoft.XMLHttp');
        xhr.open('GET', url, false);//创建http请求
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onreadystatechange = function () {//设置状态监听函数
            if (this.readyState !== 4) {
                //为4说明数据接收完毕，此时可以通过 responseBody 和 responseText 获取完整的响应数据
                return;
            }
            if (this.status === 200 || this.status === 304) {//监听http状态码
                resolve(this.responseText);
            } else {
                reject(new Error(this.responseText)); 
            }
        }
        xhr.send();//发送请求
        //因为是get请求所以send里没有值，如果是post请求就要把信息放到send的参数里
    })
}

getJson('http://api.jisuapi.com/recipe/search?keyword=1&num=1&appkey=9d1f6ec2fd2463f7').then((value)=>{
    console.log(value);
})