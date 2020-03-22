import api from '../../services/api'

export const ACTION_GROUP_SAVE = 'ACTION_GROUP_SAVE';
export function saveGroup(group) {
  return {
    type: ACTION_GROUP_SAVE,
    payload: group
  };
}

export const ACTION_GROUP_SEARCH = 'ACTION_GROUP_SEARCH';
export function searchGroup(query) {
  return {
    type: ACTION_GROUP_SEARCH,
    payload: query
  };
}

export const ACTION_GROUP_DELETE = 'ACTION_GROUP_DELETE';
export function onDelete(id) {
    return { 
      type: ACTION_GROUP_DELETE, 
      payload: id 
    };
}

export const SET_GROUPS_ACTION = 'SET_GROUPS_ACTION';
export function setGroups(data) {
    return { 
      type: SET_GROUPS_ACTION, 
      payload: data 
    };
}

export const SET_GROUPS_LOADIND_ACTION = 'SET_GROUPS_LOADIND_ACTION'; //action creator
export function setGroupsLoading(isLoading) {
    return { 
      type: SET_GROUPS_LOADIND_ACTION, 
      payload: isLoading 
    };
}

export const GET_GROUPS_ACTION = 'GET_GROUPS_ACTION'; //thunk creator
export function getGroups() {
  return function(dispatch) {
  dispatch(setGroupsLoading(true));

  api.get('groups').then( resp => {
     dispatch(setGroups(resp.data));
     dispatch(setGroupsLoading(false));
  }); 
    console.log('thunk')
  }
}