# react 小书（很有名的react入门教程）
这是各单页面项目，不需要安装 react-router react-router-dom 

- 简单应用，只是一个功能，不是一个完整的上线应用 website
不需要router
react是现在最流行的web网站（应用）开发框架

- 如何把组件组织起来？（原则）
1. CommentApp 是根组件 index.js(入口文件)里把App改成CommentApp     render
2. 子组件 Comment-孙子辈
3. 数据一般放在父组件中，通过prop 一路传下去
comments放在CommentApp里的主要原因是 CommentInput(
    CommentList 兄弟组件
)要push加数据   兄弟的父组件去加状态
4. 每个组件有专属的css 方便css的管理
组件卸载的时候，方便css移除干净
5. 子组件要通知父组件 有事情怎么办？
父组件将函数通知props方式传给子组件
告知子组件通过这个方法来通知父组件来工作

