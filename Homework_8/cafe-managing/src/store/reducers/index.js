import { combineReducers } from 'redux';

// import checks from './checks';
import menue from './menue';
import tables from './tables';
import waitstaff from './waitstaff';

export default combineReducers({
  tables: tables,
  waitstaff: waitstaff,
  menue: menue,
  // checks: checks  
});