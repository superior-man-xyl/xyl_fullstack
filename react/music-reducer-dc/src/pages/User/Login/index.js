import React,{ useEffect } from 'react';
import { connect } from 'react-redux';
import { loginByPhone } from './store/actionCreators'

const Login=(props)=>{
    const {userInfo,loginByPhoneDispatch}=props
    console.log(userInfo);
    useEffect(()=>{
        // loginByPhoneDispatch('15170725069','15170725069');
    },[])
    return (
        <div>

        </div>
    )
}

const mapStateToprops=state=>({
    userInfo:state.getIn(["user","userInfo"])
})

const mapDispatchToProps=dispatch=>{
    return {
        loginByPhoneDispatch(phone,password){
            dispatch(loginByPhone(phone,password))
        },
    }
}


export default connect(mapStateToprops,mapDispatchToProps)(React.memo(Login));