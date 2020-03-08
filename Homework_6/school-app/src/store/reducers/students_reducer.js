import {ACTION_STUDENT_SEARCH, ACTION_STUDENT_DELETE, ACTION_STUDENT_SAVE } from '../actions/students';

const initialState ={
  list: [
      {
          id: 1,
          name: 'Student1',
          attended_group: 5
      },
      {
          id: 2,
          name: 'Student2',
          attended_group: 4
      },
      {
          id: 3,
          name: 'Student3',
          attended_group: 3
      },
      {
          id: 4,
          name: 'Student4',
          attended_group: 2
      },
      {
          id: 5,
          name: 'Student5',
          attended_group: 1
      }
  ],
  search: ''
}

function updateStudent(list, student){
  return list.map(item=> +item.id === +student.id ? student: item);
}

function createStudent(list,student){
  student.id= Date.now();
  return [...list, student];
}

export default function(state = initialState, { type, payload }) {
  switch (type){
    case ACTION_STUDENT_SAVE: 
    return {
      ...state,
      list: payload.id 
        ? updateStudent(state.list, payload) 
        : createStudent(state.list, payload)
    };
    case ACTION_STUDENT_SEARCH:
      return {
        ...state,
        search: payload
    };
    case ACTION_STUDENT_DELETE:
      return {
        ...state,
        list: state.list.filter(item => item.id !== payload)
    };
    default:
      return state;
  }
}