import React from 'react';
import { connect } from 'react-redux';
import { useRouteMatch, Link, useHistory } from 'react-router-dom';
import {createSelector} from 'reselect';
import { searchTable } from '../../store/actions/tables';
import { onDelete } from '../../store/actions/tables';
import './TablesList.css';

function TablesList( {list, search, onSearch, onDelete }) {
  const { url } = useRouteMatch();
  const history = useHistory();

  
  return (
    <>
        <input 
          type="text" 
          value={search} 
          placeholder="Search..."
          onChange={({target}) => onSearch(target.value)} />
      <button className ='add-btn' onClick={()=>history.push(`${url}/new`)}>Add table</button>
      <table>
        <tbody>
        {list.map(item => (
          <tr key={item.id} className='group-item'>
            <td><Link to = {`${url}/${item.id}`} className='group-item-link'>{ item.name }</Link></td>
            <td>{ item.description }</td> 
            <td>{ item.sitsCount }</td>
            <td onClick={ () => { onDelete(item.id)}}
              className='del-btn'>
                &#128465;
              </td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
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


function mapStateToProps(state){
  return {
    list:  getFilteredTables(state),
    search: state.tables.search
  };
}


const mapDispatchToProps = {
  onSearch: searchTable,
  onDelete: onDelete,
};

export default connect(mapStateToProps, mapDispatchToProps)(TablesList);
