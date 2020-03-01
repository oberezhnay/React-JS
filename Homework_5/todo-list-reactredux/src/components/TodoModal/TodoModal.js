import React from 'react';
import './TodoModal.css';
import { connect } from 'react-redux';
import {onNewTodoSave, onTodoUpdate, setVisibility} from '../../store/actions';

function TodoModal({ todo, onChange, onSave, showModal, onModal }) {

  function onValueChange(e){
    const changes ={
      title: e.target.value
    };
    onChange(changes);  
  }

  function onFormSubmit(e){
    e.preventDefault();
    onSave(todo)
  }

  function onFormCansel(e){
    e.preventDefault();
    onModal()
  }
  return (
    <>
    {showModal ? <div><div className='form-container'></div>
      <form 
        onSubmit={onFormSubmit} 
        className='addtodo-form'>
          <h3>ToDo: </h3>
          <div>
            <input 
              type='text' 
              name='title'
              placeholder='...'
              value={todo.title} 
              onChange={onValueChange}/>
          </div>
          <button>Save</button>
          <button onClick={onFormCansel}>Cansel</button>
      </form></div> :''}
    </>
  )
}

function mapStateToProps(state){
  return {
    todo: state.newTodo,
    showModal: state.modalVisibility
  }
};

const mapDispatchToProps = {
  onSave: onNewTodoSave,
  onChange: onTodoUpdate,
  onModal: setVisibility
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoModal)
