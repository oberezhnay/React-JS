import {ACTION_GROUP_SAVE, ACTION_GROUP_SEARCH, ACTION_GROUP_DELETE } from '../actions/groups'

const initialState ={
  list: [
      {
          id: 1,
          name: 'C# .Net'
      },
      {
          id: 2,
          name: 'Java Script'
      },
      {
          id: 3,
          name: 'Machine Learning'
      },
      {
          id: 4,
          name: 'Business Analises'
      },
      {
          id: 5,
          name: 'Java'
      }
  ],
  search: ''
};

function updateGroup(list, group){
  return list.map(item=> item.id == group.id ? group: item);
}

function createGroup(list, group){
  group.id= Date.now();
  return [...list, group];
}

export default function(state = initialState, { type, payload }) {
  switch (type){
    case ACTION_GROUP_SAVE: 
    return {
      ...state,
      list: payload.id 
        ? updateGroup(state.list, payload) 
        : createGroup(state.list, payload)
    };
    case ACTION_GROUP_SEARCH:
      return {
        ...state,
        search: payload
    };

    case ACTION_GROUP_DELETE:
      return {
        ...state,
        list: state.list.filter(item => item.id !== payload)
    };
    default:
      return state;
  }
}