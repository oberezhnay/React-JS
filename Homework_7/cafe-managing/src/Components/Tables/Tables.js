import React, { useEffect } from 'react'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import TablesList from './TablesList';
import TableForm from './TableForm';
import { getTables } from '../../store/actions/tables'
import { connect } from 'react-redux';
import './Tables.css';

function Tables({ isLoading, getTables }) {
  const { path } = useRouteMatch();
  
  useEffect(() => {
    getTables();
  }, [])
  
    return (
      <div className='container'>
        <h2>Tables</h2>
        { isLoading ? 'LOADING':
        <Switch>
          <Route path={`${path}/`} exact>
            <TablesList />
          </Route>
          <Route path={`${path}/:id`} 
            render = { route => (
              <TableForm id={route.match.params.id} />
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
      isLoading: state.tables.isLoading
    };
  }
  
  
  const mapDispatchToProps = {
    getTables: getTables
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Tables);
