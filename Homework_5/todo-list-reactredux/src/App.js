import React from 'react'
import TodoList from './components/TodoList/TodoList';
import TodoModal from './components/TodoModal/TodoModal';
import { connect } from 'react-redux';
import { openModal } from './store/actions'
import './App.css'

function App( onModal) {
return <> 
          <header className='todo-header'>ToDo List</header>
          <button className='newtodo-btn' onClick={() => onModal}>Add New ToDo</button>
          <TodoModal />
          <TodoList />
        </>
}

function mapStateToProps(state) {
  return {
    modalVisibility: !state.modalVisibility
  };
}

const mapDispatchToProps = {
  onModal: openModal
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

