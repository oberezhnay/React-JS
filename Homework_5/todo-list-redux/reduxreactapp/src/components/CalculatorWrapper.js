import { connect } from 'react-redux';
import Calculator from './Calculator';
// import { bindActionCreators } from 'redux';
import { increment, onNewTodoSave, onTodoDelete, onTodoUpdate, onTodoToggle, onTodoSelect, setVisibility } from '../store/actions';

function mapStateToProps(state) {
    return {
        value: state.value,
        list: state.list
    };
}

// function mapDispathToProps(dispatch) {
//     return {
//         inc: bindActionCreators(increment, dispatch)
//     };
// }

const mapDispathToProps = {
    inc: increment,
    // add: add,
    save: onNewTodoSave,
    del: onTodoDelete,
    update: onTodoUpdate,
    toggle: onTodoToggle,
    select: onTodoSelect,
    setVisibility: setVisibility
};

export default connect(mapStateToProps, mapDispathToProps)(Calculator);
