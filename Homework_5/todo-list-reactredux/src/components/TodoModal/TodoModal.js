import React from 'react';
import './TodoModal.css';
import { connect } from 'react-redux';
import {onNewTodoSave, onTodoUpdate, closeModal} from '../../store/actions';

function TodoModal({ todo, onChange, onSave, showModal, onClose }) {

  function onValueChange(e){
    const changes ={
      title: e.target.value
    };
    onChange(changes);  
  }

  return (
    <>
    {showModal ? <div><div className='form-container'></div>
      <div 
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
          <button onClick ={()=> onSave(todo)} >Save</button>
          <button onClick={ () => onClose() }>Cancel</button>
      </div></div> :''}
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
  onClose: closeModal
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoModal)
