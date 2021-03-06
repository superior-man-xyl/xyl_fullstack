import React,{Component,Fragment} from 'react'
import './style.css'
//基于webpack，所以能这样引入样式
import XiaojiejieItem from './XiaojiejieItem'
import axios from 'axios'
import Boss from './Boss'


class Xiaojiejie extends Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:'东北搓澡',
            list:['头部按摩','正骨疗伤'],
            quantity:2
        }
    }
    componentWillMount(){
        console.log("componentWillMount---页面即将被挂载");
    }
    componentDidMount(){
//axios 在render中请求的话会出现很多问题，比如说一直都会渲染的，那么就会一直请求，服务器受不了，
// 放到componentWillMount中，又会在使用react-Native时起冲突。所以推荐在componentDidMount中请求。
        // axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
        //     .then((res)=>{console.log("axios 掘金数据请求成功："+JSON.stringify(res))})
        //     .catch((error)=>{console.log("axios 数据请求失败："+error)})//error:错误原因
        console.log("componentDidMount----页面挂载完成");
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate---在组件更新之前，自动被执行");
        return true;//需要返回一个布尔值，true代表组件会更新，false代表组件不更新(比如文本框输入后，只输入却显示不出来)
    }
    componentWillUpdate(){
        console.log("componentWillUpdate----组件即将更新");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate----组件更新完毕");
    }
    render(){
        console.log("render----页面挂载中");
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
                <ul ref={(ul)=>{this.ul=ul}}>
                    {/* <li>头部按摩</li>
                    <li>正骨疗伤</li> */}
                    {
                        this.state.list.map((item,index)=>{
                            // return <li onClick={this.deleteItem.bind(this,index)} key={index+item}>{item}</li>
                            //key要唯一值，直接用index不行，因为item里可能不止一项，多选时就有很多是同一index
                            //解析html代码的写法：当列出的字符串含有HTML代码会解析，默认不解析，太危险
                            // return(
                            //     <li onClick={this.deleteItem.bind(this,index)} ke={index+item} dangerouslySetInnerHTML={{__html:item}} ></li>
                            // )//第二个大括号代表的是一个对象

                            // 使用组件拆分，用组件来代替上面的内容
                            return(
                                <XiaojiejieItem 
                                key={index+item}
                                content={item} 
                                index={index} 
                                deleteItem={this.deleteItem.bind(this)} 
                                // 为ref进行绑定
                                ref={(input)=>{this.input=input}}
                                />
                                // 属性传值方法：这个content就是父组件向子组件传值,删除项的方法也可以传过去调用
                            )
                        })
                    }
                </ul>
                <div>共{this.state.quantity}项服务</div>
                <Boss />
            </Fragment>
        )
    }
    inputChange(e){
        // console.log(e);//查看我们要的数据在哪里
        // this.state.inputValue=e.target.value;//要bind下
        //注意这里this的指向，这个函数会在上面render里的标签里运行，那么上面有this了是组件页面，再组件页面的this就是undefined了
        this.setState({
            // inputValue:e.target.value//语义化很模糊，要优化一下
            //使用ref优化，直接使用值，不需要e了
            inputValue:this.input.value
        })
    }
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:'',
            quantity:[...this.state.list,this.state.inputValue].length
        },()=>{
            console.log(this.ul.querySelectorAll('li').length)
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