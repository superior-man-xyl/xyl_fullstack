import {handleActions} from 'redux-actions'
// import {Cookie} from 'unitls/storage'

const state = {
    footerBarList:[
        {title:'首页',icon:'home',path:'/'},
        {title:'视频',icon:'video',path:'/video'},
        {title:'微头条',icon:'comment',path:'/headline'},
        {title:'我的',icon:'account',path:'/account'},
    ]    
}

export const user = handleActions({
    
},state)