# 京东考题
ES7中
-  @annotation  @ 装饰器 decorator
阮一峰es6里有   python等语言就有，js也引入了

浏览器不支持怎么办？
使用babel
这个题就是考察Babel和装饰器

npm init -y

npm i @babel/cli @babel/core @babel/preset-env   安装babel

./node_modules/.bin/babel  a.js -o compiled.js

npm i @babel/plugin-proposal-decorators

babel presets 也是js编译的预处理插件包，
只不过其把常用的core，react 封装成了env 或jsx
如果有些特殊 decorator async await  
  未来的特性， babel 使用特写的插件来增加编译  
  **babel 永远可以让刚上市的最鲜的JS特性直接使用起来。**/

./node_modules/.bin/babel --watch a.js -o compiled.js  要运行转译es6就是使用这个


