import { combineReducers } from 'redux';
import * as types from './action-types'; 
//reducer就是状态树的一个分支，一个状态数据模块

//数据量较小， 就不写defaultState
const goods=(state=[],action)=>{
    const {type,payload}=action
    switch(type){
        //减少商品
        case types.DECREMENT_INVENTORY:
            return state.map(good => (
                goods.id === payload.id && good.inventory > 0 
                ? {...good, inventory: --good.inventory}
                : good
            ))
        //清空购物车
        case types.CLEAN_SHOPCART:
            let sessionGoods=JSON.parse(sessionStorage.getItem('goods'));
            for(let i=0;i<sessionGoods.length;i++){
                let item=sessionGoods[i];
                let index=state.findIndex((value)=>item.id===value.id);
                state[index].inventory+=item.count
            }
            return state
        case type.ADD_GOODS:
            //放回新的state状态 加入新数据 payload[...]
            // return state=[...state,...payload.goods];//或下面
            return state.concat(payload.goods);//也是返回一个新数组，浅拷贝只要不影响原数据就好
        default:
            return state;
    }
}

const shopCart=(state=[],action)=>{
    const {type,payload}=action;
    switch(type){
        //添加购物车 
        case types.ADD_SHOPCART:
        //第一次新增push
        // 第二次就找到商品，数量加一
        //goods types.ADD_SHOPCART
            return 
        default:
            return state
    }
}

export default combineReducers({
    goods,
    shopCart
})