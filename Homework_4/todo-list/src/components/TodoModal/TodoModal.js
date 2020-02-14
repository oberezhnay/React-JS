import React from 'react'
import './TodoModal.css'

function TodoModal({ todo, onChange, onSave, onUpdate, showModal }) {

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
<>
{showModal ?
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
                </form> :''}
</>
  )
}

export default TodoModal


/**
 * 
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
                :''} */
                //</form>
 


                /**
                  <a href="#popup" className="btn">Add new ToDo</a>
 <div id="popup" className="popup">
  <a href="#" className="close">&times;</a>
  <form onSubmit={onFormSubmit} className='addtodo-form' id='modal'>
    <div>
      <input 
        type='text' 
        name='title'
        placeholder='...'
        value={todo.title} 
        onChange={onValueChange}/>
     </div>
     <button>Save</button>
   </form>
 </div>
 <a href="#" className="close-popup"></a>
                 */