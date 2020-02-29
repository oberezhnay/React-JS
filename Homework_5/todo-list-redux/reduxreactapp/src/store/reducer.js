import {
    // INCREMENT_ACTION,
    ADD_ACTION,
    DELETE_ACTION,
    TOGGLE_ACTION,
    EDIT_ACTION,
    SELECT_ACTION,
    // VISIBILITIE_ACTION
} from './actions';

const initialTodoState = [{
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
    }];
// const newTodo = {
//     title: '',
//     isDone: false
// }
// const modalVisibility = false;

export default function (state = initialTodoState, action) {
    switch (action.type) {
        case ADD_ACTION:
            return [...state, { title: action.payload, isDone: false}];
        case DELETE_ACTION:
            return state.filter(todo => todo.id !== action.payload);
        case TOGGLE_ACTION:
            return state.find(todo => todo.id === action.payload) ? todo : {...todo, isDone: !todo.isDone };
        case SELECT_ACTION:

            return state.find(todo => todo.id === action.payload) ? todo : {...todo, isDone: !todo.isDone };
        case EDIT_ACTION:
            return [ ...state, { id: Date.now(), ...newTodo} ];
        // case SAVE_ACTION:
        //     return state.find(todo => todo.id === action.payload) ? todo : {...todo, isDone: !todo.isDone };   
        default:
            return state;
    }
}

// export default function (state = newTodo, action) {
//     switch (action.type) {
//         case EDIT_ACTION:
//             return { ...state, ...action.payload };
//         // case VISIBILITIE_ACTION:
//         //     return {
//         //         ...state, ...action.payload
//         //     };    
//         default:
//             return state;
//     }
// }

// export default function (state = modalVisibility, action) {
//     switch (action.type) {
//         case ADD_ACTION:
//             return state = true;
//         case SELECT_ACTION:
//             return state = true;
//         // case VISIBILITIE_ACTION:
//         //     return {
//         //         ...state, ...action.payload
//         //     };    
//         default:
//             return state;
//     }
// }