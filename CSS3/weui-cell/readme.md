# css的程序性

- BEM
Block： weui-cell 项目名字 小鹏： xp-

安装了stylus，css预编译器 使用命令：npm i -g stylus 
安装插件 language-stylus 

-stylus
css有太多规则
stylus是css的超集，可以编译成css
-省去了{:;}，高速编辑

使用 stylus cell.styl命令可以生成相应的css文件
使用 stylus -w cell.styl -o cell.css 命令意思：将cell.styl和cell.css绑定，只要编辑cell.styl保存就能同步变化cell.css文件。
写的是styl文件，HTML是无法显示使用的，
所以 -o 编译一下 cell.css
-w 边编译边执行

- 弹性布局 flex
    1.如何启用弹性布局呢？
    display:flex|inline|block|inline-block 布局相关的都是display
    弹性布局设置在父元素上，启动了新的空间
    原有的盒子属性被打破了，
    .weui-cell(display:flex)>新的空间，原有块级能力被替代.weui-cell_bd(flex:1主元素)+.weui-cell_hd(辅元素)
