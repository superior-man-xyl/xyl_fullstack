// 配置一下 完成 src/index.js ->dist/MediaDeviceInfo.js 让目录运行起来
const path=require('path');
console.log(path.resolve(__dirname,'dist'));//D:\git_pro\xyl_fullstack\webpack\react-demo\dist
console.log(__dirname);//D:\git_pro\xyl_fullstack\webpack\react-demo   绝对路径
// path.resolve 返回一个路径
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'main.js',//直接输入webpack运行，得到main.js
        path:path.resolve(__dirname,'dist')
    },
    /**一个个模块区打理 js babel await 
     * css styl -》css
     * image 
    */
    module:{
        rules:[
            {
                test:/\.jsx?$/,//找到文件，加载到下面的车间里
                use:{/*使用什么东西来处理这个模块 就像生产流程的一个车间*/
                    loader:'babel-loader',/**babel-loader js的转译 */
                    options:{
                        //babel-loader 的配置 预处理  es6-》es5
                            presets:['@babel/preset-env','@babel/preset-react']
                        
                    }
                }
            },
            // {//类似的
            //     test:/\.styl$/,
            //     use:{
            //         loader:'stylus-loader'
            //     }
            // }
        ]
    }
}