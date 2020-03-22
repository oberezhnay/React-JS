import React from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import StudentsList from './StudentsList';
import StudentForm from './StudentForm';
import { connect } from 'react-redux';
import '../groups/Groups.css';

function Students({isLoading}) {
const { path } = useRouteMatch();

  return (
    <div className='container'>
      <h2>Students</h2>
      {isLoading ? 'LOADING':
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
      }
    </div>
  )
}

function mapStateToProps(state){
  return {
    isLoading: state.groups.isLoading
  };
}

export default connect(mapStateToProps, null)(Students);
