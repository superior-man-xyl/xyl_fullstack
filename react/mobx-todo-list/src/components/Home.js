import React,{Component} from 'react';
import {observer,inject} from 'mobx-react';
//HOC 高阶组件 返回组件的组件  App->HOC(store props)->Home
@inject("store")//注入  像redux中的connect
@observer//要观察数据才能有相应更新，
class Home extends Component{
  setFinished=(item,event)=>{
    const {store }=this.props;
    store.changeFinished(item.id);//要复杂一些，要走action流程
  }
    render(){
        const { store } =this.props //还不能拿到数据，要注入，@inject("store")
        console.log(store)
        return (
            <div>
              <h2>TodoList</h2>
              {
                store.todos.map((item, index) => (
                  <div key={index}>
                    <label htmlFor={'todo' + item.id}>
                      <input type="checkbox" id={'todo' + item.id} 
                        checked={item.done}
                        onChange={this.setFinished.bind(this, item)}
                      />
                      {item.title}
                    </label>
                  </div>
                ))
              }
            </div>
          )
    }
}

export default Home