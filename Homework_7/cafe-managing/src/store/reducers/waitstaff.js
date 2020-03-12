import {ACTION_WAITSTAFF_SAVE, ACTION_WAITSTAFF_SEARCH, ACTION_WAITSTAFF_DELETE, SET_WAITSTAFF_LOADIND_ACTION, SET_WAITSTAFF_ACTION } from '../actions/waitstaff';

const initialState = {
  list: [],
  search: '',
  isLoading: true
};

function updateWaitstaff(list, waitstaff){
  return list.map(item=> +item.id === +waitstaff.id ? waitstaff: item);
}

function createWaitstaff(list, waitstaff){
  waitstaff.id= Date.now();
  return [...list, waitstaff];
}

export default function(state = initialState, { type, payload }) {
  switch (type){
    case SET_WAITSTAFF_ACTION: 
    return {
      ...state,
      list: payload
    };
    case SET_WAITSTAFF_LOADIND_ACTION: 
    return {
      ...state,
      isLoading: payload
    };
    case ACTION_WAITSTAFF_SAVE: 
    return {
      ...state,
      list: payload.id 
        ? updateWaitstaff(state.list, payload) 
        : createWaitstaff(state.list, payload)
    };
    case ACTION_WAITSTAFF_SEARCH:
      return {
        ...state,
        search: payload
    };
    case ACTION_WAITSTAFF_DELETE:
      return {
        ...state,
        list: state.list.filter(item => item.id !== payload)
    };
    default:
      return state;
  }
}