//这里就生成里组件

const { template } = require('lodash');
const MyComponent = props => {
    const compiler = MyComponent.cache || (MyComponent.cache = template('<h1><%= title %></h1>'))
    return compiler(props)
}
MyComponent.cache = null