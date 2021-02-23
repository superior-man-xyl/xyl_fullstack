# 神三元React项目最佳实战   写一个单页应用
    1.全局的样式  使用样式组件去做
    2. router react 全家桶
        react-router react-router-dom react-router-config
        SPA  让路由接管一切
        
        path:/ Component:Home
        path:/A Component:B
        配置  /routes/index.js

vue/react 开发的都是单页应用，像幻灯片式的切换，页面不刷新，
局部{renderRoutes(routes)}  把当前path匹配的组件渲染到该位置

安装 npm i react-router react-router-dom react-router-config --save

- React 组件类型，非常的灵活
    1.StatelessComponent  function 函数式组件
        state   -》React hooks   用于UI显示
    2.StatefulComponent 
    3.样式组件  /style styleComponent

npm i styled-components

npm i react-router react-router-dom react-router-config --save