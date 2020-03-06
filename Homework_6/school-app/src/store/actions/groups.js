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