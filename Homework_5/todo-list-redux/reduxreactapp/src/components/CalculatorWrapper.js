import { connect } from 'react-redux';
import Calculator from './Calculator';
// import { bindActionCreators } from 'redux';
import { increment, onNewTodoSave, onTodoDelete, onTodoUpdate, onTodoToggle, onTodoSelect, setVisibility } from '../store/actions';

function mapStateToProps(state) {
    return {
        initialTodoState: state,
        newTodo: state,
        modalVisibility: state
    };
}

// function mapDispathToProps(dispatch) {
//     return {
//         inc: bindActionCreators(increment, dispatch)
//     };
// }

const mapDispathToProps = {
    save: onNewTodoSave,
    del: onTodoDelete,
    edit: onTodoUpdate,
    toggle: onTodoToggle,
    select: onTodoSelect,
    // setVisibility: setVisibility
};

export default connect(mapStateToProps, mapDispathToProps)(Calculator);
