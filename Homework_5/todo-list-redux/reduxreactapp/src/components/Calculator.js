import React from 'react';
import TodoList from './components/TodoList/TodoList';
import TodoModal from './components/TodoModal/TodoModal';
import './App.css';

function Calculator({ todos, newTodo, save, edit, del, toggle, select, modalVisibility }) {
    return <> 
    <header className='todo-header'>ToDo List</header>
    <button className='newtodo-btn' onClick={edit}>Add New ToDo</button>
    <TodoModal 
      todo = { newTodo } 
      onChange={ edit }
      onSave={ save }
      showModal={ modalVisibility }
      onModal={edit}/>
    <TodoList 
      initialTodoState={ todos }
      onDelete={ del }
      onSelect={ select } 
      onToggle={ toggle }/>
  </>;
}

export default Calculator;
