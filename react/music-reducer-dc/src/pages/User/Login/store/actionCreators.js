import { CHANGE_LOGIN_STATUS, CHANGE_USER_INFO } from "./constants";
import {loginByPhoneRequest} from "../../../../api/request";

export const saveUserInfo=data=>({//同步
    type:CHANGE_USER_INFO,
    data
})

export const saveLoginStatus=data=>({
    type:CHANGE_LOGIN_STATUS,
    data
})

//数据来自于远程api 两个action  axios 只在action里请求
export const loginByPhone=(phone,password)=>{
    return dispatch=>{
        // dispatch(saveUserInfo)
        //下面那个是api(自己写的)
        loginByPhoneRequest(phone,password)
        .then(res=>{
            dispatch(saveLoginStatus(true));

            console.log(res.data,'+++++++++');
            dispatch(saveUserInfo(res.data));

        })
    }
}