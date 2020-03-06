import React, { useState } from 'react';
import { connect } from 'react-redux';
import { saveStudent } from '../../store/actions/students'
import { useHistory } from 'react-router-dom';

function StudentForm({ item, onSave }) {
  const [ name, setName] = useState(item.name);

  const history = useHistory();

  function onSaveClick(){
    onSave({
      id: item.id,
      name
    });

    history.goBack();
  }

  return (
    <div>
      <input 
        type="text" 
        value={name}
        onChange = {({target}) => setName(target.value)}
        />
        <button onClick = {onSaveClick}>Save</button>
    </div>
  );
}

function mapStateToProps( { students }, {id}){
  return {
    item: 
      id !=='new' 
      ? students.list.find(item => item.id == id)
      : {id: '', name: 'hello'}
  };
}

const mapDispatchToProps = {
  onSave: saveStudent
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm)
