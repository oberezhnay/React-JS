import React from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import GroupsList from './GroupsList';
import GroupForm from './GroupForm';
import './Groups.css';

function Groups() {
const { path } = useRouteMatch();

  return (
    <div>
      <h2>Groups</h2>
      <Switch>
        <Route path={`${path}/`} exact>
          <GroupsList />
        </Route>
        <Route path={`${path}/:id`} 
          render = { route => (
            <GroupForm id={route.match.params.id} />
          )}
        ></Route>
        <Route path={`${path}/*`}>
          <Redirect to={`${path}/`} />
        </Route>
      </Switch>
    </div>
  );
}

export default Groups;
