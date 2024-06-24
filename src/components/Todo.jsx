import React from 'react';

const Todo = ({ todo, removeTodo, completeTodos }) => {
  return (
    <div className="todo">
      <div className="content" style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div className='todo-btns'>
        <button className='complete' onClick={() => completeTodos(todo.id)}>Completar</button>
        <button className='remove' onClick={() => removeTodo(todo.id)}>X</button>
      </div>
    </div>
  );
}

export default Todo;
