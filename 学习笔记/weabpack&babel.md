https://zhuanlan.zhihu.com/p/363928061
# 面试题引导
## 前端代码为何要进行构建和打包？
## module chunk bundle 分别是什么意思，有什么区别？
- module：各个源码文件，webpack中一切皆模块
- chunk：多模块合并成的，如entry import() splitChunk
- bundle: 最终的输出文件
## loader 和 plugin 的区别
## weabpack 如何实现懒加载
## weabpack 常见性能优化
## babel-runtime 和 babel-polyfill 的区别

# 基本使用
## 拆分配置和merge
就是公共的放到webpack.common.js里，有关dev的放到webpack.dev.js里，生产环境就放到webpack.prod.js里
```js
// webpack.dev.js
const webpack = require('webpack')
const webpackCommonConf = require('./webpack.common.js')//引入主文件
const {smart} = require('webpack-merge') 
module.export = smart(webpackCommonConf,{//使用smart连接webpackCommonConf和本文件内容
    // .....
})
```
接着一些配置
![](https://i.bmp.ovh/imgs/2021/09/01ed40f50e5d1bb2.png)

![](https://i.bmp.ovh/imgs/2021/09/a7a6f1a17db5833d.png)
只有开发环境下才会定义devServer。
### 启动本地服务
### weabpack下怎么去跨域请求其他的接口
webpack下配置使用proxy

![](https://i.bmp.ovh/imgs/2021/09/819bd028817f2cda.png)

使用代理来解决跨域

### 输出文件的配置

![](https://i.bmp.ovh/imgs/2021/09/2902dce6a6530c8f.png)

 为输出文件设置一个八位的hash值

 ## 处理es6
 ## 处理样式
 ## 处理图片
 ## 模块化（webpack本身就支持模块化）

 # 高级配置
 ## 多入口
 配置多入口，对应的也是输出多页面，使用两次HTMLWebpackPlugin生成两个页面

 ![](https://i.bmp.ovh/imgs/2021/09/a5d6753c1a125442.png)

 - 使用npm run build时，会先清除原来生成的文件再生成
 因为在webpack.prod.js有配置 CleanWebpackPlugin
 ```js
 plugin: [
     new CleanWebpackPlugin(),// 默认清空outPath.path(也就是dist目录)这这输出文件夹的内容
     new webpack.DefinePlugin({
         ENV: JSON.stringify('production')
     })
 ]
 ``` 
 ## 抽离压缩css文件
 将css从js代码（那样嵌入的方式，要执行完js文件才能获得css代码，将其加到style中，效率较低）里抽离出来，形成一个单独的css文件，使用MiniCssExtractPlugin抽离，接着通过optimization的配置进行压缩
```js
 plugin: [
     new CleanWebpackPlugin(),// 默认清空outPath.path(也就是dist目录)这这输出文件夹的内容
     new webpack.DefinePlugin({
         ENV: JSON.stringify('production')
     })
     // 抽离css
     new MiniCssExtractPlugin({
         filename: 'css/mian.[contentHash:8].css'
     })
 ]
 optimization: {
     // 压缩css
     minimizer: [
         new TerserJSPlugin({}),
         new OptimizeCSSAssetsPlugin({}),
     ]
 }
 ``` 
 ## 抽离公共代码以及第三方代码

## 懒加载
## 处理react jsx
## 处理vue

# webpack性能优化（重点）
优化构建打包速度，提升开发体验和效率，优化产出代码，和产品性能
## 优化构建速度方面
### 优化 babel-loader
```js
{
    test: /\.js$/,
    use: ['babel-loader?cacheDirectory'], //使用cacheDirectory开启缓存
    // 开启缓存后，一些没有变过的额代码就可以使用缓存，不用重新编译，这样就能提高编译速度
    include: path.resolve(__dirname,'src') //明确范围
    // 明确范围可以使用 includes 和 exclude，两个选一个使用,一个包含一个排除
    // exclude: path.resolve(__dirname,'node_modules')
}
```
### IgnorePlugin
### noParse
### happyPack 多进程打包
### ParallelUglifyPlugin
### 自动刷新
### 热更新
### DllPlugin
