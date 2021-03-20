//与API 通信的地方
import { getBannerRequest } from '../../../api/request'


export const changeBannerList =(data)=>({
    type:'CHANGE_BANNER',
    data:data
})
//数据管理顺序
// component->action->api->dispatch(action-type)->reducer->新的值

export const getBannerList=()=>{
    return (dispatch)=>{
        getBannerRequest()
        .then(data=>{
            //dispatch是有格式要求的
            console.log(data,'!!!!!!!');
            dispatch(changeBannerList(data.banners))
        })
    }
}