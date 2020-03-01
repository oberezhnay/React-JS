import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import {connect} from 'react-redux';
import {onTodoDelete, onTodoSelect, onTodoToggle} from '../../store/actions';
import './TodoList.css'

function TodoList( { todos, onDelete, onSelect, onToggle }) {
  return ( 
    <ul > {
      todos.map(todo => ( 
        <TodoListItem 
          key = {todo.id}
          todo = {todo}
          onDelete = {onDelete}
          onSelect = {onSelect}
          onToggle = {onToggle}
        />
      ))} 
    </ul>
  )
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = {
  onDelete: onTodoDelete,
  onSelect: onTodoSelect,
  onToggle: onTodoToggle
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)