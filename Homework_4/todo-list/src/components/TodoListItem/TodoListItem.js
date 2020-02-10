import React from 'react'
import './TodoListItem.css'

function TodoListItem({todo, onDelete, onSelect, onToggle}) {

//   onItemRowClick = () => {
//     this.props.onToggle(this.props.item.id);
// }

  return (
    <li onClick={() => onToggle(todo.id)} className={`todolist-item ${todo.isDone ? 'done':''}`}>
      {todo.title} {' '}
      <span onClick={() => onSelect(todo.id)}>x</span>
      <span onClick={() => onDelete(todo.id)}>x</span>
    </li>
  )
}

export default TodoListItem
