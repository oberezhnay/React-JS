export const ACTION_STUDENT_SAVE = 'ACTION_STUDENT_SAVE';
export function saveStudent(student) {
  return {
    type: ACTION_STUDENT_SAVE,
    payload: student
  };
}

export const ACTION_STUDENT_SEARCH = 'ACTION_STUDENT_SEARCH';
export function searchStudent(query) {
  return {
    type: ACTION_STUDENT_SEARCH,
    payload: query
  };
}

export const ACTION_STUDENT_DELETE = 'ACTION_STUDENT_DELETE';
export function onDeleteStudent(id) {
    return { 
      type: ACTION_STUDENT_DELETE, 
      payload: id 
    };
}