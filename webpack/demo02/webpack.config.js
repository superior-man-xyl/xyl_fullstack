//让大象跳舞
//module模块。 node内置的模块化机制 commonjs
//module.exports + require
//es6里是  export default import
//webpack升级我们处理静态文件 从小作坊到企业级开发
module.exports={
    entry:'./src/main.js',
    output:{
        filename:'[name].js'
    },
    //每种类型的静态文件 代表某种资源，提供一种解决方案
    module:{
        rules:[
            {
                test:/\.css$/,//正则表达式，因为js里有cssText，所以css文件是可以存在于js文件里的
                use:['style-loader','css-loader']
            }
        ]
    }
}