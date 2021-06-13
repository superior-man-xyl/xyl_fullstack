import { createStore } from 'vuex'

export default createStore({
  state: {//数据源
    count:0
  },
  mutations: {//放更改状态的方法
    addCount(state){
      state.count++;
      console.log(state.count);
    }
  },
  actions: {//调用方法
    actionAddCount(ctx){
      ctx.commit('addCount');//提交mutilation里面的方法
    }
  },
  modules: {
  }
})
