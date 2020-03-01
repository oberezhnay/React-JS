export const DELETE_ACTION = 'DELETE_TODO';
export function onTodoDelete(id) {
    return { type: DELETE_ACTION, payload: id };
}

export const TOGGLE_ACTION = 'TOGGLE_TODO';
export function onTodoToggle(id) {
    return { type: TOGGLE_ACTION, payload: id };
}

export const EDIT_ACTION = 'UPDATE_TODO';
export function onTodoUpdate(changes) {
    return { type: EDIT_ACTION, payload: changes };
}

export const SELECT_ACTION = 'SELECT_TODO';
export function onTodoSelect(id) {
    return { type: SELECT_ACTION, payload: id };
}

export const SAVE_ACTION = 'SAVE_TODO';
export function onNewTodoSave(changes) {
    return { type: SAVE_ACTION, payload: changes };
}

export const VISIBILITIE_ACTION = 'VISIBILITIE_MODAL';
export function setVisibility() {
    return { type: VISIBILITIE_ACTION};
}

export const OPEN_MODAL_ACTION =  'OPEN_MODAL_MODAL';
export function openModal(id) {
    return { type: OPEN_MODAL_ACTION, payload: id  };
}

export const CLOSE_MODAL_ACTION =  'CLOSE_MODAL_MODAL';
export function closeModal() {
    return { type: CLOSE_MODAL_ACTION };
}