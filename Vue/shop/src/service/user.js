import axios from '../utils/axios'//使用自己更改的axios

export function register(params){
    return axios.post('/user/register',params);//注册使用post请求，按照后端提供的要求，可能后端只接收post请求
}

export function login(params){
    return axios.post('/user/login',params)
}