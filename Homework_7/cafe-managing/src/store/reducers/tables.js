import {ACTION_TABLE_SAVE, ACTION_TABLE_SEARCH, ACTION_TABLE_DELETE, SET_TABLES_LOADIND_ACTION, SET_TABLES_ACTION } from '../actions/tables';

const initialState = {
  list: [],
  search: '',
  isLoading: true
};

function updateTable(list, table){
  return list.map(item=> +item.id === +table.id ? table: item);
}

function createTable(list, table){
  table.id= Date.now();
  return [...list, table];
}

export default function(state = initialState, { type, payload }) {
  switch (type){
    case SET_TABLES_ACTION: 
    return {
      ...state,
      list: payload
    };
    case SET_TABLES_LOADIND_ACTION: 
    return {
      ...state,
      isLoading: payload
    };
    case ACTION_TABLE_SAVE: 
    return {
      ...state,
      list: payload.id 
        ? updateTable(state.list, payload) 
        : createTable(state.list, payload)
    };
    case ACTION_TABLE_SEARCH:
      return {
        ...state,
        search: payload
    };
    case ACTION_TABLE_DELETE:
      return {
        ...state,
        list: state.list.filter(item => item.id !== payload)
    };
    default:
      return state;
  }
}