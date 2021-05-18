import api from '../service/api';
import {GETRECOMMEMDPLAYLIST} from '../constants/song';

export const getRecommentPlayList=()=>{
    return dispatch=>{
        api
            .get('/personalized')
            .then(res=>{
                let recommendPlayList=res.data.result
                dispatch({
                    type:GETRECOMMEMDPLAYLIST,
                    payload:{
                        recommendPlayList
                    }
                })
            })
    }
}