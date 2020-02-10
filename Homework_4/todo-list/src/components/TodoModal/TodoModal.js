import React from 'react'
import './TodoModal.css'

function TodoModal({ todo, onChange, onSave }) {

  function onValueChange(e){
    onChange({
      [e.target.name]: e.target.value
    });    
  }

  function onFormSubmit(e){
    e.preventDefault();
    onSave(todo)
  }

  return (
<form onSubmit={onFormSubmit} className='addtodo-form' id='modal'>
                <div>
                <button className='close-btn'>&times;</button>
                <input 
                    type='text' 
                    name='title'
                    placeholder='...'
                    value={todo.title} 
                    onChange={onValueChange}/>
                </div>
                <button>Save</button>
                
                {/* {this.props.showBtnAdd ?
                  <button onClick={this.onBtnSave}>Save Todo</button>
                :''} */}
            </form>
  )
}

export default TodoModal
