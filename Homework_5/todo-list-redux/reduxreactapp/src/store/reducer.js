import {
    INCREMENT_ACTION,
    ADD_ACTION,
    DELETE_ACTION,
    TOGGLE_ACTION,
    UPDATE_ACTION,
    SELECT_ACTION,
    VISIBILITIE_ACTION
} from './actions';

const initialState = {
    value: 10,
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
        "id": "6",
        "title": "Task #6",
        "isDone": true
    }, {
        "id": "7",
        "title": "Task #7",
        "isDone": true
    }, {
        "id": "17",
        "title": "Task #17",
        "isDone": false
    }, {
        "id": "20",
        "title": "Task #20",
        "isDone": false
    }, {
        "id": "22",
        "title": "Task #22",
        "isDone": false
    }, {
        "id": "23",
        "title": "Task #23",
        "isDone": true
    }, {
        "id": "25",
        "title": "Task #25",
        "isDone": false
    }, {
        "id": "26",
        "title": "do do do do",
        "isDone": true
    }, {
        "id": "27",
        "title": "task 4",
        "isDone": false
    }],
    newTodo: {
        title: '',
        isDone: false
    },
    modalVisibility: false
};

export default function (state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
        case INCREMENT_ACTION:
            return {
                ...state, value: ++state.value
            };
        case ADD_ACTION:
            return {
                ...state, value: state.value + action.payload
            };
        case DELETE_ACTION:
            return {
                ...state, value: state.value + action.payload
            };
        case TOGGLE_ACTION:
            return {
                ...state, value: ++state.value
            };
        case UPDATE_ACTION:
            return {
                ...state, value: state.value + action.payload
            };
        case SELECT_ACTION:
            return {
                ...state, value: state.value + action.payload
            };
        case VISIBILITIE_ACTION:
            return {
                ...state, value: state.value + action.payload
            };    
        default:
            return state;
    }
}