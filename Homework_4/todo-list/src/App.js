import React, { useState, useEffect } from 'react'
import TodoList from './components/TodoList/TodoList';
import TodoModal from './components/TodoModal/TodoModal';
import api from './services/api';
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({
    title: '',
    isDone: false
  });
  // const [show, setModal] = useState([

  // ]);

  useEffect(() => {
   api
    .get('').then(resp => setTodos(resp.data))
  }, []);

  function onTodoDelete(id){
   api.delete(id).then(resp => {
     setTodos(todos.filter(todo => todo.id !== resp.data.id));
   });
  }

  function onNewTodoChange(changes){
    setNewTodo({
      ...newTodo,
      ...changes
    });
  }

  function onNewTodoSave(todo){
    if (todo.id){
      updateTodo(todo);
    } else {
      createTodo(todo);
    }
  }

  function toggleTodo(id){
    const todo = todos.find(item => item.id === id)
    todo.isDone=!todo.isDone

    api.put(todo.id, todo).then(resp => {
      setTodos (
        todos.map(item => (item.id === resp.data.id ? resp.data : item))
        );
      });
};

  function createTodo(todo){
    api.post('', todo).then(resp => setTodos([...todos, resp.data]));
  }

  function updateTodo(todo){
    api.put(todo.id, todo).then(resp => {
      setTodos (
        todos.map(item => (item.id === resp.data.id ? resp.data : item))
        );
      });
  }

  function onTodoSelect(id){
    const todo = todos.find(item => item.id === id)
    setNewTodo(todo)
  }

return <> 
          <header className='todo-header'>ToDo List</header>
          <button className='newtodo-btn'>Add New ToDo</button>
          {/* <a href="#modal" className="btn">Add New ToDo</a> */}
          <TodoModal 
            todo = {newTodo} 
            onChange={onNewTodoChange}
            onSave={onNewTodoSave}/>
          <TodoList 
            todos={todos}
            onDelete={onTodoDelete}
            onSelect={onTodoSelect} 
            onToggle={toggleTodo}/>
        </>
}

export default App

