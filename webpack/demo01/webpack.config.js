// 与parcel的不同，parcel在webpack后出现，为了应对那些轻量级的代码，webpack配置太繁琐
//npm run build
//一定会去根目录下找到webpack.config.js配置文件
//module node 模块化 common.js module.exports
//import export es6 export default
module.exports={
    entry:'./main.js',//入口
    output:{//出口
        filename:'bundle.js'//最后产品
    }
}