import api from '../../services/api'

export const ACTION_WAITSTAFF_SAVE = 'ACTION_WAITSTAFF_SAVE';
export function saveWaitstaff(waitstaff) {
  return {
    type: ACTION_WAITSTAFF_SAVE,
    payload: waitstaff
  };
}

export const ACTION_WAITSTAFF_SEARCH = 'ACTION_WAITSTAFF_SEARCH';
export function searchWaitstaff(query) {
  return {
    type: ACTION_WAITSTAFF_SEARCH,
    payload: query
  };
}

export const ACTION_WAITSTAFF_DELETE = 'ACTION_WAITSTAFF_DELETE';
export function onDelete(id) {
    return { 
      type: ACTION_WAITSTAFF_DELETE, 
      payload: id 
    };
}

export const SET_WAITSTAFF_ACTION = 'SET_WAITSTAFF_ACTION';
export function setWaitstaff(data) {
    return { 
      type: SET_WAITSTAFF_ACTION, 
      payload: data 
    };
}

export const SET_WAITSTAFF_LOADIND_ACTION = 'SET_WAITSTAFF_LOADIND_ACTION';
export function setWaitstaffLoading(isLoading) {
    return { 
      type: SET_WAITSTAFF_LOADIND_ACTION, 
      payload: isLoading 
    };
}

export const GET_WAITSTAFF_ACTION = 'GET_WAITSTAFF_ACTION'; 
export function getWaitstaff() {
  return function(dispatch) {
  dispatch(setWaitstaffLoading(true));

  api.get('waiters').then( resp => {
     dispatch(setWaitstaff(resp.data));
     dispatch(setWaitstaffLoading(false));
  }); 
    console.log('thunk')
  }
}