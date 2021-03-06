import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group'


class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow:false
         }
         this.toToggole=this.toToggole.bind(this)//在这绑定this
    }
    render() { 
        return ( 
            <div>
            <CSSTransition 
                in={this.state.isShow}   //用于判断是否出现的状态
                timeout={2000}           //动画持续时间
                classNames="boss-text"   //className值，防止重复
                unmountOnExit   //unmount（卸载）dom在退出动画后
            >
                <div>BOSS级人物-孙悟空</div>
            </CSSTransition>
            <div><button onClick={this.toToggole}>召唤Boss</button></div>
            </div>
            //使用动画库代替关键帧
            // <div>
            //     <div className={this.state.isShow?'show':'hide'}>Boss 出现：**孙悟空**</div>
            //     <div><button onClick={this.toToggole}>召唤BOSS</button></div>
            // </div>
         );
    }
    toToggole(){
        this.setState({
            isShow:this.state.isShow?false:true
        })
    }
}
 
export default Boss;