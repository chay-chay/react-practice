import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

export default function Todos() {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState("")
    const [editTodo, seteditTodo] = useState(null)
    // console.log(todos)

    return (
        <div>
            <TodoForm todos={todos} setTodos={setTodos} input={input} setInput={setInput} />
            <Todo todos={todos} setTodos={setTodos} editTodo={editTodo} seteditTodo={seteditTodo} />
        </div>
    )
}
