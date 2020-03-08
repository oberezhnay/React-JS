import { combineReducers } from 'redux';
import groups from './groups_reducer';
import students from './students_reducer';

export default combineReducers({
    groups: groups,
    students: students
});