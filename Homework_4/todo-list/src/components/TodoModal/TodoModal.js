import React from 'react'
import './TodoModal.css'

function TodoModal({ todo, onChange, onSave, showModal, onModal }) {

  function onValueChange(e){
    onChange({
      [e.target.name]: e.target.value
    });    
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

export default TodoModal
