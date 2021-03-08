//index.js中虽然创建好了数据储存仓库，但是很混乱，
// 需要一个具有管理能力的模块进行管理，就是reducer

const defaultState={
    inputValue:'Write something',
    list:[
        '早8点开晨会，分配今天的开发工作',
       '早9点和项目经理作开发需求讨论会',
       '晚5:30对今日代码进行review'
    ]
}
export default (state=defaultState,action)=>{
    return state;
}