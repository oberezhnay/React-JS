import React, { useState } from 'react';
import { connect } from 'react-redux';
import { saveWaitstaff } from '../../store/actions/waitstaff';
import { useHistory } from 'react-router';

function WaitstaffForm({ item, onSave }) {
  const [waitstaff, setWaitstaff]= useState(item);
  const history = useHistory();

  function onFormSubmit(e){
    e.preventDefault();
    onSave(waitstaff);
    history.push('/waitstaff');
  }

  function onChange({target}){
    setWaitstaff({
      ...waitstaff, 
      [target.name]: target.value
    });
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor='name'>Name</label>
      <input 
        id='name'
        name='name'
        type='text' 
        value={waitstaff.name}
        onChange = {onChange}
        />
      <label htmlFor='name'>Description</label>
      <input 
        id='salary'
        name='salary'
        type='text' 
        value={waitstaff.salary}
        onChange = {onChange}
        />
        <label htmlFor='name'>Start Date</label>
        <input 
        id='startDate'
        name='startDate'
        type='text' 
        value={waitstaff.startDate}
        onChange = {onChange}
        />
        <button>Save</button>
    </form>
  );
}

function mapStateToProps( state, {id}){
  console.log(state)
  return {
    item: 
      id !=='new' 
        ? state.waitstaff.list.find(item => +item.id === +id)
        : {name: '', description:'', sitsCount:''}
  };
}

const mapDispatchToProps = {
  onSave: saveWaitstaff
}

export default connect(mapStateToProps, mapDispatchToProps)(WaitstaffForm);
