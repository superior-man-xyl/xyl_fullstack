- react 性能优化的几个方法
之前旧方式有三种，后面hooks又带来三种
    1. shouldComponentUpdate
    2. memo
    3. useEffect
    4. useMemo
    5. useCallback
    6. React.Lazy

- 父子组件的问题
    父组件 setState方法更新了数据，就会刷新一遍
    子组件也会跟着改变，但是其并没有改变，应该优化，不应该跟着刷新

    更新跟更改

- react组件受到state/props的影响，默认行为是state每次发生变化组件都会重新渲染
render-》createElement(element) -》 vdom -> {type:'div'}
使用shouldComponentUpdate  true(默认)|false 来决定是否执行render