yarn add react react-dom next

# 传递参数 next只支持这个
query传递的方式 ——?id=1

next.js 能进行更好的seo优化  比如其的head组件

next 不支持引入css文件，只能用 style jsx
yarn add @zeit/next-css
使用 @zeit/next-css 就可以正常使用引入css文件了

接着写一个next的配置文件，next.config.js

接着就可以直接使用antd的ui库

加载Ant Design在我们打包的时候会把Ant Design的所有包都打包进来，这样就会产生性能问题
 那么就需要按需加载，使用  yarn add babel-plugin-import