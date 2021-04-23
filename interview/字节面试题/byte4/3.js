const {h} = require('snabbdom');
// 返回VNode有什么好处？性能优化了
{/* <div id='app'></div> //坏处是前端生成组件 SEO不行 蜘蛛拿不到内容  ssr就是使用服务器端渲染，在服务器端生成html传送过来 */}
// 不要html字符串，要VNode 内存 对象  ssr 服务器端渲染 React Native APP 开发成为可能
const MyComponent = props => {
    return h('h1',props.title,[
        h('span', {style:{fontWeight:'bold'}},'this is bold')//利用递归
    ]);
}

console.log(MyComponent({title:'hello'}));