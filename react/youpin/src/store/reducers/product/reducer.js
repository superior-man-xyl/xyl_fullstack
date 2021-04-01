import * as actionTypes from './constants'
const initialVal={//小就是默认数据
    detail:{},//详情页 id
    list:[]
}

export default function productReducer(state=initialVal,action){
    switch(action.type){
        case actionTypes.CHANGE_DETAIL:
            state={//这是浅拷贝
                ...state,
                detail:action.payload
            }
            return state;
        default:
            return state
    }
}