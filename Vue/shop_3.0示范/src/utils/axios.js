import axios from 'axios'
import {Toast} from 'vant'
import router from '../router'

axios.defaults.baseURL=process.env.NODE_ENV=='developement'?'//47.99.134.126:28019/api/v1':'//47.99.134.126:28019/api/v1';//没有真实线上地址，就先都用测试地址
axios.defaults.headers['X-Requested-With']='XMLHttpRequest'
axios.defaults.headers['token']=localStorage.getItem('token')||''//在请求头中放个token
axios.defaults.headers.post['Content-Type']='application/json'

//请求拦截

//响应拦截(interceptors)
axios.interceptors.response.use(res=>{
    if(typeof res.data!=='object'){//如果是接口请求正常，那么一定会返回一个data包裹的对象
        Toast.fail('服务器端异常');
        return Promise.reject(res);
    }
    if(res.data.resultCode!==200){
        if(res.data.message){
            Toast.fail(res.data.message)
        }
        if(res.data.resultCode==416){//客户端请求的范围无效，代表登陆失效
            Toast.fail('登陆失效');//先给出个提示，再跳转到登陆页面
            setTimeout(()=>{
                router.push({path:'/login'})
            },1000)
        }
        return Promise.reject(res.data)
    }
    return res.data;
})

export default axios;//我们设置后的axios