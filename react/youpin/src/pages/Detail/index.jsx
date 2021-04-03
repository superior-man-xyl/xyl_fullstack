import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import Swiper from 'swiper';
import 'swiper/css/swiper.css'

import {getProductDetail} from '../../store/reducers/product/actions';
import './index.css'

const Detail = (props) => { 
  const {baseInfo,detail,getProductDetailDisPatch} = props;

  const handle=(ev,type)=>{
    ev.preventDefault();//辨认其是否登陆了
    if(!baseInfo){//判断是否登陆的数据，初始是空对象，如果登陆了就会装满数据，头像等
      console.log("请登陆");
      props.history.push('/user/login');//跳转登陆页
    }
   
  }
 
  console.log(detail,'------')
  useEffect(() => {
    console.log(props,"++++++++++");
    let id = props.match.params.id || 1;//没有就默认为1
    getProductDetailDisPatch(id);//写死为1测试，后来在props里找
  },[])

  useEffect(() => {
    if (detail.images) {
      new Swiper('.detail-swiper', {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
      })
    }
  })

  return (
    detail.id?<section className="detailBox">
      <div className="swiper-container detail-swiper">
        <div className="swiper-wrapper">
          {detail.images.map((item, index) =>{
            return <div className="swiper-slide" key={index}>
              <img src={item} alt=""/>
            </div>
          })}
        </div>
        <div className="swiper-pagination"></div>
      </div>

        <div className="info">
          <div className="price">
              <span className="pricel">{detail.discount}</span>
              {detail.discount===detail.price?null:<span className="price2">{detail.price}</span>}
              {detail.tag.split('|').map((item,index)=>{
                return item?<span className="tag" key={index}>{item}</span>:null
              })}
          </div>
          <div className="title">{detail.title}</div>
          <p className="desc">{detail.detail.text}</p>
        </div>
        <div className="xiangxi">
          {detail.detail.images.map((item,index)=>{
            return <img src={item} key={index}/>
          })}
        </div>
        <div className="bottomBtn">
         <div className="cartIcon" onClick={
           ev=>{
             props.history.push('/cart');//跳转用
           }
         }>
           <i></i>
           <sapn>购物车</sapn>
         </div>
         <div className="btn" >
           <a onClick={ev=>{//分成ADD和PAY 不同类型不同反应，加入购物车不需要跳转
             handle(ev,'ADD')
           }}>加入购物车</a>
           <a onClick={ev=>{
             handle(ev,'PAY')
           }}>立即购买</a>
         </div>
        </div>
    </section>
    : <>正在请求中..</>
  )
}

const mapSateToProps = (state) => {
  return {
    baseInfo:state.user.baseInfo,
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
