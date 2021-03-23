如果一个函数会直接修改全局对象，我们认为这是不应该的，是不纯的
redux中的reducer就是要求纯函数

const initialState={
    count:1
}
(state=initialState,action)=>{
    switch(action){
        case:'ADD':
            return {
                ...state,
                count:state.count+1
            }
            return state;
    }
}

- 当函数运行时，产生了修改全局数据的副作用，不纯 易产生问题
- reducer 就是一个纯函数，  不会有副作用， 不会影响到代码 都是返回的新的


yarn add immutable
- 方法二 使用immutable