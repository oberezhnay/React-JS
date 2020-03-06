import React, { useState } from 'react';
import { connect } from 'react-redux';
import { saveGroup } from '../../store/actions/groups'
import { useHistory } from 'react-router-dom';

function GroupForm({ item, onSave }) {
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

function mapStateToProps( { groups}, {id}){
  return {
    item: 
      id !=='new' 
      ? groups.list.find(item => item.id == id)
      : {id: '', name: 'hello'}
  };
}

const mapDispatchToProps = {
  onSave: saveGroup
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm)
