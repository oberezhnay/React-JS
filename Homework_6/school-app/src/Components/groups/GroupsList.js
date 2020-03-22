import React from 'react';
import { connect } from 'react-redux';
import { useRouteMatch, Link, useHistory } from 'react-router-dom';
import {createSelector} from 'reselect';
import { searchGroup } from '../../store/actions/groups';
import { onDelete } from '../../store/actions/groups';
import {onDeleteStudent} from '../../store/actions/students';
import './GroupList.css';

function GroupsList( {list, search, onSearch, onDelete, studentsList, deleteGroupStudents }) {
  const { url } = useRouteMatch();
  const history = useHistory();

  function deleteStudents(groupId){
    studentsList.forEach(student => {
      if(+student.attended_group === +groupId)
      deleteGroupStudents(student.id)
  } )};

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
            <span onClick={ () => { onDelete(item.id); deleteStudents(item.id)}}
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

const listSelector = (state) => state.groups.list;
const searchSelector = (state) => state.groups.search;

const getFilteredGroups = createSelector(
  [listSelector, searchSelector],
  (list, search) => {
    const searchRegExp = new RegExp(search, 'gi')
    return search
      ? list.filter(item => item.name.match(searchRegExp)) 
      :list;
    // return search? list.filter(item => 
    // item.name.toUpperCase().includes(search.toUpperCase())
    // ) :list
  }
);

const getGroupsCount = createSelector([getFilteredGroups],  // не обязательно, пример
  list => console.log(list.length));

function mapStateToProps(state){
  return {
    list:  getFilteredGroups(state),
    groupsCount: getGroupsCount(state),  // не обязательно, пример
    search: state.groups.search,
    studentsList: state.students.list
  };
}


const mapDispatchToProps = {
  onSearch: searchGroup,
  onDelete: onDelete,
  deleteGroupStudents: onDeleteStudent
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupsList);
