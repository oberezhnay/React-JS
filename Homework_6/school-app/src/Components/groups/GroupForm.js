import React, { useState } from 'react';
import { connect } from 'react-redux';
import { saveGroup } from '../../store/actions/groups';
import { useHistory } from 'react-router';

function GroupForm({ item, onSave }) {
  const [group, setGroup]= useState(item);
  const history = useHistory();

  function onFormSubmit(e){
    e.preventDefault();
    onSave(group);
    history.push('/groups');
  }

  function onChange({target}){
    setGroup({
      ...group, 
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
        value={group.name}
        onChange = {onChange}
        />
        <button>Save</button>
    </form>
  );
}

function mapStateToProps( state, {id}){
  return {
    item: 
      id !=='new' 
        ? state.groups.list.find(item => item.id === +id)
        : {name: ''}
  };
}

const mapDispatchToProps = {
  onSave: saveGroup
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm);
