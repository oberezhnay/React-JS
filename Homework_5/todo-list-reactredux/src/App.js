import React from 'react'
import TodoList from './components/TodoList/TodoList';
import TodoModal from './components/TodoModal/TodoModal';
import { connect } from 'react-redux';
import { openModal } from './store/actions'
import './App.css'

function App( {openModal}) {
return <> 
          <header className='todo-header'>ToDo List</header>
          <button className='newtodo-btn' onClick={() => openModal()}>Add New ToDo</button>
          <TodoModal />
          <TodoList />
        </>
}

const mapDispatchToProps = {
  openModal: openModal
}
export default connect(null, mapDispatchToProps)(App)

