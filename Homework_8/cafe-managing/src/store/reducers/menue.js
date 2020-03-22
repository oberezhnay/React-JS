import {ACTION_DISH_SAVE, ACTION_DISH_CREATE, ACTION_DISH_SEARCH, ACTION_DISH_DELETE, SET_MENUE_LOADIND_ACTION, SET_MENUE_ACTION } from '../actions/menue';

const initialState = {
  list: [],
  search: '',
  isLoading: true
};

function updateDish(list, dish){
  return list.map(item=> +item.id === +dish.id ? dish: item);
}

function createDish(list, dish){
  dish.id= Date.now();
  return [...list, dish];
}

export default function(state = initialState, { type, payload }) {
  switch (type){
    case SET_MENUE_ACTION: 
    return {
      ...state,
      list: payload
    };
    case SET_MENUE_LOADIND_ACTION: 
    return {
      ...state,
      isLoading: payload
    };
    case ACTION_DISH_SAVE: 
    return {
      ...state,
      list: updateDish(state.list, payload) 
    };
    case ACTION_DISH_CREATE: 
    return {
      ...state,
      list: createDish(state.list, payload)
    };
    case ACTION_DISH_SEARCH:
      return {
        ...state,
        search: payload
    };
    case ACTION_DISH_DELETE:
      return {
        ...state,
        list: state.list.filter(item => item.id !== payload)
    };
    default:
      return state;
  }
}