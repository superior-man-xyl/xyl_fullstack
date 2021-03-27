[参考文章](https://juejin.cn/post/6889247428797530126)
- 数据传递有哪些方案
1. reducer  比较复杂
2. peops  最原始 手续多，太转了
3. 使用hooks里的useContext  
useContext 和 reducer 的异同
createContext  createStore 配对
createContext.Provide  createStore.Provider 配对
reducer 符合大型项目的要求，useContext适合小型项目，它们可以组合起来用

App2.js讲了个优化

后半部分需要的依赖
yarn add react-redux redux-immutable immutable 

userInfo  我们的用户信息
1. userEffect->dispatch action {changeUserInfo,payload}->api->163 music api