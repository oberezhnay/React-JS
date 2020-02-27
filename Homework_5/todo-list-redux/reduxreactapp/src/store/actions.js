export const INCREMENT_ACTION = 'INCREMENT';
export function increment() {
    return { type: INCREMENT_ACTION };
}

// export const ADD_ACTION = 'ADD';
// export function add(val) {
//     return { type: ADD_ACTION, payload: val };
// }

export const ADD_ACTION = 'ADD_TODO';
export function onNewTodoSave(todo) {
    return { type: ADD_ACTION, payload: todo };
}

export const DELETE_ACTION = 'DELETE_TODO';
export function onTodoDelete(id) {
    return { type: DELETE_ACTION, payload: id };
}

export const TOGGLE_ACTION = 'TOGGLE_TODO';
export function onTodoToggle(id) {
    return { type: TOGGLE_ACTION, payload: id };
}

export const UPDATE_ACTION = 'UPDATE_TODO';
export function onTodoUpdate(todo) {
    return { type: UPDATE_ACTION, payload: todo };
}

export const SELECT_ACTION = 'SELECT_TODO';
export function onTodoSelect(id) {
    return { type: UPDATE_ACTION, payload: id };
}

export const VISIBILITIE_ACTION = 'VISIBILITIE_MODAL';
export function setVisibility() {
    return { type: UPDATE_ACTION };
}