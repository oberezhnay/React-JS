import React from 'react';
import { connect } from 'react-redux';
import { useRouteMatch, Link, useHistory } from 'react-router-dom';
import {createSelector} from 'reselect';
import { searchTable } from '../../store/actions/tables';
import { onDelete } from '../../store/actions/tables';
// import {onDeleteStudent} from '../../store/actions/students';
import './TablesList.css';

function TablesList( {list, search, onSearch, onDelete }) {
  const { url } = useRouteMatch();
  const history = useHistory();

  // function deleteStudents(groupId){
  //   studentsList.forEach(student => {
  //     if(+student.attended_group === +groupId)
  //     deleteGroupStudents(student.id)
  // } )};

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
            { item.description } { item.sitsCount }
            <span onClick={ () => { onDelete(item.id)}}
              className='del-btn'>
                &#128465;
              </span>
          </li>
        ))}
      </ul>
      <button className ='add-btn' onClick={()=>history.push(`${url}/new`)}>Add table</button>
    </div>
  );
}

const listSelector = (state) => state.tables.list;
const searchSelector = (state) => state.tables.search;

const getFilteredTables = createSelector(
  [listSelector, searchSelector],
  (list, search) => {
    const searchRegExp = new RegExp(search, 'gi')
    return search
      ? list.filter(item => item.name.match(searchRegExp)) 
      :list;

  }
);

const getTablesCount = createSelector([getFilteredTables],  // не обязательно, пример
  list => console.log(list.length));

function mapStateToProps(state){
  return {
    list:  getFilteredTables(state),
    tablesCount: getTablesCount(state),  // не обязательно, пример
    search: state.tables.search,
    // studentsList: state.students.list
  };
}


const mapDispatchToProps = {
  onSearch: searchTable,
  onDelete: onDelete,
  // deleteGroupStudents: onDeleteStudent
};

export default connect(mapStateToProps, mapDispatchToProps)(TablesList);
