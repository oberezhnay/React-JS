import React from 'react';
import './Modal.css';
import { connect } from 'react-redux';
import {onSave, onUpdate, closeModal} from '../../store/actions/modal';

function Modal({ item, onUpdate, onSave, modalVisibility, onClose }) {

  function onValueChange(e){
    const changes ={
      title: e.target.value
    };
    onUpdate(changes);  
  }

  return (
    <>
    {modalVisibility ? <div><div className='form-container'></div>
      <div 
        className='add-form'>
          <h3>Item: </h3>
          <div>
            <input 
              type='text' 
              name='name'
              placeholder='...'
              value={item.title} 
              onChange={onValueChange}/>
          </div>
          <button onClick ={()=> onSave(item)} >Save</button>
          <button onClick={ () => onClose() }>Cancel</button>
      </div></div> :''}
    </>
  )
}

function mapStateToProps({modalVisibility, newItem}){
  return {
    item: newItem,
    modalVisibility: modalVisibility
  }
};

const mapDispatchToProps = {
  onSave: onSave,
  onUpdate: onUpdate,
  closeModal: closeModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
