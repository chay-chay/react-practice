import React from 'react';
import { v4 as uuidv4} from 'uuid';

export default function TodoForm({todos, setTodos, input, setInput, seteditTodo, editTodo }) {
const handleChange = (e) => {
    setInput(e.target.value) 
};

const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => {
        return todo.id === id ? { title, id, completed}: todo;
    })
    setTodos(newTodo)
    seteditTodo("")
}
const handleSubmit = e => {
    e.preventDefault()
    if (!editTodo) {
        setTodos([...todos, {id: uuidv4(), title: input, completed: false }])
        setInput("")
    } else {
        updateTodo(input, editTodo.id, editTodo.completed)
    }
}


    return (
        <div>
            <h1>TodoForm</h1>
            <form onSubmit={handleSubmit }>
                <input type='text' 
                    value={input}
                    onChange={handleChange}
                />
                <button type='submit' >submit</button>
            </form>
        </div>
    )
}
