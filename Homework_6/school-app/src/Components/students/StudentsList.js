import React from 'react';
import { connect } from 'react-redux';
import { useRouteMatch, Link, useHistory } from 'react-router-dom';
import { searchStudent } from '../../store/actions/students';
import { onDeleteStudent } from '../../store/actions/students';
import '../groups/GroupList.css';

function StudentsList( {list, search, onSearch, groupsList, onDelete} ) {
  const { url } = useRouteMatch();
  const history = useHistory();

  return (
    <div>
        <input 
          type="text" 
          value={search} 
          onChange={({target}) => onSearch(target.value)} 
          placeholder="Search..."/>
      <ul>
      {list.map(item =>
        (  
          <li key={item.id} className='group-item'>
            <Link to = {`${url}/${item.id}`} className='group-item-link'>{ item.name } </Link>
            <span>{getGroupName(item.attended_group, groupsList)}</span>
            <span onClick={ e => e.stopPropagation() || onDelete(item.id)}>	&#128465;</span>
          </li>
        ))}
      </ul>
      <button className = 'add-btn' onClick={()=>history.push(`${url}/new`)}>Add student</button>
    </div>
  );
}

function getGroupName(id, groups){
  const attendedGroup = groups.find(group => +group.id === +id);
  return attendedGroup.name
}

function mapStateToProps({ students, groups }){
  return {
    list: students.list.filter(item => 
      item.name.toUpperCase().includes(students.search.toUpperCase())),
    search: students.search,
    groupsList: groups.list
  };
}

const mapDispatchToProps= {
  onSearch: searchStudent,
  onDelete: onDeleteStudent
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);
