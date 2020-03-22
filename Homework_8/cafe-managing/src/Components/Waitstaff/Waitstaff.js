import React, { useEffect } from 'react'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import WaitstaffList from './WaitstaffList';
import  WaitstaffForm from './WaitstaffForm';
import { getWaitstaff } from '../../store/actions/waitstaff'
import { connect } from 'react-redux';
import '../Tables/Tables.css';

function  Waitstaff({ isLoading, getWaitstaff }) {
  const { path } = useRouteMatch();
  
  useEffect(() => {
    getWaitstaff();
  }, [])
  
    return (
      <div className='container'>
        <h2>Waitstaff</h2>
        { isLoading ? 'LOADING':
        <Switch>
          <Route path={`${path}/`} exact>
            <WaitstaffList />
          </Route>
          <Route path={`${path}/:id`} 
            render = { route => (
              <WaitstaffForm id={route.match.params.id} />
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
      isLoading: state.waitstaff.isLoading
    };
  }
  
  const mapDispatchToProps = {
    getWaitstaff: getWaitstaff
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Waitstaff);

