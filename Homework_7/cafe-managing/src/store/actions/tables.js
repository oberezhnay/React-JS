import api from '../../services/api'

export const ACTION_TABLE_SAVE = 'ACTION_TABLE_SAVE';
export function saveTable(table) {
  return {
    type: ACTION_TABLE_SAVE,
    payload: table
  };
}

export const ACTION_TABLE_SEARCH = 'ACTION_TABLE_SEARCH';
export function searchTable(query) {
  return {
    type: ACTION_TABLE_SEARCH,
    payload: query
  };
}

export const ACTION_TABLE_DELETE = 'ACTION_TABLE_DELETE';
export function onDelete(id) {
    return { 
      type: ACTION_TABLE_DELETE, 
      payload: id 
    };
}

export const SET_TABLES_ACTION = 'SET_TABLES_ACTION';
export function setTables(data) {
    return { 
      type: SET_TABLES_ACTION, 
      payload: data 
    };
}

export const SET_TABLES_LOADIND_ACTION = 'SET_TABLES_LOADIND_ACTION';
export function setTablesLoading(isLoading) {
    return { 
      type: SET_TABLES_LOADIND_ACTION, 
      payload: isLoading 
    };
}

export const GET_TABLES_ACTION = 'GET_TABLES_ACTION'; 
export function getTables() {
  return function(dispatch) {
  dispatch(setTablesLoading(true));

  api.get('tables').then( resp => {
     dispatch(setTables(resp.data));
     dispatch(setTablesLoading(false));
  }); 
    console.log('thunk')
  }
}