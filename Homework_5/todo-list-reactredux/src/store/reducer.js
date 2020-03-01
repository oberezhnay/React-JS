import {
  DELETE_ACTION,
  TOGGLE_ACTION,
  EDIT_ACTION,
  SAVE_ACTION,
  SELECT_ACTION,
  OPEN_MODAL_ACTION,
  CLOSE_MODAL_ACTION
} from './actions';

const initialState= {
  todos: [{
      "id": "1",
      "title": "Task #1",
      "isDone": false
  }, {
      "id": "2",
      "title": "Task #2",
      "isDone": true
  }, {
      "id": "3",
      "title": "Task #3",
      "isDone": true
  }, {
      "id": "5",
      "title": "Task #5",
      "isDone": true
  }, {
      "id": "27",
      "title": "task 4",
      "isDone": false
  }],
  newTodo: {
    title:'',
    isDone:false
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
      case DELETE_ACTION:
          return {
            ...state, 
            todos: state.todos.filter(todo => todo.id !== action.payload)
          };
      case TOGGLE_ACTION:
          return  {
            ...state, 
            todos: state.todos.map(item => 
              item.id !== action.payload 
              ? item 
              : { ...item, isDone: !item.isDone }
              )
          };
      case SELECT_ACTION:
          return {
            ...state, 
            modalVisibility: true, 
            newTodo: { 
              ...state.newTodo, 
              ...state.todos.find(item => 
                item.id === action.payload) 
              }
            };
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
          return { 
            ...state, 
            newTodo: action.payload 
              ? state.todos.find(item => item.id === action.payload)
              : {title:'new task', isDone: false}, 
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