import React from 'react'
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom'
import GroupsList from './GroupsList';
import GroupForm from './GroupForm';
import './Groups.css'

function Groups() {
const { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Groups Module</h2>
      <Link to={`${url}/new`} className = 'add-btn'>Add new group</Link>
      <Switch>
        <Route exect path={`${path}/`}>
          <GroupsList />
        </Route>
        <Route path={`${path}/:id`} render = { route => {
          return <GroupForm id={route.match.params.id} />;
          }}
        ></Route>
      </Switch>
    </div>
  )
}

export default Groups
