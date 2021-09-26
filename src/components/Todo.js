import React from "react";

export default function Todo({ todos, setTodos ,seteditTodo, editTodo }) {
  console.log(todos);

  const handleCompleted = ( todo ) => {
    setTodos(todos.map((item) => {
        if(item.id === todo.id){
            return {...item, completed: !item.completed}
        }
        return item;
    }))
  }

  const handleEdit = ({id}) => {
    const findTodo = todos.find((todo) => todo.id === id)
    setTodos(findTodo)
  }

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo</h1>
      {todos.map((todo) => {
        console.log(todo);
        return (
          <li key={todo.id}>
            <input
              type="text"
              value={todo.title}
              onChange={(e) => e.preventDefault()}
            />
            <div>
              <button onClick={() => handleCompleted(todo)}>completed</button>
              <button onClick={() => handleEdit(todo)}>Edit</button>
              <button onClick={() => handleDelete(todo)} >Delete</button>
            </div>
          </li>
        );
      })}
    </div>
  );
}
