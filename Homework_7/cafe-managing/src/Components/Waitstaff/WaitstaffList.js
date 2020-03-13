import React from 'react';
import { connect } from 'react-redux';
import { useRouteMatch, Link, useHistory } from 'react-router-dom';
import {createSelector} from 'reselect';
import { searchWaitstaff } from '../../store/actions/waitstaff';
import { onDelete } from '../../store/actions/waitstaff';
import '../Tables/TablesList.css';

function WaitstaffList( {list, search, onSearch, onDelete }) {
  const { url } = useRouteMatch();
  const history = useHistory();

  function getDate(startDate){
    let date = new Date(startDate);
    return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`
  }
  return (
    <div>
        <input 
          type="text" 
          value={search} 
          placeholder="Search..."
          onChange={({target}) => onSearch(target.value)} />
        <button className ='add-btn' onClick={()=>history.push(`${url}/new`)}>Add waiter</button>
        {list.map(item => (
          <tr key={item.id} className='group-item'>
            <td><Link to = {`${url}/${item.id}`} className='group-item-link'>{ item.name }</Link></td>
            <td>{ item.salary }</td> 
            <td>{ getDate(item.startDate) }</td>
            <td onClick={ () => { onDelete(item.id)}}
              className='del-btn'>
                &#128465;
            </td>
          </tr>
        ))}
    </div>
  );
}

const listSelector = (state) => state.waitstaff.list;
const searchSelector = (state) => state.waitstaff.search;

const getFilteredWaitstaff = createSelector(
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
    list:  getFilteredWaitstaff(state),
    search: state.waitstaff.search
  };
}


const mapDispatchToProps = {
  onSearch: searchWaitstaff,
  onDelete: onDelete
};

export default connect(mapStateToProps, mapDispatchToProps)(WaitstaffList);
