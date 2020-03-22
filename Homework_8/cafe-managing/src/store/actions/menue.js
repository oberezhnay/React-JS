import api from '../../services/api'

export const ACTION_DISH_SAVE = 'ACTION_DISH_SAVE';
export function saveDish(dish) {
  return {
    type: ACTION_DISH_SAVE,
    payload: dish
  };
}

export const ACTION_DISH_CREATE = 'ACTION_DISH_CREATE';
export function createDish(dish) {
  return {
    type: ACTION_DISH_CREATE,
    payload: dish
  };
}

export const ACTION_DISH_SEARCH = 'ACTION_DISH_SEARCH';
export function searchDish(query) {
  return {
    type: ACTION_DISH_SEARCH,
    payload: query
  };
}

export const ACTION_DISH_DELETE = 'ACTION_DISH_DELETE';
export function onDelete(id) {
    return { 
      type: ACTION_DISH_DELETE, 
      payload: id 
    };
}

export const SET_MENUE_ACTION = 'SET_MENUE_ACTION';
export function setMenue(data) {
    return { 
      type: SET_MENUE_ACTION, 
      payload: data 
    };
}

export const SET_MENUE_LOADIND_ACTION = 'SET_MENUE_LOADIND_ACTION';
export function setMenueLoading(isLoading) {
    return { 
      type: SET_MENUE_LOADIND_ACTION, 
      payload: isLoading 
    };
}

export const GET_MENUE_ACTION = 'GET_MENUE_ACTION'; 
export function getMenue() {
  return function(dispatch) {
  dispatch(setMenueLoading(true));

  api.get('menue').then( resp => {
     dispatch(setMenue(resp.data));
     dispatch(setMenueLoading(false));
  }); 
  }
}

export const SAVE_MENUE_ACTION = 'SAVE_MENUE_ACTION'; 
export function saveMenue(dish) {
  return function(dispatch) {
  if (dish.id) {
  api.put(`menue/${dish.id}`, dish).then( resp => {
     dispatch(saveDish(resp.data));
  })}
  else {
  api.post(`menue`, dish).then( resp => {
       dispatch(createDish(resp.data));
  })}
  }
}

export const DELETE_MENUE_ACTION = 'DELETE_MENUE_ACTION'; 
export function deleteDish(dishId) {
  return function(dispatch) {
  api.delete(`menue/${dishId}`).then( resp => {
     dispatch(onDelete(resp.data.id));
  }); 
  }
}