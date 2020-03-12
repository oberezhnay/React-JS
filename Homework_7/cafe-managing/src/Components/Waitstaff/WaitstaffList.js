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
            <span>{ item.salary }</span> <span>{ item.startDate }</span>
            <span onClick={ () => { onDelete(item.id)}}
              className='del-btn'>
                &#128465;
              </span>
          </li>
        ))}
      </ul>
      <button className ='add-btn' onClick={()=>history.push(`${url}/new`)}>Add waiter</button>
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
