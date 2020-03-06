import React from 'react';
import { connect } from 'react-redux';
import { useRouteMatch, Link } from 'react-router-dom';
import { searchGroup } from '../../store/actions/groups';
import { onDelete } from '../../store/actions/groups';
import {onDeleteStudent} from '../../store/actions/students'
import './GroupList.css';

function GroupsList( {list, search, onSearch, onDelete, studentsList, deleteGroupStudents }) {
  const { url } = useRouteMatch();

  return (
    <div>
        <input 
          type="text" 
          value={search} 
          onChange={({target}) => onSearch(target.value)} />
      <ul>
        {list.map(item => (
          <li key={item.id} className='group-item'>
            <Link to = {`${url}/${item.id}`} className='group-item-link'>{ item.name }</Link>
            <span onClick={ e => e.stopPropagation() || onDelete(item.id) && deleteGroupStudents(item.id, studentsList, deleteGroupStudents)}>	&#128465;</span>
            <span> &#10000;</span>
            {/* <span onClick={ e => e.stopPropagation() || onSelect(todo.id)}> &#10000;</span> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

function deleteGroupStudents(groupId, students, deleteGroupStudents) {
  students.find(item => {
    if(item.attended_group == groupId)
    deleteGroupStudents(item.id) 
  })
}

function mapStateToProps({groups, students }){
  console.log(students.list)
  return {
    list:  groups.list.filter(item => 
      item.name.includes(groups.search)
      ),
    search: groups.search,
    studentsList: students.list
  };
};


const mapDTP = {
  onSearch: searchGroup,
  onDelete: onDelete,
  deleteGroupStudents: onDeleteStudent
};

export default connect(mapStateToProps, mapDTP)(GroupsList)
