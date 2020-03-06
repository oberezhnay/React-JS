import React from 'react';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import StudentsList from './StudentsList';
import StudentForm from './StudentForm';
// import Modale from '../modal/Modal';
import '../groups/Groups.css';
import { openModal } from '../../store/actions/modal'

function Students({openModal}) {
const { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Students Module</h2>
      <Link to={`${url}/new`} className = 'add-btn' onClick={() => openModal()}>Add new student</Link>
      <Switch>
        <Route exect path={`${path}/`}>
          <StudentsList />
        </Route>
        <Route path={`${path}/:id`} render = { route => {
          return <StudentForm id={route.match.params.id} />;
          }}
        ></Route>
      </Switch>
    </div>
  )
}


const mapDispatchToProps = {
  openModal: openModal
}

export default connect(null, mapDispatchToProps)(Students)
