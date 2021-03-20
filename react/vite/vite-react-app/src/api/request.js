import axios from "axios";
import {axiosInstance} from "./config";
//把所有的axios请求都在这里统一进行管理
//url改了怎么办？
export const getBannerRequest=()=>{
    return axiosInstance.get('/banner')
}

export const getRecommendListQuest=()=>{
    return axiosInstance.get('/personalized')
}
//singers
export const getSingleListRequest=()=>{
    return axiosInstance.get('/')
}