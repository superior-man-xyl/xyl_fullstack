import React from 'react'
import axios from './api/axios'

//一些约定
// 1. propt refreshTodos 
// 2. React.FC
// 3. change React.Change<HTMLInputElement>

interface Props{
    refreshTodos:()=>void
}

const TodoForm:React.FC<Props>=({refreshTodos})=>{
    const [name,setName] = React.useState('')
    const onSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const newTodo={
            id:Math.random(),
            name,
            done:false
        }

        if(name.trim()){
            axios('/api/add',newTodo)//做数据的存贮
            refreshTodos()
            setName('')
        }
    }
    const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value)
    }

    return (
        <form className="todo-from" onSubmit={onSubmit}>
            <input 
                className="todo-input"
                value={name}
                onChange={onChange}
                placeholder="请输入待办事项"
            />
            <button type="submit">新增</button>
        </form>
    )
}

export default TodoForm