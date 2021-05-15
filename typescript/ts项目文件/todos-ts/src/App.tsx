import React,{useEffect,useState} from 'react';
//除了classnames还有什么好用的库吗？ style-component moment lodash better-scroll axios
import classNames from 'classnames'//做多动态类名的输出
import TodoForm from './TodoForm';
import axios from './api/axios';

type Todo={//type和接口的区别
  id:number;
  name:string;
  done:boolean;
}
//元组
type Todos=Todo[];
//Promise<Todos>
const App:React.FC=()=>{
  const [todos,setTodos]=useState<Todos>([]);

  const onToggleTodo=(todo:Todo)=>{

  }

  const refreshTodos=()=>{
    axios<Todos>('/api/todos').then(setTodos)//Todos这个泛型传给了setTodos
  }
  useEffect(()=>{
    refreshTodos()
  },[])

  return (
   <div className='App'>
     <header className="App-header">
       <TodoForm refreshTodos={refreshTodos} />
       <ul>
         {
           todos.map((todo,index)=>{
              return (
                <li key={index} className={classNames({done:todo.done})} onClick={()=>onToggleTodo(todo)}>
                    {todo.name}
                </li>
              )
           })
         }
       </ul>
     </header>
   </div>
  );
}

export default App;
