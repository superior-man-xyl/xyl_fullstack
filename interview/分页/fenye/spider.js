const superagent=require('superagent');
const api='https://movie.douban.com/j/search_subjects';

//这种模块机制叫common.js   还有 CMD es6模块化
module.exports=(pageStart)=>{
    //axios和XMLHttpRequest，axios强很多，
    //JS兼容模式，浏览器嗅探
    // 前端用axios的时候，使用的是XMLHttpRequest
    //node中 require('http)
    return new Promise((resolve,reject)=>{
        superagent
            .get(api)
            .query({
                pageStart,
                'type':'tv',
                'tag':'日本动画',
                'sort':'recommend',
                'page_limit':20
            })
            .type('form')//豆瓣的接口需要的
            .accept('application/json')//其实不设置后一样，默认返回的就是JSON
            .end((err,res)=>{
                if(err) reject(err);
                let resObj=JSON.parse(res.text);
                console.log(resObj);
                resolve(resObj);
            })
    })
}