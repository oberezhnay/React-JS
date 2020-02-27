import React from 'react'
import TodoList from './components/TodoList/TodoList';
import TodoModal from './components/TodoModal/TodoModal';
import './App.css'

function TodoList({ todos, setVisibility, onTodoUpdate, onNewTodoSave, 
                    modalVisibility, onTodoDelete, onTodoSelect, onTodoToggle, newTodo }) {
  return <>    
  <header className='todo-header'>ToDo List</header>
  <button className='newtodo-btn' onClick={setVisibility}>Add New ToDo</button>
  <TodoModal 
    todo = { newTodo } 
    onChange={ onTodoUpdate }
    onSave={ onNewTodoSave }
    showModal={ modalVisibility }
    onModal={ setVisibility }/>
  <TodoList 
    todos={ todos }
    onDelete={ onTodoDelete }
    onSelect={ onTodoSelect } 
    onToggle={ onTodoToggle }/>
</>
}

export default TodoList