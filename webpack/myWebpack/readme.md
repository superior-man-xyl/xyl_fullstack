# 核心打包原理
- 需要读到入口文件内容里面的内容
- 分析入口文件，使用递归的方式去读取模块所需要的文件内容，生成AST语法树(抽象语法树)。
- 根据AST语法树，生成浏览器能运行的代码

# 模块分析
- 引入 @babel/parser  npm i --save @babel/parser

# 收集依赖
将使用import引入的文件路径收集起来,将用到@babel/traverse
npm i --save @babel/parser

# ES6转成ES5 (AST)
    @babel/core
    @babel/preset-env