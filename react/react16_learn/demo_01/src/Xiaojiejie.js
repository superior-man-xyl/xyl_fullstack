import React,{Component,Fragment} from 'react'
import './style.css'
//基于webpack，所以能这样引入样式

class Xiaojiejie extends Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:'东北搓澡',
            list:['头部按摩','正骨疗伤']
        }
    }
    render(){
        return(
            // 为什么使用Fragment呢？因为React语法中必须将将组件包裹到一起，即组件包裹原则，
            // 使用div可能会影响flex，使用Fragment，在网页中代码外部就没有div包裹，且不报错
            <Fragment>
                <div>
                    {/* 为了不混淆js里的class和for，所以改用htmlFor和className */}
                    <label htmlFor="shuru">输入:</label>
                    <input className='shuru' id="shuru" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {/* <li>头部按摩</li>
                    <li>正骨疗伤</li> */}
                    {
                        this.state.list.map((item,index)=>{
                            return <li onClick={this.deleteItem.bind(this,index)} key={index+item}>{item}</li>
                            //key要唯一值，直接用index不行，因为item里可能不止一项，多选时就有很多是同一index
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    inputChange(e){
        console.log(e);//查看我们要的数据在哪里
        // this.state.inputValue=e.target.value;//要bind下
        //注意这里this的指向，这个函数会在上面render里的标签里运行，那么上面有this了是组件页面，再组件页面的this就是undefined了
        this.setState({
            inputValue:e.target.value
        })
    }
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }
    deleteItem(index){
        console.log(index);
        //一定按照下面的写，不能直接操作this.state.list，再赋值list:this.state.list,
        // 这样虽然能出效果，但是会带来巨大的性能问题
        let list=this.state.list;
        list.splice(index,1);
        this.setState({
            list:list
        })
    }
}

export default Xiaojiejie