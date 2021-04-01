import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {getProductDetail} from '../../store/reducers/product/actions'
const Detail = (props) => {
  const {detail,getProductDetailDisPatch} = props;
  console.log(detail,'------')
  useEffect(() => {
    getProductDetailDisPatch(1);//写死测试
  },[])
  return (
    <>
      Detail
    </>
  )
}
const mapSateToProps = (state) => {
  return {
    detail:state.product.detail
  }
}
const mapDisPatchProps = (dispatch) => {
  return {
    getProductDetailDisPatch(id) {
      dispatch(getProductDetail(id))
    }
  }
}
export default connect(mapSateToProps,mapDisPatchProps)(Detail);
