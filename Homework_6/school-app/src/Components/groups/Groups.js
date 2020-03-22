import React, { useEffect } from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import GroupsList from './GroupsList';
import GroupForm from './GroupForm';
import { getGroups } from '../../store/actions/groups'
import { connect } from 'react-redux';
// import api from '../../services/api'
import './Groups.css';

function Groups({ isLoading, getGroups }) {
const { path } = useRouteMatch();

useEffect(() => {
  getGroups();
}, [])

  return (
    <div className='container'>
      <h2>Groups</h2>
      { isLoading ? 'LOADING':
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
      }
    </div>
  );
}

function mapStateToProps(state){
  return {
    isLoading: state.groups.isLoading
  };
}


const mapDispatchToProps = {
  getGroups: getGroups
};

export default connect(mapStateToProps, mapDispatchToProps)(Groups);