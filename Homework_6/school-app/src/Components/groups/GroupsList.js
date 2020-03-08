import React from 'react';
import { connect } from 'react-redux';
import { useRouteMatch, Link, useHistory } from 'react-router-dom';
import { searchGroup } from '../../store/actions/groups';
import { onDelete } from '../../store/actions/groups';
import {onDeleteStudent} from '../../store/actions/students';
import './GroupList.css';

function GroupsList( {list, search, onSearch, onDelete, studentsList, deleteGroupStudents }) {
  const { url } = useRouteMatch();
  const history = useHistory();

  return (
    <div>
        <input 
          type="text" 
          value={search} 
          placeholder="Search..."
          onChange={({target}) => onSearch(target.value)} />
      <ul>
        {list.map(item => (
          <li key={item.id} className='group-item'>
            <Link to = {`${url}/${item.id}`} className='group-item-link'>{ item.name }</Link>
            <span 
              onClick={ e => e.stopPropagation() || (onDelete(item.id) && deleteGroupStudents(getIdStudent(item.id, studentsList)))}
              className='del-btn'>
                &#128465;
              </span>
          </li>
        ))}
      </ul>
      <button className ='add-btn' onClick={()=>history.push(`${url}/new`)}>Add group</button>
    </div>
  );
}

function getIdStudent(groupId, studentsList){
  const groupStudent = studentsList.find(student => +student.attended_group === +groupId);
  return groupStudent.id
}

function mapStateToProps({groups, students }){
  return {
    list:  groups.list.filter(item => 

      item.name.toUpperCase().includes(groups.search.toUpperCase())
      ),
    search: groups.search,
    studentsList: students.list
  };
}


const mapDispatchToProps = {
  onSearch: searchGroup,
  onDelete: onDelete,
  deleteGroupStudents: onDeleteStudent
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupsList);
