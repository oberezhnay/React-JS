import React, { useState } from 'react';
import { connect } from 'react-redux';
import { saveTable } from '../../store/actions/tables';
import { useHistory } from 'react-router';

function TableForm({ item, onSave }) {
  const [table, setTable]= useState(item);
  const history = useHistory();

  function onFormSubmit(e){
    e.preventDefault();
    onSave(table);
    history.push('/tables');
  }

  function onChange({target}){
    setTable({
      ...table, 
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
        value={table.name}
        onChange = {onChange}
        />
      <label htmlFor='name'>Description</label>
      <input 
        id='description'
        name='description'
        type='text' 
        value={table.description}
        onChange = {onChange}
        />
        <label htmlFor='name'>Sits Count</label>
        <input 
        id='sitsCount'
        name='sitsCount'
        type='text' 
        value={table.sitsCount}
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
        ? state.tables.list.find(item => +item.id === +id)
        : {name: '', description:'', sitsCount:''}
  };
}

const mapDispatchToProps = {
  onSave: saveTable
}

export default connect(mapStateToProps, mapDispatchToProps)(TableForm);
