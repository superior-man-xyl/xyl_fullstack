// 每个reducer 模块是个独立的小地方 
// reducer + action`
// import reducer from './reducer'; //  给reducer函数
// import * as actionCreators from './actionCreators'; // actions

// export {reducer, actionCreators};
import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import * as actionTypes from './store/actionCreators'
function Recommend(props) {
  console.log(props.bannerList,'-----');
  useEffect(()=>{
      props.getBannerDataDispatch()
  },[])
  return (
    <div>Recommend</div>
  )
}

const mapStateToProps = (state)=> {
  return {
    bannerList: state.recommend.bannerList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch(){
        //store 里的reducer 都期待得到消息
        dispatch(actionTypes.getBannerList());
    }
  }
}
// 读取store 状态 dispatch action
export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
