import {
  // ADD_ACTION,
  DELETE_ACTION,
  TOGGLE_ACTION,
  EDIT_ACTION,
  SAVE_ACTION,
  SELECT_ACTION,
  OPEN_MODAL_ACTION,
  VISIBILITIE_ACTION
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

function createTodo(todos, text){
  return [
  ...todos,
  {
    id: Date.now(),
    title: text,
    isDone: false
  }
]
} 

function updateTodo(todos, todo){
  return todos.map(item=> item.id == todo.id ? todo:item )
} 

function onChangeTodo(newTodo, changes){
     return {
      ...newTodo,
      ...changes
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
      case DELETE_ACTION:
          return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)};
      case TOGGLE_ACTION:
          const todo = state.todos.find(item => item.id === action.payload);
          todo.isDone =! todo.isDone;
          return  {...state, todos: updateTodo(state.todos, todo) };
      case SELECT_ACTION:
          const selectedTodo = state.todos.find(item => item.id === action.payload);
          return {...state, modalVisibility: true, newTodo: selectedTodo };
      case EDIT_ACTION:
          const newTodo = onChangeTodo(state.newTodo, action.payload)
          return { ...state, todos: updateTodo(state.todos, newTodo) };
      case SAVE_ACTION:
          if (action.payload.id){
            return { ...state, todos: updateTodo(state.todos, action.payload), modalVisibility: !state.modalVisibility}; 
          } else 
            return { ...state, todos: createTodo(state.todos, action.payload), modalVisibility: !state.modalVisibility };
      case OPEN_MODAL_ACTION:
          return { ...state, modalVisibility: true };
      case VISIBILITIE_ACTION:
        return { ...state, modalVisibility: !state.modalVisibility };
        
      default:
          return state;
  }
}