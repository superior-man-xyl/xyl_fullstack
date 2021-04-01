import axios from './axios'

export default {
    info(id=0){
        return axios.get('/product/info',{
            params:{
                id
            }
        })
    }
}