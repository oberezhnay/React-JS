import React from 'react';
import { connect } from 'react-redux';
import { useRouteMatch, Link } from 'react-router-dom';
import { searchStudent } from '../../store/actions/students';
import { onDeleteStudent } from '../../store/actions/students'
import '../groups/GroupList.css'

function StudentsList( {list, search, onSearch, groupsList, onDelete} ) {
  const { url } = useRouteMatch();

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
            <Link to = {`${url}/${item.id}`} className='group-item-link'>{ item.id} . { item.name } </Link>
            <Link to = {`${url}/${item.id}`} className='group-item-link'>{getGroupName(item.id, groupsList)} </Link>
            <span onClick={ e => e.stopPropagation() || onDelete(item.id)}>	&#128465;</span>
            <span> &#10000;</span>
            {/* <span onClick={ e => e.stopPropagation() || onDelete(todo.id)}>	&#128465;</span>
            <span onClick={ e => e.stopPropagation() || onSelect(todo.id)}> &#10000;</span> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

function getGroupName(id, groups){
  const attendedGroup = groups.find(group => group.id==id)
  return attendedGroup.name
}

function mapStateToProps({ students, groups }){
  return {
    list:  students.list.filter(item => 
      item.name.includes(students.search)),
    search: students.search,
    groupsList: groups.list
  };
}

const mapDTP = {
  onSearch: searchStudent,
  onDelete: onDeleteStudent
};

export default connect(mapStateToProps, mapDTP)(StudentsList)
