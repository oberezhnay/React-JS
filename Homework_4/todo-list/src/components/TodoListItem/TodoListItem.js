import React from 'react'
import './TodoListItem.css'

function TodoListItem({todo, onDelete, onSelect, onToggle}) {

  return (
    <li>
      <input type="checkbox" className="hidden-box" checked={todo.isDone} onChange={() => onToggle(todo.id)} />
      <label for="first" className="check--label">
      {todo.title} {' '}
      </label>
      <span onClick={() => onSelect(todo.id)}> &#10000;</span>
      <span onClick={() => onDelete(todo.id)}>	&#128465;</span>
      
    </li>
  )
}

export default TodoListItem
