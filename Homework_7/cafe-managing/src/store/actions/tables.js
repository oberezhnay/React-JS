import api from '../../services/api'

export const ACTION_TABLE_SAVE = 'ACTION_TABLE_SAVE';
export function saveTable(table) {
  return {
    type: ACTION_TABLE_SAVE,
    payload: table
  };
}

export const ACTION_TABLE_CREATE = 'ACTION_TABLE_CREATE';
export function createTable(table) {
  return {
    type: ACTION_TABLE_CREATE,
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
  }
}

export const SAVE_TABLES_ACTION = 'SAVE_TABLES_ACTION'; 
export function saveTables(table) {
  return function(dispatch) {
  if (table.id) {
  api.put(`tables/${table.id}`, table).then( resp => {
     dispatch(saveTable(resp.data));
  })}
  else {
  api.post(`tables`, table).then( resp => {
       dispatch(createTable(resp.data));
  })}
  dispatch(getTables());
  }
}

export const DELETE_TABLES_ACTION = 'DELETE_TABLES_ACTION'; 
export function deleteTables(tableId) {
  return function(dispatch) {
  //  debugger
  api.delete(`tables/${tableId}`).then( resp => {
    console.log(resp)
     dispatch(onDelete(resp.data.id));
  }); 
  dispatch(getTables());
  }
}