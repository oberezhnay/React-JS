import React from 'react'
import './TodoListItem.css'

function TodoListItem({todo, onDelete, onSelect, onToggle}) {

  return (
    <li>
      <input type="checkbox" checked={todo.isDone} onChange={() => onToggle(todo.id)} />
      {todo.title} {' '}
      <span onClick={() => onSelect(todo.id)}> &#10000;</span>
      <span onClick={() => onDelete(todo.id)}>	&#128465;</span>
    </li>
  )
}

export default TodoListItem
