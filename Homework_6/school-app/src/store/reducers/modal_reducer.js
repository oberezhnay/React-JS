import {
  EDIT_ACTION,
  SAVE_ACTION,
  // SELECT_ACTION,
  OPEN_MODAL_ACTION,
  CLOSE_MODAL_ACTION
} from '../actions/modal';

const initialState= {
  newItem: {
    name:''
  },
  modalVisibility: false
};

function createTodo(todos, todo){
  todo.id = Date.now();
  return [
  ...todos, todo
];
}; 

function updateTodo(todos, todo){
  return todos.map(item=> item.id === todo.id ? todo:item )
}; 

export default function (state = initialState, action) {
  switch (action.type) {
      // case SELECT_ACTION:
      //     return {
      //       ...state, 
      //       modalVisibility: true, 
      //       newTodo: { 
      //         ...state.newTodo, 
      //         ...state.todos.find(item => 
      //           item.id === action.payload) 
      //         }
      //       };
      case EDIT_ACTION:
          return { 
            ...state, 
            newTodo: { 
              ...state.newTodo, 
              ...action.payload 
            }
          };
      case SAVE_ACTION:
            return { 
              ...state, 
              todos: action.payload.id 
                ? updateTodo(state.todos, action.payload) 
                : createTodo(state.todos, action.payload),
              modalVisibility: !state.modalVisibility
            };
      case OPEN_MODAL_ACTION:
        console.log(state.modalVisibility)
          return { 
            ...state, 
            newTodo: action.payload 
              ? state.todos.find(item => item.id === action.payload)
              : {name:'new smth'}, 
            modalVisibility: true };
      case CLOSE_MODAL_ACTION:
          return { 
            ...state, 
            newTodo: {title:'', isDone: false}, 
            modalVisibility: false 
          };       
      default:
          return state;
  }
}