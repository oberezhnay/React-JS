import React from 'react'
import TodoListItem from '../TodoListItem/TodoListItem'
import './TodoList.css'

function TodoList({todos, onDelete, onSelect, onToggle}) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoListItem 
          key={todo.id} 
          todo={todo}
          onDelete={onDelete}
          onSelect={onSelect}
          onToggle={onToggle}
        />
      ))}
    </ul>
  )
}

export default TodoList