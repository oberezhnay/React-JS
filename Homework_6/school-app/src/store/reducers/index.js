import { combineReducers } from 'redux';
import groups from './groups_reducer';
import students from './students_reducer';
import modalVisibility from './modal_reducer';
import newItem from './modal_reducer';

export default combineReducers({
    groups: groups,
    students: students,
    modalVisibility: modalVisibility,
    newItem: newItem
});