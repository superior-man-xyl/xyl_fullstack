import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function Square(props){
  return (
    <button className="square" 
    onClick={props.onClick}>
      {props.value}
    </button>
  )
}

class Board extends React.Component{
  renderSquare(i){
    return(
      <Square value={this.props.squares[i]}
      onClick={()=>this.props.onClick(i)}//父组件传来
      />
    )
  }
  render(){
    return(
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component{
  constructor(props){
    super(props);
    this.state={
      history:[//下棋历史
        {
          squares:Array(9).fill(null)//Array(9).fill(null)就是声明一个值全为 null 的数组。
        }
      ],
      stepNumber:0,//当前第几步
      XIsNext:true
    }
  }

  handleClick(i){
    console.log(i);
    //把当前的记录修改i   null-》1，2
    //新加一个下棋记录 history push
    // current -> 新的值 history.length-1
    // const history=this.state.history;
    const history =this.state.history.slice(0,this.state.stepNumber+1)
    const current=history[history.length-1];//上一步
    const squares =current.squares.slice();//使用slice()无参数可以返回一个新的数组，这是引用赋值的问题,使其能得到一个数组，而不是一个数组的地址
    console.log(squares);
    squares[i]=this.state.XIsNext?'x':'o';
    this.setState({
      history:history.concat([
        {
          squares:squares
        }
      ]),
      stepNumber:history.length,
       XIsNext:!this.state.XIsNext
    }
    )
  }

  jumpTo(step){
    this.setState({
      stepNumber:step,
      XIsNext:(step%2)===0
    })
  }

  render() {
    const history=this.state.history;
    const current =history[this.state.stepNumber];//current会自动变
    console.log(current,'-------');
    const status=[];

    const moves=history.map((step,move)=>{
      const desc=move?'Go to move #'+move:'Go to game start'
      return(
        <li key={move}>
          <button onClick={()=>this.jumpTo(move)}>{desc}</button>
        </li>
      )
    });

    return (
      //负责切整个页面
      <div className="game">
        {/* 左边棋盘 */}
        <div className="game-board">
          <Board 
          squares={current.squares}//数据发生变化，就会重新改变
          onClick={i=>this.handleClick(i)}//i在board里获得
          />
        </div>
      {/* 右边步骤 */}
      <div className="game-info">
        <div>{status}</div>
        <ol>
          {moves}
        </ol>
      </div>
      </div>
    )
    
    //细化整个页面
  }
}
//组件化思维
ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
