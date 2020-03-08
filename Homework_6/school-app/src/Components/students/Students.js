import React from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import StudentsList from './StudentsList';
import StudentForm from './StudentForm';
import '../groups/Groups.css';

function Students() {
const { path } = useRouteMatch();

  return (
    <div className='container'>
      <h2>Students</h2>
      <Switch>
        <Route path={`${path}/`} exact>
          <StudentsList />
        </Route>
        <Route 
          path={`${path}/:id`} 
          render = {route => (
            <StudentForm id={route.match.params.id} />
          )}
        ></Route>
        <Route path={`${path}/*`}>
          <Redirect to={`${path}/`} />
        </Route>
      </Switch>
    </div>
  )
}

export default Students;
