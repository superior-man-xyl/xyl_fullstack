import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM } from './actionTypes'

export const changeInputAction =(value)=>({
    type:CHANGE_INPUT,
    value
})
export const addItemAction=()=>({
    type:ADD_ITEM
})
export const deleteItemAction=(index)=>{
    return{//和上面两个式子是一个意思，只是上面两个式子更省略
    type:DELETE_ITEM,
    index}
}//这里可以知道，如果要返回的是对象就不能省略，要写成单表达式就加括号