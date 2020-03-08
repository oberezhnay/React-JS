import React, { useState } from 'react';
import { connect } from 'react-redux';
import { onSaveStudent } from '../../store/actions/students';
import { useHistory } from 'react-router';

function StudentForm({ item, groups, onSave }) {
  const [ student, setStudent] = useState(item);
  const history = useHistory();

  function onFormSubmit(e){
    e.preventDefault();
    onSave(student);
    history.push('/students');
  }

  function onChange({target}){
    setStudent({
      ...student, 
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
        value={student.name}
        onChange = {onChange}
        />

        <label htmlFor='attended_group'>Group</label>
        <select 
        id='attended_group'
        name='attended_group'
        type="text" 
        value={student.attended_group}
        onChange = {onChange}
        >
          {groups.map(group => (
          <option 
            key={group.id} 
            value={group.id}>
              {group.name}
          </option>
           ))}
        </select>
        <button>Save</button>
    </form>
  );
}

function mapStateToProps( state, {id}){
  return {
    item: 
      id !=='new' 
        ? state.students.list.find(item => item.id === +id)
        : {name: '', attended_group: ''},
    groups: state.groups.list
  };
}

const mapDispatchToProps = {
  onSave: onSaveStudent
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
