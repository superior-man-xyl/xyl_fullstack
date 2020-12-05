//let request=require('request-promise');//第三方npm
const fetch = require("node-fetch");
let cheerio=require('cheerio');

let url='https://movie.douban.com/top250';

// 
const main=async()=>{//async 关键字 异步
   fetch(url)
        .then(res=>res.text())
        // .then(body=>console.log(body));//把页面的HTML爬出来了
        .then(body=>{
            let $=cheerio.load(body);
            let movieNodes=$('#content.item');//每一部电影的类名
            console.log(movieNodes)
        });
}
main();