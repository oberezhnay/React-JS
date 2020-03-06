export const EDIT_ACTION = 'UPDATE_TODO';
export function onUpdate(changes) {
    return { type: EDIT_ACTION, payload: changes };
}

// export const SELECT_ACTION = 'SELECT_TODO';
// export function onTodoSelect(id) {
//     return { type: SELECT_ACTION, payload: id };
// }

export const SAVE_ACTION = 'SAVE_TODO';
export function onSave(changes) {
    return { type: SAVE_ACTION, payload: changes };
}

export const OPEN_MODAL_ACTION =  'OPEN_MODAL_MODAL';
export function openModal(id) {
  console.log('o')
    return { type: OPEN_MODAL_ACTION, payload: id  };
}

export const CLOSE_MODAL_ACTION =  'CLOSE_MODAL_MODAL';
export function closeModal() {
    return { type: CLOSE_MODAL_ACTION };
}